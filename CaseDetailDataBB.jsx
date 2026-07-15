/* global window */
/* Brave & Boundless — case study composition.
   Follows the same block sequence used across every other case (Calyx,
   O'Neil, Central Kitchen, etc.): full-bleed hero → services → brief →
   fullbleed artifact → multi-image system → stat callout → imagetext →
   outcomes → statrow (receipts) → pullquote.

   Assets live in assets/cases/brave-boundless/. Some filenames contain
   spaces (as supplied); those are %20-encoded in the src paths so the
   browser fetches them cleanly.

   Copy TODOs remain where the brief body, digital-home body, and
   pullquote still need a final pass. Live site: braveandboundless.com
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
    /* Nature-scene hero — retro-illustrated seascape from the brand's
       imagery direction. Editorial, no site nav to conflict with the
       SiteHeader overlay pinned above. */
    image: `${BASE}/Mark_Nead_stylize_--chaos_10_--ar_169_--sref_httpss.mj.run_VL6__2deb3fc3-dbfe-4e98-ba3c-8e75bbb27b87.png`,
    imageAlt: "Brave & Boundless — retro-illustrated seascape with radiating sun",
    imagePosition: "center center",
    imageBg: "#14100C",
    scrim: "bottomOnly",
    clientLogo: `${BASE}/BraveBoundless%20logo-wht.svg`,
    clientLogoHeight: 72,
    clientLogoInvert: false,
    standfirst: "Brave & Boundless is a self-improvement platform grounded in fifteen rules for breaking the cycle and building what's next. Boondock Walker engaged all three practices — brand foundation and identity, demand engine and content programs, and applied AI tooling — built end to end.",
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
        "Publishing & Book Design",
        "Website Design + Development",
        "Content Programs",
        "Lifecycle & Nurture",
        "Merch & Product Extensions",
        "Custom AI Applications",
        "Lead Gen Tools",
      ],
      note: "All three practices engaged — Brand, Demand, and Lab — carried into publishing, product, and the live site.",
    },

    /* -- The Brief -- prose --------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Fifteen rules for what's next.",
      body: [
        "Brave & Boundless is a self-improvement platform built on fifteen rules for breaking the cycle and building what's next. It speaks to people ready to stop repeating the same year twice — and to founders, operators, and creators who need a framework and a community to move on it.",
        "The brief: a brand foundation strong enough to carry a franchise (rules, essays, community, publishing, product), a demand engine that turns readers into subscribers into members, and applied AI tooling that keeps every piece of content in the author's voice. TODO — expand with two or three specific outcomes from the engagement once year-one milestones land.",
      ],
      dropCap: true,
      maxWidth: 820,
    },

    /* -- The Book — fullbleed publication artifact --------------- */
    {
      kind: "fullbleed",
      src: `${BASE}/BB-books-set1.png`,
      alt: "Brave & Boundless — book system, first volume",
      caption: { label: "fig. 02 · The Book", title: "The fifteen rules, in print — flagship publication." },
      surface: "#FBF7EE",
      height: "min(84vh, 780px)",
      fit: "contain",
      imagePadding: "32px 28px",
    },

    /* -- The Framework — screen capture from the live B&B site.
       Renders the four-stages card row (Fire · Forge · Foundation · Field)
       as an artifact rather than reproducing the interactive component. The
       image is a lossless PNG grab from braveandboundless.com/the-book/.
       Standfirst restored from the pre-screenshot draft — carries the
       description below the title. */
    {
      kind: "floating",
      eyebrow: "§04 · The Framework",
      title: "Fifteen rules. Four stages.",
      standfirst: "The rules move in sequence — from lighting the fire, to forging the skills, to laying the foundation, to expanding into the field. Each stage carries its own colour, its own weather, and its own set of rules.",
      src: `${BASE}/BB-web-book-4-stages.png`,
      alt: "Brave & Boundless — the framework: Fire, Forge, Foundation, Field",
      surface: "#FBF7EE",
      maxWidth: 1240,
      maxHeight: 720,
    },

    /* -- Brand system — color, icons, imagery, 3-up ------------- */
    {
      kind: "multi",
      eyebrow: "§05 · The System",
      title: "Color, icons, imagery — the visual language.",
      cols: 3,
      gap: 20,
      maxWidth: 1440,
      surface: "#FBF7EE",
      padding: "80px 40px 120px",
      items: [
        { src: `${BASE}/BB-color.png`,   alt: "Brave & Boundless — color palette",   caption: "01 · Palette",  bg: "#FBF7EE", aspect: "1 / 1", fit: "contain", tilePadding: "8px", shadow: true },
        { src: `${BASE}/BB-icons.png`,   alt: "Brave & Boundless — icon system",     caption: "02 · Icons",    bg: "#FBF7EE", aspect: "1 / 1", fit: "contain", tilePadding: "8px", shadow: true },
        { src: `${BASE}/BB-imagery.png`, alt: "Brave & Boundless — imagery direction", caption: "03 · Imagery",  bg: "#FBF7EE", aspect: "1 / 1", fit: "contain", tilePadding: "8px", shadow: true },
      ],
    },

    /* -- Digital home — imagetext split with the homepage ------- */
    {
      kind: "imagetext",
      side: "right",
      src: `${BASE}/BB-web-home.png`,
      alt: "braveandboundless.com — homepage",
      imageBg: "#FBF7EE",
      eyebrow: "§06 · Digital Home",
      title: "braveandboundless.com — the home the framework lives in.",
      body: [
        "The full experience lives at braveandboundless.com. The site is the home for the rules, the essays, the community, and the ongoing content programs — a place where readers move from browsing to subscribed to invested.",
        "TODO — two sentences on the responsive build, the content system, and the AI-assist tooling built into the CMS.",
      ],
    },

    /* -- The site in detail — 4-up screen grid ------------------- */
    {
      kind: "multi",
      eyebrow: "§07 · The Site, in Detail",
      title: "Sections of the experience.",
      cols: 2,
      gap: 24,
      maxWidth: 1440,
      surface: "#FBF7EE",
      padding: "80px 40px 120px",
      items: [
        { src: `${BASE}/BB-web-forge%20hero.png`,    alt: "The Forge — hero section",              caption: "The Forge · flagship program",             frame: "laptop", aspect: "16 / 10", fit: "cover", position: "top" },
        { src: `${BASE}/BB-web-book.png`,            alt: "The Book — product page",               caption: "The Book · fifteen rules in print",         frame: "laptop", aspect: "16 / 10", fit: "cover", position: "top" },
        { src: `${BASE}/BB-web-Ask%20Mark.png`,      alt: "Ask Mark — AI-assisted advice",         caption: "Ask Mark · AI-assisted advice",             frame: "laptop", aspect: "16 / 10", fit: "cover", position: "top" },
        { src: `${BASE}/BB-web-fire%20blog.png`,     alt: "Fire — essays and long-form",           caption: "Fire · essays and long-form",               frame: "laptop", aspect: "16 / 10", fit: "cover", position: "top" },
      ],
    },

    /* -- The Soundtrack — bonus feature, imagetext -------------- */
    {
      kind: "imagetext",
      side: "left",
      src: `${BASE}/BB-web-soundtrack.png`,
      alt: "The Soundtrack — every rule has a sound",
      imageBg: "#14100C",
      eyebrow: "§08 · Bonus Feature",
      title: "The book has a soundtrack.",
      body: [
        "Every rule in Brave & Boundless has a sound. Five curated playlists — Grit & Resilience, Discipline & Ambition, Roots & Identity, Love & Loyalty, Humble & Kind — pair to the themes that drive the book.",
        "The Soundtrack is a bonus feature stitched into the site: hero page, per-theme playlist detail, and a cross-site CTA that surfaces the whole thing from the book page.",
      ],
    },

    /* -- Merch — horizontal slider, all six shirts --------------- */
    {
      kind: "slider",
      eyebrow: "§09 · Merch",
      title: "The brand, worn.",
      slideHeight: 560,
      gap: 24,
      items: [
        { src: `${BASE}/unisex-garment-dyed-heavyweight-t-shirt-blossom-front-6a413efe677ce.jpg`, alt: "Heavyweight tee — Blossom, front",  caption: "Heavyweight tee · Blossom, front",  width: 440 },
        { src: `${BASE}/unisex-garment-dyed-heavyweight-t-shirt-ivory-front-6a413efe699e8.jpg`,   alt: "Heavyweight tee — Ivory, front",    caption: "Heavyweight tee · Ivory, front",    width: 440 },
        { src: `${BASE}/unisex-garment-dyed-heavyweight-t-shirt-brick-back-6a56339fae29b.jpg`,   alt: "Heavyweight tee — Brick, back",     caption: "Heavyweight tee · Brick, back",     width: 440 },
        { src: `${BASE}/unisex-garment-dyed-heavyweight-t-shirt-midnight-back-6a4140472fba3.jpg`, alt: "Heavyweight tee — Midnight, back",  caption: "Heavyweight tee · Midnight, back",  width: 440 },
        { src: `${BASE}/unisex-garment-dyed-heavyweight-t-shirt-pepper-back-6a56339facf57.jpg`,   alt: "Heavyweight tee — Pepper, back",    caption: "Heavyweight tee · Pepper, back",    width: 440 },
        { src: `${BASE}/unisex-long-sleeve-tee-storm-back-6a4a9db325163.jpg`,                    alt: "Long-sleeve tee — Storm, back",     caption: "Long-sleeve tee · Storm, back",     width: 440 },
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§10 · Outcomes",
      title: "Foundation shipped. Engine running.",
      body: [
        "The brand foundation and the fifteen rules are live at braveandboundless.com. The book is published, the content engine is running, the lifecycle programs are seeded, and the AI tooling behind the CMS is drafting in the author's voice. Receipts from the year-one engagement will be published here as they clear approval.",
      ],
      align: "left",
      maxWidth: 760,
    },

    /* -- Receipts grid (placeholder-heavy) ----------------------- */
    {
      kind: "statrow",
      eyebrow: "§11 · Receipts",
      title: "What we can show. What we will.",
      items: [
        { v: "15", k: "Rules in the framework", color: "#C44A2A" },
        { v: "3",  k: "Boondock Walker practices engaged", color: "#5E2638" },
        { placeholder: true, k: "Subscriber growth (awaiting year-one release)" },
        { placeholder: true, k: "Content engine throughput (awaiting release)" },
        { placeholder: true, k: "AI-assist adoption (awaiting release)" },
      ],
    },

    /* -- Pullquote — text-only until a real quote lands ---------- */
    {
      kind: "pullquote",
      quote: "TODO — a real client quote naming the outcome, in the founder's voice.",
      by: "The Brave & Boundless engagement",
      role: "Boondock Walker × Brave & Boundless · 2026 — present",
    },
  ],
};
