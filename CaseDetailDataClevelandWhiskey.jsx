/* global window */
/* Cleveland Whiskey — case study composition.
   Content sourced from boondockwalker.com/work/cleveland-whiskey
   Assets in assets/cases/cleveland-whiskey/ pulled from same.

   Brand palette (lifted from the supplied logo SVG):
     Char    #1F1410    Rust    #ae4d47
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
    clientLogoInvert: true,
    standfirst: "Cleveland Whiskey is a bold innovator of disruptive technology that radically accelerates the maturation and flavor development of distilled spirits — a perfect storm of increasing demand in an industry that hasn't changed in generations. Their process uses unique woods that elicit a range of tastes fittingly described as \"radically different.\" Cleveland Whiskey has won a series of gold medals and was named Whiskey Innovator of the Year at the 2016 Berlin International Spirits Competition.",
  },

  blocks: [
    /* -- Logo on cream ------------------------------------------- */
    {
      kind: "fullbleed",
      src: `${CW_BASE}/logo.svg`,
      alt: "Cleveland Whiskey — primary logo lockup, rust red on cream",
      caption: { label: "fig. 01 · Logo", title: "The Cleveland Whiskey mark — rust red on cream" },
      surface: "#FBF7EE",
      height: "min(24vh, 210px)",
      fit: "contain",
      imageMaxWidth: "min(50%, 560px)",
      imagePadding: "48px 28px",
      padTop: 112,
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
      accent: "#ae4d47",
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

    /* -- Our Approach prose -------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§03 · Our Approach",
      title: "Redefine the personality. Design the line. Run the engine.",
      body: [
        "The Boondock Walker team worked to redefine Cleveland Whiskey's unique brand personality and messaging. We designed the brand identity and packaging of the Cleveland Underground line, including all promotional collateral for sales staff, distributors, and retailers.",
        "We generated a significant increase in social media engagement for Cleveland Whiskey, creating content around the Republican National Convention, the Cavaliers' NBA Championship, and the Indians' World Series appearance.",
        "Boondock Walker helped Cleveland Whiskey launch one of the first and most successful regulation crowdfunding efforts ever — successfully closing with 951 new investors and an equity raise exceeding $850,000. Boondock was responsible for creating and distributing all social media content and investor communications.",
      ],
      maxWidth: 820,
      accent: "#ae4d47",
    },

    /* -- Cleveland Underground — featured ----------------------- */
    {
      kind: "fullbleed",
      src: `${CW_BASE}/cu-featured.png`,
      alt: "Cleveland Underground — the new collection, hero composition",
      caption: { label: "fig. 04 · Cleveland Underground", title: "Cleveland Underground — the new collection" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "0",
      padTop: 0,
      padBottom: 0,
      blend: "multiply",
    },

    /* -- Recipe Cards — 4 in a 2x2 ------------------------------ */
    {
      kind: "multi",
      eyebrow: "§05 · Recipe Cards",
      title: "Black cherry. Hickory. Two woods, four cards.",
      cols: 2,
      gap: 24,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${CW_BASE}/recipe-blkcherry-1.jpg`, alt: "Cleveland Underground recipe — Black Cherry, front", caption: "Black Cherry · 01" },
        { src: `${CW_BASE}/recipe-blkcherry-2.jpg`, alt: "Cleveland Underground recipe — Black Cherry, back",  caption: "Black Cherry · 02" },
        { src: `${CW_BASE}/recipe-hickory-1.jpg`,   alt: "Cleveland Underground recipe — Hickory, front",      caption: "Hickory · 01" },
        { src: `${CW_BASE}/recipe-hickory-2.jpg`,   alt: "Cleveland Underground recipe — Hickory, back",       caption: "Hickory · 02" },
      ],
    },

    /* -- Sell sheet — floating with drop shadow ----------------- */
    {
      kind: "floating",
      eyebrow: "§06 · Sales Collateral",
      title: "Sell sheet — the line on a single page.",
      src: `${CW_BASE}/cu-sellsheet.jpg`,
      alt: "Cleveland Underground sell sheet — distributor + retailer collateral",
      caption: "fig. 06 · Sales Collateral",
      surface: "#FBF7EE",
      maxWidth: 900,
      maxHeight: 1100,
      shadow: true,
    },

    /* -- Shelf Talkers — full-bleed ----------------------------- */
    {
      kind: "fullbleed",
      src: `${CW_BASE}/shelf-talkers.jpg`,
      alt: "Cleveland Whiskey retail shelf talkers — wide retail point-of-sale collateral",
      caption: { label: "fig. 07 · Retail", title: "Shelf talkers — the brand at the point of decision" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "0",
      padTop: 0,
      padBottom: 0,
    },

    /* -- Hang Tags — full-bleed --------------------------------- */
    {
      kind: "fullbleed",
      src: `${CW_BASE}/hangtags.jpg`,
      alt: "Cleveland Whiskey retail hang tags — neck collateral for in-store distinction",
      caption: { label: "fig. 08 · Retail", title: "Hang tags — the bottle's own pitch" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "0",
      padTop: 0,
      padBottom: 0,
    },

    /* -- Black Cherry — environment + awards -------------------- */
    {
      kind: "fullbleed",
      src: `${CW_BASE}/blackcherry-awards.jpg`,
      alt: "Cleveland Whiskey Black Cherry — bottle in studio environment, with award medals",
      caption: { label: "fig. 09 · Awards", title: "Black Cherry — bottle in environment, gold-medal stack" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "0",
      padTop: 0,
      padBottom: 0,
    },

    /* -- Stat row ------------------------------------------------ */
    {
      kind: "statrow",
      eyebrow: "§10 · By the Numbers",
      surface: "#FBF7EE",
      stats: [
        { v: "$850K", k: "Raised via crowdfunding" },
        { v: "951",   k: "New investors closed" },
        { v: "+750%", k: "Social following" },
        { v: "+375%", k: "Website traffic" },
      ],
    },

    /* -- Pullquote — Tom Lix (quote-only variant) --------------- */
    {
      kind: "pullquote",
      surface: "#FBF7EE",
      quote: "Impressive work, impressive people and impressive results. And I'm not easily impressed. I didn't want an agency, I wanted a marketing department that had talent, that had passion and that had my back. Boondock always delivers, and then some.",
      by: "Tom Lix",
      role: "Founder, Cleveland Whiskey",
    },

    /* -- Website scene — full-bleed ----------------------------- */
    {
      kind: "fullbleed",
      src: `${CW_BASE}/web-scene.webp`,
      alt: "Cleveland Whiskey responsive website — desktop composition",
      caption: { label: "fig. 12 · Website", title: "Responsive website — the bottle's story online" },
      surface: "#FBF7EE",
      height: "auto",
      imagePadding: "0",
      padTop: 0,
      padBottom: 0,
    },

    /* -- Home page — long vertical scroll, floating + shadow ---- */
    {
      kind: "floating",
      eyebrow: "§13 · Home Page",
      title: "The home page — top to bottom.",
      src: `${CW_BASE}/web-home-long.jpg`,
      alt: "Cleveland Whiskey home page — long-form vertical screenshot, scrollable in full",
      caption: "fig. 13 · Home Page",
      surface: "#FBF7EE",
      maxWidth: 760,
      maxHeight: 2400,
      shadow: true,
    },

    /* -- Newsfeed posts — slider of 4 --------------------------- */
    {
      kind: "slider",
      eyebrow: "§14 · Newsfeed Posts",
      title: "The line, in the feed.",
      surface: "#FBF7EE",
      slideHeight: 640,
      gap: 14,
      captionGap: 10,
      items: [
        { src: `${CW_BASE}/news-apple.png`,           alt: "Cleveland Underground newsfeed — Apple wood",      caption: "fig. 14.1 · Apple",      width: 640, bg: "#FBF7EE" },
        { src: `${CW_BASE}/news-blackcherry.png`,     alt: "Cleveland Underground newsfeed — Black Cherry",    caption: "fig. 14.2 · Black Cherry", width: 640, bg: "#FBF7EE" },
        { src: `${CW_BASE}/news-hickory.png`,         alt: "Cleveland Underground newsfeed — Hickory",         caption: "fig. 14.3 · Hickory",     width: 640, bg: "#FBF7EE" },
        { src: `${CW_BASE}/news-sugarmaple.png`,      alt: "Cleveland Underground newsfeed — Sugar Maple",     caption: "fig. 14.4 · Sugar Maple", width: 640, bg: "#FBF7EE" },
      ],
    },
  ],
};
