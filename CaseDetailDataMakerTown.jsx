/* global window */
/* Maker Town — case study composition.
   Content sourced from boondockwalker.com/work/maker-town
   Assets in assets/cases/maker-town/ pulled from same.

   Working palette (pending the brand SVG):
     Teal   #1D4D5A    Amber  #D88B3F
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
    imageAlt: "Maker Town — Ohio makers, handmade goods, popup markets, mobile app in hand",
    imagePosition: "center center",
    imageBg: "#1D4D5A",
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
      accent: "#D88B3F",
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
      accent: "#D88B3F",
    },

    /* -- Mobile App — 6 iOS screens ------------------------------ */
    {
      kind: "multi",
      eyebrow: "§05 · Mobile App",
      title: "Six screens, one Maker Town.",
      cols: 3,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${MT_BASE}/app-home.jpg`,      alt: "Maker Town iOS — Home",      caption: "Home" },
        { src: `${MT_BASE}/app-discover.jpg`,  alt: "Maker Town iOS — Discover",  caption: "Discover" },
        { src: `${MT_BASE}/app-details.jpg`,   alt: "Maker Town iOS — Details",   caption: "Details" },
        { src: `${MT_BASE}/app-favorites.jpg`, alt: "Maker Town iOS — Favorites", caption: "Favorites" },
        { src: `${MT_BASE}/app-makers.jpg`,    alt: "Maker Town iOS — Makers",    caption: "Makers" },
        { src: `${MT_BASE}/app-search.jpg`,    alt: "Maker Town iOS — Search",    caption: "Search" },
      ],
    },

    /* -- Website — 5 screens, 3-up grid -------------------------- */
    {
      kind: "multi",
      eyebrow: "§06 · Website",
      title: "The Maker Town website — five views.",
      cols: 3,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${MT_BASE}/website-1.webp`, alt: "Maker Town website — screen 1", caption: "Site · 01" },
        { src: `${MT_BASE}/website-2.webp`, alt: "Maker Town website — screen 2", caption: "Site · 02" },
        { src: `${MT_BASE}/website-3.webp`, alt: "Maker Town website — screen 3", caption: "Site · 03" },
        { src: `${MT_BASE}/website-4.webp`, alt: "Maker Town website — screen 4", caption: "Site · 04" },
        { src: `${MT_BASE}/website-5.webp`, alt: "Maker Town website — screen 5", caption: "Site · 05" },
      ],
    },

    /* -- Outcomes prose ------------------------------------------ */
    {
      kind: "prose",
      eyebrow: "§07 · Outcomes",
      title: "Ohio's maker culture, in one place.",
      body: [
        "Brand, app, and site launched together — Maker Town now has the platform and the audience it needs to keep growing Ohio's maker community, one popup, one storefront, one handmade good at a time.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#D88B3F",
    },
  ],
};
