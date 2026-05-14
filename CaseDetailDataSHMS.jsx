/* global window */
/* Sacred Heart Major Seminary — case study composition.
   Content sourced from boondockwalker.com/work/sacred-heart-major-seminary
   Assets in assets/cases/sacred-heart/ pulled from same.

   Placeholder palette — replace once the SHMS brand guide is in hand:
     Maroon  #8C1D40    Gold    #BF9A40
     Ink     #14100C    Chalk   #FBF7EE
*/

const SHMS_BASE = "assets/cases/sacred-heart";

window.BW_CASE_DETAIL = {
  slug: "sacred-heart-major-seminary",
  no: "06",
  client: "Sacred Heart Major Seminary",
  fullName: "Sacred Heart Major Seminary",
  year: "2023",
  industry: "Faith · Higher Education",
  pillars: ["Brand"],
  outcome: "Brand",
  duration: "Multi-year engagement",
  pull: "A century-old seminary, set on fire for a new evangelization.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №06",
    title: "Set the world on fire.",
    image: `${SHMS_BASE}/hero.jpg`,
    imageAlt: "Sacred Heart Major Seminary — campus or chapel scene",
    imagePosition: "center center",
    imageBg: "#3A0E14",
    scrim: "bottomOnly",
    clientLogo: `${SHMS_BASE}/logo.svg`,
    clientLogoHeight: 72,
    clientLogoInvert: true,
    standfirst: "Sacred Heart Major Seminary is a 100-year-old seminary and theology school in Detroit, forming priests, deacons, and lay ministers for the New Evangelization. Boondock Walker built the brand foundation, visual identity, and recruitment system that introduce its mission to a new generation of seekers.",
  },

  blocks: [
    /* -- Services / capabilities ledger ---------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Foundation + Strategy",
        "Brand Identity",
        "Visual Concept Refresh",
        "Brand Guidelines",
        "Website Design + Development",
        "Sales + Recruitment Collateral",
        "Editorial + Publication Design",
      ],
      note: "Seven capabilities engaged across a multi-year engagement.",
    },

    /* -- The Brief -- prose --------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "A 100-year mission, told in a 2020s voice.",
      body: [
        "Sacred Heart Major Seminary serves 600+ students from around the world, forming priests for the Heart of Jesus Christ the Good Shepherd, and preparing deacons and lay ecclesial ministers for the work of the New Evangelization. Its mission is centuries-deep. Its communications were lagging.",
        "The seminary engaged Boondock Walker for a Visual Concept Brand Refresh — a positioning, identity, and communications system that could carry the institution into its second century without losing the sacred ground it stands on.",
      ],
      dropCap: true,
      maxWidth: 820,
      accent: "#8C1D40",
    },

    /* -- The Move prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§03 · The Move",
      title: "Doctrine, identity, and the language of fire.",
      body: [
        "We started with strategy: audience, position, and the words a seminary uses to describe a mission that is, by definition, both ancient and urgent. The doctrine landed on a phrase the seminary's own graduates already used — set the world on fire.",
        "From the foundation we built outward: an identity refresh that honored the institution's heraldic past while opening room for contemporary application, a publication system for the seminary's mosaic of programs, and the recruitment materials that prospective seminarians and ministry students would actually open.",
      ],
      maxWidth: 820,
    },

    /* -- Brand mark — full bleed on maroon ----------------------- */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/brand-mark.png`,
      alt: "Sacred Heart Major Seminary — heraldic mark / brand identity",
      caption: { label: "fig. 02 · Heraldic Mark", title: "The Sacred Heart mark — refined for print, screen, and embroidery", fg: "#FBF7EE" },
      surface: "#8C1D40",
      height: "min(86vh, 820px)",
      fit: "contain",
      imagePadding: "60px 28px",
    },

    /* -- Brand Foundation: covers + interior spread -------------- */
    {
      kind: "multi",
      eyebrow: "§04 · Brand Foundation",
      title: "Doctrine, identity, and the documents that hold them.",
      cols: 2,
      gap: 32,
      maxWidth: 1500,
      surfaceGradient: "linear-gradient(135deg, #8C1D40 0%, #5A1227 50%, #8C1D40 100%)",
      fg: "#FBF7EE",
      padding: "120px 56px",
      items: [
        { src: `${SHMS_BASE}/brand-guidelines-covers.png`, alt: "Brand Foundation — published guidelines, opening spread", caption: "Brand Foundation · Opening spread" },
        { src: `${SHMS_BASE}/brand-guidelines-spread.png`, alt: "Brand Foundation — interior spread", caption: "Brand Foundation · Interior spread" },
      ],
    },

    /* -- Big stat callout — placeholder pending client release ---- */
    {
      kind: "stat",
      eyebrow: "Scale · Today",
      value: "615",
      label: "Students from around the world, formed for a mission that started in 1923.",
      accent: "#8C1D40",
    },

    /* -- Recruitment / collateral — full bleed ------------------- */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/recruitment-collateral.png`,
      alt: "Sacred Heart Major Seminary — recruitment + sales collateral",
      caption: { label: "fig. 05 · Recruitment", title: "Print collateral — prospectus, viewbook, program one-pagers" },
      surface: "#FBF7EE",
      height: "min(86vh, 820px)",
      fit: "contain",
      imagePadding: "32px 28px",
    },

    /* -- Website — full bleed ------------------------------------ */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/website-mockup.png`,
      alt: "shms.edu — responsive site, dual-screen mockup",
      caption: { label: "fig. 06 · Corporate Website", title: "shms.edu — designed, built, deployed" },
      surface: "#FBF7EE",
      height: "min(82vh, 760px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§07 · Outcomes",
      title: "A century in. A century forward.",
      body: [
        "A clear, contemporary brand foundation that honors a 100-year mission without trading away any of the sacred ground it stands on. A communications system that lets the seminary speak to seekers, donors, and the Archdiocese in a single voice. And a recruitment toolkit the admissions team actually leads with.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#8C1D40",
    },

    /* -- Receipts grid ------------------------------------------- */
    {
      kind: "statrow",
      eyebrow: "§08 · Receipts",
      title: "What we can show. What we will.",
      accent: "#8C1D40",
      items: [
        { v: "100",  k: "Years of mission carried forward", suffix: "+", color: "#8C1D40" },
        { v: "615",  k: "Students currently formed",                color: "#BF9A40" },
        { v: "7",    k: "Boondock Walker capabilities engaged",     color: "#14100C" },
        { placeholder: true, k: "Recruitment lift (awaiting client release)" },
        { placeholder: true, k: "Brand recognition metric (awaiting client release)" },
      ],
    },

    /* -- Pullquote — text-only until image arrives --------------- */
    {
      kind: "pullquote",
      quote: "Set the world on fire.",
      by: "SHMS commencement charge",
      role: "Boondock Walker × Sacred Heart Major Seminary",
    },
  ],
};
