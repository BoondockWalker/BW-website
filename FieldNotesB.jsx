/* global React, BW, FN_NOTES, FN_AUTHORS, FN_TAGS, FNArt, fnTagColor */
/* Field Notes — bulletin grid + sidebar columns. */

/* Single archive card. Three sizes: L (full-bleed wide), M (medium), S (text-only) */
function FNCard({ note, size, themed }) {
  const a = FN_AUTHORS[note.author] || {};
  const c = themed ? fnTagColor(note.tag, true) : BW.ink;
  const isMobile = useMediaQuery("(max-width: 720px)");
  const eff = isMobile ? "M" : size;

  if (eff === "L") {
    return (
      <a href={`note.html?slug=${note.slug}`} style={{ gridColumn: isMobile ? "auto" : "span 2", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", border: `0.75px solid ${BW.ink}`, background: BW.chalk50, color: BW.ink, textDecoration: "none", minHeight: 320 }}>
        <div style={{ position: "relative", borderRight: isMobile ? 0 : `0.75px solid ${BW.ink}`, borderBottom: isMobile ? `0.75px solid ${BW.ink}` : 0, minHeight: 240 }}>
          <FNArt kind={note.art} color={c} caption={`fig. ${note.issue.replace("No ", "")}`} image={note.image} alt={note.imageAlt} />
        </div>
        <div style={{ padding: "26px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 18 }}>
          <div>
            <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: c, fontWeight: 700, marginBottom: 14, display: "flex", gap: 10, alignItems: "center" }}>
              <span>{note.tag}</span><span style={{ width: 14, height: 1, background: c }} /><span>{note.issue} · {note.date}</span>
            </div>
            <h3 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 0.98, letterSpacing: "-0.02em", margin: "0 0 14px", color: BW.ink }}>{note.title}</h3>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 15, lineHeight: 1.55, margin: 0, color: BW.ink2 }}>{note.dek}</p>
          </div>
          <FNCardFoot author={note.author} initials={a.initials} minutes={note.minutes} />
        </div>
      </a>
    );
  }

  if (eff === "S") {
    return (
      <a href={`note.html?slug=${note.slug}`} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", border: `0.75px solid ${BW.ink}`, background: BW.chalk50, color: BW.ink, textDecoration: "none", padding: "22px 22px 18px", gap: 18, minHeight: 280 }}>
        <div>
          <div style={{ fontFamily: BW.ffM, fontSize: 9.5, letterSpacing: "0.24em", textTransform: "uppercase", color: c, fontWeight: 700, marginBottom: 14, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <span>{note.tag}</span><span style={{ width: 12, height: 1, background: c }} /><span>{note.issue}</span>
          </div>
          <h3 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: 24, lineHeight: 1.04, letterSpacing: "-0.02em", margin: "0 0 12px", color: BW.ink }}>{note.title}</h3>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 14, lineHeight: 1.5, margin: 0, color: BW.ink2 }}>{note.dek}</p>
        </div>
        <FNCardFoot author={note.author} initials={a.initials} minutes={note.minutes} compact />
      </a>
    );
  }

  /* M default */
  return (
    <a href={`note.html?slug=${note.slug}`} style={{ display: "flex", flexDirection: "column", border: `0.75px solid ${BW.ink}`, background: BW.chalk50, color: BW.ink, textDecoration: "none" }}>
      <div style={{ aspectRatio: "16/10", borderBottom: `0.75px solid ${BW.ink}`, position: "relative" }}>
        <FNArt kind={note.art} color={c} caption={`fig. ${note.issue.replace("No ", "")}`} image={note.image} alt={note.imageAlt} />
      </div>
      <div style={{ padding: "22px 22px 18px", display: "flex", flexDirection: "column", gap: 14, flex: 1, justifyContent: "space-between" }}>
        <div>
          <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: c, fontWeight: 700, marginBottom: 12, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <span>{note.tag}</span><span style={{ width: 14, height: 1, background: c }} /><span>{note.issue} · {note.date}</span>
          </div>
          <h3 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: 26, lineHeight: 1.02, letterSpacing: "-0.02em", margin: "0 0 12px", color: BW.ink }}>{note.title}</h3>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 14.5, lineHeight: 1.55, margin: 0, color: BW.ink2 }}>{note.dek}</p>
        </div>
        <FNCardFoot author={note.author} initials={a.initials} minutes={note.minutes} />
      </div>
    </a>
  );
}

function FNCardFoot({ author, initials, minutes, compact }) {
  return (
    <div style={{ paddingTop: 14, borderTop: `1px solid ${BW.ruleL}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: BW.ink2, fontWeight: 600 }}>
        <span style={{ width: 24, height: 24, borderRadius: "50%", background: BW.ink, color: BW.chalk50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BW.ffG, fontSize: 9, fontWeight: 700 }}>{initials || "MN"}</span>
        <span>{compact ? author.split(" ").slice(-1)[0] : author}</span>
      </div>
      <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 600 }}>{minutes} min</span>
    </div>
  );
}

/* Index column — every note in compact list (for sidebar) */
function FNIndex({ notes }) {
  return (
    <aside style={{ alignSelf: "start", border: `1.5px solid ${BW.ink}`, background: BW.chalk50, padding: "24px 24px 20px", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700, paddingBottom: 12, borderBottom: `1.5px solid ${BW.ink}` }}>Index · all notes</div>
      <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
        {notes.map((n) => (
          <li key={n.slug} style={{ borderBottom: `1px dotted ${BW.ruleL}` }}>
            <a href={`note.html?slug=${n.slug}`} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "10px 0", color: BW.ink, textDecoration: "none", fontFamily: BW.ffSerif, fontSize: 13.5, lineHeight: 1.4 }}>
              <span style={{ display: "flex", gap: 8 }}>
                <span style={{ fontFamily: BW.ffM, fontSize: 9.5, letterSpacing: "0.18em", color: BW.ink3, minWidth: 28 }}>{n.issue.replace("No ", "")}</span>
                <span>{n.title}</span>
              </span>
              <span style={{ fontFamily: BW.ffM, fontSize: 9.5, color: fnTagColor(n.tag, true), letterSpacing: "0.18em", textTransform: "uppercase", flexShrink: 0 }}>{n.tag}</span>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

/* Operator's diary — small text-only column at the foot */
function FNDiary() {
  const entries = [
    { date: "Apr 25", text: "Halberd kickoff. Cold water on three sacred cows in the first hour." },
    { date: "Apr 21", text: "Killed a campaign at the staging-link review. Cost: zero. Saved: a quarter." },
    { date: "Apr 18", text: "AI desk-rep flagged its own miss for the first time. Confetti, briefly." },
    { date: "Apr 14", text: "Field Manual on the front page. Three replies in under an hour. The list works." },
    { date: "Apr 10", text: "Rejected a logo refresh that would have been a refit. Saved the client $40k." },
  ];
  return (
    <aside style={{ alignSelf: "start", border: `1.5px solid ${BW.ink}`, background: BW.ink, color: BW.chalk50, padding: "24px 24px 22px", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, paddingBottom: 12, borderBottom: `1px solid rgba(244,236,218,0.18)` }}>Operator's diary</div>
      <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        {entries.map((e) => (
          <li key={e.date} style={{ display: "flex", gap: 12 }}>
            <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, minWidth: 46, paddingTop: 2 }}>{e.date}</span>
            <span style={{ fontFamily: BW.ffSerif, fontStyle: "italic", fontSize: 14, lineHeight: 1.55, color: BW.chalk2 }}>{e.text}</span>
          </li>
        ))}
      </ol>
      <div style={{ marginTop: 6, fontFamily: BW.ffM, fontSize: 9.5, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600 }}>— M. Nead, principal</div>
    </aside>
  );
}

/* Bulletin grid with size-mixed cards */
function FNBulletinGrid({ notes, themed }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "clamp(16px, 2vw, 24px)", gridAutoFlow: "dense" }}>
      {notes.map((n) => <FNCard key={n.slug} note={n} size={n.size} themed={themed} />)}
    </div>
  );
}

/* End-of-archive footer card */
function FNEndCard() {
  return (
    <div style={{ border: `0.75px solid ${BW.ink}`, padding: "32px 28px", background: BW.chalk, display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
      <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>— End of file</div>
      <h3 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: 32, lineHeight: 1.04, letterSpacing: "-0.02em", margin: 0, color: BW.ink, maxWidth: "20ch" }}>That's the archive — for now.</h3>
      <p style={{ fontFamily: BW.ffSerif, fontSize: 15.5, lineHeight: 1.55, margin: 0, color: BW.ink2, maxWidth: "44ch" }}>New notes ship the 2nd and 4th Tuesday of each month. Older posts (pre-2025) are still in the binder — drop a line if you want a copy.</p>
      <a href="index.html#contact" style={{ marginTop: 4, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.ink, textDecoration: "none", borderBottom: `1.5px solid ${BW.ink}`, paddingBottom: 3 }}>Request the binder →</a>
    </div>
  );
}

window.FNCard = FNCard;
window.FNBulletinGrid = FNBulletinGrid;
window.FNIndex = FNIndex;
window.FNDiary = FNDiary;
window.FNEndCard = FNEndCard;
