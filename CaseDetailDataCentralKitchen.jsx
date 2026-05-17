/* global window */
/* Central Kitchen — case study composition.
   Content sourced from boondockwalker.com/work/central-kitchen
   Assets in assets/cases/central-kitchen/ pulled from same.

   Brand palette (lifted from the supplied logo SVG):
     Brass  #ab8f50    Ink    #201c1d
     Cream  #FBF7EE    Chalk  #F4ECDA
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
    imageAlt: "Central Kitchen — craft food entrepreneurs at work in the kitchen",
    imagePosition: "center center",
    imageBg: "#201c1d",
    scrim: "bottomOnly",
    clientLogo: `${CK_BASE}/logo.svg`,
    clientLogoHeight: 88,
    clientLogoInvert: false,
    standfirst: "Central Kitchen is a craft food business accelerator and innovation hub that empowers entrepreneurs to achieve their fullest potential. You don't just learn and move on — you join a community of peers and experienced food professionals who rally to champion your best interests, through every stage of the journey.",
  },

  blocks: [
    /* -- Logo on cream ------------------------------------------- */
    {
      kind: "fullbleed",
      src: `${CK_BASE}/logo.svg`,
      alt: "Central Kitchen — primary mark, brass + ink roundel",
      caption: { label: "fig. 01 · Logo", title: "The Central Kitchen mark — brass on ink" },
      surface: "#FBF7EE",
      height: "min(24vh, 220px)",
      fit: "contain",
      imageMaxWidth: "min(50%, 560px)",
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
      accent: "#ab8f50",
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
      accent: "#ab8f50",
    },

    /* -- Site Templates — three named pages ---------------------- */
    {
      kind: "multi",
      eyebrow: "§05 · Site Templates",
      title: "Three pages, one system.",
      cols: 3,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${CK_BASE}/page-home.jpg`,              alt: "Site template — Home",                              caption: "Home" },
        { src: `${CK_BASE}/page-bootcamp.jpg`,          alt: "Site template — Accelerator: Bootcamp",            caption: "Accelerator · Bootcamp" },
        { src: `${CK_BASE}/page-incubator-rental.jpg`,  alt: "Site template — Accelerator: Incubator / Rental",  caption: "Accelerator · Incubator + Rental" },
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
      accent: "#ab8f50",
    },
  ],
};
