/* global window */
/* Brave & Boundless — case study composition.
   Follows the same block sequence used across every other case (Calyx,
   O'Neil, Central Kitchen, etc.): full-bleed hero → services → brief →
   full-bleed artifact → multi-image system → stat callout → imagetext →
   outcomes → statrow (receipts) → pullquote.

   Assets pending — drop the referenced files into assets/cases/brave-
   boundless/ and the page picks them up. Copy blocks marked TODO also
   need a final pass. Live site: braveandboundless.com

   Assets to land:
     hero.jpg                  — hero photograph
     logo.svg                  — client wordmark for the hero
     brand-guidelines.png      — foundation / guidelines cover or spread
     rules-grid.png            — 15 rules laid out as a system grid
     site.png                  — site launch mockup
     campaign-1..3.webp        — content or campaign spots
*/

const BASE = "assets/cases/brave-boundless";

window.BW_CASE_DETAIL = {
  slug: "brave-and-boundless",
  no: "13",
  client: "Brave & Boundless",
  fullName: "Brave & Boundless",
  year: "2026",
  industry: "Self-improvement",
  pillars: ["Brand", "Demand", "Lab"],
  outcome: "Brand",
  duration: "2026 — present",
  pull: "15 rules for breaking the cycle and building what's next.",
  externalUrl: "https://braveandboundless.com",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №13",
    title: "Break the cycle. Build what's next.",
    image: `${BASE}/hero.jpg`,
    imageAlt: "Brave & Boundless — hero image (TODO)",
    imagePosition: "center center",
    imageBg: "#14100C",
    scrim: "bottomOnly",
    clientLogo: `${BASE}/logo.svg`,
    clientLogoHeight: 72,
    clientLogoInvert: true,
    standfirst: "Brave & Boundless is a self-improvement platform grounded in fifteen rules for breaking the cycle and building what's next. Boondock Walker engaged all three practices — brand foundation, demand engine, and applied AI tooling — built end to end.",
  },

  blocks: [
    /* -- Services / technical box -------------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Foundation + Strategy",
        "Brand Identity",
        "Naming & Voice",
        "Messaging Architecture",
        "Website Design + Development",
        "Content Programs",
        "Lifecycle & Nurture",
        "Custom AI Applications",
        "Lead Gen Tools",
      ],
      note: "All three practices engaged — Brand, Demand, and Lab.",
    },

    /* -- The Brief -- prose --------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Fifteen rules for what's next.",
      body: [
        "Brave & Boundless is a self-improvement platform built on fifteen rules for breaking the cycle and building what's next. It speaks to people ready to stop repeating the same year twice — and to founders, operators, and creators who need a framework and a community to move on it.",
        "The brief: a brand foundation strong enough to hold a franchise (rules, essays, community, live events), a demand engine that turns readers into subscribers into members, and applied AI tooling that helps every rule land in a voice that still sounds like the author. TODO — expand with two or three specific outcomes from the engagement once the year-one milestones land.",
      ],
      dropCap: true,
      maxWidth: 820,
    },

    /* -- Brand foundation artifact — full-bleed placeholder ------ */
    {
      kind: "fullbleed",
      src: `${BASE}/brand-guidelines.png`,
      alt: "Brave & Boundless brand foundation — cover + interior spread (TODO)",
      caption: { label: "fig. 02 · Brand Foundation", title: "Positioning, voice, and the rules that hold them." },
      surface: "#FBF7EE",
      height: "min(82vh, 760px)",
      fit: "contain",
      imagePadding: "32px 28px",
    },

    /* -- The 15 rules — multi-image system grid ------------------ */
    {
      kind: "multi",
      eyebrow: "§03 · The System",
      title: "Fifteen rules, one arc.",
      cols: 5,
      gap: 20,
      maxWidth: 1500,
      surface: "#FBF7EE",
      padding: "80px 40px 120px",
      items: [
        // TODO — replace with individual rule tiles once the visual system lands.
        { src: `${BASE}/rules-grid.png`, alt: "Fifteen rules — system grid (TODO)", caption: "The framework · fifteen rules", bg: "#FBF7EE", aspect: "1 / 1", fit: "contain", tilePadding: "8px" },
      ],
    },

    /* -- Big stat callout — the framework ------------------------ */
    {
      kind: "stat",
      eyebrow: "The Framework",
      numeric: 15,
      suffix: " rules",
      label: "Rules for breaking the cycle and building what's next. Sequenced, not a checklist.",
    },

    /* -- Website — imagetext split ------------------------------- */
    {
      kind: "imagetext",
      side: "right",
      src: `${BASE}/site.png`,
      alt: "braveandboundless.com — site launch mockup (TODO)",
      imageBg: "#FBF7EE",
      eyebrow: "§04 · Digital Home",
      title: "braveandboundless.com — the home the framework lives in.",
      body: [
        "The full experience lives at braveandboundless.com. The site is the home for the rules, the essays, the community, and the ongoing content programs — a place where readers move from browsing to subscribed to invested.",
        "TODO — two sentences on the responsive build, the content system, and the AI-assist tooling built into the CMS.",
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§05 · Outcomes",
      title: "Foundation shipped. Engine running.",
      body: [
        "The brand foundation and the fifteen rules are live at braveandboundless.com. The content engine is running, the lifecycle programs are seeded, and the AI tooling behind the CMS is drafting in the author's voice. Receipts from the year-one engagement will be published here as they clear approval.",
      ],
      align: "left",
      maxWidth: 760,
    },

    /* -- Receipts grid (placeholder-heavy) ----------------------- */
    {
      kind: "statrow",
      eyebrow: "§06 · Receipts",
      title: "What we can show. What we will.",
      items: [
        { v: "15", k: "Rules in the framework", color: "#C44A2A" },
        { v: "3",  k: "Boondock Walker practices engaged", color: "#5E2638" },
        { placeholder: true, k: "Subscriber growth (awaiting year-one release)" },
        { placeholder: true, k: "Content engine throughput (awaiting release)" },
        { placeholder: true, k: "AI-assist adoption (awaiting release)" },
      ],
    },

    /* -- Pullquote — text-only until image lands ----------------- */
    {
      kind: "pullquote",
      quote: "TODO — a real client quote naming the outcome, in the founder's voice.",
      by: "The Brave & Boundless engagement",
      role: "Boondock Walker × Brave & Boundless · 2026 — present",
    },
  ],
};
