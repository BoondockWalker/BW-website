/* global window */
/* Sacred Heart Major Seminary — case study composition.
   Content sourced from boondockwalker.com/work/sacred-heart-major-seminary
   Assets in assets/cases/sacred-heart/ pulled from same.

   Brand color (from the live BW page H2): #b51e3d (SHMS burgundy).
*/

const SHMS_BASE = "assets/cases/sacred-heart";

window.BW_CASE_DETAIL = {
  slug: "sacred-heart-major-seminary",
  no: "06",
  client: "Sacred Heart Major Seminary",
  fullName: "Sacred Heart Major Seminary",
  year: "2024",
  industry: "Faith · Higher Education",
  pillars: ["Brand"],
  outcome: "Brand",
  duration: "Multi-year engagement",
  pull: "Heart. Mind. Mission.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №06",
    title: "Heart. Mind. Mission.",
    image: `${SHMS_BASE}/hero.jpg`,
    imageAlt: "Sacred Heart Major Seminary t-shirt — \"HEART. MIND. MISSION.\" stacked typography on black, with \"sacredheart DETROIT\" wordmark on the sleeve",
    imagePosition: "center center",
    imageBg: "#5A0F1D",
    scrim: "bottomOnly",
    clientLogo: `${SHMS_BASE}/SHMS-logo-wht.svg`,
    clientLogoHeight: 72,
    clientLogoInvert: false,
    standfirst: "Sacred Heart Major Seminary is a Catholic institution of higher learning associated with the Archdiocese of Detroit — a leading center of the New Evangelization forming priests, deacons, and lay ministers who bring the truth of the Gospel to an increasingly secularized world.",
  },

  blocks: [
    /* -- Academic mark — full-bleed on cream ---------------------- */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/academic-mark.png`,
      alt: "Sacred Heart Major Seminary — Academic Mark, two-color lockup with the rampant-lion shield and grey wordmark",
      caption: { label: "fig. 01 · Academic Mark", title: "The refined academic mark — formal lockup with the rampant-lion shield" },
      surface: "#FBF7EE",
      height: "min(32vh, 280px)",
      fit: "contain",
      imagePadding: "40px 28px",
      padTop: 80,
    },

    /* -- The Brief / problem prose -------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Crafting the brand and identity of a century-old institution.",
      body: [
        "Located on the western edge of the Boston-Edison Historic District in north central Detroit, Sacred Heart Major Seminary prepares candidates for the Roman Catholic priesthood for the Archdiocese of Detroit and for dioceses nationally and internationally.",
        "Sacred Heart Major Seminary engaged Boondock Walker to help shape their brand foundation and messaging, and create an identity system and guidelines to ensure impactful and consistent brand communications.",
      ],
      dropCap: true,
      maxWidth: 820,
      accent: "#b51e3d",
    },

    /* -- Services / capabilities ledger --------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Foundation + Strategy",
        "Brand Identity",
        "Print Collateral",
        "Trade Show Display Design",
        "Promotional Merchandise",
      ],
      note: "Five capabilities engaged across a multi-year engagement.",
    },

    /* -- Brand Expression — two-up: informal mark + Heart/Mind/Mission */
    {
      kind: "multi",
      eyebrow: "§03 · Brand Expression",
      title: "An informal voice and a tagline that does the work.",
      cols: 2,
      gap: 32,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${SHMS_BASE}/sacredheart-informal-mark.webp`,    alt: "\"sacred heart DETROIT\" — informal blackletter wordmark in black + burgundy", caption: "Informal mark · the everyday voice", bg: "#FBF7EE", aspect: "1 / 1", tilePadding: "48px", fit: "contain" },
        { src: `${SHMS_BASE}/sacredheart-heart-mind-mission.webp`, alt: "HEART. MIND. MISSION. — stacked typographic tagline in burgundy / gold / purple", caption: "Heart. Mind. Mission. · the tagline made visible", bg: "#FBF7EE", aspect: "1 / 1", tilePadding: "48px", fit: "contain" },
      ],
    },

    /* -- Brand Values — five icons + labels, full-bleed band ----- */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/sacredheart-values.webp`,
      alt: "Sacred Heart values graphic — five pillars: Excellence in Academics · In the Heart of the Church · In the Heart of the City · Advancing the New Evangelization · According to the Heart of Jesus Christ",
      caption: { label: "fig. 04 · Brand Values", title: "Five pillars — Excellence, Church, City, Evangelization, Heart of Jesus Christ" },
      surface: "#FBF7EE",
      height: "min(40vh, 360px)",
      fit: "contain",
      imagePadding: "32px clamp(20px, 5vw, 56px)",
    },

    /* -- Brand Identity Guidelines — published book covers -------- */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/brand-guidelines-covers.jpg`,
      alt: "\"Communicating Sacred Heart Major Seminary\" — Brand + Identity Guidelines, two covers on slate",
      caption: { label: "fig. 05 · Brand Guidelines", title: "\"Communicating Sacred Heart Major Seminary\" — the published doctrine" },
      surface: "#FBF7EE",
      height: "min(86vh, 820px)",
      fit: "contain",
      imagePadding: "32px 28px",
    },

    /* -- Our Approach prose --------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§06 · Our Approach",
      title: "From foundation to graphic language.",
      body: [
        "The Boondock team worked closely with Sacred Heart leadership to establish a clear brand foundation for this nationally recognized Catholic institution of higher learning within the Archdiocese of Detroit. We collaborated in creating a framework that clearly defines their values and attributes, and how they create value — a clear understanding of their vocation, philosophy, and what sets them apart.",
        "With a new brand foundation in place, Boondock worked to create a brand identity as an expression of Sacred Heart Major Seminary, including a refined logo and identity system, typography, color palette, photography, and graphic styles. This \"graphic language\" has been impactful in unifying the many components and offerings of the brand and amplifying their overall impact.",
        "We also developed a series of educational program collateral, interior displays, exterior signage, and promotional merchandise.",
      ],
      maxWidth: 820,
      accent: "#b51e3d",
    },

    /* -- Brand Guidelines close-up details — two-up --------------- */
    {
      kind: "multi",
      eyebrow: "§07 · Inside the System",
      title: "Doctrine, color, and the rules that hold them.",
      cols: 2,
      gap: 32,
      maxWidth: 1500,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${SHMS_BASE}/brand-guidelines-closeup-1.jpg`, alt: "Brand Guidelines close-up — interior spread detail",   caption: "Guidelines · interior detail (i)" },
        { src: `${SHMS_BASE}/brand-guidelines-closeup-2.jpg`, alt: "Brand Guidelines close-up — interior spread detail",   caption: "Guidelines · interior detail (ii)" },
      ],
    },

    /* -- Brand Guidelines — open book at 90°, full-width ---------- */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/brand-guidelines-cover-spread.jpg`,
      alt: "Brand Guidelines — open book at 90° showing the cover and a key interior spread",
      caption: { label: "fig. 08 · Brand Guidelines", title: "Open at the doctrine — guidelines in use" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "0",
    },

    /* -- Exterior Signage — three banners ------------------------ */
    {
      kind: "multi",
      eyebrow: "§09 · Exterior Signage",
      title: "Heart. Mind. Mission. — applied in place.",
      cols: 3,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${SHMS_BASE}/banner-heart.jpg`,   alt: "Exterior pole banner — HEART, with seminarian portrait + the Academic Mark",   caption: "Heart" },
        { src: `${SHMS_BASE}/banner-mind.jpg`,    alt: "Exterior pole banner — MIND, with portrait + Academic Mark",                    caption: "Mind" },
        { src: `${SHMS_BASE}/banner-mission.jpg`, alt: "Exterior pole banner — MISSION, with portrait + Academic Mark",                 caption: "Mission" },
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§10 · Outcomes",
      title: "Clearer, easier, more impactful — and recognizable.",
      body: [
        "Brand communications from Sacred Heart Major Seminary are now clearer, easier to create, more impactful, and, above all, clearly recognizable. Unified communications reinforce the brand, which translates to more success in recruiting students and faculty, cultivating donors, soliciting funding, forging partnerships, and creating a real and lasting impact on their community, diocese, and Church.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#b51e3d",
    },

    /* -- Final fullbleed — the closing brand guidelines spread ---- */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/brand-guidelines-spread.jpg`,
      alt: "Brand Identity Guidelines — interior spread, full-width",
      caption: { label: "fig. 11 · Brand Guidelines", title: "Inside the guidelines — the full graphic system" },
      surface: "#FBF7EE",
      height: "min(82vh, 760px)",
      fit: "cover",
      imagePadding: "0",
    },
  ],
};
