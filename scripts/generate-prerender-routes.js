// Script to generate routes list for prerendering
// Run this to see all routes that will be pre-rendered

const brazilianStates = [
  { slug: "mercado-livre-de-energia-no-acre" },
  { slug: "mercado-livre-de-energia-em-alagoas" },
  { slug: "mercado-livre-de-energia-no-amapa" },
  { slug: "mercado-livre-de-energia-no-amazonas" },
  { slug: "mercado-livre-de-energia-na-bahia" },
  { slug: "mercado-livre-de-energia-no-ceara" },
  { slug: "mercado-livre-de-energia-no-distrito-federal" },
  { slug: "mercado-livre-de-energia-no-espirito-santo" },
  { slug: "mercado-livre-de-energia-em-goias" },
  { slug: "mercado-livre-de-energia-no-maranhao" },
  { slug: "mercado-livre-de-energia-no-mato-grosso" },
  { slug: "mercado-livre-de-energia-no-mato-grosso-do-sul" },
  { slug: "mercado-livre-de-energia-em-minas-gerais" },
  { slug: "mercado-livre-de-energia-no-para" },
  { slug: "mercado-livre-de-energia-na-paraiba" },
  { slug: "mercado-livre-de-energia-no-parana" },
  { slug: "mercado-livre-de-energia-em-pernambuco" },
  { slug: "mercado-livre-de-energia-no-piaui" },
  { slug: "mercado-livre-de-energia-no-rio-de-janeiro" },
  { slug: "mercado-livre-de-energia-no-rio-grande-do-norte" },
  { slug: "mercado-livre-de-energia-no-rio-grande-do-sul" },
  { slug: "mercado-livre-de-energia-em-rondonia" },
  { slug: "mercado-livre-de-energia-em-roraima" },
  { slug: "mercado-livre-de-energia-em-santa-catarina" },
  { slug: "mercado-livre-de-energia-em-sao-paulo" },
  { slug: "mercado-livre-de-energia-em-sergipe" },
  { slug: "mercado-livre-de-energia-no-tocantins" },
];

// This would need to import from cities.ts - for now just count
console.log("Static routes: 5");
console.log("State routes:", brazilianStates.length);
console.log("Total estimated: 516+ pages");
