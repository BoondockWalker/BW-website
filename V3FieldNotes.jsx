/* global React, BW */
/* §07 — Field Notes. Blog index w/ featured image + post thumbnails. */

/* Inline editorial illustration — composed of paper-texture stripes, a brand
   shape, and a fig. caption. Different "kind" makes each post recognizable. */
function NoteArt({ kind, color, caption, label }) {
  const stripes = (
    <rect x="0" y="0" width="100%" height="100%" fill={color} />
  );
  const grain = (
    <rect x="0" y="0" width="100%" height="100%" fill="url(#grain)" opacity="0.5" />
  );
  let glyph = null;
  if (kind === "voice") {
    // a circular wave — voice
    glyph = (
      <g>
        <circle cx="50%" cy="50%" r="28%" fill="none" stroke={BW.chalk50} strokeWidth="1.4" opacity="0.85" />
        <circle cx="50%" cy="50%" r="20%" fill="none" stroke={BW.chalk50} strokeWidth="1.0" opacity="0.6" />
        <circle cx="50%" cy="50%" r="12%" fill={BW.chalk50} opacity="0.95" />
        <path d="M -40 50%  Q 25% 35%, 50% 50% T 140% 50%" fill="none" stroke={BW.chalk50} strokeWidth="1.2" opacity="0.55" />
      </g>
    );
  } else if (kind === "pipeline") {
    // a funnel diagram
    glyph = (
      <g>
        <polygon points="20,30 80,30 60,55 60,72 40,72 40,55" fill="none" stroke={BW.chalk50} strokeWidth="1.6" opacity="0.95" transform="scale(2.2) translate(2,4)" />
      </g>
    );
  } else if (kind === "lab") {
    // a stitched seam
    glyph = (
      <g>
        <path d="M 12% 50% L 22% 44% L 28% 56% L 38% 44% L 44% 56% L 54% 44% L 60% 56% L 70% 44% L 78% 56% L 88% 50%" fill="none" stroke={BW.chalk50} strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="12%" cy="50%" r="3" fill={BW.chalk50} />
        <circle cx="88%" cy="50%" r="3" fill={BW.chalk50} />
      </g>
    );
  } else if (kind === "compass") {
    // positioning compass
    glyph = (
      <g>
        <circle cx="50%" cy="50%" r="26%" fill="none" stroke={BW.chalk50} strokeWidth="1.4" />
        <line x1="50%" y1="24%" x2="50%" y2="76%" stroke={BW.chalk50} strokeWidth="0.8" opacity="0.6" />
        <line x1="24%" y1="50%" x2="76%" y2="50%" stroke={BW.chalk50} strokeWidth="0.8" opacity="0.6" />
        <polygon points="50%,30% 54%,50% 50%,70% 46%,50%" fill={BW.chalk50} opacity="0.95" />
      </g>
    );
  } else if (kind === "receipts") {
    // ledger receipt rows
    glyph = (
      <g>
        <rect x="20%" y="22%" width="60%" height="56%" fill={BW.chalk50} opacity="0.94" />
        <line x1="50%" y1="22%" x2="50%" y2="78%" stroke={color} strokeWidth="1" opacity="0.5" />
        {[33,42,51,60,69].map(y=><line key={y} x1="22%" y1={`${y}%`} x2="78%" y2={`${y}%`} stroke={color} strokeWidth="0.6" opacity="0.55" />)}
        <rect x="20%" y="22%" width="60%" height="6" fill={color} />
      </g>
    );
  }

  return (
    <svg viewBox="0 0 320 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
      <defs>
        <pattern id="grain" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(20,16,12,0.18)" strokeWidth="1.5" />
        </pattern>
      </defs>
      {stripes}
      {grain}
      {glyph}
      <text x="14" y="22" fontFamily={BW.ffM} fontSize="9" letterSpacing="2" fill={BW.chalk50} fontWeight="700" opacity="0.82">{label}</text>
      <text x="306" y="190" textAnchor="end" fontFamily={BW.ffH} fontWeight="700" fontSize="20" fill={BW.chalk50} opacity="0.92">{caption}</text>
    </svg>
  );
}

function V3FieldNotes() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isNarrow = useMediaQuery("(max-width: 560px)");
  const featured = {
    issue: "No 14",
    date: "Apr · 2026",
    kicker: "Voice / Long read",
    title: "The year you stop calling it heritage.",
    dek: "A 70-year wholesale brand has more in common with a startup than it thinks. The receipts of having survived are an asset operators buy — but only if you stop apologizing for the year on the door.",
    author: "B. Walker",
    minutes: 9,
    tag: "TRIAGE · VOICE",
    color: BW.clay,
    art: "voice",
  };

  const notes = [
    { issue: "No 13", date: "Apr · 2026", kicker: "Nurture",         title: "Five lifecycle stages we'd delete tomorrow.",     author: "M. Kade",   minutes: 6, tag: "ENGAGEMENT", color: BW.plum,  art: "pipeline" },
    { issue: "No 12", date: "Mar · 2026", kicker: "AI · Lab",        title: "Why our desk-rep starts with the failure-rate.", author: "J. Ortiz",  minutes: 7, tag: "LAB",      color: BW.brass,  art: "lab"      },
    { issue: "No 11", date: "Mar · 2026", kicker: "Positioning",     title: "Category of one — without a category.",          author: "B. Walker", minutes: 5, tag: "BRAND",    color: BW.clay,   art: "compass"  },
    { issue: "No 10", date: "Feb · 2026", kicker: "Operator's diary", title: "What we got wrong on the Halberd rebuild.",     author: "M. Kade",   minutes: 8, tag: "RECEIPTS", color: BW.forest, art: "receipts" },
  ];

  return (
    <section id="field-notes" style={{ background: BW.chalk, color: BW.ink, padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Eyebrow + headline */}
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: isMobile ? 24 : 0, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 24, flexWrap: "wrap" }}>
              <span>§07</span><span style={{ width: 28, height: 1, background: BW.clay }} /><span>Field Notes · Bulletin from the bench</span>
            </div>
            <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(48px, 9vw, 84px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.96, margin: 0, color: BW.ink }}>
              Notes from the <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>field,</em> filed by the <em style={{ color: BW.ink, fontStyle: "italic", fontWeight: 400 }}>walkers.</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "flex-end", gap: 12 }}>
            <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 16, color: "rgba(20,16,12,0.55)" }}>twice monthly · ~600 operators on the list</span>
            <a style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, textDecoration: "none", fontWeight: 700, paddingBottom: 3, borderBottom: `1.5px solid ${BW.ink}`, cursor: "pointer", whiteSpace: "nowrap" }}>Subscribe to Field Notes →</a>
          </div>
        </div>

        {/* Bulletin grid */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", border: `1.5px solid ${BW.ink}`, background: BW.chalk50 }}>
          {/* FEATURED */}
          <article style={{ borderRight: !isMobile ? `1.5px solid ${BW.ink}` : "none", borderBottom: isMobile ? `1.5px solid ${BW.ink}` : "none", display: "flex", flexDirection: "column" }}>
            {/* hero image */}
            <div style={{ aspectRatio: "16/8", borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
              <NoteArt kind={featured.art} color={featured.color} caption="fig. 07.0 · featured" label={`${featured.issue} · ${featured.date}`} />
              <div style={{ position: "absolute", left: 0, bottom: 0, padding: "8px 12px", background: BW.ink, color: BW.chalk50, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}>{featured.tag}</div>
            </div>
            {/* body */}
            <div style={{ padding: "28px 32px 28px", flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: featured.color, fontWeight: 700 }}>{featured.kicker}</div>
              <h3 style={{ fontFamily: BW.ffD, fontSize: "clamp(28px, 5.5vw, 44px)", fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.04, margin: 0, color: BW.ink, fontStyle: "italic" }}>{featured.title}</h3>
              <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.55, margin: 0, color: BW.ink2 }}>{featured.dek}</p>
              <div style={{ marginTop: "auto", paddingTop: 20, borderTop: `1px solid ${BW.ruleM}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.6)", fontWeight: 600 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: BW.ink, color: BW.chalk50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BW.ffG, fontSize: 10, fontWeight: 700 }}>BW</span>
                  <span>{featured.author}</span><span>·</span><span>{featured.minutes} min walk</span>
                </div>
                <a style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, textDecoration: "none", fontWeight: 700, borderBottom: `1.5px solid ${BW.ink}`, paddingBottom: 3, cursor: "pointer" }}>Read note →</a>
              </div>
            </div>
          </article>

          {/* NOTES LIST w/ thumbnails */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {notes.map((n, i) => (
              <article key={n.issue} style={{ padding: "20px clamp(16px, 4vw, 24px)", borderBottom: i < notes.length - 1 ? `1px solid ${BW.ruleM}` : "none", display: "grid", gridTemplateColumns: isNarrow ? "80px 1fr" : "120px 1fr auto", gap: isNarrow ? 14 : 20, alignItems: "center" }}>
                <div style={{ width: isNarrow ? 80 : 120, aspectRatio: "5/4", border: `1px solid ${BW.ink}`, overflow: "hidden", flexShrink: 0 }}>
                  <NoteArt kind={n.art} color={n.color} caption={`fig. 07.${i+1}`} label={n.issue} />
                </div>
                <div>
                  <div style={{ display: "flex", gap: 10, fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600, marginBottom: 6 }}>
                    <span style={{ color: n.color }}>{n.issue}</span><span>·</span><span>{n.date}</span><span>·</span><span style={{ color: n.color }}>{n.tag}</span>
                  </div>
                  <h4 style={{ fontFamily: BW.ffD, fontSize: 21, fontWeight: 400, letterSpacing: "-0.018em", lineHeight: 1.18, margin: 0, color: BW.ink, fontStyle: "italic" }}>{n.title}</h4>
                  <div style={{ marginTop: 8, fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.5)", fontWeight: 600 }}>
                    {n.author} · {n.minutes} min walk
                  </div>
                </div>
                {!isNarrow && <span style={{ fontFamily: BW.ffG, fontSize: 18, color: BW.ink, alignSelf: "center" }}>→</span>}
              </article>
            ))}
          </div>
        </div>

        {/* Footer rail */}
        <div style={{ marginTop: 22, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 12 : 0, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.6)", fontWeight: 600 }}>
          <span>47 notes filed since 2015 · all free, no email gate</span>
          <a style={{ color: BW.ink, textDecoration: "none", borderBottom: `1.5px solid ${BW.ink}`, paddingBottom: 3, fontWeight: 700, cursor: "pointer" }}>Browse the full archive →</a>
        </div>
      </div>
    </section>
  );
}

window.V3FieldNotes = V3FieldNotes;
