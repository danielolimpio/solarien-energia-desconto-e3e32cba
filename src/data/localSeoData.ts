// Local SEO data for unique content per city/state
// This file contains regional energy data, testimonials, and nearby cities

export interface EnergyDistributor {
  name: string;
  states: string[];
}

export interface LocalTestimonial {
  name: string;
  role: string;
  location: string;
  testimonial: string;
  savings: string;
  avatar?: string;
}

export interface CityFAQ {
  question: string;
  answer: string;
}

// Brazilian Energy Distributors by region
export const energyDistributors: EnergyDistributor[] = [
  { name: "CPFL Energia", states: ["SP"] },
  { name: "Enel", states: ["SP", "RJ", "CE", "GO"] },
  { name: "Cemig", states: ["MG"] },
  { name: "Copel", states: ["PR"] },
  { name: "CEEE", states: ["RS"] },
  { name: "RGE", states: ["RS"] },
  { name: "Celesc", states: ["SC"] },
  { name: "Light", states: ["RJ"] },
  { name: "Coelba", states: ["BA"] },
  { name: "Celpe", states: ["PE"] },
  { name: "Cosern", states: ["RN"] },
  { name: "Energisa", states: ["MT", "MS", "TO", "SE", "PB", "MG", "SP", "RJ", "AC", "RO"] },
  { name: "Equatorial", states: ["MA", "PA", "PI", "AL", "AM", "GO", "RS"] },
  { name: "EDP", states: ["SP", "ES"] },
  { name: "Elektro", states: ["SP", "MS"] },
  { name: "CEMAR", states: ["MA"] },
  { name: "Celpa", states: ["PA"] },
  { name: "Amazonas Energia", states: ["AM"] },
  { name: "Eletrobrás", states: ["AC", "RR", "AP", "PI", "AL"] },
  { name: "CEB", states: ["DF"] },
  { name: "Celg", states: ["GO"] },
];

// Get distributor(s) for a state
export const getDistributorsForState = (stateAbbr: string): string[] => {
  return energyDistributors
    .filter(d => d.states.includes(stateAbbr))
    .map(d => d.name);
};

// Average energy tariffs by region (R$/kWh) - approximate values for content
export const regionalTariffs: Record<string, { residential: number; commercial: number; industrial: number }> = {
  AC: { residential: 0.89, commercial: 0.78, industrial: 0.62 },
  AL: { residential: 0.82, commercial: 0.71, industrial: 0.58 },
  AP: { residential: 0.76, commercial: 0.68, industrial: 0.55 },
  AM: { residential: 0.88, commercial: 0.76, industrial: 0.61 },
  BA: { residential: 0.79, commercial: 0.69, industrial: 0.56 },
  CE: { residential: 0.81, commercial: 0.70, industrial: 0.57 },
  DF: { residential: 0.78, commercial: 0.68, industrial: 0.55 },
  ES: { residential: 0.76, commercial: 0.66, industrial: 0.54 },
  GO: { residential: 0.77, commercial: 0.67, industrial: 0.55 },
  MA: { residential: 0.84, commercial: 0.73, industrial: 0.59 },
  MT: { residential: 0.82, commercial: 0.71, industrial: 0.58 },
  MS: { residential: 0.80, commercial: 0.70, industrial: 0.57 },
  MG: { residential: 0.85, commercial: 0.74, industrial: 0.60 },
  PA: { residential: 0.86, commercial: 0.75, industrial: 0.61 },
  PB: { residential: 0.83, commercial: 0.72, industrial: 0.59 },
  PR: { residential: 0.72, commercial: 0.63, industrial: 0.51 },
  PE: { residential: 0.81, commercial: 0.71, industrial: 0.58 },
  PI: { residential: 0.85, commercial: 0.74, industrial: 0.60 },
  RJ: { residential: 0.92, commercial: 0.80, industrial: 0.65 },
  RN: { residential: 0.80, commercial: 0.70, industrial: 0.57 },
  RS: { residential: 0.78, commercial: 0.68, industrial: 0.55 },
  RO: { residential: 0.87, commercial: 0.76, industrial: 0.62 },
  RR: { residential: 0.91, commercial: 0.79, industrial: 0.64 },
  SC: { residential: 0.71, commercial: 0.62, industrial: 0.50 },
  SP: { residential: 0.88, commercial: 0.77, industrial: 0.62 },
  SE: { residential: 0.79, commercial: 0.69, industrial: 0.56 },
  TO: { residential: 0.83, commercial: 0.72, industrial: 0.59 },
};

// Consumer profiles by region type
export const getConsumerProfile = (stateAbbr: string): { residential: string; commercial: string; industrial: string } => {
  const industrialStates = ["SP", "MG", "PR", "RS", "SC", "RJ", "BA", "GO"];
  const agriculturalStates = ["MT", "MS", "GO", "PR", "RS", "MG", "BA", "TO", "PI", "MA"];
  const commercialStates = ["SP", "RJ", "DF", "MG", "BA", "CE", "PE"];

  const isIndustrial = industrialStates.includes(stateAbbr);
  const isAgricultural = agriculturalStates.includes(stateAbbr);
  const isCommercial = commercialStates.includes(stateAbbr);

  return {
    residential: "Alto consumo em climatização e eletrodomésticos, especialmente nos meses de verão",
    commercial: isCommercial 
      ? "Forte presença de shoppings, supermercados e centros comerciais com alta demanda energética"
      : "Comércio local com potencial de economia em iluminação e refrigeração",
    industrial: isIndustrial
      ? "Polo industrial com alta demanda de energia para produção e manufatura"
      : isAgricultural
        ? "Forte presença do agronegócio com demanda em irrigação e processamento"
        : "Indústrias locais com oportunidades de redução de custos operacionais",
  };
};

// Nearby cities mapping for internal linking
export const nearbyCities: Record<string, string[]> = {
  // São Paulo
  "mercado-livre-de-energia-em-sao-paulo-sp": ["Guarulhos", "Osasco", "Santo André", "São Bernardo do Campo", "Diadema"],
  "mercado-livre-de-energia-em-campinas-sp": ["Jundiaí", "Limeira", "Americana", "Hortolândia", "Sumaré"],
  "mercado-livre-de-energia-em-guarulhos-sp": ["São Paulo", "Arujá", "Itaquaquecetuba", "Mairiporã", "Santa Isabel"],
  "mercado-livre-de-energia-em-santo-andre-sp": ["São Bernardo do Campo", "São Caetano do Sul", "Mauá", "Ribeirão Pires", "Diadema"],
  "mercado-livre-de-energia-em-sao-bernardo-do-campo-sp": ["São Paulo", "Santo André", "Diadema", "São Caetano do Sul", "Mauá"],
  "mercado-livre-de-energia-em-osasco-sp": ["São Paulo", "Barueri", "Carapicuíba", "Cotia", "Taboão da Serra"],
  "mercado-livre-de-energia-em-ribeirao-preto-sp": ["Franca", "Sertãozinho", "Jardinópolis", "Cravinhos", "Brodowski"],
  "mercado-livre-de-energia-em-sorocaba-sp": ["Votorantim", "Itu", "Salto", "Indaiatuba", "Iperó"],
  "mercado-livre-de-energia-em-santos-sp": ["São Vicente", "Guarujá", "Praia Grande", "Cubatão", "Mongaguá"],
  "mercado-livre-de-energia-em-sao-jose-dos-campos-sp": ["Jacareí", "Caçapava", "Taubaté", "Pindamonhangaba", "Caraguatatuba"],
  
  // Rio de Janeiro
  "mercado-livre-de-energia-em-rio-de-janeiro-rj": ["Niterói", "Duque de Caxias", "Nova Iguaçu", "São Gonçalo", "Belford Roxo"],
  "mercado-livre-de-energia-em-niteroi-rj": ["Rio de Janeiro", "São Gonçalo", "Maricá", "Itaboraí", "Tanguá"],
  "mercado-livre-de-energia-em-duque-de-caxias-rj": ["Rio de Janeiro", "Nova Iguaçu", "Belford Roxo", "São João de Meriti", "Magé"],
  "mercado-livre-de-energia-em-nova-iguacu-rj": ["Rio de Janeiro", "Duque de Caxias", "Belford Roxo", "Mesquita", "Nilópolis"],
  
  // Minas Gerais
  "mercado-livre-de-energia-em-belo-horizonte-mg": ["Contagem", "Betim", "Ribeirão das Neves", "Santa Luzia", "Ibirité"],
  "mercado-livre-de-energia-em-uberlandia-mg": ["Uberaba", "Araguari", "Ituiutaba", "Monte Alegre de Minas", "Prata"],
  "mercado-livre-de-energia-em-contagem-mg": ["Belo Horizonte", "Betim", "Ibirité", "Ribeirão das Neves", "Esmeraldas"],
  "mercado-livre-de-energia-em-juiz-de-fora-mg": ["Lima Duarte", "Santos Dumont", "Matias Barbosa", "Ewbank da Câmara", "Benfica"],
  
  // Paraná
  "mercado-livre-de-energia-em-curitiba-pr": ["São José dos Pinhais", "Colombo", "Araucária", "Pinhais", "Campo Largo"],
  "mercado-livre-de-energia-em-londrina-pr": ["Cambé", "Ibiporã", "Rolândia", "Tamarana", "Jataizinho"],
  "mercado-livre-de-energia-em-maringa-pr": ["Sarandi", "Paiçandu", "Mandaguari", "Mandaguaçu", "Marialva"],
  "mercado-livre-de-energia-em-ponta-grossa-pr": ["Castro", "Carambeí", "Palmeira", "Tibagi", "Telêmaco Borba"],
  
  // Rio Grande do Sul
  "mercado-livre-de-energia-em-porto-alegre-rs": ["Canoas", "Gravataí", "Viamão", "Alvorada", "Cachoeirinha"],
  "mercado-livre-de-energia-em-caxias-do-sul-rs": ["Farroupilha", "Bento Gonçalves", "Flores da Cunha", "São Marcos", "Garibaldi"],
  "mercado-livre-de-energia-em-pelotas-rs": ["Rio Grande", "São Lourenço do Sul", "Capão do Leão", "Morro Redondo", "Turuçu"],
  
  // Santa Catarina
  "mercado-livre-de-energia-em-florianopolis-sc": ["São José", "Palhoça", "Biguaçu", "Santo Amaro da Imperatriz", "Governador Celso Ramos"],
  "mercado-livre-de-energia-em-joinville-sc": ["Araquari", "São Francisco do Sul", "Guaramirim", "Barra Velha", "Schroeder"],
  "mercado-livre-de-energia-em-blumenau-sc": ["Gaspar", "Indaial", "Timbó", "Pomerode", "Ilhota"],
  
  // Bahia
  "mercado-livre-de-energia-em-salvador-ba": ["Lauro de Freitas", "Camaçari", "Simões Filho", "Candeias", "Dias d'Ávila"],
  "mercado-livre-de-energia-em-feira-de-santana-ba": ["São Gonçalo dos Campos", "Conceição do Jacuípe", "Amélia Rodrigues", "Coração de Maria", "Tanquinho"],
  
  // Goiás
  "mercado-livre-de-energia-em-goiania-go": ["Aparecida de Goiânia", "Trindade", "Senador Canedo", "Goianira", "Nerópolis"],
  "mercado-livre-de-energia-em-anapolis-go": ["Abadiânia", "Alexânia", "Campo Limpo de Goiás", "Cocalzinho de Goiás", "Silvânia"],
  
  // Distrito Federal
  "mercado-livre-de-energia-em-brasilia-df": ["Taguatinga", "Ceilândia", "Samambaia", "Águas Claras", "Gama"],
  
  // Ceará
  "mercado-livre-de-energia-em-fortaleza-ce": ["Caucaia", "Maracanaú", "Maranguape", "Pacatuba", "Eusébio"],
  
  // Pernambuco
  "mercado-livre-de-energia-em-recife-pe": ["Jaboatão dos Guararapes", "Olinda", "Paulista", "Camaragibe", "Cabo de Santo Agostinho"],
  
  // Amazonas
  "mercado-livre-de-energia-em-manaus-am": ["Iranduba", "Rio Preto da Eva", "Presidente Figueiredo", "Itacoatiara", "Manacapuru"],
  
  // Pará
  "mercado-livre-de-energia-em-belem-pa": ["Ananindeua", "Marituba", "Benevides", "Santa Bárbara do Pará", "Santa Isabel do Pará"],
};

// Get nearby cities for a given city slug
export const getNearbyCities = (citySlug: string): string[] => {
  return nearbyCities[citySlug] || [];
};

// Generate localized testimonials
export const generateTestimonials = (cityName: string, stateAbbr: string): LocalTestimonial[] => {
  const firstNames = ["Carlos", "Maria", "João", "Ana", "Pedro", "Fernanda", "Roberto", "Juliana", "Marcos", "Patrícia"];
  const lastInitials = ["S.", "M.", "O.", "L.", "C.", "R.", "F.", "A.", "P.", "T."];
  const roles = [
    "Empresário",
    "Comerciante",
    "Gerente Industrial",
    "Proprietário de Restaurante",
    "Administrador",
    "Síndico",
    "Dono de Supermercado",
    "Gestor de Condomínio",
    "Diretor de Fábrica",
    "Proprietário de Clínica"
  ];
  
  const testimonials = [
    `A migração para o Mercado Livre de Energia foi a melhor decisão que tomamos. Nossa empresa em ${cityName} economiza muito todo mês.`,
    `Não imaginava que era possível reduzir tanto a conta de luz. A Solarien Energy nos ajudou em todo o processo aqui em ${cityName}.`,
    `Depois de 6 meses no Mercado Livre, já economizamos o suficiente para reinvestir no negócio. Recomendo para todos em ${cityName}.`,
    `O processo foi muito mais simples do que eu esperava. A equipe da Solarien é muito profissional e nos deu todo o suporte.`,
    `Além da economia, ficamos muito satisfeitos por usar energia 100% renovável. É bom para o bolso e para o planeta.`,
  ];

  const savingsValues = ["R$850/mês", "R$1.200/mês", "R$2.300/mês", "R$680/mês", "R$3.500/mês"];

  return testimonials.map((testimonial, index) => ({
    name: `${firstNames[index]} ${lastInitials[index]}`,
    role: roles[index],
    location: `${cityName} - ${stateAbbr}`,
    testimonial,
    savings: savingsValues[index],
  }));
};

// Generate localized FAQs
export const generateLocalFAQs = (cityName: string, stateAbbr: string, stateName: string): CityFAQ[] => {
  const distributors = getDistributorsForState(stateAbbr);
  const distributorNames = distributors.length > 0 ? distributors.join(", ") : "sua distribuidora local";
  const tariffs = regionalTariffs[stateAbbr] || regionalTariffs["SP"];

  return [
    {
      question: `Como migrar para o Mercado Livre de Energia em ${cityName}?`,
      answer: `Para migrar em ${cityName}, basta entrar em contato com a Solarien Energy. Analisamos sua conta de luz atual (${distributorNames}), calculamos sua economia potencial e cuidamos de toda a burocracia. O processo é 100% digital e você começa a economizar em poucas semanas.`,
    },
    {
      question: `Qual a economia média com o Mercado Livre de Energia em ${cityName}?`,
      answer: `Consumidores em ${cityName} podem economizar entre 15% e 45% na conta de luz. A economia exata depende do seu perfil de consumo. Com tarifas médias de R$${tariffs.commercial.toFixed(2)}/kWh para comércios na região, a economia pode ser significativa.`,
    },
    {
      question: `O Mercado Livre de Energia está disponível para residências em ${cityName}?`,
      answer: `Sim! Desde 2024, consumidores residenciais de ${cityName} também podem aderir ao Mercado Livre de Energia. A Solarien Energy oferece condições especiais para casas e apartamentos, com economia garantida e energia 100% renovável.`,
    },
    {
      question: `Quem é a distribuidora de energia em ${cityName}?`,
      answer: `${cityName} é atendida pela ${distributorNames}. No Mercado Livre, você continua recebendo a energia pela mesma rede de distribuição, mas compra de fornecedores que oferecem melhores preços e energia limpa.`,
    },
    {
      question: `É seguro migrar para o Mercado Livre de Energia em ${stateName}?`,
      answer: `Absolutamente sim! O Mercado Livre de Energia é regulamentado pela ANEEL e opera no Brasil há mais de 20 anos. A Solarien Energy é credenciada e oferece total segurança jurídica e operacional para consumidores de todo o estado.`,
    },
    {
      question: `Quanto tempo leva para começar a economizar em ${cityName}?`,
      answer: `O processo de migração em ${cityName} leva em média 30 a 60 dias. Após a migração, você já começa a ver a economia na primeira fatura. A Solarien Energy acompanha todo o processo para garantir uma transição tranquila.`,
    },
    {
      question: `Empresas de todos os tamanhos podem participar em ${cityName}?`,
      answer: `Sim! Desde pequenos comércios até grandes indústrias em ${cityName} podem migrar para o Mercado Livre. Não há mais exigência de demanda mínima, o que democratiza o acesso à energia mais barata para todos.`,
    },
    {
      question: `O que acontece se eu mudar de endereço dentro de ${stateName}?`,
      answer: `Seu contrato de energia no Mercado Livre pode ser transferido para o novo endereço dentro de ${stateName}. A Solarien Energy cuida de toda a documentação necessária sem custos adicionais.`,
    },
  ];
};

// Generate unique content about energy situation in a city
export const generateEnergySituation = (
  cityName: string,
  stateAbbr: string,
  stateName: string,
  isCapital: boolean
): string => {
  const distributors = getDistributorsForState(stateAbbr);
  const distributorName = distributors[0] || "a distribuidora local";
  const tariffs = regionalTariffs[stateAbbr] || regionalTariffs["SP"];
  const profile = getConsumerProfile(stateAbbr);

  if (isCapital) {
    return `Como capital de ${stateName}, ${cityName} concentra grande parte do consumo energético do estado. A cidade é atendida pela ${distributorName}, com tarifas médias de R$${tariffs.residential.toFixed(2)}/kWh para residências e R$${tariffs.commercial.toFixed(2)}/kWh para estabelecimentos comerciais. ${profile.commercial}. ${profile.industrial}. O Mercado Livre de Energia surge como solução estratégica para empresas e residências que buscam reduzir custos operacionais e aumentar competitividade.`;
  }

  return `${cityName}, município importante de ${stateName}, apresenta um perfil energético diversificado. Atendida pela ${distributorName}, a cidade possui tarifas médias de R$${tariffs.residential.toFixed(2)}/kWh para consumidores residenciais. ${profile.commercial}. O setor industrial local mostra ${profile.industrial.toLowerCase()}. O Mercado Livre de Energia oferece uma oportunidade única para consumidores locais reduzirem seus gastos com energia elétrica em até 45%.`;
};

// Generate savings case study content
export const generateSavingsCase = (cityName: string, stateAbbr: string): { 
  residential: { before: number; after: number; savings: number };
  commercial: { before: number; after: number; savings: number };
  industrial: { before: number; after: number; savings: number };
} => {
  const tariffs = regionalTariffs[stateAbbr] || regionalTariffs["SP"];
  
  // Base consumption values (kWh/month)
  const residentialConsumption = 450;
  const commercialConsumption = 3500;
  const industrialConsumption = 25000;

  // Calculate costs
  const calculateSavings = (consumption: number, tariff: number, savingsPercent: number) => {
    const before = Math.round(consumption * tariff);
    const after = Math.round(before * (1 - savingsPercent));
    return { before, after, savings: before - after };
  };

  return {
    residential: calculateSavings(residentialConsumption, tariffs.residential, 0.25),
    commercial: calculateSavings(commercialConsumption, tariffs.commercial, 0.35),
    industrial: calculateSavings(industrialConsumption, tariffs.industrial, 0.42),
  };
};
