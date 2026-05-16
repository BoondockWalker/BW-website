/* global window */
/* Cleveland Whiskey — case study composition.
   Content sourced from boondockwalker.com/work/cleveland-whiskey
   Assets in assets/cases/cleveland-whiskey/ pulled from same.

   Working palette (pending the brand SVG):
     Char    #1F1410    Copper  #B8762E
     Cream   #FBF7EE    Ink     #14100C
*/

const CW_BASE = "assets/cases/cleveland-whiskey";

window.BW_CASE_DETAIL = {
  slug: "cleveland-whiskey",
  no: "12",
  client: "Cleveland Whiskey",
  fullName: "Cleveland Whiskey",
  year: "2017",
  industry: "Spirits · CPG",
  pillars: ["Brand"],
  outcome: "Brand",
  duration: "Multi-year engagement",
  pull: "Distilling a radically different whiskey brand.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №12",
    title: "Distilling a radically different whiskey brand.",
    image: `${CW_BASE}/hero.jpg`,
    imageAlt: "Cleveland Whiskey — bottle and barrels, the radically different bourbon",
    imagePosition: "center center",
    imageBg: "#1F1410",
    scrim: "bottomOnly",
    clientLogo: `${CW_BASE}/logo.svg`,
    clientLogoHeight: 56,
    clientLogoInvert: false,
    standfirst: "Cleveland Whiskey is a bold innovator of disruptive technology that radically accelerates the maturation and flavor development of distilled spirits — a perfect storm of increasing demand in an industry that hasn't changed in generations. Their process uses unique woods that elicit a range of tastes fittingly described as \"radically different.\" Cleveland Whiskey has won a series of gold medals and was named Whiskey Innovator of the Year at the 2016 Berlin International Spirits Competition.",
  },

  blocks: [
    /* -- Logo on cream ------------------------------------------- */
    {
      kind: "fullbleed",
      src: `${CW_BASE}/logo.svg`,
      alt: "Cleveland Whiskey — primary logo lockup",
      caption: { label: "fig. 01 · Logo", title: "The Cleveland Whiskey mark" },
      surface: "#FBF7EE",
      height: "min(34vh, 300px)",
      fit: "contain",
      imagePadding: "48px 28px",
      padTop: 64,
    },

    /* -- The Brief / problem prose ------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Strengthen the brand. Launch the new collection.",
      body: [
        "Now in 14 states, Europe, and China, Cleveland Whiskey tapped Boondock Walker to strengthen the existing brand while bringing an exciting new collection — Cleveland Underground — to market.",
      ],
      dropCap: true,
      maxWidth: 820,
      accent: "#B8762E",
    },

    /* -- Services / capabilities ledger -------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Strategy",
        "Brand Identity",
        "Tagline",
        "Package Design",
        "Market Research",
        "Investor Campaigns",
        "Advertising Campaigns",
        "Campaign Marketing",
        "Sales Collateral",
        "Social Media",
        "Website Design + Development",
      ],
      note: "Eleven capabilities engaged across the multi-year engagement.",
    },

    /* -- Shelf Talkers — full-bleed ------------------------------ */
    {
      kind: "fullbleed",
      src: `${CW_BASE}/shelf-talkers.jpg`,
      alt: "Cleveland Whiskey retail shelf talkers — wide retail point-of-sale collateral",
      caption: { label: "fig. 04 · Retail", title: "Shelf talkers — the brand at the point of decision" },
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
      title: "Redefine the personality. Design the line. Run the engine.",
      body: [
        "The Boondock Walker team worked to redefine Cleveland Whiskey's unique brand personality and messaging. We designed the brand identity and packaging of the Cleveland Underground line, including all promotional collateral for sales staff, distributors, and retailers.",
        "We generated a significant increase in social media engagement for Cleveland Whiskey, creating content around the Republican National Convention, the Cavaliers' NBA Championship, and the Indians' World Series appearance.",
        "Boondock Walker helped Cleveland Whiskey launch one of the first and most successful regulation crowdfunding efforts ever — successfully closing with 951 new investors and an equity raise exceeding $850,000. Boondock was responsible for creating and distributing all social media content and investor communications.",
      ],
      maxWidth: 820,
      accent: "#B8762E",
    },

    /* -- Recipe Cards — 4 in a 2x2 ------------------------------ */
    {
      kind: "multi",
      eyebrow: "§06 · Recipe Cards",
      title: "Black cherry. Hickory. Two woods, four cards.",
      cols: 2,
      gap: 24,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${CW_BASE}/recipe-blkcherry-1.webp`, alt: "Cleveland Whiskey recipe — Black Cherry, front", caption: "Black Cherry · 01" },
        { src: `${CW_BASE}/recipe-blkcherry-2.webp`, alt: "Cleveland Whiskey recipe — Black Cherry, back",  caption: "Black Cherry · 02" },
        { src: `${CW_BASE}/recipe-hickory-1.webp`,   alt: "Cleveland Whiskey recipe — Hickory, front",      caption: "Hickory · 01" },
        { src: `${CW_BASE}/recipe-hickory-2.webp`,   alt: "Cleveland Whiskey recipe — Hickory, back",       caption: "Hickory · 02" },
      ],
    },

    /* -- Hang Tags — full-bleed ---------------------------------- */
    {
      kind: "fullbleed",
      src: `${CW_BASE}/hangtags.jpg`,
      alt: "Cleveland Whiskey retail hang tags — neck collateral for in-store distinction",
      caption: { label: "fig. 07 · Retail", title: "Hang tags — the bottle's own pitch" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "0",
      padTop: 0,
      padBottom: 0,
    },

    /* -- Stat row ------------------------------------------------- */
    {
      kind: "statrow",
      eyebrow: "§08 · By the Numbers",
      surface: "#FBF7EE",
      stats: [
        { v: "$850K", k: "Raised via crowdfunding" },
        { v: "951",   k: "New investors closed" },
        { v: "+750%", k: "Social following" },
        { v: "+375%", k: "Website traffic" },
      ],
    },

    /* -- Pullquote — Tom Lix ------------------------------------- */
    {
      kind: "pullquote",
      surface: "#FBF7EE",
      quote: "Impressive work, impressive people and impressive results. And I'm not easily impressed. I didn't want an agency, I wanted a marketing department that had talent, that had passion and that had my back. Boondock always delivers, and then some.",
      by: "Tom Lix",
      role: "Founder, Cleveland Whiskey",
      image: `${CW_BASE}/tom-lix.jpg`,
      imageAlt: "Tom Lix, Founder of Cleveland Whiskey",
      imageBg: "#1F1410",
    },

    /* -- Website scene — full-bleed ------------------------------ */
    {
      kind: "fullbleed",
      src: `${CW_BASE}/web-scene.webp`,
      alt: "Cleveland Whiskey responsive website — desktop + mobile composition",
      caption: { label: "fig. 10 · Website", title: "Responsive website — the bottle's story online" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "0",
      padTop: 0,
      padBottom: 0,
    },

    /* -- Social posts — carousel of 6 ---------------------------- */
    {
      kind: "slider",
      eyebrow: "§11 · Social Posts",
      title: "Six posts from the feed.",
      surface: "#FBF7EE",
      slideHeight: 640,
      gap: 14,
      captionGap: 10,
      items: [
        { src: `${CW_BASE}/social-2.jpg`, alt: "Cleveland Whiskey social post 02", caption: "fig. 11.1 · Post 02", width: 640, bg: "#FBF7EE" },
        { src: `${CW_BASE}/social-3.jpg`, alt: "Cleveland Whiskey social post 03", caption: "fig. 11.2 · Post 03", width: 640, bg: "#FBF7EE" },
        { src: `${CW_BASE}/social-4.jpg`, alt: "Cleveland Whiskey social post 04", caption: "fig. 11.3 · Post 04", width: 640, bg: "#FBF7EE" },
        { src: `${CW_BASE}/social-5.jpg`, alt: "Cleveland Whiskey social post 05", caption: "fig. 11.4 · Post 05", width: 640, bg: "#FBF7EE" },
        { src: `${CW_BASE}/social-6.jpg`, alt: "Cleveland Whiskey social post 06", caption: "fig. 11.5 · Post 06", width: 640, bg: "#FBF7EE" },
        { src: `${CW_BASE}/social-7.jpg`, alt: "Cleveland Whiskey social post 07", caption: "fig. 11.6 · Post 07", width: 640, bg: "#FBF7EE" },
      ],
    },
  ],
};
