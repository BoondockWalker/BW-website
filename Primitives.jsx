/* global React */
/* Boondock Walker v2 — shared primitives */

const BW = {
  ink:     "#14100C",
  ink2:    "rgba(20,16,12,0.72)",
  ink3:    "rgba(20,16,12,0.50)",
  chalk:   "#F4ECDA",
  chalk50: "#FBF7EE",
  chalk2:  "rgba(244,236,218,0.78)",
  chalk3:  "rgba(244,236,218,0.55)",
  ruleD:   "rgba(244,236,218,0.16)",
  ruleL:   "rgba(20,16,12,0.18)",
  clay:    "#C44A2A",
  clay300: "#E8896A",
  clay700: "#7A2810",
  plum:    "#5E2638",
  forest:  "#2E4626",
  brass:   "#C8962B",
  sky:     "#3F6976",
  ffG:     "'Space Grotesk', 'Inter', system-ui, sans-serif",
  ffD:     "'Fraunces', Georgia, serif",
  ffS:     "'Inter', system-ui, sans-serif",
  ffM:     "'JetBrains Mono', ui-monospace, monospace",
  ffH:     "'Mynerve', 'Caveat', cursive",
  ffSerif: "'Copernicus', Georgia, serif",
};

function Eyebrow({ children, color, dot = true, end, light }) {
  const c = color || BW.clay;
  const text = light ? BW.chalk : BW.ink;
  const rule = light ? BW.ruleD : BW.ruleL;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {dot && <span style={{ width: 8, height: 8, background: c, borderRadius: "50%" }} />}
      <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, color: text }}>{children}</span>
      <span style={{ flex: 1, height: 1, background: rule }} />
      {end && <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: c, fontWeight: 700 }}>{end}</span>}
    </div>
  );
}

function Btn({ kind = "clay", children, sm, onClick, light, style }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 10,
    fontFamily: BW.ffG, fontSize: sm ? 11 : 12, letterSpacing: "0.18em",
    textTransform: "uppercase", fontWeight: 600,
    padding: sm ? "10px 16px" : "13px 22px",
    borderRadius: 999, cursor: "pointer", border: "1.5px solid transparent",
    textDecoration: "none", transition: "all .24s cubic-bezier(.2,.7,.2,1)",
    ...style,
  };
  const variants = {
    clay:    { background: BW.clay, color: BW.chalk50 },
    ink:     { background: BW.ink, color: BW.chalk50 },
    ghostD:  { background: "transparent", color: BW.chalk, borderColor: BW.ruleD },
    ghostL:  { background: "transparent", color: BW.ink, borderColor: BW.ruleL },
    brass:   { background: BW.brass, color: BW.ink },
  };
  return <a onClick={onClick} style={{ ...base, ...variants[kind] }}>{children}</a>;
}

function Tag({ children, color, light }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
      padding: "4px 9px", border: `1px solid ${color || BW.clay}`,
      borderRadius: 3, fontWeight: 500, color: color || BW.clay,
    }}>{children}</span>
  );
}

function Italic({ children, color }) {
  return <em style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, textTransform: "lowercase", color: color || BW.clay, letterSpacing: "-0.02em" }}>{children}</em>;
}

function useMediaQuery(query) {
  const get = () => typeof window !== "undefined" && window.matchMedia(query).matches;
  const [match, setMatch] = React.useState(get);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatch(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, [query]);
  return match;
}

Object.assign(window, { BW, Eyebrow, Btn, Tag, Italic, useMediaQuery });
