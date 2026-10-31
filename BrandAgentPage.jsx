/* global React, BW, SiteHeader, V3Footer */
/* Brand Agent — standalone page.
   Sections, in order:
     §01 Hero (ink)
     §02 The problem (chalk50 — short two-paragraph prose)
     §03 What's in the build (chalk — 5 cards)
     §04 The team of agents (chalk50 — 8 role cards)
     §05 It stays current (plum)
     §06 Extend it · Lab (forest, id="extend")
     §07 Fit / not fit (chalk50 — two columns)
     §08 FAQ (chalk50 — <details> accordion)
     §09 Closing CTA (clay — mailto)

   Reuses SiteHeader + V3Footer. Hero uses the ink + paper-grain treatment
   from CapHero so Brand Agent reads as a sibling of Capabilities, not a
   separate design.

   CTAs across the page use a single mailto target with a prefilled subject
   so inquiries land in the right thread. The ?reason=brand-agent query
   param from the spec would plug into a real inquiry form; one doesn't
   exist yet (see the audit note in the PR), so the subject carries the
   same signal for now.
*/

const BA_INQUIRY_HREF = "contact.html?reason=brand-agent";

/* ────────────────────────────────────────────────────────────────────
   §01 · HERO
   ──────────────────────────────────────────────────────────────────── */
function BAHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section style={{ position: "relative", background: BW.ink, color: BW.chalk50, fontFamily: BW.ffG, overflow: "hidden", borderBottom: `1.5px solid ${BW.ink}` }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.025) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "screen", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", maxWidth: 1440, margin: "0 auto", opacity: 0.5 }}>
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} style={{ borderRight: `1px solid rgba(244,236,218,0.06)`, gridColumn: i + 1 }} />
        ))}
      </div>

      <SiteHeader current="Capabilities" tone="dark" />

      <div style={{ position: "relative", padding: "clamp(48px, 8vw, 96px) clamp(20px, 5vw, 64px) clamp(56px, 8vw, 96px)", maxWidth: 1440, margin: "0 auto", zIndex: 3 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 36, flexWrap: "wrap" }}>
          <span>Brand</span>
          <span style={{ width: 28, height: 1, background: BW.brass }} />
          <span>Brand Agent</span>
        </div>

        <h1 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(56px, 12vw, 156px)", lineHeight: 0.88, letterSpacing: "-0.04em", margin: 0, color: BW.chalk50, maxWidth: 1180 }}>
          Your brand,<br />
          <em style={{ color: BW.clay300, fontWeight: 400, fontStyle: "italic" }}>on call.</em>
        </h1>

        <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 2.4vw, 22px)", lineHeight: 1.5, color: BW.chalk2, maxWidth: "52ch", margin: "44px 0 0" }}>
          An AI agent that knows your brand the way your best people do — and never has a day off.
        </p>

        <div style={{ marginTop: 44, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
          <a href={BA_INQUIRY_HREF} style={{ background: BW.clay, color: BW.chalk50, padding: "14px 24px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>
            Start an inquiry →
          </a>
          <a href="#build" style={{ background: "transparent", color: BW.chalk50, padding: "14px 24px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", border: `1.5px solid rgba(244,236,218,0.45)` }}>
            See what&rsquo;s in the build →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   §02 · THE PROBLEM
   ──────────────────────────────────────────────────────────────────── */
function BAProblem() {
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 32 }}>
          <span>§01</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>The problem</span>
        </div>
        <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(19px, 2.4vw, 24px)", lineHeight: 1.55, color: BW.ink, margin: "0 0 1.1em" }}>
          Most brand foundations live in a deck. The deck wins the presentation and then sits in a folder while the actual work — the email, the sales deck, the support reply, the LinkedIn post — gets written from memory. Every one of those is a small drift.
        </p>
        <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(19px, 2.4vw, 24px)", lineHeight: 1.55, color: BW.ink2, margin: 0 }}>
          Brand Agent puts the foundation where the work happens. It answers in your voice, holds your positioning, knows what you say and what you don&rsquo;t, and gives every person on the team the same brand sense your founder has.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   §03 · WHAT'S IN THE BUILD (5 cards)
   ──────────────────────────────────────────────────────────────────── */
const BA_BUILD = [
  { n: "01", t: "Foundation, encoded",   body: (<>We run your brand foundation through <a href="vesper.html" style={{ color: "inherit", textDecoration: "none", borderBottom: `1px solid currentColor` }}>Vesper</a> — our AI-guided brand foundation builder — to generate the agent’s core: voice, story, tenets, positioning, audience, and product language.</>) },
  { n: "02", t: "Knowledge curation",    body: "We add what the foundation doesn’t capture: product detail, proof points, case language, objections, competitive framing, the things only your team knows." },
  { n: "03", t: "Voice calibration",     body: "Senior principals test and tune the agent against real tasks until it sounds like you on a good day, not a template." },
  { n: "04", t: "Deployment",            body: "Set up and configured on up to two platforms your team already uses." },
  { n: "05", t: "Team training",         body: "Working sessions so your people know how to use it, when to trust it, and when to override it." },
];

function BABuild() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1100px)");
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(5, 1fr)";
  return (
    <section id="build" style={{ background: BW.chalk, color: BW.ink, padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 24 }}>
          <span>§02</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>What&rsquo;s in the build</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.03em", margin: "0 0 56px", color: BW.ink, maxWidth: 900 }}>
          Five pieces. <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>Shipped together.</em>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 20 }}>
          {BA_BUILD.map((c) => (
            <div key={c.n} style={{ background: BW.chalk50, border: `1px solid ${BW.ink}`, padding: "28px 24px 32px", display: "flex", flexDirection: "column", gap: 14, minHeight: 240 }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700 }}>{c.n}</div>
              <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 2.2vw, 26px)", lineHeight: 1.1, letterSpacing: "-0.015em", color: BW.ink }}>{c.t}</div>
              <p style={{ fontFamily: BW.ffSerif, fontSize: 15, lineHeight: 1.55, color: BW.ink2, margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   §04 · THE TEAM OF AGENTS
   ──────────────────────────────────────────────────────────────────── */
const BA_TEAM = [
  { k: "01", role: "Brand strategist",            tag: "Brand",  body: "Keeps every output honest to your positioning, tenets, and audience. Flags the moments where a brief would quietly push the brand off-brief." },
  { k: "02", role: "Research analyst",            tag: "Brand",  body: "Pulls competitive context, customer language, and category signals so the rest of the team isn't working from memory or guesswork." },
  { k: "03", role: "Content manager & writer",    tag: "Brand",  body: "Drafts emails, posts, pages, and sales enablement in your voice. Owns the editorial pipeline so nothing ships without a careful pass." },
  { k: "04", role: "Design director",             tag: "Brand",  body: "Holds the identity system — the way the brand looks, lays out, and sounds visually — so every surface the agent produces still reads as yours." },
  { k: "05", role: "Advertising planner",         tag: "Demand", body: "Shapes paid campaigns from brief to copy to channel. Reads the brand, writes the ad, and picks a hook that lands with the audience it's for." },
  { k: "06", role: "SEO & AI-search specialist",  tag: "Demand", body: "Writes for the searcher and the LLM at the same time. Keeps you findable where buyers actually look now — Google, ChatGPT, Perplexity, and the rest." },
  { k: "07", role: "Nurture & lifecycle operator", tag: "Demand", body: "Owns the stage-by-stage choreography — triggers, sequences, segmentation — so leads warm toward a conversation instead of cooling off in silence." },
  { k: "08", role: "Sales & ABM specialist",      tag: "Demand", body: "Preps account intel, outbound language, and talk tracks for named-account motions. Hands the rep what they need before the meeting, not after it." },
];

function BATeam() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1100px)");
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)";
  const tagColor = (t) => (t === "Brand" ? BW.clay : BW.plum);
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 24 }}>
          <span>§03</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>The team</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.03em", margin: "0 0 24px", color: BW.ink, maxWidth: 1000 }}>
          You&rsquo;re not hiring one agent. <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>You&rsquo;re hiring a team.</em>
        </h2>
        <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 2vw, 20px)", lineHeight: 1.55, color: BW.ink2, margin: "0 0 48px", maxWidth: 820 }}>
          A brand agent isn&rsquo;t a chatbot with a persona bolted on. Underneath, it&rsquo;s a small roster of specialist agents — one for each job a senior team would normally cover — talking to each other and to the humans who use them. One drafts; another checks it against positioning; a third keeps the SEO and AI-search angles in view; a fourth sanity-checks the campaign framing. You get senior output because senior work was done by each specialist in the stack.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 20 }}>
          {BA_TEAM.map((m) => (
            <div key={m.k} style={{ background: BW.chalk, border: `1px solid ${BW.ink}`, padding: "26px 22px 28px", display: "flex", flexDirection: "column", gap: 12, minHeight: 240 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700 }}>{m.k}</span>
                <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: tagColor(m.tag), fontWeight: 700, padding: "4px 10px", border: `1px solid ${tagColor(m.tag)}`, borderRadius: 999 }}>{m.tag}</span>
              </div>
              <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(20px, 2vw, 24px)", lineHeight: 1.1, letterSpacing: "-0.015em", color: BW.ink }}>{m.role}</div>
              <p style={{ fontFamily: BW.ffSerif, fontSize: 14.5, lineHeight: 1.55, color: BW.ink2, margin: 0 }}>{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   §05 · IT STAYS CURRENT
   ──────────────────────────────────────────────────────────────────── */
function BAContinuity() {
  return (
    <section style={{ background: BW.plum, color: BW.chalk50, padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.08) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 28 }}>
          <span>§04</span>
          <span style={{ width: 28, height: 1, background: BW.brass }} />
          <span>Continuity</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.03em", margin: "0 0 32px", color: BW.chalk50, maxWidth: 920 }}>
          A brand agent is only as good <em style={{ color: BW.brass, fontStyle: "italic", fontWeight: 400 }}>as its last update.</em>
        </h2>
        <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(18px, 2.3vw, 22px)", lineHeight: 1.55, color: BW.chalk2, margin: 0, maxWidth: 820 }}>
          Brand Agent is maintained on a retainer, not shipped and forgotten. Quarterly refreshes, new knowledge ingestion as products and messaging change, platform updates, and a usage review so we can see what your team actually asks it and sharpen the answers. If the agent stops being maintained, it keeps working — it just stops learning.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   §06 · EXTEND IT (Lab)
   ──────────────────────────────────────────────────────────────────── */
function BAExtend() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const items = [
    "Additional platform deployments",
    "Role-specific variants: sales, support, social, internal comms",
    "Integrations with your CRM, CMS, help desk, or sales tools",
    "Custom workflows and multi-agent setups",
  ];
  return (
    <section id="extend" style={{ background: BW.forest, color: BW.chalk50, padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.04) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "screen", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr", gap: isMobile ? 40 : 72, alignItems: "start" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 28 }}>
            <span>§05</span>
            <span style={{ width: 28, height: 1, background: BW.brass }} />
            <span>Extend it · Lab</span>
          </div>
          <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.03em", margin: "0 0 24px", color: BW.chalk50 }}>
            Built to <em style={{ color: BW.brass, fontStyle: "italic", fontWeight: 400 }}>grow with you.</em>
          </h2>
          <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 2.2vw, 20px)", lineHeight: 1.55, color: BW.chalk2, margin: "0 0 32px" }}>
            Brand Agent is the starting point. Through <strong style={{ color: BW.chalk50, fontWeight: 600 }}>Lab</strong>, we extend it into your systems and your roles.
          </p>
          <a href="lab.html" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: BW.brass, color: BW.ink, padding: "14px 24px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>
            Explore Lab →
          </a>
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 0, borderTop: `1px solid rgba(244,236,218,0.22)` }}>
          {items.map((it) => (
            <li key={it} style={{ display: "flex", alignItems: "baseline", gap: 16, padding: "18px 0", borderBottom: `1px solid rgba(244,236,218,0.22)`, fontFamily: BW.ffSerif, fontSize: "clamp(17px, 2.1vw, 19px)", lineHeight: 1.45, color: BW.chalk50 }}>
              <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", color: BW.brass, fontWeight: 700, paddingTop: 2 }}>—</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   §07 · FIT / NOT FIT
   ──────────────────────────────────────────────────────────────────── */
function BAFit() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 24 }}>
          <span>§06</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>Fit check</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.03em", margin: "0 0 56px", color: BW.ink, maxWidth: 900 }}>
          Who it&rsquo;s for, <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>and who it isn&rsquo;t.</em>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 56 }}>
          <div>
            <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.forest, fontWeight: 700, marginBottom: 18 }}>A fit if</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14, fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.5, color: BW.ink }}>
              {["Your brand already does real work.",
                "You have a team producing content, answers, and decisions daily.",
                "Consistency is costing you time or trust."
              ].map((t) => (
                <li key={t} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: BW.ffM, fontSize: 11, color: BW.forest, fontWeight: 700, paddingTop: 2 }}>+</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 18 }}>Not a fit if</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14, fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.5, color: BW.ink }}>
              {["You don’t have a brand foundation yet — start with Brand.",
                "You want a generic chatbot.",
                "You’re looking for a self-serve tool — that’s what Vesper is for."
              ].map((t) => (
                <li key={t} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: BW.ffM, fontSize: 11, color: BW.clay, fontWeight: 700, paddingTop: 2 }}>−</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   §08 · FAQ (native accordion)
   ──────────────────────────────────────────────────────────────────── */
const BA_FAQ = [
  { q: "Is this a chatbot?", a: "No. It’s a working brand system in agent form. It knows your positioning, voice, and language, and it’s calibrated by senior people until it holds up on real tasks." },
  { q: "What does it run on?", a: "The platforms your team already uses. We deploy on up to two in the build and add more through Lab." },
  { q: "Do we need a brand foundation first?", a: "Yes. If you don’t have one, the Brand engagement builds it and the agent comes out the other end." },
  { q: "What’s Vesper?", a: "Our tool for encoding a brand foundation into a form AI can use. It generates the agent’s core; our team does everything after that." },
  { q: "What happens if we stop the retainer?", a: "The agent keeps working on the last version. It stops receiving refreshes and new knowledge." },
  { q: "How do we start?", a: "An inquiry. We’ll look at your foundation, what your team produces, and where the drift is, and scope from there." },
];

function BAFaq() {
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <style>{`
        .ba-faq summary { list-style: none; cursor: pointer; }
        .ba-faq summary::-webkit-details-marker { display: none; }
        .ba-faq summary::after {
          content: "+"; margin-left: auto; font-family: ${BW.ffM};
          font-size: 20px; font-weight: 700; color: ${BW.clay};
          transition: transform 0.18s ease; line-height: 1;
        }
        .ba-faq details[open] > summary::after { content: "−"; }
        .ba-faq details { border-bottom: 1px solid ${BW.ruleL}; }
        .ba-faq details:first-of-type { border-top: 1px solid ${BW.ruleL}; }
      `}</style>
      <div style={{ maxWidth: 880, margin: "0 auto" }} className="ba-faq">
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 24 }}>
          <span>§07</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>Common questions</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 64px)", lineHeight: 0.95, letterSpacing: "-0.03em", margin: "0 0 48px", color: BW.ink }}>
          FAQ.
        </h2>
        {BA_FAQ.map((f, i) => (
          <details key={i}>
            <summary style={{ display: "flex", alignItems: "center", gap: 16, padding: "22px 0", fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 2.6vw, 28px)", lineHeight: 1.2, letterSpacing: "-0.015em", color: BW.ink }}>
              <span style={{ flex: 1 }}>{f.q}</span>
            </summary>
            <div style={{ padding: "0 0 24px", fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.55, color: BW.ink2, maxWidth: "60ch" }}>
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   §08.5 · RELATED READING
   Thin strip between FAQ and closing CTA. Links the Field Notes post
   whose argument the whole page extends — "Most brand foundations
   fail on a Tuesday."
   ──────────────────────────────────────────────────────────────────── */
function BARelated() {
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(40px, 6vw, 72px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 980, margin: "0 auto", display: "flex", alignItems: "baseline", gap: 20, flexWrap: "wrap", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 20, flexWrap: "wrap" }}>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700 }}>Related reading</span>
          <a href="note.html?slug=brand-foundations-fail-tuesday" style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(20px, 2.4vw, 26px)", lineHeight: 1.2, letterSpacing: "-0.015em", color: BW.ink, textDecoration: "none", borderBottom: `1px solid ${BW.clay}`, paddingBottom: 2 }}>
            Most brand foundations fail on a Tuesday. →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   §09 · CLOSING CTA
   ──────────────────────────────────────────────────────────────────── */
function BACTA() {
  return (
    <section style={{ background: BW.clay, color: BW.chalk50, padding: "clamp(72px, 12vw, 140px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.06) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 700, marginBottom: 36, flexWrap: "wrap" }}>
          <span>§08</span>
          <span style={{ width: 28, height: 1, background: BW.chalk2 }} />
          <span>Start</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(56px, 13vw, 124px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.9, margin: "0 0 40px", color: BW.chalk50, maxWidth: 1200 }}>
          Put your brand <em style={{ color: BW.ink, fontStyle: "italic", fontWeight: 400 }}>to work.</em>
        </h2>
        <a href={BA_INQUIRY_HREF} style={{ background: BW.ink, color: BW.chalk50, padding: "14px 24px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
          Start an inquiry →
        </a>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   App shell — composes the whole page
   ──────────────────────────────────────────────────────────────────── */
function BrandAgentPage() {
  return (
    <div>
      <BAHero />
      <BAProblem />
      <BABuild />
      <BATeam />
      <BAContinuity />
      <BAExtend />
      <BAFit />
      <BAFaq />
      <BARelated />
      <BACTA />
      <V3Footer />
    </div>
  );
}

window.BrandAgentPage = BrandAgentPage;
