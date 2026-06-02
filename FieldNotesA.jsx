/* global React, BW, FN_NOTES, FN_TAGS, FN_AUTHORS, NoteArt */
/* Field Notes — archive page sections. */

/* Inline editorial illustration — same vocabulary as homepage Field Notes.
   When `image` is set, the SVG glyph is replaced by a real photo/illustration
   (used for posts with hand-crafted lead artwork). The label/caption rails
   still render on top. */
function FNArt({ kind, color, caption, label, image, alt }) {
  if (image) {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: color }}>
        <img src={image} alt={alt || ""} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        {label && <span style={{ position: "absolute", left: 14, top: 12, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk50, fontWeight: 700, opacity: 0.95, textShadow: "0 1px 2px rgba(20,16,12,0.45)" }}>{label}</span>}
        {caption && <span style={{ position: "absolute", right: 14, bottom: 10, fontFamily: BW.ffD, fontStyle: "italic", fontSize: 12, color: BW.chalk50, opacity: 0.85, textShadow: "0 1px 2px rgba(20,16,12,0.45)" }}>{caption}</span>}
      </div>
    );
  }
  let glyph = null;
  if (kind === "voice") glyph = (<g><circle cx="50%" cy="50%" r="28%" fill="none" stroke={BW.chalk50} strokeWidth="1.4" opacity="0.85" /><circle cx="50%" cy="50%" r="20%" fill="none" stroke={BW.chalk50} strokeWidth="1.0" opacity="0.6" /><circle cx="50%" cy="50%" r="12%" fill={BW.chalk50} opacity="0.95" /><path d="M -40 50%  Q 25% 35%, 50% 50% T 140% 50%" fill="none" stroke={BW.chalk50} strokeWidth="1.2" opacity="0.55" /></g>);
  else if (kind === "pipeline") glyph = (<g><polygon points="20,30 80,30 60,55 60,72 40,72 40,55" fill="none" stroke={BW.chalk50} strokeWidth="1.6" opacity="0.95" transform="scale(2.2) translate(2,4)" /></g>);
  else if (kind === "lab") glyph = (<g><path d="M 12% 50% L 22% 44% L 28% 56% L 38% 44% L 44% 56% L 54% 44% L 60% 56% L 70% 44% L 78% 56% L 88% 50%" fill="none" stroke={BW.chalk50} strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" /><circle cx="12%" cy="50%" r="3" fill={BW.chalk50} /><circle cx="88%" cy="50%" r="3" fill={BW.chalk50} /></g>);
  else if (kind === "compass") glyph = (<g><circle cx="50%" cy="50%" r="26%" fill="none" stroke={BW.chalk50} strokeWidth="1.4" /><line x1="50%" y1="24%" x2="50%" y2="76%" stroke={BW.chalk50} strokeWidth="0.8" opacity="0.6" /><line x1="24%" y1="50%" x2="76%" y2="50%" stroke={BW.chalk50} strokeWidth="0.8" opacity="0.6" /><polygon points="50%,30% 54%,50% 50%,70% 46%,50%" fill={BW.chalk50} opacity="0.95" /></g>);
  else if (kind === "receipts") glyph = (<g><rect x="20%" y="22%" width="60%" height="56%" fill={BW.chalk50} opacity="0.94" /><line x1="50%" y1="22%" x2="50%" y2="78%" stroke={color} strokeWidth="1" opacity="0.5" />{[33,42,51,60,69].map(y=><line key={y} x1="22%" y1={`${y}%`} x2="78%" y2={`${y}%`} stroke={color} strokeWidth="0.6" opacity="0.55" />)}<rect x="20%" y="22%" width="60%" height="6" fill={color} /></g>);
  return (
    <svg viewBox="0 0 320 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
      <defs><pattern id={`fngrain-${kind}-${label}`} patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="rgba(20,16,12,0.18)" strokeWidth="1.5" /></pattern></defs>
      <rect x="0" y="0" width="100%" height="100%" fill={color} />
      <rect x="0" y="0" width="100%" height="100%" fill={`url(#fngrain-${kind}-${label})`} opacity="0.5" />
      {glyph}
      {label && <text x="14" y="22" fontFamily={BW.ffM} fontSize="9" letterSpacing="2" fill={BW.chalk50} fontWeight="700" opacity="0.82">{label}</text>}
      {caption && <text x="306" y="190" textAnchor="end" fontFamily={BW.ffD} fontStyle="italic" fontSize="11" fill={BW.chalk50} opacity="0.7">{caption}</text>}
    </svg>
  );
}

function tagColor(tagKey, themed) {
  if (!themed) return BW.ink;
  const t = FN_TAGS.find(x => x.key === tagKey);
  return t ? t.color : BW.clay;
}

/* Masthead — editorial banner */
function FNMasthead({ filterCount, totalCount }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const today = new Date();
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  return (
    <section style={{ background: BW.chalk, color: BW.ink, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(24px, 4vw, 40px) clamp(20px, 5vw, 64px) clamp(48px, 6vw, 72px)" }}>
        {/* Masthead top rail */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, fontWeight: 700, flexWrap: "wrap", gap: 12 }}>
          <span>Vol. XII · BDW Field Manual</span>
          <span>{months[today.getMonth()]} {today.getDate()} · {today.getFullYear()}</span>
          <span>{filterCount} of {totalCount} notes filed</span>
        </div>
        {/* Wordmark */}
        <h1 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(56px, 12vw, 156px)", lineHeight: 0.88, letterSpacing: "-0.03em", margin: "clamp(28px,4vw,44px) 0 clamp(20px,3vw,32px)", color: BW.ink }}>
          Field <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>Notes.</em>
        </h1>
        {/* Standfirst */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 24 : 80, paddingTop: 24, borderTop: `1.5px solid ${BW.ink}`, alignItems: "start" }}>
          <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.45, margin: 0, color: BW.ink, maxWidth: "44ch" }}>
            A bulletin from the field. Twice-monthly notes on brand, demand, and the lab — written by the team that does the work. No email gate, no growth-hack gloss.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink2, fontWeight: 600 }}>
            <span>— ~600 operators on the list</span>
            <span>— Index updates weekly</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Filter rail — by tag */
function FNFilterRail({ activeTag, setActiveTag, themed }) {
  return (
    <div style={{ background: BW.ink, color: BW.chalk, borderBottom: `1.5px solid ${BW.ink}`, position: "sticky", top: 0, zIndex: 20 }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "14px clamp(20px, 5vw, 64px)", display: "flex", alignItems: "center", gap: "clamp(12px, 2vw, 24px)", flexWrap: "wrap" }}>
        <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>Filter ·</span>
        {[{ key: "All", color: BW.chalk50 }, ...FN_TAGS].map((t) => {
          const active = activeTag === t.key;
          const c = themed ? (t.color || BW.chalk50) : BW.chalk50;
          return (
            <button key={t.key} onClick={() => setActiveTag(t.key)} style={{
              appearance: "none", background: active ? c : "transparent",
              color: active ? BW.ink : BW.chalk,
              border: `1px solid ${active ? c : "rgba(244,236,218,0.28)"}`,
              borderRadius: 999, padding: "6px 14px",
              fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700,
              cursor: "pointer", transition: "all 200ms",
            }}>{t.key}</button>
          );
        })}
      </div>
    </div>
  );
}

/* Featured / hero post — latest at top */
function FNFeatured({ note, themed }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const a = FN_AUTHORS[note.author] || {};
  const c = themed ? tagColor(note.tag, true) : BW.clay;
  return (
    <article style={{ background: BW.chalk50, borderBottom: `1.5px solid ${BW.ink}` }}>
      <a href={`note.html?slug=${note.slug}`} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr", maxWidth: 1440, margin: "0 auto", padding: "0 clamp(20px, 5vw, 64px)", textDecoration: "none", color: "inherit" }}>
        <div style={{ borderRight: !isMobile ? `1.5px solid ${BW.ink}` : "none", borderBottom: isMobile ? `1.5px solid ${BW.ink}` : "none", padding: "44px 0 48px", paddingRight: !isMobile ? "clamp(28px, 4vw, 56px)" : 0 }}>
            <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: c, fontWeight: 700, marginBottom: 18, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <span>★ Latest issue</span>
              <span style={{ width: 22, height: 1, background: c }} />
              <span>{note.issue} · {note.date}</span>
            </div>
            <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(40px, 7vw, 88px)", lineHeight: 0.96, letterSpacing: "-0.03em", margin: "0 0 24px", color: BW.ink }}>
              {note.title}
            </h2>
            <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 1.8vw, 21px)", lineHeight: 1.5, margin: 0, color: BW.ink2, maxWidth: "52ch" }}>{note.dek}</p>
            <div style={{ marginTop: 32, paddingTop: 18, borderTop: `1px solid ${BW.ruleL}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink2, fontWeight: 600 }}>
                <span style={{ width: 28, height: 28, borderRadius: "50%", background: BW.ink, color: BW.chalk50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BW.ffG, fontSize: 10, fontWeight: 700 }}>{a.initials || "MN"}</span>
                <span>{note.author}</span><span>·</span><span>{note.minutes} min walk</span>
              </div>
              <span style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, fontWeight: 700, borderBottom: `1.5px solid ${BW.ink}`, paddingBottom: 3 }}>Read note →</span>
            </div>
          </div>
        <div style={{ aspectRatio: isMobile ? "16/10" : "auto", minHeight: isMobile ? 0 : 440, position: "relative", overflow: "hidden" }}>
          <FNArt kind={note.art} color={c} caption={`fig. 00 · featured`} label={`${note.issue} · ${note.date}`} image={note.image} alt={note.imageAlt} />
          <div style={{ position: "absolute", left: 0, bottom: 0, padding: "8px 14px", background: BW.ink, color: BW.chalk50, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}>{note.tag} · {note.kicker}</div>
        </div>
      </a>
    </article>
  );
}

/* Newsletter sidebar — sticky right rail */
function FNNewsletterRail() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <aside style={{ position: isMobile ? "static" : "sticky", top: isMobile ? "auto" : 80, alignSelf: "start", border: `1.5px solid ${BW.ink}`, background: BW.ink, color: BW.chalk50, padding: "28px 26px", display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>★ Subscribe</div>
      <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: 28, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0, color: BW.chalk50 }}>The bulletin, in your inbox.</h3>
      <p style={{ fontFamily: BW.ffSerif, fontSize: 14, lineHeight: 1.55, margin: 0, color: BW.chalk2 }}>Twice a month. The two best notes, plus one short field entry. No email gate on the archive — this is just the easier way to read it.</p>
      {!submitted ? (
        <form onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@operator.co" style={{ padding: "12px 14px", borderRadius: 0, border: `1px solid rgba(244,236,218,0.28)`, background: "transparent", color: BW.chalk50, fontFamily: BW.ffG, fontSize: 14, outline: "none" }} />
          <button type="submit" style={{ padding: "12px 16px", background: BW.brass, color: BW.ink, border: "none", borderRadius: 0, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>Sign me up →</button>
        </form>
      ) : (
        <div style={{ padding: "16px 14px", border: `1px dashed ${BW.brass}`, color: BW.brass, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>✓ On the list. First note ships in two weeks.</div>
      )}
      <div style={{ paddingTop: 16, borderTop: `1px solid rgba(244,236,218,0.18)`, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600, lineHeight: 1.6 }}>
          ~600 operators on the list<br />Unsubscribe with one click<br />No course funnels, ever
      </div>
    </aside>
  );
}

window.FNArt = FNArt;
window.FNMasthead = FNMasthead;
window.FNFilterRail = FNFilterRail;
window.FNFeatured = FNFeatured;
window.FNNewsletterRail = FNNewsletterRail;
window.fnTagColor = tagColor;
