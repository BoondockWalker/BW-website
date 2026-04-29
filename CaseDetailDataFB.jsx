/* global window */
/* O'Neil Digital Solutions — case study composition.
   Content sourced from boondockwalker.com/work/oneil-digital-solutions
   Assets in assets/cases/oneil/ pulled from same. */

const BASE = "assets/cases/oneil";

window.BW_CASE_DETAIL = {
  slug: "oneil-digital-solutions",
  no: "01",
  client: "O'Neil Digital Solutions",
  fullName: "O'Neil Digital Solutions",
  year: "2024",
  industry: "Customer Communications",
  pillars: ["Brand", "Demand"],
  outcome: "Pipeline",
  duration: "Decade-long partnership",
  pull: "Redefining a world-class brand.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Specimen №01",
    title: "The Power of One.",
    image: `${BASE}/brochure-spread.jpg`,
    imageAlt: "ONEsuite \"Know Jack & Jackie\" sales collateral — full editorial spread",
    imagePosition: "center 35%",
    imageBg: "#0E1726",
    clientLogo: `${BASE}/logo.webp`,
    clientLogoHeight: 32,
    clientLogoInvert: true,
    standfirst: "O'Neil Digital Solutions is a premier provider of digital transformation and customer communication services, with over 60 years of commitment to innovative solutions.",
  },

  blocks: [
    /* -- Services / technical box -------------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Advertising Campaigns",
        "Brand Identity",
        "Brand Foundation + Strategy",
        "Content Creation + Marketing",
        "Market Research",
        "Sales Collateral Design",
        "Social Media Marketing",
        "Trade Show Display Design",
        "Video + Animation",
        "Website Design + Development",
      ],
      note: "Ten capabilities engaged across a near-decade engagement.",
    },

    /* -- The Brief -- prose --------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Redefining a world-class brand.",
      body: [
        "The enduring relationship between O'Neil and Boondock, which extends nearly a decade, is a remarkable testament to their success together.",
        "Through our partnership, O'Neil has evolved to become the nation's leading Customer Communications Management (CCM) and Customer Experience (CX) provider. Their ONEsuite CCM + CX platform has been recognized for four consecutive years as a global leader on the Aspire leaderboard by industry analysts.",
        "Boondock Walker's strategic guidance and creative solutions have helped O'Neil to effectively communicate their value proposition, expand their market share, and solidify their position as a leader in digital transformation and customer communication. This collaboration exemplifies the power of a strong agency-client relationship and the remarkable impact it can have on a brand's growth and success.",
      ],
      dropCap: true,
      maxWidth: 820,
    },

    /* -- Big stat callout — the ONE earned number ----------------- */
    {
      kind: "stat",
      eyebrow: "Reach · 2024 alone",
      numeric: 5,
      suffix: " billion+",
      label: "Digital document pages delivered, enhancing customer interaction and digital transformation for O'Neil's global clientele.",
    },

    /* -- Sales collateral: full-bleed dark hero -------------------- */
    {
      kind: "fullbleed",
      src: `${BASE}/sales-sheet-group.webp`,
      alt: "ONEsuite sales collateral — three-up sheet specimen on navy",
      caption: { label: "fig. 02 · Sales Collateral", title: "ONEsuite vertical sheets — Banking, Retirement, Healthcare" },
      surface: "#0E1726",
      height: "min(78vh, 760px)",
      fit: "contain",
      parallax: 30,
    },

    /* -- Product Ecosystem — image + text split ------------------- */
    {
      kind: "imagetext",
      side: "left",
      src: `${BASE}/onesuite-ecosystem.webp`,
      alt: "ONEsuite Product Ecosystem Model — interlocking ring diagram",
      eyebrow: "§03 · Product Ecosystem Model",
      title: "Simplifying a complex product offering.",
      body: [
        "Boondock Walker worked with O'Neil to simplify its complex product offering, and present the ONEsuite platform as a comprehensive CCM + CX solution.",
        "While O'Neil was widely known and respected in niche markets, there was a significant opportunity to grow into additional markets where they didn't have strong market share. Recognizing that they lacked a clear value proposition and brand positioning — and why each is important to their brand and business growth — Boondock Walker established a clear brand foundation, redefined the product & service offerings, and built the tools to help communicate and sell more effectively.",
      ],
    },

    /* -- Thought leadership — 4-up grid ---------------------------- */
    {
      kind: "multi",
      eyebrow: "§04 · Thought Leadership",
      title: "Posts that earn the inbox.",
      cols: 4,
      gap: 24,
      items: [
        { src: `${BASE}/blog-1.jpg`, alt: "Blog post: AI in health insurance", caption: "AI · Health Insurance" },
        { src: `${BASE}/blog-2.jpg`, alt: "Blog post: customer engagement", caption: "Customer Engagement" },
        { src: `${BASE}/blog-3.jpg`, alt: "Blog post: digital transformation", caption: "Digital Transformation" },
        { src: `${BASE}/blog-4.jpg`, alt: "Blog post: CCM + CX leadership", caption: "CCM + CX Leadership" },
      ],
    },

    /* -- Corporate Website — full bleed ---------------------------- */
    {
      kind: "fullbleed",
      src: `${BASE}/site-laptop-set.jpg`,
      alt: "O'Neil corporate website on two laptops",
      caption: { label: "fig. 05 · Corporate Website", title: "ONeilDigitalSolutions.com — full responsive build" },
      height: "min(72vh, 720px)",
      surface: "#FBF7EE",
      parallax: 50,
    },

    /* -- "The Next Chapter" Campaign — slider ---------------------- */
    {
      kind: "slider",
      eyebrow: "§05 · Advertising Campaign",
      title: "\"The Next Chapter\" — five faces, one platform.",
      slideHeight: 640,
      items: [
        { src: `${BASE}/campaign-financial.jpg`, alt: "Campaign — financial customer", caption: "Financial · Student loans, 401k" },
        { src: `${BASE}/campaign-health-young.jpg`, alt: "Campaign — health, young", caption: "Health · Preventive care" },
        { src: `${BASE}/campaign-health-senior.jpg`, alt: "Campaign — health, senior man", caption: "Health · Senior, ongoing care" },
        { src: `${BASE}/campaign-senior-woman.jpg`, alt: "Campaign — senior woman", caption: "Lifestyle · Active retirement" },
        { src: `${BASE}/campaign-stress.jpg`, alt: "Campaign — stress / wellness", caption: "Wellness · Mental health" },
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§06 · Outcomes",
      title: "Recognition the market handed back.",
      body: [
        "Their ONEsuite CCM & CX platform has been recognized as a global leader by industry analysts — four consecutive years on the Aspire leaderboard — further solidifying O'Neil's position at the cutting edge of digital communications.",
      ],
      align: "left",
      maxWidth: 760,
    },

    /* -- Receipts grid (mostly placeholders, per direction) -------- */
    {
      kind: "statrow",
      eyebrow: "§07 · Receipts",
      title: "What we can show. What we will.",
      items: [
        { v: "5B+",  k: "Digital document pages delivered, 2024", color: "#C44A2A" },
        { v: "4×",  k: "Aspire leaderboard recognition, consecutive years", color: "#5E2638" },
        { v: "10",  k: "Boondock Walker capabilities engaged", color: "#2E4626" },
        { placeholder: true, k: "Pipeline / win-rate metric (awaiting client release)" },
        { placeholder: true, k: "Owned-channel engagement lift (awaiting client release)" },
      ],
    },

    /* -- Pullquote ------------------------------------------------- */
    {
      kind: "pullquote",
      quote: "This collaboration exemplifies the power of a strong agency-client relationship and the remarkable impact it can have on a brand's growth and success.",
      by: "The O'Neil engagement",
      role: "Boondock Walker × O'Neil Digital Solutions · 2015 — present",
    },
  ],
};

function BW_CHALK_50() { return "#FBF7EE"; }
