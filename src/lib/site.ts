// Central site configuration — single source of truth for SEO + branding.

// Resolve the canonical production URL.
// Set NEXT_PUBLIC_SITE_URL in Vercel to your real domain (e.g. https://libria.cafe).
// Falls back to the Vercel-provided production URL, then localhost for dev.
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Libria Café",
  shortName: "Libria",
  url: resolveSiteUrl(),
  city: "Shiraz",
  // Primary keywords, ordered by importance.
  keywords: [
    "Libria",
    "Libria Café",
    "Libria Cafe Shiraz",
    "Cafe",
    "Café",
    "Shiraz",
    "Shiraz cafe",
    "cafe in Shiraz",
    "coffee shop Shiraz",
    "specialty coffee Shiraz",
    "کافه لیبریا",
    "کافه شیراز",
    "لیبریا",
  ],
  description:
    "Libria is a specialty café in Shiraz serving hand-crafted coffee, fresh pastries, and calm moments. Visit Libria Café in Shiraz for an artisan coffee experience.",
} as const;

export const developer = {
  name: "Ashkan Sadeghi",
  github: "https://github.com/Epic2077",
  portfolio: "https://portfolio-ashkan.vercel.app/",
} as const;
