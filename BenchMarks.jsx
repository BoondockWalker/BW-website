/* global React, BW, Eyebrow, Btn, Tag, Italic, useMediaQuery, BW_BENCHMARKS, SiteHeader */
/* BenchMarks — operator's bench. Daily-rotating specimens, current desk, edits to thinking.
   Visual sibling of Field Notes — same editorial rhythm, slightly more curated/quiet.
   §01 Masthead   — "From the desk" eyebrow + Italic display H1
   §02 Today      — full-bleed specimen hero (image|quote|link|audio) + commentary + actions
   §03 On the desk — three-column current reading/listening/arguing
   §04 Edits      — numbered list of recent edits to thinking
   §05 Recent     — last 30 specimens compact card grid → archive
   §06 Footer     — matches field-notes.html
*/

/* ───── Selection logic — deterministic by date so the bench changes once a day. ───── */
function pickToday(specimens, pinnedId) {
  if (!specimens || specimens.length === 0) return null;
  if (pinnedId) {
    const pinned = specimens.find(s => s.id === pinnedId);
    if (pinned) return pinned;
  }
  const day = Math.floor(Date.now() / 86400000);
  return specimens[day % specimens.length];
}

/* ───── Read URL ?id= override on first paint ───── */
function getOverrideId() {
  if (typeof window === "undefined") return null;
  const p = new URLSearchParams(window.location.search);
  return p.get("id");
}

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
function BMMasthead({ overrideMode }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const today = new Date();
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  // Pull the masthead up by half-pill-height so its surface paints under the
  // sticky pill — matches the WorkMasthead/case mast pattern.
  const isNarrow = useMediaQuery("(max-width: 560px)");
  const heroOverlap = isNarrow ? 25 : 30;
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", marginTop: -heroOverlap }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(56px, 8vw, 96px) clamp(20px, 5vw, 64px) clamp(40px, 6vw, 64px)" }}>
        {/* Masthead top rail */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, fontWeight: 700, flexWrap: "wrap", gap: 12 }}>
          <span>From the desk · Vol. XII</span>
          <span>{months[today.getMonth()]} {today.getDate()} · {today.getFullYear()}</span>
          <span>{overrideMode ? "Pulled from the archive" : "Refreshed daily"}</span>
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
            <span>— One specimen / day</span>
            <span>— Same one all day</span>
            <span>— New one tomorrow</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── §02 Today — specimen hero (varies by mediaType) + commentary + actions ───── */
function BMToday({ specimen, overrideMode, curator }) {
  const isMobile = useMediaQuery("(max-width: 900px)");

  if (!specimen) {
    return (
      <section style={{ background: BW.chalk, borderBottom: `1.5px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(56px, 8vw, 96px) clamp(20px, 5vw, 64px)" }}>
          <Eyebrow>§02 · Today</Eyebrow>
          <div style={{ marginTop: 28, padding: "64px 32px", border: `1.5px dashed ${BW.ruleL}`, textAlign: "center" }}>
            <h2 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "0 0 14px", color: BW.ink }}>
              First specimen lands soon.
            </h2>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.55, margin: 0, color: BW.ink2, maxWidth: "44ch", marginInline: "auto" }}>
              The bench is freshly waxed. Check back in a day or two — Mark's already got something pinned for tomorrow.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: BW.chalk, borderBottom: `1.5px solid ${BW.ink}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(40px, 6vw, 72px) clamp(20px, 5vw, 64px) clamp(56px, 7vw, 88px)" }}>
        {/* Section eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>§02</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>{overrideMode ? "Pulled from the archive" : "Today, on the bench"}</span>
          <span style={{ flex: 1, height: 1, background: BW.ruleL, minWidth: 32 }} />
          <span style={{ color: BW.ink2 }}>{specimen.publishedAt}</span>
        </div>

        {/* Hero — varies by mediaType */}
        <BMHero specimen={specimen} />

        {/* Commentary panel — sits below hero on a chalk50 surface */}
        <div style={{ marginTop: 0, background: BW.chalk50, borderLeft: `1.5px solid ${BW.ink}`, borderRight: `1.5px solid ${BW.ink}`, borderBottom: `1.5px solid ${BW.ink}`, padding: "clamp(28px,4vw,48px) clamp(24px,4vw,56px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.4fr) minmax(220px, 1fr)", gap: isMobile ? 24 : 56, alignItems: "start" }}>
            <div>
              {/* Tags row */}
              {specimen.tags && specimen.tags.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                  {specimen.tags.map(t => <BMTag key={t}>{t}</BMTag>)}
                </div>
              )}

              {/* Source label / link */}
              {specimen.sourceLabel && (
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.ink2, fontWeight: 600, marginBottom: 22 }}>
                  Source ·{" "}
                  {specimen.sourceUrl ? (
                    <a href={specimen.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: BW.ink, textDecoration: "none", borderBottom: `1px solid ${BW.ruleL}` }}>{specimen.sourceLabel}</a>
                  ) : (
                    <span style={{ color: BW.ink }}>{specimen.sourceLabel}</span>
                  )}
                </div>
              )}

              {/* Hook — display scale, Fraunces italic */}
              {specimen.commentary && specimen.commentary.hook && (
                <h2 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.02em", margin: "0 0 24px", color: BW.ink, maxWidth: "20ch" }}>
                  {specimen.commentary.hook}
                </h2>
              )}

              {/* Body paragraphs — Copernicus serif */}
              {specimen.commentary && specimen.commentary.body && specimen.commentary.body.map((p, i) => (
                <p key={i} style={{ fontFamily: BW.ffSerif, fontSize: 18, lineHeight: 1.6, margin: i === 0 ? "0 0 18px" : "0 0 18px", color: BW.ink, maxWidth: "60ch" }}>{p}</p>
              ))}

              {/* Sign-off */}
              {specimen.commentary && specimen.commentary.signoff && (
                <div style={{ marginTop: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>
                  {specimen.commentary.signoff}
                </div>
              )}

              {/* Related field note link */}
              {specimen.relatedSlug && (
                <div style={{ marginTop: 28, paddingTop: 22, borderTop: `1px solid ${BW.ruleL}` }}>
                  <a href={`note.html?slug=${specimen.relatedSlug.replace(/^field-notes\//, "")}`} style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.ink, textDecoration: "none", borderBottom: `1.5px solid ${BW.ink}`, paddingBottom: 3 }}>
                    Related field note →
                  </a>
                </div>
              )}
            </div>

            {/* Curator + actions rail */}
            <aside style={{ display: "flex", flexDirection: "column", gap: 22, alignSelf: "start", paddingLeft: isMobile ? 0 : 0, paddingTop: isMobile ? 4 : 6, borderTop: isMobile ? `1px solid ${BW.ruleL}` : "none", borderLeft: isMobile ? "none" : `1px solid ${BW.ruleL}`, marginTop: isMobile ? 8 : 0 }}>
              <div style={{ paddingLeft: isMobile ? 0 : 24, paddingTop: isMobile ? 18 : 0 }}>
                {curator && (
                  <div style={{ marginBottom: 22 }}>
                    <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700, marginBottom: 10 }}>Curator</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 36, height: 36, borderRadius: "50%", background: BW.ink, color: BW.chalk50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BW.ffG, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                        {curator.name ? curator.name.split(" ").map(n => n[0]).join("").slice(0,2) : "BW"}
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontFamily: BW.ffG, fontSize: 13, fontWeight: 700, color: BW.ink, letterSpacing: "-0.005em" }}>{curator.name}</div>
                        <div style={{ fontFamily: BW.ffM, fontSize: 9.5, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 600, marginTop: 2 }}>{curator.role}</div>
                      </div>
                    </div>
                  </div>
                )}

                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700, marginBottom: 12 }}>Share / save</div>
                <BMActions specimenId={specimen.id} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Specimen hero — different visual treatment per mediaType ───── */
function BMHero({ specimen }) {
  const m = specimen.mediaType;
  if (m === "image") return <BMHeroImage s={specimen} />;
  if (m === "quote") return <BMHeroQuote s={specimen} />;
  if (m === "link")  return <BMHeroLink s={specimen} />;
  if (m === "audio") return <BMHeroAudio s={specimen} />;
  return null;
}

function BMHeroImage({ s }) {
  return (
    <figure style={{ margin: 0, position: "relative", border: `1.5px solid ${BW.ink}`, borderBottom: 0, background: BW.ink, color: BW.chalk50, overflow: "hidden", aspectRatio: "16/9", minHeight: 320 }}>
      {s.src ? (
        <img src={s.src} alt={s.alt || s.title || "Specimen"} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      ) : (
        <div style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(45deg, ${BW.ink} 0 8px, ${BW.ink2} 8px 16px)` }} />
      )}
      {/* Lower-third scrim for legibility */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(20,16,12,0.78) 100%)", pointerEvents: "none" }} />
      {/* Caption strip */}
      <figcaption style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "20px clamp(20px,3vw,32px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
        {s.title && (
          <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: 1.1, letterSpacing: "-0.01em", color: BW.chalk50, maxWidth: "32ch" }}>
            {s.title}
          </div>
        )}
        <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>Image · specimen</span>
      </figcaption>
    </figure>
  );
}

function BMHeroQuote({ s }) {
  return (
    <blockquote style={{ margin: 0, position: "relative", border: `1.5px solid ${BW.ink}`, borderBottom: 0, background: BW.ink, color: BW.chalk50, padding: "clamp(48px,7vw,96px) clamp(28px,5vw,80px)", overflow: "hidden" }}>
      {/* Hatch overlay — subtle paper grain */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.04) 0 1.5px, transparent 1.5px 8px)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "26ch" }}>
        <span aria-hidden="true" style={{ position: "absolute", top: -20, left: -8, fontFamily: BW.ffD, fontStyle: "italic", fontSize: "clamp(96px, 14vw, 200px)", lineHeight: 0.7, color: BW.brass, opacity: 0.45 }}>“</span>
        <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: BW.chalk50, position: "relative", zIndex: 1 }}>
          {s.quote}
        </p>
        {s.attribution && (
          <footer style={{ marginTop: 36, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>
            — {s.attribution}
          </footer>
        )}
      </div>
      <div style={{ position: "absolute", right: "clamp(20px,3vw,32px)", bottom: 18, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>
        Quote · specimen
      </div>
    </blockquote>
  );
}

function BMHeroLink({ s }) {
  const initials = (s.linkHost || "?").slice(0, 2).toUpperCase();
  return (
    <div style={{ position: "relative", border: `1.5px solid ${BW.ink}`, borderBottom: 0, background: BW.chalk50, padding: "clamp(36px,5vw,64px) clamp(28px,4vw,56px)", overflow: "hidden" }}>
      {/* Section caption strip */}
      <div style={{ position: "absolute", top: 16, right: "clamp(20px,3vw,32px)", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700 }}>
        Link · specimen
      </div>
      {/* Link card */}
      <a href={s.linkUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", gap: 18, textDecoration: "none", color: BW.ink, maxWidth: 720 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>
          <span style={{ width: 28, height: 28, borderRadius: 4, background: BW.ink, color: BW.chalk50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BW.ffG, fontSize: 11, fontWeight: 700, letterSpacing: 0 }}>
            {s.linkFavicon ? <img src={s.linkFavicon} alt="" style={{ width: 18, height: 18, display: "block" }} /> : initials}
          </span>
          <span>{s.linkHost || "external link"}</span>
        </div>
        <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(36px, 5.5vw, 64px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: 0, color: BW.ink, maxWidth: "22ch" }}>
          {s.linkTitle}
        </h3>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.clay }}>
          <span style={{ borderBottom: `1.5px solid ${BW.clay}`, paddingBottom: 3 }}>Open in new tab →</span>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, color: BW.ink3, letterSpacing: "0.18em" }}>{s.linkUrl}</span>
        </div>
      </a>
    </div>
  );
}

function BMHeroAudio({ s }) {
  // Stylized waveform — ink background with brass bars. No real audio rendering.
  const bars = React.useMemo(() => {
    // Pseudo-random but stable per-id heights (use id char codes as a seed)
    const seed = (s.id || "x").split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    return Array.from({ length: 96 }, (_, i) => {
      const v = Math.sin(seed * 0.13 + i * 0.41) * Math.cos(seed * 0.07 + i * 0.23);
      return 22 + Math.abs(v) * 78;
    });
  }, [s.id]);
  return (
    <div style={{ position: "relative", border: `1.5px solid ${BW.ink}`, borderBottom: 0, background: BW.ink, color: BW.chalk50, padding: "clamp(36px,5vw,64px) clamp(28px,4vw,56px)", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,236,218,0.04) 0 1.5px, transparent 1.5px 8px)", pointerEvents: "none" }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: BW.brass, boxShadow: "0 0 0 4px rgba(200,150,43,0.25)" }} />
            <span>Now playing in the studio</span>
          </div>
          <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>Audio · specimen</span>
        </div>

        <div>
          <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.02em", margin: 0, color: BW.chalk50 }}>
            {s.audioTitle || s.title}
          </h3>
          {s.audioBy && (
            <div style={{ marginTop: 12, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 600 }}>
              {s.audioBy}
            </div>
          )}
        </div>

        {/* Stylized waveform — visual only */}
        <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: 2, height: 88, padding: "8px 0", borderTop: `1px solid rgba(244,236,218,0.18)`, borderBottom: `1px solid rgba(244,236,218,0.18)` }}>
          {bars.map((h, i) => (
            <span key={i} style={{ flex: 1, height: `${h}%`, minHeight: 2, background: i % 9 === 0 ? BW.brass : BW.chalk2, opacity: i % 9 === 0 ? 0.95 : 0.55, borderRadius: 1 }} />
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>
          <span>00:00</span>
          {s.audioDuration && <span style={{ color: BW.brass }}>Runtime · {s.audioDuration}</span>}
          <span>{s.audioDuration || "—"}</span>
        </div>
      </div>
    </div>
  );
}

/* ───── §02 Actions row — Permalink (live), IG / LinkedIn (coming soon) ───── */
function BMActions({ specimenId }) {
  const [copied, setCopied] = React.useState(false);
  const onCopy = (e) => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, "")}benchmarks.html?id=${encodeURIComponent(specimenId)}`;
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

  // Disabled "coming soon" button — share-to-IG / LinkedIn.
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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
        }}
      >
        {copied ? "✓ Permalink copied" : "Copy permalink"}
      </a>
      <SoonBtn label="Share to IG" />
      <SoonBtn label="Share to LinkedIn" />
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

/* ───── Compact specimen card — used on §05 grid + archive grid ───── */
function BMCard({ specimen }) {
  const teaser = (specimen.commentary && specimen.commentary.hook) || specimen.title || specimen.linkTitle || (specimen.quote ? `"${specimen.quote.slice(0, 80)}…"` : "Specimen");
  const date = specimen.publishedAt;
  const tags = specimen.tags || [];
  const typeLabel = (specimen.mediaType || "").toUpperCase();
  const TypeIcon = () => {
    const m = specimen.mediaType;
    if (m === "image") return <span style={{ fontFamily: BW.ffM, fontWeight: 700 }}>IMG</span>;
    if (m === "quote") return <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 18 }}>“ ”</span>;
    if (m === "link")  return <span style={{ fontFamily: BW.ffM, fontWeight: 700 }}>↗</span>;
    if (m === "audio") return <span style={{ fontFamily: BW.ffM, fontWeight: 700 }}>♪</span>;
    return null;
  };

  return (
    <a href={`benchmarks.html?id=${encodeURIComponent(specimen.id)}`} className="bm-card"
       style={{ display: "flex", flexDirection: "column", border: `0.75px solid ${BW.ink}`, background: BW.chalk50, color: BW.ink, textDecoration: "none", minHeight: 280, transition: "transform 200ms cubic-bezier(.2,.7,.2,1)" }}>
      {/* Thumb / type plate */}
      <div style={{ position: "relative", aspectRatio: "16/10", borderBottom: `0.75px solid ${BW.ink}`, overflow: "hidden", background: specimen.mediaType === "quote" || specimen.mediaType === "audio" ? BW.ink : BW.chalk }}>
        {specimen.mediaType === "image" && specimen.src ? (
          <img src={specimen.src} alt={specimen.alt || ""} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                color: specimen.mediaType === "quote" || specimen.mediaType === "audio" ? BW.brass : BW.ink2,
                fontFamily: BW.ffD, fontSize: 56, fontStyle: "italic" }}>
            <TypeIcon />
          </div>
        )}
        {/* Type tag overlay */}
        <span style={{ position: "absolute", top: 10, left: 10, fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 700,
              padding: "3px 7px", borderRadius: 2,
              background: specimen.mediaType === "quote" || specimen.mediaType === "audio" ? BW.brass : BW.ink,
              color: specimen.mediaType === "quote" || specimen.mediaType === "audio" ? BW.ink : BW.chalk50 }}>
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
function BMRecent({ specimens, todayId }) {
  const isMobile = useMediaQuery("(max-width: 720px)");
  const isTablet = useMediaQuery("(max-width: 1080px)");
  if (!specimens || specimens.length === 0) return null;

  const sorted = [...specimens]
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
          <span style={{ color: BW.ink2 }}>{sorted.length} specimens</span>
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
          {sorted.map(s => <BMCard key={s.id} specimen={s} />)}
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
  const data = (typeof window !== "undefined" && window.BW_BENCHMARKS) || { specimens: [], desk: [], edits: [], curator: null, pinnedSpecimenId: null };
  const overrideId = React.useMemo(() => getOverrideId(), []);
  const todaySpecimen = React.useMemo(() => {
    if (overrideId) {
      const found = (data.specimens || []).find(s => s.id === overrideId);
      if (found) return found;
    }
    return pickToday(data.specimens, data.pinnedSpecimenId);
  }, [data.specimens, data.pinnedSpecimenId, overrideId]);

  const overrideMode = !!(overrideId && todaySpecimen && todaySpecimen.id === overrideId);

  return (
    <div style={{ background: BW.chalk, minHeight: "100vh" }}>
      <style>{`
        .bm-card:hover { transform: translateY(-2px); }
        .bm-card:focus-visible { outline: 2px solid ${BW.brass}; outline-offset: 3px; }
        .bm-action:focus-visible { outline: 2px solid ${BW.brass}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          .bm-card { transition: none !important; }
          .bm-card:hover { transform: none !important; }
        }
      `}</style>
      <SiteHeader current="BenchMarks" sticky={true} />
      <BMMasthead overrideMode={overrideMode} />
      <BMToday specimen={todaySpecimen} overrideMode={overrideMode} curator={data.curator} />
      <BMDesk desk={data.desk} />
      <BMEdits edits={data.edits} />
      <BMRecent specimens={data.specimens || []} todayId={todaySpecimen ? todaySpecimen.id : null} />
      <BMFooter />
    </div>
  );
}

/* expose */
window.BenchMarksPage = BenchMarksPage;
window.BMCard = BMCard;
window.BMFooter = BMFooter;
window.bmPickToday = pickToday;
