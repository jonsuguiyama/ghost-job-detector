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

## Contributing

This started as a small personal project to deal with a frustrating job search, and it's still actively growing. If you want to help make it better, contributions are very welcome:

- Found a bug or have an idea for a new feature? [Open an issue](https://github.com/jonsuguiyama/ghost-job-detector/issues).
- Want to fix something yourself, add a new warning sign to the checklist, improve the automatic-analysis heuristics, add a language, or clean up the code? Fork the repo and open a PR.
- Recruiters and people who've been on the hiring side: your perspective on what actually signals a ghost job is especially valuable. Feel free to open an issue with suggestions even if you don't write code.

No contribution is too small. Typo fixes, better copy, a source you found that we missed, all of it helps.
