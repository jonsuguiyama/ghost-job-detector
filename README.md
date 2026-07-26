# GhostGig

Checklist and automatic text analysis to tell whether a job posting is real or a ghost job - PT/EN/ES, with real sources.

Live at [ghostgig.vercel.app](https://ghostgig.vercel.app).

## Stack

React + Vite, React Router, plain CSS (no framework).

## Local development

```bash
npm install
npm run dev
```

## Testing

```bash
npm run test        # run once
npm run test:watch  # watch mode
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. On [vercel.com/new](https://vercel.com/new), import the repo - Vercel auto-detects Vite, no config needed.
3. Pick a project name - this becomes `your-name.vercel.app`. If it's taken, Vercel will tell you at this step; just try another.
