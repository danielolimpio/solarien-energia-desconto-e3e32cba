// Script to generate sitemap.xml during build
// Run with: node scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

const BASE_URL = "https://solarien-energia-desconto.lovable.app";

// Brazilian states data (same as states.ts)
const brazilianStates = [
  { name: "Acre", abbreviation: "AC", slug: "mercado-livre-de-energia-no-acre", preposition: "no" },
  { name: "Alagoas", abbreviation: "AL", slug: "mercado-livre-de-energia-em-alagoas", preposition: "em" },
  { name: "Amapá", abbreviation: "AP", slug: "mercado-livre-de-energia-no-amapa", preposition: "no" },
  { name: "Amazonas", abbreviation: "AM", slug: "mercado-livre-de-energia-no-amazonas", preposition: "no" },
  { name: "Bahia", abbreviation: "BA", slug: "mercado-livre-de-energia-na-bahia", preposition: "na" },
  { name: "Ceará", abbreviation: "CE", slug: "mercado-livre-de-energia-no-ceara", preposition: "no" },
  { name: "Distrito Federal", abbreviation: "DF", slug: "mercado-livre-de-energia-no-distrito-federal", preposition: "no" },
  { name: "Espírito Santo", abbreviation: "ES", slug: "mercado-livre-de-energia-no-espirito-santo", preposition: "no" },
  { name: "Goiás", abbreviation: "GO", slug: "mercado-livre-de-energia-em-goias", preposition: "em" },
  { name: "Maranhão", abbreviation: "MA", slug: "mercado-livre-de-energia-no-maranhao", preposition: "no" },
  { name: "Mato Grosso", abbreviation: "MT", slug: "mercado-livre-de-energia-no-mato-grosso", preposition: "no" },
  { name: "Mato Grosso do Sul", abbreviation: "MS", slug: "mercado-livre-de-energia-no-mato-grosso-do-sul", preposition: "no" },
  { name: "Minas Gerais", abbreviation: "MG", slug: "mercado-livre-de-energia-em-minas-gerais", preposition: "em" },
  { name: "Pará", abbreviation: "PA", slug: "mercado-livre-de-energia-no-para", preposition: "no" },
  { name: "Paraíba", abbreviation: "PB", slug: "mercado-livre-de-energia-na-paraiba", preposition: "na" },
  { name: "Paraná", abbreviation: "PR", slug: "mercado-livre-de-energia-no-parana", preposition: "no" },
  { name: "Pernambuco", abbreviation: "PE", slug: "mercado-livre-de-energia-em-pernambuco", preposition: "em" },
  { name: "Piauí", abbreviation: "PI", slug: "mercado-livre-de-energia-no-piaui", preposition: "no" },
  { name: "Rio de Janeiro", abbreviation: "RJ", slug: "mercado-livre-de-energia-no-rio-de-janeiro", preposition: "no" },
  { name: "Rio Grande do Norte", abbreviation: "RN", slug: "mercado-livre-de-energia-no-rio-grande-do-norte", preposition: "no" },
  { name: "Rio Grande do Sul", abbreviation: "RS", slug: "mercado-livre-de-energia-no-rio-grande-do-sul", preposition: "no" },
  { name: "Rondônia", abbreviation: "RO", slug: "mercado-livre-de-energia-em-rondonia", preposition: "em" },
  { name: "Roraima", abbreviation: "RR", slug: "mercado-livre-de-energia-em-roraima", preposition: "em" },
  { name: "Santa Catarina", abbreviation: "SC", slug: "mercado-livre-de-energia-em-santa-catarina", preposition: "em" },
  { name: "São Paulo", abbreviation: "SP", slug: "mercado-livre-de-energia-em-sao-paulo", preposition: "em" },
  { name: "Sergipe", abbreviation: "SE", slug: "mercado-livre-de-energia-em-sergipe", preposition: "em" },
  { name: "Tocantins", abbreviation: "TO", slug: "mercado-livre-de-energia-no-tocantins", preposition: "no" },
];

// Helper function to generate city slug
const generateSlug = (cityName, stateAbbr) => {
  return `mercado-livre-de-energia-em-${cityName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")}-${stateAbbr.toLowerCase()}`;
};

// Cities data (simplified version - add all cities)
const citiesByState = {
  AC: [
    { name: "Rio Branco", isCapital: true },
    { name: "Cruzeiro do Sul" },
    { name: "Sena Madureira" },
    { name: "Tarauacá" },
    { name: "Feijó" },
    { name: "Brasiléia" },
    { name: "Senador Guiomard" },
    { name: "Plácido de Castro" },
    { name: "Xapuri" },
    { name: "Epitaciolândia" },
    { name: "Mâncio Lima" },
    { name: "Rodrigues Alves" },
    { name: "Porto Acre" },
    { name: "Bujari" },
    { name: "Acrelândia" },
  ],
  // Note: In production, include all cities from cities.ts
  // This is a simplified version for the script
};

// Read cities from the TypeScript file and parse them
// For now, we'll generate a simpler sitemap

const today = new Date().toISOString().split('T')[0];

function generateSitemapXML() {
  let urls = [];

  // Homepage
  urls.push({
    loc: BASE_URL,
    lastmod: today,
    changefreq: 'weekly',
    priority: '1.0'
  });

  // Sitemap page
  urls.push({
    loc: `${BASE_URL}/sitemap`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.5'
  });

  // State pages
  brazilianStates.forEach(state => {
    urls.push({
      loc: `${BASE_URL}/${state.slug}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9'
    });
  });

  // Generate XML
  const urlEntries = urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Write sitemap.xml to public folder
const sitemapContent = generateSitemapXML();
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemapContent, 'utf8');
console.log(`✅ Sitemap generated at ${outputPath}`);
console.log(`📊 Total URLs: ${sitemapContent.match(/<url>/g)?.length || 0}`);
