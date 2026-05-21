/* global React, BW */
/* Vesper — early-access teaser. Editorial landing page that announces the app
   and captures emails for the early-access list. Single component, single
   surface; easy to retire post-launch.

   The signup form POSTs to a placeholder Formspree endpoint. To wire the live
   list, replace VESPER_FORM_ENDPOINT below with your real endpoint URL.
   The mailto: fallback is always present so a denied/blocked submission still
   reaches the bureau. */

const VESPER_FORM_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_FORM_ID";
const VESPER_MAILTO = "mailto:vesper@boondockwalker.com?subject=Vesper%20%E2%80%94%20early%20access";

function VesperSignup() {
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const [status, setStatus] = React.useState("idle"); // idle | sending | done | error
  const [err, setErr] = React.useState("");
  const live = VESPER_FORM_ENDPOINT.indexOf("REPLACE_WITH_FORM_ID") === -1;

  const submit = async (e) => {
    e.preventDefault();
    if (!email || email.indexOf("@") === -1) {
      setErr("That email looks incomplete.");
      return;
    }
    setErr("");
    setStatus("sending");
    try {
      if (live) {
        const res = await fetch(VESPER_FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email, role, source: "vesper-teaser" }),
        });
        if (!res.ok) throw new Error("network");
      } else {
        // No live endpoint configured yet — pretend-send so the UI confirms,
        // but also offer the mailto: as a verifiable channel.
        await new Promise(r => setTimeout(r, 400));
      }
      setStatus("done");
    } catch (_e) {
      setStatus("error");
      setErr("That didn't go through. Try the email link below.");
    }
  };

  if (status === "done") {
    return (
      <div style={{ background: BW.chalk50, border: `1.5px solid ${BW.ink}`, padding: "28px 28px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.forest, fontWeight: 700 }}>● You're on the list</div>
        <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 24, lineHeight: 1.2, color: BW.ink, margin: 0, fontWeight: 400, letterSpacing: "-0.01em" }}>
          Thanks. We'll send <em style={{ fontStyle: "italic" }}>one</em> short email when Vesper is ready for you. No drip campaign, no countdown.
        </p>
        <p style={{ fontFamily: BW.ffSerif, fontSize: 15, lineHeight: 1.55, color: BW.ink2, margin: 0 }}>
          If we wrote your brand foundation, you're in the first wave. If we've worked together before, you're in the second. Either way, we'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ background: BW.chalk50, border: `1.5px solid ${BW.ink}`, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "12px 22px", borderBottom: `1px solid ${BW.ruleL}`, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, fontWeight: 700 }}>
        <span>Early access signup</span>
        <span style={{ display: "flex", alignItems: "center", gap: 8, color: BW.clay }}>
          <span style={{ width: 7, height: 7, background: BW.clay, borderRadius: "50%" }} />
          rolling
        </span>
      </div>

      <div style={{ padding: "22px 22px 8px", display: "flex", flexDirection: "column", gap: 14 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.6)", fontWeight: 700 }}>Your email</span>
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontFamily: BW.ffG, fontSize: 17, padding: "12px 14px", border: `1.5px solid ${BW.ink}`, borderRadius: 4, background: BW.chalk, color: BW.ink, outline: "none" }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.6)", fontWeight: 700 }}>Your role <span style={{ fontFamily: BW.ffD, fontStyle: "italic", textTransform: "none", letterSpacing: 0 }}>(optional)</span></span>
          <input
            type="text"
            placeholder="Marketing lead · Founder · Writer · Sales · Other"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ fontFamily: BW.ffG, fontSize: 15, padding: "12px 14px", border: `1.5px solid ${BW.ruleL}`, borderRadius: 4, background: BW.chalk, color: BW.ink, outline: "none" }}
          />
        </label>
      </div>

      {err && (
        <div style={{ padding: "0 22px 8px", fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: BW.clay, fontWeight: 700 }}>
          {err}
        </div>
      )}

      <div style={{ padding: "14px 22px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
        <button
          type="submit"
          disabled={status === "sending"}
          style={{ background: BW.ink, color: BW.chalk50, padding: "14px 22px", borderRadius: 4, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: status === "sending" ? "wait" : "pointer", border: "none", textAlign: "center", opacity: status === "sending" ? 0.7 : 1 }}
        >
          {status === "sending" ? "Filing…" : "Put me on the list →"}
        </button>
        <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600, lineHeight: 1.6 }}>
          One short email when Vesper is ready for you. No drip campaign, no countdown. <br/>
          Prefer to write us directly? <a href={VESPER_MAILTO} style={{ color: BW.ink, textDecoration: "none", borderBottom: `1px solid ${BW.ink}` }}>vesper@boondockwalker.com</a>
        </div>
      </div>
    </form>
  );
}

function VesperMark({ size = 96 }) {
  // Editorial mark for the masthead — paired stars / dusk glyph
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" style={{ display: "block" }}>
      <defs>
        <pattern id="vgrain" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(20,16,12,0.2)" strokeWidth="1.4" />
        </pattern>
      </defs>
      <circle cx="50" cy="50" r="44" fill="none" stroke={BW.ink} strokeWidth="1.3" />
      <circle cx="50" cy="50" r="44" fill="url(#vgrain)" opacity="0.45" />
      {/* horizon */}
      <line x1="14" y1="62" x2="86" y2="62" stroke={BW.ink} strokeWidth="0.9" />
      {/* the evening star — a four-point bloom */}
      <g transform="translate(50 40)">
        <polygon points="0,-18 3,0 18,0 3,3 0,18 -3,3 -18,0 -3,0" fill={BW.brass} stroke={BW.ink} strokeWidth="0.6" />
        <circle cx="0" cy="0" r="2" fill={BW.ink} />
      </g>
      {/* lowercase mark */}
      <text x="50" y="82" textAnchor="middle" fontFamily={BW.ffM} fontSize="9" letterSpacing="3" fill={BW.ink} fontWeight="700">VESPER</text>
    </svg>
  );
}

function VesperPage() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isNarrow = useMediaQuery("(max-width: 560px)");

  const Foot = () => (
    <footer style={{ background: BW.ink, color: BW.chalk50, fontFamily: BW.ffG, padding: "44px clamp(20px, 5vw, 64px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, alignItems: "start" }}>
        <div>
          <img src="assets/BW-lockup-color.svg?v=8" alt="Boondock Walker" style={{ height: 39, display: "block" }} />
          <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, marginTop: 14 }}>The bureau · est. 2015 · Cleveland</div>
        </div>
        <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: BW.chalk2, lineHeight: 2 }}>
          <a href="work.html" style={{ display: "block", color: BW.chalk2, textDecoration: "none" }}>Work</a>
          <a href="capabilities.html" style={{ display: "block", color: BW.chalk2, textDecoration: "none" }}>Capabilities</a>
          <a href="lab.html" style={{ display: "block", color: BW.chalk2, textDecoration: "none" }}>The Lab</a>
          <a href="field-notes.html" style={{ display: "block", color: BW.chalk2, textDecoration: "none" }}>Field Notes</a>
        </div>
        <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, lineHeight: 1.8 }}>© 2026 BDW Bureau<br/>Vesper · A bureau release</div>
      </div>
    </footer>
  );

  return (
    <div style={{ background: BW.chalk, minHeight: "100vh", fontFamily: BW.ffG, color: BW.ink }}>
      <SiteHeader current={null} sticky={true} />

      {/* §01 — Masthead / Hero */}
      <section style={{ background: BW.chalk, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.04) 0 1px, transparent 1px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(48px, 8vw, 96px) clamp(20px, 5vw, 64px) clamp(48px, 6vw, 80px)", position: "relative" }}>
          {/* Editorial nameplate */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 24 : 40, alignItems: isMobile ? "flex-start" : "flex-end", justifyContent: "space-between", paddingBottom: 28, borderBottom: `1px solid ${BW.ink}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <VesperMark size={isMobile ? 72 : 96} />
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700 }}>A bureau release · 2026</div>
                <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>From the Lab at Boondock Walker</div>
              </div>
            </div>
            <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600, textAlign: isMobile ? "left" : "right" }}>
              Vol I · No 01<br/>Early access · rolling
            </div>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "normal", fontSize: "clamp(72px, 18vw, 220px)", lineHeight: 0.84, letterSpacing: "-0.045em", margin: "clamp(36px, 5vw, 56px) 0 clamp(28px, 4vw, 40px)", color: BW.ink }}>
            Vesper.
          </h1>

          {/* Tagline */}
          <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4.8vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.025em", margin: "0 0 clamp(24px, 3vw, 32px)", color: BW.ink, maxWidth: "26ch" }}>
            A living brand foundation, <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>built for founders and small businesses.</em>
          </p>

          {/* Standfirst */}
          <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 2.1vw, 22px)", lineHeight: 1.5, margin: "0 0 clamp(36px, 4vw, 48px)", color: BW.ink2, maxWidth: "62ch" }}>
            Most brands are built on a foundation that's never been defined. Vesper fixes that. A new product from the Boondock Walker Lab, Vesper guides founders and small business owners through a proven brand strategy process — and delivers a living brand foundation that grows with the business. Built for companies that aren't ready for a full agency engagement, but are ready to build something that lasts.
          </p>

          {/* Ledger row */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", borderTop: `1px solid ${BW.ink}`, borderLeft: `1px solid ${BW.ink}` }}>
            {[
              { k: "What it is", v: "An AI-guided brand strategy platform from Boondock Walker" },
              { k: "Who it's for", v: "Founders and small businesses without a defined brand foundation" },
              { k: "How fast", v: "Days, not months" },
              { k: "How much", v: "A fraction of agency cost" },
            ].map((s) => (
              <div key={s.k} style={{ padding: "18px 20px", borderRight: `1px solid ${BW.ink}`, borderBottom: `1px solid ${BW.ink}`, background: BW.chalk50 }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 6 }}>{s.k}</div>
                <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 17, lineHeight: 1.25, color: BW.ink, fontWeight: 400, letterSpacing: "-0.01em" }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §02 — The methodology · GUIDE */}
      <section style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 32, flexWrap: "wrap" }}>
            <span>§02</span><span style={{ width: 28, height: 1, background: BW.clay }} /><span>The methodology</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr", gap: isMobile ? 28 : 64, alignItems: "start", marginBottom: 40 }}>
            <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.98, margin: 0, color: BW.ink }}>
              Built on a proven framework. <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>The GUIDE methodology.</em>
            </h2>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, color: BW.ink2, margin: 0, maxWidth: "44ch" }}>
              Vesper isn't just AI. It's AI guided by a framework Boondock Walker brand strategists have used for years. Five steps, applied in order, that take you from a blank page to a complete brand foundation.
            </p>
          </div>

          {/* GUIDE — five steps */}
          <div style={{ border: `1.5px solid ${BW.ink}`, background: BW.chalk }}>
            <div style={{ padding: "14px 22px", borderBottom: `1px solid ${BW.ruleL}`, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>The GUIDE framework</span>
              <span style={{ color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>From discovery to delivery</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)" }}>
              {[
                { letter: "G", k: "Gather",     v: "Discovery — your business, your market, your audience, and the story only you can tell." },
                { letter: "U", k: "Understand", v: "Finding the patterns, tensions, and truths that become your strategic raw material." },
                { letter: "I", k: "Identify",   v: "Pinpointing the core — your values, purpose, positioning, and personality." },
                { letter: "D", k: "Design",     v: "Designing the external expression of your foundation — voice, message, brand promise." },
                { letter: "E", k: "Execute",    v: "Everything comes together in your living brand foundation, ready from day one." },
              ].map((p, i) => (
                <div key={p.letter} style={{ padding: "22px 22px", borderRight: !isMobile && i < 4 ? `1px solid ${BW.ruleL}` : "none", borderBottom: isMobile && i < 4 ? `1px solid ${BW.ruleL}` : "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 48, lineHeight: 0.9, color: BW.clay, fontWeight: 400, letterSpacing: "-0.03em" }}>{p.letter}</div>
                  <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 20, lineHeight: 1.15, color: BW.ink, fontWeight: 400, letterSpacing: "-0.015em" }}>{p.k}</div>
                  <div style={{ fontFamily: BW.ffSerif, fontSize: 14, lineHeight: 1.5, color: BW.ink2 }}>{p.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 16, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>
            <span>● Days, not months</span>
            <span>● A fraction of agency cost</span>
            <span>● Evolves with your business</span>
          </div>
        </div>
      </section>

      {/* §03 — The deliverable · Four buckets */}
      <section style={{ background: BW.chalk, color: BW.ink, padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 32, flexWrap: "wrap" }}>
            <span>§03</span><span style={{ width: 28, height: 1, background: BW.clay }} /><span>The deliverable</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr", gap: isMobile ? 28 : 64, alignItems: "start", marginBottom: 40 }}>
            <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.98, margin: 0, color: BW.ink }}>
              Not a document. <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>A living foundation.</em>
            </h2>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, color: BW.ink2, margin: 0, maxWidth: "44ch" }}>
              Everything your brand needs to operate with clarity — in one place, always current, built to grow with you.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", border: `1.5px solid ${BW.ink}`, background: BW.chalk50 }}>
            {[
              {
                n: "01",
                eyebrow: "Who you are",
                title: "Internal Identity",
                items: ["Vision", "Core Purpose", "Mission", "Core Brand Values", "Brand Personality"],
                c: BW.clay,
              },
              {
                n: "02",
                eyebrow: "What you communicate",
                title: "External Positioning",
                items: ["Brand Promise", "Value Proposition", "Position Statement"],
                c: BW.brass,
              },
              {
                n: "03",
                eyebrow: "How you show up",
                title: "Identity Guidelines",
                items: ["Color Palette", "Typography", "Image and Illustration Style", "Usage Guidelines"],
                c: BW.plum,
              },
              {
                n: "04",
                eyebrow: "Putting it to work",
                title: "Messaging in Action",
                items: ["Email templates", "Social Media Messaging", "Elevator Pitch Frameworks"],
                c: BW.forest,
              },
            ].map((b, i) => (
              <div key={b.n} style={{ borderRight: !isMobile && i % 2 === 0 ? `1px solid ${BW.ink}` : "none", borderBottom: (!isMobile && i < 2) || (isMobile && i < 3) ? `1px solid ${BW.ink}` : "none", padding: "32px 28px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div style={{ fontFamily: BW.ffG, fontSize: 32, fontWeight: 700, color: b.c, letterSpacing: "-0.03em", lineHeight: 0.9 }}>{b.n}</div>
                  <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: b.c, fontWeight: 700 }}>{b.eyebrow}</div>
                </div>
                <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: 28, lineHeight: 1.15, color: BW.ink, margin: 0, letterSpacing: "-0.02em" }}>{b.title}</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {b.items.map(it => (
                    <li key={it} style={{ fontFamily: BW.ffSerif, fontSize: 15.5, lineHeight: 1.5, color: BW.ink2, display: "flex", gap: 10, alignItems: "baseline" }}>
                      <span style={{ width: 5, height: 5, background: b.c, borderRadius: "50%", flexShrink: 0, transform: "translateY(-3px)" }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pullquote band on ink — the thesis */}
      <section style={{ background: BW.ink, color: BW.chalk50, padding: "clamp(56px, 8vw, 96px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${BW.chalk50} 1px, transparent 1px), linear-gradient(90deg, ${BW.chalk50} 1px, transparent 1px)`, backgroundSize: "60px 60px", opacity: 0.04, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", textAlign: "center" }}>
          <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 28 }}>★ The thesis</div>
          <blockquote style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4.6vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.022em", margin: 0, color: BW.chalk50 }}>
            "It's not a design problem. It's not a marketing problem. It's a foundation problem."
          </blockquote>
          <div style={{ marginTop: 32, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>— Field Notes № 22</div>
        </div>
      </section>

      {/* §04 — Who it's for · Two audiences */}
      <section style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 32, flexWrap: "wrap" }}>
            <span>§04</span><span style={{ width: 28, height: 1, background: BW.clay }} /><span>Who it's for</span>
          </div>
          <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.98, margin: "0 0 48px", color: BW.ink, maxWidth: "26ch" }}>
            A rock-solid foundation. <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>Built for founders.</em>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", border: `1.5px solid ${BW.ink}`, background: BW.chalk }}>
            {[
              {
                eyebrow: "Early-stage founders",
                head: "You know your business. You haven't defined your brand.",
                body: "You know your product and your market — but when someone asks what your brand stands for, you're still working it out. Vesper gives you the foundation before you build everything else, so every decision from here has something to stand on.",
                c: BW.clay,
              },
              {
                eyebrow: "Established small businesses",
                head: "You've grown. But growth without a foundation creates drift.",
                body: "You've grown organically, but inconsistent messaging and unclear positioning are holding you back. Vesper defines the foundation you've been operating without — and gives your next chapter something solid to build from.",
                c: BW.plum,
              },
            ].map((a, i) => (
              <div key={a.eyebrow} style={{ padding: "32px 30px 32px", borderRight: !isMobile && i === 0 ? `1px solid ${BW.ink}` : "none", borderBottom: isMobile && i === 0 ? `1px solid ${BW.ink}` : "none", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: a.c, fontWeight: 700 }}>{a.eyebrow}</div>
                <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(24px, 3vw, 30px)", lineHeight: 1.15, color: BW.ink, margin: 0, letterSpacing: "-0.02em" }}>{a.head}</h3>
                <p style={{ fontFamily: BW.ffSerif, fontSize: 16, lineHeight: 1.6, color: BW.ink2, margin: 0 }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §05 — Early access · Signup */}
      <section style={{ background: BW.plum, color: BW.chalk50, padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${BW.chalk50} 1px, transparent 1px), linear-gradient(90deg, ${BW.chalk50} 1px, transparent 1px)`, backgroundSize: "60px 60px", opacity: 0.04, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700, marginBottom: 32, flexWrap: "wrap" }}>
            <span>§05</span><span style={{ width: 28, height: 1, background: BW.clay300 }} /><span>Early access</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.05fr 1fr", gap: isMobile ? 40 : 64, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(40px, 6.5vw, 64px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.98, margin: "0 0 24px", color: BW.chalk50 }}>
                Be among the first to <em style={{ color: BW.brass, fontStyle: "italic", fontWeight: 400 }}>use Vesper.</em>
              </h2>
              <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, margin: "0 0 20px", color: "rgba(251,247,238,0.82)", maxWidth: "48ch" }}>
                Vesper is rolling out in waves. Current Boondock Walker clients first, past clients second, then the public early-access list. Add your email and we'll be in touch when your wave opens.
              </p>
              <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, margin: 0, color: "rgba(251,247,238,0.82)", maxWidth: "48ch" }}>
                For the full product story, visit <a href="https://vesper1.wpenginepowered.com/" style={{ color: BW.brass, textDecoration: "none", borderBottom: `1px solid ${BW.brass}` }}>the Vesper site</a>.
              </p>
            </div>

            <div style={{ position: isMobile ? "static" : "sticky", top: 100 }}>
              <VesperSignup />
            </div>
          </div>
        </div>
      </section>

      {/* §06 — Learn more · Vesper site + Field Note recirc */}
      <section style={{ background: BW.chalk, color: BW.ink, padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
            <span>§06</span><span style={{ width: 28, height: 1, background: BW.clay }} /><span>Learn more</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 28 : 56, alignItems: "start" }}>
            <div>
              {/* Vesper marketing site — swap href to the production Vesper URL at launch */}
              <a href="https://vesper1.wpenginepowered.com/" target="_blank" rel="noopener noreferrer" style={{ display: "block", border: `1.5px solid ${BW.ink}`, padding: "32px clamp(22px, 4vw, 36px) 28px", background: BW.chalk50, textDecoration: "none", color: BW.ink }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 14 }}>The Vesper site · Full product</div>
                <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em", margin: "0 0 16px", color: BW.ink }}>
                  Visit Vesper for the full story.
                </h3>
                <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.55, color: BW.ink2, margin: "0 0 20px" }}>
                  The complete walkthrough of the GUIDE methodology, what's in the deliverable, who Vesper is for, and how to get on the waitlist directly with the product team.
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: `1px solid ${BW.ruleL}`, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.6)", fontWeight: 600 }}>
                  <span>vesper.com</span>
                  <span style={{ color: BW.ink, fontWeight: 700, borderBottom: `1.5px solid ${BW.ink}`, paddingBottom: 2 }}>Visit the site →</span>
                </div>
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>From the Field Notes</div>
              <a href="note.html?slug=introducing-vesper" style={{ display: "block", padding: "16px 0", borderTop: `1px solid ${BW.ruleL}`, borderBottom: `1px solid ${BW.ruleL}`, textDecoration: "none", color: BW.ink }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 6 }}>№ 22 · Lab</div>
                <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 20, lineHeight: 1.18, color: BW.ink }}>Introducing Vesper. A brand foundation for founders and small businesses.</div>
                <div style={{ marginTop: 8, fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>Boondock Walker's announcement note.</div>
              </a>
              <a href="note.html?slug=seven-years-unagency" style={{ display: "block", padding: "16px 0", borderBottom: `1px solid ${BW.ruleL}`, textDecoration: "none", color: BW.ink }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.sky, fontWeight: 700, marginBottom: 6 }}>№ 19 · Voice</div>
                <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 20, lineHeight: 1.18, color: BW.ink }}>Seven years unagency. What we learned, what's next.</div>
                <div style={{ marginTop: 8, fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>The strategic shift behind Vesper.</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Foot />
    </div>
  );
}

window.VesperPage = VesperPage;
window.VesperSignup = VesperSignup;
window.VesperMark = VesperMark;
