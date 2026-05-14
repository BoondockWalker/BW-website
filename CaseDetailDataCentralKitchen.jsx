/* global window */
/* Central Kitchen — case study composition.
   Content sourced from boondockwalker.com/work/central-kitchen
   Assets in assets/cases/central-kitchen/ pulled from same.

   Palette (working set — pending the brand SVG):
     Sage   #2E3F26     Clay   #B8531E
     Cream  #FBF7EE     Ink    #14100C
*/

const CK_BASE = "assets/cases/central-kitchen";

window.BW_CASE_DETAIL = {
  slug: "central-kitchen",
  no: "08",
  client: "Central Kitchen",
  fullName: "Central Kitchen",
  year: "2024",
  industry: "Food · Education",
  pillars: ["Brand"],
  outcome: "Brand",
  duration: "Multi-phase engagement",
  pull: "Where craft food concepts take off.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №08",
    title: "Where craft food concepts take off.",
    image: `${CK_BASE}/hero.jpg`,
    imageAlt: "Central Kitchen — craft food entrepreneurs in the kitchen, hands at work",
    imagePosition: "center center",
    imageBg: "#2E3F26",
    scrim: "bottomOnly",
    clientLogo: `${CK_BASE}/logo.svg`,
    clientLogoHeight: 72,
    clientLogoInvert: false,
    standfirst: "Central Kitchen is a craft food business accelerator and innovation hub that empowers entrepreneurs to achieve their fullest potential. You don't just learn and move on — you join a community of peers and experienced food professionals who rally to champion your best interests, through every stage of the journey.",
  },

  blocks: [
    /* -- Logo on cream ------------------------------------------- */
    {
      kind: "fullbleed",
      src: `${CK_BASE}/logo.svg`,
      alt: "Central Kitchen — primary logo",
      caption: { label: "fig. 01 · Logo", title: "The Central Kitchen mark" },
      surface: "#FBF7EE",
      height: "min(40vh, 360px)",
      fit: "contain",
      imagePadding: "48px 28px",
      padTop: 64,
    },

    /* -- The Brief / problem prose ------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Build the brand of a craft-food accelerator — and the classroom that scales it.",
      body: [
        "Central Kitchen is a craft food business accelerator and innovation hub that empowers entrepreneurs to achieve their fullest potential. With Central Kitchen, you don't just learn and move on — you join a community of peers and experienced food professionals who rally together to champion your best interests, today and through every stage of your journey.",
        "Why? Because when craft food entrepreneurs find success, big things happen. They create jobs, boost the economy, and lift the entire craft foods community.",
      ],
      dropCap: true,
      maxWidth: 820,
      accent: "#B8531E",
    },

    /* -- Services / capabilities ledger -------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Strategy",
        "Online Classroom",
        "Website Design + Development",
      ],
      note: "Three capabilities engaged, in partnership with our friends at Muse.",
    },

    /* -- Our Approach prose -------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§04 · Our Approach",
      title: "A brand that mentors. A classroom that scales.",
      body: [
        "Central Kitchen engaged Boondock Walker and our friends at Muse to develop their brand strategy, a new company website, and an online \"Craft Food Classroom\" — together giving Central Kitchen a unified place to teach, recruit, and grow the network.",
        "We worked with Central Kitchen leadership to translate their accelerator's hands-on, peer-to-peer model into a brand voice and visual system that read as warm, expert, and approachable — equal parts mentor and community. Muse partnered on the website build so the strategy, story, and classroom landed in a single end-to-end experience.",
      ],
      maxWidth: 820,
      accent: "#B8531E",
    },

    /* -- Website slider — 5 screens ------------------------------ */
    {
      kind: "slider",
      eyebrow: "§05 · Website",
      title: "The Central Kitchen site — five screens.",
      surface: "#FBF7EE",
      slideHeight: 620,
      items: [
        { src: `${CK_BASE}/website-1.webp`, alt: "Central Kitchen website — screen 1", caption: "fig. 05.1 · Home",       bg: "#FBF7EE", tilePadding: "0" },
        { src: `${CK_BASE}/website-2.webp`, alt: "Central Kitchen website — screen 2", caption: "fig. 05.2 · Program",    bg: "#FBF7EE", tilePadding: "0" },
        { src: `${CK_BASE}/website-3.webp`, alt: "Central Kitchen website — screen 3", caption: "fig. 05.3 · Classroom",  bg: "#FBF7EE", tilePadding: "0" },
        { src: `${CK_BASE}/website-4.webp`, alt: "Central Kitchen website — screen 4", caption: "fig. 05.4 · Community",  bg: "#FBF7EE", tilePadding: "0" },
        { src: `${CK_BASE}/website-5.webp`, alt: "Central Kitchen website — screen 5", caption: "fig. 05.5 · Apply",      bg: "#FBF7EE", tilePadding: "0" },
      ],
    },

    /* -- Outcomes prose ------------------------------------------ */
    {
      kind: "prose",
      eyebrow: "§06 · Outcomes",
      title: "A platform for the next generation of craft food.",
      body: [
        "Central Kitchen now has a brand foundation, a public-facing site, and an online classroom that work together — recruiting craft food entrepreneurs, teaching them what they need to launch and scale, and connecting them to a community of mentors and peers who keep showing up for them after the program ends.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#B8531E",
    },
  ],
};
