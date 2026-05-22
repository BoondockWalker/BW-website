/* global React, BW, SiteHeader */
/* Homepage v3.1 — Hero. Nav lives in SiteHeader.jsx (used site-wide). */

function V3Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section style={{ position: "relative", background: BW.clay, color: BW.chalk50, minHeight: isMobile ? 640 : 920, fontFamily: BW.ffG, overflow: "hidden", borderBottom: `1.5px solid ${BW.ink}`, display: "flex", flexDirection: "column" }}>
      {/* paper texture — section hatch covers the area below the header */}
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.06) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />

      {/* FLOATING HIKING BOOTS — scales with viewport, sits behind copy on mobile */}
      <img src="assets/hiking-boots.png" alt="" style={{ position: "absolute", right: isMobile ? "-20vw" : -40, top: isMobile ? 80 : 110, width: "min(720px, 92vw)", maxWidth: 720, mixBlendMode: "multiply", filter: "contrast(1.05) saturate(0.9)", transform: "rotate(-4deg)", pointerEvents: "none", zIndex: 1, opacity: isMobile ? 0.55 : 1 }} />

      {/* MAIN PHRASE */}
      <div style={{ position: "relative", padding: "clamp(48px, 8vw, 80px) clamp(20px, 5vw, 64px)", zIndex: 3 }}>
        <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 32, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <span>§01</span>
          <span style={{ width: 28, height: 1, background: BW.brass }} />
          <span>The Thesis · A field manual for closing</span>
        </div>
        <h1 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(64px, 16vw, 196px)", lineHeight: 0.86, letterSpacing: "-0.025em", margin: 0, color: BW.chalk50, maxWidth: 1100 }}>
          Take<br/>the&nbsp;<em style={{ color: BW.brass, fontWeight: 400, fontStyle: "italic" }}>long</em><br/>way <em style={{ color: BW.ink, fontWeight: 400, fontStyle: "italic" }}>home.</em>
        </h1>
      </div>

      {/* BOTTOM LEDGER — pinned to section bottom via margin-top: auto in the flex column */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr 1fr 1fr 220px", borderTop: `1px solid rgba(244,236,218,0.35)`, background: "rgba(20,16,12,0.18)", backdropFilter: "blur(6px)", position: "relative", zIndex: 5, marginTop: "auto" }}>
        <div style={{ padding: "18px clamp(18px, 4vw, 28px)", borderRight: isMobile ? "none" : `1px solid rgba(244,236,218,0.25)`, borderBottom: isMobile ? `1px solid rgba(244,236,218,0.25)` : "none" }}>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 14, lineHeight: 1.45, margin: 0, color: BW.chalk50, maxWidth: 380 }}>
            We work with you for the long haul — long enough to turn the story you're proud of into pipeline you can count on.
          </p>
        </div>
        {isMobile ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: "none" }}>
            {[
              { k: "Discipline", v: "Brand · Demand · Lab", c: BW.chalk50 },
              { k: "Bureau", v: "Cleveland", c: BW.chalk50 },
              { k: "Practice", v: "Since 2015", c: BW.brass },
            ].map((s, i) => (
              <div key={s.k} style={{ padding: "16px 12px", borderRight: i < 2 ? `1px solid rgba(244,236,218,0.25)` : "none" }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 600, marginBottom: 5 }}>{s.k}</div>
                <div style={{ fontFamily: BW.ffG, fontSize: 12, fontWeight: 700, color: s.c, letterSpacing: "-0.005em", lineHeight: 1.25 }}>{s.v}</div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {[
              { k: "Discipline", v: "Brand · Demand · Lab", c: BW.chalk50 },
              { k: "Bureau", v: "Cleveland / Remote", c: BW.chalk50 },
              { k: "Practice", v: "Since 2015", c: BW.brass },
            ].map((s) => (
              <div key={s.k} style={{ padding: "18px clamp(16px, 3.5vw, 22px)", borderRight: `1px solid rgba(244,236,218,0.25)` }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 600, marginBottom: 5 }}>{s.k}</div>
                <div style={{ fontFamily: BW.ffG, fontSize: 14, fontWeight: 700, color: s.c, letterSpacing: "-0.005em" }}>{s.v}</div>
              </div>
            ))}
            <div style={{ padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk50, fontWeight: 700 }}>
              ↓ §02 Thesis
            </div>
          </>
        )}
      </div>
    </section>
  );
}

window.V3Hero = V3Hero;
