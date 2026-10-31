/* global React, BW, BW_LAB, useMediaQuery */
/* Lab — In Production, Specimens, Receipts, CTA. */

/* §04 — In Production. Chalk surface. The shipped tools.
   Quiet, factual cards. One number per card. Each tile has a
   "See the demo" link that opens a lightbox-style modal with the
   longer write-up and screenshots. The modal is hash-driven
   (lab.html#tool-<slug>) so the parent case study can deep-link
   straight into it. */
function LabProduction() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const d = BW_LAB.production;
  const [openSlug, setOpenSlug] = React.useState(null);
  const openItem = openSlug ? d.items.find((it) => it.slug === openSlug) : null;

  // Hash sync — open on load / hashchange, so a case-study link into
  // lab.html#tool-postage-optimizer opens the matching modal.
  React.useEffect(() => {
    const read = () => {
      const m = (window.location.hash || "").match(/^#tool-(.+)$/);
      setOpenSlug(m ? decodeURIComponent(m[1]) : null);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const openTool = (slug) => {
    history.pushState(null, "", `${window.location.pathname}${window.location.search}#tool-${slug}`);
    setOpenSlug(slug);
  };
  const closeTool = () => {
    history.pushState(null, "", `${window.location.pathname}${window.location.search}#production`);
    setOpenSlug(null);
  };

  return (
    <section id="production" style={{ background: BW.chalk50, color: BW.ink, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.04) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.forest, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>{d.eyebrow.split(" / ")[0]}</span>
          <span style={{ width: 28, height: 1, background: BW.forest }} />
          <span>{d.eyebrow.split(" / ")[1]}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 32 : 80, alignItems: "end", marginBottom: 56 }}>
          <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 0.98, letterSpacing: "-0.02em", margin: 0, color: BW.ink }}>
            {d.title} <em style={{ color: BW.forest, fontStyle: "italic", fontWeight: 400 }}>{d.italic}</em>
          </h2>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, color: BW.ink2, margin: 0, maxWidth: "44ch" }}>
            {d.standfirst}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", borderTop: `1.5px solid ${BW.ink}`, borderBottom: `1.5px solid ${BW.ink}` }}>
          {d.items.map((it, i) => (
            <article key={it.n} style={{
              borderRight: !isMobile && i < d.items.length - 1 ? `1px solid ${BW.ruleL}` : "none",
              borderBottom: isMobile && i < d.items.length - 1 ? `1px solid ${BW.ruleL}` : "none",
              padding: "32px clamp(18px, 3vw, 32px) 36px",
              display: "flex", flexDirection: "column", gap: 16,
              background: BW.chalk50,
            }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700 }}>Tool {it.n}</span>
                <span style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.forest, fontWeight: 700 }}>● {it.status}</span>
              </div>
              <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(26px, 2.8vw, 34px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0, color: BW.ink }}>
                {it.name}.
              </h3>
              <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700 }}>
                For · {it.client}
              </div>
              <p style={{ fontFamily: BW.ffSerif, fontSize: 16, lineHeight: 1.55, color: BW.ink2, margin: 0 }}>
                {it.what}
              </p>

              {/* Metric block */}
              <div style={{ marginTop: 8, padding: "16px 0 18px", borderTop: `1px solid ${BW.ruleL}`, borderBottom: `1px solid ${BW.ruleL}`, display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700, maxWidth: "16ch" }}>{it.metric}</div>
                <div style={{ fontFamily: BW.ffG, fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 700, color: BW.clay, letterSpacing: "-0.02em", lineHeight: 1 }}>{it.metricValue}</div>
              </div>

              <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: BW.ink3, fontWeight: 600, lineHeight: 1.5 }}>
                Stack — {it.stack}
              </div>

              {it.demo && (
                <button type="button" onClick={() => openTool(it.slug)} style={{
                  marginTop: "auto",
                  alignSelf: "flex-start",
                  background: "transparent",
                  border: `1px solid ${BW.ink}`,
                  color: BW.ink,
                  padding: "10px 16px",
                  borderRadius: 999,
                  fontFamily: BW.ffM,
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  cursor: "pointer",
                }}>
                  See the demo →
                </button>
              )}
            </article>
          ))}
        </div>

        <div style={{ marginTop: 28, fontFamily: BW.ffSerif, fontStyle: "italic", fontSize: 16, color: BW.ink2, maxWidth: "60ch" }}>
          Each of these started as a Specimen.
        </div>
      </div>

      <LabProductionModal item={openItem} onClose={closeTool} />
    </section>
  );
}

/* Lightbox-style modal shown over the Lab page when a production tile's
   demo is opened — directly on the page, or via a hash deep-link from
   the parent case study. */
function LabProductionModal({ item, onClose }) {
  React.useEffect(() => {
    if (!item) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  if (!item || !item.demo) return null;
  const { demo } = item;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        padding: "clamp(16px, 4vw, 48px)",
        overflowY: "auto",
        background: "rgba(20,16,12,0.78)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: BW.chalk50,
          color: BW.ink,
          maxWidth: 1040,
          width: "100%",
          border: `1.5px solid ${BW.ink}`,
          padding: "clamp(28px, 4vw, 48px) clamp(24px, 4vw, 56px) clamp(32px, 5vw, 56px)",
          display: "flex", flexDirection: "column", gap: 24,
        }}
      >
        {/* Close */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          style={{
            position: "absolute", top: 14, right: 14,
            width: 36, height: 36,
            background: "transparent",
            border: `1px solid ${BW.ink}`,
            color: BW.ink,
            fontFamily: BW.ffM, fontSize: 16, fontWeight: 700,
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >×</button>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingRight: 48 }}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 700, color: BW.ink3 }}>
            <span>Tool {item.n}</span>
            <span style={{ color: BW.clay }}>For · {item.client}</span>
            <span style={{ color: BW.forest }}>● {item.status}</span>
          </div>
          <h2 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1, letterSpacing: "-0.02em", margin: 0, color: BW.ink }}>
            {item.name}.
          </h2>
        </div>

        {/* Overview */}
        <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(16px, 1.6vw, 18px)", lineHeight: 1.6, color: BW.ink2, margin: 0, maxWidth: "66ch" }}>
          {demo.overview}
        </p>

        {/* Screenshots — fall back to a labeled placeholder when the asset is missing */}
        {demo.screenshots && demo.screenshots.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: demo.screenshots.length > 1 ? "repeat(auto-fit, minmax(260px, 1fr))" : "1fr", gap: 20 }}>
            {demo.screenshots.map((s, i) => (
              <figure key={i} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  background: BW.chalk,
                  border: `1px solid ${BW.ruleL}`,
                  overflow: "hidden",
                }}>
                  <img
                    src={s.src}
                    alt={s.caption || ""}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div style={{
                    display: "none",
                    position: "absolute", inset: 0,
                    alignItems: "center", justifyContent: "center",
                    fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
                    color: BW.ink3, fontWeight: 700,
                    background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.05) 0 1.5px, transparent 1.5px 8px)",
                  }}>
                    Screenshot slot · {s.src.split("/").pop()}
                  </div>
                </div>
                <figcaption style={{ fontFamily: BW.ffSerif, fontStyle: "italic", fontSize: 14, lineHeight: 1.5, color: BW.ink2 }}>
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Footer — link back to the case study */}
        {item.caseStudyHref && (
          <div style={{ borderTop: `1px solid ${BW.ruleL}`, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700 }}>
              Built inside the {item.client.split(" · ")[0]} engagement
            </span>
            <a href={item.caseStudyHref} style={{
              fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: BW.ink, fontWeight: 700, textDecoration: "none",
              borderBottom: `1px solid ${BW.ink}`, paddingBottom: 2,
            }}>
              See the case study →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

/* §05 — Specimens. Plum surface. The bench.
   Hypothesis / Build / Result / Status per card. */
function LabSpecimens() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isTablet = useMediaQuery("(max-width: 1200px)");
  const d = BW_LAB.specimens;
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  const statusColor = (k) => ({
    shipped: BW.clay300,
    trial: BW.brass,
    parked: "rgba(244,236,218,0.45)",
  }[k] || BW.chalk2);

  const statusLabel = (k) => ({
    shipped: "Shipped",
    trial: "In trial",
    parked: "Parked",
  }[k] || k);

  return (
    <section id="specimens" style={{ background: BW.plum, color: BW.chalk50, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.035) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "screen", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>{d.eyebrow.split(" / ")[0]}</span>
          <span style={{ width: 28, height: 1, background: BW.brass }} />
          <span>{d.eyebrow.split(" / ")[1]}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 32 : 80, alignItems: "end", marginBottom: 40 }}>
          <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 0.98, letterSpacing: "-0.02em", margin: 0, color: BW.chalk50 }}>
            {d.title} <em style={{ color: BW.brass, fontStyle: "italic", fontWeight: 400 }}>{d.italic}</em>
          </h2>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, color: BW.chalk2, margin: 0, maxWidth: "44ch" }}>
            {d.standfirst}
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", padding: "16px 0", borderTop: `1px solid rgba(244,236,218,0.18)`, borderBottom: `1px solid rgba(244,236,218,0.18)`, marginBottom: 32 }}>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>Legend</span>
          {d.legend.map((l) => (
            <span key={l.key} style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span aria-hidden style={{ width: 10, height: 10, borderRadius: 999, background: statusColor(l.key), display: "inline-block" }} />
              {l.label}
            </span>
          ))}
        </div>

        {/* Specimens grid — 3 across on desktop, 2 on tablet, 1 on mobile.
           Checkerboard tint on alternating cells, driven by (row + col) % 2. */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 0, borderTop: `1px solid rgba(244,236,218,0.18)`, borderBottom: `1px solid rgba(244,236,218,0.18)` }}>
          {d.items.map((it, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const isRightEdge = col === cols - 1;
            const lastRowStart = d.items.length - (d.items.length % cols || cols);
            const isLastRow = i >= lastRowStart;
            const checkerTint = (row + col) % 2 === 1;
            const parked = it.status === "parked";
            const accentKey = it.accent || "brass";
            const accentColor = BW[accentKey] || BW.brass;
            const statusDot = statusColor(it.status);
            return (
              <article key={it.n} style={{
                padding: "32px clamp(16px, 2.4vw, 32px) 36px",
                borderRight: isRightEdge ? "none" : `1px solid rgba(244,236,218,0.18)`,
                borderBottom: isLastRow ? "none" : `1px solid rgba(244,236,218,0.18)`,
                display: "flex", flexDirection: "column", gap: 16,
                opacity: parked ? 0.78 : 1,
                position: "relative",
                background: checkerTint ? "rgba(244,236,218,0.035)" : "transparent",
              }}>
                {/* Top accent rule — gives each specimen its own identity colour */}
                <span aria-hidden style={{ position: "absolute", top: 0, left: 0, width: 56, height: 3, background: accentColor }} />

                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                    <span style={{ fontFamily: BW.ffG, fontSize: 24, fontWeight: 700, color: accentColor, letterSpacing: "-0.02em", lineHeight: 1 }}>{it.n}</span>
                    <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>Spec. {it.n}</span>
                  </div>
                  <span style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: statusDot, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <span aria-hidden style={{ width: 8, height: 8, borderRadius: 999, background: statusDot, display: "inline-block" }} />
                    {statusLabel(it.status)}
                  </span>
                </div>

                <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(24px, 2.8vw, 32px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0, color: BW.chalk50 }}>
                  {it.name}.
                </h3>

                <div>
                  <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: accentColor, fontWeight: 700, marginBottom: 6 }}>Hypothesis</div>
                  <p style={{ fontFamily: BW.ffSerif, fontStyle: "italic", fontSize: 16, lineHeight: 1.55, color: BW.chalk, margin: 0 }}>{it.hypothesis}</p>
                </div>

                <div>
                  <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: accentColor, fontWeight: 700, marginBottom: 6 }}>Build</div>
                  <p style={{ fontFamily: BW.ffSerif, fontSize: 15, lineHeight: 1.55, color: BW.chalk2, margin: 0 }}>{it.build}</p>
                </div>

                <div style={{ marginTop: "auto", paddingTop: 14, borderTop: `1px solid rgba(244,236,218,0.18)` }}>
                  <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: accentColor, fontWeight: 700, marginBottom: 6 }}>Result</div>
                  <p style={{ fontFamily: BW.ffSerif, fontSize: 15, lineHeight: 1.55, color: BW.chalk2, margin: 0 }}>{it.result}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600 }}>BDW · Lab · Specimen index</span>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>Fig. 05 · Hypotheses in the lab</span>
        </div>
      </div>
    </section>
  );
}

/* §06 — Receipts. Ink surface. Stats + pull-quote. */
function LabReceipts() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const d = BW_LAB.receipts;
  const colors = { forest: BW.clay300, brass: BW.brass, clay300: BW.clay300, clay: BW.clay300 };

  return (
    <section style={{ background: BW.ink, color: BW.chalk, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.025) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "screen", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>{d.eyebrow.split(" / ")[0]}</span>
          <span style={{ width: 28, height: 1, background: BW.clay300 }} />
          <span>{d.eyebrow.split(" / ")[1]}</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 0.98, letterSpacing: "-0.02em", margin: "0 0 56px", color: BW.chalk, maxWidth: 1100 }}>
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

        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "auto 1fr", gap: isMobile ? 24 : 56, alignItems: "start" }}>
          <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600, lineHeight: 1.5, paddingTop: 8 }}>
            From the<br />field<br />— 2026
          </div>
          <blockquote style={{ margin: 0, padding: 0, position: "relative" }}>
            <span aria-hidden="true" style={{ position: "absolute", right: "100%", top: 0, marginRight: "0.15em", fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4.5vw, 48px)", lineHeight: 1.18, color: BW.clay300 }}>“</span>
            <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4.5vw, 48px)", lineHeight: 1.18, letterSpacing: "-0.02em", color: BW.chalk, margin: 0, maxWidth: "30ch", textAlign: "left" }}>
              {d.pull.quote}
              <span style={{ color: BW.clay300, marginLeft: "0.15em" }}>”</span>
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

/* §07 — CTA. Forest surface. Echo the spine. */
function LabCTA() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const d = BW_LAB.cta;
  return (
    <section style={{ background: BW.forest, color: BW.chalk50, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.04) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "screen", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(72px, 10vw, 140px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>{d.eyebrow.split(" / ")[0]}</span>
          <span style={{ width: 28, height: 1, background: BW.clay300 }} />
          <span>{d.eyebrow.split(" / ")[1]}</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(48px, 9vw, 124px)", lineHeight: 0.92, letterSpacing: "-0.015em", margin: 0, color: BW.chalk50, maxWidth: 1180 }}>
          {d.title} <em style={{ color: BW.clay300, fontStyle: "italic", fontWeight: 400 }}>{d.italic}</em> {d.after}
        </h2>
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr", gap: isMobile ? 32 : 64, alignItems: "end" }}>
          <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 2.4vw, 22px)", lineHeight: 1.5, color: BW.chalk2, margin: 0, maxWidth: "44ch" }}>
            {d.body}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: isMobile ? "flex-start" : "flex-end" }}>
            <a href="index.html#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 22px", borderRadius: 999, background: BW.clay300, color: BW.ink, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>Start an experiment →</a>
            <a href="capabilities.html" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 22px", borderRadius: 999, background: "transparent", color: BW.chalk50, border: `1.5px solid ${BW.chalk50}`, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>See capabilities</a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.LabProduction = LabProduction;
window.LabSpecimens = LabSpecimens;
window.LabReceipts = LabReceipts;
window.LabCTA = LabCTA;
