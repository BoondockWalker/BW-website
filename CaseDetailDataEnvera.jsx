/* global window */
/* Envera — case study composition.
   Content sourced from boondockwalker.com/work/envera
   Assets in assets/cases/envera/ pulled from same.

   Placeholder palette pending the supplied logo SVG. Healthcare/
   engagement-optimization brand — leaning teal-blue to signal
   clarity + balance until the real values are in hand:
     Teal    #1B7A8C    Deep    #0F4A57
     Ink     #14100C    Chalk   #FBF7EE
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
    imageAlt: "Envera — patient access + engagement, brand hero",
    imagePosition: "center center",
    imageBg: "#0F4A57",
    scrim: "bottomOnly",
    clientLogo: `${ENVERA_BASE}/logo.svg`,
    clientLogoHeight: 60,
    clientLogoInvert: true,
    standfirst: "Based in Richmond, Virginia, Envera empowers healthcare providers to deliver their best patient care by achieving balance in both clinical and financial performance. Their engagement optimization platform combines expertise, managed services, technology, and infrastructure that enables provider partners to achieve clinical, financial, and growth objectives.",
  },

  blocks: [
    /* -- Envera logo — full-bleed contained on cream -------------- */
    {
      kind: "fullbleed",
      src: `${ENVERA_BASE}/logo.svg`,
      alt: "Envera — wordmark + identifying mark",
      caption: { label: "fig. 01 · Logo", title: "The Envera wordmark" },
      surface: "#FBF7EE",
      height: "min(50vh, 440px)",
      fit: "contain",
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
      accent: "#1B7A8C",
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

    /* -- Responsive website — full-bleed ------------------------- */
    {
      kind: "fullbleed",
      src: `${ENVERA_BASE}/website-full.webp`,
      alt: "Envera responsive website — desktop + device mockups",
      caption: { label: "fig. 03 · Website", title: "Responsive website — the brand applied" },
      surface: "#FBF7EE",
      height: "min(86vh, 820px)",
      fit: "contain",
      imagePadding: "32px 28px",
    },

    /* -- Modular infographic / business model — two-up ----------- */
    {
      kind: "multi",
      eyebrow: "§04 · Business Model",
      title: "A modular infographic for a unique service.",
      cols: 2,
      gap: 32,
      surface: "#FBF7EE",
      padding: "clamp(56px, 8vw, 100px) clamp(20px, 5vw, 56px)",
      items: [
        { src: `${ENVERA_BASE}/model-2.webp`, alt: "Envera business model — diagram variant 2", caption: "Engagement model · variant 2", bg: "#FBF7EE", aspect: "1 / 1", tilePadding: "32px", fit: "contain" },
        { src: `${ENVERA_BASE}/model-1.webp`, alt: "Envera business model — diagram variant 1", caption: "Engagement model · variant 1", bg: "#FBF7EE", aspect: "1 / 1", tilePadding: "32px", fit: "contain" },
      ],
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
      accent: "#1B7A8C",
    },

    /* -- Brand Identity Guidelines spread 1 — full-bleed --------- */
    {
      kind: "fullbleed",
      src: `${ENVERA_BASE}/brand-guidelines-spread-1.webp`,
      alt: "Envera Brand Identity Guidelines — interior spread, full-width",
      caption: { label: "fig. 06 · Brand Guidelines", title: "Brand Identity Guidelines — interior spread" },
      surface: "#FBF7EE",
      height: "min(70vh, 620px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },

    /* -- Brand Identity Guidelines spread 2 — full-bleed --------- */
    {
      kind: "fullbleed",
      src: `${ENVERA_BASE}/brand-guidelines-spread-2.webp`,
      alt: "Envera Brand Identity Guidelines — second interior spread",
      caption: { label: "fig. 07 · Brand Guidelines", title: "Brand Identity Guidelines — second spread" },
      surface: "#FBF7EE",
      height: "min(70vh, 620px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§08 · Outcomes",
      title: "Brand positioning that defines a category.",
      body: [
        "Boondock developed the brand positioning that defines Envera's differentiation from a sea of competitors: \"Envera creates harmony in the total healthcare experience by helping clients identify their truth — the intersection where possibility and reality exist. We effectively transform inactive health data to active health intelligence that fosters optimized care and better health outcomes.\"",
        "Additionally, we developed a comprehensive identity system, including a modular infographic used to define their unique business model and value deliverable. We created a new website and sales collateral to effectively tell the Envera story.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#1B7A8C",
    },

    /* -- "Simple Truths" campaign — slider ----------------------- */
    {
      kind: "slider",
      eyebrow: "§09 · Simple Truths Campaign",
      title: "Find truth. Find balance. Find what's possible.",
      slideHeight: 520,
      items: [
        { src: `${ENVERA_BASE}/card-find-truth.webp`,        alt: "Simple Truths card — Find Truth",        caption: "Find truth",          bg: "#FBF7EE", width: 720 },
        { src: `${ENVERA_BASE}/card-balance.webp`,           alt: "Simple Truths card — Balance",           caption: "Balance",              bg: "#FBF7EE", width: 720 },
        { src: `${ENVERA_BASE}/card-get-to-balance.webp`,    alt: "Simple Truths card — Get to balance",    caption: "Get to balance",       bg: "#FBF7EE", width: 720 },
        { src: `${ENVERA_BASE}/card-get-to-balance-2.webp`,  alt: "Simple Truths card — Get to balance, variant",  caption: "Get to balance · variant", bg: "#FBF7EE", width: 720 },
        { src: `${ENVERA_BASE}/card-possible.webp`,          alt: "Simple Truths card — Possible",          caption: "Possible",             bg: "#FBF7EE", width: 720 },
      ],
    },

    /* -- Identity system — final full-bleed ---------------------- */
    {
      kind: "fullbleed",
      src: `${ENVERA_BASE}/identity-system.webp`,
      alt: "Envera identity system — comprehensive overview",
      caption: { label: "fig. 10 · Identity System", title: "The complete identity system" },
      surface: "#FBF7EE",
      height: "min(88vh, 880px)",
      fit: "contain",
      imagePadding: "20px 28px",
    },
  ],
};
