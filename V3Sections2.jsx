/* global React, BW */
/* Homepage v3 — Cases, Lab, Trust, CTA, Footer */

/* §04 — Selected receipts (case studies) on chalk paper */
function V3Cases() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const cases = [
    {
      slug: "oneil-digital-solutions",
      tag: "Brand · Demand",
      co: "O'Neil Digital Solutions",
      pull: "Redefining a world-class brand.",
      m1: "5B+", m1k: "Pages delivered",
      m2: "4×",  m2k: "Aspire leader",
      c: BW.clay,
      href: "case-oneil.html",
      image: "assets/cases/oneil/hero.jpg",
    },
    {
      slug: "tt-electronics",
      tag: "Brand · Demand",
      co: "TT Electronics IMS",
      pull: "Your Vision. Integrated.",
      m1: "+300%", m1k: "Traffic lift",
      m2: "5",     m2k: "Languages live",
      c: BW.forest,
      href: "case-tt-electronics.html",
      image: "assets/cases/tt-electronics/hero.jpg",
    },
    {
      slug: "archdiocese-of-detroit",
      tag: "Brand",
      co: "Archdiocese of Detroit",
      pull: "A 200-year institution, refit for a missionary century.",
      m1: "1.3M", m1k: "Catholics reached",
      m2: "200+", m2k: "Parishes adopting",
      c: BW.plum,
      href: "case-archdiocese-detroit.html",
      image: "assets/cases/archdiocese-detroit/hero.jpg",
    },
  ];
  return (
    <section id="work" style={{ background: BW.chalk50, color: BW.ink, padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Reveal kind="rise" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: isMobile ? 24 : 0, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 24, flexWrap: "wrap" }}>
              <span>§04</span><span style={{ width: 28, height: 1, background: BW.clay }} /><span>Selected Receipts</span>
            </div>
            <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(48px, 9vw, 84px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 0.94, margin: 0, color: BW.ink, maxWidth: 900 }}>
              Case studies, <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>with</em> <em style={{ color: BW.ink, fontStyle: "italic", fontWeight: 400 }}>receipts.</em>
            </h2>
          </div>
          <a href="work.html" style={{ fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, textDecoration: "none", fontWeight: 700, paddingBottom: 3, borderBottom: `1.5px solid ${BW.ink}`, cursor: "pointer", whiteSpace: "nowrap" }}>All cases →</a>
        </Reveal>

        <Reveal kind="cascade" stagger={140} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", border: `1px solid ${BW.ink}` }}>
          {cases.map((c, i) => (
            <a key={c.slug} href={c.href} style={{ borderRight: !isMobile && i < 2 ? `1px solid ${BW.ink}` : "none", borderBottom: isMobile && i < cases.length - 1 ? `1px solid ${BW.ink}` : "none", display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", background: BW.chalk50 }}>
              <div style={{ aspectRatio: "16/11", background: c.c, position: "relative", overflow: "hidden", borderBottom: `1px solid ${BW.ink}` }}>
                <img src={c.image} alt={c.co} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,12,0) 45%, rgba(20,16,12,0.55) 100%)" }} />
                <div style={{ position: "absolute", left: 22, top: 22, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk50, fontWeight: 700, textShadow: "0 1px 2px rgba(0,0,0,0.45)" }}>CASE 0{i+1}</div>
                <div style={{ position: "absolute", left: 22, bottom: 22, fontFamily: BW.ffG, fontWeight: 700, color: BW.chalk50, letterSpacing: "-0.02em", lineHeight: 0.9, fontSize: "clamp(24px, 4.4vw, 34px)", textTransform: "uppercase", maxWidth: "calc(100% - 44px)", textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}>{c.co}</div>
                <div style={{ position: "absolute", right: 22, bottom: 22, fontFamily: BW.ffD, fontStyle: "italic", fontSize: 13, color: "rgba(251,247,238,0.85)", fontWeight: 400, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>fig. {i+1}.0</div>
              </div>
              <div style={{ padding: "26px 26px 28px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24 }}>
                <div>
                  <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", marginBottom: 12, fontWeight: 600 }}>{c.tag}</div>
                  <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 24, lineHeight: 1.2, color: BW.ink, margin: 0, fontWeight: 400, letterSpacing: "-0.015em" }}>{c.pull}</p>
                </div>
                <div style={{ display: "flex", gap: 32, paddingTop: 18, borderTop: `1px solid ${BW.ruleL}` }}>
                  <div><div style={{ fontFamily: BW.ffG, fontWeight: 700, fontSize: 22, color: c.c, letterSpacing: "-0.01em", marginBottom: 2 }}>{c.m1}</div><div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>{c.m1k}</div></div>
                  <div><div style={{ fontFamily: BW.ffG, fontWeight: 700, fontSize: 22, color: c.c, letterSpacing: "-0.01em", marginBottom: 2 }}>{c.m2}</div><div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>{c.m2k}</div></div>
                </div>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* §05 — The Lab. Plum surface. Left: headline + body + CTAs. Right: a
   rotating "what if?" prompt typeset on a cropped field-journal page. */
function V3Lab() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const prompts = [
    { q: "What if every sales call quietly seeded next month's content?", initials: "JO" },
    { q: "What if the work nobody had time for got done overnight — in your voice?", initials: "MK" },
    { q: "What if the pipeline could tell you which three accounts to call before you'd made coffee?", initials: "SR" },
    { q: "What if the brand could draft, listen, and learn alongside the team?", initials: "JO" },
    { q: "What if your demand engine knew what to try next, and quietly tried it?", initials: "MK" },
  ];
  const [idx, setIdx] = React.useState(0);
  const [fade, setFade] = React.useState(1);
  React.useEffect(() => {
    const t = setInterval(() => {
      setFade(0);
      setTimeout(() => {
        setIdx((i) => (i + 1) % prompts.length);
        setFade(1);
      }, 450);
    }, 7000);
    return () => clearInterval(t);
  }, []);
  const issueNo = String(idx + 1).padStart(2, "0");
  const cur = prompts[idx];
  return (
    <section id="the-lab" style={{ background: BW.plum, color: BW.chalk50, padding: isMobile ? "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)" : "clamp(56px, 8vw, 100px) 0 clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", clipPath: isMobile ? undefined : "inset(0 0 -200% 0)" }}>
      {/* faint grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${BW.chalk50} 1px, transparent 1px), linear-gradient(90deg, ${BW.chalk50} 1px, transparent 1px)`, backgroundSize: "60px 60px", opacity: 0.04, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
        <Reveal kind="rise" style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay300, fontWeight: 700, marginBottom: 36, flexWrap: "wrap" }}>
          <span>§05</span><span style={{ width: 28, height: 1, background: BW.clay300 }} /><span>The Lab · Applied AI</span>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr", gap: isMobile ? 40 : 64, alignItems: "start" }}>
          <Reveal kind="rise">
            <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(44px, 8.5vw, 80px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 0.98, margin: "0 0 28px", color: BW.chalk50 }}>
              Tools that move <em style={{ color: BW.brass, fontStyle: "italic", fontWeight: 400 }}>the brand</em> — and the <em style={{ color: BW.chalk50, fontStyle: "italic", fontWeight: 400 }}>demand</em> for it.
            </h2>
            <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(16px, 2.4vw, 19px)", lineHeight: 1.6, margin: "0 0 32px", color: "rgba(251,247,238,0.85)", maxWidth: 560 }}>
              The Lab is where we build the AI that's shaped to your work — a quiet assistant inside the CRM, a content engine that drafts in your voice, a model that watches the pipeline overnight and surfaces what you'd want to see first thing. We build each one around the brand you're trying to grow and the demand you're trying to earn, so both get sharper as they go.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="lab.html" style={{ background: BW.brass, color: BW.ink, padding: "13px 22px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer" }}>Tour the Lab →</a>
              <a href="contact.html" style={{ background: "transparent", color: BW.chalk50, padding: "13px 22px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer", border: `1.5px solid rgba(244,236,218,0.4)` }}>Bring us a hypothesis →</a>
            </div>
          </Reveal>

          {/* Spacer cell — reserves horizontal room in the grid so the
              left column reads at 1.1fr width. The paper sits inside
              the maxWidth wrapper so its horizontal anchor stays
              locked to the centered content area as the viewport
              widens, instead of drifting with the right edge. */}
          <div aria-hidden="true" style={{ minHeight: isMobile ? 460 : 360 }} />
        </div>

        {/* Lab Journal page — anchored to the horizontal center of the
            content wrapper so it doesn't shift around when the screen
            width changes. Vertical anchor stays at row 2 of the
            headline; the bottom still rides into §06. */}
        <div style={{ position: "absolute", left: isMobile ? "auto" : "50%", right: isMobile ? "4%" : "auto", top: isMobile ? "auto" : "clamp(205px, calc(17vw - 15px), 245px)", bottom: isMobile ? 28 : "auto", width: isMobile ? "84%" : "clamp(420px, 38vw, 580px)", aspectRatio: "801 / 1136", transform: isMobile ? "rotate(-1deg)" : "rotate(-3deg)", transformOrigin: isMobile ? "bottom right" : "top left", zIndex: 3 }}>
          <img src="assets/paper.png?v=2" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(-3px 5px 4px rgba(8,4,4,0.45)) drop-shadow(0 18px 32px rgba(8,4,4,0.30))" }} />
          {/* journal content — sits inside the paper's writing area. The
              page bleeds heavily into the next section, so on desktop we
              push the content up into the top of the sheet so it stays
              visible above the section border. */}
          <div style={{ position: "absolute", top: "5%", right: "6%", bottom: isMobile ? "7%" : "62%", left: "22%", display: "flex", flexDirection: "column", justifyContent: "space-between", color: BW.ink }}>
            <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.plum, fontWeight: 700 }}>
              Lab Journal · No {issueNo}
            </div>
            <div style={{ opacity: fade, transition: "opacity 0.45s ease", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "clamp(60px, 9%, 100px) 0 clamp(16px, 4%, 28px) 0" }}>
              <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: "clamp(26px, 3vw, 34px)", lineHeight: 1.2, letterSpacing: "-0.015em", color: BW.ink, fontWeight: 400, margin: 0 }}>
                {cur.q}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(20,16,12,0.6)", fontWeight: 700 }}>
              <a href="lab.html" style={{ color: BW.plum, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, borderBottom: `1px solid ${BW.plum}`, paddingBottom: 2 }}>
                Read this issue →
              </a>
            </div>
          </div>
          {/* prompt index dots — tucked at the bottom of the page, riding the rotation */}
          <div style={{ position: "absolute", bottom: "3%", left: "55%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 5 }}>
            {prompts.map((_, i) => (
              <span key={i} style={{ width: i === idx ? 18 : 6, height: 6, background: i === idx ? BW.brass : "rgba(20,16,12,0.25)", borderRadius: 3, transition: "all 0.35s ease" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* §06 — Trust grid (clients) */
function V3Trust() {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const operators = [
    { name: "AFIMAC", href: "case-afimac.html" },
    { name: "Archdiocese of Detroit", href: "case-archdiocese-detroit.html" },
    { name: "Bialosky Cleveland" },
    { name: "Calyx", href: "case-calyx.html" },
    { name: "Central Kitchen", href: "case-central-kitchen.html" },
    { name: "Cleveland Clinic Innovations" },
    { name: "Cleveland Whiskey", href: "case-cleveland-whiskey.html" },
    { name: "Corporate United" },
    { name: "Envera", href: "case-envera.html" },
    { name: "Euclid Chemical Co." },
    { name: "Evarts Tremaine" },
    { name: "Exacta" },
    { name: "Gallagher Sharp" },
    { name: "Guthrie Health" },
    { name: "Maker Town", href: "case-maker-town.html" },
    { name: "Nature's Legacy", href: "case-natures-legacy.html" },
    { name: "NewBridge", href: "case-newbridge.html" },
    { name: "O'Neil Digital Solutions", href: "case-oneil.html" },
    { name: "Origin Entertainment" },
    { name: "Oswald Companies" },
    { name: "Risk International" },
    { name: "Sacred Heart Major Seminary", href: "case-sacred-heart.html" },
    { name: "Suracy" },
    { name: "TT Electronics", href: "case-tt-electronics.html" },
  ];
  const cols = isMobile ? 2 : isTablet ? 3 : 6;
  return (
    <section style={{ background: BW.chalk, color: BW.ink, padding: "clamp(56px, 8vw, 80px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Reveal kind="rise" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "baseline", gap: isMobile ? 12 : 0, marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, flexWrap: "wrap" }}>
            <span>§08</span><span style={{ width: 28, height: 1, background: BW.clay }} /><span>Operators we've shipped for</span>
          </div>
          <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 16, color: "rgba(20,16,12,0.55)" }}>12 selected cases</span>
        </Reveal>
        <Reveal kind="rise" delay={120} style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, borderTop: `1px solid ${BW.ink}`, borderLeft: `1px solid ${BW.ink}` }}>
          {operators.map(o => {
            const cellStyle = { padding: "26px 14px", borderRight: `1px solid ${BW.ink}`, borderBottom: `1px solid ${BW.ink}`, fontFamily: BW.ffG, fontSize: 14, fontWeight: 700, letterSpacing: "-0.005em", textTransform: "uppercase", color: BW.ink, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1.25 };
            return o.href
              ? <a key={o.name} href={o.href} style={{ ...cellStyle, textDecoration: "none", transition: "background 160ms ease" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(20,16,12,0.06)"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>{o.name}</a>
              : <div key={o.name} style={cellStyle}>{o.name}</div>;
          })}
        </Reveal>
      </div>
    </section>
  );
}

/* §07 — Closing CTA on clay (echoes hero) */
function V3CTA() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section id="contact" style={{ background: BW.clay, color: BW.chalk50, padding: "clamp(72px, 12vw, 140px) clamp(20px, 5vw, 64px)", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.06) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
      <Reveal kind="rise" style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 700, marginBottom: 36, flexWrap: "wrap" }}>
          <span>§09</span><span style={{ width: 28, height: 1, background: BW.chalk2 }} /><span>Start a project</span>
        </div>
        <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(56px, 13vw, 124px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 0.9, margin: "0 0 40px", color: BW.chalk50, maxWidth: 1200 }}>
          If your story <em style={{ color: BW.brass, fontStyle: "italic", fontWeight: 400 }}>isn't closing,</em> let's fix the story <em style={{ color: BW.ink, fontStyle: "italic", fontWeight: 400 }}>and the close.</em>
        </h2>
        <div style={{ display: "flex", gap: 14, alignItems: isMobile ? "flex-start" : "center", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row" }}>
          <a style={{ background: BW.ink, color: BW.chalk50, padding: "14px 24px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer" }}>Start a project →</a>
          <a style={{ background: "transparent", color: BW.chalk50, padding: "14px 24px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer", border: `1.5px solid rgba(244,236,218,0.45)` }}>Book a 30-min</a>
          <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(251,247,238,0.78)", marginLeft: isMobile ? 0 : 18 }}>· typically 2-3 day reply</span>
        </div>
      </Reveal>
    </section>
  );
}

/* Footer — ink */
function V3Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <footer style={{ background: BW.ink, color: "rgba(244,236,218,0.78)", padding: "clamp(48px, 8vw, 72px) clamp(20px, 5vw, 64px) 36px", fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr 1fr 1fr", gap: isMobile ? 32 : 48, paddingBottom: 40, borderBottom: `1px solid rgba(244,236,218,0.18)` }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
              <img src="assets/BW-lockup-color.svg?v=8" alt="Boondock Walker" style={{ height: 39 }} />
            </div>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 15, lineHeight: 1.55, color: "rgba(244,236,218,0.78)", margin: 0, maxWidth: 380 }}>
              A brand &amp; demand bureau for operators who measure work in pipeline, not applause.
            </p>
            <div style={{ marginTop: 22, display: "flex", gap: 18, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 700 }}>
              <span>41.49°N</span><span>·</span><span>81.69°W</span><span>·</span><span>Cleveland, OH</span>
            </div>
          </div>
          {[
            ["Practice", ["Brand", "Demand", "The Lab", "Field Notes"]],
            ["Bureau", ["Cleveland", "Remote", "Careers", "Press"]],
            ["Contact", ["hello@boondockwalker.com", "Book a 30-min", "Substack", "LinkedIn"]],
          ].map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk2, marginBottom: 14, fontWeight: 700 }}>{h}</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontFamily: BW.ffG, fontSize: 14, color: BW.chalk }}>
                {items.map(i => <li key={i}><a style={{ color: BW.chalk, textDecoration: "none", cursor: "pointer" }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", paddingTop: 24, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,236,218,0.55)", fontWeight: 600, flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 0 }}>
          <span>BDW · Vol XII · Est. 2015</span>
          <span style={{ fontFamily: BW.ffD, fontStyle: "italic", textTransform: "none", letterSpacing: 0, fontSize: 13, color: "rgba(244,236,218,0.7)", fontWeight: 400 }}>Walk the Walk.</span>
          <span>© Boondock Walker · All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

window.V3Cases = V3Cases;
window.V3Lab = V3Lab;
window.V3Trust = V3Trust;
window.V3CTA = V3CTA;
window.V3Footer = V3Footer;
