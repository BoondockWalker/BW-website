/* global window */
/* Archdiocese of Detroit — case study composition.
   Content sourced from boondockwalker.com/work/archdiocese-of-detroit
   Assets in assets/cases/archdiocese-detroit/ pulled from same.

   AOD palette (lifted from the official wordmark SVG):
     Navy   #0c3b60    Red    #a93439
     Gold   #ca982f    Stone  #6299af
*/

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
    imageAlt: "Archdiocese of Detroit — brand book cover, red and gold",
    imagePosition: "center center",
    imageBg: "#a93439",
    scrim: "bottomOnly",
    /* No clientLogo overlay — the brand book cover in the hero photo already
       carries the full-color AOD wordmark; rendering a second copy on top
       (inverted to white) was hiding the printed one. */
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
      ],
      note: "Six core capabilities engaged across a multi-year engagement.",
    },

    /* -- The Brief -- prose --------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Translating a pastoral letter into a visible identity.",
      body: [
        "In June 2017, Archbishop Allen Vigneron published Unleash the Gospel — a pastoral letter calling on the people of the Archdiocese of Detroit to embrace a new identity as joyful missionary disciples of Christ. The letter laid out a generational shift in how the local Church would speak, gather, and serve.",
        "The Archdiocese asked Boondock Walker to translate that spiritual mission into a visible one — a brand foundation and identity system that could carry the call across 200+ parishes, dozens of schools, and every printed page that left the chancery. The work needed to honor 190 years of heritage while opening the door to a missionary century ahead.",
        "We began with strategy: language, voice, hierarchy, and the doctrine of how a 200-year-old institution introduces itself in 2017. From there, identity — heraldic mark, color system, typography, and the printed surfaces that hold them.",
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
      label: "Catholics across southeast Michigan reached through a unified identity system, from parish bulletin to chancery letterhead.",
      accent: "#a93439",
    },

    /* -- Coat of Arms — full bleed on navy ----------------------- */
    {
      kind: "fullbleed",
      src: `${BASE}/coat-of-arms.webp`,
      alt: "Archbishop Vigneron's coat of arms — full ecclesiastical heraldry",
      caption: { label: "fig. 02 · Heraldic Mark", title: "Aspicientes in Jesum — the archbishop's coat of arms", fg: "#FBF7EE" },
      surface: "#0c3b60",
      height: "min(92vh, 920px)",
      fit: "contain",
      imagePadding: "60px 28px",
    },

    /* -- Marks system — three-up: logo, emblem, archdiocese seal - */
    {
      kind: "multi",
      eyebrow: "§03 · Marks System",
      title: "Three marks, one voice.",
      cols: 3,
      gap: 32,
      surface: "#FBF7EE",
      padding: "120px 56px",
      items: [
        { src: `${BASE}/logo-fullcolor.webp`, alt: "Archdiocese of Detroit primary logo — mitred shield", caption: "Primary Logo · Mitred Shield", bg: "#FBF7EE", aspect: "1 / 1", tilePadding: "32px", fit: "contain" },
        { src: `${BASE}/emblem.webp`,         alt: "Unleash the Gospel emblem — circular badge", caption: "Emblem · Unleash the Gospel", bg: "#FBF7EE", aspect: "1 / 1", tilePadding: "32px", fit: "contain" },
        { src: `${BASE}/coat-of-arms.webp`,   alt: "Coat of Arms — Aspicientes in Jesum", caption: "Heraldic Mark · Coat of Arms", bg: "#FBF7EE", aspect: "1 / 1", tilePadding: "32px", fit: "contain" },
      ],
    },

    /* -- Brand Foundation: covers + interior spread -------------- */
    {
      kind: "multi",
      eyebrow: "§04 · Brand Foundation",
      title: "Doctrine, identity, and the documents that hold them.",
      cols: 2,
      gap: 32,
      maxWidth: 1500,
      surfaceGradient: "linear-gradient(135deg, #0c3b60 0%, #082841 50%, #0c3b60 100%)",
      fg: "#FBF7EE",
      padding: "120px 56px",
      items: [
        { src: `${BASE}/brand-guidelines-covers.png`, alt: "Brand Foundation — published guidelines, opening spread", caption: "Brand Foundation · Opening spread" },
        { src: `${BASE}/brand-guidelines-spread.png`, alt: "Visual Elements — Saint Anne, interior spread", caption: "Visual Elements · Saint Anne" },
      ],
    },

    /* -- Brand system pages: emblem doctrine + color palette ----- */
    {
      kind: "multi",
      eyebrow: "§05 · Identity System",
      title: "Marks, color, and the rules that keep them honest.",
      cols: 2,
      gap: 48,
      surface: "#FBF7EE",
      padding: "120px 56px",
      items: [
        { src: `${BASE}/brand-guidelines-emblem.png`, alt: "The Emblem — usage and reversed treatment", caption: "Brand Identity · The Emblem" },
        { src: `${BASE}/brand-guidelines-color.png`,  alt: "Secondary Marks and Color Palette", caption: "Brand Identity · Marks + Color" },
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§06 · Outcomes",
      title: "A movement the faithful could carry.",
      body: [
        "The Unleash the Gospel identity has carried the Archdiocese through a province-wide synod, a parish-restructuring initiative, a Eucharistic revival, and the day-to-day work of 1.3 million Catholics living out their faith. The mark, the color, the voice — they show up consistently from the chancery to the smallest mission church.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#a93439",
    },

    /* -- Receipts grid ------------------------------------------- */
    {
      kind: "statrow",
      eyebrow: "§07 · Receipts",
      title: "What we can show. What we will.",
      accent: "#a93439",
      items: [
        { v: "1.3M", k: "Catholics reached, six-county region", color: "#a93439" },
        { v: "200+", k: "Parishes adopting the identity system", color: "#0c3b60" },
        { v: "6",    k: "Boondock Walker capabilities engaged", color: "#ca982f" },
        { placeholder: true, k: "Mass attendance lift (awaiting client release)" },
        { placeholder: true, k: "Digital engagement metric (awaiting client release)" },
      ],
    },

    /* -- Pullquote — text-only, no image yet --------------------- */
    {
      kind: "pullquote",
      quote: "A 200-year-old institution introduced itself again, and the people it serves recognized it on the first read.",
      by: "The Archdiocese engagement",
      role: "Boondock Walker × Archdiocese of Detroit · 2017 — present",
    },
  ],
};
