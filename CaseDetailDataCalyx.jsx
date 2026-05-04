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
    eyebrow: "Client Success Story · Specimen №03",
    title: "A better way to do business.",
    image: `${BASE}/stationery.webp`,
    imageAlt: "Calyx — stationery system, orange and white on slate",
    imagePosition: "center center",
    imageBg: "#3a4754",
    scrim: "bottomOnly",
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

    /* -- Logo construction — image + text split ------------------ */
    {
      kind: "imagetext",
      side: "right",
      src: `${BASE}/logo-construction.webp`,
      alt: "Calyx logo — golden ratio construction grid",
      imageBg: "#FBF7EE",
      eyebrow: "§03 · Mark",
      title: "A lotus, drawn on the golden ratio.",
      body: [
        "The Calyx mark is a stylized lotus — gray outer petals, orange inner petals — built on a golden-ratio construction grid. The mark scales cleanly from a 16px favicon to a building-sized billboard without losing its proportions.",
        "Orange is the brand's load-bearing color. We held the rest of the system to neutral slate, royal blue, powder, and chalk — so the orange always reads as a deliberate choice, never as decoration.",
      ],
    },

    /* -- Logo color system — full bleed grid --------------------- */
    {
      kind: "fullbleed",
      src: `${BASE}/logo-grid.webp`,
      alt: "Calyx logo — color system across orange, slate, royal, powder",
      caption: { label: "fig. 03 · Color System", title: "Four ground colors. One mark. Always recognizable.", fg: "#FBF7EE" },
      surface: "#3a4754",
      height: "min(82vh, 760px)",
      fit: "contain",
      imagePadding: "60px 28px",
    },

    /* -- Sub-brand architecture — three-up ----------------------- */
    {
      kind: "multi",
      eyebrow: "§04 · Sub-brand Architecture",
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
      eyebrow: "§05 · Demand Campaign",
      title: "Naming the problem in a single image.",
      slideHeight: 520,
      items: [
        { src: `${BASE}/campaign-duck.webp`,  alt: "Campaign — sitting duck",        caption: "Security · Weak IT makes you a sitting duck",          width: 980 },
        { src: `${BASE}/campaign-wolf.webp`,  alt: "Campaign — wolf in sheep's clothing", caption: "Trust · When IT support isn't who you thought",   width: 980 },
        { src: `${BASE}/campaign-gavel.webp`, alt: "Campaign — gavel, law firms",   caption: "Legal vertical · Reduce IT hassles, increase billable hours", width: 980 },
        { src: `${BASE}/campaign-sleep.webp`, alt: "Campaign — IT keeping you up at night", caption: "Security · IT risks keeping you up at night",  width: 980 },
      ],
    },

    /* -- Website — full bleed ------------------------------------ */
    {
      kind: "fullbleed",
      src: `${BASE}/site.jpg`,
      alt: "CalyxIT.com — responsive site, dual-screen mockup",
      caption: { label: "fig. 06 · Corporate Website", title: "CalyxIT.com — \"We create a better way to do business.\"" },
      surface: "#FBF7EE",
      height: "min(80vh, 760px)",
      fit: "contain",
      imagePadding: "40px 28px",
    },

    /* -- Rocket Sauce newsletter — image+text split -------------- */
    {
      kind: "imagetext",
      side: "left",
      src: `${BASE}/rocket-sauce.webp`,
      alt: "Rocket Sauce — Calyx monthly newsletter and event series",
      imageBg: "#FBF7EE",
      eyebrow: "§07 · Owned Channel",
      title: "Rocket Sauce — the newsletter that earned the inbox.",
      body: [
        "Rocket Sauce is Calyx's monthly newsletter — insights, inspiration, and occasional unicorn-sighting reports for the people running IT at small and mid-market companies.",
        "We designed the masthead, the editorial system, and the event franchise it spawned (\"State of the Unicorn\"), turning a list of subscribers into a community that opens, clicks, and shows up.",
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§08 · Outcomes",
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
      eyebrow: "§09 · Receipts",
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
