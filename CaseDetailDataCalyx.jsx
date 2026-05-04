/* global window */
/* Calyx — case study composition.
   Content sourced from boondockwalker.com/work/calyx
   Assets in assets/cases/calyx/ pulled from same.

   Calyx palette (placeholder until extracted from the supplied logo):
     Petrol  #1f4e6b    Amber   #d68a3a
     Ink     #14100C    Chalk   #FBF7EE
*/

const BASE = "assets/cases/calyx";

window.BW_CASE_DETAIL = {
  slug: "calyx",
  no: "03",
  client: "Calyx",
  fullName: "Calyx Managed Services",
  year: "2024",
  industry: "Managed IT Services",
  pillars: ["Brand", "Demand"],
  outcome: "Pipeline",
  duration: "Multi-year engagement",
  pull: "An MSP that lets small and mid-market businesses act enterprise-grade.",

  hero: {
    variant: "fullbleed",
    eyebrow: "Client Success Story · Specimen №03",
    title: "With Calyx, you can.",
    image: `${BASE}/hero.jpg`,
    imageAlt: "Calyx — campaign hero",
    imagePosition: "center center",
    imageBg: "#1f4e6b",
    scrim: "bottomOnly",
    standfirst: "Calyx is a managed services provider deploying enterprise-grade IT for the small and mid-market businesses who can't afford to think small. Boondock Walker built the brand foundation, identity system, and campaign that match the size of their ambition.",
  },

  blocks: [
    /* -- Services / technical box -------------------------------- */
    {
      kind: "services",
      eyebrow: "Our Services",
      services: [
        "Brand Foundation + Strategy",
        "Brand Identity",
        "Marketing Strategy",
        "Advertising Campaign",
        "Sales Collateral Design",
        "Website Design + Development",
      ],
      note: "Six capabilities engaged across a multi-year engagement.",
    },

    /* -- The Brief -- prose --------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§02 · The Brief",
      title: "Match the brand to the ambition.",
      body: [
        "Calyx is the kind of managed services provider that closes deals on capability — secure cloud, real support, enterprise-class infrastructure for companies that can't justify an in-house IT department. The work was world-class. The brand wasn't keeping up.",
        "They came to Boondock Walker with a fast-growing market, an ambitious growth target, and a brand that read like every other MSP on the procurement shortlist. The brief: build a foundation strong enough to defend a premium position, an identity sharp enough to be recognized in a category of beige logos, and a campaign that gives the sales team a story to walk into the room with.",
        "We started with strategy — audience, positioning, and the doctrine of why Calyx is the answer when the question is \"can we run like a Fortune 500 without becoming one?\" From there, identity, system, and a campaign built around the line that does the work in one breath.",
      ],
      dropCap: true,
      maxWidth: 820,
      accent: "#d68a3a",
    },

    /* -- Big stat callout — placeholder pending client release ---- */
    {
      kind: "stat",
      eyebrow: "Reach · Engagement to date",
      value: "—",
      label: "Headline metric awaiting client release.",
      accent: "#d68a3a",
    },

    /* -- Brand identity hero — full bleed on petrol -------------- */
    {
      kind: "fullbleed",
      src: `${BASE}/brand-system.png`,
      alt: "Calyx brand identity system",
      caption: { label: "fig. 02 · Identity System", title: "Logo, color, type — built to scale across every surface", fg: "#FBF7EE" },
      surface: "#1f4e6b",
      height: "min(90vh, 875px)",
      fit: "contain",
      imagePadding: "60px 28px",
    },

    /* -- Brand Foundation: covers + interior spread -------------- */
    {
      kind: "multi",
      eyebrow: "§03 · Brand Foundation",
      title: "The doctrine, in print.",
      cols: 2,
      gap: 32,
      maxWidth: 1500,
      surfaceGradient: "linear-gradient(135deg, #1f4e6b 0%, #14323f 50%, #1f4e6b 100%)",
      fg: "#FBF7EE",
      padding: "120px 56px",
      items: [
        { src: `${BASE}/brand-guidelines-covers.png`, alt: "Brand Foundation — published guidelines, opening spread", caption: "Brand Foundation · Opening spread" },
        { src: `${BASE}/brand-guidelines-spread.png`, alt: "Brand Foundation — interior spread", caption: "Brand Foundation · Interior spread" },
      ],
    },

    /* -- "With Calyx, you can" Campaign — slider ----------------- */
    {
      kind: "slider",
      eyebrow: "§04 · Advertising Campaign",
      title: "\"With Calyx, you can.\"",
      slideHeight: 560,
      items: [
        { src: `${BASE}/campaign-1.jpg`, alt: "Campaign — scale the team", caption: "Scale the team without scaling the headache" },
        { src: `${BASE}/campaign-2.jpg`, alt: "Campaign — answer enterprise RFPs", caption: "Answer enterprise RFPs" },
        { src: `${BASE}/campaign-3.jpg`, alt: "Campaign — sleep through a Sunday outage", caption: "Sleep through a Sunday outage" },
        { src: `${BASE}/campaign-4.jpg`, alt: "Campaign — win on capability", caption: "Win on capability, not headcount" },
        { src: `${BASE}/campaign-5.jpg`, alt: "Campaign — work from anywhere", caption: "Work from anywhere, secure everywhere" },
      ],
    },

    /* -- Website — responsive build ------------------------------ */
    {
      kind: "multi",
      eyebrow: "§05 · Corporate Website",
      title: "CalyxIT.com — responsive build.",
      cols: 2,
      gap: 16,
      maxWidth: 1480,
      padding: "120px 16px",
      items: [
        { src: `${BASE}/site-laptop-1.png`, alt: "Calyx website — homepage", caption: "Homepage · Capability-led" },
        { src: `${BASE}/site-laptop-2.png`, alt: "Calyx website — services detail", caption: "Services · Managed IT" },
      ],
    },

    /* -- Sales collateral — image+text split --------------------- */
    {
      kind: "imagetext",
      side: "left",
      src: `${BASE}/sales-collateral.png`,
      alt: "Calyx sales collateral",
      imageBg: "#FBF7EE",
      eyebrow: "§06 · Sales Collateral",
      title: "Tools the sales team would actually carry.",
      body: [
        "An MSP sells in long cycles, against incumbents, into rooms with a CFO and a skeptical IT lead. The collateral has to do real work — not just look the part.",
        "We built a sales kit calibrated to the moment of truth: one-pagers per industry vertical, capability comparisons that don't bury the lede, and case studies that read like proof rather than marketing copy.",
      ],
    },

    /* -- Outcomes prose ------------------------------------------- */
    {
      kind: "prose",
      eyebrow: "§07 · Outcomes",
      title: "Brand presence, sales motion, growth.",
      body: [
        "Through the partnership, Calyx established a recognizable brand presence in a category dominated by interchangeable competitors, aligned the marketing motion to the sales motion, and drove measurable growth against an ambitious plan.",
      ],
      align: "left",
      maxWidth: 760,
      accent: "#d68a3a",
    },

    /* -- Receipts grid ------------------------------------------- */
    {
      kind: "statrow",
      eyebrow: "§08 · Receipts",
      title: "What we can show. What we will.",
      accent: "#d68a3a",
      items: [
        { v: "6",   k: "Boondock Walker capabilities engaged", color: "#1f4e6b" },
        { placeholder: true, k: "Pipeline lift (awaiting client release)" },
        { placeholder: true, k: "Win-rate vs. incumbent (awaiting client release)" },
        { placeholder: true, k: "Branded search lift (awaiting client release)" },
      ],
    },

    /* -- Pullquote — text-only until image arrives --------------- */
    {
      kind: "pullquote",
      quote: "We finally walk into the room looking the size we already are.",
      by: "The Calyx engagement",
      role: "Boondock Walker × Calyx · Multi-year",
    },
  ],
};
