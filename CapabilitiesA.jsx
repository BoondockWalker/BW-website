/* global React, BW, SiteHeader, BW_CAPABILITIES */
/* Capabilities — Hero + Pillars deep dive. */

function CapHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const d = BW_CAPABILITIES.hero;
  return (
    <section style={{ position: "relative", background: BW.ink, color: BW.chalk50, fontFamily: BW.ffG, overflow: "hidden", borderBottom: `1.5px solid ${BW.ink}` }}>
      {/* paper grain */}
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.025) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "screen", pointerEvents: "none" }} />
      {/* faint vertical 12-col rules */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", maxWidth: 1440, margin: "0 auto", opacity: 0.5 }}>
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} style={{ borderRight: `1px solid rgba(244,236,218,0.06)`, gridColumn: i + 1 }} />
        ))}
      </div>

      {/* HERO BODY */}
      <div style={{ position: "relative", padding: "clamp(48px, 8vw, 96px) clamp(20px, 5vw, 64px) clamp(56px, 8vw, 96px)", maxWidth: 1440, margin: "0 auto", zIndex: 3 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 36, flexWrap: "wrap" }}>
          <span>§02</span>
          <span style={{ width: 28, height: 1, background: BW.brass }} />
          <span>Capabilities · A field manual</span>
        </div>
        <h1 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(56px, 12vw, 156px)", lineHeight: 0.88, letterSpacing: "-0.04em", margin: 0, color: BW.chalk50, maxWidth: 1180 }}>
          {d.title}<br />
          <em style={{ color: BW.clay300, fontWeight: 400, fontStyle: "italic" }}>{d.titleItalic}</em>
        </h1>
        <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 2.4vw, 22px)", lineHeight: 1.5, color: BW.chalk2, maxWidth: "52ch", margin: "44px 0 0" }}>
          {d.standfirst}
        </p>

        {/* Three-pillar marker bar */}
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", borderTop: `1px solid rgba(244,236,218,0.18)`, borderBottom: `1px solid rgba(244,236,218,0.18)` }}>
          {[
            { n: "01", k: "Brand", c: BW.clay, t: "Story architecture" },
            { n: "02", k: "Demand", c: BW.brass, t: "Nurture & engagement" },
            { n: "03", k: "Lab", c: BW.clay300, t: "Applied AI" },
          ].map((p, i) => (
            <a key={p.n} href={`#${p.k.toLowerCase()}`} style={{ padding: "22px clamp(16px, 3vw, 28px)", borderRight: !isMobile && i < 2 ? `1px solid rgba(244,236,218,0.18)` : "none", borderBottom: isMobile && i < 2 ? `1px solid rgba(244,236,218,0.18)` : "none", display: "flex", alignItems: "baseline", gap: 18, textDecoration: "none", color: BW.chalk50 }}>
              <span style={{ fontFamily: BW.ffG, fontSize: 28, fontWeight: 700, color: p.c, letterSpacing: "-0.02em", lineHeight: 1 }}>{p.n}</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: p.c, fontWeight: 700 }}>{p.k}</span>
                <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 22, color: BW.chalk50, letterSpacing: "-0.02em" }}>{p.t}</span>
              </div>
              <span style={{ marginLeft: "auto", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", color: BW.chalk3 }}>↓</span>
            </a>
          ))}
        </div>

        {/* Facts ledger */}
        <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 0, borderTop: `1px solid rgba(244,236,218,0.18)` }}>
          {d.facts.map((f, i) => (
            <div key={f.k} style={{ padding: "20px 0 22px", borderRight: i < d.facts.length - 1 && !isMobile ? `1px solid rgba(244,236,218,0.18)` : "none", paddingLeft: i === 0 ? 0 : "clamp(16px, 2vw, 24px)", paddingRight: i < d.facts.length - 1 ? "clamp(16px, 2vw, 24px)" : 0, borderBottom: isMobile && i < 2 ? `1px solid rgba(244,236,218,0.18)` : "none" }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600, marginBottom: 6 }}>{f.k}</div>
              <div style={{ fontFamily: BW.ffG, fontSize: 14, fontWeight: 700, color: BW.chalk50, letterSpacing: "-0.005em" }}>{f.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   PILLARS — alternating editorial deep dives. One per practice.
   Each pillar has its own surface color, an annotated fig. object,
   editorial copy, a service list, and a "see it in the wild" example.
   ========================================================================= */
function CapPillarSection({ pillar, idx }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const surfaces = {
    clay:   { bg: BW.clay,   text: BW.chalk50, body: BW.chalk2, accent: BW.brass,   subtle: "rgba(244,236,218,0.18)", numCol: BW.chalk50 },
    plum:   { bg: BW.plum,   text: BW.chalk50, body: BW.chalk2, accent: BW.brass,   subtle: "rgba(244,236,218,0.18)", numCol: BW.chalk50 },
    forest: { bg: BW.forest, text: BW.chalk50, body: BW.chalk2, accent: BW.brass,   subtle: "rgba(244,236,218,0.18)", numCol: BW.chalk50 },
  };
  const s = surfaces[pillar.surface] || surfaces.clay;
  const reverse = idx % 2 === 1;

  return (
    <section id={pillar.key.toLowerCase()} style={{ background: s.bg, color: s.text, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      {/* subtle paper texture */}
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.04) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 64px)" }}>
        {/* Top label rail — pillar #N */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>§03 · {pillar.n}</span>
          <span style={{ width: 28, height: 1, background: s.accent }} />
          <span>Pillar {pillar.n} · {pillar.tag}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : reverse ? "1fr 1.4fr" : "1.4fr 1fr", gap: isMobile ? 48 : 80, alignItems: "start" }}>
          {/* COPY COLUMN */}
          <div style={{ order: isMobile ? 2 : reverse ? 2 : 1 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginBottom: 20, flexWrap: "wrap" }}>
              <span style={{ fontFamily: BW.ffG, fontSize: "clamp(96px, 14vw, 180px)", fontWeight: 700, color: s.numCol, letterSpacing: "-0.05em", lineHeight: 0.85 }}>{pillar.n}</span>
              <span style={{ fontFamily: BW.ffM, fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: s.text, fontWeight: 700 }}>{pillar.tag}</span>
            </div>
            <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 28px", color: s.text }}>
              {pillar.title}.
            </h2>
            <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 2.8vw, 30px)", lineHeight: 1.25, letterSpacing: "-0.015em", margin: "0 0 24px", color: s.text, maxWidth: "32ch" }}>
              {pillar.lede}
            </p>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, margin: 0, color: s.body, maxWidth: "44ch" }}>
              {pillar.body}
            </p>

            {/* SERVICE LIST */}
            <div style={{ marginTop: 40, paddingTop: 28, borderTop: `1px solid ${s.subtle}` }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: s.body, fontWeight: 600, marginBottom: 18 }}>What we ship</div>
              <ul style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "10px 28px", margin: 0, padding: 0, listStyle: "none" }}>
                {pillar.services.map((sv) => (
                  <li key={sv} style={{ display: "flex", alignItems: "baseline", gap: 12, fontFamily: BW.ffSerif, fontSize: 16, color: s.text, paddingBottom: 10, borderBottom: `1px solid ${s.subtle}` }}>
                    <span style={{ fontFamily: BW.ffM, fontSize: 10, color: s.accent, letterSpacing: "0.18em", fontWeight: 700, paddingTop: 2 }}>—</span>
                    <span>{sv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXAMPLE / SEE IT */}
            <div style={{ marginTop: 32, padding: "20px 22px", border: `1px solid ${s.subtle}`, borderRadius: 12, display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: 18, justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: s.body, fontWeight: 600, marginBottom: 6 }}>See it in the wild</div>
                <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 22, color: s.text, letterSpacing: "-0.015em", marginBottom: 4 }}>{pillar.example.case}</div>
                <div style={{ fontFamily: BW.ffSerif, fontSize: 14, color: s.body, lineHeight: 1.5, maxWidth: "48ch" }}>{pillar.example.note}</div>
              </div>
              <a href="work.html" style={{ flexShrink: 0, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: s.text, textDecoration: "none", borderBottom: `1.5px solid ${s.accent}`, paddingBottom: 4, fontWeight: 700 }}>See the work →</a>
            </div>
          </div>

          {/* FIG. COLUMN — annotated object */}
          <div style={{ order: isMobile ? 1 : reverse ? 1 : 2, position: "relative", minHeight: isMobile ? 360 : 540 }}>
            <div style={{ position: "relative", aspectRatio: "1 / 1", maxWidth: isMobile ? 420 : "100%", margin: "0 auto" }}>
              {/* Fig. frame label */}
              <div style={{ position: "absolute", top: 0, left: 0, fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: s.body, fontWeight: 600, lineHeight: 1.5 }}>
                Fig.<br />№{pillar.n}
              </div>
              <div style={{ position: "absolute", top: 0, right: 0, textAlign: "right", fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: s.body, fontWeight: 600, lineHeight: 1.5 }}>
                BDW · 2026<br />fig. 03.{pillar.n}
              </div>

              {/* Object */}
              <img src={pillar.objectImg} alt={pillar.objectCap} style={{ position: "absolute", inset: "12% 6% 20%", width: "88%", height: "68%", objectFit: "contain", filter: pillar.surface === "forest" ? "sepia(0.55) saturate(0.5) hue-rotate(-10deg) brightness(1.18) contrast(0.92)" : "none", mixBlendMode: pillar.surface === "clay" ? "multiply" : "normal" }} />

              {/* Annotation marks (corner tickmarks) */}
              {[ ["top", "left"], ["top", "right"], ["bottom", "left"], ["bottom", "right"] ].map(([y, x]) => (
                <div key={`${y}${x}`} style={{ position: "absolute", [y]: 28, [x]: 28, width: 24, height: 24, [`border${y === "top" ? "Top" : "Bottom"}`]: `1px solid ${s.subtle}`, [`border${x === "left" ? "Left" : "Right"}`]: `1px solid ${s.subtle}` }} />
              ))}

              {/* Bottom caption */}
              <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", textAlign: "center", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: s.body, fontWeight: 600, paddingTop: 10, borderTop: `1px solid ${s.subtle}`, width: "60%" }}>
                {pillar.objectCap}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapPillars() {
  return (
    <>
      {BW_CAPABILITIES.pillars.map((p, i) => (
        <CapPillarSection key={p.n} pillar={p} idx={i} />
      ))}
    </>
  );
}

window.CapHero = CapHero;
window.CapPillars = CapPillars;
window.CapPillarSection = CapPillarSection;
