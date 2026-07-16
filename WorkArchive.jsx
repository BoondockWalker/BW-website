/* global React, BW */
/* Work / Case Studies — Index page sections */

/* Header now lives in SiteHeader.jsx — used site-wide. */

/* ───── §01 Work · Title masthead (chalk paper) ───── */
function WorkMasthead({ count, filterCount }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isNarrow = useMediaQuery("(max-width: 560px)");
  // Pull the masthead up by half-pill-height so its chalk50 bg paints behind
  // the pill's lower transparent half — the pill visually bisects the
  // chalk2 (body) → chalk50 (masthead) seam at its vertical midline. On
  // scroll, the masthead scrolls past the pill and the lower half becomes
  // truly transparent over whatever's beneath. Matches heroBandHeight in
  // SiteHeader.
  const heroOverlap = isNarrow ? 25 : 30;
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", marginTop: -heroOverlap }}>
      <div style={{ padding: "clamp(48px, 7vw, 72px) clamp(20px, 5vw, 64px) clamp(40px, 6vw, 56px)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 32, flexWrap: "wrap" }}>
          <span>§01</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>The Archive · Selected Receipts, 2015–2026</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr", gap: isMobile ? 32 : 80, alignItems: "end" }}>
          <h1 style={{ fontFamily: BW.ffD, fontSize: "clamp(80px, 18vw, 168px)", fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 0.88, margin: 0, color: BW.ink }}>
            Success<br/><em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>stories.</em>
          </h1>
          <div style={{ paddingBottom: isMobile ? 0 : 24 }}>
            <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.55, margin: "0 0 28px", color: BW.ink2, maxWidth: "44ch" }}>
              A selection of cases from the last decade. Each one moves through the same arc — the challenge a client came to us with, the approach we took together, and the outcome — all pointed at the same north star: building rock-solid brands.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "rgba(20,16,12,0.55)" }}>
              <div><div style={{ fontFamily: BW.ffG, fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700, color: BW.ink, letterSpacing: "-0.02em", marginBottom: 4 }}>{count}</div><div>Featured</div></div>
              <div><div style={{ fontFamily: BW.ffG, fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700, color: BW.ink, letterSpacing: "-0.02em", marginBottom: 4 }}>47</div><div>All-time</div></div>
              <div><div style={{ fontFamily: BW.ffG, fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700, color: BW.clay, letterSpacing: "-0.02em", marginBottom: 4 }}>{filterCount}</div><div>Showing</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Filter row ───── */
const PILLARS = ["All", "Brand", "Demand", "Lab"];
const INDUSTRIES = ["All industries", "B2B", "B2C", "DTC", "Education", "Faith/Non-Profit", "Fintech", "Healthcare", "Manufacturing", "Pro services"];
const OUTCOMES = ["All outcomes", "Pipeline", "Brand", "Retention", "Efficiency"];

function FilterRow({ pillar, setPillar, industry, setIndustry, outcome, setOutcome, sort, setSort, view, setView }) {
  const Chip = ({ active, onClick, children, color }) => (
    <a onClick={onClick} style={{
      fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700,
      padding: "8px 14px", border: `1px solid ${active ? BW.ink : BW.ruleL}`,
      background: active ? BW.ink : "transparent",
      color: active ? BW.chalk50 : BW.ink, borderRadius: 999, cursor: "pointer", whiteSpace: "nowrap",
    }}>{children}</a>
  );
  const Select = ({ value, onChange, options, label }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 8, borderLeft: `1px solid ${BW.ruleL}`, paddingLeft: 18 }}>
      <span style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={{
        fontFamily: BW.ffG, fontSize: 12, fontWeight: 700, color: BW.ink, background: "transparent", border: "none", outline: "none", cursor: "pointer", letterSpacing: "-0.005em",
      }}>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
  return (
    <section style={{ background: BW.chalk, color: BW.ink, borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "sticky", top: 0, zIndex: 10 }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "14px clamp(20px, 5vw, 64px)", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700 }}>Filter ▽</div>
        <div style={{ display: "flex", gap: 8 }}>
          {PILLARS.map(p => <Chip key={p} active={pillar === p} onClick={() => setPillar(p)}>{p}</Chip>)}
        </div>
        <Select value={industry} onChange={setIndustry} options={INDUSTRIES} label="Industry" />
        <Select value={outcome} onChange={setOutcome} options={OUTCOMES} label="Outcome" />
        <div style={{ flex: 1 }} />
        <Select value={sort} onChange={setSort} options={["Most recent", "Oldest", "By pillar", "By outcome"]} label="Sort" />
        <div style={{ display: "flex", gap: 4, borderLeft: `1px solid ${BW.ruleL}`, paddingLeft: 14 }}>
          {[
            { v: "grid", g: <svg width="14" height="14" viewBox="0 0 14 14"><rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" fill="none" /><rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" fill="none" /><rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" fill="none" /><rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" fill="none" /></svg> },
            { v: "list", g: <svg width="14" height="14" viewBox="0 0 14 14"><rect x="0.5" y="1" width="13" height="2.5" stroke="currentColor" fill="none" /><rect x="0.5" y="5.75" width="13" height="2.5" stroke="currentColor" fill="none" /><rect x="0.5" y="10.5" width="13" height="2.5" stroke="currentColor" fill="none" /></svg> },
          ].map(o => (
            <a key={o.v} onClick={() => setView(o.v)} style={{ padding: 8, borderRadius: 4, color: view === o.v ? BW.ink : "rgba(20,16,12,0.45)", cursor: "pointer", background: view === o.v ? "rgba(20,16,12,0.06)" : "transparent", display: "flex", alignItems: "center" }}>{o.g}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Featured case (full-bleed editorial row) ───── */
function FeaturedCase({ c }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <section style={{ background: c.featuredBg || BW.ink, color: BW.chalk50, borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.04) 0 1.5px, transparent 1.5px 8px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "28px clamp(20px, 5vw, 64px) 0", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, flexWrap: "wrap" }}>
          <span>§02</span>
          <span style={{ width: 28, height: 1, background: BW.brass }} />
          <span>Featured Case</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.05fr 1fr", maxWidth: 1440, margin: "0 auto", padding: "32px clamp(20px, 5vw, 64px) clamp(48px, 7vw, 64px)", gap: isMobile ? 40 : 64, alignItems: "center", position: "relative" }}>
        {/* left — copy */}
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
            {c.tags.map(t => (
              <span key={t} style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", padding: "5px 10px", border: `1px solid ${BW.brass}`, color: BW.brass, borderRadius: 3, fontWeight: 600 }}>{t}</span>
            ))}
          </div>
          <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,236,218,0.55)", fontWeight: 600, marginBottom: 16 }}>
            Case №{c.no} · {c.year} · {c.industry}
          </div>
          <h2 style={{ fontFamily: BW.ffG, fontSize: "clamp(40px, 8vw, 56px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 0.92, margin: "0 0 14px", color: BW.chalk50, textTransform: "uppercase" }}>
            {c.client}
          </h2>
          <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: "clamp(24px, 5vw, 36px)", lineHeight: 1.12, margin: "0 0 32px", color: BW.brass, letterSpacing: "-0.02em", fontWeight: 400 }}>
            {c.pull}
          </p>
          <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.55, margin: "0 0 36px", color: "rgba(244,236,218,0.78)", maxWidth: "44ch" }}>
            {c.lede}
          </p>
          {/* receipts strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid rgba(244,236,218,0.2)`, marginBottom: 32 }}>
            {c.metrics.map((m, i) => (
              <div key={m.k} style={{ padding: "18px 20px", borderRight: i < 2 ? `1px solid rgba(244,236,218,0.2)` : "none" }}>
                <div style={{ fontFamily: BW.ffG, fontSize: 28, fontWeight: 700, color: BW.brass, letterSpacing: "-0.02em", marginBottom: 4 }}>{m.v}</div>
                <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,236,218,0.6)", fontWeight: 600 }}>{m.k}</div>
              </div>
            ))}
          </div>
          <a href={c.href || `case.html?id=${c.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 12, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: BW.ink, background: BW.brass, padding: "13px 22px", borderRadius: 999, fontWeight: 700, textDecoration: "none", cursor: "pointer" }}>
            Read the full file →
          </a>
        </div>
        {/* right — editorial swatch (hero image if provided, else colored gradient) */}
        <div style={{ position: "relative", aspectRatio: "4/5" }}>
          <div style={{ position: "absolute", inset: 0, background: c.tone, border: `1px solid rgba(244,236,218,0.2)`, overflow: "hidden" }}>
            {c.heroImage && (
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${c.heroImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
            )}
            {c.heroImage && (
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,12,0.45) 0%, rgba(20,16,12,0.10) 32%, rgba(20,16,12,0.18) 60%, rgba(20,16,12,0.78) 100%)", pointerEvents: "none" }} />
            )}
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(20,16,12,0.18) 0 2px, transparent 2px 9px)", mixBlendMode: "multiply" }} />
            {/* big folio */}
            <div style={{ position: "absolute", left: 28, top: 28, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.chalk50, fontWeight: 700 }}>
              Case №{c.no} · fig. {c.no}.0
            </div>
            {/* upper-right: client logo if provided, else big year mark */}
            {c.clientLogo ? (
              <img src={c.clientLogo} alt={c.client} style={{ position: "absolute", right: 32, top: 32, height: c.clientLogoHeight || 36, maxWidth: "55%", objectFit: "contain", filter: c.clientLogoInvert ? "brightness(0) invert(1)" : "none", opacity: 0.95 }} />
            ) : (
              <div style={{ position: "absolute", right: 32, top: 32, fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(56px, 12vw, 96px)", color: "rgba(251,247,238,0.85)", letterSpacing: "-0.015em", lineHeight: 0.85 }}>{c.year}</div>
            )}
            {/* big stat */}
            <div style={{ position: "absolute", left: 28, bottom: 28, color: BW.chalk50 }}>
              <div style={{ fontFamily: BW.ffG, fontSize: "clamp(96px, 22vw, 168px)", fontWeight: 700, lineHeight: 0.85, letterSpacing: "-0.05em", color: BW.chalk50 }}>{c.bigStat.v}</div>
              <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 600, marginTop: 8 }}>{c.bigStat.k}</div>
            </div>
            {/* corner ticks */}
            {["LT","RT","LB","RB"].map(p => {
              const css = { position: "absolute", width: 14, height: 14, border: `1.5px solid ${BW.chalk50}` };
              if (p === "LT") Object.assign(css, { left: 8, top: 8, borderRight: "none", borderBottom: "none" });
              if (p === "RT") Object.assign(css, { right: 8, top: 8, borderLeft: "none", borderBottom: "none" });
              if (p === "LB") Object.assign(css, { left: 8, bottom: 8, borderRight: "none", borderTop: "none" });
              if (p === "RB") Object.assign(css, { right: 8, bottom: 8, borderLeft: "none", borderTop: "none" });
              return <span key={p} style={css} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

window.WorkMasthead = WorkMasthead;
window.FilterRow = FilterRow;
window.FeaturedCase = FeaturedCase;
