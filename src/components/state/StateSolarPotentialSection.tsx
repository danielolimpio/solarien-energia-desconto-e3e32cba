import { Sun, Zap, Leaf, TrendingUp } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContents/types";

interface StateSolarPotentialSectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateSolarPotentialSection = ({ state, content }: StateSolarPotentialSectionProps) => {
  if (!content.solarPotential) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
              <Sun className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">Energia Solar + Mercado Livre</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {content.solarPotential.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Description Card */}
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {content.solarPotential.description.split('\n\n').map((paragraph, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    {paragraph.startsWith('**') ? (
                      <h4 className="font-display font-semibold text-foreground mb-2">
                        {paragraph.replace(/\*\*/g, '')}
                      </h4>
                    ) : paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('-') ? (
                      <ul className="space-y-2">
                        {paragraph.split('\n').map((line, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-primary shrink-0 mt-1" />
                            <span>{line.replace(/^[\d\.\-\s]+/, '')}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="leading-relaxed">{paragraph}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-4">
              {/* Irradiation */}
              <div className="bg-card rounded-xl border border-border/50 p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Irradiação Solar Média</h4>
                  <p className="text-2xl font-bold text-secondary">{content.solarPotential.averageIrradiation}</p>
                  <p className="text-sm text-muted-foreground">Potencial excelente para geração fotovoltaica</p>
                </div>
              </div>

              {/* Ideal Months */}
              <div className="bg-card rounded-xl border border-border/50 p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Melhores Meses para Geração</h4>
                  <p className="text-lg font-semibold text-primary">{content.solarPotential.idealMonths}</p>
                  <p className="text-sm text-muted-foreground">Período de maior produtividade solar</p>
                </div>
              </div>

              {/* Combined Savings */}
              <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">Economia Combinada</h4>
                    <p className="text-3xl font-bold">{content.solarPotential.combinedSavings}</p>
                    <p className="text-sm text-white/80">Máxima economia com Solar + Mercado Livre</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <WhatsAppButton className="w-full">
                  Consultar Viabilidade Solar + Mercado Livre
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateSolarPotentialSection;
