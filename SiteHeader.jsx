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
     compact     — slim variant w/o the top "vol XII" rail. Default false. */

const SITE_NAV_ITEMS = [
  { label: "Work",        href: "work.html" },
  { label: "Capabilities", href: "index.html#capabilities" },
  { label: "The Lab",      href: "index.html#the-lab" },
  { label: "Field Notes",  href: "index.html#field-notes" },
  { label: "About",        href: "index.html#about" },
];

function SiteHeader({ current, breadcrumb, tone = "light", compact = false }) {
  // tone === "light" → text on light/clay surfaces (chalk text on hero, dark text on chalk).
  // tone === "dark"  → text on dark/ink surfaces (chalk text).
  // The header is transparent and inherits the underlying section/page background.
  const isDark = tone === "dark";
  const bodyText = isDark ? BW.chalk50 : BW.ink;
  const subText  = isDark ? BW.chalk2 : "rgba(20,16,12,0.6)";
  const ruleCol  = isDark ? "rgba(244,236,218,0.18)" : "rgba(20,16,12,0.12)";
  return (
    <header style={{ position: "relative", background: "transparent", color: bodyText, fontFamily: BW.ffG, overflow: "visible" }}>
      {/* hatch overlay — multiplies against whatever section/page bg shows through */}
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.06) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none", zIndex: 1 }} />

      {/* Top rail — vol / booking */}
      {!compact && (
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", padding: "10px 28px", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: subText, fontWeight: 600, borderBottom: `1px solid ${ruleCol}`, zIndex: 6 }}>
          <span>BDW · Vol XII · No 04</span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 7, height: 7, background: BW.brass, borderRadius: "50%", boxShadow: "0 0 0 4px rgba(200,150,43,0.25)" }} />
            Booking Q3 · Cleveland 41.49°N
          </span>
        </div>
      )}

      {/* Floating dark pill nav */}
      <div style={{ position: "relative", padding: "22px 28px 0", zIndex: 6 }}>
        <div style={{ padding: "10px 14px 10px 18px", borderRadius: 999, background: "rgba(20,16,12,0.78)", backdropFilter: "saturate(140%) blur(14px)", border: `1px solid rgba(244,236,218,0.18)`, display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 14px 32px -16px rgba(0,0,0,0.55)" }}>
          <a href="index.html" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src="assets/BW-lockup-color.svg?v=8" alt="Boondock Walker" style={{ height: 39 }} />
          </a>
          <div style={{ display: "flex", gap: 26, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, color: BW.chalk50 }}>
            {SITE_NAV_ITEMS.map((item) => {
              const active = current === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  style={{ color: active ? BW.brass : BW.chalk50, textDecoration: "none", cursor: "pointer" }}
                >{item.label}</a>
              );
            })}
          </div>
          <a href="index.html#contact" style={{ background: BW.brass, color: BW.ink, padding: "9px 16px", borderRadius: 999, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer" }}>Start →</a>
        </div>
      </div>

      {/* Optional breadcrumb rail beneath the pill */}
      {breadcrumb && (
        <div style={{ position: "relative", padding: "20px 36px 22px", zIndex: 5, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: subText, fontWeight: 600 }}>
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
  );
}

window.SiteHeader = SiteHeader;
window.SITE_NAV_ITEMS = SITE_NAV_ITEMS;
