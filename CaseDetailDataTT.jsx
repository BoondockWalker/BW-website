/* global window */
/* TT Electronics IMS — case study composition.
   Content sourced from boondockwalker.com/work/tt-electronics
   Assets in assets/cases/tt-electronics/ pulled from same. */

const TT_BASE = "assets/cases/tt-electronics";

window.BW_CASE_DETAIL = {
  slug: "tt-electronics",
  no: "04",
  client: "TT Electronics IMS",
  fullName: "TT Electronics — Integrated Manufacturing Services",
  year: "2018",
  industry: "Electronics Manufacturing",
  pillars: ["Brand", "Demand"],
  outcome: "Brand",
  duration: "Multi-year engagement",
  pull: "Your Vision. Integrated.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №04",
    title: "Measuring Boundaries in Infinities.",
    titleColor: "#FBF7EE",
    image: `${TT_BASE}/hero.jpg`,
    imageAlt: "TT Electronics IMS — kid astronaut profile with rocket launch double-exposure, framed by a coastal launchpad",
    imagePosition: "center center",
    imageBg: "#0F2A44",
    scrim: "bottomOnly",
    clientLogo: `${TT_BASE}/TT-logo-mono.svg`,
    clientLogoHeight: 72,
    clientLogoInvert: false,
    standfirst: "TT Electronics IMS specializes in low-volume, high-mix electronics for aerospace & defense, medical, industrial, and rail. Globally distributed, locally embedded — but lost inside the parent company's shadow. We built the brand foundation that gave IMS its own voice, its own tagline, and its own pipeline.",
  },

  blocks: [
    /* -- Services / capabilities ledger ---------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Advertising Campaigns",
        "Brand Foundation",
        "Brand Identity",
        "Brand Strategy",
        "Online Classroom",
        "Sales Collateral",
        "Tagline Development",
        "Trade Show Displays",
        "Website Design + Development",
      ],
      note: "Nine capabilities, integrated — brand foundation through demand engine.",
    },

    /* -- The Brief / problem prose -------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "A manufacturer with a global footprint — and no fingerprint of its own.",
      body: [
        "TT Electronics IMS is the integrated-manufacturing-services group of TT Electronics plc — a British parent with billion-dollar revenue and dozens of business units. IMS specializes in low-volume, high-mix electronics for aerospace & defense, medical, industrial, and rail customers. Their value prop is unusually specific: the structure and support of a large manufacturer, with the tailored, intimate approach of a specialty group.",
        "But specificity wasn't reaching the buyer. Inside the parent's shadow, IMS had no distinct positioning, no standalone identity, and no tagline that summarized why a procurement officer should pick up the phone. We were engaged to build the complete brand foundation — and clearly distinguish IMS from the parent company.",
      ],
      dropCap: true,
      maxWidth: 820,
    },

    /* -- The Move prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§03 · The Move",
      title: "Position, values, and a four-word tagline that stuck.",
      body: [
        "We started with strategy: clear position and value statements that became the core of every IMS communication — to prospects, to analysts, to the parent's own field reps trying to explain what IMS actually did.",
        "Then the tagline: \"Your Vision. Integrated.\" Four words that summarized how IMS serves as an extension of each customer's business — and a commitment to building solid, long-cycle customer relationships. To be integral to a client's success means something greater, more critical, and reflects a deeper level of commitment and alignment to their vision, today and for the long term. It brings together separate parts, creating a unified whole — making them fundamentally complete.",
        "From the foundation we built outward: brand identity, sales collateral, an international website with language translation, advertising campaigns by industry vertical, and trade-show systems for aerospace and medical shows on three continents.",
      ],
      maxWidth: 820,
    },

    /* -- Tagline reveal — own typographic moment ------------------ */
    {
      kind: "stat",
      eyebrow: "Tagline · Owned",
      value: "Your Vision. Integrated.",
      label: "Four words. One commitment. The shorthand IMS now leads with — internally and to every customer.",
      body: "A tagline isn't a slogan; it's a contract. \"Your Vision. Integrated.\" tells a procurement officer that IMS will become part of the team — not a vendor on a PO. It also gave the campaign system its anchor: every ad, every headline, every position paper now ends in the same place.",
    },

    /* -- Website mockup, full-bleed plate ------------------------- */
    {
      kind: "fullbleed",
      src: `${TT_BASE}/tt-website-showcase.jpg`,
      alt: "TT Electronics IMS responsive website — desktop, monitor, tablet, and phone showing the homepage with 'To be integral is to know that the most important things we provide aren't manufactured.'",
      caption: { label: "fig. 01 · Website", title: "Responsive corporate site — designed, built, translated, deployed in five languages" },
      surface: "#FBF7EE",
      height: "min(86vh, 820px)",
      fit: "contain",
      imagePadding: "20px clamp(20px, 4vw, 40px)",
    },

    /* -- Stat callout — the 300% traffic lift --------------------- */
    {
      kind: "stat",
      eyebrow: "Outcome · Traffic",
      value: "+300%",
      label: "Site traffic, twelve months post-launch.",
      body: "The new TT Electronics IMS site shipped with full responsive design, language translation across five regions, and a content architecture organized around the four customer industries. Within twelve months, organic traffic more than tripled — and stayed there.",
    },

    /* -- Brand Foundation Guidelines — image+text ----------------- */
    {
      kind: "imagetext",
      side: "left",
      src: `${TT_BASE}/tt-brand-guidelines-scene.jpg`,
      alt: "TT Electronics IMS Brand Foundation Guidelines — interior spreads showing 'Our Brand Position' and 'Our Brand Personality' with personality color circles",
      imageBg: "#0F3D66",
      eyebrow: "§04 · Brand Foundation",
      title: "The standard the rest of TT now measures against.",
      body: [
        "The IMS brand foundation has set the standard for every other brand within the TT Electronics family. From positioning to design, the work breathed new life into an organization that needed to define its distinguished value and voice in a crowded market space.",
        "Leadership is aligned on the key brand strategies for delivering differentiated value to key audiences. IMS now operates with a clear, compelling message — for more efficient, more consistent brand communications across every touchpoint, every region, every vertical.",
      ],
    },

    /* -- Campaign system, 4-up — one per vertical ---------------- */
    {
      kind: "multi",
      eyebrow: "§05 · Advertising Campaign",
      title: "\"To be integral is to ___.\" Four verticals. One promise.",
      cols: 2,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${TT_BASE}/tt-campaign-infinities.webp`,         alt: "Campaign — measure boundaries in infinities (Aerospace & Defense)", caption: "Aerospace & Defense · measure boundaries in infinities", shadow: true },
        { src: `${TT_BASE}/tt-campaign-not-manufactured.webp`,   alt: "Campaign — the most important things we provide aren't manufactured (Medical)", caption: "Medical · what we provide isn't manufactured", shadow: true },
        { src: `${TT_BASE}/tt-campaign-value.webp`,              alt: "Campaign — embrace value over volume (Industrial)", caption: "Industrial · value over volume", shadow: true },
        { src: `${TT_BASE}/tt-campaign-propel.webp`,             alt: "Campaign — propel partnerships beyond products (Rail / Aerospace)", caption: "Rail · partnerships beyond products", shadow: true },
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§06 · Outcomes",
      title: "Distinguished. And measurable.",
      body: [
        "A complete brand foundation that distinguished IMS from its parent company and gave it room to lead. A tagline — \"Your Vision. Integrated.\" — that the sales team uses on every call. A responsive, multilingual website that delivered a 300%+ lift in traffic within twelve months of launch.",
        "And a campaign system that gave IMS one promise — to be integral — and four ways to deliver it, vertical by vertical. The IMS work has since become the template for other TT business units.",
      ],
      align: "left",
      maxWidth: 760,
    },

    /* -- Receipts row --------------------------------------------- */
    {
      kind: "statrow",
      eyebrow: "§07 · Receipts",
      title: "What we can show. What still ships.",
      items: [
        { v: "+300", k: "Percent traffic lift, twelve months", suffix: "%", color: "#2C7DB8" },
        { v: "5",    k: "Languages on the deployed site",                   color: "#5E2638" },
        { v: "4",    k: "Vertical campaigns built off one promise",        color: "#2E4626" },
        { v: "9",    k: "Boondock Walker capabilities engaged",            color: "#C44A2A" },
        { placeholder: true, k: "Spec-in lift across IMS verticals (legacy engagement, awaiting release)" },
      ],
    },

    /* -- Pullquote ------------------------------------------------- */
    {
      kind: "pullquote",
      image: `${TT_BASE}/tt-campaign-propel.webp`,
      imageAlt: "TT Electronics campaign — propel partnerships beyond products, with double-exposure of engineers and aircraft engine",
      imageBg: "#C44A2A",
      quote: "Your Vision. Integrated.",
      by: "TT Electronics IMS tagline",
      role: "Boondock Walker × TT Electronics IMS",
    },
  ],
};

function BW_TT_NS() { return "tt-electronics"; }
