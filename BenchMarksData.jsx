/* global window */
/* Boondock Walker — BenchMarksData. Daily ledger. */

const SPEC = "/assets/benchmarks/specimens/";
const IMG_BRAIN   = "/assets/brain.png";
const IMG_NAPKIN  = "/assets/coffee-napkin-burg.png";
const IMG_JOURNAL = "/assets/field-journal.png";
const IMG_BOOTS   = "/assets/hiking-boots.png";

const BW_BENCHMARKS = {
  curator: {
    name: "Mark Nead",
    role: "Curator",
    photo: "/assets/benchmarks/curator/mark-nead-headshot.jpg",
    bio: "I keep the bench. One specimen a day, three things on the desk, and a running log of edits to my own thinking. If something here lands, it earned the spot.",
  },

  // Optional override for today's specimen. When null, the page picks by date.
  pinnedSpecimenId: null,

  specimens: [
    {
      id: "2026-05-stripe-pricing-page",
      mediaType: "link",
      linkUrl: "https://stripe.com/pricing",
      linkTitle: "Stripe — Pricing",
      linkHost: "stripe.com",
      title: "The pricing page that doesn't apologize.",
      sourceLabel: "stripe.com/pricing",
      sourceUrl: "https://stripe.com/pricing",
      commentary: {
        hook: "One number, no hedge, the math shown out loud.",
        body: [
          "2.9% + 30¢. That's the line. Everything else on the page is footnote. Most B2B pricing pages are eighty percent caveat — Stripe inverted the ratio and the caveats stopped mattering.",
        ],
        signoff: "— MN",
      },
      tags: ["pricing", "voice", "b2b"],
      relatedSlug: null,
      publishedAt: "2026-05-05",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-ogilvy-on-leads",
      mediaType: "quote",
      quote: "When I write an advertisement, I don't want you to tell me that you find it 'creative.' I want you to find it so interesting that you buy the product.",
      attribution: "David Ogilvy",
      title: "The only metric that matters.",
      commentary: {
        hook: "Tape this above the desk of every creative director.",
        body: [
          "The applause-line test is a bad test. The buy-the-product test is the only test. We forget this every six weeks and have to be reminded.",
        ],
      },
      tags: ["advertising", "voice", "craft"],
      relatedSlug: null,
      publishedAt: "2026-05-02",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-field-journal-margin",
      mediaType: "image",
      src: IMG_JOURNAL,
      alt: "A worn field journal open to a page of marginalia and a folded receipt.",
      title: "Marginalia from a Tuesday.",
      commentary: {
        hook: "The best line in the journal is the one in the margin.",
        body: [
          "Spine-text gets revised. Margin-text is the unedited thought. When I go back through old notebooks, the margins are the only part still useful.",
        ],
        signoff: "— MN",
      },
      tags: ["sketches", "voice", "craft"],
      relatedSlug: null,
      publishedAt: "2026-04-28",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-saas-founder-naming",
      mediaType: "quote",
      quote: "We spent four months on the name and three weeks on the product. The name closed the first eight customers.",
      attribution: "Founder, B2B SaaS (Series A)",
      title: "The name closed the room.",
      commentary: {
        hook: "Naming isn't the last 5% of brand. It's the first 5% of sales.",
      },
      tags: ["naming", "brand", "pipeline"],
      relatedSlug: null,
      publishedAt: "2026-04-24",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-coffee-napkin-burg",
      mediaType: "image",
      src: IMG_NAPKIN,
      alt: "A diner napkin with a hand-drawn pricing matrix in ballpoint pen.",
      title: "Napkin economics.",
      commentary: {
        hook: "Three boxes and an arrow beat a 14-tab spreadsheet.",
        body: [
          "Drew this with a client across a diner table in 2019. The deck that came out of it was sixty slides. The napkin was the deck.",
        ],
      },
      tags: ["sketches", "pricing", "b2b"],
      relatedSlug: null,
      publishedAt: "2026-04-19",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-letterform-archive",
      mediaType: "link",
      linkUrl: "https://lettermode.com/inventory/specimens",
      linkTitle: "Lettermode — Type Specimen Archive",
      linkHost: "lettermode.com",
      title: "Type specimens, century deep.",
      sourceLabel: "lettermode.com",
      sourceUrl: "https://lettermode.com",
      commentary: {
        hook: "Pull a specimen book before you brief a typeface.",
        body: [
          "If your reference is a Pinterest board, your typography will look like a Pinterest board. The specimen books are eighty years of operators showing their work — and the work still holds.",
        ],
        signoff: "— MN",
      },
      tags: ["typography", "craft", "reading"],
      relatedSlug: null,
      publishedAt: "2026-04-15",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-paul-rand-design",
      mediaType: "quote",
      quote: "Design is the silent ambassador of your brand.",
      attribution: "Paul Rand",
      title: "Silent ambassador.",
      commentary: {
        hook: "Read it twice. The word is silent.",
        body: [
          "If your design is shouting, it's not the ambassador — it's the lobbyist. There's a difference, and buyers can hear it.",
        ],
      },
      tags: ["brand", "craft", "voice"],
      relatedSlug: null,
      publishedAt: "2026-04-10",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-hiking-boots-rebrand",
      mediaType: "image",
      src: IMG_BOOTS,
      alt: "A pair of mud-caked leather hiking boots on a wooden porch.",
      title: "Wear before you redesign.",
      commentary: {
        hook: "If you can't walk a mile in the buyer's day, don't touch the homepage.",
        body: [
          "Spent two days last week shadowing a regional sales rep. Watched four demos. The thing the homepage was missing wasn't a hero animation — it was the answer to the second question every prospect asked.",
        ],
        signoff: "— MN",
      },
      tags: ["rebrand", "demand", "b2b"],
      relatedSlug: null,
      publishedAt: "2026-04-05",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-03-podcast-voice-clip",
      mediaType: "audio",
      audioSrc: SPEC + "voice-and-the-room.mp3",
      audioDuration: "1:42",
      audioTitle: "Voice and the room — clip",
      audioBy: "The Operator's Bench (podcast)",
      title: "On voice and the room.",
      commentary: {
        hook: "Ninety seconds on why voice is a room, not a sentence.",
        body: [
          "The host loses the thread halfway through and the guest pulls it back with one analogy. The pull-back is the whole clip.",
        ],
      },
      tags: ["voice", "audio", "brand"],
      relatedSlug: null,
      publishedAt: "2026-03-30",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-03-brain-diagram",
      mediaType: "image",
      src: IMG_BRAIN,
      alt: "A schematic illustration of a brain divided into labeled regions.",
      title: "Where the brand actually lives.",
      commentary: {
        hook: "Buyers don't store your brand in the logo. They store it in a feeling and a shortcut.",
      },
      tags: ["brand", "voice"],
      relatedSlug: null,
      publishedAt: "2026-03-25",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-03-strunk-omit-words",
      mediaType: "quote",
      quote: "Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences.",
      attribution: "William Strunk Jr., The Elements of Style",
      title: "Omit needless words.",
      commentary: {
        hook: "The whole field manual in two sentences. The rest is footnote.",
        body: [
          "Pinned above the desk for fifteen years. Still the most violated rule in B2B copy. Half my edits are deletions.",
        ],
        signoff: "— MN",
      },
      tags: ["voice", "reading", "craft"],
      relatedSlug: null,
      publishedAt: "2026-03-20",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-03-field-journal-redux",
      mediaType: "image",
      src: IMG_JOURNAL,
      alt: "A second view of the field journal with a corner folded down.",
      title: "Folded-corner index.",
      commentary: {
        hook: "Folded corners are honest. Bookmarks lie.",
        body: [
          "A folded corner means I came back. Bookmarks just mean I started. When I audit a notebook, I count corners — that's the real table of contents.",
        ],
      },
      tags: ["sketches", "reading", "craft"],
      relatedSlug: null,
      publishedAt: "2026-03-15",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-03-podcast-pricing-clip",
      mediaType: "audio",
      audioSrc: SPEC + "pricing-as-positioning.mp3",
      audioDuration: "32:16",
      audioTitle: "Pricing is positioning — full episode",
      audioBy: "Demand Bench (podcast)",
      title: "Pricing as positioning.",
      commentary: {
        hook: "Skip to 11:40. The reframe at minute twelve is worth the whole episode.",
      },
      tags: ["pricing", "audio", "demand"],
      relatedSlug: null,
      publishedAt: "2026-03-10",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-03-wayfinding-diner-sign",
      mediaType: "image",
      src: IMG_NAPKIN,
      alt: "A diner napkin sketch repurposed as a wayfinding study — three words, an arrow, a circle.",
      title: "Wayfinding lessons from a diner.",
      commentary: {
        hook: "Three words on a sign, painted by hand, doing what a billboard can't.",
        body: [
          "Walked past it Saturday and turned around at the corner. That's the test — does the sign make you turn around. Most B2B nav doesn't even make you scroll.",
        ],
        signoff: "— MN",
      },
      tags: ["wayfinding", "signage", "layout"],
      relatedSlug: null,
      publishedAt: "2026-03-04",
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
