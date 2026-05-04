/* global React, BW */
/* SiteHeader — single source of truth for the site nav.
   Used on Homepage, Work archive, Case detail. One change here = changes everywhere.

   The header is TRANSPARENT — it inherits the page/section background behind it.
   Each page is responsible for the surface; SiteHeader just paints UI on top.

   Props:
     current     — which nav item is "current" (highlighted brass). e.g. "Work", or null for Home.
     breadcrumb  — optional sub-rail config: { label, parent: {href,label}, badge }
                   e.g. { label: "O'Neil Digital Solutions", parent: {href:"work.html", label:"Work"}, badge: "Specimen №01" }
     tone        — "light" (default) for clay/chalk surfaces, "dark" for ink surfaces.
                   Affects the top rail rule and text only — the dark pill stays dark on both.
     compact     — slim variant w/o the top "vol XII" rail. Default false. Compact
                   mode is for editorial/overlay heros (case detail pages) where the
                   header sits transparently on top of a full-bleed image.
     sticky      — when true, header uses position:sticky;top:0 so the nav rides the
                   viewport as the page scrolls. Default false.
                   When sticky AND not compact (landing pages), the header paints
                   chalk + hash across the TOP portion only — down to the pill's
                   vertical midline — leaving the bottom half transparent so the
                   pill appears to float over scrolling content.
                   When sticky AND compact (case detail pages), the header stays
                   fully transparent so the editorial hero shows through.
     bisect      — explicit override for the chalk-fill-above-pill-midline treatment.
                   Defaults to (sticky && !compact). Set bisect=false on landing
                   pages whose hero uses a strong color (homepage clay, etc.) — the
                   header stays fully transparent across its full height so the hero
                   color reads continuously without a chalk seam at the pill midline. */

const SITE_NAV_ITEMS = [
  { label: "Work",        href: "work.html" },
  { label: "Capabilities", href: "capabilities.html" },
  { label: "The Lab",      href: "index.html#the-lab" },
  { label: "Field Notes",  href: "field-notes.html" },
  { label: "About",        href: "about.html" },
];

function SiteHeader({ current, breadcrumb, tone = "light", compact = false, sticky = false, bisect: bisectProp }) {
  // tone === "light" → text on light/clay surfaces (chalk text on hero, dark text on chalk).
  // tone === "dark"  → text on dark/ink surfaces (chalk text).
  // The header is transparent and inherits the underlying section/page background,
  // unless `sticky` is set, in which case it paints a solid chalk bg so it can
  // ride the viewport without scrolling content showing through.
  const isDark = tone === "dark";
  const bodyText = isDark ? BW.chalk50 : BW.ink;
  const subText  = isDark ? BW.chalk2 : "rgba(20,16,12,0.6)";
  const ruleCol  = isDark ? "rgba(244,236,218,0.18)" : "rgba(20,16,12,0.12)";
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isNarrow = useMediaQuery("(max-width: 560px)");
  const heroBandHeight = isNarrow ? 25 : 30;  // half pill height — keeps the bisect aligned at the pill's vertical midline
  // Bisect treatment (chalk fill above pill midline) defaults to non-compact
  // sticky headers. Pages with a strong-colored hero (homepage clay, etc.) can
  // pass bisect=false so the header stays fully transparent and the hero color
  // reads continuously through the full header height.
  const bisect = bisectProp !== undefined ? bisectProp : (sticky && !compact);
  const [navOpen, setNavOpen] = React.useState(false);
  const navRef = React.useRef(null);
  // When sticky + non-compact, we want the top rail to scroll naturally off the
  // top of the viewport before the pill pins. We measure the top rail height and
  // set the sticky offset to its negative — so the header rides up exactly that
  // far before sticking.
  const topRailRef = React.useRef(null);
  const [topRailH, setTopRailH] = React.useState(0);
  React.useEffect(() => {
    if (!sticky || compact) { setTopRailH(0); return; }
    const measure = () => {
      if (topRailRef.current) setTopRailH(topRailRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [sticky, compact]);

  // Close on Esc or outside-click
  React.useEffect(() => {
    if (!navOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setNavOpen(false); };
    const onClick = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setNavOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("touchstart", onClick, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("touchstart", onClick);
    };
  }, [navOpen]);

  return (
    <>
    <style>{`
      .bdw-nav-link:focus-visible,
      .bdw-nav-toggle:focus-visible,
      .bdw-nav-cta:focus-visible {
        outline: 2px solid ${BW.brass};
        outline-offset: 3px;
      }
      @keyframes bdwNavDrop {
        from { opacity: 0; transform: translateY(-6px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .bdw-nav-drop { animation: bdwNavDrop 160ms ease-out both; }
    `}</style>
    <header style={{
      position: sticky ? "sticky" : "relative",
      top: sticky ? -topRailH : undefined,
      zIndex: sticky ? 50 : undefined,
      background: "transparent",
      color: bodyText,
      fontFamily: BW.ffG,
      overflow: "visible",
    }}>
      {/* When the bisect treatment is on (sticky + not compact): paint a chalk
          fill across the TOP of the header, ending at the pill's vertical midline.
          Below that midline the header stays transparent — so as the page scrolls,
          the pill nav floats over whatever's underneath. Compact case-detail
          headers stay fully transparent. */}
      {bisect && (
        <div aria-hidden="true" style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          bottom: heroBandHeight,
          background: BW.chalk,
          zIndex: 0,
          pointerEvents: "none",
        }} />
      )}

      {/* hatch overlay — multiplies against the page/scroll bg behind. When
          bisecting, end the hatch at the bisect line so it doesn't render against
          arbitrary scrolling content below the pill. */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        bottom: bisect ? heroBandHeight : 0,
        background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.06) 0 1.5px, transparent 1.5px 6px)",
        mixBlendMode: "multiply",
        pointerEvents: "none",
        zIndex: 1,
      }} />

      {/* Top rail — vol / booking */}
      {!compact && (
        <div ref={topRailRef} style={{ position: "relative", display: "flex", justifyContent: "space-between", padding: "10px clamp(16px, 4vw, 28px)", fontFamily: BW.ffM, fontSize: isNarrow ? 9 : 10, letterSpacing: "0.22em", textTransform: "uppercase", color: subText, fontWeight: 600, borderBottom: `1px solid ${ruleCol}`, zIndex: 6, gap: 12, flexWrap: "wrap" }}>
          <span>BDW · Vol XII · No 04</span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 7, height: 7, background: BW.brass, borderRadius: "50%", boxShadow: "0 0 0 4px rgba(200,150,43,0.25)" }} />
            {isNarrow ? "Booking Q3" : "Booking Q3 · Cleveland 41.49°N"}
          </span>
        </div>
      )}

      {/* Floating dark pill nav */}
      <div ref={navRef} style={{ position: "relative", padding: "22px clamp(16px, 4vw, 28px) 0", zIndex: 6 }}>
        <div style={{ padding: "10px 14px 10px 18px", borderRadius: 999, background: "rgba(20,16,12,0.78)", backdropFilter: "saturate(140%) blur(14px)", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 14px 32px -16px rgba(0,0,0,0.55)", gap: 12 }}>
          <a href="index.html" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <img src="assets/BW-lockup-color.svg?v=8" alt="Boondock Walker" style={{ height: isNarrow ? 30 : 39 }} />
          </a>
          {!isMobile && (
            <div style={{ display: "flex", gap: 26, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, color: BW.chalk50, flexWrap: "wrap", justifyContent: "center" }}>
              {SITE_NAV_ITEMS.map((item) => {
                const active = current === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="bdw-nav-link"
                    style={{ color: active ? BW.brass : BW.chalk50, textDecoration: "none", cursor: "pointer", borderRadius: 4 }}
                  >{item.label}</a>
                );
              })}
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            {!isNarrow && <a href="index.html#contact" className="bdw-nav-cta" style={{ background: BW.brass, color: BW.ink, padding: "9px 16px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer" }}>Start →</a>}
            {isMobile && (
              <button onClick={() => setNavOpen(o => !o)} aria-label="Toggle navigation" aria-expanded={navOpen} className="bdw-nav-toggle" style={{ background: "transparent", border: `1px solid rgba(244,236,218,0.35)`, color: BW.chalk50, padding: "10px 16px", minHeight: 44, minWidth: 64, borderRadius: 999, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>{navOpen ? "Close" : "Menu"}</button>
            )}
          </div>
        </div>
        {isMobile && navOpen && (
          <div className="bdw-nav-drop" style={{ marginTop: 12, padding: "6px 18px 14px", borderRadius: 16, background: "rgba(20,16,12,0.94)", backdropFilter: "saturate(140%) blur(14px)", border: `1px solid rgba(244,236,218,0.18)`, display: "flex", flexDirection: "column", fontFamily: BW.ffG, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>
            {SITE_NAV_ITEMS.map((item, i) => {
              const active = current === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="bdw-nav-link"
                  onClick={() => setNavOpen(false)}
                  style={{ color: active ? BW.brass : BW.chalk50, textDecoration: "none", cursor: "pointer", padding: "14px 4px", borderTop: i === 0 ? "none" : `1px solid rgba(244,236,218,0.10)`, minHeight: 44, display: "flex", alignItems: "center", borderRadius: 4 }}
                >{item.label}</a>
              );
            })}
            <a href="index.html#contact" className="bdw-nav-cta" onClick={() => setNavOpen(false)} style={{ marginTop: 12, background: BW.brass, color: BW.ink, padding: "14px 16px", borderRadius: 999, fontSize: 12, fontWeight: 700, textDecoration: "none", cursor: "pointer", textAlign: "center", letterSpacing: "0.18em", textTransform: "uppercase" }}>Start a project →</a>
          </div>
        )}
      </div>

      {/* Optional breadcrumb rail beneath the pill */}
      {breadcrumb && (
        <div style={{ position: "relative", padding: "20px clamp(16px, 4vw, 36px) 22px", zIndex: 5, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: subText, fontWeight: 600 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="index.html" style={{ color: subText, textDecoration: "none" }}>Boondock Walker</a>
            {breadcrumb.parent && (
              <>
                <span style={{ opacity: 0.5 }}>/</span>
                <a href={breadcrumb.parent.href} style={{ color: subText, textDecoration: "none" }}>{breadcrumb.parent.label}</a>
              </>
            )}
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: bodyText }}>{breadcrumb.label}</span>
          </span>
          {breadcrumb.badge && (
            <span style={{ color: BW.brass }}>{breadcrumb.badge}</span>
          )}
        </div>
      )}
    </header>
    </>
  );
}

window.SiteHeader = SiteHeader;
window.SITE_NAV_ITEMS = SITE_NAV_ITEMS;
