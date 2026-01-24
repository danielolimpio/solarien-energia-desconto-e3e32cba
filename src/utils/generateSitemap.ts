import { brazilianStates } from "@/data/states";
import { citiesByState } from "@/data/cities";

const BASE_URL = "https://mercadolivredeenergia.org";

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

export const getAllSitemapUrls = (): SitemapUrl[] => {
  const today = new Date().toISOString().split("T")[0];
  const urls: SitemapUrl[] = [];

  // Homepage
  urls.push({
    loc: BASE_URL,
    lastmod: today,
    changefreq: "weekly",
    priority: "1.0",
  });

  // Contact page
  urls.push({
    loc: `${BASE_URL}/contato`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.8",
  });

  // Sitemap page
  urls.push({
    loc: `${BASE_URL}/sitemap`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.5",
  });

  // Legal pages
  urls.push({
    loc: `${BASE_URL}/politica-de-privacidade`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.3",
  });

  urls.push({
    loc: `${BASE_URL}/termos-de-uso`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.3",
  });

  urls.push({
    loc: `${BASE_URL}/politica-de-cookies`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.3",
  });

  // State pages
  brazilianStates.forEach((state) => {
    urls.push({
      loc: `${BASE_URL}/${state.slug}`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.9",
    });
  });

  // City pages
  Object.entries(citiesByState).forEach(([stateAbbr, cities]) => {
    cities.forEach((city) => {
      urls.push({
        loc: `${BASE_URL}/${city.slug}`,
        lastmod: today,
        changefreq: "monthly",
        priority: city.isCapital ? "0.8" : "0.7",
      });
    });
  });

  return urls;
};

export const generateSitemapXML = (): string => {
  const urls = getAllSitemapUrls();

  const urlEntries = urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

export const getSitemapStats = () => {
  const urls = getAllSitemapUrls();
  const stateCount = brazilianStates.length;
  const cityCount = Object.values(citiesByState).flat().length;

  return {
    total: urls.length,
    states: stateCount,
    cities: cityCount,
    homepage: 1,
    other: urls.length - stateCount - cityCount - 1,
  };
};
