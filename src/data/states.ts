export interface StateInfo {
  name: string;
  abbreviation: string;
  slug: string;
  preposition: string; // "em" ou "no"
}

export const brazilianStates: StateInfo[] = [
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

export const getStateBySlug = (slug: string): StateInfo | undefined => {
  return brazilianStates.find((state) => state.slug === slug);
};
