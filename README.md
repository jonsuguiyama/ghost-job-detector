# GhostGig

Checklist and automatic text analysis to tell whether a job posting is real or a ghost job - PT/EN/ES, with real sources.

Live at [ghostgig.vercel.app](https://ghostgig.vercel.app).

## Stack

React + Vite, React Router, plain CSS (no framework), Umami for analytics.

## Local development

```bash
npm install
npm run dev
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. On [vercel.com/new](https://vercel.com/new), import the repo - Vercel auto-detects Vite, no config needed.
3. Pick a project name - this becomes `your-name.vercel.app`. If it's taken, Vercel will tell you at this step; just try another.

## Dynamic visitor counter (optional)

The home page shows "N people have already used this" pulled live from Umami - it renders nothing until configured (never a fake number).

1. Create a site at [cloud.umami.is](https://cloud.umami.is) and grab its Website ID.
2. Generate an API key: account settings → API Keys.
3. In the Vercel project settings, add environment variables:
   - `UMAMI_API_KEY`
   - `UMAMI_WEBSITE_ID`
   - `UMAMI_LAUNCH_TIMESTAMP` (optional - ms since epoch marking when to start counting from; defaults to Jan 1, 2026)
4. Also set `data-website-id` in `index.html`'s Umami script tag to the same Website ID (this is the public tracking script - safe to expose; the API key in step 2 stays server-side in `api/stats.js`).

## Analytics events tracked

All anonymous, no cookies, never the pasted job text: `language-switch`, `item-toggle`, `paste-field-set`, `checklist`/`paste`-`verdict-change`, `reset-click`, `home-cta-click`, `faq-open`, `source-click`, `mode-switch`.
