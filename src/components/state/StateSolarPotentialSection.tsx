import { Zap, TrendingUp, CheckCircle, Clock } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContents/types";

interface StateSolarPotentialSectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateSolarPotentialSection = ({ state, content }: StateSolarPotentialSectionProps) => {
  if (!content.solarPotential) return null;

  // Parse description for bullet points
  const parseDescription = (text: string) => {
    const parts = text.split('\n\n');
    return parts.map((part, index) => {
      if (part.includes('•')) {
        const lines = part.split('\n').filter(l => l.trim());
        const title = lines[0].includes('•') ? null : lines[0];
        const bullets = lines.filter(l => l.includes('•')).map(l => l.replace('•', '').trim());
        return { type: 'bullets', title, bullets, key: index };
      }
      return { type: 'paragraph', content: part, key: index };
    });
  };

  const parsedContent = parseDescription(content.solarPotential.description);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Zap className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">Mercado Livre de Energia</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {content.solarPotential.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Description Card */}
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {parsedContent.map((item) => {
                  if (item.type === 'bullets') {
                    return (
                      <div key={item.key} className="mb-4 last:mb-0">
                        {item.title && (
                          <h4 className="font-display font-semibold text-foreground mb-3 text-base">
                            {item.title}
                          </h4>
                        )}
                        <ul className="space-y-2">
                          {item.bullets?.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-base leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return (
                    <p key={item.key} className="mb-4 last:mb-0 leading-relaxed text-base">
                      {item.content}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-4">
              {/* Savings */}
              <div className="bg-card rounded-xl border border-border/50 p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1 text-base">Economia Garantida</h4>
                  <p className="text-2xl font-bold text-primary">{content.solarPotential.averageIrradiation}</p>
                  <p className="text-base text-muted-foreground">No Mercado Livre de Energia</p>
                </div>
              </div>

              {/* Migration Time */}
              <div className="bg-card rounded-xl border border-border/50 p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1 text-base">Processo Rápido</h4>
                  <p className="text-lg font-semibold text-secondary">{content.solarPotential.idealMonths}</p>
                  <p className="text-base text-muted-foreground">Sem burocracia para sua empresa</p>
                </div>
              </div>

              {/* Combined Savings */}
              <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1 text-base">Economia Total</h4>
                    <p className="text-3xl font-bold">{content.solarPotential.combinedSavings}</p>
                    <p className="text-base text-white/95">Máxima economia com a Solarien Energy</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <WhatsAppButton className="w-full">
                  Consultar Economia no Mercado Livre
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
