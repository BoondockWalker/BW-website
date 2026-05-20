/* global window */
/* Lab — content. The marketers write the hypothesis. The engineers ship it. Same room, same week. */

const BW_LAB = {
  hero: {
    eyebrow: "§01 / The Lab",
    title: "The Lab.",
    titleItalic: "A bureau for ideas that used to cost millions.",
    spine: "The marketers write the hypothesis. The engineers ship it. Same room, same week.",
    standfirst: "An exploratory sandbox where we prototype the next thing for clients — applications that, until a year ago, would have taken a team of twenty and seven figures to build. Now a pair of us ships a working one in a fortnight.",
    facts: [
      { k: "Cadence", v: "Two-week experiments" },
      { k: "Engagement", v: "Fixed fee" },
      { k: "Output", v: "Client owns it" },
      { k: "Survival rate", v: "About half" },
    ],
  },

  thesis: {
    eyebrow: "§02 / Why the Lab exists",
    title: "Most agencies can't run a Lab.",
    italic: "They only own half the room.",
    standfirst: "Marketing shops can't ship software. Engineering shops can't do brand or demand. We are both — and the combination compounds. The marketers know what to build because they sit in the funnel every day. The engineers actually build it. The feedback loop runs at the speed of one conversation, not three vendors and a Statement of Work.",
    columns: [
      {
        n: "01",
        head: "The economics shifted",
        body: "Things that used to require a team of twenty and a year of runway can now be prototyped by a pair of us in two weeks. Custom CRM tooling, voice-trained content engines, intent models, agentic triage — the floor on what's worth building has fallen through. We pass that floor through to clients.",
      },
      {
        n: "02",
        head: "The loop is closed",
        body: "When the same firm writes the brief and ships the build, the loop between creative and system runs in days, not quarters. The marketer's question — 'what if every inbound got triaged in under sixty seconds?' — becomes the engineer's commit by Thursday.",
      },
      {
        n: "03",
        head: "Performance marketing is the use case",
        body: "AI's first honest job inside a marketing org isn't the press release. It's the work nobody wants to do: routing inbound, drafting variants, scoring fit, summarising calls. The Lab is built around the work — agents that triage, models that score, tooling that closes the gap between media spend and the next creative round.",
      },
    ],
  },

  rules: {
    eyebrow: "§03 / How the Lab runs",
    title: "Discipline, not theatre.",
    italic: "Six house rules.",
    standfirst: "Every Lab engagement runs the same way. Same shape, same shape of bill, same exit. The rules exist because the alternative — an open-ended pilot with no kill criterion — is how agencies waste a year of a client's budget proving nothing.",
    items: [
      { n: "01", head: "Two-week timebox", body: "Every experiment ships, parks, or dies within a fortnight. Anything that wants longer becomes a production engagement with a different shape." },
      { n: "02", head: "Fixed fee, written up front", body: "We price the experiment, not the hours. If we underestimate, we eat it. The client never gets a surprise invoice from the Lab." },
      { n: "03", head: "Kill criteria, written before the build", body: "We agree what 'failed' looks like before we write a line of code. About half of our experiments hit that line. Saying so out loud is the price of the other half." },
      { n: "04", head: "The client owns the output", body: "Code, weights, prompts, dashboards. No vendor lock, no licensing trap, no 'platform fee' in year two. We hand off the keys when we hand off the work." },
      { n: "05", head: "Marketer + engineer, paired", body: "Every experiment is staffed with one of each from day one. Not a brief thrown over a wall — a shared desk, a shared Slack, a shared commit log." },
      { n: "06", head: "Production is a separate decision", body: "Specimens that work get a second conversation about whether and how to operate them in production. The Lab builds; the bureau runs — and they are priced separately, on purpose." },
    ],
  },

  production: {
    eyebrow: "§04 / In production",
    title: "What's running today.",
    italic: "Quietly, for clients.",
    standfirst: "Tools the Lab built that graduated into client operations. Every one of these started as a two-week specimen. Half of their siblings didn't make it this far.",
    items: [
      {
        n: "01",
        name: "Inbound Triage Agent",
        client: "Mid-market B2B SaaS",
        what: "Reads every inbound form, enriches against firmographic data, scores fit-and-intent, and routes to the right rep with a written first-reply draft attached.",
        metric: "Time-to-first-touch",
        metricValue: "< 60s",
        stack: "Claude Sonnet · firmographic enrichment · HubSpot sequences",
        status: "Live · 14 months",
      },
      {
        n: "02",
        name: "Voice-Cloned Content Engine",
        client: "Bureau · internal, and two clients",
        what: "Trained on years of approved copy. Drafts Field Notes, sales one-pagers, and lifecycle email at the bureau's voice, not the model's. Editors approve at twice the rate of cold drafts.",
        metric: "Editor approval",
        metricValue: "2× baseline",
        stack: "Fine-tuned model · house style guide · review queue",
        status: "Live · 9 months",
      },
      {
        n: "03",
        name: "Intent & Fit Model",
        client: "Enterprise services",
        what: "A scoring model trained on the client's actual closed-won deals — not vibes-based ICP. Re-ranks the MQL queue every morning so reps work the right calls first.",
        metric: "Pipeline conversion",
        metricValue: "+38%",
        stack: "Won-deal corpus · gradient boosting · CRM write-back",
        status: "Live · 6 months",
      },
    ],
  },

  specimens: {
    eyebrow: "§05 / Specimens",
    title: "On the bench.",
    italic: "Hypotheses in motion.",
    standfirst: "Experiments in flight or recently concluded. We publish the parked ones too — a Lab page that only shows winners isn't a Lab page, it's a brochure.",
    legend: [
      { key: "shipped", label: "Shipped", color: "forest" },
      { key: "trial", label: "In trial", color: "brass" },
      { key: "parked", label: "Parked", color: "ink3" },
    ],
    items: [
      {
        n: "01",
        name: "Creative Variant Generator",
        hypothesis: "Last week's spend data should write next week's ads — automatically, on brand, with thirty variants on the desk every Monday.",
        build: "Brand-tuned image and copy model wired to the previous week's paid performance report. Outputs a graded variant set into the creative ops queue.",
        result: "30+ variants per week per client. CPM down, CTR up on early tests.",
        status: "trial",
      },
      {
        n: "02",
        name: "Lifecycle Copilot",
        hypothesis: "Lifecycle nurture shouldn't be a quarterly rebuild — it should be a nightly editorial decision against fresh CRM signal.",
        build: "Reads the previous day's CRM motion, proposes sequence edits, sends a morning brief to the lifecycle lead. Nothing fires without a human approval.",
        result: "First client deployment lifts mid-funnel velocity. Still measuring at 60 days.",
        status: "trial",
      },
      {
        n: "03",
        name: "Sales Call → Asset Pipeline",
        hypothesis: "The best content in the company is already being said on sales calls. Most of it evaporates.",
        build: "Recorded call → structured transcript → drafted one-pager, FAQ entry, and Field Note seed. Editors triage; the bureau publishes.",
        result: "One client now produces six pieces of mid-funnel content a month from material that previously vanished.",
        status: "shipped",
      },
      {
        n: "04",
        name: "Account Research Brief",
        hypothesis: "An AE shouldn't spend the morning before a discovery call doing the same five searches everyone does. The brief should be on their desk at 7 a.m.",
        build: "Overnight agent: company news, hiring signal, recent product moves, likely pain. Sent as a single page, attached to the calendar invite.",
        result: "Live for the bureau's own sales team. Pilot conversation underway with a client.",
        status: "trial",
      },
      {
        n: "05",
        name: "Attribution Synthesist",
        hypothesis: "Attribution dashboards are read by nobody. A two-paragraph weekly summary, written in plain English, gets read by everyone.",
        build: "Reads multi-touch attribution + spend data, writes a Monday summary in the client's voice, highlights anomalies, proposes a redirect.",
        result: "Three clients reading it weekly. Not yet measurably moving spend allocation.",
        status: "trial",
      },
      {
        n: "06",
        name: "Voice-Match QA Reviewer",
        hypothesis: "An AI editor that flags drafts that don't sound like the brand — before a human editor wastes a pass on them.",
        build: "Trained on approved-vs-rejected pairs from the bureau's archive. Scores drafts on a four-point voice match; rejects the bottom quartile automatically.",
        result: "Saved editor time, but flagged too many false negatives on technical copy. Parked pending a domain-tuned variant.",
        status: "parked",
      },
    ],
  },

  receipts: {
    eyebrow: "§06 / Receipts",
    title: "Numbers we can name.",
    italic: "Where the Lab has moved a meter.",
    stats: [
      { v: "60s", k: "Inbound time-to-first-touch with the triage agent in production", c: "forest" },
      { v: "2×", k: "Editor approval rate on voice-cloned drafts versus cold drafts", c: "brass" },
      { v: "+38%", k: "Pipeline conversion lift after deploying the intent-and-fit model", c: "clay300" },
    ],
    pull: {
      quote: "It stopped feeling like a vendor relationship. They were shipping things on Thursday that we'd asked about on Monday.",
      attrib: "VP Demand Gen, enterprise services client",
    },
  },

  cta: {
    eyebrow: "§07 / Start",
    title: "Bring us a hypothesis.",
    italic: "We'll ship it.",
    after: "Two weeks. Fixed fee.",
    body: "Tell us the question you'd ask if you weren't sure it was askable yet. We'll come back with a working experiment, a kill criterion, and an honest answer — whether or not it becomes anything more.",
  },
};

window.BW_LAB = BW_LAB;
