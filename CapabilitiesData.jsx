/* global window */
/* Capabilities — content. Three pillars. Catalog of services. Evidence. */

const BW_CAPABILITIES = {
  hero: {
    eyebrow: "§02 / Capabilities",
    title: "Three practices.",
    titleItalic: "One story arc.",
    standfirst: "Brand alone gets nods. Pipeline alone gets discounted. We build them as one system — so the story earns belief and the belief turns into pipeline.",
    facts: [
      { k: "Practices", v: "Brand · Demand · Lab" },
      { k: "Capabilities engaged on a typical retainer", v: "8 — 10" },
      { k: "Bureau", v: "Cleveland / Remote" },
      { k: "Pricing", v: "Retainer or project" },
    ],
  },

  pillars: [
    {
      n: "01",
      key: "Brand",
      title: "Story architecture",
      tag: "Brand",
      lede: "Positioning, identity, and messaging that hold up on a real sales call.",
      body: "We build positioning that ships. Brand foundation, identity systems, naming, voice & messaging — codified into the actual tools your team uses every day. Decks, one-pagers, sales playbooks, the website. Built to close, not to win awards.",
      services: [
        "Brand Foundation + Strategy",
        "Brand Identity",
        "Naming & Voice",
        "Messaging Architecture",
        "Sales Collateral Design",
        "Website Design + Development",
      ],
      example: { case: "O'Neil Digital Solutions", note: "Brand foundation, identity, sales collateral, website — across a near-decade engagement." },
      surface: "clay",
      objectImg: "assets/field-journal.png",
      objectCap: "Fig. A · Field journal",
    },
    {
      n: "02",
      key: "Demand",
      title: "Nurture & engagement",
      tag: "Demand",
      lede: "Nurture programs, lead scoring, and content that turn cold contacts into real conversations.",
      body: "We operate the engine. Lifecycle programs, lead scoring, nurture choreography, sales-enablement, and the content that actually fuels them — editorial, campaign, social, paid creative. HubSpot is under the hood for most of it; the work is the motion, not the tool.",
      services: [
        "Lifecycle & Nurture",
        "Email Programs",
        "Lead Scoring & Routing",
        "Content Programs",
        "Campaign & Social Content",
        "Sales Enablement",
        "Attribution & Reporting",
        "HubSpot Architecture",
      ],
      example: { case: "AFIMAC", note: "Lifecycle engine for a long-cycle service — introducing CSTL to buyers who didn't know the category existed." },
      surface: "plum",
      objectImg: "assets/coffee-napkin-burg.png",
      objectCap: "Fig. B · Coffee & napkin",
    },
    {
      n: "03",
      key: "Lab",
      title: "Applied AI",
      tag: "Lab",
      lede: "Custom AI that plugs into your marketing team — trained on your voice, your data, and your deals.",
      body: "Desk-reps that triage inbound. Voice-trained content engines that don't sound like AI. Intent scoring trained on your actual won deals, not vibes. Custom internal tooling. We build for use, not for show — and we hand off ownership.",
      services: [
        "Inbound Triage Agents",
        "Voice-Cloned Content Engines",
        "Intent & Fit Scoring",
        "Custom Applications",
        "Lead Gen Tools",
        "AI Operations Playbooks",
        "Model Selection & Eval",
      ],
      example: { case: "Lab — internal", note: "Voice-clone content engine. Trained on the bureau's archive; staff drafts approved at 2× the rate." },
      surface: "forest",
      objectImg: "assets/brain.png",
      objectCap: "Fig. C · Cortex",
    },
  ],

  catalog: {
    eyebrow: "§04 / Services",
    title: "What you can hire us for.",
    italic: "all of it,",
    after: "or any one piece.",
    note: "",
    columns: [
      {
        head: "Brand",
        items: [
          "Brand Foundation",
          "Brand Strategy",
          "Identity & Logo Systems",
          "Naming",
          "Voice & Messaging",
          "Sales Collateral",
          "Website Design",
          "Website Development",
          "Pitch & Sales Decks",
        ],
      },
      {
        head: "Demand",
        items: [
          "Lifecycle Programs",
          "Email Marketing",
          "Lead Scoring",
          "Lead Routing",
          "Content Programs",
          "Editorial & Long-form",
          "Campaign Content",
          "Social Programs",
          "Paid Creative",
          "Sales Enablement",
          "Attribution",
          "Reporting Dashboards",
          "HubSpot Architecture",
          "Campaign Operations",
        ],
      },
      {
        head: "Lab",
        items: [
          "Inbound Triage Agents",
          "Voice-Cloned Content",
          "Intent & Fit Scoring",
          "Custom Applications",
          "Lead Gen Tools",
          "AI Ops Playbooks",
          "Model Selection & Eval",
          "Internal AI Training",
          "Workflow Automation",
          "AI-Assisted Research",
        ],
      },
    ],
  },

  evidence: {
    eyebrow: "§05 / Receipts",
    title: "Some receipts.",
    italic: "Numbers we can name.",
    stats: [
      { v: "3×", k: "Typical return on annual retainer", c: "clay" },
      { v: "+180%", k: "Qualified pipeline growth in year one", c: "plum" },
      { v: "10", k: "Capabilities typically engaged across a retainer", c: "forest" },
    ],
    // TODO: replace anonymized attribution with a real client quote + named attribution.
    pull: {
      quote: "They don't think like an agency. They think like a revenue team that happens to have exceptional conceptual thinkers, writers and designers.",
      attrib: "TODO — real client name + title",
    },
  },

  process: {
    eyebrow: "§06 / How an engagement runs",
    title: "There's no formula. There's a",
    italic: "discipline.",
    after: "We call it GUIDE.",
    standfirst: "Lots of design and marketing firms tout a 'proprietary' process — as if a great brand falls out of a flowchart. It doesn't. Our approach is less about process and more about discipline. Recognizing that all great brands are built on solid foundations. Taking the time to unearth the story — asking the right questions and looking in unconventional places for answers.",
    steps: [
      { n: "01", letter: "G", t: "Gather", sub: "Brand Discovery", body: "We use traditional and unconventional methods to collect and distill information — and work to gain a deeper understanding of your company's culture, values, and marketable differences.", deliverables: ["Stakeholder interviews", "Customer & sales-call review", "Competitive audit", "Insight memo"] },
      { n: "02", letter: "U", t: "Understand", sub: "Brand Foundation", body: "We create a brand foundation that provides uniformity in the way your company interfaces with the target marketplace, and becomes a practical tool to guide brand support through words and actions.", deliverables: ["Brand foundation document", "Positioning & values", "Voice & messaging", "Audience personas"] },
      { n: "03", letter: "I", t: "Identify", sub: "Brand + Marketing Strategy", body: "We look critically at your markets and goals and identify opportunities for your company to deliver dynamic, meaningful brand experiences at new and existing touchpoints.", deliverables: ["Touchpoint map", "Channel & campaign strategy", "Lifecycle blueprint", "Measurement plan"] },
      { n: "04", letter: "D", t: "Design", sub: "Brand Identity + Visual Design", body: "We integrate strategy, evocative messaging, inspiring design, and innovative technology to create the tools, touchpoints, and total brand experience.", deliverables: ["Brand identity system", "Website design + build", "Sales collateral suite", "Campaign creative"] },
      { n: "05", letter: "E", t: "Execute", sub: "Implement, Manage, Measure", body: "We're your brand advocates — from implementing your strategy and managing your touchpoints, to seeking new opportunities to tell your story and create impact.", deliverables: ["Lifecycle programs live", "Campaign operations", "Reporting dashboards", "Quarterly strategy reviews"] },
    ],
  },

  cta: {
    eyebrow: "§07 / Start",
    title: "If your story isn't closing,",
    italic: "let's fix the story",
    after: "and the close.",
    body: "Two-week diagnostic. Fixed fee. We come back with a written read of your funnel, your story, and where the leak is — yours to keep, regardless of whether we work together.",
  },
};

window.BW_CAPABILITIES = BW_CAPABILITIES;
