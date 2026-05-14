/* global window */
/* Maker Town — case study composition.
   Content sourced from boondockwalker.com/work/maker-town
   Assets in assets/cases/maker-town/ pulled from same.

   Brand palette (lifted from the supplied logo SVG):
     Slate  #343e52    Rust   #ae4724
     Cream  #FBF7EE    Ink    #14100C
*/

const MT_BASE = "assets/cases/maker-town";

window.BW_CASE_DETAIL = {
  slug: "maker-town",
  no: "09",
  client: "Maker Town",
  fullName: "Maker Town",
  year: "2024",
  industry: "Consumer · Mobile App",
  pillars: ["Brand"],
  outcome: "Brand",
  duration: "Launch engagement",
  pull: "Link to the local goods you love.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №09",
    title: "Link to the local goods you love.",
    image: `${MT_BASE}/hero.jpg`,
    imageAlt: "Maker Town — phone in hand, Ohio maker storefronts, local goods on display",
    imagePosition: "center center",
    imageBg: "#343e52",
    scrim: "bottomOnly",
    clientLogo: `${MT_BASE}/logo.svg`,
    clientLogoHeight: 56,
    clientLogoInvert: false,
    standfirst: "Maker Town is the gateway to exploring and celebrating the vibrant maker culture throughout Ohio — a 5-star mobile app, localized popup markets, a dynamic YouTube channel, and a steadfast commitment to promoting maker businesses, all making Ohio's makers, events, and storefronts more accessible to residents and visitors passionate about handmade goods.",
  },

  blocks: [
    /* -- Logo on cream ------------------------------------------- */
    {
      kind: "fullbleed",
      src: `${MT_BASE}/logo.svg`,
      alt: "Maker Town — primary logo lockup",
      caption: { label: "fig. 01 · Logo", title: "The Maker Town primary mark" },
      surface: "#FBF7EE",
      height: "min(36vh, 320px)",
      fit: "contain",
      imagePadding: "48px 28px",
      padTop: 64,
    },

    /* -- The Brief / problem prose ------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Creating Ohio's maker culture — from the ground up.",
      body: [
        "Maker Town needed to launch their brand and innovative product app from the ground up. They turned to Boondock Walker for a comprehensive solution — a cohesive brand identity, an intuitive mobile app interface, and engaging content to support a successful launch.",
        "The mission: make Ohio's makers, events, and storefronts more accessible to the residents and visitors who love handmade goods — and give those makers a platform that actually moves goods.",
      ],
      dropCap: true,
      maxWidth: 820,
      accent: "#ae4724",
    },

    /* -- Services / capabilities ledger -------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Identity",
        "Content Creation + Marketing",
        "Marketing Videos",
        "Mobile App Design",
        "Sales Collateral Design",
        "Social Media Marketing",
        "Website Design + Development",
      ],
      note: "Seven capabilities engaged across the launch.",
    },

    /* -- Our Approach prose -------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§04 · Our Approach",
      title: "Brand. App. Site. Story. Launch.",
      body: [
        "Boondock Walker crafted a fresh and compelling brand identity that encapsulates the essence of Ohio's maker culture, ensuring Maker Town stands out in the marketplace. We developed a user-friendly, visually appealing interface for the Maker Town mobile app, making it easy for users to discover makers, events, and storefronts — and built a responsive, visually striking website that serves as the central hub for Maker Town's online presence.",
        "We helped Maker Town successfully launch their brand and app, establishing a strong market presence and enhancing the visibility of Ohio's maker community. The work positioned Maker Town as the premier platform for exploring and supporting local maker culture in Ohio.",
      ],
      maxWidth: 820,
      accent: "#ae4724",
    },

    /* -- Brand in context — three phone-in-hand shots ----------- */
    {
      kind: "multi",
      eyebrow: "§05 · Brand in Context",
      title: "Made for the hand it's discovered in.",
      cols: 3,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${MT_BASE}/phone-paint.jpg`, alt: "Maker Town app held against a painted workshop wall",  caption: "Paint" },
        { src: `${MT_BASE}/phone-plaid.jpg`, alt: "Maker Town app held against a plaid flannel",          caption: "Plaid" },
        { src: `${MT_BASE}/phone-slate.jpg`, alt: "Maker Town app held against slate / studio surface",   caption: "Slate" },
      ],
    },

    /* -- Mobile App — iOS carousel (7 screens) ------------------ */
    {
      kind: "slider",
      eyebrow: "§06 · Mobile App · iPhone",
      title: "Seven screens, one Maker Town.",
      surface: "#FBF7EE",
      slideHeight: 640,
      items: [
        { src: `${MT_BASE}/iOS-6.5-home.jpg`,      alt: "Maker Town iOS — Home",      caption: "fig. 06.1 · Home",      width: 320, bg: "#FBF7EE" },
        { src: `${MT_BASE}/iOS-6.5-discover.jpg`,  alt: "Maker Town iOS — Discover",  caption: "fig. 06.2 · Discover",  width: 320, bg: "#FBF7EE" },
        { src: `${MT_BASE}/iOS-6.5-makers.jpg`,    alt: "Maker Town iOS — Makers",    caption: "fig. 06.3 · Makers",    width: 320, bg: "#FBF7EE" },
        { src: `${MT_BASE}/iOS-6.5-details.jpg`,   alt: "Maker Town iOS — Details",   caption: "fig. 06.4 · Details",   width: 320, bg: "#FBF7EE" },
        { src: `${MT_BASE}/iOS-6.5-events.jpg`,    alt: "Maker Town iOS — Events",    caption: "fig. 06.5 · Events",    width: 320, bg: "#FBF7EE" },
        { src: `${MT_BASE}/iOS-6.5-favorites.jpg`, alt: "Maker Town iOS — Favorites", caption: "fig. 06.6 · Favorites", width: 320, bg: "#FBF7EE" },
        { src: `${MT_BASE}/iOS-6.5-search.jpg`,    alt: "Maker Town iOS — Search",    caption: "fig. 06.7 · Search",    width: 320, bg: "#FBF7EE" },
      ],
    },

    /* -- Tablet App — iPad carousel (6 screens) ----------------- */
    {
      kind: "slider",
      eyebrow: "§07 · Tablet · iPad",
      title: "The system, scaled to 12.9 inches.",
      surface: "#FBF7EE",
      slideHeight: 640,
      items: [
        { src: `${MT_BASE}/iPad-12.9-home.jpg`,      alt: "Maker Town iPad — Home",      caption: "fig. 07.1 · Home",      width: 720, bg: "#FBF7EE" },
        { src: `${MT_BASE}/iPad-12.9-discover.jpg`,  alt: "Maker Town iPad — Discover",  caption: "fig. 07.2 · Discover",  width: 720, bg: "#FBF7EE" },
        { src: `${MT_BASE}/iPad-12.9-details.jpg`,   alt: "Maker Town iPad — Details",   caption: "fig. 07.3 · Details",   width: 720, bg: "#FBF7EE" },
        { src: `${MT_BASE}/iPad-12.9-events.jpg`,    alt: "Maker Town iPad — Events",    caption: "fig. 07.4 · Events",    width: 720, bg: "#FBF7EE" },
        { src: `${MT_BASE}/iPad-12.9-favorites.jpg`, alt: "Maker Town iPad — Favorites", caption: "fig. 07.5 · Favorites", width: 720, bg: "#FBF7EE" },
        { src: `${MT_BASE}/iPad-12.9-search.jpg`,    alt: "Maker Town iPad — Search",    caption: "fig. 07.6 · Search",    width: 720, bg: "#FBF7EE" },
      ],
    },

    /* -- Website — carousel of 5 screens ------------------------ */
    {
      kind: "slider",
      eyebrow: "§08 · Website",
      title: "Five web views, one central hub.",
      surface: "#FBF7EE",
      slideHeight: 620,
      items: [
        { src: `${MT_BASE}/website-1.png`, alt: "Maker Town website — view 1", caption: "fig. 08.1 · Site · 01", width: 1100, bg: "#FBF7EE" },
        { src: `${MT_BASE}/website-2.png`, alt: "Maker Town website — view 2", caption: "fig. 08.2 · Site · 02", width: 1100, bg: "#FBF7EE" },
        { src: `${MT_BASE}/website-3.png`, alt: "Maker Town website — view 3", caption: "fig. 08.3 · Site · 03", width: 1100, bg: "#FBF7EE" },
        { src: `${MT_BASE}/website-4.png`, alt: "Maker Town website — view 4", caption: "fig. 08.4 · Site · 04", width: 1100, bg: "#FBF7EE" },
        { src: `${MT_BASE}/website-5.png`, alt: "Maker Town website — view 5", caption: "fig. 08.5 · Site · 05", width: 1100, bg: "#FBF7EE" },
      ],
    },

    /* -- Social Campaign — 3 posts ------------------------------ */
    {
      kind: "multi",
      eyebrow: "§09 · Social Campaign",
      title: "Link to the local. Three posts. One voice.",
      cols: 3,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${MT_BASE}/social-1.jpg`, alt: "Maker Town social post — Link to Local · 01", caption: "Post · 01" },
        { src: `${MT_BASE}/social-2.jpg`, alt: "Maker Town social post — Link to Local · 02", caption: "Post · 02" },
        { src: `${MT_BASE}/social-3.jpg`, alt: "Maker Town social post — Link to Local · 03", caption: "Post · 03" },
      ],
    },

    /* -- A maker, named ----------------------------------------- */
    {
      kind: "fullbleed",
      src: `${MT_BASE}/maker-susie-frazier.jpg`,
      alt: "Featured maker — Susie Frazier, Ohio artist + sculptor",
      caption: { label: "fig. 10 · A Maker", title: "Susie Frazier — one of the makers Maker Town puts on the map" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "0",
      padTop: 0,
      padBottom: 0,
    },

    /* -- Brand Overview sheet ----------------------------------- */
    {
      kind: "fullbleed",
      src: `${MT_BASE}/brand-overview.png`,
      alt: "Maker Town brand overview — the visual system at a glance",
      caption: { label: "fig. 11 · Brand Overview", title: "The system, at a glance" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "clamp(40px, 6vw, 80px) clamp(20px, 5vw, 56px)",
      padTop: 0,
      padBottom: 0,
    },

    /* -- Outcomes prose ----------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§12 · Outcomes",
      title: "Ohio's maker culture, in one place.",
      body: [
        "Brand, app, and site launched together — Maker Town now has the platform and the audience it needs to keep growing Ohio's maker community, one popup, one storefront, one handmade good at a time.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#ae4724",
    },
  ],
};
