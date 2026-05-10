/* global React, BW */
/* Homepage v3 — Cases, Lab, Trust, CTA, Footer */

/* §04 — Selected receipts (case studies) on chalk paper */
function V3Cases() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const cases = [
    { tag: "Brand · Demand", co: "Walker Bros.", pull: "A 70-year wholesale brand learns to close direct.", m1: "+148%", m1k: "SQL", m2: "$2.4M", m2k: "Pipeline", c: BW.clay },
    { tag: "Lab · Demand",   co: "Halberd Tools", pull: "A trained AI desk-rep that sounds like founder.", m1: "2,140", m1k: "SQL routed", m2: "$0.42", m2k: "Cost / lead", c: BW.forest },
    { tag: "Brand",          co: "North-by-Northeast", pull: "Repositioned mid-market, doubled enterprise close rate.", m1: "2.1×", m1k: "Close rate", m2: "37 days", m2k: "Sales cycle", c: BW.plum },
  ];
  return (
    <section id="work" style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: isMobile ? 24 : 0, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 24, flexWrap: "wrap" }}>
              <span>§04</span><span style={{ width: 28, height: 1, background: BW.clay }} /><span>Selected Receipts</span>
            </div>
            <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(48px, 9vw, 84px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.94, margin: 0, color: BW.ink, maxWidth: 900 }}>
              Receipts, <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>not</em> case <em style={{ color: BW.ink, fontStyle: "italic", fontWeight: 400 }}>studies.</em>
            </h2>
          </div>
          <a style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, textDecoration: "none", fontWeight: 700, paddingBottom: 3, borderBottom: `1.5px solid ${BW.ink}`, cursor: "pointer", whiteSpace: "nowrap" }}>All 47 cases →</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", border: `1px solid ${BW.ink}` }}>
          {cases.map((c, i) => (
            <div key={c.co} style={{ borderRight: !isMobile && i < 2 ? `1px solid ${BW.ink}` : "none", borderBottom: isMobile && i < cases.length - 1 ? `1px solid ${BW.ink}` : "none", display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "16/11", background: c.c, position: "relative", overflow: "hidden", borderBottom: `1px solid ${BW.ink}` }}>
                <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(20,16,12,0.16) 0 2px, transparent 2px 8px)", mixBlendMode: "multiply" }} />
                <div style={{ position: "absolute", left: 22, top: 22, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk50, fontWeight: 700 }}>CASE 0{i+1}</div>
                <div style={{ position: "absolute", left: 22, bottom: 22, fontFamily: BW.ffG, fontWeight: 700, color: BW.chalk50, letterSpacing: "-0.03em", lineHeight: 0.9, fontSize: "clamp(28px, 6vw, 40px)", textTransform: "uppercase", maxWidth: "calc(100% - 44px)" }}>{c.co}</div>
                <div style={{ position: "absolute", right: 22, bottom: 22, fontFamily: BW.ffD, fontStyle: "italic", fontSize: 13, color: "rgba(251,247,238,0.75)", fontWeight: 400 }}>fig. {i+1}.0</div>
              </div>
              <div style={{ padding: "26px 26px 28px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24 }}>
                <div>
                  <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", marginBottom: 12, fontWeight: 600 }}>{c.tag}</div>
                  <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 24, lineHeight: 1.2, color: BW.ink, margin: 0, fontWeight: 400, letterSpacing: "-0.015em" }}>"{c.pull}"</p>
                </div>
                <div style={{ display: "flex", gap: 32, paddingTop: 18, borderTop: `1px solid ${BW.ruleL}` }}>
                  <div><div style={{ fontFamily: BW.ffG, fontWeight: 700, fontSize: 22, color: c.c, letterSpacing: "-0.01em", marginBottom: 2 }}>{c.m1}</div><div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>{c.m1k}</div></div>
                  <div><div style={{ fontFamily: BW.ffG, fontWeight: 700, fontSize: 22, color: c.c, letterSpacing: "-0.01em", marginBottom: 2 }}>{c.m2}</div><div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>{c.m2k}</div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* §05 — The Lab. Plum surface with composer card on the right */
function V3Lab() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <section id="the-lab" style={{ background: BW.plum, color: BW.chalk50, padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", overflow: "hidden" }}>
      {/* faint grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${BW.chalk50} 1px, transparent 1px), linear-gradient(90deg, ${BW.chalk50} 1px, transparent 1px)`, backgroundSize: "60px 60px", opacity: 0.04 }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700, marginBottom: 36, flexWrap: "wrap" }}>
          <span>§05</span><span style={{ width: 28, height: 1, background: BW.clay300 }} /><span>The Lab · AI Engagement</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr", gap: isMobile ? 40 : 64, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(48px, 10vw, 88px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.92, margin: "0 0 28px", color: BW.chalk50 }}>
              AI <em style={{ color: BW.brass, fontStyle: "italic", fontWeight: 400 }}>that sounds</em> like <em style={{ color: BW.chalk50, fontStyle: "italic", fontWeight: 400 }}>you.</em>
            </h2>
            <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(16px, 2.4vw, 19px)", lineHeight: 1.55, margin: "0 0 32px", color: "rgba(251,247,238,0.82)", maxWidth: 540 }}>
              We build custom desk-reps trained on your voice, your lifecycle, and your sales motion. They triage inbound, score intent, and write the first reply — so your team meets a warm pipeline, not a cold inbox.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a style={{ background: BW.brass, color: BW.ink, padding: "13px 22px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer" }}>View Lab specimens →</a>
              <a style={{ background: "transparent", color: BW.chalk50, padding: "13px 22px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer", border: `1.5px solid rgba(244,236,218,0.4)` }}>Talk to engineering</a>
            </div>
          </div>

          {/* Composer */}
          <div style={{ background: BW.chalk50, color: BW.ink, borderRadius: 12, boxShadow: "0 36px 80px -28px rgba(8,4,4,0.6)", overflow: "hidden", border: `1px solid rgba(20,16,12,0.12)` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 18px", borderBottom: `1px solid ${BW.ruleL}`, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.6)", fontWeight: 600 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 8, height: 8, background: BW.forest, borderRadius: "50%", boxShadow: "0 0 0 4px rgba(46,70,38,0.18)" }} />
                Trail · house voice loaded
              </span>
              <span style={{ fontFamily: BW.ffD, fontStyle: "italic", textTransform: "none", letterSpacing: 0, fontSize: 12, color: "rgba(20,16,12,0.55)", fontWeight: 400 }}>v0.4</span>
            </div>
            <div style={{ padding: "20px 22px", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginTop: 4 }}>You</span>
              <div style={{ flex: 1, fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.45, color: BW.ink }}>How do I sell a 70-year-old wholesale brand to a Gen-X operator?</div>
            </div>
            <div style={{ borderTop: `1px solid ${BW.ruleL}`, padding: "20px 22px", display: "flex", gap: 14, alignItems: "flex-start", background: "#FAEFD9" }}>
              <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginTop: 4 }}>BDW</span>
              <div style={{ flex: 1, fontFamily: BW.ffSerif, fontSize: 16, lineHeight: 1.55, color: BW.ink }}>
                Stop calling it heritage. Operators don't buy heritage — they buy the receipts of having survived. Lead with the failure-rate of your category, then drop the year you were founded as a footnote.
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderTop: `1px solid ${BW.ruleL}`, background: BW.chalk }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["Brand","Demand","Lab"].map((t) => (
                  <span key={t} style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", padding: "4px 8px", border: `1px solid ${BW.ruleM}`, color: "rgba(20,16,12,0.6)", borderRadius: 3, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
              <a style={{ background: BW.ink, color: BW.chalk50, padding: "8px 14px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer" }}>Ask another →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* §06 — Trust grid (clients) */
function V3Trust() {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const operators = ["Walker Bros.", "Halberd", "N×NE", "Field & Co.", "Marrow", "Praxis", "Halyard", "Northbeam", "Bowline", "Atlas Mfg.", "Quarry", "Greylock"];
  const cols = isMobile ? 2 : isTablet ? 3 : 6;
  return (
    <section style={{ background: BW.chalk, color: BW.ink, padding: "clamp(56px, 8vw, 80px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "baseline", gap: isMobile ? 12 : 0, marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, flexWrap: "wrap" }}>
            <span>§06</span><span style={{ width: 28, height: 1, background: BW.clay }} /><span>Operators we've shipped for</span>
          </div>
          <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 16, color: "rgba(20,16,12,0.55)" }}>since 2015 · 47 cases</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, borderTop: `1px solid ${BW.ink}`, borderLeft: `1px solid ${BW.ink}` }}>
          {operators.map(n => (
            <div key={n} style={{ padding: "26px 14px", borderRight: `1px solid ${BW.ink}`, borderBottom: `1px solid ${BW.ink}`, fontFamily: BW.ffG, fontSize: 14, fontWeight: 700, letterSpacing: "-0.005em", textTransform: "uppercase", color: BW.ink, textAlign: "center" }}>{n}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* §07 — Closing CTA on clay (echoes hero) */
function V3CTA() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section id="contact" style={{ background: BW.clay, color: BW.chalk50, padding: "clamp(72px, 12vw, 140px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.06) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 700, marginBottom: 36, flexWrap: "wrap" }}>
          <span>§07</span><span style={{ width: 28, height: 1, background: BW.chalk2 }} /><span>Start a project</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(56px, 13vw, 124px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.9, margin: "0 0 40px", color: BW.chalk50, maxWidth: 1200 }}>
          If your story <em style={{ color: BW.brass, fontStyle: "italic", fontWeight: 400 }}>isn't closing,</em> let's fix the story <em style={{ color: BW.ink, fontStyle: "italic", fontWeight: 400 }}>and the close.</em>
        </h2>
        <div style={{ display: "flex", gap: 14, alignItems: isMobile ? "flex-start" : "center", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row" }}>
          <a style={{ background: BW.ink, color: BW.chalk50, padding: "14px 24px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer" }}>Start a project →</a>
          <a style={{ background: "transparent", color: BW.chalk50, padding: "14px 24px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer", border: `1.5px solid rgba(244,236,218,0.45)` }}>Book a 30-min</a>
          <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(251,247,238,0.78)", marginLeft: isMobile ? 0 : 18 }}>· typically 2-3 day reply</span>
        </div>
      </div>
    </section>
  );
}

/* Footer — ink */
function V3Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <footer style={{ background: BW.ink, color: "rgba(244,236,218,0.78)", padding: "clamp(48px, 8vw, 72px) clamp(20px, 5vw, 64px) 36px", fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr 1fr 1fr", gap: isMobile ? 32 : 48, paddingBottom: 40, borderBottom: `1px solid rgba(244,236,218,0.18)` }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
              <img src="assets/BW-lockup-color.svg?v=8" alt="Boondock Walker" style={{ height: 39 }} />
            </div>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 15, lineHeight: 1.55, color: "rgba(244,236,218,0.78)", margin: 0, maxWidth: 380 }}>
              A brand &amp; demand bureau for operators who measure work in pipeline, not applause.
            </p>
            <div style={{ marginTop: 22, display: "flex", gap: 18, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 700 }}>
              <span>41.49°N</span><span>·</span><span>81.69°W</span><span>·</span><span>Cleveland, OH</span>
            </div>
          </div>
          {[
            ["Practice", ["Brand", "Demand", "The Lab", "Field Notes"]],
            ["Bureau", ["Cleveland", "Remote", "Careers", "Press"]],
            ["Contact", ["hello@bdw.co", "Book a 30-min", "Substack", "LinkedIn"]],
          ].map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk2, marginBottom: 14, fontWeight: 700 }}>{h}</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontFamily: BW.ffG, fontSize: 14, color: BW.chalk }}>
                {items.map(i => <li key={i}><a style={{ color: BW.chalk, textDecoration: "none", cursor: "pointer" }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", paddingTop: 24, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,236,218,0.55)", fontWeight: 600, flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 0 }}>
          <span>BDW · Vol XII · Est. 2015</span>
          <span style={{ fontFamily: BW.ffD, fontStyle: "italic", textTransform: "none", letterSpacing: 0, fontSize: 13, color: "rgba(244,236,218,0.7)", fontWeight: 400 }}>Take the long way home.</span>
          <span>© Boondock Walker · All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

window.V3Cases = V3Cases;
window.V3Lab = V3Lab;
window.V3Trust = V3Trust;
window.V3CTA = V3CTA;
window.V3Footer = V3Footer;
