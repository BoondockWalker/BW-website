/* global window */
/* About page — content. */

const AB_CODES = [
  { num: "01", title: "The principals do the work.", body: "No B-team handoff. The senior names on the proposal are the senior names on every working call. If we wouldn't put our own hand on it, we don't ship it." },
  { num: "02", title: "Receipts over decks.", body: "A meeting that ends in a screenshot of last quarter's pipeline beats a meeting that ends in a 60-slide PDF. The work is the work; the document is the document." },
  { num: "03", title: "Deep before broad.", body: "We turn down the third logo refresh when the homepage hasn't been touched in five years. The job is to find the leverage point and break it open — not to redecorate around it." },
  { num: "04", title: "Listen for the sentence the founder won't say.", body: "The most useful brand work is articulating the thing the leadership team already feels and hasn't named. We spend hours listening before we write a single line of copy." },
  { num: "05", title: "Outcomes over awards.", body: "Most agency awards are either paid-entry or judged on how the work looks, not what it did. We'd rather make you the hero — the brand that holds up in a sales call, the campaign that moves the quarterly number, the story your market tells back to you. The shelf stays dusty on purpose." },
  { num: "06", title: "A small, fluid bench.", body: "No org chart drawn for prestige. We assemble a cross-functional team for each engagement and dissolve it when the work is done. The right specialist is the one who's done it eight times — wherever they live." },
  { num: "07", title: "Earn the next call.", body: "We're selective. The clients we keep are the ones who push back, and we expect the same. Mutual respect is a precondition, not an outcome." },
];

const AB_TEAM = [
  {
    initials: "MN",
    name: "M. Nead",
    role: "Principal",
    bio: "Founded the bureau in 2015. Leads brand foundations and positioning. Spent 18 years on the agency side before deciding the structure was the problem. Writes most of Field Notes.",
    yrs: 24,
    tag: "Brand",
    color: "#C44A2A",
  },
  {
    initials: "MK",
    name: "M. Kade",
    role: "Demand Lead",
    bio: "Joined to build the demand practice in 2023. Owns lifecycle, paid, and the bureau's HubSpot bench. Before BDW, ran demand at two B2B SaaS companies you've heard of.",
    yrs: 12,
    tag: "Demand",
    color: "#5E2638",
  },
  {
    initials: "JO",
    name: "J. Ortiz",
    role: "Lab Director",
    bio: "Stood up the bureau's AI lab in 2024. Builds the desk-rep, evals, and voice-clone scaffolding. Was a research engineer before deciding agency work needed engineers, not just operators.",
    yrs: 9,
    tag: "Lab",
    color: "#C8962B",
  },
];

const AB_BUILD = [
  {
    label: "01 · Senior names",
    title: "The principals do the work.",
    body: "Other shops put senior names on the pitch deck and hand the file to a junior. We don't have a junior layer to hand it to. The names you hire are the hands on the file — every meeting, every revision, every Zoom.",
    metric: "0",
    metricLabel: "B-team layers",
  },
  {
    label: "02 · A bench, not a pyramid",
    title: "Cross-functional, assembled per engagement.",
    body: "Each engagement gets a team built around your brand, not around our org chart. The right specialist is the one who's done it eight times — and they don't have to live in our zip code. The bureau dissolves and reforms with every engagement.",
    metric: "27",
    metricLabel: "Specialists on call",
  },
  {
    label: "03 · No hierarchy BS",
    title: "Without the layer.",
    body: "No account-management layer, no creative-director-of-creative-directors, no four-person sign-off chain. Decisions land same-day. The work moves at the pace of the operators doing it — which is the only pace worth paying for.",
    metric: "1",
    metricLabel: "Approval chain",
  },
];

const AB_LEDGER = [
  { value: "11", unit: "years", label: "On the bench" },
  { value: "12", unit: "selected cases", label: "In the archive" },
  { value: "4.2", unit: "yr avg", label: "Client tenure" },
  { value: "18", unit: "issues", label: "Field Notes filed" },
  { value: "3", unit: "principals", label: "On every call" },
  { value: "0", unit: "B-team", label: "By design" },
];

const AB_SHELF = [
  { title: "Building Strong Brands",                 author: "David Aaker",                   why: "The architecture people still reach for when a brand has to carry a whole portfolio, not just a logo." },
  { title: "Storytelling: Branding in Practice",     author: "Fog, Budtz & Yakaboylu",        why: "A clear case that the story a company tells itself usually matters more than the one it tells customers." },
  { title: "The Brand Gap",                          author: "Marty Neumeier",                why: "The pocket-sized primer we hand to a client who hasn't been walked through the brand conversation before." },
  { title: "Mental Models",                          author: "Indi Young",                    why: "Teaches you to listen for the thinking behind what a customer says — which is where real positioning actually sits." },
  { title: "The Hero and the Outlaw",                author: "Mark & Pearson",                why: "Archetypes without the mysticism. Useful when a client's voice feels cloudy and you need a frame to clear it." },
];

window.AB_CODES = AB_CODES;
window.AB_TEAM = AB_TEAM;
window.AB_BUILD = AB_BUILD;
window.AB_LEDGER = AB_LEDGER;
window.AB_SHELF = AB_SHELF;
