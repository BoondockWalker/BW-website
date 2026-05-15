/* global React, BW */
/* Boondock Walker — BenchMarks Instagram share card.
   Self-contained 1080×1080 React component. Renders a single artifact as a
   fixed-size canvas suitable for off-screen mounting + html-to-image capture.

   Pure render. No useState, no useEffect. All sizes fixed in pixels (no
   viewport units) so the canvas is identical whether mounted on a phone or a
   4K monitor. Back-end-developer is responsible for mounting / capture /
   download. We just paint.

   Exposed as window.BMShareCard.
*/

/* ───── Canvas constant ───── */
const CARD_SIZE = 1080;

/* ───── Format an ISO date into "15 MAY 2026" for the eyebrow. ───── */
function formatCardDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return "";
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const dd = String(d.getDate()).padStart(2, "0");
  return `${dd} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

/* ───── Short artifact id slice for the "fig." flourish. ───── */
function shortId(id) {
  if (!id) return "";
  // For dated ids like "2026-05-15-coffee", grab the trailing slug — that's
  // the human-readable handle. Otherwise fall back to the last 8 chars.
  const parts = String(id).split("-");
  if (parts.length >= 4) return parts.slice(3).join("-");
  return String(id).slice(-8);
}

/* ───── Type chip — compact pill, matches the page's Artifact·{TYPE} register. */
function TypeChip({ type, light }) {
  const label = String(type || "").toUpperCase();
  const bg = light ? "rgba(20,16,12,0.06)" : "rgba(244,236,218,0.10)";
  const border = light ? BW.ruleL : BW.ruleD;
  const fg = light ? BW.ink : BW.chalk;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      fontFamily: BW.ffM, fontSize: 16, letterSpacing: "0.28em",
      textTransform: "uppercase", fontWeight: 700,
      color: fg, background: bg,
      border: `1px solid ${border}`,
      padding: "8px 14px", borderRadius: 4,
    }}>{label}</span>
  );
}

/* ───── BW lockup — top-right, ~72px tall, 48px from edges. */
function LockupTL() {
  return (
    <img
      src="/assets/BW-lockup-color.svg?v=8"
      alt="Boondock Walker"
      style={{
        position: "absolute", top: 48, right: 48,
        height: 72, width: "auto", display: "block",
      }}
    />
  );
}

/* ───── Eyebrow — bottom-left, "BENCHMARKS · DD MMM YYYY" */
function EyebrowBL({ date, light, extra }) {
  const color = light ? BW.ink : BW.chalk;
  return (
    <div style={{
      position: "absolute", left: 48, bottom: 48,
      display: "flex", alignItems: "center", gap: 16,
      fontFamily: BW.ffM, fontSize: 22, letterSpacing: "0.22em",
      textTransform: "uppercase", fontWeight: 700, color,
    }}>
      {extra}
      <span>BenchMarks</span>
      <span aria-hidden="true" style={{ opacity: 0.55 }}>·</span>
      <span>{date}</span>
    </div>
  );
}

/* ───── "fig. xxx" flourish — bottom-right */
function FigFlourish({ id, light }) {
  const text = shortId(id);
  if (!text) return null;
  const color = light ? BW.ink3 : BW.chalk3;
  return (
    <div style={{
      position: "absolute", right: 48, bottom: 48,
      fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400,
      fontSize: 16, letterSpacing: "-0.01em", color,
    }}>
      fig. {text}
    </div>
  );
}

/* ───── Type chip slot — top-left */
function ChipTL({ type, light }) {
  return (
    <div style={{ position: "absolute", top: 48, left: 48 }}>
      <TypeChip type={type} light={light} />
    </div>
  );
}

/* ═════════════════════ Per-type templates ═════════════════════ */

/* image — full-bleed cover + lower-third gradient scrim + hook in Fraunces italic. */
function CardImage({ artifact, date }) {
  const hook = (artifact.commentary && artifact.commentary.hook) || artifact.title || "";
  const signoff = artifact.commentary && artifact.commentary.signoff;
  return (
    <div style={{ position: "absolute", inset: 0, background: BW.ink, overflow: "hidden" }}>
      {artifact.src ? (
        <img
          src={artifact.src}
          alt={artifact.alt || artifact.title || "Artifact"}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(45deg, ${BW.ink} 0 12px, ${BW.ink2} 12px 24px)` }} />
      )}
      {/* Lower-third scrim for legibility */}
      <div aria-hidden="true" style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: "62%",
        background: "linear-gradient(to top, rgba(20,16,12,0.88) 0%, rgba(20,16,12,0.66) 32%, rgba(20,16,12,0.18) 78%, rgba(20,16,12,0) 100%)",
      }} />
      {/* Top scrim — protects the lockup + chip */}
      <div aria-hidden="true" style={{
        position: "absolute", left: 0, right: 0, top: 0, height: "28%",
        background: "linear-gradient(to bottom, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.15) 70%, rgba(20,16,12,0) 100%)",
      }} />

      <ChipTL type="image" light={false} />
      <LockupTL />

      {/* Hook block — lower-third */}
      <div style={{
        position: "absolute", left: 48, right: 48, bottom: 152,
        maxWidth: 880,
      }}>
        <h2 style={{
          margin: 0,
          fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400,
          fontSize: 72, lineHeight: 1.04, letterSpacing: "-0.02em",
          color: BW.chalk50, maxWidth: "22ch",
          textShadow: "0 2px 24px rgba(20,16,12,0.45)",
        }}>{hook}</h2>
        {signoff && (
          <div style={{
            marginTop: 22,
            fontFamily: BW.ffM, fontSize: 18, letterSpacing: "0.28em",
            textTransform: "uppercase", fontWeight: 700, color: BW.chalk2,
          }}>{signoff}</div>
        )}
      </div>

      <EyebrowBL date={date} light={false} />
      <FigFlourish id={artifact.id} light={false} />
    </div>
  );
}

/* video — same as image but using the poster, plus a play-glyph near the eyebrow. */
function CardVideo({ artifact, date }) {
  const hook = (artifact.commentary && artifact.commentary.hook) || artifact.title || "";
  const signoff = artifact.commentary && artifact.commentary.signoff;
  const poster = artifact.poster || artifact.src;
  return (
    <div style={{ position: "absolute", inset: 0, background: BW.ink, overflow: "hidden" }}>
      {poster ? (
        <img
          src={poster}
          alt={artifact.alt || artifact.title || "Artifact"}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(45deg, ${BW.ink} 0 12px, ${BW.ink2} 12px 24px)` }} />
      )}
      {/* Lower-third + top scrims */}
      <div aria-hidden="true" style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: "62%",
        background: "linear-gradient(to top, rgba(20,16,12,0.88) 0%, rgba(20,16,12,0.66) 32%, rgba(20,16,12,0.18) 78%, rgba(20,16,12,0) 100%)",
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", left: 0, right: 0, top: 0, height: "28%",
        background: "linear-gradient(to bottom, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.15) 70%, rgba(20,16,12,0) 100%)",
      }} />

      <ChipTL type="video" light={false} />
      <LockupTL />

      {/* Hook block — lower-third */}
      <div style={{
        position: "absolute", left: 48, right: 48, bottom: 152,
        maxWidth: 880,
      }}>
        <h2 style={{
          margin: 0,
          fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400,
          fontSize: 72, lineHeight: 1.04, letterSpacing: "-0.02em",
          color: BW.chalk50, maxWidth: "22ch",
          textShadow: "0 2px 24px rgba(20,16,12,0.45)",
        }}>{hook}</h2>
        {signoff && (
          <div style={{
            marginTop: 22,
            fontFamily: BW.ffM, fontSize: 18, letterSpacing: "0.28em",
            textTransform: "uppercase", fontWeight: 700, color: BW.chalk2,
          }}>{signoff}</div>
        )}
      </div>

      {/* Play glyph — bottom-left, just before the eyebrow */}
      <EyebrowBL date={date} light={false} extra={
        <span aria-hidden="true" style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 28, height: 28, marginRight: 4, color: BW.brass,
        }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M5 3.2L19 11L5 18.8V3.2Z" fill={BW.brass} />
          </svg>
        </span>
      } />
      <FigFlourish id={artifact.id} light={false} />
    </div>
  );
}

/* quote — ink ground, brass open-quote, centered Fraunces italic, attribution. */
function CardQuote({ artifact, date }) {
  const quote = artifact.quote || artifact.title || "";
  return (
    <div style={{
      position: "absolute", inset: 0, background: BW.ink, color: BW.chalk50, overflow: "hidden",
    }}>
      {/* subtle diagonal texture, matches the on-page quote hero */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.04) 0 1.5px, transparent 1.5px 10px)",
        pointerEvents: "none",
      }} />

      <ChipTL type="quote" light={false} />
      <LockupTL />

      {/* Decorative open quote */}
      <span aria-hidden="true" style={{
        position: "absolute", top: 110, left: 56,
        fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400,
        fontSize: 360, lineHeight: 0.7, color: BW.brass, opacity: 0.32,
        pointerEvents: "none",
      }}>“</span>

      {/* Quote body — vertically centered */}
      <div style={{
        position: "absolute", left: 96, right: 96, top: 0, bottom: 0,
        display: "flex", flexDirection: "column", justifyContent: "center",
        zIndex: 1,
      }}>
        <p style={{
          margin: 0,
          fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400,
          fontSize: 60, lineHeight: 1.12, letterSpacing: "-0.02em",
          color: BW.chalk50, maxWidth: "18ch",
        }}>{quote}</p>
        {artifact.attribution && (
          <div style={{
            marginTop: 36,
            fontFamily: BW.ffM, fontSize: 22, letterSpacing: "0.3em",
            textTransform: "uppercase", fontWeight: 700, color: BW.brass,
          }}>— {artifact.attribution}</div>
        )}
      </div>

      <EyebrowBL date={date} light={false} />
      <FigFlourish id={artifact.id} light={false} />
    </div>
  );
}

/* link — chalk ground, host chrome up top, link title in Fraunces italic, hook below. */
function CardLink({ artifact, date }) {
  const initials = String(artifact.linkHost || "?").replace(/^www\./, "").slice(0, 2).toUpperCase();
  const host = (artifact.linkHost || "external link").replace(/^https?:\/\//, "").replace(/^www\./, "");
  const linkTitle = artifact.linkTitle || artifact.title || "";
  const hook = artifact.commentary && artifact.commentary.hook;
  return (
    <div style={{
      position: "absolute", inset: 0, background: BW.chalk50, color: BW.ink, overflow: "hidden",
    }}>
      <ChipTL type="link" light={true} />
      <LockupTL />

      {/* Host chrome — favicon initials block + host name */}
      <div style={{
        position: "absolute", left: 48, top: 200,
        display: "flex", alignItems: "center", gap: 18,
      }}>
        <span style={{
          width: 64, height: 64, borderRadius: 8, background: BW.ink, color: BW.chalk50,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontFamily: BW.ffG, fontWeight: 700, fontSize: 24, letterSpacing: 0,
        }}>
          {artifact.linkFavicon ? (
            <img src={artifact.linkFavicon} alt="" style={{ width: 40, height: 40, display: "block" }} />
          ) : initials}
        </span>
        <span style={{
          fontFamily: BW.ffM, fontSize: 22, letterSpacing: "0.24em",
          textTransform: "uppercase", fontWeight: 700, color: BW.ink2,
          maxWidth: 760, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>{host}</span>
      </div>

      {/* Link title — Fraunces italic, large */}
      <h2 style={{
        position: "absolute", left: 48, right: 48, top: 312,
        margin: 0,
        fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400,
        fontSize: 56, lineHeight: 1.06, letterSpacing: "-0.02em",
        color: BW.ink, maxWidth: "18ch",
      }}>{linkTitle}</h2>

      {/* Hook — Copernicus serif, body register */}
      {hook && (
        <p style={{
          position: "absolute", left: 48, right: 48, bottom: 160,
          margin: 0,
          fontFamily: BW.ffSerif, fontWeight: 400,
          fontSize: 26, lineHeight: 1.36, letterSpacing: "-0.005em",
          color: BW.ink2, maxWidth: "32ch",
        }}>{hook}</p>
      )}

      {/* Hairline divider above the eyebrow row, for structure */}
      <div aria-hidden="true" style={{
        position: "absolute", left: 48, right: 48, bottom: 124,
        height: 1, background: BW.ruleL,
      }} />

      <EyebrowBL date={date} light={true} />
      <FigFlourish id={artifact.id} light={true} />
    </div>
  );
}

/* audio — ink ground, brass+chalk waveform across the middle, title below. */
function CardAudio({ artifact, date }) {
  // Hash the id to get a deterministic, varied waveform. No state — pure derive.
  const id = artifact.id || "x";
  const seed = id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const BAR_COUNT = 56;
  const bars = [];
  for (let i = 0; i < BAR_COUNT; i++) {
    const v = Math.sin(seed * 0.13 + i * 0.41) * Math.cos(seed * 0.07 + i * 0.23);
    // 22..100 range; envelope it slightly so the middle is hottest.
    const env = 0.55 + 0.45 * Math.sin((i / (BAR_COUNT - 1)) * Math.PI);
    bars.push(Math.max(18, Math.min(100, (22 + Math.abs(v) * 78) * env)));
  }

  const title = artifact.audioTitle || artifact.title || "";
  const hook = artifact.commentary && artifact.commentary.hook;

  return (
    <div style={{
      position: "absolute", inset: 0, background: BW.ink, color: BW.chalk50, overflow: "hidden",
    }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.04) 0 1.5px, transparent 1.5px 10px)",
        pointerEvents: "none",
      }} />

      <ChipTL type="audio" light={false} />
      <LockupTL />

      {/* Above the waveform — by · duration */}
      <div style={{
        position: "absolute", left: 48, right: 48, top: 396,
        fontFamily: BW.ffM, fontSize: 22, letterSpacing: "0.28em",
        textTransform: "uppercase", fontWeight: 700, color: BW.brass,
      }}>
        {artifact.audioBy || ""}
        {artifact.audioBy && artifact.audioDuration ? <span style={{ opacity: 0.55, margin: "0 12px" }}>·</span> : null}
        {artifact.audioDuration || ""}
      </div>

      {/* Waveform — center band */}
      <div aria-hidden="true" style={{
        position: "absolute", left: 48, right: 48, top: 440,
        height: 144, display: "flex", alignItems: "center", gap: 4,
        borderTop: `1px solid ${BW.ruleD}`,
        borderBottom: `1px solid ${BW.ruleD}`,
        padding: "12px 0",
      }}>
        {bars.map((h, i) => {
          // Alternating rhythm — every 3rd bar reads brass against chalk2.
          const isAccent = i % 3 === 0;
          return (
            <span key={i} style={{
              flex: 1, height: `${h}%`, minHeight: 4,
              background: isAccent ? BW.brass : BW.chalk2,
              opacity: isAccent ? 0.95 : 0.6,
              borderRadius: 2,
            }} />
          );
        })}
      </div>

      {/* Title — Fraunces italic, below the waveform */}
      <h2 style={{
        position: "absolute", left: 48, right: 48, top: 624,
        margin: 0,
        fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400,
        fontSize: 60, lineHeight: 1.04, letterSpacing: "-0.02em",
        color: BW.chalk50, maxWidth: "16ch",
      }}>{title}</h2>

      {/* Hook — Copernicus chalk */}
      {hook && (
        <p style={{
          position: "absolute", left: 48, right: 48, bottom: 160,
          margin: 0,
          fontFamily: BW.ffSerif, fontWeight: 400,
          fontSize: 22, lineHeight: 1.42, letterSpacing: "-0.005em",
          color: BW.chalk2, maxWidth: "34ch",
        }}>{hook}</p>
      )}

      <EyebrowBL date={date} light={false} />
      <FigFlourish id={artifact.id} light={false} />
    </div>
  );
}

/* ═════════════════════ Main share-card component ═════════════════════ */

function BMShareCard({ artifact }) {
  if (!artifact) return null;
  const date = formatCardDate(artifact.publishedAt);
  const m = artifact.mediaType;

  let Inner = null;
  if (m === "image")      Inner = <CardImage artifact={artifact} date={date} />;
  else if (m === "video") Inner = <CardVideo artifact={artifact} date={date} />;
  else if (m === "quote") Inner = <CardQuote artifact={artifact} date={date} />;
  else if (m === "link")  Inner = <CardLink  artifact={artifact} date={date} />;
  else if (m === "audio") Inner = <CardAudio artifact={artifact} date={date} />;
  else                    Inner = <CardImage artifact={artifact} date={date} />; // safe fallback

  return (
    <div
      id="bm-share-card"
      data-artifact-id={artifact.id}
      data-media-type={m}
      role="img"
      aria-label={`BenchMarks share card — ${artifact.title || artifact.id || "artifact"}`}
      style={{
        position: "relative",
        width: CARD_SIZE,
        height: CARD_SIZE,
        // Belt-and-braces: lock the size even if mounted inside a flex/grid
        // container that would otherwise stretch or shrink the root.
        minWidth: CARD_SIZE,
        minHeight: CARD_SIZE,
        maxWidth: CARD_SIZE,
        maxHeight: CARD_SIZE,
        flex: "0 0 auto",
        // Fixed canvas. html-to-image captures exactly this box.
        boxSizing: "border-box",
        overflow: "hidden",
        background: BW.chalk50,
        color: BW.ink,
        // Reset any inherited type — the card defines its own type stack.
        fontFamily: BW.ffG,
        // Crisp render at integer pixels.
        transform: "translateZ(0)",
      }}
    >
      {Inner}
    </div>
  );
}

window.BMShareCard = BMShareCard;
