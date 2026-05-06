/* global window */
/* BenchMarks — operator's bench. Daily-rotating specimens, current desk, edits to thinking. */

const BW_BENCHMARKS = {
  curator: {
    name: "Mark Nead",
    role: "Curator",
    photo: "/assets/benchmarks/curator/mark-nead-headshot.jpg",
    bio: "I keep the bench. Daily specimens, current reading, edits to my own thinking. If something here lands, it earned the spot.",
  },

  // Optional override for today's specimen. When null, the page picks by date.
  pinnedSpecimenId: null,

  // Specimens — one per day. Reference shapes below; remove the comments and add real entries.
  specimens: [
    /*
    // IMAGE specimen
    {
      id: "2026-05-letterform-ledger",
      mediaType: "image",
      src: "/assets/benchmarks/specimens/letterform-ledger.jpg",
      alt: "A 1962 ledger cover, oxblood cloth, gold-stamped serif title.",
      title: "Ledger No. 4 — Bound, 1962",
      sourceLabel: "Letterform Archive · 2024",
      sourceUrl: "https://letterformarchive.org/",
      commentary: {
        hook: "The cover is the contract.",
        body: [
          "Sixty-four years on the shelf and the title still reads at twenty feet. That's not nostalgia — that's specification.",
          "Ask yourself what your homepage looks like at twenty feet. If the answer is 'a logo and a gradient,' you bought decoration."
        ],
        signoff: "— Mark"
      },
      tags: ["typography", "voice"],
      relatedSlug: "field-notes/stop-calling-it-heritage",
      publishedAt: "2026-05-06",
      social: { igCaption: null, igCardSrc: null }
    },

    // QUOTE specimen
    {
      id: "2026-05-dunford-positioning",
      mediaType: "quote",
      quote: "Positioning is the act of deliberately defining how you are the best at something that a defined market cares a lot about.",
      attribution: "April Dunford",
      sourceLabel: "Obviously Awesome",
      sourceUrl: "https://www.aprildunford.com/",
      commentary: {
        hook: "Read the verb. Deliberately.",
        body: [
          "Most positioning isn't wrong. It's accidental. Somebody wrote a homepage on a Friday and the company has been living in it for nine years."
        ],
        signoff: "— Mark"
      },
      tags: ["positioning", "brand"],
      publishedAt: "2026-05-05",
      social: { igCaption: null, igCardSrc: null }
    },

    // LINK specimen
    {
      id: "2026-05-stripe-press",
      mediaType: "link",
      linkUrl: "https://press.stripe.com/",
      linkTitle: "Stripe Press — Books for builders",
      linkHost: "press.stripe.com",
      linkFavicon: "/assets/benchmarks/specimens/favicons/stripe.ico",
      sourceLabel: "Stripe Press",
      commentary: {
        hook: "A payments company runs the best small press in tech. Ask why.",
        body: [
          "Stripe Press isn't marketing. It's recruiting, retention, and category authority — bound in cloth. The ROI math doesn't fit a spreadsheet, which is why it works."
        ],
        signoff: "— Mark"
      },
      tags: ["brand", "publishing", "category"],
      publishedAt: "2026-05-04",
      social: { igCaption: null, igCardSrc: null }
    },

    // AUDIO specimen
    {
      id: "2026-05-rick-rubin-tetra",
      mediaType: "audio",
      audioSrc: "/assets/benchmarks/specimens/rubin-tetra-clip.mp3",
      audioDuration: "2:14:08",
      audioTitle: "On Taste",
      audioBy: "Rick Rubin · Tetragrammaton",
      title: "On Taste",
      sourceLabel: "Tetragrammaton · Ep. 184",
      sourceUrl: "https://www.tetragrammaton.com/",
      commentary: {
        hook: "Taste is a discipline, not a talent.",
        body: [
          "Two hours of a producer talking about subtraction. The bench moved a quarter-inch after this one."
        ],
        signoff: "— Mark"
      },
      tags: ["taste", "craft"],
      publishedAt: "2026-05-03",
      social: { igCaption: null, igCardSrc: null }
    },
    */
  ],

  // Currently on the desk — exactly 3 items at runtime (reading / listening / arguing).
  desk: [
    /*
    {
      kind: "reading",
      title: "Obviously Awesome",
      by: "April Dunford",
      link: "https://www.aprildunford.com/",
      line: "Third pass. Different book each time."
    }
    */
  ],

  // Edits to thinking — 3 to 5 items, oldest dropped as new added.
  edits: [
    /*
    {
      date: "2026-04-30",
      statement: "Rebrands are usually refits in denial.",
      why: "Watched two clients spend six figures to rediscover the brand they already had."
    }
    */
  ],
};

window.BW_BENCHMARKS = BW_BENCHMARKS;
