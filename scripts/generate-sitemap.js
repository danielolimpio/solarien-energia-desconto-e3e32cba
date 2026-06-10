// Generates public/sitemap.xml from real static HTML pages + SPA routes.
// Run with: node scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path'; import { fileURLToPath } from 'url'; const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://mercadolivredeenergia.org';
const today = new Date().toISOString().split('T')[0];

const publicDir = path.resolve(__dirname, '..', 'public');

// State slugs (SPA routes rendered by React Router on the org domain)
const stateSlugs = [
  'mercado-livre-de-energia-no-acre',
  'mercado-livre-de-energia-em-alagoas',
  'mercado-livre-de-energia-no-amapa',
  'mercado-livre-de-energia-no-amazonas',
  'mercado-livre-de-energia-na-bahia',
  'mercado-livre-de-energia-no-ceara',
  'mercado-livre-de-energia-no-distrito-federal',
  'mercado-livre-de-energia-no-espirito-santo',
  'mercado-livre-de-energia-em-goias',
  'mercado-livre-de-energia-no-maranhao',
  'mercado-livre-de-energia-no-mato-grosso',
  'mercado-livre-de-energia-no-mato-grosso-do-sul',
  'mercado-livre-de-energia-em-minas-gerais',
  'mercado-livre-de-energia-no-para',
  'mercado-livre-de-energia-na-paraiba',
  'mercado-livre-de-energia-no-parana',
  'mercado-livre-de-energia-em-pernambuco',
  'mercado-livre-de-energia-no-piaui',
  'mercado-livre-de-energia-no-rio-de-janeiro',
  'mercado-livre-de-energia-no-rio-grande-do-norte',
  'mercado-livre-de-energia-no-rio-grande-do-sul',
  'mercado-livre-de-energia-em-rondonia',
  'mercado-livre-de-energia-em-roraima',
  'mercado-livre-de-energia-em-santa-catarina',
  'mercado-livre-de-energia-em-sao-paulo',
  'mercado-livre-de-energia-em-sergipe',
  'mercado-livre-de-energia-no-tocantins',
];

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/contato', changefreq: 'monthly', priority: '0.8' },
  { path: '/sitemap', changefreq: 'monthly', priority: '0.5' },
  { path: '/politica-de-privacidade', changefreq: 'yearly', priority: '0.3' },
  { path: '/termos-de-uso', changefreq: 'yearly', priority: '0.3' },
  { path: '/politica-de-cookies', changefreq: 'yearly', priority: '0.3' },
];

// Discover city pages by scanning the static HTML files in /public
const allHtml = fs
  .readdirSync(publicDir)
  .filter((f) => f.endsWith('.html'))
  .map((f) => f.replace(/\.html$/, ''));

const citySlugs = allHtml
  .filter((slug) => slug.startsWith('mercado-livre-de-energia-em-'))
  // exclude state slugs that share the prefix
  .filter((slug) => !stateSlugs.includes(slug))
  .sort();

const urls = [];

staticRoutes.forEach((r) =>
  urls.push({ loc: BASE_URL + (r.path === '/' ? '' : r.path), lastmod: today, changefreq: r.changefreq, priority: r.priority })
);

stateSlugs.forEach((slug) =>
  urls.push({ loc: `${BASE_URL}/${slug}`, lastmod: today, changefreq: 'weekly', priority: '0.9' })
);

citySlugs.forEach((slug) =>
  urls.push({ loc: `${BASE_URL}/${slug}`, lastmod: today, changefreq: 'weekly', priority: '0.8' })
);

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join('\n') +
  `\n</urlset>\n`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
console.log(`sitemap.xml written: ${urls.length} URLs (${citySlugs.length} cities, ${stateSlugs.length} states, ${staticRoutes.length} static).`);
