/* global React, BW */
/* Homepage v3 — Sections following the editorial L1/N1 system */

/* §02 — Thesis manifesto. Cream paper, big serif statement, numbered tenets, marquee */
function V3Thesis() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const tenets = [
    ["i.", "Story is infrastructure, not decoration."],
    ["ii.", "Pipeline is the honest test of brand."],
    ["iii.", "The senior people you meet are the people doing the work."],
    ["iv.", "AI should disappear into the output."],
    ["v.", "Every engagement should make the next one stronger."],
  ];
  return (
    <section id="thesis" style={{ background: BW.chalk50, color: BW.ink, borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px) clamp(40px, 6vw, 80px)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 36, flexWrap: "wrap" }}>
          <span>§02</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>The Thesis · Manifesto</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 40 : 80, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: BW.ffD, fontSize: "clamp(32px, 6vw, 56px)", lineHeight: 1.08, fontStyle: "italic", margin: "0 0 32px", color: BW.ink, letterSpacing: "-0.025em", fontWeight: 400 }}>
              Brand-led demand, built to <em style={{ fontStyle: "italic", color: BW.clay, fontWeight: 400 }}>compound.</em>
            </p>
            <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(16px, 2.4vw, 20px)", lineHeight: 1.55, margin: 0, color: BW.ink2, maxWidth: "44ch" }}>
              Most firms split brand and growth into separate disciplines, separate teams, separate invoices. We don't. Boondock Walker builds the brand foundation and the demand engine as <em style={{ fontFamily: BW.ffD, fontStyle: "italic", color: BW.ink, fontWeight: 400 }}>one connected system</em> — so the strategy that defines who you are is the same strategy generating pipeline. Senior principals lead the work. Our proprietary tools accelerate it. The outcomes carry forward.
            </p>
          </div>
          <div style={{ paddingTop: 8 }}>
            <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", marginBottom: 18, fontWeight: 600 }}>Five tenets we work by.</div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "14px 22px", fontFamily: BW.ffSerif, fontSize: 17, color: BW.ink, lineHeight: 1.5 }}>
              {tenets.map(([n, t]) => (
                <React.Fragment key={n}>
                  <span style={{ fontFamily: BW.ffM, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, paddingTop: 3 }}>{n}</span>
                  <span>{t}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TENET FIG. — replaces the old marquee */}
      <div style={{ background: BW.ink, color: BW.chalk, borderTop: `1.5px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(40px, 6vw, 56px) clamp(20px, 5vw, 64px)", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "240px 1fr 200px", alignItems: isMobile ? "start" : "center", gap: isMobile ? 24 : 40 }}>
          <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,236,218,0.55)", fontWeight: 600, lineHeight: 1.5 }}>
            Tenet&nbsp;ii.<br/>Field manual,<br/>page 14.
          </div>
          <p style={{ fontFamily: BW.ffD, fontSize: "clamp(36px, 8vw, 64px)", lineHeight: 1.02, fontStyle: "italic", margin: 0, color: BW.chalk, letterSpacing: "-0.03em", fontWeight: 400 }}>
            Pipeline, <em style={{ color: BW.brass, fontStyle: "italic", fontWeight: 400 }}>not applause.</em>
          </p>
          <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,236,218,0.45)", fontWeight: 600, textAlign: isMobile ? "left" : "right", lineHeight: 1.5 }}>
            fig. 02.ii<br/>BDW · 2026
          </div>
        </div>
      </div>
    </section>
  );
}

/* §03 — Capabilities pillars. Cream cards w/ object icons (compass, ledger, stitch) */
function PillarIcon({ kind, c }) {
  const stroke = BW.ink;
  const sw = 1.4;
  if (kind === "compass") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="40" fill="none" stroke={stroke} strokeWidth={sw} />
      <circle cx="50" cy="50" r="32" fill="none" stroke={stroke} strokeWidth="0.5" />
      {Array.from({length:16}).map((_,i)=>(
        <line key={i} x1="50" y1="10" x2="50" y2={i%4===0?17:13} stroke={stroke} strokeWidth={i%4===0?1.2:0.5} transform={`rotate(${i*22.5} 50 50)`} />
      ))}
      <polygon points="50,18 54,50 50,82 46,50" fill={c} stroke={stroke} strokeWidth="0.7" />
      <circle cx="50" cy="50" r="2.5" fill={stroke} />
    </svg>
  );
  if (kind === "ledger") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect x="18" y="14" width="64" height="74" fill={c} stroke={stroke} strokeWidth={sw} />
      <line x1="50" y1="14" x2="50" y2="88" stroke={stroke} strokeWidth="0.6" />
      {[26,34,42,50,58,66,74,82].map(y=><line key={y} x1="20" y1={y} x2="80" y2={y} stroke={stroke} strokeWidth="0.4" opacity="0.6" />)}
      <rect x="18" y="14" width="64" height="6" fill={stroke} />
    </svg>
  );
  if (kind === "stitch") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="38" fill={c} stroke={stroke} strokeWidth={sw} />
      <path d="M 22 50 L 30 46 L 34 54 L 42 46 L 46 54 L 54 46 L 58 54 L 66 46 L 70 54 L 78 50" fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round" />
      <text x="50" y="80" textAnchor="middle" fontFamily={BW.ffM} fontSize="6" letterSpacing="2" fill={stroke} fontWeight="700">LAB</text>
    </svg>
  );
  return null;
}

function V3Pillars() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const pillars = [
    { n: "01", k: "Brand", t: "Story architecture", body: "Voice, narrative, messaging that survives sales calls. Built to close, not to win awards.", c: BW.clay, img: "assets/field-journal.png?v=3", cap: "Fig. A · Field journal", numColor: BW.clay, tint: "none" },
    { n: "02", k: "Demand", t: "Nurture & engagement", body: "Lifecycle as choreography. Stage-by-stage nurture, attribution, and sales-enablement that turn cold lists into warm conversations. (HubSpot under the hood — but the work is the motion, not the tool.)", c: BW.plum, img: "assets/coffee-napkin-burg.png?v=3", cap: "Fig. B · Coffee & napkin", numColor: BW.plum, tint: "none" },
    { n: "03", k: "Lab", t: "Applied AI", body: "AI woven through the marketing motion — not a product, a substrate. Desk-reps that triage inbound, voice-trained content engines, intent scoring, custom tooling. Built for use, not for show.", c: BW.brass, img: "assets/brain.png", cap: "Fig. C · Cortex", numColor: BW.chalk2, tint: "sepia(0.55) saturate(0.55) hue-rotate(-10deg) brightness(1.18) contrast(0.92)" },
  ];
  const pillarImgSize = isMobile ? 160 : 240;
  return (
    <section id="capabilities" style={{ background: BW.ink, color: BW.chalk, paddingTop: "clamp(56px, 8vw, 80px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ padding: "0 clamp(20px, 5vw, 64px) clamp(40px, 6vw, 56px)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700, marginBottom: 36, flexWrap: "wrap" }}>
          <span>§03</span>
          <span style={{ width: 28, height: 1, background: BW.clay300 }} />
          <span>Capabilities · Three Pillars / One Arc</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(48px, 9vw, 96px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.92, margin: 0, color: BW.chalk, maxWidth: 1180 }}>
          We do the <em style={{ color: BW.clay300, fontWeight: 400, fontStyle: "italic" }}>three things</em> most teams need from <em style={{ color: BW.brass, fontWeight: 400, fontStyle: "italic" }}>five</em> vendors.
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", borderTop: `1px solid rgba(244,236,218,0.18)` }}>
        {pillars.map((p, i) => (
          <div key={p.n} style={{ borderRight: !isMobile && i < 2 ? `1px solid rgba(244,236,218,0.18)` : "none", borderBottom: isMobile && i < 2 ? `1px solid rgba(244,236,218,0.18)` : "none", padding: "44px clamp(20px, 5vw, 36px) 40px", display: "flex", flexDirection: "column", gap: 20, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "relative", height: pillarImgSize - 40, marginTop: -64, marginBottom: 0 }}>
              <div style={{ position: "absolute", left: 0, top: 64, zIndex: 2 }}>
                <span style={{ fontFamily: BW.ffG, fontSize: "clamp(48px, 8vw, 64px)", fontWeight: 700, color: p.numColor, lineHeight: 0.85, letterSpacing: "-0.05em", display: "block", opacity: 0.5 }}>{p.n}</span>
              </div>
              <img src={p.img} alt="" style={{ position: "absolute", right: isMobile ? -16 : -36, top: -20, width: pillarImgSize, height: pillarImgSize, objectFit: "contain", pointerEvents: "none", zIndex: 1, filter: p.tint }} />
            </div>
            <h3 style={{ fontFamily: BW.ffD, fontSize: "clamp(40px, 5.4vw, 56px)", fontWeight: 400, letterSpacing: "-0.02em", margin: 0, color: p.c, lineHeight: 1, fontStyle: "italic" }}>{p.k}.</h3>
            <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 20, fontWeight: 400, color: BW.chalk, lineHeight: 1.2, letterSpacing: "-0.01em", marginTop: -6 }}>{p.t}.</div>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 16, lineHeight: 1.6, margin: 0, color: "rgba(244,236,218,0.78)" }}>{p.body}</p>
            <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 18, borderTop: `1px solid rgba(244,236,218,0.18)`, gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,236,218,0.5)", fontWeight: 600 }}>{p.cap}</span>
              <a style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: p.c, textDecoration: "none", borderBottom: `1.5px solid ${p.c}`, paddingBottom: 3, fontWeight: 700, cursor: "pointer" }}>View projects →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.V3Thesis = V3Thesis;
window.V3Pillars = V3Pillars;
