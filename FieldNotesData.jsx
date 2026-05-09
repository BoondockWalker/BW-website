/* global window */
/* Field Notes — archive content. 18 notes + tags + authors. */

const FN_TAGS = [
  { key: "Brand",     color: "#C44A2A", short: "Brand" },
  { key: "Demand",    color: "#5E2638", short: "Demand" },
  { key: "Lab",       color: "#C8962B", short: "Lab" },
  { key: "Voice",     color: "#3F6976", short: "Voice" },
  { key: "Receipts",  color: "#2E4626", short: "Receipts" },
];

const FN_AUTHORS = {
  "M. Nead":    { initials: "MN", role: "Principal" },
  "M. Kade":    { initials: "MK", role: "Demand Lead" },
  "J. Ortiz":   { initials: "JO", role: "Lab" },
  "S. Reaves":  { initials: "SR", role: "Strategy" },
  "P. Doyle":   { initials: "PD", role: "Editorial" },
};

const FN_NOTES = [
  { slug: "seven-years-unagency",     issue: "No 19", date: "May 09 · 2026", kicker: "Operator's diary",   title: "Seven years unagency. What we learned, what's next.", dek: "We bet on a model. The bet paid. The next one is bigger.", author: "M. Nead",  minutes: 4, tag: "Voice",    art: "compass",  size: "L", featured: true, image: "assets/field-notes/seven-years-unagency.webp", imageAlt: "Bauhaus-style illustration: a single confident path pivoting at a marked waypoint toward a distant horizon" },
  { slug: "stop-calling-it-heritage", issue: "No 18", date: "Apr 22 · 2026", kicker: "Voice / Long read",   title: "The year you stop calling it heritage.",         dek: "A 70-year wholesale brand has more in common with a startup than it thinks. The receipts of having survived are an asset operators buy — but only if you stop apologizing for the year on the door.", author: "M. Nead",  minutes: 9, tag: "Voice",    art: "voice",    size: "L" },
  { slug: "five-stages-delete",       issue: "No 17", date: "Apr 08 · 2026", kicker: "Nurture",            title: "Five lifecycle stages we'd delete tomorrow.",     dek: "Most lifecycle programs collapse under their own taxonomy. Here's the cull list.", author: "M. Kade",    minutes: 6, tag: "Demand",   art: "pipeline", size: "M" },
  { slug: "desk-rep-failure-rate",    issue: "No 16", date: "Mar 25 · 2026", kicker: "AI · Lab",           title: "Why our desk-rep starts with the failure-rate.",  dek: "Build the AI agent that admits it doesn't know first. Trust compounds.", author: "J. Ortiz",   minutes: 7, tag: "Lab",      art: "lab",      size: "M" },
  { slug: "category-of-one",          issue: "No 15", date: "Mar 11 · 2026", kicker: "Positioning",        title: "Category of one — without a category.",           dek: "If your buyer doesn't have a name for what you do, you can't be searched. So name it.", author: "M. Nead",  minutes: 5, tag: "Brand",    art: "compass",  size: "S" },
  { slug: "halberd-rebuild-wrong",    issue: "No 14", date: "Feb 25 · 2026", kicker: "Operator's diary",   title: "What we got wrong on the Halberd rebuild.",       dek: "Six months in, the foundation document was right. The rollout cadence wasn't. A confession.", author: "M. Kade",    minutes: 8, tag: "Receipts", art: "receipts", size: "M" },
  { slug: "sales-call-tax",           issue: "No 13", date: "Feb 11 · 2026", kicker: "Voice",              title: "The sales-call tax on bad messaging.",            dek: "Every sloppy sentence on the homepage costs ~14 minutes of every sales call. Math.", author: "S. Reaves",  minutes: 4, tag: "Voice",    art: "voice",    size: "S" },
  { slug: "hubspot-as-substrate",     issue: "No 12", date: "Jan 28 · 2026", kicker: "Demand · Tooling",   title: "HubSpot as substrate, not strategy.",             dek: "The platform is plumbing. Stop letting the plumbing pick the meal.", author: "M. Kade",    minutes: 6, tag: "Demand",   art: "pipeline", size: "M" },
  { slug: "voice-clone-eval",         issue: "No 11", date: "Jan 14 · 2026", kicker: "Lab",                title: "Evaluating a voice-clone the way you'd evaluate a writer.", dek: "Five rubrics we use before any AI-generated copy gets near a client review.", author: "J. Ortiz",   minutes: 7, tag: "Lab",      art: "lab",      size: "M" },
  { slug: "founder-deck-anti",        issue: "No 10", date: "Dec 17 · 2025", kicker: "Brand · Receipts",   title: "The founder deck anti-pattern.",                  dek: "When the founder closes their own deals, the deck is right. When the team can't, the deck is a feeling.", author: "M. Nead",  minutes: 6, tag: "Brand",    art: "compass",  size: "L" },
  { slug: "twelve-month-ledger",      issue: "No 09", date: "Dec 03 · 2025", kicker: "Receipts",           title: "Twelve months on the ledger.",                    dek: "What the bureau shipped in 2025, by hours and by outcomes — open ledger.", author: "P. Doyle",   minutes: 5, tag: "Receipts", art: "receipts", size: "S" },
  { slug: "intent-vs-fit",            issue: "No 08", date: "Nov 19 · 2025", kicker: "Demand",             title: "Intent ≠ fit. Stop scoring them on the same axis.", dek: "Two coordinates, one decision. The matrix that beats the score.", author: "M. Kade",    minutes: 7, tag: "Demand",   art: "pipeline", size: "M" },
  { slug: "long-form-comeback",       issue: "No 07", date: "Nov 05 · 2025", kicker: "Voice · Editorial",  title: "The long-form comeback nobody saw coming.",        dek: "Why 3,000-word pieces are outperforming 300-word pieces — even on LinkedIn.", author: "S. Reaves",  minutes: 6, tag: "Voice",    art: "voice",    size: "M" },
  { slug: "rebrand-vs-refit",         issue: "No 06", date: "Oct 22 · 2025", kicker: "Brand",              title: "Rebrand vs. refit — and how to tell.",            dek: "Most rebrands should have been refits. A four-question test before the budget locks.", author: "M. Nead",  minutes: 5, tag: "Brand",    art: "compass",  size: "S" },
  { slug: "agent-handoff",            issue: "No 05", date: "Oct 08 · 2025", kicker: "Lab",                title: "The hand-off problem in inbound triage.",         dek: "Where the AI stops and the human starts is the whole product. We're 11 months into getting it right.", author: "J. Ortiz",   minutes: 8, tag: "Lab",      art: "lab",      size: "M" },
  { slug: "naming-by-subtraction",    issue: "No 04", date: "Sep 24 · 2025", kicker: "Brand · Voice",      title: "Naming by subtraction.",                          dek: "We threw out 240 names to find the one. The 240 were the work.", author: "P. Doyle",   minutes: 4, tag: "Brand",    art: "compass",  size: "S" },
  { slug: "pipeline-honest-metric",   issue: "No 03", date: "Sep 10 · 2025", kicker: "Demand · Voice",     title: "Pipeline is the only honest metric.",             dek: "Awareness, engagement, sentiment — fine. But you eat what you close.", author: "M. Nead",  minutes: 5, tag: "Demand",   art: "pipeline", size: "L" },
  { slug: "field-manual-launch",      issue: "No 02", date: "Aug 27 · 2025", kicker: "Bureau",             title: "We started a field manual.",                      dek: "Why the bureau is publishing notes again, twice a month, no email gate.", author: "M. Nead",  minutes: 3, tag: "Voice",    art: "voice",    size: "S" },
  { slug: "ten-year-receipts",        issue: "No 01", date: "Aug 13 · 2025", kicker: "Receipts",           title: "Ten years of receipts.",                          dek: "What we've shipped, what we'd unship, and what we'd do again — a decade in.", author: "S. Reaves",  minutes: 9, tag: "Receipts", art: "receipts", size: "M" },
];

window.FN_NOTES = FN_NOTES;
window.FN_TAGS = FN_TAGS;
window.FN_AUTHORS = FN_AUTHORS;
