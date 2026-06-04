/* global React, BW, AB_CODES, AB_TEAM, AB_BUILD, AB_LEDGER, AB_SHELF */

/* AboutHero — masthead, standfirst, origin, hero diagram */
function AboutHero({ showDiagram }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <section style={{ background: BW.chalk, color: BW.ink, fontFamily: BW.ffG, borderBottom: `0.75px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(24px, 4vw, 40px) clamp(20px, 5vw, 64px) clamp(48px, 6vw, 80px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, borderBottom: `0.75px solid ${BW.ink}`, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700, flexWrap: "wrap", gap: 12 }}>
          <span>About the bureau</span>
          <span>Vol. XII · No 04</span>
          <span>Cleveland · 41.49°N</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr", gap: isMobile ? 32 : 80, paddingTop: "clamp(28px, 4vw, 48px)", alignItems: "end" }}>
          <div>
            <h1 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(56px, 12vw, 156px)", lineHeight: 0.88, letterSpacing: "-0.02em", margin: 0, color: BW.ink }}>
              A bureau,<br /><em style={{ fontStyle: "italic", fontWeight: 400, color: BW.clay }}>not an agency.</em>
            </h1>
            <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.45, margin: "clamp(28px, 3vw, 40px) 0 0", color: BW.ink2, maxWidth: "44ch" }}>
              Boondock Walker is a small, opinionated bureau for brand, demand, and lab work. Founded in 2015 in Cleveland on a single idea: the senior names you hire should be the senior hands on the file — every call, every revision, every shipped deliverable.
            </p>
          </div>
          {showDiagram && !isMobile && <AboutHeroDiagram />}
        </div>
        <div style={{ marginTop: "clamp(36px, 5vw, 64px)", paddingTop: 24, borderTop: `0.75px solid ${BW.ink}`, display: "flex", flexWrap: "wrap", gap: "clamp(20px, 3vw, 48px)", fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>
          <span>— Founded 2015</span>
          <span>— 11 years on the bench</span>
          <span>— Three principals, one bench, no B-team</span>
          <span style={{ color: BW.clay }}>— Booking Q3 2026</span>
        </div>
      </div>
    </section>
  );
}

/* Compact editorial diagram of bureau structure */
function AboutHeroDiagram() {
  return (
    <svg viewBox="0 0 320 240" width="100%" style={{ display: "block", border: `0.75px solid ${BW.ink}` }}>
      <defs>
        <pattern id="abhatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="rgba(20,16,12,0.18)" strokeWidth="1.5" /></pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill={BW.chalk50} />
      <rect x="0" y="0" width="100%" height="100%" fill="url(#abhatch)" opacity="0.35" />
      <text x="14" y="22" fontFamily={BW.ffM} fontSize="9" letterSpacing="2" fill={BW.ink2} fontWeight="700">FIG · 01 — THE BUREAU</text>
      <circle cx="160" cy="125" r="34" fill={BW.clay} />
      <text x="160" y="121" textAnchor="middle" fontFamily={BW.ffM} fontSize="8.5" letterSpacing="1.6" fill={BW.chalk50} fontWeight="700">YOUR</text>
      <text x="160" y="134" textAnchor="middle" fontFamily={BW.ffM} fontSize="8.5" letterSpacing="1.6" fill={BW.chalk50} fontWeight="700">BRAND</text>
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const r = 78;
        const x = 160 + r * Math.cos((deg - 90) * Math.PI / 180);
        const y = 125 + r * Math.sin((deg - 90) * Math.PI / 180);
        const labels = ["Brand", "Demand", "Lab", "Strategy", "Voice", "Bench"];
        return (
          <g key={deg}>
            <line x1="160" y1="125" x2={x} y2={y} stroke={BW.ink} strokeWidth="0.75" opacity="0.4" />
            <circle cx={x} cy={y} r="14" fill={BW.chalk} stroke={BW.ink} strokeWidth="0.75" />
            <text x={x} y={y + 3} textAnchor="middle" fontFamily={BW.ffM} fontSize="7" letterSpacing="1" fill={BW.ink} fontWeight="700">{labels[i].toUpperCase()}</text>
          </g>
        );
      })}
      <text x="306" y="230" textAnchor="end" fontFamily={BW.ffD} fontStyle="italic" fontSize="11" fill={BW.ink2}>brand at center · bench around</text>
    </svg>
  );
}

/* The codes — numbered principles list */
function AboutCodes({ codes }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(56px, 7vw, 112px) clamp(20px, 5vw, 64px)", borderBottom: `0.75px solid ${BW.ink}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 14, borderBottom: `0.75px solid ${BW.ink}`, marginBottom: "clamp(36px, 4vw, 56px)", flexWrap: "wrap", gap: 12 }}>
          <Eyebrow color={BW.clay}>The codes we work by</Eyebrow>
          <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>{codes.length} principles · revised yearly</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 0.98, letterSpacing: "-0.015em", margin: "0 0 clamp(36px, 4vw, 56px)", color: BW.ink, maxWidth: "20ch" }}>
          Not a manifesto. Just the rules of the bench.
        </h2>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 0, borderTop: `0.75px solid ${BW.ink}`, borderLeft: `0.75px solid ${BW.ink}` }}>
          {codes.map((c, i) => (
            <li key={c.num} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 18, padding: "clamp(20px, 2.5vw, 32px) clamp(20px, 2.5vw, 32px)", borderRight: `0.75px solid ${BW.ink}`, borderBottom: `0.75px solid ${BW.ink}`, alignItems: "start" }}>
              <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", color: BW.clay, fontWeight: 700, paddingTop: 6 }}>{c.num}</span>
              <div>
                <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 12px", color: BW.ink }}>{c.title}</h3>
                <p style={{ fontFamily: BW.ffSerif, fontSize: 15.5, lineHeight: 1.55, margin: 0, color: BW.ink2 }}>{c.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* How the bureau is built — three editorial panels */
function AboutBuild({ panels }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <section style={{ background: BW.ink, color: BW.chalk50, padding: "clamp(56px, 7vw, 112px) clamp(20px, 5vw, 64px)", borderBottom: `0.75px solid ${BW.ink}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 14, borderBottom: `0.75px solid ${BW.ruleD}`, marginBottom: "clamp(36px, 4vw, 56px)", flexWrap: "wrap", gap: 12 }}>
          <Eyebrow color={BW.brass} light>How the bureau is built</Eyebrow>
          <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>The structural argument</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 0.98, letterSpacing: "-0.015em", margin: "0 0 clamp(40px, 5vw, 64px)", color: BW.chalk50, maxWidth: "22ch" }}>
          The shape of the team is the value of the team.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 0, borderTop: `0.75px solid ${BW.ruleD}`, borderLeft: `0.75px solid ${BW.ruleD}` }}>
          {panels.map((p) => (
            <div key={p.label} style={{ padding: "clamp(28px, 3vw, 40px)", borderRight: `0.75px solid ${BW.ruleD}`, borderBottom: `0.75px solid ${BW.ruleD}`, display: "flex", flexDirection: "column", gap: 22, minHeight: 360 }}>
              <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>{p.label}</span>
              <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(26px, 2.6vw, 34px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: 0, color: BW.chalk50 }}>{p.title}</h3>
              <p style={{ fontFamily: BW.ffSerif, fontSize: 15.5, lineHeight: 1.55, margin: 0, color: BW.chalk2, flex: 1 }}>{p.body}</p>
              <div style={{ marginTop: "auto", paddingTop: 18, borderTop: `0.75px solid ${BW.ruleD}`, display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 56, lineHeight: 0.9, color: BW.brass, fontWeight: 400 }}>{p.metric}</span>
                <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>{p.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Principals — three senior leadership cards */
function AboutTeam({ team }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <section style={{ background: BW.chalk, color: BW.ink, padding: "clamp(56px, 7vw, 112px) clamp(20px, 5vw, 64px)", borderBottom: `0.75px solid ${BW.ink}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 14, borderBottom: `0.75px solid ${BW.ink}`, marginBottom: "clamp(36px, 4vw, 56px)", flexWrap: "wrap", gap: 12 }}>
          <Eyebrow color={BW.clay}>The principals</Eyebrow>
          <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>3 of 3 — the people on every call</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 0.98, letterSpacing: "-0.015em", margin: "0 0 clamp(36px, 4vw, 56px)", color: BW.ink, maxWidth: "22ch" }}>
          The names on the proposal are the hands on the file.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 0, borderTop: `0.75px solid ${BW.ink}`, borderLeft: `0.75px solid ${BW.ink}` }}>
          {team.map((p) => (
            <div key={p.initials} style={{ padding: "clamp(28px, 3vw, 40px)", borderRight: `0.75px solid ${BW.ink}`, borderBottom: `0.75px solid ${BW.ink}`, display: "flex", flexDirection: "column", gap: 20, background: BW.chalk50, minHeight: 380 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ width: 72, height: 72, borderRadius: "50%", background: BW.ink, color: BW.chalk50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BW.ffG, fontSize: 26, fontWeight: 700, letterSpacing: "0.05em" }}>{p.initials}</span>
                <div>
                  <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 30, lineHeight: 1, color: BW.ink }}>{p.name}</div>
                  <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: p.color, fontWeight: 700, marginTop: 6 }}>{p.role}</div>
                </div>
              </div>
              <p style={{ fontFamily: BW.ffSerif, fontSize: 15, lineHeight: 1.55, margin: 0, color: BW.ink2, flex: 1 }}>{p.bio}</p>
              <div style={{ paddingTop: 16, borderTop: `0.75px solid ${BW.ruleL}`, display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 600 }}>
                <span>{p.yrs} yrs in practice</span>
                <span style={{ color: p.color }}>{p.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Shelf + ledger — split rail */
function AboutShelfLedger({ shelf, ledger }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(56px, 7vw, 112px) clamp(20px, 5vw, 64px)", borderBottom: `0.75px solid ${BW.ink}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr", gap: "clamp(36px, 4vw, 64px)" }}>
        {/* Shelf */}
        <div>
          <div style={{ paddingBottom: 14, borderBottom: `0.75px solid ${BW.ink}`, marginBottom: 32 }}>
            <Eyebrow color={BW.sky}>The shelf</Eyebrow>
          </div>
          <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 0.98, letterSpacing: "-0.015em", margin: "0 0 36px", color: BW.ink, maxWidth: "20ch" }}>
            What the bureau learns from.
          </h2>
          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", borderTop: `0.75px solid ${BW.ruleL}` }}>
            {shelf.map((b, i) => (
              <li key={b.title} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: 18, padding: "18px 0", borderBottom: `0.75px solid ${BW.ruleL}`, alignItems: "start" }}>
                <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", color: BW.sky, fontWeight: 700, paddingTop: 4 }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 4, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 22, lineHeight: 1.1, color: BW.ink }}>{b.title}</span>
                    <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: BW.ink3, fontWeight: 600 }}>— {b.author}</span>
                  </div>
                  <div style={{ fontFamily: BW.ffSerif, fontStyle: "italic", fontSize: 14, lineHeight: 1.55, color: BW.ink2 }}>{b.why}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Ledger */}
        <aside style={{ alignSelf: "start", border: `0.75px solid ${BW.ink}`, background: BW.ink, color: BW.chalk50, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 20, position: isMobile ? "static" : "sticky", top: 32 }}>
          <Eyebrow color={BW.brass} light>Tenure ledger</Eyebrow>
          <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 600 }}>Open ledger · revised quarterly</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: `0.75px solid ${BW.ruleD}`, borderLeft: `0.75px solid ${BW.ruleD}`, marginTop: 8 }}>
            {ledger.map((row) => (
              <div key={row.label} style={{ padding: "20px 16px", borderRight: `0.75px solid ${BW.ruleD}`, borderBottom: `0.75px solid ${BW.ruleD}`, display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: 40, lineHeight: 0.9, color: BW.brass, letterSpacing: "-0.02em" }}>{row.value}</span>
                  <span style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>{row.unit}</span>
                </div>
                <span style={{ fontFamily: BW.ffM, fontSize: 9.5, letterSpacing: "0.2em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 600 }}>{row.label}</span>
              </div>
            ))}
          </div>
          <div style={{ paddingTop: 14, borderTop: `0.75px solid ${BW.ruleD}`, fontFamily: BW.ffSerif, fontStyle: "italic", fontSize: 13.5, lineHeight: 1.55, color: BW.chalk2 }}>
            We publish these because nobody else does. The receipts of having survived are an asset — not a thing to apologize for.
          </div>
        </aside>
      </div>
    </section>
  );
}

/* Engagement CTA + soft hiring list */
function AboutCTA() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  return (
    <section style={{ background: BW.clay, color: BW.chalk50, padding: "clamp(64px, 8vw, 128px) clamp(20px, 5vw, 64px)", borderBottom: `0.75px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.06) 0 1.5px, transparent 1.5px 6px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr", gap: "clamp(36px, 4vw, 64px)", alignItems: "end" }}>
        <div>
          <Eyebrow color={BW.chalk50} light>Engagement</Eyebrow>
          <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(40px, 7vw, 96px)", lineHeight: 0.98, letterSpacing: "-0.02em", margin: "24px 0 clamp(20px, 3vw, 32px)", color: BW.chalk50, maxWidth: "16ch" }}>
            We don't take projects.<br/>We take engagements.
          </h2>
          <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(17px, 1.8vw, 21px)", lineHeight: 1.5, margin: "0 0 32px", color: BW.chalk2, maxWidth: "52ch" }}>
            The bureau works at the full-engagement level — multi-quarter, embedded, with the principals on every call. If you're looking for a one-off deck, you're looking for someone else. If you're looking for the senior team that holds the brand for the next eighteen months, open the conversation.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="index.html#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, padding: "13px 22px", borderRadius: 999, cursor: "pointer", border: "1.5px solid transparent", textDecoration: "none", background: BW.ink, color: BW.chalk50 }}>Open the conversation →</a>
            <a href="work.html" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, padding: "13px 22px", borderRadius: 999, cursor: "pointer", border: `1.5px solid rgba(244,236,218,0.4)`, textDecoration: "none", background: "transparent", color: BW.chalk50 }}>See recent engagements</a>
          </div>
        </div>

        {/* Soft hiring list */}
        <aside style={{ border: `0.75px solid ${BW.chalk50}`, background: "rgba(20,16,12,0.18)", padding: "26px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
          <Eyebrow color={BW.chalk50} light end="No openings · we keep a list">Bench list</Eyebrow>
          <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: 26, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0, color: BW.chalk50 }}>Want a seat on the bench?</h3>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 14.5, lineHeight: 1.55, margin: 0, color: BW.chalk2 }}>We don't post openings. We keep a list of senior operators we want to call when the right engagement lands. Drop a line and a link to your work — if it fits, we'll reach out.</p>
          {!done ? (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@operator.co" style={{ padding: "12px 14px", borderRadius: 0, border: `0.75px solid rgba(244,236,218,0.5)`, background: "transparent", color: BW.chalk50, fontFamily: BW.ffG, fontSize: 14, outline: "none" }} />
              <button type="submit" style={{ padding: "12px 16px", background: BW.ink, color: BW.chalk50, border: "none", borderRadius: 0, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>On the list →</button>
            </form>
          ) : (
            <div style={{ padding: "12px 14px", border: `0.75px dashed ${BW.chalk50}`, color: BW.chalk50, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>✓ On the list. We reach out when the work fits.</div>
          )}
        </aside>
      </div>
    </section>
  );
}

window.AboutHero = AboutHero;
window.AboutCodes = AboutCodes;
window.AboutBuild = AboutBuild;
window.AboutTeam = AboutTeam;
window.AboutShelfLedger = AboutShelfLedger;
window.AboutCTA = AboutCTA;
