// Índice de conteúdos otimizados para SEO por estado
// Estrutura modular para facilitar manutenção

export type { StateContent, StateTestimonial, StateFAQ, StateDocument } from "./types";

import { acreContent } from "./AC";
import { alagoasContent } from "./AL";
import { saoPauloContent } from "./SP";
import { StateContent } from "./types";

// Estados com conteúdo otimizado (migração gradual)
export const optimizedStateContents: Record<string, StateContent> = {
  AC: acreContent,
  AL: alagoasContent,
  SP: saoPauloContent,
};

// Re-exporta conteúdos individuais
export { acreContent } from "./AC";
export { alagoasContent } from "./AL";
export { saoPauloContent } from "./SP";
