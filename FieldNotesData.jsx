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
  { slug: "introducing-vesper", issue: "No 22", date: "May 21 · 2026", kicker: "Lab / Announcement", title: "Introducing Vesper. An AI-guided brand foundation builder for founders and small businesses.", dek: "An AI-guided brand foundation builder from Boondock Walker. Built for the founders and small business owners who aren't ready for a full agency engagement, but are ready to build something that lasts.", author: "M. Nead", minutes: 6, tag: "Lab", art: "lab", size: "L", featured: true, image: "assets/field-notes/vesper.webp", imageAlt: "Vesper mark: a gold compass-rose starburst centered on deep navy" },
  { slug: "brand-foundations-fail-tuesday", issue: "No 21", date: "May 20 · 2026", kicker: "Brand / Long read", title: "Most brand foundations fail on a Tuesday.", dek: "Built to win the presentation. Not to survive the workday.", author: "M. Nead",  minutes: 5, tag: "Brand",    art: "receipts", size: "L" },
  { slug: "arc-that-closes",          issue: "No 20", date: "May 13 · 2026", kicker: "Voice / Long read",  title: "The story that closes. The story that wins awards.", dek: "Two kinds of stories. They look the same on paper. They do very different jobs.", author: "M. Nead",  minutes: 4, tag: "Voice",    art: "compass",  size: "L", image: "assets/field-notes/arc-that-closes.webp", imageAlt: "Two narrative arcs on plum: same beats, different endings — one terminating in a decorative bloom, the other in a solid filled circle" },
  { slug: "seven-years-unagency",     issue: "No 19", date: "May 09 · 2026", kicker: "Operator's diary",   title: "Seven years unagency. What we learned, what's next.", dek: "We bet on a model. The bet paid. The next one is bigger.", author: "M. Nead",  minutes: 4, tag: "Voice",    art: "compass",  size: "L", image: "assets/field-notes/seven-years-unagency.webp", imageAlt: "Bauhaus-style illustration: a single confident path pivoting at a marked waypoint toward a distant horizon" },
];

window.FN_NOTES = FN_NOTES;
window.FN_TAGS = FN_TAGS;
window.FN_AUTHORS = FN_AUTHORS;
