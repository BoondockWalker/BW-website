/* global React, BW, BW_CAPABILITIES */
/* Capabilities — Catalog, Evidence, Process, CTA. */

/* §04 — Service catalog. Three columns, dense. Newspaper-classifieds vibe. */
function CapCatalog() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const d = BW_CAPABILITIES.catalog;
  const colorByHead = { Brand: BW.clay, Demand: BW.plum, Lab: BW.forest };

  return (
    <section style={{ background: BW.chalk50, color: BW.ink, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>{d.eyebrow.split(" / ")[0]}</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>{d.eyebrow.split(" / ")[1]}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 32 : 80, alignItems: "end", marginBottom: 56 }}>
          <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 0.98, letterSpacing: "-0.03em", margin: 0, color: BW.ink }}>
            {d.title} Hire us for <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>{d.italic}</em> {d.after}
          </h2>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, color: BW.ink2, margin: 0, maxWidth: "40ch" }}>
            {d.note}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", borderTop: `1.5px solid ${BW.ink}` }}>
          {d.columns.map((col, i) => {
            const c = colorByHead[col.head] || BW.clay;
            return (
              <div key={col.head} style={{ borderRight: !isMobile && i < 2 ? `1px solid ${BW.ruleL}` : "none", borderBottom: isMobile && i < 2 ? `1px solid ${BW.ruleL}` : "none", padding: "32px clamp(16px, 3vw, 28px)" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
                  <h3 style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700, color: c, margin: 0 }}>{col.head}</h3>
                  <span style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", color: BW.ink3, fontWeight: 600 }}>{String(col.items.length).padStart(2, "0")} services</span>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {col.items.map((it, j) => (
                    <li key={it} style={{ display: "flex", alignItems: "baseline", gap: 14, padding: "12px 0", borderBottom: j < col.items.length - 1 ? `1px solid ${BW.ruleL}` : "none" }}>
                      <span style={{ fontFamily: BW.ffM, fontSize: 10, color: c, letterSpacing: "0.18em", fontWeight: 700, minWidth: 20 }}>{String(j + 1).padStart(2, "0")}</span>
                      <span style={{ fontFamily: BW.ffSerif, fontSize: 17, color: BW.ink, lineHeight: 1.4 }}>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* §05 — Evidence. Stats + pull-quote on ink. */
function CapEvidence() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const d = BW_CAPABILITIES.evidence;
  const colors = { clay: BW.clay300, plum: BW.brass, forest: BW.clay300 };

  return (
    <section style={{ background: BW.ink, color: BW.chalk, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.025) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "screen", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>{d.eyebrow.split(" / ")[0]}</span>
          <span style={{ width: 28, height: 1, background: BW.clay300 }} />
          <span>{d.eyebrow.split(" / ")[1]}</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 0.98, letterSpacing: "-0.03em", margin: "0 0 56px", color: BW.chalk, maxWidth: 1100 }}>
          {d.title} <em style={{ color: BW.clay300, fontStyle: "italic", fontWeight: 400 }}>{d.italic}</em>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", borderTop: `1px solid rgba(244,236,218,0.18)`, borderBottom: `1px solid rgba(244,236,218,0.18)` }}>
          {d.stats.map((s, i) => (
            <div key={i} style={{ borderRight: !isMobile && i < d.stats.length - 1 ? `1px solid rgba(244,236,218,0.18)` : "none", borderBottom: isMobile && i < d.stats.length - 1 ? `1px solid rgba(244,236,218,0.18)` : "none", padding: "44px clamp(16px, 3vw, 28px)", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontFamily: BW.ffG, fontSize: "clamp(72px, 12vw, 144px)", fontWeight: 700, color: colors[s.c] || BW.clay300, letterSpacing: "-0.05em", lineHeight: 0.85 }}>{s.v}</div>
              <div style={{ fontFamily: BW.ffSerif, fontSize: 16, lineHeight: 1.5, color: BW.chalk2, maxWidth: "32ch" }}>{s.k}</div>
            </div>
          ))}
        </div>

        {/* Pull-quote */}
        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "auto 1fr", gap: isMobile ? 24 : 56, alignItems: "start" }}>
          <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600, lineHeight: 1.5, paddingTop: 8 }}>
            From the<br />field<br />— 2025
          </div>
          <blockquote style={{ margin: 0, padding: 0 }}>
            <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4.5vw, 48px)", lineHeight: 1.18, letterSpacing: "-0.02em", color: BW.chalk, margin: 0, maxWidth: "30ch" }}>
              <span style={{ color: BW.clay300, paddingRight: 8 }}>“</span>
              {d.pull.quote}
              <span style={{ color: BW.clay300, paddingLeft: 8 }}>”</span>
            </p>
            <footer style={{ marginTop: 24, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>
              — {d.pull.attrib}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* §06 — GUIDE process. Interactive: hover/click letters to focus a step.
   The five letters are oversized "tabs"; one is always active.
   Auto-progresses through all five on first view; pauses on user interaction. */
function CapProcess() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const d = BW_CAPABILITIES.process;
  const [active, setActive] = React.useState(0);
  const [userTouched, setUserTouched] = React.useState(false);

  // Auto-advance until user interacts
  React.useEffect(() => {
    if (userTouched) return;
    const id = setInterval(() => setActive(a => (a + 1) % d.steps.length), 3200);
    return () => clearInterval(id);
  }, [userTouched, d.steps.length]);

  const select = (i) => { setActive(i); setUserTouched(true); };

  const cur = d.steps[active];

  return (
    <section style={{ background: BW.chalk50, color: BW.ink, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      {/* paper grain */}
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.04) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>{d.eyebrow.split(" / ")[0]}</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>{d.eyebrow.split(" / ")[1]}</span>
        </div>

        {/* HEADER + INTRO */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 32 : 80, alignItems: "end", marginBottom: isMobile ? 40 : 64 }}>
          <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 0.98, letterSpacing: "-0.03em", margin: 0, color: BW.ink }}>
            {d.title} <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>{d.italic}</em> {d.after}
          </h2>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, color: BW.ink2, margin: 0, maxWidth: "44ch" }}>
            {d.standfirst}
          </p>
        </div>

        {/* INTERACTIVE TABLET — big letters as tabs, detail panel below */}
        <div style={{ borderTop: `1.5px solid ${BW.ink}`, borderBottom: `1.5px solid ${BW.ink}` }}>
          {/* Letter tab row */}
          <div role="tablist" aria-label="GUIDE steps" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", borderBottom: `1px solid ${BW.ruleL}` }}>
            {d.steps.map((st, i) => {
              const isActive = i === active;
              return (
                <button
                  key={st.letter}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`guide-panel-${i}`}
                  onClick={() => select(i)}
                  onMouseEnter={() => select(i)}
                  onFocus={() => select(i)}
                  style={{
                    appearance: "none", border: "none", background: isActive ? BW.ink : "transparent",
                    color: isActive ? BW.chalk50 : BW.ink,
                    borderRight: i < d.steps.length - 1 ? `1px solid ${BW.ruleL}` : "none",
                    padding: isMobile ? "16px 4px 18px" : "28px 8px 32px",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: isMobile ? 6 : 12,
                    cursor: "pointer",
                    transition: "background 240ms cubic-bezier(.2,.7,.2,1), color 240ms",
                    fontFamily: "inherit", outline: "none", position: "relative",
                  }}
                >
                  {/* progress hairline at bottom of active tab */}
                  {isActive && (
                    <span aria-hidden style={{
                      position: "absolute", left: 0, bottom: -1, height: 2, background: BW.clay,
                      animation: userTouched ? "none" : "guide-progress 3200ms linear forwards",
                      width: userTouched ? "100%" : 0,
                    }} />
                  )}
                  <span style={{ fontFamily: BW.ffM, fontSize: isMobile ? 9 : 10, letterSpacing: "0.22em", color: isActive ? BW.clay300 : BW.ink3, fontWeight: 600 }}>{st.n}</span>
                  <span style={{
                    fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic",
                    fontSize: "clamp(56px, 12vw, 168px)", lineHeight: 0.85, letterSpacing: "-0.04em",
                    color: isActive ? BW.clay300 : BW.clay,
                    transform: isActive ? "translateY(-2px)" : "translateY(0)",
                    transition: "transform 240ms cubic-bezier(.2,.7,.2,1), color 240ms",
                  }}>{st.letter}</span>
                  {!isMobile && (
                    <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: isActive ? BW.chalk50 : BW.ink, fontWeight: 700, textAlign: "center" }}>
                      {st.t}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail panel — animated swap on key change */}
          <div id={`guide-panel-${active}`} role="tabpanel" key={active} style={{
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "0.55fr 1fr 0.6fr",
            background: BW.ink, color: BW.chalk50,
            animation: "guide-panel-in 480ms cubic-bezier(.16,1,.3,1) both",
          }}>
            {/* Left — step number + brass title (the letter lives in the tab above; not repeated here) */}
            <div style={{ padding: isMobile ? "28px 24px 0" : "44px 36px", borderRight: !isMobile ? `1px solid rgba(244,236,218,0.18)` : "none", display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600 }}>
                Step {cur.n} of 05
              </div>
              <div style={{ fontFamily: BW.ffG, fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 700, color: BW.brass, letterSpacing: "0", lineHeight: 1.15, textTransform: "uppercase" }}>
                {cur.sub}
              </div>
              <div style={{ marginTop: "auto", paddingTop: 18, borderTop: `1px solid rgba(244,236,218,0.18)`, display: "flex", alignItems: "baseline", gap: 10, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600 }}>
                <span style={{ color: BW.clay300, fontWeight: 700 }}>{cur.letter}</span>
                <span style={{ width: 18, height: 1, background: "rgba(244,236,218,0.35)" }} />
                <span>GUIDE · Discipline</span>
              </div>
            </div>

            {/* Center — title + body */}
            <div style={{ padding: isMobile ? "20px 24px 28px" : "44px 36px", display: "flex", flexDirection: "column", gap: 18 }}>
              <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.025em", margin: 0, color: BW.chalk50 }}>
                {cur.t}.
              </h3>
              <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6, margin: 0, color: BW.chalk2, maxWidth: "52ch" }}>
                {cur.body}
              </p>
            </div>

            {/* Right — deliverables for the active step */}
            {!isMobile && (
              <div style={{ borderLeft: `1px solid rgba(244,236,218,0.18)`, padding: "44px 28px", display: "flex", flexDirection: "column", gap: 0 }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700, marginBottom: 4 }}>What you get</div>
                <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600, marginBottom: 18 }}>Deliverables · {String(cur.deliverables.length).padStart(2, "0")}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {cur.deliverables.map((dv, i) => (
                    <li key={dv} style={{ display: "flex", alignItems: "baseline", gap: 12, padding: "12px 0", borderBottom: i < cur.deliverables.length - 1 ? `1px solid rgba(244,236,218,0.12)` : "none" }}>
                      <span style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.18em", color: BW.brass, fontWeight: 700, minWidth: 20 }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ fontFamily: BW.ffSerif, fontSize: 15, color: BW.chalk50, lineHeight: 1.4 }}>{dv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mobile — deliverables shown inline */}
            {isMobile && (
              <div style={{ borderTop: `1px solid rgba(244,236,218,0.18)`, padding: "20px 24px 28px", display: "flex", flexDirection: "column", gap: 0 }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700, marginBottom: 12 }}>What you get</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px 18px" }}>
                  {cur.deliverables.map((dv) => (
                    <li key={dv} style={{ fontFamily: BW.ffSerif, fontSize: 14, color: BW.chalk50, lineHeight: 1.4, display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ color: BW.brass, fontFamily: BW.ffM, fontSize: 9 }}>—</span>
                      {dv}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footnote */}
        <div style={{ marginTop: 32, paddingTop: 18, borderTop: `1px solid ${BW.ruleL}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 600 }}>BDW · Field manual · GUIDE.v2</span>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700 }}>
            {userTouched ? "fig. 06 · interactive — hover or tap a letter" : "fig. 06 · auto-cycling — interact to pause"}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes guide-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes guide-panel-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

/* §07 — Closing CTA. Clay surface, mirrors home. */
function CapCTA() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const d = BW_CAPABILITIES.cta;
  return (
    <section style={{ background: BW.clay, color: BW.chalk50, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.06) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(72px, 10vw, 140px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>{d.eyebrow.split(" / ")[0]}</span>
          <span style={{ width: 28, height: 1, background: BW.ink }} />
          <span>{d.eyebrow.split(" / ")[1]}</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(48px, 9vw, 124px)", lineHeight: 0.92, letterSpacing: "-0.04em", margin: 0, color: BW.chalk50, maxWidth: 1180 }}>
          {d.title} <em style={{ color: BW.ink, fontStyle: "italic", fontWeight: 400 }}>{d.italic}</em> {d.after}
        </h2>
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr", gap: isMobile ? 32 : 64, alignItems: "end" }}>
          <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 2.4vw, 22px)", lineHeight: 1.5, color: BW.chalk50, margin: 0, maxWidth: "44ch" }}>
            {d.body}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: isMobile ? "flex-start" : "flex-end" }}>
            <a href="index.html#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 22px", borderRadius: 999, background: BW.ink, color: BW.chalk50, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>Start a project →</a>
            <a href="work.html" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 22px", borderRadius: 999, background: "transparent", color: BW.chalk50, border: `1.5px solid ${BW.chalk50}`, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>See the work</a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.CapCatalog = CapCatalog;
window.CapEvidence = CapEvidence;
window.CapProcess = CapProcess;
window.CapCTA = CapCTA;
