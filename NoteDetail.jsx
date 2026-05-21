/* global React, BW, FN_NOTES, FN_AUTHORS, FN_TAGS, FNArt, fnTagColor, FNCard, FNNewsletterRail */

/* Long-form note bodies — keyed by slug. Each note's body is an array of
   block descriptors (lede / p / h2 / pullquote / ol / ul / endnote) that
   <NoteBlock> renders. Margin notes live in the parallel marginalia map.
   To add a new post: register both maps under the same slug. */
const NOTE_BODIES = {
  "introducing-vesper": [
    { kind: "lede", text: "A copywriter on a client team opened the Vesper preview last Tuesday afternoon. She also had the brand foundation we'd built her — a sixty-four-page PDF — open in another window. We asked her to write a paid social ad." },
    { kind: "p", text: "Within a minute, she closed the PDF. She didn't open it again for the rest of the afternoon." },
    { kind: "p", text: "That was the test. That was the point." },
    { kind: "p", text: "For most of our twenty years in this work, we have written brand foundations. Many of them have been good. A few have been very good. None of them have been used as often as the strategy inside them deserved. We wrote about that gap a Tuesday or two ago, and ended the note with a sentence we knew we'd have to back up — more on that soon." },
    { kind: "p", text: "Vesper is the soon." },
    { kind: "h2", text: "What Vesper is." },
    { kind: "p", text: "Vesper is a working surface for your brand foundation. The strategy we already wrote with you — positioning, voice, audiences, messaging — gets ingested, indexed, and made queryable. Your team works against it, inside the tools they already use, in the ten minutes they actually have." },
    { kind: "p", text: "It is not a chatbot strapped to a PDF. It is not a generic AI brand generator. It is a small, opinionated system that only knows your brand, only answers the questions your team is actually asking, and only sounds like you." },
    { kind: "h2", text: "What it does today." },
    { kind: "p", text: "The early-access preview ships with three capabilities. Each one solves a moment we have personally watched practitioners get stuck in, hundreds of times, on hundreds of projects." },
    { kind: "ol", items: [
      "Ask. A copywriter, mid-sentence, can ask 'would we say unlock or enable here?' and get an answer in the brand's voice, with a one-line reason rooted in the foundation. The cost of a brand decision drops from a calendar invite to a keystroke.",
      "Score. Paste a draft — an ad, a cold email, a paragraph from the website — and Vesper rates it against the foundation on four axes: voice match, audience fit, decision shape, and one-thing clarity. Editors stop wasting passes on drafts that aren't close yet.",
      "Embed. Vesper lives where the work happens — Slack, Google Docs, the brief template, the cold-email tool. The team meets it inside their workflow, not in another tab they have to remember to open.",
    ]},
    { kind: "h2", text: "What's coming." },
    { kind: "p", text: "We are shipping in small capabilities, not platform releases. Each one is the answer to a moment a marketer or operator has stood in front of, alone, with the brand book on a shelf in a different room. Already in build or pilot:" },
    { kind: "ol", items: [
      "A brief composer that drafts campaign briefs in the foundation's voice, with the decisions surfaced rather than assumed.",
      "A sales-enablement layer that fields rep questions in the brand's words — so the deck and the discovery call stop telling two different stories.",
      "A voice-trained outbound writer that produces the first version of cold outreach in your voice, then learns from what reps actually send.",
      "An on-brand draft reviewer for partners and freelancers — so the copywriter you've never met can ship something that sounds like you on the first try.",
    ]},
    { kind: "p", text: "We will ship them when they work, not when the roadmap says." },
    { kind: "pullquote", text: "The foundation isn't the deliverable. The foundation in the writer's hands at 2pm is.", attr: "Field Notes No 22" },
    { kind: "h2", text: "Who it's for." },
    { kind: "p", text: "Vesper is built for the team a brand foundation always promised to serve and rarely actually reached — the practitioners doing the daily work. Copywriters on deadline. Sales leaders writing a follow-up that has to sound like the company, not like them. Junior designers laying out a one-pager on a Tuesday at 2pm." },
    { kind: "p", text: "It is not built to impress the boardroom. It is built to be used by the people the boardroom hires." },
    { kind: "h2", text: "How early access works." },
    { kind: "p", text: "We are rolling out in three rings. Bureau clients first — they are already in. Operators we have worked with before, second. Then a small early-access list, opened today." },
    { kind: "p", text: "Here is what you should expect from us if you put your email on the list: an honest preview when we have something to show, an invitation to break it when we have something to test, and a feedback loop tight enough that the things you point at on Monday show up in the build by the end of the week." },
    { kind: "p", text: "No drip campaign. No 'we're excited to announce.' When Vesper is ready for you, you will know because we will send you one short email saying so." },
    { kind: "p", text: "The signup lives at vesper.html on this site. We will see you there." },
    { kind: "endnote", text: "Mark is the principal at Boondock Walker. Eighteen months ago he wrote Vesper on the back of a notebook. The notebook is on its third refill, and the name still feels right." },
  ],
  "brand-foundations-fail-tuesday": [
    { kind: "lede", text: "The brand foundation arrives bound. Or designed, or presented, or all three. Pages on purpose, audience, voice, pillars, archetype. The CMO nods. The deck gets shared in a company-wide email with the subject line \"exciting.\" A few people open it. Most don't." },
    { kind: "p", text: "Three months later, it's a file path nobody can find." },
    { kind: "p", text: "This isn't a knock on the work. The strategy in those decks is usually fine — sometimes excellent. The problem isn't what's in the foundation. It's that the foundation can't be used by the people who need to use it, in the moments they need to use it." },
    { kind: "h2", text: "The Tuesday test." },
    { kind: "p", text: "It's Tuesday at 2pm. A copywriter is writing a paid social ad. A sales rep is drafting a follow-up email to a stalled deal. A junior designer is laying out a one-pager for a trade show booth. None of them have an hour to re-read a 60-page document. They have maybe ten minutes before the next thing." },
    { kind: "p", text: "Can any of them use the brand foundation, in those ten minutes, to make a decision?" },
    { kind: "p", text: "If the answer is no — and for most foundations, the honest answer is no — the foundation didn't fail at strategy. It failed at format." },
    { kind: "h2", text: "Why this keeps happening." },
    { kind: "p", text: "Three reasons, and they compound." },
    { kind: "p", text: "The first is that brand foundations get sold to executives, so they get shaped for executives. The deliverable has to survive a boardroom presentation, justify a six-figure invoice, and read as serious. That pushes it toward density, design polish, and length. None of which help a copywriter on a Tuesday." },
    { kind: "p", text: "The second is format inheritance. The deck-and-PDF combination is a hand-off shape from a print era. It made sense when \"the work\" meant a campaign that got produced once a year by a small team in the same building. It makes much less sense now, when the work is distributed across a dozen people in five tools and gets shipped every day." },
    { kind: "p", text: "The third is the billing model. Agencies bill on the artifact, not on what the artifact enables. So the artifact gets thicker. More pages, more sections, more archetypes, more frameworks. Length signals value at the point of delivery. It signals nothing about whether the thing will get used." },
    { kind: "p", text: "The result, across the industry, is consistent: foundations that win the presentation and lose the workday." },
    { kind: "h2", text: "What a working foundation actually has to do." },
    { kind: "p", text: "Reframe the deliverable. Not a document. A reference surface — something a practitioner can work against in the ten minutes they actually have." },
    { kind: "p", text: "Three properties matter." },
    { kind: "ol", items: [
      "Queryable. A copywriter should be able to ask it a question and get an answer. \"Would we say 'unlock' or 'enable' here?\" \"Does this headline sound like us?\" \"What's the one-sentence version of our positioning I can drop into a cold email?\" The foundation has to be searchable, askable, navigable — not just readable.",
      "Decision-shaped. Built around the choices people actually make. A practitioner on a Tuesday is not asking \"what is our brand archetype.\" They're asking \"should this ad open with a stat or a story.\" The foundation has to be organized around the second question, not the first. The strategic abstractions are upstream; the daily decisions are downstream; the foundation has to translate.",
      "Embedded. Living where the work happens. Not in a shared drive. In the brief template, the writing tool, the slide deck, the email draft. The foundation has to meet the practitioner inside their workflow, not require them to leave it.",
    ]},
    { kind: "p", text: "A foundation with those three properties looks almost nothing like a 60-page PDF. It looks more like infrastructure than artifact." },
    { kind: "h2", text: "What changes when the foundation gets used." },
    { kind: "p", text: "This is the part that's easy to miss. A foundation that doesn't get used isn't neutral. It's not just expensive shelfware. It's worse than that — because in its absence, everyone invents the brand fresh every Tuesday." },
    { kind: "p", text: "The copywriter writes the ad in their own voice. The sales rep drafts the email in theirs. The designer makes a call on the one-pager based on what feels right that afternoon. None of those people are doing anything wrong. They're doing their jobs, with the tools they have, under the pressure they're under. But the cumulative effect is a brand that drifts — not because the strategy was bad, but because the strategy never made it to the workday." },
    { kind: "pullquote", text: "Brand consistency isn't a guideline document. It's a thousand small Tuesdays going the right way.", attr: "Field Notes No 21" },
    { kind: "p", text: "A foundation that gets used compounds. Every brief, every email, every ad pulls in the same direction without anyone having to think hard about it. That's the real product. The PDF was never the product." },
    { kind: "h2", text: "What we're building." },
    { kind: "p", text: "We've spent twenty years writing brand foundations. The good ones got used. The great ones still didn't get used enough." },
    { kind: "p", text: "So we're building something to close that gap — a tool that turns the foundation from a document you read once into a surface you work against every day." },
    { kind: "p", text: "More on that soon." },
    { kind: "endnote", text: "Mark is the principal at Boondock Walker. He has, over the years, written a number of 60-page brand foundations he is otherwise proud of." },
  ],
  "arc-that-closes": [
    { kind: "lede", text: "Most marketing teams think they're telling one kind of story. They're actually telling two. One ends with a customer saying yes. The other ends with an award on the shelf." },
    { kind: "p", text: "These two stories often look the same on paper. They do very different jobs." },
    { kind: "h2", text: "The story that wins awards." },
    { kind: "p", text: "The award-winning story is the one most agencies are trained to tell. Set up a problem. Build a beautiful middle. End on something cinematic — a hero shot, a brand mark in the rain, a feeling. The shape is satisfying. It rewards craft. It does not, however, ask the viewer to do anything." },
    { kind: "p", text: "Its measure of success is resonance. You watched it. You felt something. You maybe shared it. The agency wins an award. The client gets a plaque on the wall. The quarter ends. The pipeline forecast falls short. Nobody traces those last two sentences back to the first three." },
    { kind: "p", text: "This isn't a complaint about beautiful work. The work is often beautiful. The problem is that the structure has no place for the customer to step in." },
    { kind: "h2", text: "The story that closes." },
    { kind: "p", text: "The other story is shaped to help someone make a decision. Four parts:" },
    { kind: "ol", items: [
      "What's at stake. The customer's current path is failing in a way they can name in one sentence.",
      "The choice. Two roads. One they're on. One you're offering.",
      "The consequence. What happens twelve months down each one.",
      "The next step. Sized so small it would feel silly not to take it.",
    ]},
    { kind: "p", text: "The closing story isn't always beautiful. It can be plain. It always has a clear ending. It's shaped like a sale because that's what it's modeled on." },
    { kind: "pullquote", text: "The award story rewards craft. The closing story rewards clarity. They aren't opposites — but most teams pick one and let the other one fall away.", attr: "Field Notes No 20" },
    { kind: "h2", text: "Why the award story is the default." },
    { kind: "p", text: "Three reasons. First, the award story is what gets agencies hired in the first place. New-business reels are built from old award winners. Second, it's what creative teams are taught — film school and ad school both train people to write for resonance, not for decisions. Third, the people who hire agencies are usually marketers, and marketing's job sits one step before the close. The agency hands the story to the sales team, and the sales team tries to bend it into something that closes. Usually it can't." },
    { kind: "p", text: "This is part of why we built Boondock Walker the way we did. When the people writing the brand story also sit in on the pipeline review, the story comes out the right shape from the start." },
    { kind: "h2", text: "How to tell which story your team is telling." },
    { kind: "p", text: "Three quick questions. Run them on the next thing your team puts in front of you." },
    { kind: "ol", items: [
      "Where in the story does the customer make a decision? If you can't point at the moment, it's an award story.",
      "What's the next sentence after the story ends? If it's \"and the brand won an award,\" award story. If it's \"and the customer bought,\" closing story.",
      "Could you cut the last twenty seconds and lose anything? If no, it's an award story dressed up. The closing happens in those last twenty seconds.",
    ]},
    { kind: "p", text: "The closing story isn't anti-craft. It's harder to write than the award one, because the structure has to be both beautiful and useful. Most agency work picks beautiful and lets useful go. Our job is to insist on both — useful first, beautiful second, no compromise." },
    { kind: "p", text: "Pipeline, not applause. The closing story is the one we file under." },
    { kind: "endnote", text: "Mark is the principal at Boondock Walker. He still likes a beautiful film as much as the next person. He just won't ship one without an ending." },
  ],
  "seven-years-unagency": [
    { kind: "lede", text: "Seven years ago, I sat at the kitchen table and decided Boondock Walker wasn't going to be an agency anymore." },
    { kind: "p", text: "We weren't going to scale into a holding company. We weren't going to staff up the floor with B and C teams. We weren't going to become the place that promised the senior strategist in the pitch and delivered the junior on the work. We were going to be something else — a shape the industry didn't have a word for yet, so we made one up." },
    { kind: "p", text: "We called it unagency. The name was half a punchline and half a position. The position was real." },
    { kind: "h2", text: "The shape we picked." },
    { kind: "p", text: "The model, in one paragraph: the client and their brand at the center. A cross-functional team built specifically for that client — strategy, brand, story, demand — pulled from a pool of operators who had already shipped, already won, already failed at the work they were now being asked to do. No silos. No farm leagues. No layer of account management between the work and the people doing it. We were entrepreneurs first, agency second, and we structured the bureau accordingly: lean, flat, fluid." },
    { kind: "p", text: "That's the part that read well in the deck. The part that read well in practice took longer to settle." },
    { kind: "h2", text: "What worked." },
    { kind: "p", text: "What worked was the math. Lower overhead meant lower fees relative to the senior talent the client got. Senior talent meant fewer revisions. Fewer revisions meant faster cycles. Faster cycles meant we could actually take on the strategic question — not just produce the deliverable. Compounding, the way good systems compound." },
    { kind: "pullquote", text: "We never had a pitch team. The people in the meeting were the people doing the work.", attr: "Field Notes No 19" },
    { kind: "p", text: "Clients who came to us through traditional agencies had usually been through three or four engagements that ended in some version of we got along great with the pitch team and never saw them again. We never had a pitch team. The people in the meeting were the people doing the work. That's not a process win, it's a relationship one — but the relationship is what closes the next quarter." },
    { kind: "h2", text: "What it cost us." },
    { kind: "p", text: "What we underestimated: how much of an agency exists to absorb friction so the work can happen. Without that layer, friction lands on the operators. We learned to design our intake, contracting, scoping, and invoicing as if those things were product, not overhead. We're still refining it." },
    { kind: "p", text: "What we got wrong: we thought \"no silos\" meant no specialists. It doesn't. The fluid-team idea works because the people in the team are deep in their lane — brand strategists who've shipped twenty systems, lifecycle operators who've built attribution they'd defend in a board meeting. Generalists couldn't do this. We learned to hire for depth, not flexibility." },
    { kind: "p", text: "What we didn't see coming: AI. Seven years ago \"Lab\" wasn't a pillar. Now it is — and it changes the math on what an unagency can do for a client without scaling staff. The same five people can run more, deeper, faster. We've been quietly rebuilding around that for the last eighteen months." },
    { kind: "h2", text: "What's next." },
    { kind: "p", text: "The unagency model worked for the decade we built it for. The decade ahead asks a different question. The work has shifted from \"how do we deliver senior thinking without an agency's overhead\" to \"how do we run an entire revenue motion — brand, demand, lab — with the kind of operational depth a client used to need an in-house team for, and an AI substrate they didn't have the option to use until now.\"" },
    { kind: "p", text: "We've been working on the answer. It's not unagency anymore. It's something further down the trail." },
    { kind: "p", text: "More on that, soon." },
    { kind: "endnote", text: "Mark is the principal at Boondock Walker. He's been writing the next pivot's working name on the back of a notebook for eight months. He'll tell you when it's ready." },
  ],
};

const NOTE_MARGINALIAS = {
  "introducing-vesper": [
    { after: 2, text: "She is still drafting the ad. As of this filing, the PDF is still closed." },
    { after: 8, text: "Specificity is the lever. A model that knows your foundation, your audiences, and your house style — and only those — outperforms a model that knows all of the internet, every time." },
    { after: 14, text: "We have been on Vesper ourselves for nine months. The bureau's editor approval rate is up. Brief turnaround halved. We ate our own tasting menu first." },
    { after: 23, text: "We do not yet know exactly when this lands for you. We know it will, and that the wait will be short. We are not in the business of artificial scarcity." },
  ],
  "brand-foundations-fail-tuesday": [
    { after: 2, text: "Pick a brand foundation you commissioned in the last three years. Ask three people on your team to find it without looking at email. Time them." },
    { after: 6, text: "The Tuesday test isn't a thought experiment. Sit next to a copywriter and watch them write an ad. Note every time they reach for the brand doc and every time they don't. The ratio is the foundation's real adoption rate." },
    { after: 13, text: "The hardest part is letting go of the artifact. The PDF feels like the deliverable. It isn't. The deliverable is the brand showing up the same way on Tuesday at 2pm whether you're in the room or not." },
  ],
  "arc-that-closes": [
    { after: 4, text: "If you've ever sat in a kickoff and watched the agency's reel and thought \"beautiful, but I'm not sure who buys after watching that\" — you've felt the difference between these two stories." },
    { after: 9, text: "The \"next step sized small\" is the easiest fix and the one most teams skip. A 15-minute call beats a buy button. A buy button beats nothing. The point is something a person can do today, not later." },
    { after: 13, text: "We've watched the same campaign run twice — once shaped for awards, once shaped for closing. The closing version was less pretty and made twice the pipeline. We didn't need the awards." },
  ],
  "seven-years-unagency": [
    { after: 2, text: "The kitchen-table call: actual table, actual decision. We had two clients on retainer and one prospect about to sign. I cancelled the prospect that week." },
    { after: 7, text: "The math beat the model. Overhead is the silent killer of agency margin — and of the senior attention clients are paying for." },
    { after: 11, text: "AI was the hardest call. Adopt too early and you ship slop. Wait too long and you're competing with operators who shipped the slop and learned faster than you." },
  ],
};

function NoteDetailPage({ note, themed, marginNotes, drop, related, recirc }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const a = FN_AUTHORS[note.author] || {};
  const c = themed ? fnTagColor(note.tag, true) : BW.ink;
  const idx = FN_NOTES.findIndex(n => n.slug === note.slug);
  const prev = FN_NOTES[idx + 1]; // older
  const next = idx > 0 ? FN_NOTES[idx - 1] : null; // newer
  const body = NOTE_BODIES[note.slug] || [{ kind: "p", text: "This note is being filed. Check back soon." }];
  const marginalia = NOTE_MARGINALIAS[note.slug] || [];

  // Footer
  const Foot = () => (
    <footer style={{ background: BW.ink, color: BW.chalk50, fontFamily: BW.ffG, padding: "44px clamp(20px, 5vw, 64px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, alignItems: "start" }}>
        <div>
          <img src="assets/BW-lockup-color.svg?v=8" alt="Boondock Walker" style={{ height: 39, display: "block" }} />
          <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, marginTop: 14 }}>The bureau · est. 2015 · Cleveland</div>
        </div>
        <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: BW.chalk2, lineHeight: 2 }}>
          <a href="work.html" style={{ display: "block", color: BW.chalk2, textDecoration: "none" }}>Work</a>
          <a href="capabilities.html" style={{ display: "block", color: BW.chalk2, textDecoration: "none" }}>Capabilities</a>
          <a href="field-notes.html" style={{ display: "block", color: BW.brass, textDecoration: "none" }}>Field Notes</a>
        </div>
        <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.chalk3, lineHeight: 1.8 }}>© 2026 BDW Bureau<br/>RSS · Atom · Plain text</div>
      </div>
    </footer>
  );

  return (
    <div style={{ background: BW.chalk, minHeight: "100vh" }}>
      {/* Hero — kicker, title, dek, meta */}
      <section style={{ background: BW.chalk, borderBottom: `0.75px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(36px, 5vw, 72px) clamp(20px, 5vw, 56px) clamp(32px, 4vw, 48px)" }}>
          {/* kicker rail */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, borderBottom: `0.75px solid ${BW.ink}`, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700, flexWrap: "wrap", gap: 10 }}>
            <span style={{ color: c }}>{note.tag} · {note.kicker}</span>
            <span>{note.issue} · {note.date}</span>
            <span>{note.minutes} min walk</span>
          </div>
          {/* Title */}
          <h1 style={{ fontFamily: BW.ffD, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(42px, 7vw, 96px)", lineHeight: 0.96, letterSpacing: "-0.035em", margin: "clamp(28px, 4vw, 48px) 0 clamp(20px, 3vw, 28px)", color: BW.ink, maxWidth: "18ch" }}>
            {note.title}
          </h1>
          {/* dek */}
          <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.45, margin: 0, color: BW.ink2, maxWidth: "44ch" }}>{note.dek}</p>
          {/* byline */}
          <div style={{ marginTop: 32, paddingTop: 18, borderTop: `0.75px solid ${BW.ruleL}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 36, height: 36, borderRadius: "50%", background: BW.ink, color: BW.chalk50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BW.ffG, fontSize: 12, fontWeight: 700 }}>{a.initials || "MN"}</span>
              <div>
                <div style={{ fontFamily: BW.ffG, fontSize: 14, fontWeight: 600, color: BW.ink }}>By {note.author}</div>
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 600, marginTop: 2 }}>{a.role || "Bureau"}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 14, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 600, flexWrap: "wrap" }}>
              <span>Filed in {note.tag.toLowerCase()}</span>
              <span>·</span>
              <a href="#" style={{ color: BW.ink, textDecoration: "none", borderBottom: `0.75px solid ${BW.ink}` }}>Plain text</a>
              <a href="#" style={{ color: BW.ink, textDecoration: "none", borderBottom: `0.75px solid ${BW.ink}` }}>Print</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead figure */}
      <section style={{ background: BW.chalk50, borderBottom: `0.75px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <figure style={{ margin: 0, borderLeft: `0.75px solid ${BW.ink}`, borderRight: `0.75px solid ${BW.ink}` }}>
            <div style={{ aspectRatio: "16/7", position: "relative", overflow: "hidden", borderBottom: `0.75px solid ${BW.ink}` }}>
              <FNArt kind={note.art} color={c} caption={`fig. 01 · ${note.kicker.toLowerCase()}`} label={`${note.issue} · ${note.date}`} image={note.image} alt={note.imageAlt} />
            </div>
            <figcaption style={{ padding: "12px 18px", fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 600, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              <span>fig. 01 · Lead illustration</span>
              <span>BDW Lab · 2026</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Body */}
      <section style={{ background: BW.chalk, paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(48px, 5vw, 72px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) 240px", gap: "clamp(28px, 4vw, 64px)" }}>
          {/* Article column */}
          <article style={{ maxWidth: 660 }}>
            {body.map((b, i) => <NoteBlock key={i} block={b} idx={i} drop={drop} />)}
            {/* End ornament */}
            <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 14, height: 14, background: c, transform: "rotate(45deg)", display: "inline-block" }} />
              <span style={{ flex: 1, height: 0.75, background: BW.ink }} />
              <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>— Filed</span>
            </div>
          </article>

          {/* Side rail — marginalia + share */}
          {!isMobile && (
            <aside style={{ display: "flex", flexDirection: "column", gap: 32, position: "sticky", top: 32, alignSelf: "start" }}>
              {marginNotes && (
                <div style={{ borderLeft: `2px solid ${c}`, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 22 }}>
                  <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>Margin notes</div>
                  {marginalia.map((m, i) => (
                    <div key={i} style={{ fontFamily: BW.ffSerif, fontStyle: "italic", fontSize: 14, lineHeight: 1.55, color: BW.ink2 }}>
                      <span style={{ fontFamily: BW.ffM, fontStyle: "normal", fontSize: 9.5, letterSpacing: "0.22em", color: c, fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: 6 }}>¶ {m.after}</span>
                      {m.text}
                    </div>
                  ))}
                </div>
              )}
              <div style={{ borderTop: `0.75px solid ${BW.ruleL}`, paddingTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>Tip the editor</div>
                <p style={{ fontFamily: BW.ffSerif, fontSize: 14, lineHeight: 1.5, margin: 0, color: BW.ink2 }}>Replied to a sentence and want to argue with it? <a href="mailto:hello@boondockwalker.com" style={{ color: BW.ink, textDecoration: "none", borderBottom: `0.75px solid ${BW.ink}` }}>hello@boondockwalker.com</a></p>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* Pull quote, full bleed */}
      <section style={{ background: BW.ink, color: BW.chalk50, padding: "clamp(48px, 6vw, 96px) clamp(20px, 5vw, 56px)", borderTop: `0.75px solid ${BW.ink}`, borderBottom: `0.75px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.brass, fontWeight: 700, marginBottom: 24 }}>★ The take</div>
          <blockquote style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4.5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: BW.chalk50 }}>
            "The receipts of having survived are an asset operators buy — but only if you stop apologizing for the year on the door."
          </blockquote>
          <div style={{ marginTop: 28, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.chalk3, fontWeight: 700 }}>— {note.author} · {note.issue}</div>
        </div>
      </section>

      {/* Author byline + author's other notes */}
      <section style={{ background: BW.chalk, borderBottom: `0.75px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(40px, 5vw, 64px) clamp(20px, 5vw, 56px)", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr", gap: "clamp(28px, 4vw, 56px)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>About the writer</div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 64, height: 64, borderRadius: "50%", background: BW.ink, color: BW.chalk50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BW.ffG, fontSize: 22, fontWeight: 700 }}>{a.initials || "MN"}</span>
              <div>
                <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 28, color: BW.ink }}>{note.author}</div>
                <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink3, fontWeight: 600, marginTop: 2 }}>{a.role || "Bureau"}</div>
              </div>
            </div>
            <p style={{ fontFamily: BW.ffSerif, fontSize: 15, lineHeight: 1.55, margin: 0, color: BW.ink2, maxWidth: "40ch" }}>Principal of the bureau since 2015. Writes about positioning, demand, and what wholesale operators forget to say about themselves on the homepage.</p>
            <a href="#" style={{ marginTop: 4, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.ink, textDecoration: "none", borderBottom: `0.75px solid ${BW.ink}`, paddingBottom: 3, alignSelf: "flex-start" }}>All notes by {note.author.split(" ").slice(-1)[0]} →</a>
          </div>

          {recirc && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>Filed under {note.tag.toLowerCase()}</div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 18 }}>
                {related.map(n => <FNCard key={n.slug} note={n} size="M" themed={themed} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Prev / next */}
      <section style={{ background: BW.chalk50, borderBottom: `0.75px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(28px, 3vw, 40px) clamp(20px, 5vw, 56px)", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 0 }}>
          {prev ? (
            <a href={`note.html?slug=${prev.slug}`} style={{ padding: "20px 24px", borderRight: !isMobile ? `0.75px solid ${BW.ink}` : 0, borderBottom: isMobile ? `0.75px solid ${BW.ink}` : 0, color: BW.ink, textDecoration: "none", display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700 }}>← Older · {prev.issue}</span>
              <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 22, lineHeight: 1.1, color: BW.ink }}>{prev.title}</span>
            </a>
          ) : <div />}
          {next ? (
            <a href={`note.html?slug=${next.slug}`} style={{ padding: "20px 24px", color: BW.ink, textDecoration: "none", display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end", textAlign: "right" }}>
              <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700 }}>Newer · {next.issue} →</span>
              <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 22, lineHeight: 1.1, color: BW.ink }}>{next.title}</span>
            </a>
          ) : (
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end", textAlign: "right" }}>
              <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700 }}>This is the latest issue</span>
              <a href="field-notes.html" style={{ fontFamily: BW.ffD, fontStyle: "italic", fontSize: 22, lineHeight: 1.1, color: BW.ink, textDecoration: "none", borderBottom: `0.75px solid ${BW.ink}` }}>Back to the archive →</a>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: BW.chalk, padding: "clamp(40px, 5vw, 72px) clamp(20px, 5vw, 56px)", borderBottom: `0.75px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <FNNewsletterRail />
        </div>
      </section>

      <Foot />
    </div>
  );
}

function NoteBlock({ block, idx, drop }) {
  const styleCommon = { fontFamily: BW.ffSerif, fontSize: 19, lineHeight: 1.6, color: BW.ink, margin: "0 0 22px" };
  if (block.kind === "lede") {
    return (
      <p style={styleCommon}>
        {drop && (
          <span style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "5.4em", lineHeight: 0.85, float: "left", marginRight: 12, marginTop: 6, marginBottom: -6, color: BW.clay, letterSpacing: "-0.04em" }}>
            {block.text.charAt(0)}
          </span>
        )}
        {drop ? block.text.slice(1) : block.text}
      </p>
    );
  }
  if (block.kind === "p") return <p style={styleCommon}>{block.text}</p>;
  if (block.kind === "h2") return (
    <h2 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 3vw, 36px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "44px 0 18px", color: BW.ink }}>{block.text}</h2>
  );
  if (block.kind === "pullquote") return (
    <aside style={{ borderTop: `1.5px solid ${BW.ink}`, borderBottom: `1.5px solid ${BW.ink}`, padding: "28px 0", margin: "32px 0", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.18, letterSpacing: "-0.015em", color: BW.ink }}>"{block.text}"</div>
      <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700 }}>— {block.attr}</div>
    </aside>
  );
  if (block.kind === "ol") return (
    <ol style={{ fontFamily: BW.ffSerif, fontSize: 18, lineHeight: 1.55, color: BW.ink, margin: "0 0 28px", paddingLeft: 0, listStyle: "none", counterReset: "li" }}>
      {block.items.map((it, i) => (
        <li key={i} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 12, padding: "14px 0", borderBottom: `0.75px dotted ${BW.ruleL}` }}>
          <span style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.18em", color: BW.clay, fontWeight: 700, paddingTop: 4 }}>{String(i + 1).padStart(2, "0")}</span>
          <span>{it}</span>
        </li>
      ))}
    </ol>
  );
  if (block.kind === "endnote") return (
    <p style={{ fontFamily: BW.ffSerif, fontStyle: "italic", fontSize: 14.5, lineHeight: 1.55, color: BW.ink2, margin: "32px 0 0", paddingTop: 18, borderTop: `0.75px solid ${BW.ruleL}` }}>{block.text}</p>
  );
  return null;
}

window.NoteDetailPage = NoteDetailPage;
