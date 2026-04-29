/* global React, BW */
/* §06 — Brand Triage. Patient-intake form from DS1.
   Left: chalk symptom checklist. Right: ink chart, fills as symptoms get checked. */

function V3Triage() {
  const symptoms = [
    { id: "BR-01", text: "Can't articulate what we actually do", axis: "Positioning",     verdict: "REBUILD" },
    { id: "BR-02", text: "Name or identity is holding us back", axis: "Identity",         verdict: "TREAT"   },
    { id: "BR-03", text: "Sales deck and website tell two stories", axis: "Narrative",    verdict: "TREAT"   },
    { id: "BR-04", text: "We sound like every competitor", axis: "Differentiation",       verdict: "REBUILD" },
    { id: "DM-01", text: "Pipeline is flat or unpredictable", axis: "Demand",             verdict: "TREAT"   },
    { id: "DM-02", text: "Leads come in, none of them close", axis: "Funnel",             verdict: "REBUILD" },
    { id: "DM-03", text: "Nurture is a graveyard, not a system",  axis: "Lifecycle",       verdict: "REBUILD" },
    { id: "ST-01", text: "We publish, but nothing compounds", axis: "Content",            verdict: "WATCH"   },
    { id: "ST-02", text: "We're in a category buyers don't search", axis: "Category",     verdict: "REBUILD" },
    { id: "OR-01", text: "Our team can't sell the brand back to us", axis: "Internal",    verdict: "TREAT"   },
  ];

  const [selected, setSelected] = React.useState(new Set());

  const toggle = (id) => {
    setSelected((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
  };

  const VERDICT_COLOR = { WATCH: BW.forest, TREAT: BW.brass, REBUILD: BW.clay };
  const VERDICT_NOTE = {
    WATCH:   "monitor — no urgent intervention",
    TREAT:   "targeted work, weeks not quarters",
    REBUILD: "foundation cracked — start over",
  };

  // chart data — only show rows for verdicts present in the selection
  const presentVerdicts = ["WATCH", "TREAT", "REBUILD"].filter((v) =>
    [...selected].some((id) => symptoms.find((s) => s.id === id)?.verdict === v)
  );

  return (
    <section id="triage" style={{ background: BW.chalk50, color: BW.ink, padding: "100px 64px", borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.04) 0 1px, transparent 1px 5px)", mixBlendMode: "multiply", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
        {/* Eyebrow */}
        <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 28 }}>
          Form 04-T · Patient intake
        </div>

        {/* Headline + intro side-by-side */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "start", marginBottom: 44 }}>
          <h2 style={{ fontFamily: BW.ffD, fontSize: 84, fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.96, margin: 0, color: BW.ink, fontStyle: "italic" }}>
            What's actually <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>wrong</em> with the brand?
          </h2>
          <div>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.55, margin: "0 0 18px", color: BW.ink2 }}>
              Most founders feel the symptom long before they can name it. <em style={{ fontFamily: BW.ffD, color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>Brand Triage</em> is a two-minute intake we built to put a clinical name on the discomfort — and tell you whether to watch it, treat it, or rebuild.
            </p>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 14, lineHeight: 1.5, margin: 0, color: "rgba(20,16,12,0.65)" }}>
              Try a preliminary read below. Tap the symptoms you recognize — the chart sketches itself in real time. The full tool produces a personalized PDF.
            </p>
          </div>
        </div>

        {/* Tool */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: `1.5px solid ${BW.ink}`, boxShadow: "0 30px 60px -28px rgba(20,16,12,0.25)" }}>
          {/* LEFT — checklist */}
          <div style={{ background: BW.chalk50, borderRight: `1.5px solid ${BW.ink}`, display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "12px 22px", borderBottom: `1px solid ${BW.ruleM}`, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, fontWeight: 700 }}>
              <span>§ Symptom checklist</span>
              <span>{String(selected.size).padStart(2, "0")} / 10 selected</span>
            </div>

            <div style={{ flex: 1 }}>
              {symptoms.map((s) => {
                const on = selected.has(s.id);
                return (
                  <button key={s.id} onClick={() => toggle(s.id)} style={{ width: "100%", display: "grid", gridTemplateColumns: "auto 56px 1fr auto", gap: 16, alignItems: "center", padding: "14px 22px", borderBottom: `1px solid ${BW.ruleM}`, background: on ? "rgba(196,74,42,0.08)" : "transparent", border: "none", borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: BW.ruleM, cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
                    <span style={{ width: 16, height: 16, border: `1.5px solid ${BW.ink}`, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", background: on ? BW.ink : "transparent", flexShrink: 0 }}>
                      {on && <span style={{ color: BW.chalk50, fontSize: 11, lineHeight: 1, fontWeight: 700 }}>✓</span>}
                    </span>
                    <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.18em", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>{s.id}</span>
                    <span style={{ fontFamily: BW.ffSerif, fontSize: 16, color: BW.ink, lineHeight: 1.35 }}>{s.text}</span>
                    <span style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>{s.axis}</span>
                  </button>
                );
              })}
            </div>

            <div style={{ padding: "14px 22px", fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.5)", fontWeight: 600 }}>
              Multi-select · no data leaves the page
            </div>
          </div>

          {/* RIGHT — preliminary chart on ink */}
          <div style={{ background: BW.ink, color: BW.chalk, display: "flex", flexDirection: "column", position: "relative", minHeight: 580 }}>
            {/* faint grid */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${BW.chalk} 1px, transparent 1px), linear-gradient(90deg, ${BW.chalk} 1px, transparent 1px)`, backgroundSize: "40px 40px", opacity: 0.04, pointerEvents: "none" }} />

            <div style={{ position: "relative", padding: "12px 22px", borderBottom: `1px solid rgba(244,236,218,0.18)`, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk, fontWeight: 700 }}>
              <span>§ Preliminary chart</span>
              <span style={{ display: "flex", alignItems: "center", gap: 8, color: selected.size ? BW.brass : "rgba(244,236,218,0.55)" }}>
                <span style={{ width: 7, height: 7, background: selected.size ? BW.brass : "rgba(244,236,218,0.4)", borderRadius: "50%" }} />
                {selected.size ? "drafting" : "awaiting"}
              </span>
            </div>

            {/* Body */}
            {selected.size === 0 ? (
              <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 32px", gap: 28 }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.brass, fontWeight: 600 }}>← Select a symptom to begin</div>
                <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 30, lineHeight: 1.18, color: "rgba(244,236,218,0.78)", margin: 0, fontWeight: 400, letterSpacing: "-0.02em", maxWidth: 420 }}>
                  The chart writes itself once the patient speaks up.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 18px", fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.04em", color: "rgba(244,236,218,0.7)", maxWidth: 420 }}>
                  <span style={{ color: BW.forest, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Watch</span>
                  <span style={{ fontFamily: BW.ffSerif, fontSize: 13, fontStyle: "italic" }}>monitor — no urgent intervention</span>
                  <span style={{ color: BW.brass,  fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Treat</span>
                  <span style={{ fontFamily: BW.ffSerif, fontSize: 13, fontStyle: "italic" }}>targeted work, weeks not quarters</span>
                  <span style={{ color: BW.clay,   fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Rebuild</span>
                  <span style={{ fontFamily: BW.ffSerif, fontSize: 13, fontStyle: "italic" }}>foundation cracked — start over</span>
                </div>
              </div>
            ) : (
              <div style={{ position: "relative", flex: 1, padding: "26px 28px", display: "flex", flexDirection: "column", gap: 18 }}>
                {/* selected chips */}
                <div>
                  <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,236,218,0.55)", fontWeight: 600, marginBottom: 10 }}>Selected symptoms</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {[...selected].map((id) => (
                      <span key={id} style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", padding: "4px 8px", border: `1px solid rgba(244,236,218,0.32)`, color: BW.chalk, borderRadius: 3, fontWeight: 600 }}>{id}</span>
                    ))}
                  </div>
                </div>

                {/* triaged rows */}
                <div style={{ borderTop: `1px solid rgba(244,236,218,0.18)`, paddingTop: 18, display: "flex", flexDirection: "column", gap: 16 }}>
                  {presentVerdicts.map((v) => {
                    const matches = symptoms.filter((s) => s.verdict === v && selected.has(s.id));
                    return (
                      <div key={v} style={{ display: "grid", gridTemplateColumns: "92px 1fr", gap: 16, alignItems: "start" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: VERDICT_COLOR[v], fontWeight: 700 }}>{v}</span>
                          <span style={{ fontFamily: BW.ffM, fontSize: 9, color: "rgba(244,236,218,0.45)", fontWeight: 600 }}>{String(matches.length).padStart(2, "0")} symptom{matches.length === 1 ? "" : "s"}</span>
                        </div>
                        <div>
                          <div style={{ fontFamily: BW.ffSerif, fontSize: 13, fontStyle: "italic", color: "rgba(244,236,218,0.7)", marginBottom: 6 }}>{VERDICT_NOTE[v]}</div>
                          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
                            {matches.map((s) => (
                              <li key={s.id} style={{ fontFamily: BW.ffSerif, fontSize: 14, lineHeight: 1.4, color: BW.chalk }}>
                                <span style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.18em", color: "rgba(244,236,218,0.55)", fontWeight: 600, marginRight: 10 }}>{s.id}</span>
                                {s.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer CTA bar — clay accent left rule */}
        <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "6px 1fr auto auto", alignItems: "center", border: `1px solid ${BW.ink}`, background: BW.chalk50 }}>
          <div style={{ background: BW.clay, alignSelf: "stretch" }} />
          <div style={{ padding: "20px 22px" }}>
            <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 6 }}>Want the full chart?</div>
            <p style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 19, lineHeight: 1.3, margin: 0, color: BW.ink, fontWeight: 400, letterSpacing: "-0.01em" }}>
              Run the complete <em style={{ fontWeight: 700, fontStyle: "italic" }}>Brand Triage</em> — prioritize 5 symptoms, get a personalized PDF report in 2 minutes.
            </p>
          </div>
          <div style={{ padding: "20px 22px", textAlign: "right", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.6)", fontWeight: 600, lineHeight: 1.6 }}>
            Free<br/>No call required
          </div>
          <div style={{ padding: "20px 22px 20px 0" }}>
            <a style={{ background: BW.ink, color: BW.chalk50, padding: "13px 22px", borderRadius: 4, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", cursor: "pointer", whiteSpace: "nowrap" }}>Start Brand Triage →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.V3Triage = V3Triage;
