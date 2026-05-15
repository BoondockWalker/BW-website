/* global window */
/* Nature's Legacy — case study composition.
   Content sourced from boondockwalker.com/work/natures-legacy
   Assets in assets/cases/natures-legacy/ pulled from same.

   Working palette (pending the brand SVG):
     Wheat  #B58D3E    Olive  #4A5A1F
     Cream  #FBF7EE    Ink    #14100C
*/

const NL_BASE = "assets/cases/natures-legacy";

window.BW_CASE_DETAIL = {
  slug: "natures-legacy",
  no: "11",
  client: "Nature's Legacy",
  fullName: "Nature's Legacy",
  year: "2017",
  industry: "Specialty Food · CPG",
  pillars: ["Brand"],
  outcome: "Brand",
  duration: "Multi-phase engagement",
  pull: "Pure. Wonderfood.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №11",
    title: "Pure. Wonderfood.",
    image: `${NL_BASE}/hero.jpg`,
    imageAlt: "Nature's Legacy — specialty ancient-grain foods, packaging in retail context",
    imagePosition: "center center",
    imageBg: "#4A5A1F",
    scrim: "bottomOnly",
    clientLogo: `${NL_BASE}/logo.svg`,
    clientLogoHeight: 64,
    clientLogoInvert: false,
    standfirst: "Nature's Legacy makes specialty foods that are truly natural, produced with ancient grains as the main ingredient. Since 1979 they've held a tenacious desire to create products that improve people's lives — serving everyone from the health-conscious to those requiring alternatives to wheat.",
  },

  blocks: [
    /* -- Logo on cream ------------------------------------------- */
    {
      kind: "fullbleed",
      src: `${NL_BASE}/logo.svg`,
      alt: "Nature's Legacy — primary logo lockup",
      caption: { label: "fig. 01 · Logo", title: "The Nature's Legacy mark" },
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
      title: "Ancient grains. The truth to better health through nutrition.",
      body: [
        "Nature's Legacy makes specialty foods that are truly natural, produced with ancient grains as the main ingredient. Since 1979 they've held a tenacious desire to create products that improve people's lives. A Nature's Legacy customer seeks a healthier lifestyle through nutrition — from the health-conscious to those requiring alternatives to wheat.",
        "Boondock Walker was engaged to develop key brand strategies for delivering differentiated value to their customers, and create a new identity and messaging for sales and brand communication tools that effectively told their unique story.",
      ],
      dropCap: true,
      maxWidth: 820,
      accent: "#B58D3E",
    },

    /* -- Services / capabilities ledger -------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Foundation",
        "Brand Identity System",
        "Product Packaging",
        "Sales Collateral",
        "Email Marketing",
        "Website Design + Development",
      ],
      note: "Six capabilities engaged across the rebrand and launch.",
    },

    /* -- Packaging — full-bleed hero shot ------------------------ */
    {
      kind: "fullbleed",
      src: `${NL_BASE}/packaging.jpg`,
      alt: "Nature's Legacy — full line of product packaging, retail-ready",
      caption: { label: "fig. 04 · Packaging", title: "A full line of packaging, built to stand out on the shelf" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "0",
      padTop: 0,
      padBottom: 0,
    },

    /* -- Our Approach prose -------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§05 · Our Approach",
      title: "Distinguishing benefit on a saturated shelf.",
      body: [
        "With an ever-growing variety of products over-saturating retail shelves, consumers need to be able to quickly distinguish the benefits of our products and how they will make an impact on their health. Our team created a new brand extension and hierarchy, positioning, identity system, and full line of packaging that would resonate with their health-conscious audience and help gain stronger retail presence in the specialty foods category.",
        "We helped Nature's Legacy increase the overall awareness of spelt and ancient grains, helping consumers better understand that gluten in spelt is different than the gluten found in wheat — and the body breaks it down in vastly different ways.",
      ],
      maxWidth: 820,
      accent: "#B58D3E",
    },

    /* -- Brand Book — 2-up --------------------------------------- */
    {
      kind: "multi",
      eyebrow: "§06 · Brand Book",
      title: "The system, in the book.",
      cols: 2,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${NL_BASE}/brandbook-1.jpg`, alt: "Nature's Legacy brand book — page 1", caption: "Brand Book · 01" },
        { src: `${NL_BASE}/brandbook-2.jpg`, alt: "Nature's Legacy brand book — page 2", caption: "Brand Book · 02" },
      ],
    },

    /* -- Outcomes prose ----------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§07 · Outcomes",
      title: "A favorable buyout, built on a brand that finally read.",
      body: [
        "Following a complete overhaul and launch of the Nature's Legacy brand, the company realized significant market growth both in retail and online sales. The new brand positioning and marketing strategy worked to increase visibility and strengthen brand equity, which eventually led to a favorable company buyout.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#B58D3E",
    },

    /* -- Stat row ------------------------------------------------- */
    {
      kind: "statrow",
      eyebrow: "§08 · By the Numbers",
      surface: "#FBF7EE",
      stats: [
        { v: "+450%", k: "Increase in online sales" },
        { v: "+120%", k: "Company growth" },
        { v: "+500%", k: "Increase in online engagement" },
      ],
    },

    /* -- Website — iPads fullbleed ------------------------------ */
    {
      kind: "fullbleed",
      src: `${NL_BASE}/website-ipads.jpg`,
      alt: "Nature's Legacy responsive website — shown on a row of iPads",
      caption: { label: "fig. 09 · Website", title: "Responsive site — the brand, scaled to every screen" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "0",
      padTop: 0,
      padBottom: 0,
    },
  ],
};
