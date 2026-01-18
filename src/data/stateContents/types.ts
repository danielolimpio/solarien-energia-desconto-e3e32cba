// Tipos para o conteúdo SEO de cada estado brasileiro - Modelo Otimizado

export interface StateTestimonial {
  name: string;
  role: string;
  city: string;
  content: string;
  savings: string;
  sector?: string;
}

export interface StateFAQ {
  question: string;
  answer: string;
}

export interface StateDocument {
  icon: string;
  title: string;
  description: string;
}

export interface TariffComparison {
  distributor: string;
  distributorTariff: string;
  freeMarketTariff: string;
  savings: string;
  paybackMonths?: number;
}

export interface SolarPotential {
  title: string;
  description: string;
  averageIrradiation: string;
  idealMonths: string;
  combinedSavings: string;
}

export interface StateContent {
  // SEO Meta (optional for backward compatibility)
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  
  // Hero
  h1?: string;
  hook: string;
  heroSubtitle?: string;
  
  // Intro
  introduction: string;
  whatIs?: {
    title: string;
    content: string;
  };
  whoCanMigrate?: {
    title: string;
    requirements: string[];
    note: string;
  };
  
  // How It Works
  howItWorks: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
    migrationTime?: string;
  };
  
  // Benefits
  benefits: {
    title: string;
    description: string;
    items: { title: string; description: string; highlight?: string }[];
  };
  
  // Tariff Comparison (optional)
  tariffComparison?: {
    title: string;
    description: string;
    comparisons: TariffComparison[];
    disclaimer: string;
  };
  
  // Solar Potential (optional)
  solarPotential?: SolarPotential;
  
  // Market Types
  marketTypes: {
    title: string;
    description: string;
    freeMarket: { title: string; features: string[] };
    subscription: { title: string; features: string[] };
  };
  
  zeroCost: {
    title: string;
    description: string;
    items: string[];
  };
  
  coverage: {
    title: string;
    description: string;
    highlights: string[];
  };
  
  opportunity: {
    title: string;
    description: string;
    stats: { value: string; label: string }[];
  };
  
  availability: {
    title: string;
    description: string;
  };
  
  documents: {
    title: string;
    description: string;
    items: StateDocument[];
  };
  
  differentials: {
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  
  whyMigrate: {
    title: string;
    description: string;
    reasons: string[];
  };
  
  testimonials: StateTestimonial[];
  faqs: StateFAQ[];
  
  mapDescription: string;
  regionalContext: string;
  economicProfile: string;
  energyTip: string;
  
  mainCities?: string[];
  
  regulatory?: {
    aneel: string;
    ccee: string;
  };
}
