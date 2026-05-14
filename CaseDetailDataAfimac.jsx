/* global window */
/* AFIMAC — case study composition.
   Content sourced from boondockwalker.com/work/afimac
   Assets in assets/cases/afimac/ pulled from same. */

const AFIMAC_BASE = "assets/cases/afimac";

window.BW_CASE_DETAIL = {
  slug: "afimac",
  no: "05",
  client: "AFIMAC",
  fullName: "AFIMAC Global",
  year: "2025",
  industry: "Labor Services",
  pillars: ["Brand", "Demand"],
  outcome: "Brand",
  duration: "Active engagement",
  pull: "Stand Ready.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №05",
    title: "Stand Ready.",
    image: `${AFIMAC_BASE}/hero-traveler.jpg`,
    imageAlt: "AFIMAC traveling labor — worker in hard-hat and high-vis approaching a jet bridge",
    imagePosition: "center 32%",
    imageBg: "#0F3D66",
    /* Warm sunburst — radial from upper right, tapers to nothing by mid-image */
    tint: "radial-gradient(ellipse 70% 80% at 92% 8%, rgba(232,168,72,0.55) 0%, rgba(214,142,52,0.32) 28%, rgba(176,98,28,0.12) 50%, rgba(176,98,28,0) 70%)",
    clientLogo: `${AFIMAC_BASE}/AFIMAC-logo.svg`,
    clientLogoHeight: 56,
    clientLogoInvert: true,
    standfirst: "AFIMAC was well known in the strike-security space, and virtually invisible in the broader temporary-labor market. We built the brand, the category, and the demand engine that introduces a long-cycle service to buyers who didn't know it existed.",
  },

  blocks: [
    /* -- Services / capabilities ledger ---------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Advertising Campaigns",
        "Brand Foundation + Strategy",
        "Brand Consulting",
        "Content Creation + Marketing",
        "Lead Nurture + Automation",
        "Sales Collateral Design",
        "Social Media Marketing",
        "Trade Show + Event Marketing",
        "Website Design + Development",
      ],
      note: "Nine capabilities, integrated — brand and demand on a single track.",
    },

    /* -- The Brief / problem prose -------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Known for one thing, in a market that needed five.",
      body: [
        "When we began our partnership, AFIMAC was well known in the strike-security space, but virtually invisible in the broader temporary-labor market. With a long history of operational excellence, the company was uniquely positioned to offer faster response and higher-quality staffing — but in a commoditized market competing on price, those strengths weren't breaking through.",
        "What's more, AFIMAC's opportunity in temporary travel labor was limited by lack of awareness: most prospects didn't know what it was, why it mattered, or how to engage. And with long sales cycles, building trust with unfamiliar buyers required more than just ads.",
      ],
      dropCap: true,
      maxWidth: 820,
    },

    /* -- Strategic answer prose: the category we built ------------ */
    {
      kind: "prose",
      eyebrow: "§03 · The Move",
      title: "Positioning a differentiated labor brand in a crowded market.",
      body: [
        "We started by clarifying the value proposition and aligning it around a single, ownable idea: people protecting people, productivity and progress. From there, we built a differentiated service category — Critical Situation Travel Labor (CSTL) — to define both what AFIMAC offers and the niche it's uniquely suited to lead.",
        "Then we modernized the brand: a distinct dual-look system using isometric illustrations and photography to balance memorability with professionalism, and a redesigned sales toolkit and brand standards to bring consistency across every touchpoint.",
        "To support long-cycle sales, we built a demand infrastructure underneath: authority-building content — industry POVs, video, infographics, social — that delivered value and trust, plus a nurture engine to keep non-active prospects engaged until the time was right.",
      ],
      maxWidth: 820,
    },

    /* -- Brandbook covers — transparent PNG floats on cream ------- */
    {
      kind: "fullbleed",
      src: `${AFIMAC_BASE}/brandbook-covers.png`,
      alt: "AFIMAC Brand Foundation and Brand Identity brandbook covers",
      caption: { label: "fig. 02 · Brand Identity", title: "AFIMAC Brand Foundation + Brand Identity — published guidelines" },
      surface: "#FBF7EE",
      height: "min(86vh, 820px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },

    /* -- Brand Foundation interior spreads, 3-up ------------------ */
    {
      kind: "multi",
      eyebrow: "§04 · Brand Foundation",
      title: "Positioning, identity, and the documents that hold them.",
      cols: 3,
      gap: 24,
      surface: "#FBF7EE",
      padding: "clamp(40px, 6vw, 80px) clamp(20px, 5vw, 56px) clamp(72px, 10vw, 120px)",
      items: [
        { src: `${AFIMAC_BASE}/brand-guidelines-2.webp`, alt: "Brand Identity guidelines — colour and type system spread", caption: "Identity · colour & type system", shadow: true },
        { src: `${AFIMAC_BASE}/brand-foundation-page-03.webp`, alt: "Brand Foundation interior spread — purpose & values", caption: "Foundation · purpose & values", shadow: true },
        { src: `${AFIMAC_BASE}/brand-foundation-page-06.webp`, alt: "Brand Foundation interior spread — value proposition", caption: "Foundation · value proposition", shadow: true },
      ],
    },

    /* -- Website mockup — large, full-bleed on cream -------------- */
    {
      kind: "fullbleed",
      src: `${AFIMAC_BASE}/website-mockup.png`,
      alt: "AFIMAC corporate website — two-monitor mockup, homepage and How We Deliver Teams on Demand",
      caption: { label: "fig. 03 · Website", title: "AFIMACglobal.com — homepage + How We Deliver Teams on Demand" },
      surface: "#FBF7EE",
      height: "min(92vh, 920px)",
      fit: "contain",
      imagePadding: "20px clamp(20px, 4vw, 40px)",
    },

    /* -- Big stat callout — the category we owned ---------------- */
    {
      kind: "stat",
      eyebrow: "Category · Owned",
      value: "CSTL",
      label: "Critical Situation Travel Labor — a new service category, named, defined, and owned.",
      body: "A category isn't a slogan. It's a question prospects start asking — and a name analysts and buyers can use when they do. CSTL gave AFIMAC the language to lead a niche it was already built for.",
    },

    /* -- Promotional Brand Assets — poster series, slider --------- */
    {
      kind: "slider",
      eyebrow: "§05 · Promotional Brand Assets",
      title: "Eight isometric posters. One ready posture.",
      slideHeight: 620,
      items: [
        { src: `${AFIMAC_BASE}/poster-stand-ready.png`,  alt: "Poster — Stand Ready",       caption: "Stand Ready · here when you need us most", bg: "#2C7DB8", width: 480 },
        { src: `${AFIMAC_BASE}/poster-temp-labor.png`,   alt: "Poster — Temp Labor",        caption: "Temporary Labor · faster response", bg: "#2C7DB8", width: 480 },
        { src: `${AFIMAC_BASE}/poster-talent-pool.png`,  alt: "Poster — Talent Pool",       caption: "Talent Pool · deeper bench", bg: "#2C7DB8", width: 480 },
        { src: `${AFIMAC_BASE}/poster-sharks.png`,       alt: "Poster — Sharks (risks)",    caption: "Bridging the gap · risk, on every side", bg: "#2C7DB8", width: 480 },
        { src: `${AFIMAC_BASE}/poster-premium.png`,      alt: "Poster — Premium Solutions", caption: "Premium Solutions · operational excellence", bg: "#2C7DB8", width: 480 },
        { src: `${AFIMAC_BASE}/poster-nearshoring.png`,  alt: "Poster — Nearshoring",       caption: "Nearshoring · proximity as advantage", bg: "#2C7DB8", width: 480 },
        { src: `${AFIMAC_BASE}/poster-flexible.png`,     alt: "Poster — Flexible Staffing", caption: "Flexible Staffing · scale on cue", bg: "#2C7DB8", width: 480 },
        { src: `${AFIMAC_BASE}/poster-close-gap.png`,    alt: "Poster — Close the Gap",     caption: "Close the Gap · bridge the labor shortfall", bg: "#2C7DB8", width: 480 },
      ],
    },

    /* -- Thought leadership — three position papers, 3 covers ----- */
    {
      kind: "multi",
      eyebrow: "§06 · Thought Leadership",
      title: "Position papers earning the inbox.",
      cols: 3,
      gap: 28,
      items: [
        { src: `${AFIMAC_BASE}/pospaper-made-in-america-cover.webp`, alt: "Position paper cover — Made in America", caption: "Made in America · the manufacturing reset", shadow: true },
        { src: `${AFIMAC_BASE}/pospaper-bridging-cover.webp`,        alt: "Position paper cover — Bridging the Manufacturing Gap", caption: "Bridging the Manufacturing Gap", shadow: true },
        { src: `${AFIMAC_BASE}/pospaper-nearshoring-cover.webp`,     alt: "Position paper cover — Nearshoring", caption: "Nearshoring · the labor implications", shadow: true },
      ],
    },

    /* -- Position paper interior spreads, 3-up -------------------- */
    {
      kind: "multi",
      cols: 3,
      gap: 24,
      surface: "#0F3D66",
      fg: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${AFIMAC_BASE}/pospaper-made-in-america-spread.webp`, alt: "Made in America — interior spread", caption: "Made in America · interior", shadow: true },
        { src: `${AFIMAC_BASE}/pospaper-bridging-spread.webp`,        alt: "Bridging the Gap — interior spread", caption: "Bridging the Gap · interior", shadow: true },
        { src: `${AFIMAC_BASE}/pospaper-nearshoring-spread.webp`,     alt: "Nearshoring — interior spread", caption: "Nearshoring · interior", shadow: true },
      ],
    },

    /* -- Lead-gen / digital ad assets — image+text split ---------- */
    {
      kind: "imagetext",
      side: "right",
      src: `${AFIMAC_BASE}/leadgen-tariffs.webp`,
      alt: "AFIMAC lead-gen ad — Tariffs",
      imageBg: "#2C7DB8",
      eyebrow: "§07 · Demand Infrastructure",
      title: "Trust, built one inbox at a time.",
      body: [
        "A long sales cycle isn't a problem to solve — it's a relationship to nurture. We built the demand layer underneath the brand: lead-gen ads tied to the macro stories AFIMAC's buyers were already reading, position papers that earned the email address, and HubSpot nurture sequences that kept non-active prospects engaged until the moment was right.",
        "The result: a pipeline driven by both in-market leads and a long-tail nurture motion that compounds month over month.",
      ],
    },

    /* -- Lead-gen creative grid, 4-up ----------------------------- */
    {
      kind: "multi",
      eyebrow: "§08 · Digital Advertising",
      title: "Macro stories, AFIMAC's voice.",
      cols: 4,
      gap: 18,
      items: [
        { src: `${AFIMAC_BASE}/leadgen-tariffs.webp`,        alt: "Lead-gen — Tariffs",        caption: "Tariffs", bg: "#2C7DB8", aspect: "1 / 1", fit: "cover" },
        { src: `${AFIMAC_BASE}/leadgen-rethinking.webp`,     alt: "Lead-gen — Rethinking",     caption: "Rethinking", bg: "#2C7DB8", aspect: "1 / 1", fit: "cover" },
        { src: `${AFIMAC_BASE}/leadgen-coming-home.webp`,    alt: "Lead-gen — Coming Home",    caption: "Coming Home", bg: "#2C7DB8", aspect: "1 / 1", fit: "cover" },
        { src: `${AFIMAC_BASE}/leadgen-skillsgap.webp`,      alt: "Lead-gen — Skills Gap",     caption: "Skills Gap", bg: "#2C7DB8", aspect: "1 / 1", fit: "cover" },
      ],
    },

    /* -- HubSpot email sends, 3-up -------------------------------- */
    {
      kind: "multi",
      eyebrow: "§09 · Lifecycle",
      title: "Nurture emails, in HubSpot.",
      cols: 3,
      gap: 24,
      items: [
        { src: `${AFIMAC_BASE}/hubspot-email1.webp`, alt: "HubSpot nurture email — variant 1", caption: "Email · industry POV",  shadow: true },
        { src: `${AFIMAC_BASE}/hubspot-email2.webp`, alt: "HubSpot nurture email — variant 2", caption: "Email · whitepaper offer", shadow: true },
        { src: `${AFIMAC_BASE}/hubspot-email3.webp`, alt: "HubSpot nurture email — variant 3", caption: "Email · trade-show invite", shadow: true },
      ],
    },

    /* -- HubSpot reporting dashboards, 3-up ----------------------- */
    {
      kind: "multi",
      eyebrow: "§10 · Performance Reporting",
      title: "The dashboards we run on.",
      cols: 3,
      gap: 24,
      surface: "#FBF7EE",
      padding: "clamp(40px, 6vw, 80px) clamp(20px, 5vw, 56px) clamp(72px, 10vw, 120px)",
      items: [
        { src: `${AFIMAC_BASE}/dashboard-ads.webp`,           alt: "HubSpot dashboard — paid ads performance",   caption: "Dashboard · paid ads",     shadow: true, bg: "#FFFFFF", aspect: "4 / 3", fit: "cover" },
        { src: `${AFIMAC_BASE}/dashboard-funnel-source.webp`, alt: "HubSpot dashboard — funnel by source",       caption: "Dashboard · funnel by source", shadow: true, bg: "#FFFFFF", aspect: "4 / 3", fit: "cover" },
        { src: `${AFIMAC_BASE}/dashboard-page-perf.webp`,     alt: "HubSpot dashboard — page performance",       caption: "Dashboard · page performance", shadow: true, bg: "#FFFFFF", aspect: "4 / 3", fit: "cover" },
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§11 · Outcomes",
      title: "What changed in under a year.",
      body: [
        "A clear market identity beyond strike services. A professional, ownable brand that communicates credibility and capability. A growing pipeline driven by both in-market leads and long-tail nurture.",
        "This work laid the groundwork for AFIMAC to lead in a space it's uniquely built for — and we're proud to help write the next chapter.",
      ],
      align: "left",
      maxWidth: 760,
    },

    /* -- Receipts grid: mostly placeholders, two real --------------- */
    {
      kind: "statrow",
      eyebrow: "§12 · Receipts",
      title: "What we can show. What we will.",
      items: [
        { v: "1",  k: "New service category named & owned (CSTL)", color: "#2C7DB8" },
        { v: "9",  k: "Boondock Walker capabilities engaged",       color: "#5E2638" },
        { v: "<1", k: "Years from kickoff to brand-led pipeline",   suffix: "yr",   color: "#2E4626" },
        { placeholder: true, k: "Pipeline lift attributed to nurture (awaiting client release)" },
        { placeholder: true, k: "Unaided awareness — temp travel labor (awaiting client release)" },
      ],
    },

    /* -- Pullquote ------------------------------------------------- */
    {
      kind: "pullquote",
      image: `${AFIMAC_BASE}/poster-sharks.png`,
      imageAlt: "AFIMAC isometric — bridging the manufacturing gap above shark-infested risks",
      imageBg: "#2C7DB8",
      quote: "People protecting people, productivity, and progress.",
      by: "AFIMAC brand position",
      role: "Boondock Walker × AFIMAC · 2024 — present",
    },
  ],
};

function BW_AFIMAC_NS() { return "afimac"; }
