/* global React, BW, Eyebrow, useMediaQuery, BW_BENCHMARKS, SiteHeader, BMCard, BMFooter */
/* BenchMarks Archive — every artifact on the desk, filterable.
   Filter rail (left, sticky) + results grid (right). Filter state mirrored to URL.

   URL params:
     type   — image | video | quote | link | audio (repeatable, comma-joined or repeated)
     year   — 4-digit
     month  — 2-digit (01..12)
     tag    — repeatable (comma-joined)
     sort   — desc (newest, default) | asc (oldest)
     page   — 1-based pagination
*/

const PAGE_SIZE = 24;

/* ───── Today as a YYYY-MM-DD string in the browser's local time zone.
   Lexicographic <= comparison against artifact.publishedAt is the publish gate. ───── */
function getTodayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

const TYPE_OPTIONS = [
  { key: "image", label: "Image" },
  { key: "video", label: "Video" },
  { key: "quote", label: "Quote" },
  { key: "link",  label: "Link" },
  { key: "audio", label: "Audio" },
];

/* ───── URL helpers ───── */
function readFiltersFromUrl() {
  if (typeof window === "undefined") return { types: [], year: "", month: "", tags: [], sort: "desc", page: 1 };
  const p = new URLSearchParams(window.location.search);
  const splitMulti = (val) => val ? val.split(",").map(s => s.trim()).filter(Boolean) : [];
  return {
    types: splitMulti(p.get("type")),
    year: p.get("year") || "",
    month: p.get("month") || "",
    tags: splitMulti(p.get("tag")),
    sort: p.get("sort") === "asc" ? "asc" : "desc",
    page: Math.max(1, parseInt(p.get("page") || "1", 10) || 1),
  };
}

function writeFiltersToUrl(filters) {
  if (typeof window === "undefined") return;
  const p = new URLSearchParams();
  if (filters.types && filters.types.length) p.set("type", filters.types.join(","));
  if (filters.year) p.set("year", filters.year);
  if (filters.month) p.set("month", filters.month);
  if (filters.tags && filters.tags.length) p.set("tag", filters.tags.join(","));
  if (filters.sort && filters.sort !== "desc") p.set("sort", filters.sort);
  if (filters.page && filters.page > 1) p.set("page", String(filters.page));
  const qs = p.toString();
  const url = window.location.pathname + (qs ? `?${qs}` : "");
  window.history.replaceState({}, "", url);
}

/* ───── Derive filter facets from data ───── */
function buildFacets(artifacts) {
  const typeCounts = { image: 0, video: 0, quote: 0, link: 0, audio: 0 };
  const tagCounts = {};
  const yearMonthMap = {}; // year -> Set<month>

  (artifacts || []).forEach(s => {
    if (s.mediaType && typeCounts[s.mediaType] !== undefined) typeCounts[s.mediaType]++;
    (s.tags || []).forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1; });
    if (s.publishedAt && /^\d{4}-\d{2}/.test(s.publishedAt)) {
      const [y, m] = s.publishedAt.split("-");
      if (!yearMonthMap[y]) yearMonthMap[y] = new Set();
      yearMonthMap[y].add(m);
    }
  });

  const tagsSorted = Object.entries(tagCounts)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([key, count]) => ({ key, count }));

  const years = Object.keys(yearMonthMap).sort().reverse();
  const monthsByYear = {};
  Object.entries(yearMonthMap).forEach(([y, set]) => {
    monthsByYear[y] = Array.from(set).sort();
  });

  return { typeCounts, tags: tagsSorted, years, monthsByYear };
}

/* ───── Apply filters ───── */
function applyFilters(artifacts, filters) {
  let out = (artifacts || []).slice();
  if (filters.types && filters.types.length) {
    out = out.filter(s => filters.types.includes(s.mediaType));
  }
  if (filters.year) {
    out = out.filter(s => (s.publishedAt || "").startsWith(filters.year + "-"));
  }
  if (filters.month && filters.year) {
    out = out.filter(s => (s.publishedAt || "").startsWith(`${filters.year}-${filters.month}`));
  }
  if (filters.tags && filters.tags.length) {
    out = out.filter(s => (s.tags || []).some(t => filters.tags.includes(t)));
  }
  out.sort((a, b) => {
    const av = a.publishedAt || "";
    const bv = b.publishedAt || "";
    if (filters.sort === "asc") return av < bv ? -1 : av > bv ? 1 : 0;
    return av < bv ? 1 : av > bv ? -1 : 0;
  });
  return out;
}

/* ───── Masthead ───── */
function BMArchiveMasthead({ totalCount, filteredCount }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <section style={{ background: BW.chalk50, color: BW.ink, borderBottom: `1.5px solid ${BW.ink}`, fontFamily: BW.ffG, position: "relative" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(24px, 4vw, 40px) clamp(20px, 5vw, 64px) clamp(36px, 5vw, 56px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.clay, fontWeight: 700, marginBottom: 28, flexWrap: "wrap" }}>
          <span>BenchMarks · the archive</span>
          <span style={{ width: 28, height: 1, background: BW.clay }} />
          <a href="benchmarks.html" style={{ color: BW.ink2, textDecoration: "none", borderBottom: `1px solid ${BW.ruleL}`, paddingBottom: 2 }}>← back to today</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr", gap: isMobile ? 32 : 80, alignItems: "end" }}>
          <h1 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(56px, 12vw, 144px)", lineHeight: 0.9, letterSpacing: "-0.025em", margin: 0, color: BW.ink }}>
            Everything<br/>on the desk.
          </h1>
          <div style={{ paddingBottom: isMobile ? 0 : 16 }}>
            <p style={{ fontFamily: BW.ffSerif, fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.55, margin: "0 0 24px", color: BW.ink2, maxWidth: "44ch" }}>
              Every artifact Mark's pinned to the wall — image, quote, link, recording. Filter by type, year, or tag. The bench keeps everything.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.ink3 }}>
              <div>
                <div style={{ fontFamily: BW.ffG, fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 700, color: BW.ink, letterSpacing: "-0.02em", marginBottom: 4 }}>{totalCount}</div>
                <div>All-time</div>
              </div>
              <div>
                <div style={{ fontFamily: BW.ffG, fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 700, color: BW.clay, letterSpacing: "-0.02em", marginBottom: 4 }}>{filteredCount}</div>
                <div>Showing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Filter rail (sticky on desktop, accordion on mobile) ───── */
function BMFilterRail({ filters, setFilters, facets, isMobile }) {
  const [open, setOpen] = React.useState(!isMobile);
  React.useEffect(() => { setOpen(!isMobile); }, [isMobile]);

  const [showAllTags, setShowAllTags] = React.useState(false);
  const tagLimit = 12;
  const visibleTags = showAllTags ? facets.tags : facets.tags.slice(0, tagLimit);

  const toggleType = (key) => {
    const next = filters.types.includes(key)
      ? filters.types.filter(t => t !== key)
      : [...filters.types, key];
    setFilters({ ...filters, types: next, page: 1 });
  };
  const toggleTag = (key) => {
    const next = filters.tags.includes(key)
      ? filters.tags.filter(t => t !== key)
      : [...filters.tags, key];
    setFilters({ ...filters, tags: next, page: 1 });
  };
  const clear = () => setFilters({ types: [], year: "", month: "", tags: [], sort: "desc", page: 1 });

  const anyActive =
    filters.types.length > 0 ||
    filters.year ||
    filters.month ||
    filters.tags.length > 0 ||
    filters.sort !== "desc";

  const Section = ({ label, children }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingBottom: 18, marginBottom: 18, borderBottom: `1px solid ${BW.ruleL}` }}>
      <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>{label}</div>
      {children}
    </div>
  );

  const Check = ({ label, count, checked, onChange }) => (
    <label style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: BW.ffG, fontSize: 13, color: BW.ink, cursor: "pointer", padding: "4px 0" }}>
      <span style={{
        width: 14, height: 14, border: `1.5px solid ${checked ? BW.ink : BW.ruleL}`, background: checked ? BW.ink : "transparent",
        display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        {checked && <span style={{ width: 6, height: 6, background: BW.brass }} />}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} />
      <span style={{ flex: 1 }}>{label}</span>
      {count !== undefined && (
        <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.18em", color: BW.ink3, fontWeight: 600 }}>{count}</span>
      )}
    </label>
  );

  const monthOptions = filters.year && facets.monthsByYear[filters.year] ? facets.monthsByYear[filters.year] : [];
  const monthLabel = (m) => {
    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[parseInt(m, 10)] || m;
  };

  return (
    <aside style={{ position: isMobile ? "relative" : "sticky", top: isMobile ? "auto" : 88, alignSelf: "start", border: `1.5px solid ${BW.ink}`, background: BW.chalk50, padding: isMobile ? "16px 18px" : "24px 22px", display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, marginBottom: 16, borderBottom: `1.5px solid ${BW.ink}` }}>
        <div style={{ fontFamily: BW.ffM, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: BW.clay, fontWeight: 700 }}>Filter</div>
        {isMobile && (
          <button onClick={() => setOpen(o => !o)} aria-expanded={open} style={{ background: "transparent", border: `1px solid ${BW.ruleL}`, padding: "6px 12px", borderRadius: 999, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.ink, cursor: "pointer", fontWeight: 700 }}>
            {open ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {open && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Section label="Type">
            {TYPE_OPTIONS.map(o => (
              <Check
                key={o.key}
                label={o.label}
                count={facets.typeCounts[o.key]}
                checked={filters.types.includes(o.key)}
                onChange={() => toggleType(o.key)}
              />
            ))}
          </Section>

          {facets.years.length > 0 && (
            <Section label="When">
              <select
                value={filters.year}
                onChange={(e) => setFilters({ ...filters, year: e.target.value, month: "", page: 1 })}
                style={{ fontFamily: BW.ffG, fontSize: 13, fontWeight: 600, color: BW.ink, background: "transparent", border: `1px solid ${BW.ruleL}`, padding: "8px 10px", outline: "none", cursor: "pointer" }}
              >
                <option value="">All years</option>
                {facets.years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              {filters.year && monthOptions.length > 0 && (
                <select
                  value={filters.month}
                  onChange={(e) => setFilters({ ...filters, month: e.target.value, page: 1 })}
                  style={{ fontFamily: BW.ffG, fontSize: 13, fontWeight: 600, color: BW.ink, background: "transparent", border: `1px solid ${BW.ruleL}`, padding: "8px 10px", outline: "none", cursor: "pointer", marginTop: 8 }}
                >
                  <option value="">All months</option>
                  {monthOptions.map(m => <option key={m} value={m}>{monthLabel(m)}</option>)}
                </select>
              )}
            </Section>
          )}

          {facets.tags.length > 0 && (
            <Section label="Tags">
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {visibleTags.map(t => (
                  <Check
                    key={t.key}
                    label={t.key}
                    count={t.count}
                    checked={filters.tags.includes(t.key)}
                    onChange={() => toggleTag(t.key)}
                  />
                ))}
              </div>
              {facets.tags.length > tagLimit && (
                <button onClick={() => setShowAllTags(s => !s)} style={{ marginTop: 8, background: "transparent", border: "none", padding: 0, fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BW.clay, cursor: "pointer", fontWeight: 700, alignSelf: "flex-start" }}>
                  {showAllTags ? "Show less ↑" : `Show all (${facets.tags.length}) ↓`}
                </button>
              )}
            </Section>
          )}

          <Section label="Sort">
            <label style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: BW.ffG, fontSize: 13, color: BW.ink, cursor: "pointer", padding: "4px 0" }}>
              <input type="radio" name="bm-sort" checked={filters.sort === "desc"} onChange={() => setFilters({ ...filters, sort: "desc", page: 1 })} style={{ accentColor: BW.ink }} />
              Newest first
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: BW.ffG, fontSize: 13, color: BW.ink, cursor: "pointer", padding: "4px 0" }}>
              <input type="radio" name="bm-sort" checked={filters.sort === "asc"} onChange={() => setFilters({ ...filters, sort: "asc", page: 1 })} style={{ accentColor: BW.ink }} />
              Oldest first
            </label>
          </Section>

          <button
            onClick={clear}
            disabled={!anyActive}
            style={{
              marginTop: 4, padding: "10px 14px", borderRadius: 999,
              border: `1.5px solid ${anyActive ? BW.ink : BW.ruleL}`,
              background: "transparent", color: anyActive ? BW.ink : BW.ink3,
              fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700,
              cursor: anyActive ? "pointer" : "not-allowed", opacity: anyActive ? 1 : 0.6,
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </aside>
  );
}

/* ───── Empty state ───── */
function BMArchiveEmpty({ onClear }) {
  return (
    <div style={{ border: `1.5px dashed ${BW.ruleL}`, padding: "64px 32px", textAlign: "center", background: BW.chalk50 }}>
      <div style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: BW.ink3, fontWeight: 700, marginBottom: 14 }}>Nothing on the desk</div>
      <h3 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "0 0 16px", color: BW.ink }}>
        No artifacts match these filters.
      </h3>
      <p style={{ fontFamily: BW.ffSerif, fontSize: 16, lineHeight: 1.55, margin: "0 auto 24px", color: BW.ink2, maxWidth: "44ch" }}>
        Try loosening one constraint — drop a tag, widen the year, or clear it all.
      </p>
      <button onClick={onClear} style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: BW.ffG, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.chalk50, background: BW.ink, padding: "12px 18px", borderRadius: 999, border: "none", cursor: "pointer" }}>
        Clear all filters →
      </button>
    </div>
  );
}

/* ───── Page composition ───── */
function BenchMarksArchivePage() {
  const data = (typeof window !== "undefined" && window.BW_BENCHMARKS) || { artifacts: [], desk: [], edits: [], curator: null };
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isTabletGrid = useMediaQuery("(max-width: 1100px)");
  const isMobileGrid = useMediaQuery("(max-width: 720px)");

  const [filters, setFiltersState] = React.useState(() => readFiltersFromUrl());
  const setFilters = React.useCallback((next) => {
    setFiltersState(next);
    writeFiltersToUrl(next);
  }, []);

  // Publish gate — applied once at the top of the page so every downstream
  // consumer (filter rail facets, year/month dropdowns, tag chips, results
  // grid, total stat) sees only published artifacts. Browser-local date,
  // inclusive comparison. Recompute only when the source artifacts change.
  const publishedArtifacts = React.useMemo(() => {
    const today = getTodayISO();
    return (data.artifacts || []).filter(s => s.publishedAt && s.publishedAt <= today);
  }, [data.artifacts]);

  const facets = React.useMemo(() => buildFacets(publishedArtifacts), [publishedArtifacts]);
  const filtered = React.useMemo(() => applyFilters(publishedArtifacts, filters), [publishedArtifacts, filters]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageClamped = Math.min(filters.page, totalPages);
  const visibleEnd = pageClamped * PAGE_SIZE;
  const visible = filtered.slice(0, visibleEnd);

  const onLoadMore = () => setFilters({ ...filters, page: pageClamped + 1 });
  const onClear = () => setFilters({ types: [], year: "", month: "", tags: [], sort: "desc", page: 1 });

  return (
    <div style={{ background: BW.chalk, minHeight: "100vh" }}>
      <style>{`
        .bm-card:hover { transform: translateY(-2px); }
        .bm-card:focus-visible { outline: 2px solid ${BW.brass}; outline-offset: 3px; }
        .bm-archive-loadmore:focus-visible { outline: 2px solid ${BW.brass}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          .bm-card { transition: none !important; }
          .bm-card:hover { transform: none !important; }
        }
      `}</style>
      <SiteHeader current="Field Notes" sticky={true} />
      <NotesNav current="BenchMarks" />
      <BMArchiveMasthead totalCount={publishedArtifacts.length} filteredCount={filtered.length} />

      <section style={{ background: BW.chalk, borderBottom: `1.5px solid ${BW.ink}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(28px, 4vw, 48px) clamp(20px, 5vw, 64px) clamp(56px, 6vw, 80px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "minmax(240px, 280px) minmax(0, 1fr)", gap: "clamp(20px, 3vw, 40px)", alignItems: "start" }}>
            <BMFilterRail filters={filters} setFilters={setFilters} facets={facets} isMobile={isMobile} />

            <div>
              {/* Result count + active chips */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 14, borderBottom: `1.5px solid ${BW.ink}`, marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                <h2 style={{ fontFamily: BW.ffD, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1, letterSpacing: "-0.02em", margin: 0 }}>
                  {filtered.length === 0 ? "No artifacts." : filtered.length === 1 ? "One artifact." : `${filtered.length} artifacts.`}
                </h2>
                <span style={{ fontFamily: BW.ffM, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: BW.ink2, fontWeight: 700 }}>
                  {filters.sort === "desc" ? "Newest first" : "Oldest first"}
                  {filters.types.length > 0 && ` · ${filters.types.length} type${filters.types.length === 1 ? "" : "s"}`}
                  {filters.tags.length > 0 && ` · ${filters.tags.length} tag${filters.tags.length === 1 ? "" : "s"}`}
                </span>
              </div>

              {filtered.length === 0 ? (
                <BMArchiveEmpty onClear={onClear} />
              ) : (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: isMobileGrid ? "1fr" : isTabletGrid ? "1fr 1fr" : "repeat(3, 1fr)", gap: "clamp(14px, 1.6vw, 20px)" }}>
                    {visible.map(s => <BMCard key={s.id} artifact={s} />)}
                  </div>

                  {visibleEnd < filtered.length && (
                    <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
                      <button
                        onClick={onLoadMore}
                        className="bm-archive-loadmore"
                        style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: BW.ffG, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BW.chalk50, background: BW.ink, padding: "14px 24px", borderRadius: 999, border: "none", cursor: "pointer" }}
                      >
                        Load more · {filtered.length - visibleEnd} remaining →
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <BMFooter />
    </div>
  );
}

window.BenchMarksArchivePage = BenchMarksArchivePage;
