/* global React, BW */
/* NotesNav — sub-nav for the Field Notes umbrella.
   Two siblings under Field Notes: Blog (long-form editorial) and
   BenchMarks (daily personal). Renders a small pill-tab strip just
   below the SiteHeader on both pages.

   Props:
     current — "Blog" | "BenchMarks"  (which tab is active) */

function NotesNav({ current }) {
  const tabs = [
    { label: "Blog",       href: "field-notes.html", note: "Long-form" },
    { label: "BenchMarks", href: "benchmarks.html",  note: "Almost daily" },
  ];
  return (
    <div style={{ background: BW.chalk, borderBottom: `1px solid ${BW.ruleL}`, fontFamily: BW.ffG }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "12px clamp(20px, 5vw, 64px)", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700 }}>
          Field&nbsp;Notes /
        </span>
        <div style={{ display: "flex", gap: 6 }}>
          {tabs.map((t) => {
            const active = current === t.label;
            return (
              <a
                key={t.label}
                href={active ? undefined : t.href}
                aria-current={active ? "page" : undefined}
                style={{
                  fontFamily: BW.ffG,
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: `1px solid ${active ? BW.ink : BW.ruleL}`,
                  background: active ? BW.ink : "transparent",
                  color: active ? BW.chalk50 : BW.ink,
                  textDecoration: "none",
                  cursor: active ? "default" : "pointer",
                  transition: "background 200ms, color 200ms, border-color 200ms",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>{t.label}</span>
                <span style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.2em", opacity: active ? 0.7 : 0.55, fontWeight: 600 }}>· {t.note}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

window.NotesNav = NotesNav;
