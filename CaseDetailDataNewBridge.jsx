/* global window */
/* NewBridge Cleveland Center for Arts & Technology — case study composition.
   Content sourced from boondockwalker.com/work/newbridge
   Assets in assets/cases/newbridge/ pulled from same.

   Brand palette (lifted from the mosaic logo SVG — 64 colors total):
     Navy   #00245d    Cyan   #0093d0
     Cream  #FBF7EE    Ink    #14100C
   The mosaic itself is the visual hook — the case-level chrome stays
   restrained and lets the assets carry the spectrum.
*/

const NB_BASE = "assets/cases/newbridge";

window.BW_CASE_DETAIL = {
  slug: "newbridge-cleveland",
  no: "10",
  client: "NewBridge Cleveland",
  fullName: "NewBridge Cleveland Center for Arts & Technology",
  year: "2010",
  industry: "Education · Workforce Development",
  pillars: ["Brand"],
  outcome: "Brand",
  duration: "Multi-year engagement",
  pull: "Bridging people to their potential.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №10",
    title: "Bridging people to their potential.",
    image: `${NB_BASE}/hero.png`,
    imageAlt: "NewBridge Cleveland — mosaic identity over the dramatic downtown space",
    imagePosition: "center center",
    imageBg: "#00245d",
    scrim: "bottomOnly",
    clientLogo: `${NB_BASE}/logo-wht.svg`,
    clientLogoHeight: 64,
    clientLogoInvert: false,
    standfirst: "NewBridge Cleveland Center for Arts & Technology was created to serve the Cleveland community by establishing a dual vocation and education center in the heart of the city — career training for displaced and disadvantaged workers, and the arts as a means to motivate underserved urban youth to stay in school and pursue higher education. NewBridge is modeled after Pittsburgh's Manchester-Bidwell, a 40-year-old program founded by visionary and MacArthur Fellow Bill Strickland.",
  },

  blocks: [
    /* -- Logo on cream ------------------------------------------- */
    {
      kind: "fullbleed",
      src: `${NB_BASE}/logo.svg`,
      alt: "NewBridge Cleveland — mosaic logo lockup",
      caption: { label: "fig. 01 · Logo", title: "The NewBridge mark — a mosaic identity for a mosaic mission" },
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
      title: "Building a brand model for a local center with a national vision.",
      body: [
        "Starting with no staff, no students, no name, and no building, Boondock Walker was chosen by the Cleveland Foundation at project inception to guide the naming, identity, and brand development of NewBridge Cleveland.",
        "Our objectives for the brand were simple: reflect the vision to create an organization that teaches, motivates, and — most importantly — inspires.",
      ],
      dropCap: true,
      maxWidth: 820,
      accent: "#0093d0",
    },

    /* -- Services / capabilities ledger -------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Naming",
        "Tagline",
        "Brand Foundation + Strategy",
        "Brand Identity",
        "Market Research",
        "Sales Collateral Design",
        "Content Creation + Marketing",
        "Website Design + Development",
      ],
      note: "Eight capabilities engaged — from naming the center to launching the site.",
    },

    /* -- Our Approach prose -------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§04 · Our Approach",
      title: "From 119 names to a mosaic of one.",
      body: [
        "A period of extensive research and discovery led to a presentation of 119 names and 22 taglines, resulting in a name that is not only a nod to the beautiful urban elements of our city, but a symbol for the center's mission in connecting people to their potential.",
        "From that metaphor, the symbol, tagline, and color palette evolved as part of a dynamic visual style — with a mosaic grid system now incorporated into print collateral, the website, and physical elements of the dramatic space in downtown Cleveland.",
        "We developed the NewBridge website not only as an introduction of the brand to the community, but as a tool for funders to make donations, potential students and instructors to exchange information, and to highlight student work.",
      ],
      maxWidth: 820,
      accent: "#0093d0",
    },

    /* -- Brand Foundation — one large presentation spread, centered --- */
    {
      kind: "floating",
      eyebrow: "§05 · Brand Foundation",
      title: "The doctrine, on the wall.",
      src: `${NB_BASE}/presentation-p14.png`,
      alt: "NewBridge brand presentation — interior spread from the 11×17 deck",
      caption: "Brand presentation · interior spread",
      surface: "#FBF7EE",
      maxWidth: 1280,
      maxHeight: 900,
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
    },

    /* -- Brochure spreads ---------------------------------------- */
    {
      kind: "multi",
      eyebrow: "§06 · Brochure",
      title: "Print collateral — the mosaic, in the hand.",
      cols: 3,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${NB_BASE}/brochure-2.jpg`, alt: "NewBridge brochure — spread, page 2", caption: "Brochure · 02" },
        { src: `${NB_BASE}/brochure-3.jpg`, alt: "NewBridge brochure — spread, page 3", caption: "Brochure · 03" },
        { src: `${NB_BASE}/brochure-9.jpg`, alt: "NewBridge brochure — spread, page 9", caption: "Brochure · 09" },
      ],
    },

    /* -- Banners — four, side-by-side ---------------------------- */
    {
      kind: "multi",
      eyebrow: "§07 · Banners",
      title: "Mosaic, scaled to the room.",
      cols: 4,
      gap: 16,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${NB_BASE}/banner-1.jpg`, alt: "NewBridge banner — design 1", caption: "Banner · 01" },
        { src: `${NB_BASE}/banner-2.jpg`, alt: "NewBridge banner — design 2", caption: "Banner · 02" },
        { src: `${NB_BASE}/banner-3.jpg`, alt: "NewBridge banner — design 3", caption: "Banner · 03" },
        { src: `${NB_BASE}/banner-4.jpg`, alt: "NewBridge banner — design 4", caption: "Banner · 04" },
      ],
    },

    /* -- Website — 4 site pages, tightened slider --------------- */
    {
      kind: "slider",
      eyebrow: "§08 · Website",
      title: "The site — community front door, funding tool, student stage.",
      surface: "#FBF7EE",
      slideHeight: 880,
      gap: 4,
      captionGap: 8,
      items: [
        { src: `${NB_BASE}/site-home-1.png`,  alt: "NewBridge website — Home (version 1)", caption: "fig. 08.1 · Home",         width: 1500, bg: "#FBF7EE" },
        { src: `${NB_BASE}/site-home-3.png`,  alt: "NewBridge website — Home (version 3)", caption: "fig. 08.2 · Home · alt",   width: 1500, bg: "#FBF7EE" },
        { src: `${NB_BASE}/site-history.png`, alt: "NewBridge website — History",         caption: "fig. 08.3 · History",       width: 1500, bg: "#FBF7EE" },
        { src: `${NB_BASE}/site-gallery.png`, alt: "NewBridge website — Gallery",         caption: "fig. 08.4 · Gallery",       width: 1500, bg: "#FBF7EE" },
      ],
    },

    /* -- Outcomes prose ----------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§09 · Outcomes",
      title: "A name, a metaphor, and a system that holds it all.",
      body: [
        "NewBridge launched with a name, a tagline, an identity, a brochure, a website, and a graphic system that now runs through print collateral and the physical space downtown — a brand built to teach, motivate, and inspire, before the doors even opened.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#0093d0",
    },
  ],
};
