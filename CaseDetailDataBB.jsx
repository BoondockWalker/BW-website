/* global window */
/* Brave & Boundless — case study composition.
   Full internal case page that also points readers to the live site at
   braveandboundless.com. Placeholder receipts + brief content until the
   year-one metrics and finished blocks land — expected TODOs called out
   inline. */

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

  /* Quiet hero — no image yet. When a hero photo and logo land in
     assets/cases/brave-boundless/, swap to the full-bleed variant by
     adding variant: "fullbleed", image, and clientLogo fields. */
  hero: {
    eyebrow: "Client Case Study · Case №13",
    title: "Brave & Boundless.",
    standfirst: "A self-improvement platform grounded in fifteen rules for breaking the cycle and building what's next. Boondock Walker engaged all three practices — brand foundation and identity, demand engine and content programs, and applied AI tooling — built end to end.",
    // TODO: when the logo lands, uncomment.
    // clientLogo: `${BASE}/logo.svg`,
    // clientLogoHeight: 88,
    // clientLogoInvert: false,
  },

  blocks: [
    /* -- Services engaged -------------------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Foundation + Strategy",
        "Brand Identity",
        "Voice & Messaging",
        "Website Design + Development",
        "Content Programs",
        "Lifecycle & Nurture",
        "Custom AI Applications",
        "Lead Gen Tools",
      ],
      note: "All three practices engaged — Brand, Demand, and Lab.",
    },

    /* -- The Brief --------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Fifteen rules for what's next.",
      body: [
        "Brave & Boundless is a self-improvement platform built on fifteen rules for breaking the cycle and building what's next.",
        "TODO — expand the brief with two or three sentences on the audience, the story, and what the engagement covered.",
      ],
      dropCap: true,
      maxWidth: 820,
    },

    /* -- Read on the live site --------------------------------- */
    {
      kind: "prose",
      eyebrow: "§03 · Read the work",
      title: "The full experience lives at braveandboundless.com.",
      body: [
        "The brand story, the fifteen rules, and the ongoing content programs are all live at braveandboundless.com. This case page is the record; the site is the work.",
      ],
      align: "left",
      maxWidth: 820,
      // TODO — replace with a proper CTA block (or a fullbleed link tile)
      //         once the block kit gets a link primitive.
    },

    /* -- Receipts pending -------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§04 · Receipts",
      title: "Year-one receipts arrive here as they land.",
      body: [
        "Numbers from the year-one engagement will be published as they clear approval — pipeline growth, content lift, and the AI-assist metrics from the internal tooling.",
      ],
      align: "left",
      maxWidth: 760,
    },
  ],
};
