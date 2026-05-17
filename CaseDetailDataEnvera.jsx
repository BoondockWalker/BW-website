/* global window */
/* Envera — case study composition.
   Content sourced from boondockwalker.com/work/envera
   Assets in assets/cases/envera/ pulled from same.

   Envera palette (lifted from the supplied logo SVG):
     Amber   #f7921e    Tangerine #f06c36
     Cream   #e9e1c8    Chalk     #FBF7EE
*/

const ENVERA_BASE = "assets/cases/envera";

window.BW_CASE_DETAIL = {
  slug: "envera",
  no: "07",
  client: "Envera",
  fullName: "Envera",
  year: "2024",
  industry: "Healthcare · Engagement",
  pillars: ["Brand"],
  outcome: "Brand",
  duration: "Accelerated launch",
  pull: "Find your truth.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Case №07",
    title: "Find Your Truth.",
    image: `${ENVERA_BASE}/hero.jpg`,
    imageAlt: "Envera — duotone orange split with magnifying-eye icon over a healthcare-provider portrait",
    imagePosition: "center center",
    imageBg: "#f06c36",
    scrim: "bottomOnly",
    clientLogo: `${ENVERA_BASE}/envera-logo.svg`,
    clientLogoHeight: 56,
    standfirst: "Based in Richmond, Virginia, Envera empowers healthcare providers to deliver their best patient care by achieving balance in both clinical and financial performance. Their engagement optimization platform combines expertise, managed services, technology, and infrastructure that enables provider partners to achieve clinical, financial, and growth objectives.",
  },

  blocks: [
    /* -- Envera logo — full-bleed contained on cream -------------- */
    {
      kind: "fullbleed",
      src: `${ENVERA_BASE}/envera-logo.svg`,
      alt: "Envera wordmark — amber + tangerine duotone",
      caption: { label: "fig. 01 · Logo", title: "The Envera wordmark — amber over tangerine" },
      surface: "#FBF7EE",
      height: "min(22vh, 200px)",
      fit: "contain",
      imageMaxWidth: "min(50%, 560px)",
      imagePadding: "60px 28px",
    },

    /* -- The Brief / problem prose -------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Helping a startup reveal the truth about healthcare.",
      body: [
        "Following their acquisition of two other health companies, Envera engaged Boondock Walker to lead development of the brand foundation and strategy, logo and identity systems, website, and sales tools.",
        "We worked closely with the Envera executive team to develop a message platform that defines their value to care providers: find truth, provide insight, and simplify delivery. We created the \"Simple Truths\" campaign to communicate that better engagement in health is possible through truth in information and embracing accountability.",
      ],
      dropCap: true,
      maxWidth: 820,
      accent: "#f06c36",
    },

    /* -- Services / capabilities ledger --------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Foundation + Strategy",
        "Brand Identity",
        "Tagline",
        "Content Marketing Campaigns",
        "Sales Collateral",
        "Branded Interior",
        "Website Design + Development",
      ],
      note: "Seven capabilities engaged, delivered on an accelerated timeline.",
    },

    /* -- Stationery / Identity System — full-bleed --------------- */
    {
      kind: "fullbleed",
      src: `${ENVERA_BASE}/stationery.jpg`,
      alt: "Envera stationery system — orange duotone folder, letterhead, business card, envelope",
      caption: { label: "fig. 04 · Identity System", title: "Stationery — folder, letterhead, card, envelope" },
      surface: "#FBF7EE",
      height: "min(86vh, 820px)",
      fit: "contain",
      imagePadding: "32px 28px",
    },

    /* -- Our Approach prose --------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§05 · Our Approach",
      title: "From inactive data to active intelligence.",
      body: [
        "The truth about the US healthcare market is that, in order to transform care, healthcare systems must transform inactive health data into active health intelligence. This and other \"simple truths\" became the foundation for the core brand messaging developed for Envera. With better intelligence, companies gain insight that enables them to address optimization needs and simplify the delivery of better, more personalized care.",
        "Boondock Walker examined every aspect of the Envera brand, from the value deliverable to its personality, to the identity, to how their unique story could be told with the greatest impact. We worked closely with sales leadership to visually define their unique service and business model — and how best to communicate it. We did all of this on an accelerated timeline so the brand could publicly launch when Envera's acquisitions were finalized.",
      ],
      maxWidth: 820,
      accent: "#f06c36",
    },

    /* -- Brand Foundation — three-up: Position / Model / Values -- */
    {
      kind: "multi",
      eyebrow: "§06 · Brand Foundation",
      title: "Position, model, values — the doctrine in print.",
      cols: 3,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${ENVERA_BASE}/guidelines-position.jpg`, alt: "Brand Foundation spread — Our Brand Position", caption: "Brand Position" },
        { src: `${ENVERA_BASE}/guidelines-model.jpg`,    alt: "Brand Foundation spread — Engagement Optimization Model", caption: "Engagement Model" },
        { src: `${ENVERA_BASE}/guidelines-values.jpg`,   alt: "Brand Foundation spread — Our Brand Values (truth, humanity, collaboration, accountability, performance, joy)", caption: "Brand Values" },
      ],
    },

    /* -- Brand Identity Guidelines — full-bleed spread ------------ */
    {
      kind: "fullbleed",
      src: `${ENVERA_BASE}/guidelines-spread.jpg`,
      alt: "Envera Brand Identity Guidelines — interior spread, full-width",
      caption: { label: "fig. 07 · Brand Guidelines", title: "Brand Identity Guidelines — interior detail" },
      surface: "#FBF7EE",
      height: "min(64vh, 580px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },

    /* -- Website — three-device showcase --------------------------- */
    {
      kind: "fullbleed",
      src: `${ENVERA_BASE}/website-devices.jpg`,
      alt: "Envera responsive website — desktop, tablet, and phone mockups",
      caption: { label: "fig. 08 · Website", title: "Responsive website — three devices, one brand" },
      surface: "#FBF7EE",
      height: "min(86vh, 820px)",
      fit: "contain",
      imagePadding: "32px 28px",
    },

    /* -- Website page mockups — three-up -------------------------- */
    {
      kind: "multi",
      eyebrow: "§09 · Site Pages",
      title: "What We Do · Our Platform · Simple Truths.",
      cols: 3,
      gap: 28,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${ENVERA_BASE}/page-what-we-do.jpg`,     alt: "Site page — What We Do",     caption: "What We Do",     shadow: true },
        { src: `${ENVERA_BASE}/page-platform.jpg`,      alt: "Site page — Our Platform",   caption: "Our Platform",   shadow: true },
        { src: `${ENVERA_BASE}/page-simple-truths.jpg`, alt: "Site page — Simple Truths",  caption: "Simple Truths",  shadow: true },
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§10 · Outcomes",
      title: "Brand positioning that defines a category.",
      body: [
        "Boondock developed the brand positioning that defines Envera's differentiation from a sea of competitors: \"Envera creates harmony in the total healthcare experience by helping clients identify their truth — the intersection where possibility and reality exist. We effectively transform inactive health data to active health intelligence that fosters optimized care and better health outcomes.\"",
        "Additionally, we developed a comprehensive identity system, including a modular infographic used to define their unique business model and value deliverable. We created a new website and sales collateral to effectively tell the Envera story.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#f06c36",
    },

    /* -- Mobile experience — tilted phone, final fullbleed --------- */
    {
      kind: "fullbleed",
      src: `${ENVERA_BASE}/website-phone.jpg`,
      alt: "Envera mobile site — tilted phone mockup on teal, showing \"Possibility, meet reality.\"",
      caption: { label: "fig. 11 · Mobile", title: "\"Possibility, meet reality.\" — in your pocket" },
      surface: "#FBF7EE",
      height: "min(82vh, 760px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },
  ],
};
