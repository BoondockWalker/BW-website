/* global React */
/* Reveal system — IntersectionObserver-based scroll choreography.
   Single editorial easing. prefers-reduced-motion respected.
   Usage:  <Reveal kind="rise" delay={120}>...</Reveal>
   Kinds:  rise · cascade · wipe · maskUp · countUp · parallax · fadeIn */

const REVEAL_EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";
const REVEAL_DUR  = 760;       // ms — base duration
const REVEAL_THR  = 0.12;      // intersection threshold

/* Inject reveal stylesheet once */
(function injectRevealCSS() {
  if (document.getElementById("bw-reveal-css")) return;
  const s = document.createElement("style");
  s.id = "bw-reveal-css";
  s.textContent = `
    [data-rv]{will-change:transform,opacity,clip-path}
    [data-rv="rise"]{opacity:0;transform:translate3d(0,28px,0);transition:opacity ${REVEAL_DUR}ms ${REVEAL_EASE},transform ${REVEAL_DUR}ms ${REVEAL_EASE}}
    [data-rv="rise"].on{opacity:1;transform:translate3d(0,0,0)}

    [data-rv="fadeIn"]{opacity:0;transition:opacity 900ms ${REVEAL_EASE}}
    [data-rv="fadeIn"].on{opacity:1}

    [data-rv="wipe"]{opacity:0;clip-path:inset(8% 8% 8% 8%);transform:scale(1.06);transition:opacity 900ms ${REVEAL_EASE},clip-path 1100ms ${REVEAL_EASE},transform 1400ms ${REVEAL_EASE}}
    [data-rv="wipe"].on{opacity:1;clip-path:inset(0 0 0 0);transform:scale(1)}

    [data-rv="wipeUp"]{opacity:0;clip-path:inset(100% 0 0 0);transform:translateY(40px);transition:opacity 900ms ${REVEAL_EASE},clip-path 1100ms ${REVEAL_EASE},transform 1100ms ${REVEAL_EASE}}
    [data-rv="wipeUp"].on{opacity:1;clip-path:inset(0 0 0 0);transform:translateY(0)}

    [data-rv="maskUp"]{display:inline-block;clip-path:inset(0 0 100% 0);transform:translateY(0.4em);transition:clip-path 1000ms ${REVEAL_EASE},transform 1000ms ${REVEAL_EASE}}
    [data-rv="maskUp"].on{clip-path:inset(0 0 0 0);transform:translateY(0)}

    [data-rv="cascade"] > *{opacity:0;transform:translate3d(0,18px,0);transition:opacity 720ms ${REVEAL_EASE},transform 720ms ${REVEAL_EASE}}
    [data-rv="cascade"].on > *{opacity:1;transform:translate3d(0,0,0)}

    [data-rv="slideL"]{opacity:0;transform:translate3d(-40px,0,0);transition:opacity 900ms ${REVEAL_EASE},transform 900ms ${REVEAL_EASE}}
    [data-rv="slideL"].on{opacity:1;transform:translate3d(0,0,0)}
    [data-rv="slideR"]{opacity:0;transform:translate3d(40px,0,0);transition:opacity 900ms ${REVEAL_EASE},transform 900ms ${REVEAL_EASE}}
    [data-rv="slideR"].on{opacity:1;transform:translate3d(0,0,0)}

    @media (prefers-reduced-motion: reduce){
      [data-rv]{transition:none!important;clip-path:none!important;transform:none!important;opacity:1!important}
      [data-rv="cascade"] > *{transition:none!important;transform:none!important;opacity:1!important}
    }
  `;
  document.head.appendChild(s);
})();

/* Hook — fires `on` class when element enters viewport (once) */
function useReveal(opts = {}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("on");
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add("on");
          io.unobserve(el);
        }
      });
    }, { threshold: opts.threshold ?? REVEAL_THR, rootMargin: opts.rootMargin || "0px 0px -8% 0px" });
    io.observe(el);
    // Fallback — if already in viewport at observe time, fire immediately.
    // Guards against IO callback skipping initial intersection in some contexts.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      el.classList.add("on");
      io.unobserve(el);
    }
    return () => io.disconnect();
  }, []);
  return ref;
}

/* Reveal — single primitive */
function Reveal({ kind = "rise", delay = 0, stagger, threshold, as = "div", style, children, ...rest }) {
  const ref = useReveal({ threshold });
  const Tag = as;
  const inner = stagger
    ? React.Children.map(children, (c, i) =>
        React.isValidElement(c)
          ? React.cloneElement(c, { style: { ...(c.props.style || {}), transitionDelay: `${i * stagger}ms` } })
          : c
      )
    : children;
  return (
    <Tag
      ref={ref}
      data-rv={kind}
      style={{ ...(style || {}), transitionDelay: delay ? `${delay}ms` : undefined }}
      {...rest}
    >
      {inner}
    </Tag>
  );
}

/* CountUp — animates from 0 → target when in view. Supports prefix/suffix. */
function CountUp({ to, prefix = "", suffix = "", duration = 1400, decimals = 0, style }) {
  const ref = React.useRef(null);
  const [v, setV] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          setStarted(true);
          io.unobserve(el);
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setV(to * eased);
            if (t < 1) requestAnimationFrame(tick);
            else setV(to);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  const fmt = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString();
  return <span ref={ref} style={style}>{prefix}{fmt}{suffix}</span>;
}

/* Parallax — slow vertical drift while element is in viewport */
function Parallax({ amount = 60, children, style }) {
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = r.top + r.height / 2;
      const progress = (vh / 2 - center) / (vh + r.height); // -0.5 .. 0.5
      setY(progress * amount);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { update(); raf = 0; }); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [amount]);
  return <div ref={ref} style={{ ...(style || {}), transform: `translate3d(0, ${y}px, 0)`, willChange: "transform" }}>{children}</div>;
}

/* MaskWords — split a string into spans, each maskUp-revealed in sequence */
function MaskWords({ text, stagger = 60, style, lineHeight = 0.9 }) {
  const words = (text || "").split(/(\s+)/);
  return (
    <span style={{ ...(style || {}), display: "inline" }}>
      {words.map((w, i) => {
        if (/^\s+$/.test(w)) return w;
        return (
          <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", lineHeight }}>
            <Reveal kind="maskUp" delay={i * stagger} as="span" style={{ display: "inline-block" }}>
              {w}
            </Reveal>
          </span>
        );
      })}
    </span>
  );
}

Object.assign(window, { useReveal, Reveal, CountUp, Parallax, MaskWords });
