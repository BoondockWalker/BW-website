/* global window */
/* Calyx — case study composition.
   Content sourced from boondockwalker.com/work/calyx
   Assets in assets/cases/calyx/ pulled from same.

   Calyx palette (lifted from the supplied logo + brand grid):
     Orange  #e95d15    Slate   #3a4754
     Royal   #3b5fa6    Powder  #bcd0d6
     Gray    #b0b0b0    Chalk   #FBF7EE
*/

const BASE = "assets/cases/calyx";

window.BW_CASE_DETAIL = {
  slug: "calyx",
  no: "03",
  client: "Calyx",
  fullName: "Calyx Managed Services",
  year: "2024",
  industry: "Managed IT Services",
  pillars: ["Brand", "Demand"],
  outcome: "Pipeline",
  duration: "Multi-year engagement",
  pull: "An MSP that lets small and mid-market businesses act enterprise-grade.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №03",
    title: "A better way to do business.",
    image: `${BASE}/hero.jpg`,
    imageAlt: "Calyx — campfire under the Milky Way at dusk",
    imagePosition: "center center",
    imageBg: "#0a1428",
    scrim: "bottomOnly",
    clientLogo: `${BASE}/logo.svg`,
    clientLogoHeight: 60,
    clientLogoInvert: true,
    standfirst: "Calyx is a managed services provider deploying enterprise-grade IT for the small and mid-market businesses who can't afford to think small. Boondock Walker built the brand foundation, identity system, sub-brand architecture, and demand campaigns that match the size of their ambition.",
  },

  blocks: [
    /* -- Services / technical box -------------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Foundation + Strategy",
        "Brand Identity",
        "Logo + Mark Design",
        "Sub-brand Architecture",
        "Marketing Strategy",
        "Advertising Campaign",
        "Sales Collateral Design",
        "Newsletter + Editorial",
        "Website Design + Development",
      ],
      note: "Nine capabilities engaged across a multi-year engagement.",
    },

    /* -- The Brief -- prose --------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Match the brand to the ambition.",
      body: [
        "Calyx is the kind of managed services provider that closes deals on capability — secure cloud, real support, enterprise-class infrastructure for companies that can't justify an in-house IT department. The work was world-class. The brand wasn't keeping up.",
        "They came to Boondock Walker with a fast-growing market, an ambitious growth target, and a brand that read like every other MSP on the procurement shortlist. The brief: build a foundation strong enough to defend a premium position, an identity sharp enough to be recognized in a category of beige logos, and a demand engine that gives the sales team a story to walk into the room with.",
        "We started with strategy — audience, positioning, sub-brand architecture. From there: a lotus mark built on the golden ratio, a color system that lets the orange do the work, and a campaign series that names the customer's problem in one breath.",
      ],
      dropCap: true,
      maxWidth: 820,
      accent: "#e95d15",
    },

    /* -- Stationery system — full-bleed (transparent PNG, floats) - */
    {
      kind: "fullbleed",
      src: `${BASE}/stationery.png`,
      alt: "Calyx stationery system — letterhead, business card, envelope",
      caption: { label: "fig. 03 · System in Print", title: "Stationery — letterhead, card, envelope" },
      surface: "#FBF7EE",
      height: "min(86vh, 820px)",
      fit: "contain",
      imagePadding: "32px 28px",
    },

    /* -- Brand Guidelines — full-bleed of the published book ----- */
    {
      kind: "fullbleed",
      src: `${BASE}/brand-guidelines.png`,
      alt: "Calyx brand guidelines — published book covers and interior spread",
      caption: { label: "fig. 04 · Brand Guidelines", title: "\"Create a better way.\" — the published doctrine" },
      surface: "#FBF7EE",
      height: "min(82vh, 760px)",
      fit: "contain",
      imagePadding: "32px 28px",
    },

    /* -- The System — five elements, used together --------------- */
    {
      kind: "multi",
      eyebrow: "§05 · The System",
      title: "Mark, construction, color, pattern, palette.",
      cols: 5,
      gap: 20,
      maxWidth: 1500,
      surface: "#FBF7EE",
      padding: "80px 40px 120px",
      items: [
        { src: `${BASE}/element-1-logo.png`,         alt: "Calyx full logo — wordmark + lotus on slate",   caption: "01 · Logo lockup",        bg: "#3a4754", aspect: "1 / 1", fit: "contain", tilePadding: "8px" },
        { src: `${BASE}/element-2-construction.png`, alt: "Logo construction — golden-ratio grid",          caption: "02 · Construction",       bg: "#FBF7EE", aspect: "1 / 1", fit: "contain", tilePadding: "8px" },
        { src: `${BASE}/element-3-mark-grid.png`,    alt: "Mark variations — orange and slate squares + wordmark", caption: "03 · Mark variations", bg: "#FBF7EE", aspect: "1 / 1", fit: "contain", tilePadding: "0" },
        { src: `${BASE}/element-4-pattern.png`,      alt: "Lotus pattern repeat",                          caption: "04 · Pattern",            bg: "#3a4754", aspect: "1 / 1", fit: "cover",  tilePadding: "0" },
        { src: `${BASE}/element-5-color.jpg`,        alt: "Color palette — primary and secondary",          caption: "05 · Palette",            bg: "#FBF7EE", aspect: "1 / 1", fit: "contain", tilePadding: "32px" },
      ],
    },

    /* -- Sub-brand architecture — three-up ----------------------- */
    {
      kind: "multi",
      eyebrow: "§06 · Sub-brand Architecture",
      title: "One parent. Three product lines, each pulling its weight.",
      cols: 3,
      gap: 32,
      surface: "#FBF7EE",
      padding: "120px 56px",
      items: [
        { src: `${BASE}/sub-framework.webp`,   alt: "calyx framework — sub-brand wordmark",   caption: "Framework · IT strategy & roadmap",  bg: "#FBF7EE", aspect: "16 / 9", tilePadding: "48px", fit: "contain" },
        { src: `${BASE}/sub-groundwork.webp`,  alt: "calyx groundwork — sub-brand wordmark",  caption: "Groundwork · Foundational managed IT", bg: "#FBF7EE", aspect: "16 / 9", tilePadding: "48px", fit: "contain" },
        { src: `${BASE}/sub-intelliwork.webp`, alt: "calyx intelliwork — sub-brand wordmark", caption: "Intelliwork · Intelligence + insight", bg: "#FBF7EE", aspect: "16 / 9", tilePadding: "48px", fit: "contain" },
      ],
    },

    /* -- Sales sheets — full-bleed ------------------------------- */
    {
      kind: "fullbleed",
      src: `${BASE}/sales-sheets.png`,
      alt: "Calyx sales sheets — calyxframework, calyxgroundwork, calyxnetwork",
      caption: { label: "fig. 07 · Sales Collateral", title: "Vertical sheets — Framework · Groundwork · Network" },
      surface: "#FBF7EE",
      height: "min(86vh, 820px)",
      fit: "contain",
      imagePadding: "32px 28px",
    },

    /* -- Big stat callout — placeholder pending client release ---- */
    {
      kind: "stat",
      eyebrow: "Reach · Engagement to date",
      value: "—",
      label: "Headline metric awaiting client release.",
      accent: "#e95d15",
    },

    /* -- LinkedIn campaign — slider ------------------------------ */
    {
      kind: "slider",
      eyebrow: "§08 · Demand Campaign",
      title: "Naming the problem in a single image.",
      slideHeight: 520,
      items: [
        { src: `${BASE}/campaign-duck.webp`,  alt: "Campaign — sitting duck",        caption: "Security · Weak IT makes you a sitting duck",          width: 980 },
        { src: `${BASE}/campaign-wolf.webp`,  alt: "Campaign — wolf in sheep's clothing", caption: "Trust · When IT support isn't who you thought",   width: 980 },
        { src: `${BASE}/campaign-gavel.webp`, alt: "Campaign — gavel, law firms",   caption: "Legal vertical · Reduce IT hassles, increase billable hours", width: 980 },
        { src: `${BASE}/campaign-sleep.webp`, alt: "Campaign — IT keeping you up at night", caption: "Security · IT risks keeping you up at night",  width: 980 },
      ],
    },

    /* -- Website — full bleed (transparent PNG, floats on cream) - */
    {
      kind: "fullbleed",
      src: `${BASE}/site.png`,
      alt: "CalyxIT.com — responsive site, dual-screen mockup",
      caption: { label: "fig. 09 · Corporate Website", title: "CalyxIT.com — \"We create a better way to do business.\"" },
      surface: "#FBF7EE",
      height: "min(80vh, 760px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },

    /* -- Rocket Sauce newsletter — image+text split (image larger) */
    {
      kind: "imagetext",
      side: "left",
      src: `${BASE}/rocket-sauce.webp`,
      alt: "Rocket Sauce — Calyx monthly newsletter and event series",
      imageBg: "#FBF7EE",
      imageRatio: 1.35,
      imageMaxHeight: 700,
      eyebrow: "§10 · Owned Channel",
      title: "Rocket Sauce — the newsletter that earned the inbox.",
      body: [
        "Rocket Sauce is Calyx's monthly newsletter — insights, inspiration, and occasional unicorn-sighting reports for the people running IT at small and mid-market companies.",
        "We designed the masthead, the editorial system, and the event franchise it spawned (\"State of the Unicorn\"), turning a list of subscribers into a community that opens, clicks, and shows up.",
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§11 · Outcomes",
      title: "Brand presence, sales motion, growth.",
      body: [
        "Through the partnership, Calyx established a recognizable brand presence in a category dominated by interchangeable competitors, aligned the marketing motion to the sales motion, and drove measurable growth against an ambitious plan. The lotus shows up on every door — and the people behind those doors recognize it.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#e95d15",
    },

    /* -- Receipts grid ------------------------------------------- */
    {
      kind: "statrow",
      eyebrow: "§12 · Receipts",
      title: "What we can show. What we will.",
      accent: "#e95d15",
      items: [
        { v: "9",   k: "Boondock Walker capabilities engaged", color: "#e95d15" },
        { v: "3",   k: "Sub-brands inside the Calyx system",    color: "#3a4754" },
        { placeholder: true, k: "Pipeline lift (awaiting client release)" },
        { placeholder: true, k: "Win-rate vs. incumbent (awaiting client release)" },
        { placeholder: true, k: "Branded search lift (awaiting client release)" },
      ],
    },

    /* -- Pullquote — text-only until image arrives --------------- */
    {
      kind: "pullquote",
      quote: "We finally walk into the room looking the size we already are.",
      by: "The Calyx engagement",
      role: "Boondock Walker × Calyx · Multi-year",
    },
  ],
};
