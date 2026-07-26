// Serverless function (Vercel) - proxies Umami Cloud's stats API server-side so the
// API key never reaches the browser. Returns { count: number | null }.
// Requires env vars UMAMI_API_KEY and UMAMI_WEBSITE_ID (set in Vercel project settings).
// Optional UMAMI_LAUNCH_TIMESTAMP (ms since epoch) to mark the start of the all-time range.

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

  const apiKey = process.env.UMAMI_API_KEY;
  const websiteId = process.env.UMAMI_WEBSITE_ID;

  if (!apiKey || !websiteId) {
    res.status(200).json({ count: null });
    return;
  }

  const startAt = Number(process.env.UMAMI_LAUNCH_TIMESTAMP) || Date.UTC(2026, 0, 1);
  const endAt = Date.now();

  try {
    const url = `https://api.umami.is/v1/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`;
    const response = await fetch(url, {
      headers: { 'x-umami-api-key': apiKey }
    });

    if (!response.ok) {
      res.status(200).json({ count: null });
      return;
    }

    const data = await response.json();
    const count = data?.visitors?.value ?? null;
    res.status(200).json({ count });
  } catch {
    res.status(200).json({ count: null });
  }
}
