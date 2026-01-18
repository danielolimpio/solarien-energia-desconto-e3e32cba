// Tipos para o conteúdo SEO de cada estado brasileiro

export interface StateTestimonial {
  name: string;
  role: string;
  city: string;
  content: string;
  savings: string;
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

export interface StateContent {
  hook: string;
  introduction: string;
  howItWorks: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  benefits: {
    title: string;
    description: string;
    items: { title: string; description: string; highlight?: string }[];
  };
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
}
