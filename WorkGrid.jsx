/* global React, BW */
/* Work index — Archive grid + ledger row + footer extras */

/* Card thumbnail variants — abstract / photo / screenshot */
function CaseThumb({ c, kind }) {
  const isAbstract = (kind || c.imagery) === "abstract";
  const isPhoto = (kind || c.imagery) === "photo";
  const isShot = (kind || c.imagery) === "screenshot";
  return (
    <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: c.tone, borderBottom: `1px solid ${BW.ink}` }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(20,16,12,0.16) 0 2px, transparent 2px 8px)", mixBlendMode: "multiply" }} />
      {isShot && (
        <div style={{ position: "absolute", left: 28, top: 28, right: 28, bottom: 64, background: BW.chalk50, border: `1px solid rgba(20,16,12,0.18)`, borderRadius: 6, overflow: "hidden", boxShadow: "0 12px 28px -10px rgba(0,0,0,0.35)" }}>
          <div style={{ height: 18, background: BW.chalk, borderBottom: `1px solid ${BW.ruleL}`, display: "flex", alignItems: "center", padding: "0 8px", gap: 4 }}>
            {[0,1,2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(20,16,12,0.25)" }} />)}
          </div>
          <div style={{ padding: 14, fontFamily: BW.ffM, fontSize: 9, color: "rgba(20,16,12,0.55)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>{c.tags[0]}</div>
          <div style={{ padding: "0 14px" }}>
            <div style={{ fontFamily: BW.ffG, fontSize: 18, fontWeight: 700, color: BW.ink, letterSpacing: "-0.01em" }}>{c.bigStat.v}</div>
            <div style={{ fontFamily: BW.ffM, fontSize: 8, color: "rgba(20,16,12,0.55)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, marginBottom: 10 }}>{c.bigStat.k}</div>
            <div style={{ height: 4, background: BW.ruleL, borderRadius: 2, marginBottom: 6, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "78%", background: BW.clay }} />
            </div>
            <div style={{ height: 4, background: BW.ruleL, borderRadius: 2, marginBottom: 6, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "54%", background: BW.forest }} />
            </div>
            <div style={{ height: 4, background: BW.ruleL, borderRadius: 2, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "92%", background: BW.brass }} />
            </div>
          </div>
        </div>
      )}
      {isPhoto && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "55%", aspectRatio: "1/1", background: `radial-gradient(circle at 30% 30%, rgba(251,247,238,0.55), rgba(20,16,12,0.4))`, borderRadius: "50%", filter: "blur(2px)", mixBlendMode: "soft-light" }} />
          <div style={{ position: "absolute", width: "70%", aspectRatio: "1/1", border: `1px solid ${BW.chalk2}`, borderRadius: "50%", opacity: 0.4 }} />
        </div>
      )}
      {/* corner ticks for editorial frame */}
      {["LT","RT","LB","RB"].map(p => {
        const css = { position: "absolute", width: 10, height: 10, border: `1.2px solid ${BW.chalk50}` };
        if (p === "LT") Object.assign(css, { left: 8, top: 8, borderRight: "none", borderBottom: "none" });
        if (p === "RT") Object.assign(css, { right: 8, top: 8, borderLeft: "none", borderBottom: "none" });
        if (p === "LB") Object.assign(css, { left: 8, bottom: 8, borderRight: "none", borderTop: "none" });
        if (p === "RB") Object.assign(css, { right: 8, bottom: 8, borderLeft: "none", borderTop: "none" });
        return <span key={p} style={css} />;
      })}
      <div style={{ position: "absolute", left: 22, top: 22, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk50, fontWeight: 700 }}>CASE №{c.no}</div>
      <div style={{ position: "absolute", right: 22, top: 22, fontFamily: BW.ffD, fontStyle: "italic", fontSize: 14, color: "rgba(251,247,238,0.85)", fontWeight: 400 }}>{c.year}</div>
      {isAbstract && (
        <div style={{ position: "absolute", left: 22, bottom: 22, right: 22, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ fontFamily: BW.ffG, fontWeight: 700, color: BW.chalk50, letterSpacing: "-0.03em", lineHeight: 0.85, fontSize: 56, textTransform: "uppercase" }}>{c.bigStat.v}</div>
          <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 600, textAlign: "right", maxWidth: 120 }}>{c.bigStat.k}</div>
        </div>
      )}
      {(isPhoto || isShot) && (
        <div style={{ position: "absolute", right: 22, bottom: 22, fontFamily: BW.ffD, fontStyle: "italic", fontSize: 13, color: "rgba(251,247,238,0.75)" }}>fig. {c.no}.0</div>
      )}
    </div>
  );
}

function CaseCard({ c }) {
  return (
    <a href={c.href || `case.html?id=${c.slug}`} style={{ display: "flex", flexDirection: "column", textDecoration: "none", color: BW.ink, border: `1px solid ${BW.ink}`, background: BW.chalk50, transition: "transform 0.24s ease", cursor: "pointer" }}>
      <CaseThumb c={c} />
      <div style={{ padding: "22px 24px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>
          <span>{c.pillar}</span>
          <span>{c.industry}</span>
        </div>
        <div>
          <h3 style={{ fontFamily: BW.ffG, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 10px", color: BW.ink, textTransform: "uppercase" }}>{c.client}</h3>
          <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 19, lineHeight: 1.25, color: BW.ink, margin: 0, fontWeight: 400, letterSpacing: "-0.01em" }}>{c.pull}</p>
        </div>
        <div style={{ marginTop: "auto", display: "flex", gap: 24, paddingTop: 16, borderTop: `1px solid ${BW.ruleL}` }}>
          {c.metrics.slice(0, 2).map(m => (
            <div key={m.k}>
              <div style={{ fontFamily: BW.ffG, fontWeight: 700, fontSize: 20, color: BW.clay, letterSpacing: "-0.01em" }}>{m.v}</div>
              <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>{m.k}</div>
            </div>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, fontWeight: 700 }}>
            Read →
          </div>
        </div>
      </div>
    </a>
  );
}

function CaseListRow({ c }) {
  return (
    <a href={c.href || `case.html?id=${c.slug}`} style={{ display: "grid", gridTemplateColumns: "60px 80px 1.6fr 1fr 1fr 1fr 80px", borderTop: `1px solid ${BW.ruleL}`, padding: "22px 0", textDecoration: "none", color: BW.ink, alignItems: "center", gap: 18, cursor: "pointer" }}>
      <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", color: BW.clay, fontWeight: 700 }}>№{c.no}</span>
      <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", color: "rgba(20,16,12,0.6)", fontWeight: 600 }}>{c.year}</span>
      <div>
        <div style={{ fontFamily: BW.ffG, fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: 4 }}>{c.client}</div>
        <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 16, color: BW.ink2, fontWeight: 400 }}>{c.pull}</div>
      </div>
      <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink2, fontWeight: 600 }}>{c.pillar}</span>
      <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink2, fontWeight: 600 }}>{c.industry}</span>
      <div>
        <div style={{ fontFamily: BW.ffG, fontWeight: 700, fontSize: 20, color: BW.clay, letterSpacing: "-0.01em" }}>{c.bigStat.v}</div>
        <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>{c.bigStat.k}</div>
      </div>
      <span style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, fontWeight: 700, textAlign: "right" }}>Read →</span>
    </a>
  );
}

function ArchiveGrid({ cases, view }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isNarrow = useMediaQuery("(max-width: 600px)");
  if (view === "list" && !isMobile) {
    return (
      <section style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(56px, 8vw, 72px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
            <span>§03</span><span style={{ width: 28, height: 1, background: BW.clay }} /><span>The Archive · Ledger View</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "60px 80px 1.6fr 1fr 1fr 1fr 80px", gap: 18, paddingBottom: 12, fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 700 }}>
            <span>№</span><span>Year</span><span>Client / Headline</span><span>Pillar</span><span>Industry</span><span>Headline metric</span><span></span>
          </div>
          {cases.map(c => <CaseListRow key={c.slug} c={c} />)}
        </div>
      </section>
    );
  }
  // On mobile, list view falls back to grid
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(56px, 8vw, 72px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: isNarrow ? "column" : "row", justifyContent: "space-between", alignItems: isNarrow ? "flex-start" : "baseline", gap: isNarrow ? 12 : 0, marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, flexWrap: "wrap" }}>
            <span>§03</span><span style={{ width: 28, height: 1, background: BW.clay }} /><span>The Archive · Case Grid</span>
          </div>
          <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 16, color: "rgba(20,16,12,0.55)" }}>{cases.length} of 47 cases shown</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isNarrow ? "1fr" : isMobile ? "repeat(2, 1fr)" : "repeat(2, 1fr)", gap: isNarrow ? 20 : 28 }}>
          {cases.map(c => <CaseCard key={c.slug} c={c} />)}
        </div>
        {cases.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", fontFamily: BW.ffD, fontStyle: "italic", fontSize: 28, color: BW.ink2, letterSpacing: "-0.01em" }}>
            No cases match these filters.
          </div>
        )}
      </div>
    </section>
  );
}

/* §04 — Closing CTA + footer-style booking */
function WorkClosing() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <section style={{ background: BW.clay, color: BW.chalk50, padding: "clamp(72px, 12vw, 120px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.06) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 40 : 64, alignItems: "end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
            <span>§04</span><span style={{ width: 28, height: 1, background: BW.chalk2 }} /><span>Add a case</span>
          </div>
          <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(48px, 10vw, 96px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.92, margin: "0 0 32px", color: BW.chalk50 }}>
            Want your <em style={{ color: BW.brass, fontStyle: "italic", fontWeight: 400 }}>name</em> in this archive?
          </h2>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 19, lineHeight: 1.55, margin: 0, color: "rgba(251,247,238,0.85)", maxWidth: "44ch" }}>
            We take three new operators a quarter. The next opening is Q3 2026.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <a style={{ background: BW.ink, color: BW.chalk50, padding: "16px 24px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer", textAlign: "center" }}>Start a project →</a>
          <a style={{ background: "transparent", color: BW.chalk50, padding: "16px 24px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer", border: `1.5px solid rgba(244,236,218,0.45)`, textAlign: "center" }}>Book a 30-min</a>
          <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(251,247,238,0.78)", textAlign: "center", marginTop: 6 }}>typically 2–3 day reply</span>
        </div>
      </div>
    </section>
  );
}

window.ArchiveGrid = ArchiveGrid;
window.CaseCard = CaseCard;
window.CaseThumb = CaseThumb;
window.WorkClosing = WorkClosing;
