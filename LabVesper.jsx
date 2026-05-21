/* global React, BW, VesperMark */
/* Lab page — Vesper feature module. The first Lab specimen the bureau is
   releasing as its own product, not a client engagement. Sits between
   LabHero and LabThesis so it reads as a fresh-from-the-bench dispatch.
   Easy to retire post-launch: delete this file and the import in lab.html. */

function LabVesperFeature() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isNarrow = useMediaQuery("(max-width: 560px)");

  return (
    <section style={{ background: BW.chalk, color: BW.ink, fontFamily: BW.ffG, borderBottom: `1.5px solid ${BW.ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(20,16,12,0.04) 0 1.5px, transparent 1.5px 6px)", mixBlendMode: "multiply", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", padding: "clamp(48px, 7vw, 88px) clamp(20px, 5vw, 64px)" }}>
        {/* Dispatch eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, background: BW.clay, borderRadius: "50%", boxShadow: `0 0 0 4px rgba(196,74,42,0.18)` }} />
            Announcement · May 21 · 2026
          </span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <span>Latest from the Lab · A new product launches</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 32 : 56, alignItems: "start", border: `1.5px solid ${BW.ink}`, background: BW.chalk50 }}>
          {/* Left — copy */}
          <div style={{ padding: "clamp(28px, 4vw, 44px) clamp(24px, 4vw, 44px)", borderRight: !isMobile ? `1.5px solid ${BW.ink}` : "none", borderBottom: isMobile ? `1.5px solid ${BW.ink}` : "none", display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700 }}>Vesper · A bureau release</span>
              <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600 }}>Early access · rolling</span>
            </div>

            <h2 style={{ fontFamily: BW.ffD, fontWeight: 400, fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 0.98, letterSpacing: "-0.03em", margin: 0, color: BW.ink }}>
              Introducing <em style={{ color: BW.clay, fontStyle: "italic", fontWeight: 400 }}>Vesper.</em>
              <br />A brand foundation <em style={{ color: BW.ink, fontStyle: "italic", fontWeight: 400 }}>your team will actually use.</em>
            </h2>

            <p style={{ fontFamily: BW.ffSerif, fontSize: 17, lineHeight: 1.6, color: BW.ink2, margin: 0, maxWidth: "56ch" }}>
              The first Lab project we're releasing as a product, not a client tool. Vesper is an AI assistant trained on your brand foundation — built so your marketing team can use it every day, inside the tools they already work in.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", paddingTop: 8 }}>
              <a href="vesper.html" style={{ background: BW.ink, color: BW.chalk50, padding: "14px 22px", borderRadius: 4, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>Get early access →</a>
              <a href="note.html?slug=introducing-vesper" style={{ background: "transparent", color: BW.ink, padding: "14px 22px", borderRadius: 4, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", border: `1.5px solid ${BW.ink}` }}>Read the announcement →</a>
            </div>

            {/* Tiny facts strip */}
            <div style={{ marginTop: 4, display: "grid", gridTemplateColumns: isNarrow ? "1fr 1fr" : "repeat(3, 1fr)", borderTop: `1px solid ${BW.ruleL}`, paddingTop: 18 }}>
              {[
                { k: "What", v: "Lab project, now a product" },
                { k: "Built for", v: "Marketing teams" },
                { k: "Release", v: "One tool at a time, when each one works" },
              ].map((s, i) => (
                <div key={s.k} style={{ paddingRight: i < 2 ? 14 : 0, paddingLeft: i > 0 && !isNarrow ? 14 : 0 }}>
                  <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 4 }}>{s.k}</div>
                  <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 14, lineHeight: 1.3, color: BW.ink, fontWeight: 400, letterSpacing: "-0.005em" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mark + spec strip */}
          <div style={{ padding: "clamp(28px, 4vw, 44px) clamp(24px, 4vw, 36px)", display: "flex", flexDirection: "column", gap: 24, alignItems: "center", justifyContent: "center", background: BW.chalk, minHeight: isMobile ? 0 : 360 }}>
            <VesperMark size={isMobile ? 140 : 180} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,16,12,0.55)", fontWeight: 600, marginBottom: 6 }}>From the Lab · Vol I · No 01</div>
              <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 17, lineHeight: 1.3, color: BW.ink, maxWidth: "26ch", margin: "0 auto" }}>
                Our first Lab project to launch as a product.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.LabVesperFeature = LabVesperFeature;
