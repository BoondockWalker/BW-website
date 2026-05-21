/* global React, BW, BW_LAB, useMediaQuery */
/* Lab — Hero, Thesis, How-it-runs. */

/* §01 — Hero. Ink surface. The spine line lives here. */
function LabHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const d = BW_LAB.hero;
  return (
    <section style={{ position: "relative", background: BW.ink, color: BW.chalk50, fontFamily: BW.ffG, overflow: "hidden", borderBottom: `1.5px solid ${BW.ink}` }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.025) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "screen", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", maxWidth: 1440, margin: "0 auto", opacity: 0.5 }}>
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} style={{ borderRight: `1px solid rgba(244,236,218,0.06)`, gridColumn: i + 1 }} />
        ))}
      </div>

      <div style={{ position: "relative", padding: "clamp(48px, 8vw, 96px) clamp(20px, 5vw, 64px) clamp(56px, 8vw, 96px)", maxWidth: 1440, margin: "0 auto", zIndex: 3 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700, marginBottom: 36, flexWrap: "wrap" }}>
          <span>{d.eyebrow.split(" / ")[0]}</span>
          <span style={{ width: 28, height: 1, background: BW.clay300 }} />
          <span>{d.eyebrow.split(" / ")[1]} · A bureau within the bureau</span>
        </div>

        <h1 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(56px, 12vw, 156px)", lineHeight: 0.88, letterSpacing: "-0.025em", margin: 0, color: BW.chalk50, maxWidth: 1180 }}>
          {d.title}<br />
          <em style={{ color: BW.clay300, fontWeight: 400, fontStyle: "italic" }}>{d.titleItalic}</em>
        </h1>

        {/* The spine. Three beats. Keep the periods. */}
        <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(24px, 3.4vw, 38px)", lineHeight: 1.18, letterSpacing: "-0.02em", color: BW.clay300, margin: "44px 0 0", maxWidth: "28ch" }}>
          {d.spine}
        </p>

        <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 2.4vw, 22px)", lineHeight: 1.5, color: BW.chalk2, maxWidth: "52ch", margin: "28px 0 0" }}>
          {d.standfirst}
        </p>

        {/* Facts ledger */}
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 0, borderTop: `1px solid rgba(244,236,218,0.18)`, borderBottom: `1px solid rgba(244,236,218,0.18)` }}>
          {d.facts.map((f, i) => (
            <div key={f.k} style={{ padding: "22px 0 24px", borderRight: i < d.facts.length - 1 && !isMobile ? `1px solid rgba(244,236,218,0.18)` : "none", paddingLeft: i === 0 ? 0 : "clamp(16px, 2vw, 24px)", paddingRight: i < d.facts.length - 1 ? "clamp(16px, 2vw, 24px)" : 0, borderBottom: isMobile && i < 2 ? `1px solid rgba(244,236,218,0.18)` : "none" }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600, marginBottom: 6 }}>{f.k}</div>
              <div style={{ fontFamily: BW.ffG, fontSize: 14, fontWeight: 700, color: BW.chalk50, letterSpacing: "-0.005em" }}>{f.v}</div>
            </div>
          ))}
        </div>

        {/* Section jump rail */}
        <div style={{ marginTop: 40, display: "flex", gap: 28, flexWrap: "wrap", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}>
          {[
            { k: "thesis", t: "Why the Lab" },
            { k: "rules", t: "House rules" },
            { k: "production", t: "In production" },
            { k: "specimens", t: "Specimens" },
          ].map((j) => (
            <a key={j.k} href={`#${j.k}`} style={{ color: BW.chalk2, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: BW.clay300 }}>↓</span>{j.t}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* §02 — Thesis. Chalk surface. Three columns explaining why the Lab exists. */
function LabThesis() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const d = BW_LAB.thesis;

  return (
    <section id="thesis" style={{ background: BW.chalk50, color: BW.ink, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.04) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>{d.eyebrow.split(" / ")[0]}</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>{d.eyebrow.split(" / ")[1]}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 32 : 80, alignItems: "end", marginBottom: 56 }}>
          <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 0.98, letterSpacing: "-0.03em", margin: 0, color: BW.ink }}>
            {d.title} <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>{d.italic}</em>
          </h2>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, color: BW.ink2, margin: 0, maxWidth: "44ch" }}>
            {d.standfirst}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", borderTop: `1.5px solid ${BW.ink}` }}>
          {d.columns.map((c, i) => (
            <div key={c.n} style={{ borderRight: !isMobile && i < d.columns.length - 1 ? `1px solid ${BW.ruleL}` : "none", borderBottom: isMobile && i < d.columns.length - 1 ? `1px solid ${BW.ruleL}` : "none", padding: "36px clamp(16px, 3vw, 32px) 40px", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ fontFamily: BW.ffG, fontSize: 36, fontWeight: 700, color: BW.clay, letterSpacing: "-0.03em", lineHeight: 1 }}>{c.n}</span>
                <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700 }}>Reason {c.n}</span>
              </div>
              <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(24px, 2.8vw, 32px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: BW.ink, maxWidth: "20ch" }}>
                {c.head}.
              </h3>
              <p style={{ fontFamily: BW.ffSerif, fontSize: 16, lineHeight: 1.6, color: BW.ink2, margin: 0, maxWidth: "44ch" }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* §03 — How the Lab runs. Forest surface. The six house rules.
   This is the section that does the differentiating work. */
function LabRules() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const d = BW_LAB.rules;

  return (
    <section id="rules" style={{ background: BW.forest, color: BW.chalk50, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.04) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "screen", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>{d.eyebrow.split(" / ")[0]}</span>
          <span style={{ width: 28, height: 1, background: BW.clay300 }} />
          <span>{d.eyebrow.split(" / ")[1]}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 32 : 80, alignItems: "end", marginBottom: 56 }}>
          <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 0.98, letterSpacing: "-0.03em", margin: 0, color: BW.chalk50 }}>
            {d.title} <em style={{ color: BW.clay300, fontStyle: "italic", fontWeight: 400 }}>{d.italic}</em>
          </h2>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, color: BW.chalk2, margin: 0, maxWidth: "44ch" }}>
            {d.standfirst}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", borderTop: `1px solid rgba(244,236,218,0.18)`, borderBottom: `1px solid rgba(244,236,218,0.18)` }}>
          {d.items.map((it, i) => {
            const isRightCol = !isMobile && i % 2 === 1;
            const isLastRow = !isMobile && i >= d.items.length - 2;
            return (
              <div key={it.n} style={{
                padding: "32px clamp(16px, 3vw, 36px) 36px",
                borderRight: isMobile ? "none" : isRightCol ? "none" : `1px solid rgba(244,236,218,0.18)`,
                borderBottom: isLastRow ? "none" : `1px solid rgba(244,236,218,0.18)`,
                display: "flex", flexDirection: "column", gap: 14,
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                  <span style={{ fontFamily: BW.ffG, fontSize: 28, fontWeight: 700, color: BW.clay300, letterSpacing: "-0.02em", lineHeight: 1 }}>{it.n}</span>
                  <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>Rule {it.n}</span>
                </div>
                <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 2.4vw, 28px)", lineHeight: 1.15, letterSpacing: "-0.015em", margin: 0, color: BW.chalk50, maxWidth: "26ch" }}>
                  {it.head}.
                </h3>
                <p style={{ fontFamily: BW.ffSerif, fontSize: 16, lineHeight: 1.6, color: BW.chalk2, margin: 0, maxWidth: "48ch" }}>
                  {it.body}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600 }}>BDW · Lab · House rules v1</span>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700 }}>Fig. 03 · The contract before the build</span>
        </div>
      </div>
    </section>
  );
}

window.LabHero = LabHero;
window.LabThesis = LabThesis;
window.LabRules = LabRules;
