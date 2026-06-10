# Boots Walk Loop — Site Integration Brief

## What you're integrating

A seamless looping video of a pair of hiking boots walking with dust kicking up at each footfall, for the Boondock Walker website. Two files, identical content:

- `boots-walk-loop.webm` — 379 KB, VP9, preferred source
- `boots-walk-loop.mp4` — 703 KB, H.264 high profile, faststart enabled, fallback source

Both are 960×960 square, 24fps, 2.000 seconds per cycle, no audio track. The clip is engineered to loop natively — the last frame flows into the first with no visible seam. Do not trim, re-encode, or add crossfade logic; the loop point is already handled in the asset.

## Placement

Put both files in the site's static assets directory (e.g. `/public/video/` or equivalent for the framework in use). Serve them as static files — no streaming wrapper needed at this size.

## Markup

```html
<video
  class="boots-loop"
  autoplay
  loop
  muted
  playsinline
  preload="auto"
  poster="/video/boots-poster.jpg"
  width="960"
  height="960"
  aria-hidden="true"
>
  <source src="/video/boots-walk-loop.webm" type="video/webm">
  <source src="/video/boots-walk-loop.mp4" type="video/mp4">
</video>
```

Notes on each attribute — these are all load-bearing:

- `muted` + `playsinline` are required for autoplay to work on iOS Safari and Chrome mobile. Without both, the video renders as a tap-to-play poster.
- `loop` handles infinite playback; no JS needed.
- WebM source must come **first** so capable browsers take the smaller file.
- `width`/`height` prevent layout shift before the video paints.
- `aria-hidden="true"` because this is decorative; screen readers should skip it.
- Generate the poster by extracting the first frame: `ffmpeg -i boots-walk-loop.mp4 -frames:v 1 boots-poster.jpg`. The poster prevents a blank box on slow connections and is what reduced-motion users will see.

## Accessibility — reduced motion

Respect `prefers-reduced-motion`. Pause the video and leave the poster/first frame visible:

```js
const video = document.querySelector('.boots-loop');
const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
function applyMotionPref() {
  if (mq.matches) { video.pause(); } else { video.play().catch(() => {}); }
}
applyMotionPref();
mq.addEventListener('change', applyMotionPref);
```

If the site is React, wrap the equivalent in a `useEffect`. The `.catch(() => {})` guards against autoplay-rejection promise errors.

## Visual integration

The video background is pure/near-white with warm dust tones at the ground plane. Intended treatment: place it on a white or near-white section so the boots appear to walk directly on the page with no visible video boundary. If the section background isn't pure white, either match the section to `#FFFFFF` or apply `mix-blend-mode: multiply` to the video element — multiply will knock out the white and let the boots/dust sit on any light background. Test multiply in Safari specifically; if it artifacts, fall back to a white section.

Sizing: the asset is square. In a hero context, constrain with `max-width` rather than scaling up past 960px — it's crisp at native size and acceptable slightly above, but will soften noticeably at 1.5x+.

## Performance

At ~380 KB (webm) this is light enough to `preload="auto"` in a hero. If it's placed below the fold instead, switch to `preload="none"` and add `loading` deferral via IntersectionObserver to start playback when it scrolls into view. Don't lazy-load it in a hero — the empty box before play is worse than the bytes.

## Acceptance checks

1. Loops continuously with no visible jump or flash at the 2-second mark (watch through at least 4 cycles).
2. Autoplays on iOS Safari, Android Chrome, desktop Safari/Chrome/Firefox.
3. No layout shift on load.
4. With OS-level reduced motion enabled, the video does not animate.
5. Lighthouse: no regression on LCP for the page it lands on.
