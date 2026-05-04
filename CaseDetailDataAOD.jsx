/* global window */
/* Archdiocese of Detroit — case study composition.
   Content sourced from boondockwalker.com/work/archdiocese-of-detroit
   Assets in assets/cases/archdiocese-detroit/ pulled from same. */

const BASE = "assets/cases/archdiocese-detroit";

window.BW_CASE_DETAIL = {
  slug: "archdiocese-of-detroit",
  no: "02",
  client: "Archdiocese of Detroit",
  fullName: "Roman Catholic Archdiocese of Detroit",
  year: "2017",
  industry: "Faith · Non-Profit",
  pillars: ["Brand"],
  outcome: "Brand",
  duration: "Multi-year engagement",
  pull: "A 200-year institution, refit for a missionary century.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Specimen №02",
    title: "Unleash the Gospel.",
    image: `${BASE}/hero.jpg`,
    imageAlt: "Archdiocese of Detroit — Unleash the Gospel cover",
    imagePosition: "center center",
    imageBg: "#3A0E14",
    clientLogo: `${BASE}/logo.png`,
    clientLogoHeight: 96,
    clientLogoInvert: true,
    standfirst: "The Archdiocese of Detroit is the spiritual home for nearly 1.3 million Catholics across six counties in southeast Michigan — a 190-year-old institution that, in 2017, was called to reimagine itself as a missionary movement.",
  },

  blocks: [
    /* -- Services / technical box -------------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Foundation + Strategy",
        "Brand Identity",
        "Heraldic Mark · Coat of Arms",
        "Brand Guidelines",
        "Typography + Color System",
        "Editorial + Publication Design",
        "Pastoral Letter Design",
        "Sales + Sacramental Collateral",
        "Website Design + Development",
        "Campaign + Wayfinding",
      ],
      note: "Ten capabilities engaged across a multi-year engagement.",
    },

    /* -- The Brief -- prose --------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Translating a pastoral letter into a visible identity.",
      body: [
        "In June 2017, Archbishop Allen Vigneron published Unleash the Gospel — a pastoral letter calling on the people of the Archdiocese of Detroit to embrace a new identity as joyful missionary disciples of Christ. The letter laid out a generational shift in how the local Church would speak, gather, and serve.",
        "The Archdiocese asked Boondock Walker to translate that spiritual mission into a visible one — a brand foundation and identity system that could carry the call across 200+ parishes, dozens of schools, and every printed page that left the chancery. The work needed to honor 190 years of heritage while opening the door to a missionary century ahead.",
        "We began with strategy: language, voice, hierarchy, and the doctrine of how a 200-year-old institution introduces itself in 2017. From there, identity — heraldic mark, color system, typography, and the printed and digital surfaces that hold them.",
      ],
      dropCap: true,
      maxWidth: 820,
    },

    /* -- Big stat callout — population reach ---------------------- */
    {
      kind: "stat",
      eyebrow: "Reach · Six-county region",
      numeric: 1.3,
      suffix: "M+",
      label: "Catholics across southeast Michigan reached through a unified identity system, from parish bulletin to chancery website.",
    },

    /* -- Coat of Arms / Heraldic Mark — full bleed --------------- */
    {
      kind: "fullbleed",
      src: `${BASE}/coat-of-arms.png`,
      alt: "Archdiocese of Detroit coat of arms — heraldic mark",
      caption: { label: "fig. 02 · Heraldic Mark", title: "Coat of arms — refined for print, screen, and embroidery" },
      surface: "#FBF7EE",
      height: "min(90vh, 875px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },

    /* -- Brand Foundation: guidelines covers + spread ------------ */
    {
      kind: "multi",
      eyebrow: "§03 · Brand Foundation",
      title: "Doctrine, identity, and the documents that hold them.",
      cols: 2,
      gap: 48,
      surfaceGradient: "linear-gradient(135deg, #5E1A1F 0%, #3A0E14 50%, #5E1A1F 100%)",
      fg: "#FBF7EE",
      padding: "120px 56px",
      items: [
        { src: `${BASE}/brand-guidelines-covers.png`, alt: "Brand Foundation + Brand Identity guidelines covers", caption: "Brand Foundation · Brand Identity — published guidelines" },
        { src: `${BASE}/brand-guidelines-spread.png`, alt: "Brand Foundation interior spread — voice and values", caption: "Brand Foundation · interior spread — Mission / Voice / Values" },
      ],
    },

    /* -- Pastoral Letter — image + text split -------------------- */
    {
      kind: "imagetext",
      side: "left",
      src: `${BASE}/pastoral-letter.png`,
      alt: "Unleash the Gospel pastoral letter — printed edition",
      imageBg: "#FBF7EE",
      eyebrow: "§04 · Pastoral Letter",
      title: "Designing a 200-year document.",
      body: [
        "Boondock Walker designed and produced the printed edition of Unleash the Gospel — the pastoral letter that anchored the entire movement. Typography, paper, color, and binding were chosen as if the document would still be on a shelf in 2117.",
        "We worked alongside the Archdiocese's in-plant printing team, testing the recommended palette across uncoated and coated stocks until the burgundy reproduced the same in a parish bulletin as it did on the cover of the letter itself. The result is a document that reads as both contemporary and consequential.",
      ],
    },

    /* -- Editorial / Magazine — Unleash the Gospel quarterly ----- */
    {
      kind: "multi",
      eyebrow: "§05 · Editorial",
      title: "Unleash the Gospel — the quarterly that carried the movement.",
      cols: 4,
      gap: 28,
      items: [
        { src: `${BASE}/magazine-cover-1.jpg`, alt: "Unleash the Gospel magazine cover — Issue 01", caption: "Issue 01 · Launch", shadow: true },
        { src: `${BASE}/magazine-cover-2.jpg`, alt: "Unleash the Gospel magazine cover — Issue 02", caption: "Issue 02 · The Synod", shadow: true },
        { src: `${BASE}/magazine-cover-3.jpg`, alt: "Unleash the Gospel magazine cover — Issue 03", caption: "Issue 03 · Families on Mission", shadow: true },
        { src: `${BASE}/magazine-cover-4.jpg`, alt: "Unleash the Gospel magazine cover — Issue 04", caption: "Issue 04 · The Eucharist", shadow: true },
      ],
    },

    /* -- Website — responsive build ------------------------------ */
    {
      kind: "multi",
      eyebrow: "§06 · Digital Platform",
      title: "AOD.org and UnleashTheGospel.org — responsive build.",
      cols: 2,
      gap: 16,
      maxWidth: 1480,
      padding: "120px 16px",
      items: [
        { src: `${BASE}/site-laptop-1.png`, alt: "Archdiocese of Detroit website — homepage", caption: "AOD.org · Homepage" },
        { src: `${BASE}/site-laptop-2.png`, alt: "Unleash the Gospel platform — landing", caption: "UnleashTheGospel.org · Movement landing" },
      ],
    },

    /* -- Sacramental + Collateral — full bleed ------------------- */
    {
      kind: "fullbleed",
      src: `${BASE}/collateral-suite.png`,
      alt: "Archdiocese collateral suite — sacramental certificates, parish bulletins, signage",
      caption: { label: "fig. 06 · Collateral", title: "Sacramental certificates, parish bulletins, and chancery stationery" },
      surface: "#FBF7EE",
      height: "min(90vh, 875px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },

    /* -- Campaign — synod and missionary movement ---------------- */
    {
      kind: "slider",
      eyebrow: "§07 · Campaign",
      title: "\"Joyful Missionary Disciples\" — the call, made visible.",
      slideHeight: 560,
      items: [
        { src: `${BASE}/campaign-synod.jpg`, alt: "Campaign — Synod 16", caption: "Synod 16 · Convocation" },
        { src: `${BASE}/campaign-families.jpg`, alt: "Campaign — Families on Mission", caption: "Families on Mission" },
        { src: `${BASE}/campaign-youth.jpg`, alt: "Campaign — Youth & Young Adult", caption: "Youth · Young adult ministry" },
        { src: `${BASE}/campaign-eucharist.jpg`, alt: "Campaign — Eucharistic revival", caption: "Eucharistic Revival" },
        { src: `${BASE}/campaign-parish.jpg`, alt: "Campaign — Families of Parishes", caption: "Families of Parishes" },
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§08 · Outcomes",
      title: "A movement the faithful could carry.",
      body: [
        "The Unleash the Gospel identity has carried the Archdiocese through a province-wide synod, a parish-restructuring initiative, a Eucharistic revival, and the day-to-day work of 1.3 million Catholics living out their faith. The mark, the color, the voice — they show up consistently from the chancery to the smallest mission church.",
      ],
      align: "left",
      maxWidth: 760,
    },

    /* -- Receipts grid ------------------------------------------- */
    {
      kind: "statrow",
      eyebrow: "§09 · Receipts",
      title: "What we can show. What we will.",
      items: [
        { v: "1.3M", k: "Catholics reached, six-county region", color: "#5E1A1F" },
        { v: "200+", k: "Parishes adopting the identity system", color: "#C8962B" },
        { v: "10",   k: "Boondock Walker capabilities engaged", color: "#2E4626" },
        { placeholder: true, k: "Mass attendance lift (awaiting client release)" },
        { placeholder: true, k: "Digital engagement metric (awaiting client release)" },
      ],
    },

    /* -- Pullquote ------------------------------------------------- */
    {
      kind: "pullquote",
      image: `${BASE}/quote-image.jpg`,
      imageAlt: "Unleash the Gospel — printed pastoral letter, detail",
      imageBg: "#3A0E14",
      quote: "A 200-year-old institution introduced itself again, and the people it serves recognized it on the first read.",
      by: "The Archdiocese engagement",
      role: "Boondock Walker × Archdiocese of Detroit · 2017 — present",
    },
  ],
};
