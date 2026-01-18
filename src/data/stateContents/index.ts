// Índice de conteúdos otimizados para SEO por estado
// Estrutura modular para facilitar manutenção

export type { StateContent, StateTestimonial, StateFAQ, StateDocument } from "./types";

import { acreContent } from "./AC";
import { alagoasContent } from "./AL";
import { amapaContent } from "./AP";
import { amazonasContent } from "./AM";
import { bahiaContent } from "./BA";
import { cearaContent } from "./CE";
import { distritoFederalContent } from "./DF";
import { saoPauloContent } from "./SP";
import { StateContent } from "./types";

// Estados com conteúdo otimizado (migração gradual)
export const optimizedStateContents: Record<string, StateContent> = {
  AC: acreContent,
  AL: alagoasContent,
  AP: amapaContent,
  AM: amazonasContent,
  BA: bahiaContent,
  CE: cearaContent,
  DF: distritoFederalContent,
  SP: saoPauloContent,
};

// Re-exporta conteúdos individuais
export { acreContent } from "./AC";
export { alagoasContent } from "./AL";
export { amapaContent } from "./AP";
export { amazonasContent } from "./AM";
export { bahiaContent } from "./BA";
export { cearaContent } from "./CE";
export { distritoFederalContent } from "./DF";
export { saoPauloContent } from "./SP";
