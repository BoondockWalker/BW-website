/* global window */
/* Boondock Walker — BenchMarksData. Daily ledger.
   Specimens are placeholder commentary on Mark's uploaded images.
   Replace the `commentary` blocks below with the real notes. */

const SPEC = "/assets/benchmarks/specimens/";

const BW_BENCHMARKS = {
  curator: {
    name: "Mark Nead",
    role: "Curator",
    photo: "/assets/benchmarks/curator/Mark-Nead-headshot.jpg",
    bio: "I keep the bench. One specimen a day, three things on the desk, and a running log of edits to my own thinking. If something here lands, it earned the spot.",
  },

  // Optional override for today's specimen. When null, the page picks by date.
  pinnedSpecimenId: null,

  // 14 specimens, newest first. Each points at a real uploaded image.
  // Commentary below is placeholder — refine specimen-by-specimen.
  specimens: [
    {
      id: "2026-05-05-nobull-color-palette",
      mediaType: "image",
      src: SPEC + "2026-05-05-Nobull-color-palette.png",
      alt: "NoBull brand color palette specimen.",
      title: "NoBull — color palette.",
      commentary: {
        hook: "Five swatches. The discipline reads.",
        body: [
          "Restraint is the easy thing to admire and the hard thing to do. Most brand systems balloon to fourteen colors because no one in the room had the authority to delete six.",
          "What works here: every swatch earns the slot. Pull any of them and the system gets weaker. That's the test for whether a palette is a system or a wishlist.",
          "I'm keeping this one taped above the desk for the next pitch where someone proposes adding a tertiary accent.",
        ],
        signoff: "— MN",
      },
      tags: ["brand", "craft"],
      relatedSlug: null,
      publishedAt: "2026-05-05",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-04-stanley",
      mediaType: "image",
      src: SPEC + "2026-05-04-Stanley.png",
      alt: "Stanley product specimen.",
      title: "Stanley.",
      commentary: {
        hook: "An object that became a noun. Worth studying.",
        body: [],
      },
      tags: ["brand", "naming"],
      relatedSlug: null,
      publishedAt: "2026-05-04",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-03-claude-notion",
      mediaType: "image",
      src: SPEC + "2026-05-03-Claude-Notion.png",
      alt: "Specimen — Claude and Notion integration.",
      title: "Claude × Notion.",
      commentary: {
        hook: "Two tools that finally got out of each other's way.",
        body: [],
      },
      tags: ["craft", "voice"],
      relatedSlug: null,
      publishedAt: "2026-05-03",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-02-b-unchained",
      mediaType: "image",
      src: SPEC + "2026-05-02-B-Unchained.png",
      alt: "Specimen — B-Unchained.",
      title: "B-Unchained.",
      commentary: {
        hook: "Constraint as the canvas, not the cage.",
        body: [],
      },
      tags: ["craft", "voice"],
      relatedSlug: null,
      publishedAt: "2026-05-02",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-05-01-mark-watercolor",
      mediaType: "image",
      src: SPEC + "2026-05-01-Mark-watercolor.png",
      alt: "Watercolor study by Mark Nead.",
      title: "Watercolor — Tuesday.",
      commentary: {
        hook: "Started Tuesday. Still wet on the edges.",
        body: [],
        signoff: "— MN",
      },
      tags: ["sketches", "craft"],
      relatedSlug: null,
      publishedAt: "2026-05-01",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-30-evernote",
      mediaType: "image",
      src: SPEC + "2026-04-30-Evernote.png",
      alt: "Evernote brand specimen.",
      title: "Evernote.",
      commentary: {
        hook: "Saved everything. Found nothing. The lesson stuck.",
        body: [],
      },
      tags: ["brand", "voice"],
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
      tags: ["sketches", "craft"],
      relatedSlug: null,
      publishedAt: "2026-04-29",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-28-truth-in-me",
      mediaType: "image",
      src: SPEC + "2026-04-28-Truth-in-Me.png",
      alt: "Specimen — Truth in Me.",
      title: "Truth in Me.",
      commentary: {
        hook: "The phrase you keep avoiding is the brief.",
        body: [],
      },
      tags: ["voice", "brand"],
      relatedSlug: null,
      publishedAt: "2026-04-28",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-27-hubspot",
      mediaType: "image",
      src: SPEC + "2026-04-27-HubSpot.png",
      alt: "HubSpot brand specimen.",
      title: "HubSpot.",
      commentary: {
        hook: "Not the platform — the discipline they don't write about.",
        body: [],
      },
      tags: ["demand", "b2b"],
      relatedSlug: null,
      publishedAt: "2026-04-27",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-26-optimize-the-machine",
      mediaType: "image",
      src: SPEC + "2026-04-26-Optimize-the-Machine.png",
      alt: "Specimen — Optimize the Machine.",
      title: "Optimize the machine.",
      commentary: {
        hook: "Optimize last. Most of what's broken is the brief.",
        body: [],
      },
      tags: ["voice", "demand"],
      relatedSlug: null,
      publishedAt: "2026-04-26",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-25-bb-fire",
      mediaType: "image",
      src: SPEC + "2026-04-25-BB-fire.png",
      alt: "Specimen — BB fire imagery.",
      title: "BB — fire.",
      commentary: {
        hook: "Heat without smoke. Rare.",
        body: [],
      },
      tags: ["craft", "voice"],
      relatedSlug: null,
      publishedAt: "2026-04-25",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-24-boundlessness",
      mediaType: "image",
      src: SPEC + "2026-04-24-Boundlessness.png",
      alt: "Specimen — Boundlessness.",
      title: "Boundlessness.",
      commentary: {
        hook: "Open ends that still feel finished.",
        body: [],
      },
      tags: ["craft", "voice"],
      relatedSlug: null,
      publishedAt: "2026-04-24",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-23-humble-and-kind",
      mediaType: "image",
      src: SPEC + "2026-04-23-Humble-and-Kind.png",
      alt: "Specimen — Humble and Kind.",
      title: "Humble and Kind.",
      commentary: {
        hook: "Refrigerator-pinned for fifteen years. Still the brief.",
        body: [],
        signoff: "— MN",
      },
      tags: ["voice", "reading"],
      relatedSlug: null,
      publishedAt: "2026-04-23",
      social: { igCaption: null, igCardSrc: null },
    },

    {
      id: "2026-04-22-three-fours",
      mediaType: "image",
      src: SPEC + "2026-04-22-ThreeFours.png",
      alt: "Specimen — Three Fours.",
      title: "Three fours.",
      commentary: {
        hook: "Three quarters shown. The fourth is what you don't say.",
        body: [
          "Negative space isn't decoration. It's the part of the message you trust the reader to finish.",
          "Three out of four works because the reader becomes a participant. Show all four and you've taken the work away from them.",
        ],
        signoff: "— MN",
      },
      tags: ["voice", "craft"],
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
