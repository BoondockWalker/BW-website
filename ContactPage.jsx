/* global React, BW */
/* Contact page — masthead + lead-gen form + sidebar.

   The form posts to Formspree (free tier, ~50 submissions/mo — sufficient
   for a bureau's inbound rate). Swap CONTACT_FORM_ENDPOINT below with the
   real endpoint once the Formspree form is created.

   Progressive enhancement: the form's `action` and `method` mean it works
   without JS (Formspree returns its own thank-you page). With JS, we AJAX-
   submit and replace the form inline with a thank-you state so visitors
   never leave the page.

   Spam handling: a honeypot field named `_gotcha` — Formspree drops any
   submission where that field is non-empty. Bots fill hidden fields;
   humans don't see them.
*/

/* ────────────────────────────────────────────────────────────────────
   ⚠  CONFIG — swap this with the real Formspree endpoint.
   Format:  https://formspree.io/f/xxxxxxxx
   Create at https://formspree.io/forms/new (free tier).
   ──────────────────────────────────────────────────────────────────── */
const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID";

const PRACTICES = [
  { key: "brand",  label: "Brand",  hint: "Foundation, identity, voice, positioning."  },
  { key: "demand", label: "Demand", hint: "Content, campaigns, lifecycle, pipeline."   },
  { key: "lab",    label: "Lab · AI", hint: "Applied AI, custom tools, prototypes."    },
];

const BUDGETS = [
  "Not sure yet — help me think about it",
  "Under $25k",
  "$25k – $75k",
  "$75k – $200k",
  "$200k+",
  "Retainer / ongoing engagement",
];

const TIMELINES = [
  "Exploring — no fixed timeline",
  "Within 30 days",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
];

/* ────────────────────────────────────────────────────────────────────
   §01 · MASTHEAD
   ──────────────────────────────────────────────────────────────────── */
function ContactMasthead() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isNarrow = useMediaQuery("(max-width: 560px)");
  // Match the WorkMasthead pull-up so the chalk50 surface tucks under
  // the transparent lower half of the SiteHeader pill.
  const heroOverlap = isNarrow ? 25 : 30;
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", marginTop: -heroOverlap }}>
      <div style={{ padding: "clamp(56px, 8vw, 88px) clamp(20px, 5vw, 64px) clamp(40px, 6vw, 56px)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 32, flexWrap: "wrap" }}>
          <span>§01</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>Start a Conversation</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr", gap: isMobile ? 32 : 80, alignItems: "end" }}>
          <h1 style={{ fontFamily: BW.ffD, fontSize: "clamp(72px, 15vw, 148px)", fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 0.9, margin: 0, color: BW.ink }}>
            Say<br/><em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>hello.</em>
          </h1>
          <div style={{ paddingBottom: isMobile ? 0 : 24 }}>
            <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.55, margin: 0, color: BW.ink2, maxWidth: "46ch" }}>
              A short brief, a challenge you're stuck on, a project taking shape — tell us what you're working on and which of the three practices might fit. Every message reaches Mark directly, and we reply within a business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────
   §02 · LEAD-GEN FORM + SIDEBAR
   ──────────────────────────────────────────────────────────────────── */
function ContactForm() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [state, setState] = React.useState("idle"); // idle | submitting | success | error
  const [error, setError] = React.useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    // Client-side check: at least one practice checkbox must be ticked.
    const form = e.target;
    const anyPractice = PRACTICES.some(p => form.elements[`practice_${p.key}`].checked);
    if (!anyPractice) {
      setError("Pick at least one practice so we know who on our side to loop in.");
      return;
    }
    setState("submitting");
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        setError(j.errors?.[0]?.message || "Something went wrong. Please try again or email us directly at hello@boondockwalker.com.");
        setState("error");
      }
    } catch (err) {
      setError("Couldn't send — check your connection, or email us directly at hello@boondockwalker.com.");
      setState("error");
    }
  }

  const label = {
    display: "block",
    fontFamily: BW.ffM,
    fontSize: 10,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    color: BW.ink2,
    fontWeight: 700,
    marginBottom: 10,
  };
  const optionalNote = { fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.18em", opacity: 0.55, marginLeft: 6, fontWeight: 500 };

  const input = {
    width: "100%",
    fontFamily: BW.ffG,
    fontSize: 16,
    padding: "13px 16px",
    background: "#FFFFFF",
    border: `1px solid ${BW.ruleL}`,
    borderRadius: 4,
    color: BW.ink,
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
  };

  return (
    <section id="form" style={{ background: BW.chalk, color: BW.ink, borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr", gap: isMobile ? 48 : 80, alignItems: "start" }}>

        {/* ── FORM COLUMN ─────────────────────────────────────────── */}
        <div>
          {state === "success" ? (
            <div style={{ padding: "48px 40px", background: BW.chalk50, border: `1px solid ${BW.ruleL}`, borderRadius: 4 }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 18 }}>Message received</div>
              <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.015em", lineHeight: 1.1, margin: "0 0 20px", color: BW.ink }}>Thanks — we've got it.</h2>
              <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.55, color: BW.ink2, margin: "0 0 8px" }}>
                Every message reaches Mark directly. You'll hear back within one business day.
              </p>
              <p style={{ fontFamily: BW.ffSerif, fontSize: 15, lineHeight: 1.55, color: BW.ink3, margin: 0 }}>
                If it's urgent in the meantime, email <a href="mailto:hello@boondockwalker.com" style={{ color: BW.ink3, borderBottom: `1px solid ${BW.ruleL}`, textDecoration: "none" }}>hello@boondockwalker.com</a> directly.
              </p>
            </div>
          ) : (
            <form action={CONTACT_FORM_ENDPOINT} method="POST" onSubmit={handleSubmit} noValidate>
              {/* ── name + email ─────────────────────────────── */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20, marginBottom: 22 }}>
                <div>
                  <label htmlFor="name" style={label}>Your name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" style={input} />
                </div>
                <div>
                  <label htmlFor="email" style={label}>Business email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" style={input} />
                </div>
              </div>

              {/* ── company + role ────────────────────────────── */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20, marginBottom: 22 }}>
                <div>
                  <label htmlFor="company" style={label}>Company</label>
                  <input id="company" name="company" type="text" required autoComplete="organization" style={input} />
                </div>
                <div>
                  <label htmlFor="role" style={label}>Role<span style={optionalNote}>Optional</span></label>
                  <input id="role" name="role" type="text" autoComplete="organization-title" style={input} placeholder="Founder, CMO, Director of Brand…" />
                </div>
              </div>

              {/* ── practice checkboxes (BRAND / DEMAND / LAB) ───────── */}
              <div style={{ marginBottom: 28 }}>
                <div style={label}>Which practice fits?<span style={optionalNote}>Pick one or more</span></div>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 12 }}>
                  {PRACTICES.map(p => (
                    <label key={p.key} htmlFor={`practice_${p.key}`} style={{ display: "flex", flexDirection: "column", gap: 6, padding: "16px 18px", background: "#FFFFFF", border: `1px solid ${BW.ruleL}`, borderRadius: 4, cursor: "pointer", transition: "border-color 0.15s, background 0.15s" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <input id={`practice_${p.key}`} name={`practice_${p.key}`} value="yes" type="checkbox" style={{ width: 16, height: 16, accentColor: BW.clay, cursor: "pointer" }} />
                        <span style={{ fontFamily: BW.ffG, fontSize: 15, fontWeight: 600, color: BW.ink, letterSpacing: "-0.005em" }}>{p.label}</span>
                      </div>
                      <div style={{ fontFamily: BW.ffSerif, fontSize: 13, lineHeight: 1.4, color: BW.ink3, paddingLeft: 26 }}>{p.hint}</div>
                    </label>
                  ))}
                </div>
              </div>

              {/* ── budget + timeline ─────────────────────────── */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20, marginBottom: 22 }}>
                <div>
                  <label htmlFor="budget" style={label}>Budget range<span style={optionalNote}>Optional — helps us calibrate</span></label>
                  <select id="budget" name="budget" style={{ ...input, appearance: "none", backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%2314100C' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", paddingRight: 44 }}>
                    <option value="">Select a range…</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" style={label}>Timeline<span style={optionalNote}>Optional</span></label>
                  <select id="timeline" name="timeline" style={{ ...input, appearance: "none", backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%2314100C' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", paddingRight: 44 }}>
                    <option value="">Select a range…</option>
                    {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* ── message ────────────────────────────────────── */}
              <div style={{ marginBottom: 28 }}>
                <label htmlFor="message" style={label}>What are you working on?</label>
                <textarea id="message" name="message" required rows={7} style={{ ...input, resize: "vertical", minHeight: 160, lineHeight: 1.5 }} placeholder="What's the challenge? What have you tried? No need to be polished — just enough for us to know how to reply." />
              </div>

              {/* Honeypot — Formspree drops any submission where this is filled. */}
              <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
              {/* Formspree convenience fields — customize the reply-to and subject line of the notification email. */}
              <input type="hidden" name="_subject" value="New lead — boondockwalker.com contact form" />

              {error && (
                <div role="alert" style={{ padding: "12px 16px", background: "rgba(196,74,42,0.08)", border: `1px solid ${BW.clay}`, borderRadius: 4, color: BW.clay, fontFamily: BW.ffG, fontSize: 14, marginBottom: 22 }}>
                  {error}
                </div>
              )}

              <button type="submit" disabled={state === "submitting"} style={{
                fontFamily: BW.ffM, fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 700,
                padding: "17px 34px", background: BW.ink, color: BW.chalk50, border: "none", borderRadius: 4,
                cursor: state === "submitting" ? "wait" : "pointer",
                opacity: state === "submitting" ? 0.6 : 1,
                transition: "opacity 0.15s, transform 0.15s, background 0.15s",
              }}>
                {state === "submitting" ? "Sending…" : "Send message →"}
              </button>
            </form>
          )}
        </div>

        {/* ── SIDEBAR — direct contact + reassurance ──────────────── */}
        <aside style={{ paddingTop: isMobile ? 0 : 8 }}>
          <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 22 }}>Or reach us directly</div>

          <div style={{ marginBottom: 30 }}>
            <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: BW.ink3, marginBottom: 8, fontWeight: 600 }}>Email</div>
            <a href="mailto:hello@boondockwalker.com" style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: "clamp(20px, 2.4vw, 24px)", color: BW.ink, textDecoration: "none", borderBottom: `1px solid ${BW.ruleL}`, paddingBottom: 3 }}>hello@boondockwalker.com</a>
          </div>

          <div style={{ marginBottom: 30 }}>
            <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: BW.ink3, marginBottom: 8, fontWeight: 600 }}>Phone</div>
            <a href="tel:+18339978574" style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: "clamp(20px, 2.4vw, 24px)", color: BW.ink, textDecoration: "none" }}>833 · 997 · 8574</a>
          </div>

          <div style={{ paddingTop: 24, borderTop: `1px solid ${BW.ruleL}` }}>
            <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: BW.ink3, marginBottom: 10, fontWeight: 600 }}>What happens next</div>
            <ol style={{ margin: 0, padding: 0, listStyle: "none", fontFamily: BW.ffSerif, fontSize: 15, lineHeight: 1.55, color: BW.ink2, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Mark reads every message personally.",
                "We reply within one business day — usually same-day.",
                "If it's a fit, we set up a 30-minute call to hear the whole picture.",
                "No pitch decks. No pressure. Just a real conversation.",
              ].map((step, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12 }}>
                  <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", color: BW.clay, fontWeight: 700, paddingTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div style={{ marginTop: 32, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 600 }}>
            41.49°N · 81.69°W · Cleveland, Ohio
          </div>
        </aside>
      </div>
    </section>
  );
}

window.ContactMasthead = ContactMasthead;
window.ContactForm = ContactForm;
