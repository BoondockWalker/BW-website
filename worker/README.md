# Brand Triage Worker

A Cloudflare Worker that backs `/brand-triage.html` on the BW site.

What it does on each POST from the page:
1. Validates the form payload (name, email, company, industry, ranked challenges, optional context).
2. Calls Anthropic with the system prompt in `src/index.js`.
3. Renders a PDF report server-side via `jsPDF` (mirrors the on-page "Download PDF" layout).
4. Emails the PDF to the visitor via Resend (BCC's an internal mailbox if `BCC_ADDRESS` is set).
5. Returns `{ guidance, emailed }` so the page renders the full report on screen.

Both PDF + email are best-effort — they never block the on-screen render. If email fails (Resend domain not verified, etc.), the visitor still sees the full guidance on screen.

---

## One-time deploy

You'll need:
- A Cloudflare account (free tier is fine).
- An Anthropic API key (`sk-ant-…`).
- A Resend account + a verified sending domain (so emails actually deliver). Free tier = 100 emails/day, plenty for this.

From inside `worker/`:

```bash
# 1. Install deps + the wrangler CLI
npm install

# 2. Log into Cloudflare (opens a browser)
npx wrangler login

# 3. Set the two required secrets
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put RESEND_API_KEY

# 4. (Optional) BCC every triage report to an internal mailbox
npx wrangler secret put BCC_ADDRESS

# 5. Deploy
npx wrangler deploy
```

After deploy, wrangler prints the Worker URL (e.g. `https://bw-brand-triage.YOURACCOUNT.workers.dev`). Open `brand-triage.html` in the repo root and replace the placeholder URL on line ~634:

```js
var response = await fetch('https://YOUR-WORKER-URL/', { ...
```

Commit + push and the next deploy of `main` to GitHub Pages picks it up.

## Verifying

After deploy:

```bash
# Stream live logs
npx wrangler tail
```

Then run through the page once. You should see:
- A `POST /` log line
- An Anthropic call
- A Resend call (if RESEND_API_KEY is set and the domain is verified)
- A `200` response back to the page

If Anthropic fails, the worker returns `502` and the page shows the catch-block fallback. If Resend fails, the worker still returns `200` with `emailed: false` — the visitor sees the guidance but doesn't get an email.

## Tightening CORS

`wrangler.toml` sets `ALLOWED_ORIGINS` to a comma-separated list. Add/remove origins there; redeploy with `npx wrangler deploy`. The Worker only echoes back an `Access-Control-Allow-Origin` that matches the request's `Origin` header against this list.

## Adjusting the prompt

`SYSTEM_PROMPT` in `src/index.js`. Keep `## Section title` and `**bold title** —` formatting conventions — the page's markdown→HTML renderer and the PDF layout both depend on them.

## Adjusting the model

`ANTHROPIC_MODEL` in `src/index.js`. Default: `claude-sonnet-4-5`. Bump as new models ship.
