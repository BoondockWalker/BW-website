# Boondock Walker — Voice & Clarity Audit

**Goal:** A voice that's sophisticated yet friendly and approachable. Editorial flavor stays; reader-friction goes.

**Method:** Read homepage sections (`V3*.jsx`), `SiteHeader`, `AboutSections`, `WorkArchive`, `WorkGrid`, `WorkData`, `CapabilitiesA/B/Data`, `FieldNotesA/Data`, `V3FieldNotes`, `V3Triage`, `CaseBlocks`, `BenchMarks` + data, plus all five HTML chrome pages and one full case (`CaseDetailDataAOD`). Case detail copy is summarized as patterns at the end.

---

## A. Reliability / placeholder concerns (do these first — they undermine trust)

These are not voice issues; they're "this looks unfinished" issues. Fix or hide before public launch.

| # | Location | Current | Concern | Recommendation |
|---|---|---|---|---|
| A1 | `WorkData.jsx:77` | `bigStat: { v: "—", k: "Headline metric awaiting client release" }` (Calyx) | The featured-case rotator (`work.html`) can land on Calyx and show an em-dash where a hero stat should be. Reads as broken. | Either (a) exclude Calyx from rotation until a real number is released, or (b) substitute a qualitative hero — e.g. `v: "9", k: "Capabilities engaged across a multi-year build"` |
| A2 | `WorkData.jsx:81` (Calyx metrics) | `{ v: "—", k: "Pipeline lift (pending)" }` | Same — visible on every case tile. "Pending" reads as TBD. | Drop the placeholder metric entirely; show only the two real ones until a third lands. |
| A3 | `CaseDetailDataAOD.jsx:163–164`, `CaseDetailDataCalyx.jsx:220–222`, `CaseDetailDataAfimac.jsx:259–260`, `CaseDetailDataTT.jsx:166`, `CaseDetailData.jsx:170–171`, `CaseDetailDataFB.jsx:220–221` | `{ placeholder: true, k: "Pipeline / win-rate metric (awaiting client release)" }` etc. — renders as italic em-dash with "Awaiting metric" caption (see `CaseBlocks.jsx:687–692`) | "Awaiting metric" on a Receipts row is the **opposite** of "Receipts, not case studies." Every empty cell weakens the brand's headline promise. | Two options: (1) hide placeholder cells entirely until real numbers land; (2) replace with a qualitative receipt ("Identity in market across 200+ parishes," "Unaided category awareness — pre-launch baseline") so each row carries weight. Option 1 is safer. |
| A4 | `BenchMarksData.jsx:3, 20` (header comments) | `"Artifacts are placeholder commentary on Mark's uploaded images. Replace the \`commentary\` blocks below with the real notes."` + `"Commentary below is placeholder — refine artifact-by-artifact."` | Comments only — but signals the entire BenchMarks corpus may be draft. Scanning the entries, several feel publish-ready (Stanley, HubSpot, Evernote, Bevel) and several are tighter than the homepage copy. Worth a copy-edit pass before shipping daily. | Mark to confirm which entries are ready; remove the header comments either way so future devs don't assume the whole archive is drafty. |
| A5 | `V3FieldNotes.jsx:99` + `FieldNotesData.jsx:21–22` | Homepage advertises `47 notes filed since 2015 · all free, no email gate` but `FN_NOTES` contains only **2 entries**. | Headline number doesn't match the archive. A visitor who clicks through and finds two posts loses trust. | Either backfill the archive to match the claim, or change copy to "Twice monthly · est. 2015" without the count. Same fix for `FNMasthead` in `FieldNotesA.jsx:54` ("X of Y notes filed"). |
| A6 | `V3Sections2.jsx:148` | `operators = ["Walker Bros.", "Halberd", "N×NE", "Field & Co.", "Marrow", "Praxis", "Halyard", "Northbeam", "Bowline", "Atlas Mfg.", "Quarry", "Greylock"]` | These look like placeholder/fictional company names in the §06 "Operators we've shipped for" trust grid. (Real client list lives in `WorkData.jsx` and looks nothing like this.) | Replace with the actual client names from `BW_CASES`: O'Neil, TT Electronics, Archdiocese of Detroit, Calyx, AFIMAC, Envera, Sacred Heart, Maker Town, etc. A trust grid with fake names is a credibility hole. |
| A7 | `V3Sections2.jsx:157` | `since 2015 · 47 cases` | Conflicts with `WorkData.jsx` which has 12 entries and `WorkArchive.jsx` which also says "47" but only ever renders the 12. | Decide the canonical number. If 47 includes pre-2018 work not in the archive, footnote it. If it's aspirational, lower to the real count. |
| A8 | `AboutSections.jsx:27` + `:69–75` | `— 11 years on the bench`; ledger says `11 years` / `62 engagements` / `4.2 yr avg client tenure` / `18 issues` / `3 principals` / `0 B-team` | 2015→2026 is 11 years ✓. But 18 Field Notes filed vs. 47 claimed on homepage = mismatch. 62 engagements vs. 47 cases vs. 12 published cases — three different numbers in three places. | Pick one source of truth for each metric and propagate. |
| A9 | `V3Sections2.jsx:213` | Footer Contact: `"hello@bdw.co"` | Conflicts with `about.html:55` which uses `info@boondockwalker.com`. Two different brand emails on the same site. | Pick one. (Probably `info@boondockwalker.com` since the domain matches the company name.) |
| A10 | `AboutData.jsx:78` | `"Still the only book on category and mind-share that holds up at 40."` (Positioning by Trout & Ries) | "Holds up at 40" is ambiguous — at 40 years old? at age 40? | "Forty years on, still the only book on category and mind-share that holds up." |
| A11 | `CapabilitiesB.jsx:21` | Renders as: **`{d.title} Hire us for {d.italic} {d.after}`** = "What you can hire us for. Hire us for all of it, or any one piece." | Possible JSX/data bug — "Hire us for" appears twice. The data file has `title: "What you can hire us for."` and the component then prepends "Hire us for". Reads broken. | Either drop the literal "Hire us for" from the JSX, or change `title` in `CapabilitiesData.jsx:85` to "Hire us for". |
| A12 | `CapabilitiesData.jsx:56` | Demand pillar example: `{ case: "Diebold Nixdorf", note: "Lifecycle program rebuild — pipeline lift across enterprise SKU lines." }` | "Diebold Nixdorf" is named here but is **not** in `WorkData.jsx`. CTA says "See it in the wild → See the work" and links to `work.html` where Diebold isn't found. | Either add a Diebold case, or change the example to a client that exists in the archive (e.g. Cleveland Whiskey for Demand work). |
| A13 | `CapabilitiesData.jsx:150` | Pull-quote attrib: `"VP Marketing, mid-cap fintech"` | No client named, no case in the archive marked fintech. Reads as either anonymized (fine) or invented (not fine). | If real, add `"— VP Marketing, mid-cap fintech · client identity withheld"`. If composite, drop the quote until a real one's clearable. |
| A14 | `AboutData.jsx:28` | M. Kade bio: `"Before BDW, ran demand at two B2B SaaS companies you've heard of."` | "You've heard of" is a brag-without-receipts — the opposite of "Receipts over decks." | "Before BDW, led demand at two B2B SaaS companies — Stripe-adjacent CRM and a developer-tools brand." Or name them. |
| A15 | `V3FieldNotes.jsx:116` + `FieldNotesA.jsx:67` | `"twice monthly · ~600 operators on the list"` / `"~600 operators on the list"` | If real, fine. If invented, worth confirming. | Confirm number; if firm, keep. If approximate, "a few hundred operators" reads more honest. |

---

## B. Voice audit — by file, by string

Legend: 🔴 Replace · 🟡 Consider · 🟢 Keep (earns its voice keep)

### B1. Homepage — `V3Hero.jsx`

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟢 | hero eyebrow (line 19) | `§01 · The Thesis · A field manual for closing` | Esoteric on first pass but the §01 typographic convention is signature voice. **Keep.** | Keep |
| 🟢 | H1 (line 22) | `Take the long way home.` | Distinctive, memorable, ties to footer. | Keep |
| 🟡 | bottom ledger lede (line 30) | `We don't run sprints. We walk operators across the long territory between a story you're proud of and a pipeline you can predict.` | "Walk operators across the long territory" — the metaphor is dense for the very first paragraph a visitor reads. | Option A (small fix): `We don't run sprints. We walk operators from a story you're proud of to a pipeline you can predict.` Option B (clearer): `We don't run sprints. We work alongside operators until the story you're proud of becomes a pipeline you can predict.` |
| 🟡 | hero ledger key "Bureau" (line 50) | `Bureau` / `Cleveland / Remote` | "Bureau" appears 14+ times sitewide. First touch on the homepage, no definition. | Easiest small fix: change the label key from "Bureau" to "Studio" or "HQ" here on the hero. Or keep "Bureau" but ensure the body copy explains it within the first scroll. |
| 🟢 | "Since 2015" / "Discipline / Brand · Demand · Lab" | Clean. | — | Keep |

### B2. Homepage Thesis — `V3Sections1.jsx` (V3Thesis)

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🔴 | tenets header (line 31) | `Four tenets, hand-stitched.` | "Hand-stitched" is decorative-cute, not earned. Tenets aren't stitched. | `Four tenets. The ones we won't compromise.` Or just `Four tenets we work by.` |
| 🟡 | Tenet iii (line 10) | `We close our own deck. So should you.` | "Close our own deck" — does this mean *deliver* your own sales deck? *Win business with* your own deck? Ambiguous. | `We sell with our own deck. So should you.` |
| 🟢 | Tenet ii (line 9) | `Pipeline is the only honest metric.` | Sharp, clear, opinionated. | Keep |
| 🟡 | Tenet i | `Story is infrastructure, not decoration.` | Lovely. Slight risk: "infrastructure" lands abstract. Borderline. | Keep, but flag — if customers ask "what does that mean" in calls, rework. |
| 🟢 | Tenet iv | `AI shouldn't sound like AI.` | Crisp. | Keep |
| 🟡 | manifesto pull (line 24) | `We don't make ads, & we don't run agencies-of-record.` | Two negations + insider term ("agency of record" = AOR). Strong but inside-baseball. | `We don't make ads. We don't sit on retainer as your one-stop agency.` Or keep — if your ICP is marketers, they know AOR. |
| 🟡 | manifesto body (line 27) | `…founders and revenue leaders who already know their category, already have product–market fit, and need someone to codify the story and run the system that converts it.` | "Codify" is a borderline word in some audiences. | Keep, or soften: "…need someone to **lock in** the story and run the system that converts it." |
| 🔴 | tenet fig. block (line 48) | `Tenet ii. Field manual, page 14.` | There is no page 14. There is no field manual. Reads as fake-attribution. | Drop "page 14." Just `Tenet ii. From the field manual.` Or `Tenet ii.` standalone. |
| 🟢 | big italic (line 51) | `Pipeline, not applause.` | Strong, clear, opinionated. | Keep |
| 🟢 | `fig. 02.ii / BDW · 2026` | Editorial decoration; doesn't impede comprehension. | — | Keep |

### B3. Homepage Pillars — `V3Sections1.jsx` (V3Pillars)

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟡 | eyebrow (line 109) | `§03 · Capabilities · Three Pillars / One Arc` | "One Arc" — story arc? sales arc? Reader infers. | `§03 · Capabilities · Three pillars, one story.` |
| 🟢 | H2 (line 112) | `We do the three things most teams need from five vendors.` | Clear, opinionated, sharp. | Keep |
| 🟡 | Demand body (line 99) | `…HubSpot under the hood — but the work is the motion, not the tool.` | "The motion, not the tool" — clever. "Motion" is jargon. Borderline OK for marketing audience. | Keep, or: "…HubSpot powers it under the hood — but the work is the lifecycle, not the tool." |
| 🔴 | Lab body (line 100) | `AI woven through the marketing motion — not a product, a substrate. Desk-reps that triage inbound, voice-trained content engines, intent scoring, custom tooling. Built for use, not for show.` | Three esoteric terms in one paragraph: **"substrate," "desk-reps," "intent scoring."** A non-AI buyer bounces. | `AI woven into the marketing motion — not a product you bolt on, an ingredient that's everywhere. Custom assistants that triage inbound. Content engines trained on your voice. Lead scoring built on your won deals. Internal tools that earn their keep.` |
| 🟡 | pillar captions (line 98–100) | `Fig. A · Field journal`, `Fig. B · Coffee & napkin`, `Fig. C · Cortex` | Decorative; fine. | Keep |
| 🟢 | "View projects →" CTA | Clear. | — | Keep |

### B4. Homepage Cases — `V3Sections2.jsx` (V3Cases)

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟢 | eyebrow (line 48) | `§04 · Selected Receipts` | Voice. Earns it because next line clarifies. | Keep |
| 🟢 | H2 (line 51) | `Receipts, not case studies.` | Signature line. | Keep |
| 🟡 | TT pull | `Your Vision. Integrated.` | This is the *client's* tagline, presented as the case headline. | Frame it: `"Your Vision. Integrated." — the line we named.` |

### B5. Homepage Lab — `V3Sections2.jsx` (V3Lab)

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟢 | H2 | `AI that sounds like you.` | Crisp. | Keep |
| 🔴 | body (line 102) | `We build custom desk-reps trained on your voice, your lifecycle, and your sales motion. They triage inbound, score intent, and write the first reply — so your team meets a warm pipeline, not a cold inbox.` | "Desk-rep" undefined; "sales motion," "score intent," "warm pipeline / cold inbox" stack four jargon phrases in two sentences. | `We build custom AI assistants trained on your voice, your customer lifecycle, and how your team actually sells. They triage inbound, prioritize the leads worth a call, and draft the first reply — so your team picks up where the interest is real, not in a cold inbox.` |
| 🔴 | composer status (line 115) | `Trail · house voice loaded` | "Trail" as a product/model name with no context. | Either define it (`Trail (our voice model) · loaded with your house style`) or drop: `Voice model loaded · v0.4` |
| 🟢 | composer demo Q&A | Demo content is well-written. | — | Keep |
| 🟡 | secondary CTA (line 106) | `Talk to engineering` | Sounds internal — like a button on a help center. | `Talk to the Lab team` or `Book a Lab call` |

### B6. Homepage Triage — `V3Triage.jsx`

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟡 | eyebrow (line 50) | `Form 04-T · Patient intake` | Patient intake framing is a strong concept the section earns over its run. First-touch may pause readers. | Either keep (works once they read the explainer) or warm it: `Brand Triage · A two-minute self-check.` |
| 🟢 | H2 | `What's actually wrong with the brand?` | Direct. | Keep |
| 🟢 | intro (line 59) | `Most founders feel the symptom long before they can name it. Brand Triage is a two-minute intake we built to put a clinical name on the discomfort…` | Explains the conceit well. | Keep |
| 🟡 | symptom DM-03 (line 15) | `Nurture is a graveyard, not a system` | Vivid but morbid. | Keep — dark metaphor is on voice and the audience self-recognizes. |
| 🟢 | placeholder line (line 116) | `The chart writes itself once the patient speaks up.` | Lovely. Earns. | Keep |
| 🟡 | verdict labels | `WATCH / TREAT / REBUILD` with explanations like `monitor — no urgent intervention`, `targeted work, weeks not quarters`, `foundation cracked — start over` | Medical metaphor is consistent and good. | Keep |
| 🟢 | bottom CTA | `Start Brand Triage →` | Clear. | Keep |

### B7. Homepage Field Notes — `V3FieldNotes.jsx`

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟢 | eyebrow (line 109) | `§07 · Field Notes · Bulletin from the bench` | "Bulletin from the bench" works in context — the H2 below clarifies. | Keep |
| 🟡 | H2 (line 112) | `Notes from the field, filed by the walkers.` | "The walkers" is the *team*. Only obvious if you know the company is named **Boondock Walker**. | Either keep (it's a brand keystone) or soften: `Notes from the field, filed by our team of walkers.` |
| 🟡 | reading time (line 138) | `4 min walk` | Cute, on-brand riff on "min read." | Borderline. Suggestion: keep — small, repeats consistently. |
| 🟡 | featured dek (line 87) | `Two kinds of stories. They look the same on paper. They do very different jobs.` | Solid. Slight passivity. | Keep, or sharpen: `Two kinds of stories. Same on paper. One closes business. One wins awards.` |
| 🟢 | bottom rail (line 169) | `47 notes filed since 2015 · all free, no email gate` | Honest, clear. **(But see A5 — 47 needs to match reality.)** | Keep, fix the number. |

### B8. Homepage Trust — `V3Sections2.jsx` (V3Trust)

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟢 | eyebrow (line 155) | `§06 · Operators we've shipped for` | "Operators" is the brand's word for *clients/customers*. By section 6 the reader gets it. | Keep |
| 🔴 | client grid (line 148) | See A6 — currently lists fictional company names | Trust grid with fake names = bigger problem than any voice nit. | Replace with real client names. |

### B9. Homepage CTA — `V3Sections2.jsx` (V3CTA)

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟢 | H2 | `If your story isn't closing, let's fix the story and the close.` | Sharp. | Keep |
| 🟢 | "typically 2-3 day reply" | Sets expectation. | Keep |

### B10. Homepage Footer — `V3Sections2.jsx` (V3Footer)

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟢 | tagline (line 204) | `A brand & demand bureau for operators who measure work in pipeline, not applause.` | Single best line on the site. | Keep |
| 🟡 | footer rail (lines 207, 224) | `41.49°N · 81.69°W · Cleveland, OH` and `BDW · Vol XII · Est. 2015` | "Vol XII" — twelfth volume of what? Never resolved. | Keep coordinates (flavor). Either resolve Vol XII inline (`BDW · Year XII · Est. 2015`) or drop and let "Est. 2015" carry the time signal. |
| 🟡 | Practice list | `Brand, Demand, The Lab, Field Notes` | Mixing "Field Notes" (a content surface) into a list of practice areas conflates them. | Move Field Notes to a separate "Reading" or "Publications" column. |
| 🔴 | Contact (line 213) | `hello@bdw.co` | See A9. Conflicts with about.html `info@boondockwalker.com`. | Pick one. |
| 🟢 | "Take the long way home." | Brand closer. | Keep |

### B11. Site Header — `SiteHeader.jsx`

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟡 | top rail (line 153) | `BDW · Vol XII · No 04` | "No 04" — fourth what? | Two options. Keep as pure flavor. Or make it functional: `Vol XII · Issue 04 · May 2026`. |
| 🟢 | "Booking Q3 · Cleveland 41.49°N" | Sets capacity expectation. | Keep |
| 🟢 | nav labels | `Capabilities · Work · The Lab · Field Notes · About` | Clear. | Keep |
| 🟢 | CTA button | `Start →` | Clear. | Keep |

### B12. Work Archive — `WorkArchive.jsx`, `WorkGrid.jsx`

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟡 | eyebrow (`WorkArchive.jsx:23`) | `§01 · The Archive · Selected Receipts, 2015–2026` | Second occurrence on the site. By now reader has the metaphor. | Keep |
| 🟢 | H1 | `The receipts.` | Direct, strong. | Keep |
| 🟡 | lede (line 31) | `Forty-seven cases, twelve here in long form. Each one is a story we walked an operator through — from the day the brief showed up on a napkin to the quarter the pipeline finally cleared the forecast.` | "Cleared the forecast" is finance jargon. | Light edit: `Forty-seven cases, twelve here in long form. Each one is a story we walked an operator through — from the day the brief landed to the quarter the pipeline finally hit the number.` |
| 🟡 | stats row labels | `Featured / All-time / Showing` | "Featured" used here actually means "total in this archive" (count = 12), while "All-time" = 47. Labels are mis-mapped. | Relabel: `In this archive / All-time / Showing now`. |
| 🔴 | Featured eyebrow (line 103) | `§02 · Featured Case · The longest walk of 2026` | "The longest walk of 2026" — does it mean the longest engagement? Most complex case? Reader can't tell, and the case it labels (rotates per session) may be a 2-month build. | `§02 · Featured Case · This quarter's spotlight` Or, if meant for the most-involved case: `§02 · Featured Case · The deepest engagement in the archive.` |
| 🟢 | "Read the full file →" CTA | Strong. | Keep |
| 🟢 | "Add a case" eyebrow + "Want your name in this archive?" | Direct, inviting. | Keep |
| 🟢 | "We take three new operators a quarter. The next opening is Q3 2026." | Honest, scarcity-without-puffery. | Keep |

### B13. Capabilities — `CapabilitiesA.jsx`, `CapabilitiesB.jsx`, `CapabilitiesData.jsx`

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟡 | eyebrow (`CapabilitiesData.jsx:8`) | `§02 / Capabilities` (note the `/` instead of `·`) | Inconsistent separator vs. rest of site. | Change all six eyebrows in `CapabilitiesData.jsx` to use `·` and update the splitter in CapabilitiesB to match. |
| 🟢 | hero standfirst (line 9) | `Brand without pipeline is applause. Pipeline without story is noise. We do both — then we operate the system that turns belief into qualified meetings.` | One of the strongest passages on the site. | Keep |
| 🟢 | hero ledger | `Practices: Brand · Demand · Lab`, `Capabilities engaged on a typical retainer: 8–10`, `Bureau: Cleveland / Remote`, `Pricing: Retainer or project` | Clean facts. | Keep |
| 🟢 | Brand pillar lede | `Voice, narrative, messaging that survives a Tuesday-afternoon sales call.` | Specific, vivid. | Keep |
| 🟡 | Demand pillar body (line 45) | `…sales-enablement, and the content that actually fuels them — editorial, campaign, social, paid creative. HubSpot is under the hood for most of it; the work is the motion, not the tool.` | Same "motion, not the tool" repeat from homepage. Fine. | Keep |
| 🔴 | Lab pillar lede (line 66) | `AI woven through the marketing motion — not a product. A substrate.` | "Substrate" lands like a chemistry term. | `AI woven through the marketing motion — not a product. An ingredient.` Or `…not a tool you bolt on. A layer underneath everything else.` |
| 🔴 | Lab service list | `Inbound Triage Agents · Voice-Cloned Content Engines · Intent & Fit Scoring · Custom Internal Tooling · AI Operations Playbooks · Model Selection & Eval` | Almost every item is jargon. | Soften capitalization and translate: `Inbound triage assistants · Content engines trained on your voice · Lead scoring (intent + fit) · Custom internal tools · AI playbooks for ops teams · Model selection & quality testing`. |
| 🟢 | catalog note (line 88) | `A typical engagement uses six to ten of these. Some clients buy one. The list is honest — if it's not here, we don't do it.` | Honest, on-brand. | Keep |
| 🔴 | catalog headline (renders as) | `What you can hire us for. Hire us for all of it, or any one piece.` | See A11 — JSX assembly bug. | Fix the title/JSX duplication. |
| 🔴 | Evidence pull quote attribution (line 151) | `— VP Marketing, mid-cap fintech` | See A13. | Confirm or remove. |
| 🟡 | process H2 (line 158) | `There's no formula. There's a discipline. We call it GUIDE.` | "GUIDE" is an acronym whose letters appear visually downstream. On first read, it reads as a word (a guide), not as G-U-I-D-E. | Tiny clarifying nudge: `…We call it GUIDE — five steps.` Or `…We call it GUIDE. Gather. Understand. Identify. Design. Execute.` |
| 🟡 | process standfirst (line 160) | `Lots of design and marketing firms tout a 'proprietary' process — as if a great brand falls out of a flowchart. It doesn't. Our approach is less about process and more about discipline. Recognizing that all great brands are built on solid foundations. Taking the time to unearth the story — asking the right questions and looking in unconventional places for answers.` | Strong opening but the last two sentences become fragments and lose energy. | Tighten: `Lots of firms tout a 'proprietary' process — as if a great brand falls out of a flowchart. It doesn't. Our approach is less about process and more about discipline: solid foundations, the right questions, and looking for answers in unconventional places.` |
| 🟢 | step descriptions (Gather/Understand/Identify/Design/Execute) | Clear, useful. | Keep |
| 🟢 | CTA body (line 175) | `Two-week diagnostic. Fixed fee. We come back with a written read of your funnel, your story, and where the leak is — yours to keep, regardless of whether we work together.` | Excellent — concrete, scoped, generous. Best section on the page. | Keep |

### B14. About — `AboutSections.jsx`, `AboutData.jsx`

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟢 | H1 (`AboutSections.jsx:17`) | `A bureau, not an agency.` | Defines the brand-vs-category positioning. **The clearest definition of "bureau" on the site is right here — make sure this page is linked early in the user journey.** | Keep |
| 🟢 | standfirst (line 20) | `Boondock Walker is a small, opinionated bureau for brand, demand, and lab work. Founded in 2015 in Cleveland on a single idea: the senior names you hire should be the senior hands on the file — every call, every revision, every shipped deliverable.` | Excellent. | Keep |
| 🟡 | facts list (line 28) | `— Three principals, one bench, no B-team` | "Bench" first appears here — defined contextually as "the team." Most readers will get it from "no B-team" pairing. | Keep |
| 🟢 | Codes section H2 | `Not a manifesto. Just the rules of the bench.` | Anti-puffery. | Keep |
| 🟢 | The Codes (1–7) | All clear, on-brand. Especially: `"A meeting that ends in a screenshot of last quarter's pipeline beats a meeting that ends in a 60-slide PDF."` | Keep |
| 🟢 | Build section H2 | `The shape of the team is the value of the team.` | Strong. | Keep |
| 🟡 | Build panel 03 label (`AboutData.jsx:60`) | `03 · No hierarchy BS` | "BS" is fine for the ICP but flatter than the rest of the page. | Either keep (tonal change-up that works) or tighten: `03 · No hierarchy theater`. |
| 🔴 | Team bio M. Kade | See A14 — "two B2B SaaS companies you've heard of" | Brag-without-receipts. | Fix per A14. |
| 🟢 | Shelf section ("What the bureau learns from") | Good. Specific. | Keep |
| 🟡 | Tenure ledger footer (`AboutSections.jsx:209`) | `We publish these because nobody else does. The receipts of having survived are an asset — not a thing to apologize for.` | "Because nobody else does" rings slightly defensive. | `We publish these because survival is an asset — not a thing to apologize for. The shape of the team is on the record.` |
| 🟢 | CTA H2 | `We don't take projects. We take engagements.` | Strong. | Keep |
| 🟢 | CTA body | `…If you're looking for a one-off deck, you're looking for someone else. If you're looking for the senior team that holds the brand for the next eighteen months, open the conversation.` | Crisp qualification. | Keep |
| 🟡 | bench list block (line 244) | `We don't post openings. We keep a list of senior operators we want to call when the right engagement lands.` | "Operators" here = potential hires, but everywhere else "operators" = clients. The word is doing double duty. | Switch to: `…a list of senior practitioners we want to call when the right engagement lands.` Reserve "operators" for clients. |
| 🟡 | email placeholder | `you@operator.co` | Cute, but if the visitor *isn't* an operator (they're a hire candidate), this placeholder reads weirdly. | `you@yourcompany.com` for hires; `you@operator.co` works fine on the marketing signup. |

### B15. Field Notes archive — `FieldNotesA.jsx`, `FieldNotesData.jsx`

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟢 | wordmark H1 (line 58) | `Field Notes.` | Clean. | Keep |
| 🟢 | standfirst (line 63) | `A bulletin from the bench. Twice-monthly notes on brand, demand, and the lab — written by the operators who do the work. No email gate, no growth-hack gloss.` | Excellent. | Keep |
| 🟢 | featured eyebrow (line 111) | `★ Latest issue` | Clear. | Keep |
| 🟢 | sidebar H3 | `The bulletin, in your inbox.` | Clear. | Keep |
| 🟡 | sidebar body (line 145) | `Twice a month. The two best notes, plus one operator's-diary scrap from the bench. No email gate on the archive — this is just the easier way to read it.` | "Operator's-diary scrap from the bench" — three esoteric tokens in five words. | `Twice a month. The two best notes, plus one short field entry. No email gate on the archive — this is just the easier way to read it.` |
| 🟢 | "Sign me up →" + "First note ships in two weeks" | Clear. | Keep |
| 🟢 | footnote (line 155) | `~600 operators on the list · Unsubscribe with one click · No course funnels, ever` | Honest, anti-growth-hack. (Confirm the 600.) | Keep |

### B16. Case detail typographic system — `CaseBlocks.jsx`, all `CaseDetailData*.jsx`

| Sev | Pattern | Concern | Suggested |
|---|---|---|---|
| 🟢 | `§02 · The Brief` / `§03 · Marks System` etc. | Consistent, clear, helpful as section navigation. | Keep |
| 🟢 | `fig. 02 · Heraldic Mark` etc. (caption labels) | Editorial decoration that doesn't impede comprehension. | Keep |
| 🟡 | `CaseAdjacent` rail (line 819) | `Adjacent cases · Keep walking` | "Keep walking" is a soft pun on the company name. Cute, on brand, low decode-cost. | Keep |
| 🟢 | `← Back to the archive` | Clear. | Keep |
| 🟡 | Case eyebrows like AOD `Client Success Story · Case №02` | "Client Success Story" is a borrowed B2B SaaS phrase that clashes with the bureau's distinctive voice. | Suggest: `Case №02 · Brand · Faith` or just `Case №02 · The file`. |
| 🟡 | Pullquote attributions like AOD: `by: "The Archdiocese engagement"` / `role: "Boondock Walker × Archdiocese of Detroit · 2017 — present"` | When the quote is positioned as a customer testimonial visually but the "by" is the project itself, not a person — readers will feel something is off. | Either attribute to a real person, change visual treatment from "testimonial" to "summary," or label it: `From the project file:` |

### B17. BenchMarks — `BenchMarks.jsx`, `BenchMarksData.jsx`

| Sev | Location | Current | Concern | Suggested |
|---|---|---|---|---|
| 🟡 | site nav | BenchMarks page exists at `/benchmarks.html` but is **not in `SITE_NAV_ITEMS`**. | Reachable how? Easy to ship a daily artifact stream that nobody can find. | Decide: add to nav, or footer link, or keep as a hidden surface. Currently a discoverability gap. |
| 🟢 | masthead standfirst | `One thing on the bench, every day. A photograph, a quote, a link, a recording — whatever the operator pinned to the wall this morning, with a note on why it matters.` | Clear, voice-consistent. | Keep |
| 🟡 | sidebar facts (line 173) | `— One thing from the bench, every day. · — Same one all day · — New one tomorrow` | First bullet duplicates the standfirst. Three bullets together feel sing-songy. | Combine into one cleaner line: `— New artifact daily · same one all day, swaps overnight`. |
| 🟢 | curator strip | `From the desk of Mark Nead · Curator` | Personalizes the section. | Keep |
| 🟢 | individual entries (Stanley, HubSpot, Bevel, Evernote, etc.) | Some of the best-written passages on the site. (Confirm Mark wants these public — see A4.) | Keep |
| 🟡 | "Currently arguing" desk item (line 575) | `kind: "arguing" · title: "Whether 'category creation' is a real strategy."` | "Arguing" as a verb-noun is unusual. | Keep — three-card pattern (reading / listening / arguing) does the work of explaining "arguing" by association. |
| 🟢 | edits section | `Edits to thinking — most recent first.` | Clear and a distinctive trust-builder. | Keep |

---

## C. Cross-site recurring patterns to address

Pull these into a single decision rather than fix piecemeal:

1. **"Operator"** is the brand's word for **client/customer**. Used 30+ times. Mostly works because the audience is operators (founders, revenue leaders). Risk only when "operator" gets repurposed (e.g., About → hiring list calls *candidates* "operators"). **Recommendation:** reserve "operators" for clients. Use "practitioners" or "team members" for internal/hire context.

2. **"Bureau"** is the brand's word for **agency/studio**. Used 14+ times. Reader will hit it on the homepage hero ledger before it's defined. **Recommendation:** the About page hero (`A bureau, not an agency.`) is the cleanest single sentence to anchor this. Make sure that line is reachable in the first scroll from anywhere — or surface a short tooltip/inline gloss on the homepage hero ledger.

3. **"Bench"** does double duty: (a) "on the bench" = years in practice; (b) "bench list" = roster of available practitioners; (c) "bulletin from the bench" = field notes content surface; (d) "from the bench" = BenchMarks page. Four meanings, no glossary. **Recommendation:** narrow it. Option: keep meaning (a) and (b) as bench-as-team-on-call; rename "from the bench" → "from the desk" (which BenchMarks already uses) and "bulletin from the bench" → "bulletin from the field."

4. **"Receipts"** is consistent across the site, well-supported by the §04 H2, and works **as long as the receipts page actually shows numbers**. See Section A — every placeholder "—" entry weakens this metaphor.

5. **"Desk-rep"** is used three times without ever being defined. **Recommendation:** define on first use, then the term can carry the rest of the site.

6. **"The longest walk of 2026"** appears as the Featured Case eyebrow on `work.html` but is decoupled from any actual definition. **Recommendation:** either give it a meaning (the most-involved case) or replace.

7. **"Field manual" / "Vol XII" / "page 14"** — set-dressing that occasionally pretends to be real reference material. Mostly fine as flavor; the AOD `Tenet ii. Field manual, page 14.` (🔴 above) is the one place it crosses the line.

8. **Two contact emails** (`hello@bdw.co` vs. `info@boondockwalker.com`) — pick one.

9. **Three different totals for "how much work"** — 47 cases, 62 engagements, 12 published. Resolve into one consistent number system with a note.

10. **Footer email/CTA text consistency** — different on each page. Use a single footer component or shared constants.

---

## D. Quick triage — what to do this week

1. **Resolve placeholders (A1–A8) and the JSX bug (A11).** These are credibility-eroding regardless of voice. ~1 hour of cleanup.
2. **Fix the trust grid (A6).** Replace the fictional company names with real clients from `WorkData.jsx`. ~10 minutes.
3. **Reconcile the metrics (A5, A7, A8).** Decide canonical numbers for cases / Field Notes / engagements. ~30 minutes once Mark confirms.
4. **One-line clarifying rewrites for the 6 🔴 voice items above.** Concentrated in homepage Lab section (B3, B5), Capabilities Lab section (B13), Featured Case eyebrow (B12), tenet fig (B2), and case eyebrows (B16).
5. **Decide the "operator/bureau/bench" glossary policy (C1–C3).** Pick the canonical use and propagate.

---

## E. Next step / handoff

- **Reliability fixes (Section A)** → JSX/data tweaks (lowest-risk, highest trust impact).
- **Voice rewrites (Section B 🔴 + 🟡)** → sentence-level rewrites with the brand voice.
- **Vocabulary policy (Section C)** → ratify, then propagate.
- **Trust-grid client list (A6)** → pull from `WorkData.jsx`.
