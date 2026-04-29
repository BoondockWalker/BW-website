/* global React, BW, Reveal, MaskWords, Parallax, CountUp */
/* Case study block kit — modular, composition-driven.
   Every block:
     - is a section-level component
     - reads its props from the data file
     - wraps its content in <Reveal> primitives for scroll choreography
     - prefers white space and floating imagery over filled boxes
   Composition is data-driven via window.BW_CASE_DETAIL.blocks (array of {kind, ...}). */

const SECTION_PAD = "120px 56px";
const MAX_W = 1280;

/* =========================================================================
   HERO — quiet, centered. Eyebrow → big H1 → client logo → standfirst.
   ========================================================================= */
function CaseHero({ d }) {
  if (d.hero && d.hero.variant === "fullbleed") return <CaseHeroFullBleed d={d} />;
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, padding: "90px 56px 110px", borderBottom: `1px solid ${BW.ruleL}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <Reveal kind="rise" delay={0}>
          <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 28 }}>
            {d.hero.eyebrow || "Client Success Story"}
          </div>
        </Reveal>
        <Reveal kind="rise" delay={140}>
          <h1 style={{ fontFamily: BW.ffD, fontSize: "clamp(56px, 8vw, 120px)", fontWeight: 400, letterSpacing: "-0.035em", lineHeight: 0.95, margin: "0 0 56px", color: BW.ink, fontStyle: "italic" }}>
            {d.hero.title}
          </h1>
        </Reveal>
        {d.hero.clientLogo && (
          <Reveal kind="fadeIn" delay={420}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 56 }}>
              <img src={d.hero.clientLogo} alt={d.client} style={{ height: d.hero.clientLogoHeight || 88, maxWidth: "60%", objectFit: "contain" }} />
            </div>
          </Reveal>
        )}
        <Reveal kind="rise" delay={560}>
          <p style={{ fontFamily: BW.ffSerif, fontSize: 21, lineHeight: 1.62, color: BW.ink2, fontWeight: 400, margin: "0 auto", maxWidth: 760 }}>
            {d.hero.standfirst}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   HERO — full-bleed image variant. Editorial cover treatment:
     - viewport-tall image with multiply tint + subtle hatch
     - eyebrow + huge italic title pinned lower-left
     - standfirst column right of title
     - bottom ledger rail (industry / year / pillars / outcome) under the image
   Driven by d.hero.variant === "fullbleed" plus d.hero.image.
   ========================================================================= */
function CaseHeroFullBleed({ d }) {
  const h = d.hero;
  const ledger = [
    { k: "Client",   v: d.client },
    { k: "Industry", v: d.industry },
    { k: "Year",     v: d.year },
    { k: "Pillars",  v: (d.pillars || []).join(" · ") },
    { k: "Outcome",  v: d.outcome },
  ];
  return (
    <section style={{ background: BW.ink, color: BW.chalk50, fontFamily: BW.ffG, borderBottom: `1px solid ${BW.ink}` }}>
      {/* Image stage */}
      <div style={{ position: "relative", width: "100%", height: "min(86vh, 880px)", overflow: "hidden", background: h.imageBg || BW.ink }}>
        <Parallax amount={40} style={{ position: "absolute", inset: 0 }}>
          <img
            src={h.image}
            alt={h.imageAlt || d.client}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: h.imageFit || "cover", objectPosition: h.imagePosition || "center", display: "block" }}
          />
        </Parallax>

        {/* Editorial scrim — bottom-up gradient + slight ink wash for legibility */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,12,0.15) 0%, rgba(20,16,12,0.05) 35%, rgba(20,16,12,0.78) 100%)", pointerEvents: "none" }} />
        {/* Hatch to match site rhythm */}
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.10) 0 1.5px, transparent 1.5px 7px)", mixBlendMode: "multiply", pointerEvents: "none" }} />

        {/* Top register — eyebrow + folio */}
        <div style={{ position: "absolute", top: 28, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "center", color: BW.chalk50, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700, zIndex: 3 }}>
          <Reveal kind="fadeIn" delay={0}>
            <span style={{ color: BW.brass }}>{h.eyebrow || "Client Success Story"}</span>
          </Reveal>
          <Reveal kind="fadeIn" delay={120}>
            <span style={{ color: "rgba(244,236,218,0.72)" }}>fig. 01 · cover plate</span>
          </Reveal>
        </div>

        {/* Lower content — title left, standfirst right */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 56px 56px", display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: 64, alignItems: "end", zIndex: 3 }}>
          <Reveal kind="rise" delay={120}>
            <h1 style={{ fontFamily: BW.ffD, fontSize: "clamp(64px, 9.2vw, 156px)", fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 0.88, margin: 0, color: BW.chalk50, fontStyle: "italic", textShadow: "0 2px 30px rgba(0,0,0,0.35)" }}>
              {h.title}
            </h1>
          </Reveal>
          <Reveal kind="rise" delay={300}>
            <div style={{ paddingBottom: 18 }}>
              {h.clientLogo && (
                <img src={h.clientLogo} alt={d.client} style={{ height: h.clientLogoHeight || 38, maxWidth: 220, objectFit: "contain", marginBottom: 22, filter: h.clientLogoInvert ? "brightness(0) invert(1)" : "none", opacity: 0.95 }} />
              )}
              <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.55, color: "rgba(244,236,218,0.92)", fontWeight: 400, margin: 0, maxWidth: 460 }}>
                {h.standfirst}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Ledger rail under the image */}
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${ledger.length}, 1fr)`, borderTop: `1px solid rgba(244,236,218,0.18)` }}>
        {ledger.map((row, i) => (
          <Reveal key={row.k} kind="rise" delay={i * 80} style={{ display: "block" }}>
            <div style={{ padding: "22px 24px", borderRight: i < ledger.length - 1 ? `1px solid rgba(244,236,218,0.18)` : "none" }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 600, marginBottom: 6 }}>{row.k}</div>
              <div style={{ fontFamily: BW.ffG, fontSize: 14, fontWeight: 700, color: i === ledger.length - 1 ? BW.brass : BW.chalk50, letterSpacing: "-0.005em" }}>{row.v}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* =========================================================================
   PROSE — descriptive copy. Optional H2, optional drop cap, 1- or 2-col.
   ========================================================================= */
function ProseBlock({ block }) {
  const { eyebrow, title, body = [], columns = 1, dropCap = false, align = "left", maxWidth = 760, accent = BW.clay } = block;
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, padding: SECTION_PAD, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: MAX_W, margin: "0 auto", textAlign: align }}>
        {eyebrow && (
          <Reveal kind="rise">
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: accent, fontWeight: 700, marginBottom: 28, justifyContent: align === "center" ? "center" : "flex-start" }}>
              <span>{eyebrow}</span>
              {align !== "center" && <span style={{ width: 36, height: 1, background: accent }} />}
            </div>
          </Reveal>
        )}
        {title && (
          <Reveal kind="rise" delay={120}>
            <h2 style={{ fontFamily: BW.ffD, fontSize: "clamp(36px, 4.4vw, 64px)", fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 48px", color: BW.ink, maxWidth: align === "center" ? "none" : "22ch", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>
              {title}
            </h2>
          </Reveal>
        )}
        <Reveal kind="rise" delay={240}>
          <div style={{ columnCount: columns, columnGap: 56, fontFamily: BW.ffSerif, fontSize: 19, lineHeight: 1.7, color: BW.ink2, maxWidth: maxWidth, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0, textAlign: align }}>
            {body.map((p, i) => (
              <p key={i} style={{ margin: i === 0 ? 0 : "1.4em 0 0", breakInside: "avoid" }}>
                {i === 0 && dropCap ? (
                  <>
                    <span style={{ float: "left", fontFamily: BW.ffD, fontSize: 92, lineHeight: 0.85, fontWeight: 400, color: accent, paddingRight: 14, paddingTop: 8, marginBottom: -8 }}>
                      {p[0]}
                    </span>
                    {p.slice(1)}
                  </>
                ) : p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   SERVICES — the technical box. Quiet, factual, vertical list.
   ========================================================================= */
function ServicesBlock({ block }) {
  const { eyebrow = "Our Services", services = [], note } = block;
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, padding: "60px 56px 120px", fontFamily: BW.ffG }}>
      <div style={{ maxWidth: MAX_W, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 80, alignItems: "start" }}>
          <Reveal kind="rise">
            <div>
              <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 16, paddingBottom: 14, borderBottom: `1px solid ${BW.ruleL}` }}>
                {eyebrow}
              </div>
              {note && (
                <p style={{ fontFamily: BW.ffSerif, fontSize: 14, lineHeight: 1.55, color: BW.ink3, margin: 0, fontStyle: "italic" }}>{note}</p>
              )}
            </div>
          </Reveal>
          <Reveal kind="cascade" stagger={50} delay={120}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0 56px" }}>
              {services.map((s, i) => (
                <div key={s} style={{ padding: "18px 0", borderTop: i < 2 ? `1px solid ${BW.ruleL}` : "none", borderBottom: `1px solid ${BW.ruleL}`, fontFamily: BW.ffG, fontSize: 17, fontWeight: 500, color: BW.ink, letterSpacing: "-0.005em", display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.2em", color: "rgba(20,16,12,0.4)", fontWeight: 700, minWidth: 22 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   FULL-BLEED IMAGE — edge-to-edge with parallax + caption underneath.
   ========================================================================= */
function FullBleedImage({ block }) {
  const { src, alt, caption, height = "min(82vh, 820px)", surface = BW.chalk50, parallax = 60, fit = "cover", position = "center" } = block;
  return (
    <section style={{ background: surface, padding: "0 0 60px" }}>
      <Reveal kind="wipe" threshold={0.05}>
        <div style={{ width: "100%", height, overflow: "hidden", position: "relative", background: "#0E1726" }}>
          <Parallax amount={parallax} style={{ width: "100%", height: `calc(100% + ${parallax * 2}px)`, marginTop: -parallax }}>
            <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: fit, objectPosition: position, display: "block" }} />
          </Parallax>
        </div>
      </Reveal>
      {caption && (
        <Reveal kind="rise" delay={200}>
          <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: "18px 56px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700 }}>{caption.label || "fig."}</span>
            <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 18, color: BW.ink, fontWeight: 400, letterSpacing: "-0.005em" }}>{caption.title || caption}</span>
          </div>
        </Reveal>
      )}
    </section>
  );
}

/* =========================================================================
   FLOATING IMAGE — single image centered on chalk, generous margin.
   ========================================================================= */
function FloatingImage({ block }) {
  const { src, alt, caption, maxHeight = 580, maxWidth = 1100, surface = BW.chalk50, padding = "100px 56px" } = block;
  return (
    <section style={{ background: surface, padding, fontFamily: BW.ffG }}>
      <div style={{ maxWidth, margin: "0 auto", textAlign: "center" }}>
        <Reveal kind="wipe" threshold={0.15}>
          <img src={src} alt={alt} style={{ width: "100%", maxHeight, objectFit: "contain", display: "block", margin: "0 auto" }} />
        </Reveal>
        {caption && (
          <Reveal kind="rise" delay={300}>
            <div style={{ marginTop: 32, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.6)", fontWeight: 600 }}>
              {caption}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* =========================================================================
   IMAGE + TEXT — split: floating image one side, prose other side.
   ========================================================================= */
function ImageTextBlock({ block }) {
  const { side = "left", src, alt, eyebrow, title, body = [], surface = BW.chalk50, imageBg } = block;
  const flip = side === "right";
  return (
    <section style={{ background: surface, color: BW.ink, padding: SECTION_PAD, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: MAX_W, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <Reveal kind={flip ? "slideR" : "slideL"} threshold={0.2} style={{ order: flip ? 2 : 1 }}>
          <div style={{ background: imageBg || "transparent", padding: imageBg ? 32 : 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={src} alt={alt} style={{ width: "100%", height: "auto", maxHeight: 520, objectFit: "contain", display: "block" }} />
          </div>
        </Reveal>
        <div style={{ order: flip ? 1 : 2 }}>
          {eyebrow && (
            <Reveal kind="rise">
              <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 22 }}>{eyebrow}</div>
            </Reveal>
          )}
          {title && (
            <Reveal kind="rise" delay={120}>
              <h2 style={{ fontFamily: BW.ffD, fontSize: 48, fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.025em", lineHeight: 1.08, margin: "0 0 32px", color: BW.ink, maxWidth: "16ch" }}>
                {title}
              </h2>
            </Reveal>
          )}
          <Reveal kind="rise" delay={240}>
            <div style={{ fontFamily: BW.ffSerif, fontSize: 18, lineHeight: 1.65, color: BW.ink2, display: "flex", flexDirection: "column", gap: 18 }}>
              {body.map((p, i) => <p key={i} style={{ margin: 0 }}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   TWO-UP / THREE-UP — image grids with captions, generous gaps.
   ========================================================================= */
function MultiImageBlock({ block }) {
  const { items = [], cols = items.length, surface = BW.chalk50, gap = 40, padding = SECTION_PAD, eyebrow, title } = block;
  return (
    <section style={{ background: surface, color: BW.ink, padding, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: MAX_W, margin: "0 auto" }}>
        {(eyebrow || title) && (
          <div style={{ marginBottom: 56 }}>
            {eyebrow && (
              <Reveal kind="rise">
                <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 18 }}>{eyebrow}</div>
              </Reveal>
            )}
            {title && (
              <Reveal kind="rise" delay={120}>
                <h2 style={{ fontFamily: BW.ffD, fontSize: 56, fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: BW.ink, maxWidth: "20ch" }}>{title}</h2>
              </Reveal>
            )}
          </div>
        )}
        <Reveal kind="cascade" stagger={120}>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap }}>
            {items.map((it, i) => (
              <figure key={i} style={{ margin: 0 }}>
                <div style={{ width: "100%", overflow: "hidden", background: it.bg || BW.chalk }}>
                  <img src={it.src} alt={it.alt || ""} style={{ width: "100%", height: it.height || "auto", objectFit: it.fit || "cover", display: "block" }} />
                </div>
                {it.caption && (
                  <figcaption style={{ marginTop: 16, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink2, fontWeight: 600 }}>{it.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   SLIDER — horizontal swipe carousel for campaign series.
   Uses scroll-snap; arrow buttons for desktop.
   ========================================================================= */
function SliderBlock({ block }) {
  const { items = [], eyebrow, title, surface = BW.chalk50, padding = SECTION_PAD, slideHeight = 620 } = block;
  const trackRef = React.useRef(null);
  const [idx, setIdx] = React.useState(0);
  const scrollTo = (n) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector(`[data-slide="${n}"]`);
    if (slide) el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  };
  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const slides = [...el.querySelectorAll("[data-slide]")];
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0, bestD = Infinity;
    slides.forEach((s, i) => {
      const c = s.offsetLeft + s.offsetWidth / 2;
      const d = Math.abs(c - center);
      if (d < bestD) { bestD = d; best = i; }
    });
    setIdx(best);
  };
  return (
    <section style={{ background: surface, color: BW.ink, padding, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: MAX_W, margin: "0 auto 40px", padding: "0 0", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          {eyebrow && (
            <Reveal kind="rise">
              <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 18 }}>{eyebrow}</div>
            </Reveal>
          )}
          {title && (
            <Reveal kind="rise" delay={120}>
              <h2 style={{ fontFamily: BW.ffD, fontSize: 56, fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: BW.ink, maxWidth: "22ch" }}>{title}</h2>
            </Reveal>
          )}
        </div>
        <Reveal kind="fadeIn" delay={300}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", color: "rgba(20,16,12,0.55)", fontWeight: 700, marginRight: 10 }}>
              {String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button onClick={() => scrollTo(Math.max(0, idx - 1))} aria-label="Previous" style={sliderArrow(idx === 0)}>←</button>
            <button onClick={() => scrollTo(Math.min(items.length - 1, idx + 1))} aria-label="Next" style={sliderArrow(idx === items.length - 1)}>→</button>
          </div>
        </Reveal>
      </div>
      <Reveal kind="wipeUp" threshold={0.1}>
        <div
          ref={trackRef}
          onScroll={onScroll}
          style={{
            display: "flex",
            gap: 28,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            padding: "8px 56px 32px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`section [data-slider-track]::-webkit-scrollbar{display:none}`}</style>
          {items.map((it, i) => (
            <figure
              key={i}
              data-slide={i}
              style={{
                margin: 0,
                flex: `0 0 ${it.width || 480}px`,
                scrollSnapAlign: "center",
                transition: "transform .6s cubic-bezier(.22,.61,.36,1), opacity .6s",
                opacity: i === idx ? 1 : 0.55,
                transform: i === idx ? "scale(1)" : "scale(0.94)",
              }}
            >
              <div style={{ width: "100%", height: slideHeight, overflow: "hidden", background: it.bg || "#E8EEF2" }}>
                <img src={it.src} alt={it.alt || ""} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              {it.caption && (
                <figcaption style={{ marginTop: 16, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink2, fontWeight: 600 }}>{it.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
function sliderArrow(disabled) {
  return {
    width: 44, height: 44, borderRadius: "50%",
    border: `1px solid ${BW.ink}`, background: "transparent",
    color: BW.ink, cursor: disabled ? "default" : "pointer",
    fontFamily: BW.ffG, fontSize: 16, opacity: disabled ? 0.3 : 1,
    transition: "all .24s cubic-bezier(.22,.61,.36,1)",
    display: "flex", alignItems: "center", justifyContent: "center",
  };
}

/* =========================================================================
   STAT CALLOUT — single large stat. Earned, rare.
   ========================================================================= */
function StatCalloutBlock({ block }) {
  const { eyebrow, value, prefix = "", suffix = "", numeric, label, body, surface = BW.chalk50, accent = BW.clay } = block;
  return (
    <section style={{ background: surface, color: BW.ink, padding: SECTION_PAD, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: MAX_W, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "center" }}>
        <Reveal kind="rise">
          <div>
            {eyebrow && (
              <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: accent, fontWeight: 700, marginBottom: 28 }}>{eyebrow}</div>
            )}
            <div style={{ fontFamily: BW.ffG, fontWeight: 700, fontSize: "clamp(96px, 14vw, 220px)", letterSpacing: "-0.05em", lineHeight: 0.85, color: accent, marginBottom: 18 }}>
              {numeric != null ? (
                <CountUp to={numeric} prefix={prefix} suffix={suffix} duration={1600} />
              ) : (
                value
              )}
            </div>
            {label && (
              <div style={{ fontFamily: BW.ffM, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, fontWeight: 700, maxWidth: "26ch", lineHeight: 1.5 }}>
                {label}
              </div>
            )}
          </div>
        </Reveal>
        {body && (
          <Reveal kind="rise" delay={200}>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 19, lineHeight: 1.65, color: BW.ink2, margin: 0, maxWidth: "36ch" }}>{body}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* =========================================================================
   STAT ROW — small horizontal row of secondary metrics. Placeholders OK.
   ========================================================================= */
function StatRowBlock({ block }) {
  const { eyebrow, title, items = [], surface = BW.chalk50, accent = BW.clay } = block;
  return (
    <section style={{ background: surface, color: BW.ink, padding: SECTION_PAD, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: MAX_W, margin: "0 auto" }}>
        {(eyebrow || title) && (
          <div style={{ marginBottom: 56 }}>
            {eyebrow && (
              <Reveal kind="rise">
                <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: accent, fontWeight: 700, marginBottom: 18 }}>{eyebrow}</div>
              </Reveal>
            )}
            {title && (
              <Reveal kind="rise" delay={120}>
                <h2 style={{ fontFamily: BW.ffD, fontSize: 56, fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: BW.ink, maxWidth: "22ch" }}>{title}</h2>
              </Reveal>
            )}
          </div>
        )}
        <Reveal kind="cascade" stagger={120}>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, borderTop: `1px solid ${BW.ink}`, borderBottom: `1px solid ${BW.ink}` }}>
            {items.map((s, i, arr) => (
              <div key={i} style={{ padding: "32px 24px", borderRight: i < arr.length - 1 ? `1px solid ${BW.ruleL}` : "none", display: "flex", flexDirection: "column", gap: 12, minHeight: 200 }}>
                <div style={{ fontFamily: BW.ffG, fontWeight: 700, fontSize: s.placeholder ? 36 : 48, letterSpacing: "-0.025em", color: s.placeholder ? "rgba(20,16,12,0.32)" : (s.color || accent), lineHeight: 0.95, fontStyle: s.placeholder ? "italic" : "normal", fontFamily: s.placeholder ? BW.ffD : BW.ffG }}>
                  {s.placeholder ? "—" : (s.numeric != null ? <CountUp to={s.numeric} prefix={s.prefix || ""} suffix={s.suffix || ""} duration={1400} /> : s.v)}
                </div>
                <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, fontWeight: 700, lineHeight: 1.5, marginTop: "auto" }}>{s.k}</div>
                {s.placeholder && (
                  <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.4)", fontWeight: 600 }}>Awaiting metric</div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   PULLQUOTE — large italic on chalk with editorial rules above & below.
   ========================================================================= */
function PullquoteBlock({ block }) {
  const { quote, by, role, surface = BW.chalk50, dark = false } = block;
  const fg = dark ? BW.chalk50 : BW.ink;
  const fgMuted = dark ? "rgba(251,247,238,0.7)" : BW.ink2;
  const ruleColor = dark ? BW.ruleD : BW.ruleL;
  return (
    <section style={{ background: surface, color: fg, padding: "140px 56px", fontFamily: BW.ffG, position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal kind="fadeIn">
          <div style={{ height: 1, background: ruleColor, marginBottom: 56 }} />
        </Reveal>
        <Reveal kind="rise" delay={150}>
          <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 200, lineHeight: 0.5, color: BW.clay, fontWeight: 400, marginBottom: 8, opacity: 0.85 }}>"</div>
        </Reveal>
        <Reveal kind="wipeUp" delay={300} threshold={0.15}>
          <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.22, fontWeight: 400, letterSpacing: "-0.02em", color: fg, margin: "0 0 56px", maxWidth: "32ch" }}>
            {quote}
          </p>
        </Reveal>
        <Reveal kind="rise" delay={500}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 28, borderTop: `1px solid ${ruleColor}` }}>
            {by && (
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: BW.clay, color: BW.chalk50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BW.ffG, fontSize: 14, fontWeight: 700, letterSpacing: "0.05em" }}>
                {by.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
            )}
            <div>
              {by && <div style={{ fontFamily: BW.ffG, fontSize: 16, fontWeight: 700, color: fg, letterSpacing: "-0.005em" }}>{by}</div>}
              {role && <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: fgMuted, fontWeight: 600, marginTop: 4 }}>{role}</div>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   ADJACENT — prev / next case tiles + back-to-archive
   ========================================================================= */
function CaseAdjacent({ prev, next }) {
  const Tile = ({ c, label, side }) => {
    if (!c) return <div />;
    return (
      <Reveal kind={side === "left" ? "slideL" : "slideR"} threshold={0.2}>
        <a href={`case.html?id=${c.slug}`} style={{ position: "relative", padding: "60px 48px", background: c.tone, color: BW.chalk50, textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 320, overflow: "hidden", borderRight: side === "left" ? `1px solid rgba(244,236,218,0.18)` : "none" }}>
          <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(20,16,12,0.16) 0 2px, transparent 2px 9px)", mixBlendMode: "multiply" }} />
          <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.chalk2, fontWeight: 700 }}>
            <span>{label}</span>
            <span>Specimen №{c.no}</span>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ fontFamily: BW.ffG, fontSize: 18, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: BW.chalk50, marginBottom: 10 }}>{c.client}</div>
            <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 28, lineHeight: 1.15, margin: "0 0 24px", color: BW.chalk50, fontWeight: 400, letterSpacing: "-0.015em", maxWidth: "22ch" }}>"{c.pull}"</p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, paddingBottom: 4, borderBottom: `1.5px solid ${BW.brass}` }}>
              {side === "left" ? "← Read previous" : "Read next →"}
            </div>
          </div>
        </a>
      </Reveal>
    );
  };
  return (
    <section style={{ background: BW.ink, color: BW.chalk50, fontFamily: BW.ffG, borderTop: `1px solid ${BW.ruleL}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "44px 56px 0" }}>
        <Reveal kind="rise">
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>
            <span>Adjacent specimens</span>
            <span style={{ width: 28, height: 1, background: BW.brass }} />
            <span>Keep walking</span>
          </div>
        </Reveal>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: 44, borderTop: `1px solid rgba(244,236,218,0.18)` }}>
        <Tile c={prev} label="Previous" side="left" />
        <Tile c={next} label="Next up" side="right" />
      </div>
      <div style={{ background: BW.ink, padding: "32px 56px", textAlign: "center", borderTop: `1px solid rgba(244,236,218,0.18)` }}>
        <a href="work.html" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk50, fontWeight: 700, textDecoration: "none", padding: "12px 22px", border: `1.5px solid rgba(244,236,218,0.45)`, borderRadius: 999 }}>
          ← Back to the archive
        </a>
      </div>
    </section>
  );
}

/* =========================================================================
   BLOCK ROUTER — renders the right component based on `kind`.
   ========================================================================= */
const CASE_BLOCKS = {
  prose:        ProseBlock,
  services:     ServicesBlock,
  fullbleed:    FullBleedImage,
  floating:     FloatingImage,
  imagetext:    ImageTextBlock,
  multi:        MultiImageBlock,
  slider:       SliderBlock,
  stat:         StatCalloutBlock,
  statrow:      StatRowBlock,
  pullquote:    PullquoteBlock,
};

function CaseBlocks({ blocks }) {
  return (
    <>
      {blocks.map((b, i) => {
        const Comp = CASE_BLOCKS[b.kind];
        if (!Comp) return null;
        return <Comp key={i} block={b} />;
      })}
    </>
  );
}

Object.assign(window, {
  CaseHero, CaseHeroFullBleed, ProseBlock, ServicesBlock, FullBleedImage, FloatingImage,
  ImageTextBlock, MultiImageBlock, SliderBlock, StatCalloutBlock, StatRowBlock,
  PullquoteBlock, CaseAdjacent, CaseBlocks,
});
