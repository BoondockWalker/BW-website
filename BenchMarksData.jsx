/* global window */
/* Boondock Walker — BenchMarksData. Daily ledger.
   Specimens are placeholder commentary on Mark's uploaded images.
   Replace the `commentary` blocks below with the real notes. */

const SPEC = "assets/benchmarks/specimens/";

const BW_BENCHMARKS = {
  curator: {
    name: "Mark Nead",
    role: "Curator",
    photo: "assets/benchmarks/curator/Mark-Nead-headshot.jpg",
    bio: "I keep the bench. One specimen a day, three things on the desk, and a running log of edits to my own thinking. If something here lands, it earned the spot.",
  },

  // Optional override for today's specimen. When null, the page picks by date.
  pinnedSpecimenId: null,

  // 14 specimens, newest first. Each points at a real uploaded image.
  // Commentary below is placeholder — refine specimen-by-specimen.
  specimens: [
    {
      id: "2026-05-13-bevel-app",
      mediaType: "image",
      src: SPEC + "2026-05-13-Bevel-App.png",
      alt: "Specimen — Bevel app dashboard.",
      title: "Bevel",
      commentary: {
        hook: "Replaced five health apps with one.",
        body: [
          "Strain, recovery, sleep, stress, nutrition, activity — all on the same dashboard. Same source of truth.",
          "The AI integration actually pulls its weight. Not “10-second motivational message” gimmickry — real pattern reads across the data you actually care about.",
          "The best tools do less, on purpose. Bevel does a lot, in one place. Both are forms of the same discipline: getting out of your way.",
        ],
        signoff: "— MN",
      },
      tags: ["design", "health"],
      relatedSlug: null,
      publishedAt: "2026-05-13",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-12-built-by-nick",
      mediaType: "video",
      src: SPEC + "2026-05-12-Built-by-Nick.webm",
      poster: SPEC + "2026-05-12-Built-by-Nick.png",
      alt: "Animated logo specimen — Built by Nick.",
      title: "Built by Nick",
      commentary: {
        hook: "Recent logo work for my youngest.",
        body: [
          "*Built. by Nick* — a young entrepreneur's take on website development for small businesses.",
          "A confident serif. A declarative period. One orange dot doing the work of a thousand brand decisions.",
          "Check it out: [builtbynick.ai](https://builtbynick.ai)",
        ],
        signoff: "— MN",
      },
      tags: ["design", "brand", "family"],
      relatedSlug: null,
      publishedAt: "2026-05-12",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-11-big-week",
      mediaType: "video",
      src: SPEC + "2026-05-11-big-week.mp4",
      poster: SPEC + "2026-05-11-big-week.png",
      alt: "Specimen — Big Week Ahead.",
      title: "Big Week Ahead",
      commentary: {
        hook: "Monday morning. Doorway open.",
        body: [
          "Grateful for the road. Grateful for the gifts that got me here. Grateful for the people who trust us with the work.",
          "The opportunities keep unfolding. Most of them weren't on the map.",
          "Time to walk through.",
        ],
        signoff: "— MN",
      },
      tags: ["gratitude", "journey", "opportunity"],
      relatedSlug: null,
      publishedAt: "2026-05-11",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-10-mothers-day",
      mediaType: "image",
      src: SPEC + "2026-05-10-mothers-day.png",
      alt: "Specimen — For the Mothers.",
      title: "For the Mothers",
      commentary: {
        hook: "The tilt of her head says everything.",
        body: [
          "The small lean-in. The child's eyes already closed because they know they're safe.",
          "Mothers do work the world doesn't see and rarely thanks for. The thousand quiet acts that build the people we become. The patience that keeps showing up after the patience has run out.",
        ],
        signoff: "— MN",
      },
      tags: ["gratitude"],
      relatedSlug: null,
      publishedAt: "2026-05-10",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-09-weekends",
      mediaType: "image",
      src: SPEC + "2026-05-09-weekends.png",
      alt: "Specimen — Occupation, Obsession.",
      title: "Occupation, Obsession",
      commentary: {
        hook: "Two days off feels great. Five days on feels just as good.",
        body: [
          "The weekend is for relaxing, refueling, family, friends. Earned. Necessary.",
          "But I don't count the hours until Friday. I don't dread Sunday night. The work week is the engine, not the obstacle.",
          "When you love what you do, your occupation is your obsession.",
          "If your week feels like a sentence to be served, that's the signal — not your schedule, not your boss, not the weather. The work itself.",
        ],
        signoff: "— MN",
      },
      tags: ["purpose"],
      relatedSlug: null,
      publishedAt: "2026-05-09",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-08-betty",
      mediaType: "image",
      src: SPEC + "2026-05-08-Betty.png",
      alt: "Watercolor portrait of Betty.",
      title: "Betty",
      commentary: {
        hook: "Advantages of a remote office.",
        body: [
          "She doesn't schedule meetings. She doesn't lobby for promotions. Demands one walk, an occasional salmon treat, and a window view.",
          "Highest-performing teammate, two years running.",
        ],
        signoff: "— MN",
      },
      tags: ["dogs"],
      relatedSlug: null,
      publishedAt: "2026-05-08",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-07-locked-in",
      mediaType: "image",
      src: SPEC + "2026-05-07-Locked-In.png",
      alt: "Specimen — Locked In.",
      title: "Locked In",
      commentary: {
        hook: "Seven months. Five days a week.",
        body: [
          "Total body recomposition. Cleaner energy. Better sleep. The kind of feel-good that doesn't come from a supplement or a hack.",
          "I thought I'd find a code. Turns out the code is that there isn't one.",
          "Discipline. Just start. One day at a time.",
        ],
        signoff: "— MN",
      },
      tags: ["discipline"],
      relatedSlug: null,
      publishedAt: "2026-05-07",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-06-great-awakening",
      mediaType: "video",
      src: SPEC + "2026-05-06-Great-awakening.mp4",
      poster: SPEC + "2026-05-06-Great-awakening.png",
      alt: "Animated clip from Brave & Boundless — The Great Awakening.",
      title: "The Great Awakening",
      commentary: {
        hook: "A clip from *Brave & Boundless*. Something is shifting in the generation coming up.",
        body: [
          "They're looking at the patterns they inherited — career scripts, relationship templates, money habits, faith defaults — and asking the question their parents didn't always feel free to ask.",
          "*Does this still need to be true for me?*",
          "Some cycles deserve reverence. Others deserve a torch. The Fire stage of the book is about telling yourself the truth long enough to know which is which.",
        ],
        signoff: "— MN",
      },
      tags: ["brave-and-boundless", "generational"],
      relatedSlug: null,
      publishedAt: "2026-05-06",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-05-nobull-color-palette",
      mediaType: "image",
      src: SPEC + "2026-05-05-Nobull-color-palette.png",
      alt: "NoBull brand color palette specimen.",
      title: "Palettes hide in plain sight.",
      commentary: {
        hook: "Five swatches that earn their slot.",
        body: [
          "This one came off the back of a running shoe. A NoBull, of all things. Four colors doing real work together — a confident rust, a warm mustard, a grounding brown, and that dusty teal in the outsole that quietly ties the whole thing together.",
          "Reads like a 1970s ski lodge. Or a desert at dusk. Either way, it works.",
          "The lesson I keep relearning: the best palettes rarely come from a swatch tool. They come from a shoe, a book cover, a diner sign, the inside of a pomegranate. Train your eye and the world starts handing them to you.",
        ],
        signoff: "— MN",
      },
      tags: ["brand", "color"],
      relatedSlug: null,
      publishedAt: "2026-05-05",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-04-stanley",
      mediaType: "image",
      src: SPEC + "2026-05-04-Stanley.png",
      alt: "Stanley product specimen.",
      title: "Big Cup Energy",
      commentary: {
        hook: "Somewhere along the way, water got a personality.",
        body: [
          "We didn't have hydration. We had thirst, a quick rinse from a metal spout that tasted vaguely of pennies, and we ran back outside.",
          "Now there are colorways. Limited drops. A tumbler stampede at Target.",
          "The Stanley turnaround is one of the best marketing stories of the decade. A 110-year-old utility brand, resurrected by a viral car-fire video and a generation that decided water deserves a wardrobe.",
          "That's not a fluke. That's a brand reading the moment, then riding it.",
          "Still won't catch me carrying 40 ounces to the mailbox, though.",
        ],
        signoff: "— MN",
      },
      tags: ["humor", "marketing", "brand", "generational", "observation"],
      relatedSlug: null,
      publishedAt: "2026-05-04",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-03-claude-notion",
      mediaType: "image",
      src: SPEC + "2026-05-03-Claude-Notion.png",
      alt: "Specimen — Claude and Notion integration.",
      title: "The Plus Sign Does the Work",
      commentary: {
        hook: "Two tools, one workflow, and somehow the whole thing thinks better.",
        body: [
          "Notion is where my brain goes to live. Pages, databases, the whole architecture of a business and a life laid out on a grid I can actually navigate.",
          "Claude is the co-pilot — drafting, organizing, asking the next good question, doing the lifting I'd otherwise put off until Sunday.",
          "Apart, they're both excellent. Together, they're unreasonable. Ideas turn into systems. Systems turn into decisions. Decisions show up on time.",
          "It's not the tools, exactly. It's what happens when they work together as a high-functioning “team.”",
          "That's the magic of a good stack. The plus sign does most of the work.",
        ],
        signoff: "— MN",
      },
      tags: ["productivity", "ai", "claude", "workflow", "systems"],
      relatedSlug: null,
      publishedAt: "2026-05-03",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-02-b-unchained",
      mediaType: "image",
      src: SPEC + "2026-05-02-B-Unchained.png",
      alt: "Specimen — B-Unchained.",
      title: "Brave & Boundless",
      commentary: {
        hook: "Art for the first book. Two years in, closer than ever.",
        body: [
          "*Brave & Boundless* — 15 Rules for Breaking the Cycle and Building What's Next.",
          "Not a pep talk. Not borrowed wisdom. The framework I wish I'd had at 22 — courage as a decision, not a trait you're born with.",
          "The chains are breaking.",
        ],
        signoff: "— MN",
      },
      tags: [],
      relatedSlug: null,
      publishedAt: "2026-05-02",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-01-mark-watercolor",
      mediaType: "image",
      src: SPEC + "2026-05-01-Mark-watercolor.png",
      alt: "Watercolor study by Mark Nead.",
      title: "Twelve Months",
      commentary: {
        hook: "A year ago, this would have been three eyes and a melted ear.",
        body: [
          "Now AI watercolor catches the bend of a smile. The slight droop of a tired jaw. The right amount of gray at the temple.",
          "Watercolor was always my favorite — soft, forgiving, a little wild on the page. The medium that bleeds and behaves at the same time.",
          "Funny that one of the most human-feeling mediums I know is the one a machine learned to render this well, this fast.",
        ],
        signoff: "— MN",
      },
      tags: ["ai", "design"],
      relatedSlug: null,
      publishedAt: "2026-05-01",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-30-evernote",
      mediaType: "image",
      src: SPEC + "2026-04-30-Evernote.png",
      alt: "Evernote brand specimen.",
      title: "From $250 to $10,249",
      commentary: {
        hook: "Take note.",
        body: [
          "Rabid Evernote loyalist for a decade. Built my entire second brain in there.",
          "Then they got acquired, sunsetted the Teams plan, and quietly migrated me to “Enterprise Flexible” — at forty times the price. Charged my card a few days early, just for sport.",
          "Refunded after I pushed. By then the relationship was over.",
          "Now I'm in Apple Notes. Free. Boring. Doing the job.",
          "Lesson for any business: loyalty is a deposit, not a license. Spend it carelessly and somebody's free competitor wins.",
        ],
        signoff: "— MN",
      },
      tags: ["customer-experience", "loyalty"],
      relatedSlug: null,
      publishedAt: "2026-04-30",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-29-tom-haugomat",
      mediaType: "image",
      src: SPEC + "2026-04-29-Tom-Haugomat.png",
      alt: "Illustration by Tom Haugomat.",
      title: "Tom Haugomat.",
      commentary: {
        hook: "Three colors and a horizon. That's the whole image.",
        body: [
          "Haugomat doesn't draw light — he draws what light removes. The shadow is the subject; the figure is the negative space around it.",
          "I keep this one pinned because it answers the question every campaign answers wrong: how much do you actually have to put on the page before the reader gets it. Less than you think.",
        ],
      },
      tags: [],
      relatedSlug: null,
      publishedAt: "2026-04-29",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-28-truth-in-me",
      mediaType: "image",
      src: SPEC + "2026-04-28-Truth-in-Me.png",
      alt: "Specimen — Truth in Me.",
      title: "Truth in Me",
      commentary: {
        hook: "Found this in a book and stopped reading.",
        body: [
          "Spent the first half of my life trying to fit. The second half learning what was already mine.",
          "There's a kind of relief in that arrival — not loud, not triumphant. Just a quiet settling, where the weight of pretending finally comes off.",
          "If you're still in the trying phase, hang in there. The truth in you is patient.",
        ],
        signoff: "— MN",
      },
      tags: ["identity", "growth"],
      relatedSlug: null,
      publishedAt: "2026-04-28",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-27-hubspot",
      mediaType: "image",
      src: SPEC + "2026-04-27-HubSpot.png",
      alt: "HubSpot brand specimen.",
      title: "Sophisticated, Welcoming",
      commentary: {
        hook: "HubSpot is one of the few enterprise tools I actually enjoy opening.",
        body: [
          "Most sophisticated software earns its complexity by looking the part — gray dashboards, dense menus, that quiet “you'd better have read the docs” energy.",
          "HubSpot went the other way. Bright color. Friendly illustrations. A brand that says *come on in* before it says *let me show you how to build a sales funnel*.",
          "The result is a tool just as powerful, with a fraction of the friction. People log in. People learn. People stay.",
          "Welcoming isn't soft. It's a feature.",
        ],
        signoff: "— MN",
      },
      tags: ["brand", "design", "marketing"],
      relatedSlug: null,
      publishedAt: "2026-04-27",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-26-optimize-the-machine",
      mediaType: "video",
      src: SPEC + "2026-04-26-Optimize-the-Machine.mp4",
      poster: SPEC + "2026-04-26-Optimize-the-Machine.png",
      alt: "Specimen — Optimize the Machine.",
      title: "Optimize the Machine",
      commentary: {
        hook: "Most people work in their machine. Few work on it.",
        body: [
          "Your business is a machine. So is your body.",
          "Each one has gears that need oil, levers that need calibrating, and at least one squeaky bolt you've been ignoring.",
          "The work isn't more effort. It's a better machine.",
        ],
        signoff: "— MN",
      },
      tags: ["systems", "life"],
      relatedSlug: null,
      publishedAt: "2026-04-26",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-25-bb-fire",
      mediaType: "video",
      src: SPEC + "2026-04-25-BB-fire.mp4",
      poster: SPEC + "2026-04-25-BB-fire.png",
      alt: "Specimen — BB fire imagery.",
      title: "When the Map Is Burning",
      commentary: {
        hook: "Stop referring to the legend.",
        body: [
          "The map you were handed was drawn for somebody else's terrain. Different roads, different weather, different war.",
          "When it catches fire, that's not loss. That's the start of your own journey.",
          "Forge your path.",
        ],
        signoff: "— MN",
      },
      tags: ["brave-and-boundless"],
      relatedSlug: null,
      publishedAt: "2026-04-25",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-24-boundlessness",
      mediaType: "image",
      src: SPEC + "2026-04-24-Boundlessness.png",
      alt: "Specimen — Boundlessness.",
      title: "Boundlessness",
      commentary: {
        hook: "Asked Midjourney for “boundlessness.” This is what came back.",
        body: [
          "A figure on a thin path. A horizon you can't measure. No company except your own decision to keep walking.",
          "Pretty close to right.",
          "The whole premise of *Brave & Boundless* lives in this image. You don't see the destination. You see enough of the next step to take it. That's all you ever need.",
        ],
        signoff: "— MN",
      },
      tags: ["brave-and-boundless"],
      relatedSlug: null,
      publishedAt: "2026-04-24",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-23-humble-and-kind",
      mediaType: "image",
      src: SPEC + "2026-04-23-Humble-and-Kind.png",
      alt: "Specimen — Humble and Kind.",
      title: "Humble and Kind",
      commentary: {
        hook: "He got down to her height. That's the whole thing.",
        body: [
          "You can teach a kid almost anything by showing them what posture looks like.",
          "The bend at the knees. The hands held, not gripped. The patience to be small for a minute so somebody else can be heard.",
          "Some virtues live in the body before they ever get spoken. Humility is one of them.",
          "Always stay humble and kind. McGraw was right.",
        ],
        signoff: "— MN",
      },
      tags: ["humility"],
      relatedSlug: null,
      publishedAt: "2026-04-23",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-22-three-fours",
      mediaType: "video",
      src: SPEC + "2026-04-22-ThreeFours.mp4",
      poster: SPEC + "2026-04-22-ThreeFours.png",
      alt: "Specimen — Three Fours animation.",
      title: "ThreeFours",
      commentary: {
        hook: "Recent design work. Defense market. Trust as the central constraint.",
        body: [
          "Three pillars — Technology, Guidance, Protection — built into the mark itself. Three repeating forms, each starting tall and finishing grounded.",
        ],
        signoff: "— MN",
      },
      tags: ["design", "brand", "identity"],
      relatedSlug: null,
      publishedAt: "2026-04-22",
      social: { igCaption: null, igCardSrc: null },
    },
  ],

  // Currently on the desk — exactly 3 items (reading / listening / arguing).
  desk: [
    {
      kind: "reading",
      title: "Obviously Awesome",
      by: "April Dunford",
      link: "https://www.aprildunford.com/obviously-awesome",
      line: "Re-reading chapter four. The positioning canvas earns another year on the shelf.",
    },
    {
      kind: "listening",
      title: "Acquired — The Hermès episode",
      by: "Ben Gilbert & David Rosenthal",
      link: "https://www.acquired.fm/episodes/hermes",
      line: "Four hours on a leather company. Worth every minute for the bit on artisanal scale.",
    },
    {
      kind: "arguing",
      title: "Whether 'category creation' is a real strategy.",
      by: "Internal — bench thread",
      link: null,
      line: "Mostly with myself. The honest answer is: only if you can afford to lose three years to teach the buyer the word.",
    },
  ],

  // Edits to thinking — most recent first.
  edits: [
    {
      date: "2026-05-01",
      statement: "Pricing pages are positioning documents, not transactional pages.",
      why: "Watched four buyers in a row read the pricing page first and the homepage never. The page that closes is the page that names the deal.",
    },
    {
      date: "2026-04-12",
      statement: "Naming is sales work, not brand work.",
      why: "Three engagements this year where the name change did the work the campaign was supposed to do. Reassigning the line item.",
    },
    {
      date: "2026-03-08",
      statement: "Long-form is back, and it was never gone for the buyers who closed.",
      why: "Stopped trusting engagement metrics that punish word count. The signal is whether the right reader finished — not whether the average reader scrolled.",
    },
  ],
};

window.BW_BENCHMARKS = BW_BENCHMARKS;
