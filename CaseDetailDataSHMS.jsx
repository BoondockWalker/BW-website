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
    imageAlt: "Sacred Heart Major Seminary — exterior portrait / banner photography",
    imagePosition: "center center",
    imageBg: "#5A0F1D",
    scrim: "bottomOnly",
    clientLogo: `${SHMS_BASE}/logo.svg`,
    clientLogoHeight: 72,
    clientLogoInvert: true,
    standfirst: "Sacred Heart Major Seminary is a Catholic institution of higher learning associated with the Archdiocese of Detroit — a leading center of the New Evangelization forming priests, deacons, and lay ministers who bring the truth of the Gospel to an increasingly secularized world.",
  },

  blocks: [
    /* -- Academic mark — full-bleed on cream ---------------------- */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/academic-mark.webp`,
      alt: "Sacred Heart Major Seminary — Academic Mark, two-color",
      caption: { label: "fig. 01 · Academic Mark", title: "The refined academic mark" },
      surface: "#FBF7EE",
      height: "min(70vh, 620px)",
      fit: "contain",
      imagePadding: "60px 28px",
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

    /* -- Identity marks — two-up ---------------------------------- */
    {
      kind: "multi",
      eyebrow: "§03 · Identity System",
      title: "A graphic language that unifies a multi-faceted brand.",
      cols: 2,
      gap: 32,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${SHMS_BASE}/informal-mark.webp`,    alt: "Informal Mark", caption: "Brand Identity System · Informal mark",  bg: "#FBF7EE", aspect: "1 / 1", tilePadding: "32px", fit: "contain" },
        { src: `${SHMS_BASE}/heart-mind-mission.webp`, alt: "Heart. Mind. Mission. — typographic mark", caption: "Brand Identity System · Heart. Mind. Mission.", bg: "#FBF7EE", aspect: "1 / 1", tilePadding: "32px", fit: "contain" },
      ],
    },

    /* -- Brand Identity Guidelines — full-bleed scene ------------- */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/brand-guidelines-scene.jpg`,
      alt: "Sacred Heart Brand Identity Guidelines — open spreads on a surface",
      caption: { label: "fig. 04 · Brand Identity Guidelines", title: "The published doctrine — guidelines, in print" },
      surface: "#FBF7EE",
      height: "min(86vh, 820px)",
      fit: "contain",
      imagePadding: "32px 28px",
    },

    /* -- Values graphic — full-bleed band ------------------------- */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/values-graphic.png`,
      alt: "Sacred Heart values graphic — the brand attributes laid out",
      caption: { label: "fig. 05 · Brand Foundation", title: "Vocation, philosophy, attributes — the values that define the work" },
      surface: "#FBF7EE",
      height: "min(58vh, 520px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },

    /* -- Our Approach prose --------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§04 · Our Approach",
      title: "From foundation to graphic language.",
      body: [
        "The Boondock team worked closely with Sacred Heart leadership to establish a clear brand foundation for this nationally recognized Catholic institution of higher learning within the Archdiocese of Detroit. We collaborated in creating a framework that clearly defines their values and attributes, and how they create value — a clear understanding of their vocation, philosophy, and what sets them apart.",
        "With a new brand foundation in place, Boondock worked to create a brand identity as an expression of Sacred Heart Major Seminary, including a refined logo and identity system, typography, color palette, photography, and graphic styles. This \"graphic language\" has been impactful in unifying the many components and offerings of the brand and amplifying their overall impact.",
        "We also developed a series of educational program collateral, interior displays, exterior signage, and promotional merchandise.",
      ],
      maxWidth: 820,
      accent: "#b51e3d",
    },

    /* -- Exterior Signage — three banners ------------------------ */
    {
      kind: "multi",
      eyebrow: "§05 · Exterior Signage",
      title: "Heart. Mind. Mission. — applied in place.",
      cols: 3,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${SHMS_BASE}/banner-heart.jpg`,   alt: "Exterior banner — Heart",   caption: "Heart" },
        { src: `${SHMS_BASE}/banner-mind.jpg`,    alt: "Exterior banner — Mind",    caption: "Mind" },
        { src: `${SHMS_BASE}/banner-mission.jpg`, alt: "Exterior banner — Mission", caption: "Mission" },
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§06 · Outcomes",
      title: "Clearer, easier, more impactful — and recognizable.",
      body: [
        "Brand communications from Sacred Heart Major Seminary are now clearer, easier to create, more impactful, and, above all, clearly recognizable. Unified communications reinforce the brand, which translates to more success in recruiting students and faculty, cultivating donors, soliciting funding, forging partnerships, and creating a real and lasting impact on their community, diocese, and Church.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#b51e3d",
    },

    /* -- Final fullbleed — brand identity guidelines full width --- */
    {
      kind: "fullbleed",
      src: `${SHMS_BASE}/brand-guidelines-fullwidth.jpg`,
      alt: "Sacred Heart Brand Identity Guidelines — full-width spread",
      caption: { label: "fig. 09 · Brand Identity Guidelines", title: "Brand Identity Guidelines — complete system" },
      surface: "#FBF7EE",
      height: "min(82vh, 760px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },
  ],
};
