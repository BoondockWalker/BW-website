# Changelog

Site-level changes, newest first. Each entry refers to the merged PR
on `main`; the PR carries the full diff and the detailed rationale.
Earlier work (go-live staging, Brand Agent build, Contact page) lives
in git history prior to this file.

## 2026-10-31

### Lab

- **§04 In production tiles — demo modal.** Each production tile now
  has a "See the demo →" button that opens a lightbox-style modal
  with a longer write-up, screenshot slots, and a link back to the
  parent case study. Hash-driven, so `lab.html#tool-postage-optimizer`
  deep-links straight into the matching modal.
  ([#319](https://github.com/BoondockWalker/BW-website/pull/319))
- **Specimens — 3-across grid with a true checkerboard tint.** The
  §05 bench now lays out as two rows of three on desktop (two across
  on tablet, one on mobile). Alternating tint switched from an index
  stripe to a `(row + col) % 2` checkerboard driven by the live
  column count, so adjacent cells never share a tint at any width.
  ([#318](https://github.com/BoondockWalker/BW-website/pull/318))
- **§04 In production — reframed as "successful outputs of the Lab".**
  Standfirst rewritten so the three completed tools read as Lab
  specimens that cleared their kill criteria and shipped into client
  operations. ([#316](https://github.com/BoondockWalker/BW-website/pull/316))
- **Specimen cards differentiated.** Each of the six §05 specimens now
  carries its own BW palette accent on the number, section labels,
  and a 3px top-left rule. New `BW.sky300` (`#8FBFCE`) replaces the
  darker `BW.sky` on the two cards where it was getting lost against
  plum. Every other specimen card picks up a very subtle lighter
  tint. ([#315](https://github.com/BoondockWalker/BW-website/pull/315),
  [#316](https://github.com/BoondockWalker/BW-website/pull/316))
- **§04 In production — portfolio installed.** Marketing Budget
  Planner, USPS Postage Optimizer, Communications Audit Tool replace
  the earlier placeholder tools. ([#315](https://github.com/BoondockWalker/BW-website/pull/315))

### Brand Agent

- **New § The team.** The AI deliverable is a roster of specialist
  agents, not a single chatbot. Eight role cards (Brand strategist,
  Research analyst, Content manager & writer, Design director,
  Advertising planner, SEO & AI-search specialist, Nurture &
  lifecycle operator, Sales & ABM specialist) sit between § What's in
  the build and § Continuity, each tagged Brand or Demand. Downstream
  § eyebrows renumbered. ([#314](https://github.com/BoondockWalker/BW-website/pull/314))

### Homepage

- **01 · Brand pillar — speaks to design too, not just voice.**
  Subtitle changed from "Story architecture" to "Positioning &
  design"; body expanded to name the identity and day-to-day surfaces
  alongside the voice/narrative/messaging side. ([#313](https://github.com/BoondockWalker/BW-website/pull/313))

### Capabilities

- **Hero pillar bar — service colours + hover flood.** Each of the
  three pillar cells on the Capabilities hero now wears its
  destination section's actual surface colour. Numbers and eyebrows
  pick up the matching service colour too — 01 clay (Brand), 02 plum
  (Demand), 03 forest (Lab) — and the cells carry a subtle wash of
  that colour at rest. On hover (and keyboard focus), the cell floods
  with the full section colour, a 2px chalk accent rule sweeps in
  along the top, the ↓ cue slides down 4px, and the text flips to
  chalk so it stays legible on the flood. Suppressed under
  `prefers-reduced-motion`. ([#323](https://github.com/BoondockWalker/BW-website/pull/323),
  [#324](https://github.com/BoondockWalker/BW-website/pull/324))
- **Pillar motifs + hover text fix.** Each pillar cell now carries a
  36px version of its homepage fig image — field journal for Brand,
  coffee napkin for Demand, cortex for Lab (with the same sepia
  filter V3Pillars uses so it reads warm on the dark surface) — at
  about 45% opacity at rest, going to full opacity and nudging down
  2px on hover alongside the ↓. Also fixes a specificity bug where
  the hover colour flip was being beaten by the inline resting
  colour, so the number + eyebrow were disappearing on the flooded
  background. ([#326](https://github.com/BoondockWalker/BW-website/pull/326))

### About

- **The Shelf — refreshed with Mark's actual books.** Six titles
  swapped in: Building Strong Brands (Aaker), Storytelling in
  Practice (Fog/Budtz/Yakaboylu), The Brand Gap (Neumeier), Mental
  Models (Young), The Hero and the Outlaw (Mark & Pearson), This Is
  Marketing (Godin). Each with a short "why" note and an Amazon link
  on the title. ([#311](https://github.com/BoondockWalker/BW-website/pull/311))
- **Spine graphics.** A small coloured book-spine sits beside each
  row number — six distinct BW palette colours, slightly varied
  heights, light inset shadows. ([#311](https://github.com/BoondockWalker/BW-website/pull/311))
- **Headline changed.** "What the bureau learns from." → "What we
  learn from." ([#311](https://github.com/BoondockWalker/BW-website/pull/311))
- **Ledger tagline removed.** The italic "We publish these because
  nobody else does…" line below the tenure-ledger grid is gone.
  ([#312](https://github.com/BoondockWalker/BW-website/pull/312))

### Case studies

- **Right-rail "Case index" on every case page.** Small sticky
  sidebar listing every §-marked section, auto-derived from the
  block eyebrows. Click to jump; whichever section is most visible
  gets a clay accent via `IntersectionObserver`. Hidden below
  1200px. ([#321](https://github.com/BoondockWalker/BW-website/pull/321))
- **O'Neil case — AI tool spotlights replace the 3-up grid.** The
  short-lived §08.5 Lab-inside-the-engagement grid is gone. In its
  place sits §07.5 USPS Postage Optimizer, built as an overlap-pattern
  spotlight that matches the existing §07 Comms Audit (Healthcare
  Communication Assessment). Each AI spotlight now also carries an
  anchor id (`tool-comms-audit`, `tool-postage-optimizer`) and a
  "See the full demo →" link into the Lab modal. Marketing Budget
  Planner was pulled off the O'Neil page — it was built for an
  anonymised client, so it only lives on the Lab page now.
  ([#320](https://github.com/BoondockWalker/BW-website/pull/320))
- **O'Neil case — new § AI tools built inside the engagement.** First
  pass at wiring the Lab-born AI tools into the O'Neil case page as
  a 3-up grid, superseded in the next PR by the per-tool spotlights
  above. `OverlapBlock` picked up `id` and `cta` props so any case
  spotlight can be anchored and linked. ([#319](https://github.com/BoondockWalker/BW-website/pull/319))

### Meta

- **`CHANGELOG.md` added.** This file. Captures site-level changes
  per date, each entry linking back to the merged PR for the full
  diff and rationale. Earlier work (go-live staging, Brand Agent
  build, Contact page) is in git history prior to this file.
  ([#317](https://github.com/BoondockWalker/BW-website/pull/317))
