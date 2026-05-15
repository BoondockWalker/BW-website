/* global React, BW, Eyebrow, Btn, Tag, Italic, useMediaQuery, BW_BENCHMARKS, SiteHeader */
/* BenchMarks — operator's bench. Daily-rotating artifacts, current desk, edits to thinking.
   Visual sibling of Field Notes — same editorial rhythm, slightly more curated/quiet.
   §01 Masthead   — "From the desk" eyebrow + Italic display H1
   §02 Today      — full-bleed artifact hero (image|quote|link|audio) + commentary + actions
   §03 On the desk — three-column current reading/listening/arguing
   §04 Edits      — numbered list of recent edits to thinking
   §05 Recent     — last 30 artifacts compact card grid → archive
   §06 Footer     — matches field-notes.html
*/

/* ───── Today as a YYYY-MM-DD string in the browser's local time zone.
   Lexicographic <= comparison against artifact.publishedAt is the publish gate. ───── */
function getTodayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/* ───── Selection logic — pick today's artifact by publishedAt match.
   `publishedPool` drives the day-of pick (so today's artifact can never
   be unpublished). `fullPool` is consulted only for the pin override, so
   Mark can pin an unpublished artifact to preview it before its launch
   day. If no artifact is dated today, fall back to a deterministic
   day-indexed rotation through the published pool. ───── */
function pickToday(publishedPool, fullPool, pinnedId) {
  if (pinnedId) {
    const pinned = (fullPool || []).find(s => s.id === pinnedId);
    if (pinned) return pinned;
  }
  if (!publishedPool || publishedPool.length === 0) return null;
  const today = getTodayISO();
  const exact = publishedPool.find(s => s.publishedAt === today);
  if (exact) return exact;
  const day = Math.floor(Date.now() / 86400000);
  return publishedPool[day % publishedPool.length];
}

/* ───── Read URL ?id= override on first paint ───── */
function getOverrideId() {
  if (typeof window === "undefined") return null;
  const p = new URLSearchParams(window.location.search);
  return p.get("id");
}

/* ───── Inline format — *italic* and [text](url) markers.
   Lightweight alternative to a markdown parser. Two markers supported:

     *phrase*         → <em>phrase</em>
     [text](url)      → <a href="url" target="_blank">text</a>

   Body text is curator-authored in BenchMarksData.jsx, so no XSS surface.

   In a roman-text context (body): emphasized phrase renders italic.
   In an italic-text context (hook): pass { reverse: true } so the
   emphasized phrase renders roman against the surrounding italic —
   the typographic convention for italics-in-italic-set text. ───── */
function renderInline(text, opts) {
  if (typeof text !== "string") return text;
  const reverse = !!(opts && opts.reverse);
  const emStyle = reverse ? { fontStyle: "normal" } : { fontStyle: "italic" };
  const parts = text.split(/(\*[^*\n]+\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
      return <em key={i} style={emStyle}>{part.slice(1, -1)}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer"
           style={{ color: BW.clay, textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "0.18em" }}>
          {link[1]}
        </a>
      );
    }
    return part;
  });
}
// Back-compat alias — older call sites can still reference the old name.
const renderInlineItalic = renderInline;

/* ───── Tag chip — bench reads in JetBrains Mono caps ───── */
function BMTag({ children, light }) {
  const c = light ? BW.chalk2 : BW.ink2;
  const border = light ? "rgba(244,236,218,0.32)" : BW.ruleL;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
      padding: "4px 9px", border: `1px solid ${border}`,
      borderRadius: 3, fontWeight: 600, color: c,
    }}>{children}</span>
  );
}

/* ───── Masthead — §01 ───── */
function BMMasthead() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const today = new Date();
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, fontFamily: BW.ffG, position: "relative" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(24px, 4vw, 40px) clamp(20px, 5vw, 64px) clamp(40px, 6vw, 64px)" }}>
        {/* Masthead top rail — note: archive-vs-today state lives on the §02
            eyebrow, not here, so this rail always reads "Refreshed daily". */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, fontWeight: 700, flexWrap: "wrap", gap: 12 }}>
          <span>From the desk · Vol. XII</span>
          <span>{months[today.getMonth()]} {today.getDate()} · {today.getFullYear()}</span>
          <span>Refreshed daily</span>
        </div>

        {/* Wordmark */}
        <h1 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(64px, 14vw, 184px)", lineHeight: 0.86, letterSpacing: "-0.04em", margin: "clamp(28px,4vw,44px) 0 clamp(20px,3vw,32px)", color: BW.ink }}>
          BenchMarks.
        </h1>

        {/* Standfirst */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 24 : 80, paddingTop: 24, borderTop: `1.5px solid ${BW.ink}`, alignItems: "start" }}>
          <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.45, margin: 0, color: BW.ink, maxWidth: "48ch" }}>
            One thing on the bench, every day. A photograph, a quote, a link, a recording — whatever the operator pinned to the wall this morning, with a note on why it matters.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink2, fontWeight: 600 }}>
            <span>— One thing from the bench, every day.</span>
            <span>— Same one all day</span>
            <span>— New one tomorrow</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Curator strip — sits between §01 and §02 ───── */
function BMCuratorStrip({ curator }) {
  if (!curator) return null;
  const isMobile = useMediaQuery("(max-width: 900px)");
  const initials = curator.name ? curator.name.split(" ").map(n => n[0]).join("").slice(0, 2) : "MN";
  const photoSize = isMobile ? 40 : 46;
  return (
    <section style={{ background: `linear-gradient(rgba(20,16,12,0.14), rgba(20,16,12,0.14)), ${BW.chalk}`, color: BW.ink }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(14px, 1.6vw, 18px) clamp(20px, 5vw, 64px)" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: isMobile ? 12 : 16,
          flexWrap: "wrap",
        }}>
          <span aria-hidden="true" style={{
            width: photoSize, height: photoSize, borderRadius: "50%",
            border: `1.5px solid ${BW.ink}`, background: BW.ink, color: BW.chalk50,
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
            fontFamily: BW.ffG, fontSize: 13, fontWeight: 700, flexShrink: 0,
            boxShadow: `0 0 0 3px ${BW.chalk50}, 0 0 0 4px ${BW.brass}`,
          }}>
            {curator.photo ? (
              <img
                src={curator.photo}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            ) : initials}
          </span>
          <span style={{
            fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
            color: BW.ink2, fontWeight: 700,
          }}>
            From the desk of{" "}
            <span style={{ color: BW.brass }}>{curator.name}</span>
            {curator.role && (
              <span style={{ color: BW.ink3, marginLeft: 10, paddingLeft: 10, borderLeft: `1px solid ${BW.ruleL}` }}>
                {curator.role}
              </span>
            )}
          </span>
          <span style={{ flex: 1, minWidth: 24, height: 1, background: BW.ruleL }} />
          <span style={{
            fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
            color: BW.ink3, fontWeight: 700,
          }}>
            One thing from the bench, every day.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ───── §02 Today — square artifact on the left, commentary stack on the right ───── */
function BMToday({ artifact, isArchive, onPrev, onNext }) {
  const isMobile = useMediaQuery("(max-width: 900px)");

  if (!artifact) {
    return (
      <section style={{ background: BW.chalk, borderBottom: `1.5px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(56px, 8vw, 96px) clamp(20px, 5vw, 64px)" }}>
          <Eyebrow>§02 · Today</Eyebrow>
          <div style={{ marginTop: 28, padding: "64px 32px", border: `1.5px dashed ${BW.ruleL}`, textAlign: "center" }}>
            <h2 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "0 0 14px", color: BW.ink }}>
              First artifact lands soon.
            </h2>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.55, margin: 0, color: BW.ink2, maxWidth: "44ch", marginInline: "auto" }}>
              The bench is freshly waxed. Check back in a day or two — Mark's already got something pinned for tomorrow.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Format the date as "TUE 05 MAY 2026" for the eyebrow.
  const eyebrowDate = formatBenchDate(artifact.publishedAt);
  const eyebrowLabel = isArchive ? "Pulled from the archive" : "Today";

  return (
    <section style={{ background: BW.chalk, borderBottom: `1.5px solid ${BW.ink}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(36px, 5vw, 64px) clamp(20px, 5vw, 64px) clamp(56px, 7vw, 88px)" }}>
        {/* Section rail */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: "clamp(24px, 3vw, 36px)", flexWrap: "wrap" }}>
          <span>§02</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>Today, on the bench</span>
          <span style={{ flex: 1, height: 1, background: BW.ruleL, minWidth: 32 }} />
          <span style={{ color: BW.ink2 }}>{artifact.publishedAt}</span>
        </div>

        {/* Two-column layout: square artifact | content stack.
            On desktop: left = artifact square, right = full content stack.
            On mobile: collapses to a single column and the image is rendered
            in source order between the section rail and the hook (we replicate
            the square inline below for mobile only).
            The relative positioning is the anchor for the desktop prev/next
            nav arrows that sit in the gutters outside the artifact frame. */}
        <div style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "clamp(380px, 36vw, 560px) minmax(0, 1fr)",
          gap: isMobile ? 24 : "clamp(40px, 4.5vw, 72px)",
          alignItems: "start",
        }}>
          {/* Desktop-only nav arrows — live in the page gutters, vertically
              centered against the artifact square. Hidden on mobile because
              the actions row carries the prev/next there. */}
          {!isMobile && (
            <>
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous artifact"
                className="bm-nav"
                style={{
                  position: "absolute",
                  top: "min(50%, 280px)",
                  left: "calc(-1 * clamp(20px, 5vw, 64px) + 8px)",
                  transform: "translateY(-50%)",
                  width: 44, height: 44,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  background: BW.chalk, color: BW.ink,
                  border: `1px solid ${BW.brass}`, borderRadius: 999,
                  cursor: "pointer", padding: 0,
                  transition: "background 180ms, color 180ms, transform 180ms",
                  zIndex: 2,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Next artifact"
                className="bm-nav"
                style={{
                  position: "absolute",
                  top: "min(50%, 280px)",
                  right: "calc(-1 * clamp(20px, 5vw, 64px) + 8px)",
                  transform: "translateY(-50%)",
                  width: 44, height: 44,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  background: BW.chalk, color: BW.ink,
                  border: `1px solid ${BW.brass}`, borderRadius: 999,
                  cursor: "pointer", padding: 0,
                  transition: "background 180ms, color 180ms, transform 180ms",
                  zIndex: 2,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
          {/* LEFT — square artifact frame. Hidden on mobile; the inline copy
              below handles the mobile order. */}
          {!isMobile && (
          <div style={{
            width: "100%",
            position: "sticky",
            top: 96,
          }}>
            <div style={{
              position: "relative",
              aspectRatio: "1 / 1",
              border: `1.5px solid ${BW.ink}`,
              background: BW.ink,
              overflow: "hidden",
              boxShadow: "0 18px 48px -28px rgba(20,16,12,0.45)",
            }}>
              <BMHero artifact={artifact} />
            </div>
            {/* Tiny meta-line under the square — IG card aesthetic */}
            <div style={{
              marginTop: 12,
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontFamily: BW.ffM, fontSize: 9.5, letterSpacing: "0.28em", textTransform: "uppercase",
              color: BW.ink3, fontWeight: 700,
            }}>
              <span>Artifact · {(artifact.mediaType || "").toUpperCase()}</span>
              <span>1080 × 1080</span>
            </div>
          </div>
          )}

          {/* RIGHT — content stack */}
          <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
            {/* 1. Eyebrow — TODAY · {weekday DD MMM YYYY}  (or PULLED FROM THE ARCHIVE) */}
            <div style={{
              fontFamily: BW.ffM, fontSize: 10.5, letterSpacing: "0.3em", textTransform: "uppercase",
              color: BW.brass, fontWeight: 700, marginBottom: 16,
              display: "inline-flex", alignItems: "center", gap: 10, flexWrap: "wrap",
            }}>
              <span>{eyebrowLabel}</span>
              {eyebrowDate && (
                <>
                  <span aria-hidden="true" style={{ color: BW.ink3 }}>·</span>
                  <span style={{ color: BW.ink2 }}>{eyebrowDate}</span>
                </>
              )}
            </div>

            {/* 2. Tag chips */}
            {artifact.tags && artifact.tags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                {artifact.tags.map(t => <BMTag key={t}>{t}</BMTag>)}
              </div>
            )}

            {/* 3. Artifact title — section-display scale */}
            {artifact.title && (
              <h3 style={{
                fontFamily: BW.ffG, fontWeight: 700, fontSize: "clamp(15px, 1.4vw, 18px)",
                letterSpacing: "0.04em", textTransform: "uppercase",
                margin: "0 0 14px", color: BW.ink2,
              }}>
                {artifact.title}
              </h3>
            )}

            {/* Mobile-only inline artifact square — sits between title and hook
                so the read goes: eyebrow → tags → title → image → hook → body. */}
            {isMobile && (
              <div style={{ width: "100%", maxWidth: 520, marginInline: "auto", margin: "0 auto 22px" }}>
                <div style={{
                  position: "relative", aspectRatio: "1 / 1",
                  border: `1.5px solid ${BW.ink}`, background: BW.ink,
                  overflow: "hidden", boxShadow: "0 12px 32px -22px rgba(20,16,12,0.45)",
                }}>
                  <BMHero artifact={artifact} />
                  {/* Mobile overlay nav arrows — pinned to image edges, vertically
                      centered, so it's obvious you can swipe between artifacts. */}
                  <button
                    type="button"
                    onClick={onPrev}
                    aria-label="Previous artifact"
                    style={{
                      position: "absolute", top: "50%", left: 12,
                      transform: "translateY(-50%)",
                      width: 40, height: 40,
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(20,16,12,0.62)", color: BW.chalk,
                      border: `1px solid rgba(244,236,218,0.35)`, borderRadius: 999,
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",
                      cursor: "pointer", padding: 0, zIndex: 2,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    aria-label="Next artifact"
                    style={{
                      position: "absolute", top: "50%", right: 12,
                      transform: "translateY(-50%)",
                      width: 40, height: 40,
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(20,16,12,0.62)", color: BW.chalk,
                      border: `1px solid rgba(244,236,218,0.35)`, borderRadius: 999,
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",
                      cursor: "pointer", padding: 0, zIndex: 2,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
                <div style={{
                  marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontFamily: BW.ffM, fontSize: 9.5, letterSpacing: "0.28em", textTransform: "uppercase",
                  color: BW.ink3, fontWeight: 700,
                }}>
                  <span>Artifact · {(artifact.mediaType || "").toUpperCase()}</span>
                  <span>1080 × 1080</span>
                </div>
              </div>
            )}

            {/* 4. Hook — Fraunces italic, display scale */}
            {artifact.commentary && artifact.commentary.hook && (
              <h2 style={{
                fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400,
                fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.04,
                letterSpacing: "-0.02em", margin: "0 0 24px", color: BW.ink,
                maxWidth: "22ch",
              }}>
                {renderInlineItalic(artifact.commentary.hook, { reverse: true })}
              </h2>
            )}

            {/* 5. Body paragraphs — Copernicus */}
            {artifact.commentary && artifact.commentary.body && artifact.commentary.body.map((p, i) => (
              <p key={i} style={{
                fontFamily: BW.ffSerif, fontSize: 17.5, lineHeight: 1.62,
                margin: "0 0 16px", color: BW.ink, maxWidth: "60ch",
              }}>{renderInlineItalic(p)}</p>
            ))}

            {/* 6. Signoff — small monospace italic */}
            {artifact.commentary && artifact.commentary.signoff && (
              <div style={{
                marginTop: 8, fontFamily: BW.ffM, fontStyle: "italic",
                fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
                color: BW.ink2, fontWeight: 600,
              }}>
                {artifact.commentary.signoff}
              </div>
            )}

            {/* 7. Source line — small caps, links to sourceUrl */}
            {artifact.sourceLabel && (
              <div style={{
                marginTop: 22, paddingTop: 18, borderTop: `1px solid ${BW.ruleL}`,
                fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.28em",
                textTransform: "uppercase", color: BW.ink3, fontWeight: 700,
              }}>
                Source ·{" "}
                {artifact.sourceUrl ? (
                  <a href={artifact.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: BW.ink, textDecoration: "none", borderBottom: `1px solid ${BW.ruleL}`, paddingBottom: 1 }}>
                    {artifact.sourceLabel}
                  </a>
                ) : (
                  <span style={{ color: BW.ink2 }}>{artifact.sourceLabel}</span>
                )}
              </div>
            )}

            {/* Related field note link — keep, useful surface */}
            {artifact.relatedSlug && (
              <div style={{ marginTop: 18 }}>
                <a href={`note.html?slug=${artifact.relatedSlug.replace(/^field-notes\//, "")}`} style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.ink, textDecoration: "none", borderBottom: `1.5px solid ${BW.ink}`, paddingBottom: 3 }}>
                  Related field note →
                </a>
              </div>
            )}

            {/* 8. Action row — permalink + share buttons (and mobile prev/next) */}
            <div style={{ marginTop: "clamp(28px, 3vw, 40px)", paddingTop: 22, borderTop: `1px solid ${BW.ruleL}` }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700, marginBottom: 12 }}>Share / save</div>
              <BMActions artifactId={artifact.id} layout="row" mobile={isMobile} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Format published-at into "TUE 05 MAY 2026" ───── */
function formatBenchDate(iso) {
  if (!iso) return null;
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return null;
  const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const dd = String(d.getDate()).padStart(2, "0");
  return `${days[d.getDay()]} ${dd} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

/* ───── Artifact hero — different visual treatment per mediaType ───── */
function BMHero({ artifact }) {
  const m = artifact.mediaType;
  if (m === "image") return <BMHeroImage s={artifact} />;
  if (m === "video") return <BMHeroVideo s={artifact} />;
  if (m === "quote") return <BMHeroQuote s={artifact} />;
  if (m === "link")  return <BMHeroLink s={artifact} />;
  if (m === "audio") return <BMHeroAudio s={artifact} />;
  return null;
}

function BMHeroImage({ s }) {
  // Clean square fill — the parent already provides the 1:1 frame, border, and shadow.
  // No scrim or caption — the right-column content carries the title and metadata.
  // If the src is animated (GIF) and a poster is supplied, swap to the poster
  // when prefers-reduced-motion is set so we don't push motion at users who've
  // opted out. There's no native pause for animated GIFs, so the swap is the fix.
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const stillSrc = (reducedMotion && s.poster) ? s.poster : s.src;
  return (
    <figure style={{ margin: 0, position: "absolute", inset: 0, background: BW.ink }}>
      {stillSrc ? (
        <img
          src={stillSrc}
          alt={s.alt || s.title || "Artifact"}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(45deg, ${BW.ink} 0 8px, ${BW.ink2} 8px 16px)` }} />
      )}
    </figure>
  );
}

function BMHeroVideo({ s }) {
  // Autoplay-loop muted video — Instagram-ambient register. Falls back to the
  // poster image when prefers-reduced-motion is set so we don't shove motion
  // at users who've opted out.
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const showStillFrame = reducedMotion && !!s.poster;
  return (
    <figure style={{ margin: 0, position: "absolute", inset: 0, background: BW.ink }}>
      {s.src ? (
        showStillFrame ? (
          <img
            src={s.poster}
            alt={s.alt || s.title || "Artifact"}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <video
            src={s.src}
            poster={s.poster || undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={s.alt || s.title || "Artifact video"}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )
      ) : (
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(45deg, ${BW.ink} 0 8px, ${BW.ink2} 8px 16px)` }} />
      )}
    </figure>
  );
}

function BMHeroQuote({ s }) {
  // 1:1 quote card — Ink ground, brass open-quote, centered Fraunces italic,
  // attribution in JetBrains Mono caps. Fills the parent square frame.
  return (
    <blockquote style={{
      margin: 0, position: "absolute", inset: 0, background: BW.ink, color: BW.chalk50,
      padding: "clamp(28px,5%,56px)", overflow: "hidden",
      display: "flex", flexDirection: "column", justifyContent: "center",
    }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.04) 0 1.5px, transparent 1.5px 8px)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "20ch" }}>
        <span aria-hidden="true" style={{ position: "absolute", top: "-0.42em", left: "-0.08em", fontFamily: BW.ffD, fontStyle: "italic", fontSize: "clamp(72px, 16%, 168px)", lineHeight: 0.7, color: BW.brass, opacity: 0.42 }}>“</span>
        <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 5.6%, 44px)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: 0, color: BW.chalk50, position: "relative", zIndex: 1 }}>
          {s.quote}
        </p>
        {s.attribution && (
          <footer style={{ marginTop: "clamp(18px,4%,28px)", fontFamily: BW.ffM, fontSize: 10.5, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>
            — {s.attribution}
          </footer>
        )}
      </div>
      <div style={{ position: "absolute", right: "clamp(16px,3%,24px)", bottom: "clamp(14px,2.8%,20px)", fontFamily: BW.ffM, fontSize: 9.5, letterSpacing: "0.28em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>
        Quote · artifact
      </div>
    </blockquote>
  );
}

function BMHeroLink({ s }) {
  const initials = (s.linkHost || "?").slice(0, 2).toUpperCase();
  return (
    <div style={{
      position: "absolute", inset: 0, background: BW.chalk50, color: BW.ink,
      padding: "clamp(24px,5%,44px)", overflow: "hidden",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      {/* Top row — favicon + host */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700, minWidth: 0 }}>
          <span style={{ width: 28, height: 28, borderRadius: 4, background: BW.ink, color: BW.chalk50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BW.ffG, fontSize: 11, fontWeight: 700, letterSpacing: 0, flexShrink: 0 }}>
            {s.linkFavicon ? <img src={s.linkFavicon} alt="" style={{ width: 18, height: 18, display: "block" }} /> : initials}
          </span>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.linkHost || "external link"}</span>
        </div>
        <span style={{ fontFamily: BW.ffM, fontSize: 9.5, letterSpacing: "0.28em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700, flexShrink: 0 }}>
          Link · artifact
        </span>
      </div>

      {/* Middle — link title */}
      <a href={s.linkUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: BW.ink, display: "block" }}>
        <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(24px, 6%, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: 0, color: BW.ink, maxWidth: "18ch" }}>
          {s.linkTitle}
        </h3>
      </a>

      {/* Bottom — open + URL */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.clay, minWidth: 0 }}>
        <span style={{ borderBottom: `1.5px solid ${BW.clay}`, paddingBottom: 3, alignSelf: "flex-start" }}>Open in new tab →</span>
        <span style={{ fontFamily: BW.ffM, fontSize: 10, color: BW.ink3, letterSpacing: "0.16em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.linkUrl}</span>
      </div>
    </div>
  );
}

function BMHeroAudio({ s }) {
  // Stylized waveform — ink ground, brass + chalk bars. Sized to fit a 1:1 frame.
  const bars = React.useMemo(() => {
    const seed = (s.id || "x").split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    return Array.from({ length: 56 }, (_, i) => {
      const v = Math.sin(seed * 0.13 + i * 0.41) * Math.cos(seed * 0.07 + i * 0.23);
      return 22 + Math.abs(v) * 78;
    });
  }, [s.id]);
  return (
    <div style={{
      position: "absolute", inset: 0, background: BW.ink, color: BW.chalk50,
      padding: "clamp(24px,5%,44px)", overflow: "hidden",
      display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "clamp(16px,3%,28px)",
    }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.04) 0 1.5px, transparent 1.5px 8px)", pointerEvents: "none" }} />

      {/* Top — now-playing chip + corner label */}
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: BW.brass, boxShadow: "0 0 0 4px rgba(200,150,43,0.25)" }} />
          <span>Now playing</span>
        </div>
        <span style={{ fontFamily: BW.ffM, fontSize: 9.5, letterSpacing: "0.28em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>Audio · artifact</span>
      </div>

      {/* Middle — title + by */}
      <div style={{ position: "relative" }}>
        <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(26px, 6.4%, 56px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: 0, color: BW.chalk50, maxWidth: "16ch" }}>
          {s.audioTitle || s.title}
        </h3>
        {s.audioBy && (
          <div style={{ marginTop: 10, fontFamily: BW.ffM, fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 600 }}>
            {s.audioBy}
          </div>
        )}
      </div>

      {/* Waveform + transport */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12 }}>
        <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: 2, height: "clamp(48px, 14%, 96px)", padding: "8px 0", borderTop: `1px solid rgba(244,236,218,0.18)`, borderBottom: `1px solid rgba(244,236,218,0.18)` }}>
          {bars.map((h, i) => (
            <span key={i} style={{ flex: 1, height: `${h}%`, minHeight: 2, background: i % 7 === 0 ? BW.brass : BW.chalk2, opacity: i % 7 === 0 ? 0.95 : 0.55, borderRadius: 1 }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, fontFamily: BW.ffM, fontSize: 9.5, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700, flexWrap: "wrap" }}>
          <span>00:00</span>
          {s.audioDuration && <span style={{ color: BW.brass }}>Runtime · {s.audioDuration}</span>}
          <span>{s.audioDuration || "—"}</span>
        </div>
      </div>
    </div>
  );
}

/* ───── §02 Actions row — Permalink (live), IG (coming soon) ───── */
function BMActions({ artifactId, layout, mobilePrev, mobileNext, mobile }) {
  const [copied, setCopied] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 560px)");
  // Row on desktop (when called with layout="row"); column on narrow viewports.
  const stack = layout !== "row" || isMobile;
  const onCopy = (e) => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, "")}benchmarks.html?id=${encodeURIComponent(artifactId)}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }).catch(() => { /* no-op */ });
    } else {
      // Fallback — old-school
      const ta = document.createElement("textarea");
      ta.value = url; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); setCopied(true); window.setTimeout(() => setCopied(false), 2000); } catch (_) { /* no-op */ }
      document.body.removeChild(ta);
    }
  };

  // Disabled "coming soon" button — share-to-IG.
  const SoonBtn = ({ label }) => (
    <button
      type="button"
      disabled
      title="Coming soon"
      aria-disabled="true"
      style={{
        display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center",
        fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.18em",
        textTransform: "uppercase", fontWeight: 600,
        padding: "12px 18px", borderRadius: 999,
        border: `1.5px solid ${BW.ruleL}`, background: "transparent",
        color: BW.ink3, cursor: "not-allowed", textDecoration: "none",
        opacity: 0.55, position: "relative",
      }}
    >
      <span>{label}</span>
      <span style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", color: BW.brass, fontWeight: 700, paddingLeft: 8, borderLeft: `1px solid ${BW.ruleL}` }}>Soon</span>
    </button>
  );

  // Mobile-only prev/next icon buttons — render only when the parent passes
  // handlers AND we are actually on mobile. Square 40px buttons that match
  // the desktop nav arrow visual but live in the actions row.
  const showMobileNav = mobile && mobilePrev && mobileNext;
  const NavIconBtn = ({ label, onClick, dir }) => (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="bm-action bm-nav"
      style={{
        width: 44, height: 44, padding: 0,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: BW.chalk, color: BW.ink,
        border: `1.5px solid ${BW.ink}`, borderRadius: 999,
        cursor: "pointer", flexShrink: 0,
        transition: "background 180ms, color 180ms",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dir === "prev" ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );

  return (
    <div style={{
      display: "flex",
      flexDirection: stack ? "column" : "row",
      flexWrap: stack ? "nowrap" : "wrap",
      gap: 10,
      alignItems: stack ? "stretch" : "center",
    }}>
      {showMobileNav && (
        <NavIconBtn label="Previous artifact" onClick={mobilePrev} dir="prev" />
      )}
      <a
        href="#"
        onClick={onCopy}
        className="bm-action"
        style={{
          display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center",
          fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.18em",
          textTransform: "uppercase", fontWeight: 700,
          padding: "12px 18px", borderRadius: 999,
          border: `1.5px solid ${BW.ink}`, background: copied ? BW.ink : "transparent",
          color: copied ? BW.brass : BW.ink, textDecoration: "none",
          cursor: "pointer", transition: "all 200ms",
          flex: stack ? "0 0 auto" : "1 1 auto",
        }}
      >
        {copied ? "Permalink copied" : "Copy permalink"}
      </a>
      <SoonBtn label="Share to IG" />
      {showMobileNav && (
        <NavIconBtn label="Next artifact" onClick={mobileNext} dir="next" />
      )}
    </div>
  );
}

/* ───── §03 Currently on the desk — three columns ───── */
function BMDesk({ desk }) {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const KIND_LABEL = { reading: "Reading", listening: "Listening to", arguing: "Arguing with" };
  const ORDER = ["reading", "listening", "arguing"];
  const byKind = (k) => (desk || []).find(d => d.kind === k);

  return (
    <section style={{ background: BW.chalk50, color: BW.ink, borderBottom: `1.5px solid ${BW.ink}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(48px, 6vw, 80px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 24, flexWrap: "wrap" }}>
          <span>§03</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>Currently on the desk</span>
          <span style={{ flex: 1, height: 1, background: BW.ruleL, minWidth: 32 }} />
        </div>

        <h2 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.02em", margin: "0 0 36px", color: BW.ink, maxWidth: "26ch" }}>
          What the operator's reading, listening to, and arguing with this week.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 0, border: `1.5px solid ${BW.ink}` }}>
          {ORDER.map((kind, i) => {
            const item = byKind(kind);
            return (
              <article key={kind} style={{
                padding: "clamp(24px, 3vw, 40px)",
                borderRight: !isMobile && i < 2 ? `1.5px solid ${BW.ink}` : "none",
                borderBottom: isMobile && i < 2 ? `1.5px solid ${BW.ink}` : "none",
                background: BW.chalk50,
                display: "flex", flexDirection: "column", gap: 14, minHeight: 220,
              }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700 }}>
                  {KIND_LABEL[kind]}
                </div>
                {item ? (
                  <>
                    <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(24px, 2.4vw, 30px)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0, color: BW.ink }}>
                      {item.title}
                    </h3>
                    {item.by && (
                      <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink2, fontWeight: 600 }}>
                        — {item.by}
                      </div>
                    )}
                    {item.line && (
                      <p style={{ fontFamily: BW.ffSerif, fontSize: 15.5, lineHeight: 1.55, margin: 0, color: BW.ink2 }}>
                        {item.line}
                      </p>
                    )}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ marginTop: "auto", paddingTop: 14, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.ink, textDecoration: "none", display: "inline-flex", gap: 6, borderTop: `1px solid ${BW.ruleL}` }}>
                        <span style={{ borderBottom: `1.5px solid ${BW.ink}`, paddingBottom: 2, marginTop: 12 }}>Open →</span>
                      </a>
                    )}
                  </>
                ) : (
                  <div style={{ fontFamily: BW.ffSerif, fontStyle: "italic", fontSize: 15, lineHeight: 1.5, color: BW.ink3, marginTop: 6 }}>
                    Nothing on the {KIND_LABEL[kind].toLowerCase()} pile this week.
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───── §04 Last week's edits to thinking — numbered list ───── */
function BMEdits({ edits }) {
  if (!edits || edits.length === 0) return null;
  return (
    <section style={{ background: BW.ink, color: BW.chalk50, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.04) 0 1.5px, transparent 1.5px 8px)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(48px, 7vw, 88px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 24, flexWrap: "wrap" }}>
          <span>§04</span>
          <span style={{ width: 28, height: 1, background: BW.brass }} />
          <span>Last week's edits to thinking</span>
          <span style={{ flex: 1, height: 1, background: "rgba(244,236,218,0.18)", minWidth: 32 }} />
        </div>

        <h2 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.02em", margin: "0 0 44px", color: BW.chalk50, maxWidth: "20ch" }}>
          Where I changed my mind.
        </h2>

        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
          {edits.map((e, i) => (
            <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(18px,3vw,40px)", padding: "26px 0", borderTop: `1px solid rgba(244,236,218,0.18)`, borderBottom: i === edits.length - 1 ? `1px solid rgba(244,236,218,0.18)` : "none" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 84 }}>
                <span style={{ fontFamily: BW.ffM, fontSize: 28, fontWeight: 700, color: BW.brass, letterSpacing: "0.04em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>
                  {e.date}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 2.6vw, 32px)", lineHeight: 1.18, letterSpacing: "-0.015em", margin: 0, color: BW.chalk50, maxWidth: "40ch" }}>
                  {e.statement}
                </p>
                {e.why && (
                  <p style={{ fontFamily: BW.ffSerif, fontSize: 15.5, lineHeight: 1.55, margin: 0, color: BW.chalk2, maxWidth: "60ch" }}>
                    {e.why}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───── Compact artifact card — used on §05 grid + archive grid ───── */
function BMCard({ artifact }) {
  const teaser = (artifact.commentary && artifact.commentary.hook) || artifact.title || artifact.linkTitle || (artifact.quote ? `"${artifact.quote.slice(0, 80)}…"` : "Artifact");
  const date = artifact.publishedAt;
  const tags = artifact.tags || [];
  const typeLabel = (artifact.mediaType || "").toUpperCase();
  const TypeIcon = () => {
    const m = artifact.mediaType;
    if (m === "image") return <span style={{ fontFamily: BW.ffM, fontWeight: 700 }}>IMG</span>;
    if (m === "video") return <span style={{ fontFamily: BW.ffM, fontWeight: 700 }}>▶</span>;
    if (m === "quote") return <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 18 }}>“ ”</span>;
    if (m === "link")  return <span style={{ fontFamily: BW.ffM, fontWeight: 700 }}>↗</span>;
    if (m === "audio") return <span style={{ fontFamily: BW.ffM, fontWeight: 700 }}>♪</span>;
    return null;
  };

  // Card thumb: prefer the still poster when one is supplied (animated GIFs
  // and videos both keep their card thumb static). Otherwise fall back to the
  // image src for image-type artifacts.
  const thumbSrc = artifact.poster
                 ? artifact.poster
                 : artifact.mediaType === "image" ? artifact.src
                 : null;

  return (
    <a href={`benchmarks.html?id=${encodeURIComponent(artifact.id)}`} className="bm-card"
       style={{ display: "flex", flexDirection: "column", border: `0.75px solid ${BW.ink}`, background: BW.chalk50, color: BW.ink, textDecoration: "none", minHeight: 280, transition: "transform 200ms cubic-bezier(.2,.7,.2,1)" }}>
      {/* Thumb / type plate */}
      <div style={{ position: "relative", aspectRatio: "16/10", borderBottom: `0.75px solid ${BW.ink}`, overflow: "hidden", background: artifact.mediaType === "quote" || artifact.mediaType === "audio" ? BW.ink : BW.chalk }}>
        {thumbSrc ? (
          <img src={thumbSrc} alt={artifact.alt || ""} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                color: artifact.mediaType === "quote" || artifact.mediaType === "audio" ? BW.brass : BW.ink2,
                fontFamily: BW.ffD, fontSize: 56, fontStyle: "italic" }}>
            <TypeIcon />
          </div>
        )}
        {/* Type tag overlay */}
        <span style={{ position: "absolute", top: 10, left: 10, fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 700,
              padding: "3px 7px", borderRadius: 2,
              background: artifact.mediaType === "quote" || artifact.mediaType === "audio" ? BW.brass : BW.ink,
              color: artifact.mediaType === "quote" || artifact.mediaType === "audio" ? BW.ink : BW.chalk50 }}>
          {typeLabel}
        </span>
      </div>

      <div style={{ padding: "18px 18px 16px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700 }}>
          {date}
        </div>
        <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: 19, lineHeight: 1.18, letterSpacing: "-0.015em", color: BW.ink, flex: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {teaser}
        </div>
        {tags.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
            {tags.slice(0, 3).map(t => (
              <span key={t} style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: BW.ink2, padding: "2px 6px", border: `1px solid ${BW.ruleL}`, borderRadius: 2, fontWeight: 600 }}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

/* ───── §05 Recent benchmarks — last 30, excluding today's pick ───── */
function BMRecent({ artifacts, todayId }) {
  const isMobile = useMediaQuery("(max-width: 720px)");
  const isTablet = useMediaQuery("(max-width: 1080px)");
  if (!artifacts || artifacts.length === 0) return null;

  const sorted = [...artifacts]
    .filter(s => s.id !== todayId)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 30);

  if (sorted.length === 0) return null;

  return (
    <section style={{ background: BW.chalk, borderBottom: `1.5px solid ${BW.ink}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(48px, 6vw, 80px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 24, flexWrap: "wrap" }}>
          <span>§05</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>Recent benchmarks</span>
          <span style={{ flex: 1, height: 1, background: BW.ruleL, minWidth: 32 }} />
          <span style={{ color: BW.ink2 }}>{sorted.length} artifacts</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 16, borderBottom: `1.5px solid ${BW.ink}`, marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1, letterSpacing: "-0.02em", margin: 0 }}>
            Lately, on the bench.
          </h2>
          <a href="benchmarks-archive.html" style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.ink, textDecoration: "none", borderBottom: `1.5px solid ${BW.ink}`, paddingBottom: 3 }}>
            View archive →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)", gap: "clamp(14px, 1.6vw, 20px)" }}>
          {sorted.map(s => <BMCard key={s.id} artifact={s} />)}
        </div>

        <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
          <a href="benchmarks-archive.html" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.chalk50, background: BW.ink, padding: "14px 22px", borderRadius: 999, textDecoration: "none" }}>
            View the full archive →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───── §06 Footer — matches field-notes.html shape ───── */
function BMFooter() {
  return (
    <footer style={{ background: BW.ink, color: BW.chalk50, fontFamily: BW.ffG, padding: "44px clamp(20px, 5vw, 64px)", borderTop: `1.5px solid ${BW.ink}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, alignItems: "start" }}>
        <div>
          <img src="assets/BW-lockup-color.svg?v=8" alt="Boondock Walker" style={{ height: 39, display: "block" }} />
          <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, marginTop: 14 }}>The bureau · est. 2015 · Cleveland</div>
        </div>
        <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: BW.chalk2, lineHeight: 2 }}>
          <a href="work.html" style={{ display: "block", color: BW.chalk2, textDecoration: "none" }}>Work</a>
          <a href="capabilities.html" style={{ display: "block", color: BW.chalk2, textDecoration: "none" }}>Capabilities</a>
          <a href="field-notes.html" style={{ display: "block", color: BW.chalk2, textDecoration: "none" }}>Field Notes</a>
          <a href="benchmarks.html" style={{ display: "block", color: BW.brass, textDecoration: "none" }}>BenchMarks</a>
          <a href="about.html" style={{ display: "block", color: BW.chalk2, textDecoration: "none" }}>About</a>
        </div>
        <div style={{ fontFamily: BW.ffSerif, fontSize: 14, color: BW.chalk2, lineHeight: 1.6, fontStyle: "italic" }}>
          "If something on the bench earned its spot today, it'll have to defend it again tomorrow."<br/>
          <span style={{ fontStyle: "normal", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3 }}>— The bench, house rule</span>
        </div>
        <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, lineHeight: 1.8 }}>© 2026 BDW Bureau<br/>One thing / day · forever</div>
      </div>
    </footer>
  );
}

/* ───── Page composition ───── */
function BenchMarksPage() {
  const data = (typeof window !== "undefined" && window.BW_BENCHMARKS) || { artifacts: [], desk: [], edits: [], curator: null, pinnedArtifactId: null };

  // currentId tracks the artifact the page is showing right now. It seeds
  // from the URL and updates when the prev/next nav fires. We listen to
  // popstate so the back/forward buttons re-sync the view.
  const [currentId, setCurrentId] = React.useState(() => getOverrideId());

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const onPop = () => setCurrentId(getOverrideId());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Publish gate — anything with a publishedAt strictly in the future stays
  // invisible to visitors. Browser-local date is fine; the spec is inclusive
  // (publishedAt === today is published). Recompute only when the source
  // artifacts array changes.
  const publishedArtifacts = React.useMemo(() => {
    const today = getTodayISO();
    return (data.artifacts || []).filter(s => s.publishedAt && s.publishedAt <= today);
  }, [data.artifacts]);

  // Today's deterministic pick — independent of the URL override. Drawn from
  // the published pool so an unpublished artifact can never be the day-of
  // pick. We need this separately so we can decide whether the showing
  // artifact is "today" or "from the archive" (which is true only when the
  // URL id resolves to an artifact *other than* today's pick).
  // The pin lookup inside pickToday consults the *full* artifacts array —
  // that's the override path that lets Mark preview an unpublished pin.
  const todayPick = React.useMemo(
    () => pickToday(publishedArtifacts, data.artifacts, data.pinnedArtifactId),
    [publishedArtifacts, data.artifacts, data.pinnedArtifactId]
  );

  // ?id= override path — bypasses the publish gate by looking up against the
  // *full* artifacts array. That's intentional: Mark shares a deep link to
  // preview an unpublished artifact before its launch day.
  const requested = React.useMemo(() => {
    if (!currentId) return null;
    return (data.artifacts || []).find(s => s.id === currentId) || null;
  }, [data.artifacts, currentId]);

  const todayArtifact = requested || todayPick;
  const isArchive = !!requested && (!todayPick || requested.id !== todayPick.id);

  // Sorted artifacts (publishedAt desc) — drawn from the published pool only,
  // so prev/next nav (chevrons + arrow keys) skips unpublished artifacts.
  // Index 0 is the newest, last index is the oldest. "Next" = newer = -1;
  // "Prev" = older = +1. Both wrap.
  // Note: a deep-linked unpublished artifact isn't in this list, so clicking
  // next/prev jumps the visitor back into the published rotation. Correct
  // behavior — an out-of-band preview shouldn't graft itself into the cycle.
  const sortedArtifacts = React.useMemo(
    () => [...publishedArtifacts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)),
    [publishedArtifacts]
  );

  const goTo = React.useCallback((id) => {
    if (typeof window === "undefined" || !id) return;
    const params = new URLSearchParams(window.location.search);
    params.set("id", id);
    const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash || ""}`;
    // pushState — not replaceState — so the browser back button steps
    // through the artifacts the user actually visited.
    window.history.pushState({ artifactId: id }, "", newUrl);
    setCurrentId(id);
  }, []);

  const navigate = React.useCallback((dir) => {
    if (sortedArtifacts.length === 0) return;
    const showingId = (todayArtifact && todayArtifact.id) || sortedArtifacts[0].id;
    let idx = sortedArtifacts.findIndex(s => s.id === showingId);
    if (idx === -1) idx = 0;
    // dir = "next" → newer artifact → smaller index (with wrap to last).
    // dir = "prev" → older artifact → larger index (with wrap to first).
    const len = sortedArtifacts.length;
    const nextIdx = dir === "next"
      ? (idx - 1 + len) % len
      : (idx + 1) % len;
    goTo(sortedArtifacts[nextIdx].id);
  }, [sortedArtifacts, todayArtifact, goTo]);

  const onPrev = React.useCallback(() => navigate("prev"), [navigate]);
  const onNext = React.useCallback(() => navigate("next"), [navigate]);

  // Keyboard ← / → navigation. Bail when an editable element holds focus so
  // we don't intercept caret movement inside inputs, textareas, selects, or
  // contentEditable regions. Also skip when modifier keys are held.
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const onKey = (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const t = e.target;
      const tag = t && t.tagName ? t.tagName.toUpperCase() : "";
      const editable = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (t && t.isContentEditable);
      if (editable) return;
      if (e.key === "ArrowLeft") { e.preventDefault(); onPrev(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); onNext(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onPrev, onNext]);

  return (
    <div style={{ background: BW.chalk, minHeight: "100vh" }}>
      <style>{`
        .bm-card:hover { transform: translateY(-2px); }
        .bm-card:focus-visible { outline: 2px solid ${BW.brass}; outline-offset: 3px; }
        .bm-action:focus-visible { outline: 2px solid ${BW.brass}; outline-offset: 3px; }
        .bm-nav { transition: background 180ms, color 180ms, transform 180ms; }
        .bm-nav:hover { background: ${BW.brass} !important; color: ${BW.ink} !important; }
        .bm-nav:focus-visible { outline: 2px solid ${BW.brass}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          .bm-card, .bm-nav { transition: none !important; }
          .bm-card:hover { transform: none !important; }
        }
      `}</style>
      <SiteHeader current="Field Notes" sticky={true} />
      <NotesNav current="BenchMarks" />
      <BMMasthead />
      <BMCuratorStrip curator={data.curator} />
      <BMToday artifact={todayArtifact} isArchive={isArchive} onPrev={onPrev} onNext={onNext} />
      <BMRecent artifacts={publishedArtifacts} todayId={todayPick ? todayPick.id : null} />
      <BMDesk desk={data.desk} />
      <BMEdits edits={data.edits} />
      <BMFooter />
    </div>
  );
}

/* expose */
window.BenchMarksPage = BenchMarksPage;
window.BMCard = BMCard;
window.BMFooter = BMFooter;
window.bmPickToday = pickToday;
