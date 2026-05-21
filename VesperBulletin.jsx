/* global React, BW */
/* Vesper bulletin — slim editorial strip on the homepage that announces the
   early-access launch. Sits between hero and thesis (§01 → §02 transition).
   Easy to retire post-launch: delete this file and the import in index.html. */

function V3VesperBulletin() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isNarrow = useMediaQuery("(max-width: 560px)");

  return (
    <a
      href="vesper.html"
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        background: BW.ink,
        borderBottom: `1.5px solid ${BW.ink}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${BW.chalk50} 1px, transparent 1px), linear-gradient(90deg, ${BW.chalk50} 1px, transparent 1px)`, backgroundSize: "48px 48px", opacity: 0.04, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "16px clamp(20px, 5vw, 64px)", position: "relative", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "auto 1fr auto", gap: isMobile ? 14 : 28, alignItems: "center" }}>
        {/* badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>
          <span style={{ width: 8, height: 8, background: BW.brass, borderRadius: "50%", boxShadow: `0 0 0 4px rgba(200,150,43,0.18)` }} />
          {isNarrow ? "Bulletin" : "Bulletin · A bureau release"}
        </div>

        {/* message */}
        <div style={{ display: "flex", flexDirection: isNarrow ? "column" : "row", alignItems: isNarrow ? "flex-start" : "baseline", gap: isNarrow ? 4 : 14, color: BW.chalk50, fontFamily: BW.ffD, fontStyle: "italic", fontSize: isMobile ? 18 : 22, lineHeight: 1.2, letterSpacing: "-0.015em", fontWeight: 400 }}>
          <span>
            Introducing <em style={{ color: BW.brass, fontStyle: "italic", fontWeight: 400 }}>Vesper</em> — a brand foundation for founders and small businesses.
          </span>
          {!isNarrow && (
            <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,236,218,0.6)", fontWeight: 600 }}>
              Waitlist open
            </span>
          )}
        </div>

        {/* cta */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, justifySelf: isMobile ? "flex-start" : "flex-end" }}>
          <span style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk50, fontWeight: 700, borderBottom: `1.5px solid ${BW.chalk50}`, paddingBottom: 3 }}>
            Read the announcement →
          </span>
        </div>
      </div>
    </a>
  );
}

window.V3VesperBulletin = V3VesperBulletin;
