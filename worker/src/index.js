// Boondock Walker — Brand Triage Worker.
//
// POST handler that:
//   1. Validates the form payload from /brand-triage.html
//   2. Calls Anthropic to generate the personalized guidance
//   3. Renders a PDF report with jsPDF (mirrors the client-side layout)
//   4. Emails the PDF to the visitor (and BCCs an internal mailbox if set)
//   5. Returns { guidance } so the page can render the full report on screen
//
// Secrets expected (set via `wrangler secret put NAME`):
//   ANTHROPIC_API_KEY   — sk-ant-…
//   RESEND_API_KEY      — re_…
//   BCC_ADDRESS         — optional, e.g. hello@boondockwalker.com
//
// Vars (in wrangler.toml):
//   ALLOWED_ORIGINS     — comma-separated list of permitted Origin headers
//   EMAIL_FROM          — From header for the report email
//   EMAIL_SUBJECT       — Subject line

import { jsPDF } from "jspdf";

const ANTHROPIC_MODEL = "claude-sonnet-4-5";
const ANTHROPIC_VERSION = "2023-06-01";

/* -----------------------------------------------------------------
   System prompt — keeps the Anthropic response on-voice + structured
   so the client-side renderer (## headers + paragraphs) lays out
   cleanly.
   ----------------------------------------------------------------- */
const SYSTEM_PROMPT = `You are a senior brand strategist at Boondock Walker — a brand and demand bureau in Cleveland.

A founder or revenue leader has filled out our Brand Triage intake. You will receive their name, company, industry, the up-to-five ranked challenges they're facing, and any additional context they shared.

Write them a personalized triage report. The voice is sophisticated yet warm, direct, opinionated — never decorative. Specific, never generic. Use their name in the opening paragraph. Reference their specific challenges by what they actually said, not just by category label.

Format the report in markdown with the following sections, in order:

## Reading the symptoms
Two or three short paragraphs. Diagnose what their ranked challenges suggest is actually going on underneath. Connect the dots between the challenges they listed — usually they're not five separate problems, they're one or two root issues showing up in different surfaces. Be honest about what looks straightforward and what looks like deeper work.

## Strategic priorities
A numbered list of three priorities, in order of leverage. Format each as:
1. **Short imperative title** — One or two sentences explaining what to do first and why it matters most.
2. **Short imperative title** — Same.
3. **Short imperative title** — Same.

## Where to start this quarter
One paragraph. Concrete first move they could make in the next 30 days — specific enough to be actionable, not so prescriptive that it requires our involvement to execute.

## How Boondock Walker would help
One short paragraph. Honest framing of where outside help adds value vs. where the work is theirs to do. Don't oversell.

End with a one-line close, italic, no header.

Rules:
- Use "##" for section headers exactly as written above.
- Use "**bold**" for the priority titles in the numbered list.
- No bullet points outside the numbered priorities list.
- No emojis.
- 350–500 words total. Tight.
- Never claim to know data you weren't given.
- If the visitor's "additional context" sharpens the read, weave it in; don't just quote it back.`;

const corsHeaders = (origin, allowedOrigins) => {
  const allowed = (allowedOrigins || "").split(",").map(s => s.trim()).filter(Boolean);
  const allow = allowed.includes(origin) ? origin : allowed[0] || "*";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
};

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin, env.ALLOWED_ORIGINS);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, cors);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400, cors);
    }

    const { name, email, company, industry, phone, challenges, customConcern } = payload || {};
    if (!name || !email || !company || !industry || !Array.isArray(challenges) || challenges.length === 0) {
      return json({ error: "Missing required fields" }, 400, cors);
    }

    // 1. Anthropic — generate the guidance.
    let guidance;
    try {
      guidance = await generateGuidance(env, { name, company, industry, challenges, customConcern });
    } catch (err) {
      console.error("Anthropic failure:", err);
      return json({ error: "Could not generate guidance.", detail: err.message }, 502, cors);
    }

    // 2. PDF — render the report (best-effort; never blocks the on-screen render).
    let pdfBase64 = null;
    try {
      pdfBase64 = renderPDF({ name, company, challenges, customConcern, guidance });
    } catch (err) {
      console.error("PDF render failure:", err);
    }

    // 3. Email — best-effort; never blocks the on-screen render.
    let emailed = false;
    if (env.RESEND_API_KEY && pdfBase64) {
      try {
        await sendEmail(env, { to: email, name, company, pdfBase64, guidance });
        emailed = true;
      } catch (err) {
        console.error("Email send failure:", err);
      }
    }

    return json({ guidance, emailed }, 200, cors);
  },
};

function json(obj, status, extraHeaders) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...extraHeaders },
  });
}

/* -----------------------------------------------------------------
   Anthropic call
   ----------------------------------------------------------------- */
async function generateGuidance(env, { name, company, industry, challenges, customConcern }) {
  if (!env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY not configured");

  const challengeList = challenges
    .map((c, i) => `${i + 1}. ${c.text}${c.category ? ` (category: ${c.category})` : ""}`)
    .join("\n");

  const userMessage = [
    `Visitor: ${name}`,
    `Company: ${company}`,
    `Industry: ${industry}`,
    ``,
    `Top challenges, in their order of priority:`,
    challengeList,
    customConcern ? `\nAdditional context they shared:\n"${customConcern}"` : "",
    `\nWrite the personalized Brand Triage report.`,
  ].join("\n");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": env.ANTHROPIC_API_KEY,
      "anthropic-version": ANTHROPIC_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Anthropic ${res.status}: ${errBody.slice(0, 300)}`);
  }
  const data = await res.json();
  const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("\n");
  if (!text.trim()) throw new Error("Anthropic returned empty content");
  return text.trim();
}

/* -----------------------------------------------------------------
   PDF — server-side render via jsPDF. Mirrors the client-side layout
   (the on-screen "Download PDF" button does the same thing in the
   browser). Returns base64 for email attachment.
   ----------------------------------------------------------------- */
function renderPDF({ name, company, challenges, customConcern, guidance }) {
  const normalize = (s) =>
    (s || "")
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/[–—]/g, "-")
      .replace(/…/g, "...")
      .replace(/ /g, " ")
      .replace(/[​-‍﻿]/g, "");

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - margin * 2;
  let y = margin;
  const lineH = 1.1;

  const checkBreak = (needed) => {
    if (y + needed > pageHeight - 30) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  // Title
  doc.setFontSize(14).setFont("helvetica", "normal").setTextColor(40, 40, 40);
  doc.text("Brand Triage Report", margin, y); y += 8;
  doc.setFontSize(11).setTextColor(80, 80, 80);
  doc.text(`For: ${normalize(name)}, ${normalize(company)}`, margin, y); y += 15;

  // Top challenges card
  const cleanedChallenges = (challenges || []).map((c, i) => `${i + 1}. ${normalize(c.text || "")}`);
  const customConcernLines = customConcern
    ? doc.splitTextToSize(`"${normalize(customConcern)}"`, maxWidth - 10)
    : [];
  let boxH = 12 + cleanedChallenges.length * 9;
  if (customConcern) boxH += 15 + customConcernLines.length * 6;
  checkBreak(boxH);
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(margin, y, maxWidth, boxH, 3, 3, "F");
  y += 8;
  doc.setFontSize(9).setFont("helvetica", "bold").setTextColor(150, 150, 150);
  doc.text("YOUR TOP CHALLENGES", margin + 5, y); y += 9;
  doc.setFontSize(11).setFont("helvetica", "normal").setTextColor(40, 40, 40);
  for (const c of cleanedChallenges) { doc.text(c, margin + 5, y); y += 8; }
  if (customConcern) {
    y += 6;
    doc.setFontSize(9).setFont("helvetica", "bold").setTextColor(150, 150, 150);
    doc.text("ADDITIONAL CONTEXT", margin + 5, y); y += 8;
    doc.setFontSize(10).setFont("helvetica", "italic").setTextColor(80, 80, 80);
    for (const line of customConcernLines) { doc.text(line, margin + 5, y); y += 6; }
  }
  y += 10;

  // Guidance sections — parse the markdown the model produced.
  const sections = [];
  for (const raw of guidance.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("## ")) sections.push({ type: "header", text: normalize(line.slice(3)) });
    else if (line.startsWith("**") && line.endsWith("**") && line.length > 4)
      sections.push({ type: "header", text: normalize(line.replace(/\*\*/g, "")) });
    else sections.push({ type: "text", text: normalize(line) });
  }

  let currentSection = "";
  for (const s of sections) {
    if (s.type === "header") {
      currentSection = s.text.toUpperCase();
      checkBreak(20); y += 6;
      doc.setFontSize(11).setFont("helvetica", "bold").setTextColor(196, 74, 42);
      doc.text(s.text.toUpperCase(), margin, y); y += 10;
      continue;
    }
    // Strategic Priorities — bold lead-in
    const numbered = s.text.match(/^(\d+\.\s*)(\*\*)?([^—\-]+)(\*\*)?([\s]*[—\-][\s]*)(.*)$/);
    if (currentSection.startsWith("STRATEGIC PRIORITIES") && numbered) {
      checkBreak(15);
      const lead = numbered[1] + numbered[3].trim();
      const rest = " — " + (numbered[6] || "");
      doc.setFontSize(10).setFont("helvetica", "bold").setTextColor(40, 40, 40);
      const leadW = doc.getTextWidth(lead);
      doc.text(lead, margin, y);
      doc.setFont("helvetica", "normal");
      const remaining = maxWidth - leadW;
      if (doc.getTextWidth(rest) <= remaining) {
        doc.text(rest, margin + leadW, y);
        y += 7 * lineH;
      } else {
        doc.text(" — ", margin + leadW, y);
        y += 7 * lineH;
        const wrap = doc.splitTextToSize((numbered[6] || "").trim(), maxWidth - 10);
        for (const ln of wrap) { checkBreak(8); doc.text(ln, margin + 10, y); y += 6 * lineH; }
      }
      y += 5;
    } else {
      doc.setFontSize(10).setFont("helvetica", "normal").setTextColor(40, 40, 40);
      const wrap = doc.splitTextToSize(s.text.replace(/\*\*(.+?)\*\*/g, "$1"), maxWidth);
      checkBreak(wrap.length * 7);
      for (const ln of wrap) { checkBreak(8); doc.text(ln, margin, y); y += 6 * lineH; }
      y += 5;
    }
  }

  // Footer CTA
  checkBreak(40); y += 10;
  doc.setDrawColor(200, 200, 200); doc.line(margin, y, pageWidth - margin, y); y += 10;
  doc.setFontSize(11).setFont("helvetica", "normal").setTextColor(100, 100, 100);
  doc.text("Ready to take the next step?", pageWidth / 2, y, { align: "center" }); y += 8;
  doc.setFontSize(12).setFont("helvetica", "bold").setTextColor(196, 74, 42);
  doc.text("boondockwalker.com", pageWidth / 2, y, { align: "center" });

  // jsPDF in Workers — output as ArrayBuffer then base64.
  const ab = doc.output("arraybuffer");
  return arrayBufferToBase64(ab);
}

function arrayBufferToBase64(buf) {
  const bytes = new Uint8Array(buf);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

/* -----------------------------------------------------------------
   Email via Resend — PDF attached, HTML body summarizes the read.
   ----------------------------------------------------------------- */
async function sendEmail(env, { to, name, company, pdfBase64, guidance }) {
  const filenameSlug = (company || "report").replace(/[^a-zA-Z0-9]/g, "-");
  const filename = `Brand-Triage-Report-${filenameSlug}.pdf`;

  // Lightweight HTML rendering of the first ~3 paragraphs as a preview;
  // the full report is in the PDF + on screen.
  const preview = guidance
    .split("\n")
    .filter(l => l.trim())
    .slice(0, 4)
    .map(l => l.replace(/^## /, "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"))
    .map(l => `<p style="font-family:Georgia,serif;font-size:15px;line-height:1.55;color:#14100C;margin:0 0 14px;">${escapeHtml(l)}</p>`)
    .join("");

  const html = `
    <div style="font-family:Georgia,serif;color:#14100C;max-width:560px;margin:0 auto;padding:24px;">
      <p style="font-family:'Space Grotesk',sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#C44A2A;font-weight:700;margin:0 0 12px;">Brand Triage · Report</p>
      <h1 style="font-family:Georgia,serif;font-style:italic;font-weight:400;font-size:32px;line-height:1.05;margin:0 0 18px;">Your personalized read.</h1>
      <p style="font-family:Georgia,serif;font-size:16px;line-height:1.55;color:#14100C;margin:0 0 18px;">${escapeHtml(name)}, the full report is attached as a PDF. A short preview is below; everything is also on the page where you submitted the intake.</p>
      <hr style="border:none;border-top:1px solid rgba(20,16,12,0.15);margin:24px 0;"/>
      ${preview}
      <hr style="border:none;border-top:1px solid rgba(20,16,12,0.15);margin:24px 0;"/>
      <p style="font-family:Georgia,serif;font-size:14px;line-height:1.55;color:rgba(20,16,12,0.72);margin:0 0 8px;">Want to talk it through? Reply to this email — you're talking to a person.</p>
      <p style="font-family:'Space Grotesk',sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(20,16,12,0.55);font-weight:700;margin:18px 0 0;">Boondock Walker · Cleveland</p>
    </div>
  `;

  const body = {
    from: env.EMAIL_FROM,
    to: [to],
    subject: env.EMAIL_SUBJECT || "Your Brand Triage Report",
    html,
    attachments: [{ filename, content: pdfBase64 }],
  };
  if (env.BCC_ADDRESS) body.bcc = [env.BCC_ADDRESS];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 300)}`);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
