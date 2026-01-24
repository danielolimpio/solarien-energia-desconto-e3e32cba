/**
 * Script to generate complete list of all routes for prerendering
 * Run: node scripts/generate-all-routes.js
 * 
 * This generates a list of all ~516 routes that need to be pre-rendered
 */

const BASE_URL = "https://mercadolivredeenergia.org";

// Static pages
const staticRoutes = [
  "/",
  "/sitemap",
  "/politica-de-privacidade",
  "/termos-de-uso",
  "/politica-de-cookies",
];

// State slugs (27 states)
const stateRoutes = [
  "/mercado-livre-de-energia-no-acre",
  "/mercado-livre-de-energia-em-alagoas",
  "/mercado-livre-de-energia-no-amapa",
  "/mercado-livre-de-energia-no-amazonas",
  "/mercado-livre-de-energia-na-bahia",
  "/mercado-livre-de-energia-no-ceara",
  "/mercado-livre-de-energia-no-distrito-federal",
  "/mercado-livre-de-energia-no-espirito-santo",
  "/mercado-livre-de-energia-em-goias",
  "/mercado-livre-de-energia-no-maranhao",
  "/mercado-livre-de-energia-no-mato-grosso",
  "/mercado-livre-de-energia-no-mato-grosso-do-sul",
  "/mercado-livre-de-energia-em-minas-gerais",
  "/mercado-livre-de-energia-no-para",
  "/mercado-livre-de-energia-na-paraiba",
  "/mercado-livre-de-energia-no-parana",
  "/mercado-livre-de-energia-em-pernambuco",
  "/mercado-livre-de-energia-no-piaui",
  "/mercado-livre-de-energia-no-rio-de-janeiro",
  "/mercado-livre-de-energia-no-rio-grande-do-norte",
  "/mercado-livre-de-energia-no-rio-grande-do-sul",
  "/mercado-livre-de-energia-em-rondonia",
  "/mercado-livre-de-energia-em-roraima",
  "/mercado-livre-de-energia-em-santa-catarina",
  "/mercado-livre-de-energia-em-sao-paulo",
  "/mercado-livre-de-energia-em-sergipe",
  "/mercado-livre-de-energia-no-tocantins",
];

// All city routes by state
// This is a subset - the full list would come from cities.ts
const citiesByState = {
  AC: ["rio-branco", "cruzeiro-do-sul", "sena-madureira", "tarauaca", "feijo", "brasileia", "senador-guiomard", "placido-de-castro", "xapuri", "epitaciolandia", "mancio-lima", "rodrigues-alves", "porto-acre", "bujari", "acrelandia"],
  AL: ["maceio", "arapiraca", "rio-largo", "palmeira-dos-indios", "uniao-dos-palmares", "penedo", "sao-miguel-dos-campos", "coruripe", "delmiro-gouveia", "santana-do-ipanema", "marechal-deodoro", "campo-alegre", "teotonio-vilela", "murici", "atalaia"],
  AP: ["macapa", "santana", "laranjal-do-jari", "oiapoque", "mazagao", "porto-grande", "tartarugalzinho", "pedra-branca-do-amapari", "vitoria-do-jari", "calcoene", "amapa", "pracuuba", "ferreira-gomes", "cutias", "itaubal"],
  AM: ["manaus", "parintins", "itacoatiara", "manacapuru", "coari", "tefe", "tabatinga", "maues", "iranduba", "humaitá", "sao-gabriel-da-cachoeira", "manicore", "eirunepe", "boca-do-acre", "labrea"],
  BA: ["salvador", "feira-de-santana", "vitoria-da-conquista", "camacari", "itabuna", "juazeiro", "ilheus", "lauro-de-freitas", "jequie", "teixeira-de-freitas", "barreiras", "alagoinhas", "porto-seguro", "simoes-filho", "paulo-afonso"],
  CE: ["fortaleza", "caucaia", "juazeiro-do-norte", "maracanau", "sobral", "crato", "itapipoca", "maranguape", "iguatu", "quixada", "pacatuba", "aquiraz", "caninde", "tiangua", "cascavel"],
  DF: ["brasilia"],
  ES: ["vitoria", "vila-velha", "serra", "cariacica", "linhares", "cachoeiro-de-itapemirim", "colatina", "guarapari", "aracruz", "sao-mateus", "viana", "nova-venecia", "barra-de-sao-francisco", "marataizes", "afonso-claudio"],
  GO: ["goiania", "aparecida-de-goiania", "anapolis", "rio-verde", "luziania", "aguas-lindas-de-goias", "valparaiso-de-goias", "trindade", "formosa", "novo-gama", "itumbiara", "senador-canedo", "catalao", "jatai", "planaltina"],
  MA: ["sao-luis", "imperatriz", "sao-jose-de-ribamar", "timon", "caxias", "codó", "paco-do-lumiar", "acailandia", "bacabal", "balsas", "santa-ines", "barra-do-corda", "chapadinha", "buriticupu", "itapecuru-mirim"],
  MT: ["cuiaba", "varzea-grande", "rondonopolis", "sinop", "tangara-da-serra", "caceres", "sorriso", "lucas-do-rio-verde", "primavera-do-leste", "barra-do-garcas", "alta-floresta", "pontes-e-lacerda", "campo-novo-do-parecis", "juina", "colider"],
  MS: ["campo-grande", "dourados", "tres-lagoas", "corumba", "ponta-pora", "naviraí", "nova-andradina", "aquidauana", "sidrolandia", "paranaiba", "maracaju", "coxim", "amambai", "rio-brilhante", "cassilandia"],
  MG: ["belo-horizonte", "uberlandia", "contagem", "juiz-de-fora", "betim", "montes-claros", "ribeirão-das-neves", "uberaba", "governador-valadares", "ipatinga", "sete-lagoas", "divinópolis", "santa-luzia", "ibirité", "pocos-de-caldas"],
  PA: ["belem", "ananindeua", "santarem", "maraba", "castanhal", "parauapebas", "itaituba", "cameta", "braganca", "abaetetuba", "marituba", "altamira", "barcarena", "tucurui", "breves"],
  PB: ["joao-pessoa", "campina-grande", "santa-rita", "patos", "bayeux", "sousa", "cabedelo", "cajazeiras", "guarabira", "sapé", "mamanguape", "pombal", "esperanca", "itabaiana", "queimadas"],
  PR: ["curitiba", "londrina", "maringa", "ponta-grossa", "cascavel", "sao-jose-dos-pinhais", "foz-do-iguacu", "colombo", "guarapuava", "paranagua", "araucaria", "toledo", "campo-largo", "apucarana", "pinhais"],
  PE: ["recife", "jaboatao-dos-guararapes", "olinda", "caruaru", "paulista", "petrolina", "cabo-de-santo-agostinho", "camaragibe", "garanhuns", "vitoria-de-santo-antao", "igarassu", "sao-lourenco-da-mata", "abreu-e-lima", "santa-cruz-do-capibaribe", "ipojuca"],
  PI: ["teresina", "parnaiba", "picos", "piripiri", "floriano", "campo-maior", "barras", "pedro-ii", "uniao", "altos", "jose-de-freitas", "oeiras", "esperantina", "luzilândia", "agua-branca"],
  RJ: ["rio-de-janeiro", "sao-goncalo", "duque-de-caxias", "nova-iguacu", "niteroi", "campos-dos-goytacazes", "belford-roxo", "sao-joao-de-meriti", "petrópolis", "volta-redonda", "macaé", "magé", "itaborai", "cabo-frio", "angra-dos-reis"],
  RN: ["natal", "mossoro", "parnamirim", "sao-goncalo-do-amarante", "macaiba", "ceara-mirim", "caico", "açu", "currais-novos", "sao-jose-de-mipibu", "nova-cruz", "joao-camara", "santa-cruz", "touros", "apodi"],
  RS: ["porto-alegre", "caxias-do-sul", "pelotas", "canoas", "santa-maria", "gravatai", "viamao", "novo-hamburgo", "sao-leopoldo", "rio-grande", "alvorada", "passo-fundo", "sapucaia-do-sul", "uruguaiana", "santa-cruz-do-sul"],
  RO: ["porto-velho", "ji-parana", "ariquemes", "vilhena", "cacoal", "rolim-de-moura", "jaru", "guajara-mirim", "ouro-preto-do-oeste", "buritis", "pimenta-bueno", "espigao-doeste", "alta-floresta-doeste", "nova-mamore", "colorado-do-oeste"],
  RR: ["boa-vista", "rorainopolis", "caracarai", "alto-alegre", "mucajai", "canta", "pacaraima", "bonfim", "sao-joao-da-baliza", "iracema", "uiramuta", "normandia", "amajari", "caroebe", "sao-luiz"],
  SC: ["florianopolis", "joinville", "blumenau", "sao-jose", "chapeco", "itajai", "criciuma", "jaragua-do-sul", "lages", "palhoca", "balneario-camboriu", "brusque", "tubarao", "sao-bento-do-sul", "cacador"],
  SP: ["sao-paulo", "guarulhos", "campinas", "sao-bernardo-do-campo", "santo-andre", "osasco", "ribeirao-preto", "sorocaba", "maua", "sao-jose-dos-campos", "mogi-das-cruzes", "santos", "diadema", "jundiai", "piracicaba"],
  SE: ["aracaju", "nossa-senhora-do-socorro", "lagarto", "itabaiana", "sao-cristovao", "estancia", "tobias-barreto", "itabaianinha", "capela", "simao-dias", "nossa-senhora-da-gloria", "propria", "campo-do-brito", "carira", "boquim"],
  TO: ["palmas", "araguaina", "gurupi", "porto-nacional", "paraiso-do-tocantins", "colinas-do-tocantins", "guarai", "dianopolis", "formoso-do-araguaia", "miracema-do-tocantins", "tocantinopolis", "araguatins", "pedro-afonso", "augustinopolis", "xambioá"],
};

// Generate city routes
function generateCityRoutes() {
  const routes = [];
  for (const [stateAbbr, cities] of Object.entries(citiesByState)) {
    for (const city of cities) {
      routes.push(`/mercado-livre-de-energia-em-${city}-${stateAbbr.toLowerCase()}`);
    }
  }
  return routes;
}

const cityRoutes = generateCityRoutes();
const allRoutes = [...staticRoutes, ...stateRoutes, ...cityRoutes];

console.log("=".repeat(60));
console.log("COMPLETE ROUTE LIST FOR PRERENDERING");
console.log("=".repeat(60));
console.log(`\nStatic pages: ${staticRoutes.length}`);
console.log(`State pages: ${stateRoutes.length}`);
console.log(`City pages: ${cityRoutes.length}`);
console.log(`\nTOTAL ROUTES: ${allRoutes.length}`);
console.log("=".repeat(60));

// Output all routes
console.log("\n--- ALL ROUTES ---\n");
allRoutes.forEach((route, i) => {
  console.log(`${i + 1}. ${BASE_URL}${route}`);
});

// Export for use in other scripts
module.exports = {
  staticRoutes,
  stateRoutes,
  cityRoutes,
  allRoutes,
  BASE_URL,
};
