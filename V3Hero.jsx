/* global React, BW, SiteHeader */
/* Homepage v3.1 — Hero. Nav lives in SiteHeader.jsx (used site-wide). */

function V3Hero() {
  return (
    <section style={{ position: "relative", background: BW.clay, color: BW.chalk50, minHeight: 920, fontFamily: BW.ffG, overflow: "hidden", borderBottom: `1.5px solid ${BW.ink}` }}>
      {/* paper texture — note: SiteHeader brings its own hatch; section hatch covers the rest below the header */}
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.06) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />

      <SiteHeader current={null} />

      {/* FLOATING HIKING BOOTS */}
      <img src="assets/hiking-boots.png" alt="" style={{ position: "absolute", right: -40, top: 110, width: 720, mixBlendMode: "multiply", filter: "contrast(1.05) saturate(0.9)", transform: "rotate(-4deg)", pointerEvents: "none", zIndex: 1 }} />

      {/* MAIN PHRASE */}
      <div style={{ position: "relative", padding: "80px 64px 80px", zIndex: 3 }}>
        <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 32, display: "flex", alignItems: "center", gap: 14 }}>
          <span>§01</span>
          <span style={{ width: 28, height: 1, background: BW.brass }} />
          <span>The Thesis · A field manual for closing</span>
        </div>
        <h1 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: 196, lineHeight: 0.86, letterSpacing: "-0.04em", margin: 0, color: BW.chalk50, maxWidth: 1100 }}>
          Take<br/>the&nbsp;<em style={{ color: BW.brass, fontWeight: 400, fontStyle: "italic" }}>long</em><br/>way <em style={{ color: BW.ink, fontWeight: 400, fontStyle: "italic" }}>home.</em>
        </h1>
      </div>

      {/* BOTTOM LEDGER */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 220px", borderTop: `1px solid rgba(244,236,218,0.35)`, background: "rgba(20,16,12,0.18)", backdropFilter: "blur(6px)", position: "relative", zIndex: 5 }}>
        <div style={{ padding: "18px 28px", borderRight: `1px solid rgba(244,236,218,0.25)` }}>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 14, lineHeight: 1.45, margin: 0, color: BW.chalk50, maxWidth: 380 }}>
            We don't run sprints. We walk operators across the long territory between a story you're proud of and a pipeline you can predict.
          </p>
        </div>
        {[
          { k: "Discipline", v: "Brand · Demand · Lab", c: BW.chalk50 },
          { k: "Bureau", v: "Cleveland / Remote", c: BW.chalk50 },
          { k: "Practice", v: "Since 2015", c: BW.brass },
        ].map((s) => (
          <div key={s.k} style={{ padding: "18px 22px", borderRight: `1px solid rgba(244,236,218,0.25)` }}>
            <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 600, marginBottom: 5 }}>{s.k}</div>
            <div style={{ fontFamily: BW.ffG, fontSize: 14, fontWeight: 700, color: s.c, letterSpacing: "-0.005em" }}>{s.v}</div>
          </div>
        ))}
        <div style={{ padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk50, fontWeight: 700 }}>
          ↓ §02 Thesis
        </div>
      </div>
    </section>
  );
}

window.V3Hero = V3Hero;
