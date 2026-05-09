/* global React, BW, FN_NOTES, FN_AUTHORS, FN_TAGS, FNArt, fnTagColor, FNCard, FNNewsletterRail */

/* Long-form note bodies — keyed by slug. Each note's body is an array of
   block descriptors (lede / p / h2 / pullquote / ol / ul / endnote) that
   <NoteBlock> renders. Margin notes live in the parallel marginalia map.
   To add a new post: register both maps under the same slug. */
const NOTE_BODIES = {
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
  "stop-calling-it-heritage": [
    { kind: "lede", text: "Last week I sat in a conference room in Cleveland and watched a CEO apologize for the year on his door. He runs a $40m wholesale outfit founded in 1953. Three generations. The kind of business operators dream of acquiring. And he led with: \"I know we're old, but —\"" },
    { kind: "p", text: "Stop. The receipts of having survived are an asset. Not a thing to apologize for. The minute you frame longevity as a liability, you've handed the conversation to the kid in the patagonia vest who launched eighteen months ago and wants to talk about his AI-native ops." },
    { kind: "h2", text: "What \"heritage\" actually signals." },
    { kind: "p", text: "When I hear the word heritage on a brand call, I hear three things, in order: first, that the business is older than its current category. Second, that nobody on the leadership team is sure what to say about that. Third, that the marketing team has been quietly resenting the founders for fifteen years." },
    { kind: "p", text: "It's never the word that's the problem. It's the apology underneath it." },
    { kind: "pullquote", text: "Heritage as positioning is a coward's move. Heritage as proof is the entire game.", attr: "Field Notes No 18" },
    { kind: "h2", text: "The reframe — three sentences." },
    { kind: "p", text: "Replace \"we've been around for 70 years\" with \"we've shipped 14,000 of these.\" Replace \"third generation\" with \"the third operator who decided not to break it.\" Replace \"family-owned\" with \"the only person you'd talk to has signed every PO since 2008.\"" },
    { kind: "p", text: "These aren't taglines. They're the sentences your team should be saying on Zoom when the buyer asks the inevitable why-you question. Run them past your sales team this week. Watch what happens to the second-call rate." },
    { kind: "ol", items: [
      "Stop using \"heritage\" as a noun. It's a frame, not a feature.",
      "Inventory the quantitative receipts — units shipped, customers held, decades on the bench.",
      "Translate every soft claim (\"long-standing\") into a hard one (\"19 years with the same Tier-1 buyer\").",
      "Train your sales team to lead with the receipt, not the date.",
      "Audit your homepage for any sentence that opens with \"founded in.\" Cut or invert.",
    ]},
    { kind: "h2", text: "Why this matters now." },
    { kind: "p", text: "The cohort buying B2B services in 2026 is, on average, eight years younger than the cohort that bought in 2019. They have been told a story about old companies — slow, change-averse, locked into legacy stacks — and they walk into every conversation looking for confirmation. Your job is to interrupt that story in the first three sentences." },
    { kind: "p", text: "The receipts are how you do it. Not the year on the door." },
    { kind: "endnote", text: "M. Nead is the principal at Boondock Walker. He has, on three separate occasions, talked clients out of hiding their founding date. Two of them sent thank-you notes." },
  ],
};

const NOTE_MARGINALIAS = {
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
  "stop-calling-it-heritage": [
    { after: 1, text: "Note to self: track how many times \"heritage\" appears on the sites of the companies that pitch us this quarter. I bet it's >40%." },
    { after: 4, text: "We dropped \"heritage\" from a client deck in Q4. Pipeline up 22% next quarter. Anecdote, not science." },
    { after: 7, text: "If you can't fill the receipts inventory, that's the actual problem. Heritage was hiding it." },
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
                <p style={{ fontFamily: BW.ffSerif, fontSize: 14, lineHeight: 1.5, margin: 0, color: BW.ink2 }}>Replied to a sentence and want to argue with it? <a href="mailto:bureau@boondockwalker.com" style={{ color: BW.ink, textDecoration: "none", borderBottom: `0.75px solid ${BW.ink}` }}>bureau@boondockwalker.com</a></p>
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
