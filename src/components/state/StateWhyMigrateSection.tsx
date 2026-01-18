import { CheckCircle2, ArrowRight, Sparkles, Target } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";

interface StateWhyMigrateSectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateWhyMigrateSection = ({ state, content }: StateWhyMigrateSectionProps) => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Target className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">Por que migrar?</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {content.whyMigrate.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {content.whyMigrate.description}
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {content.whyMigrate.reasons.map((reason, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium pt-1">{reason}</span>
              </div>
            ))}
          </div>

          {/* Final CTA Box */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 rounded-2xl p-8 text-center border border-primary/20">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">
              Não espere a próxima conta alta!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Faça sua portabilidade hoje e comece a economizar amanhã. O processo é simples, rápido e totalmente gratuito.
            </p>
            <WhatsAppButton size="lg">
              <span className="flex items-center gap-2">
                Começar a Economizar Agora
                <ArrowRight className="w-5 h-5" />
              </span>
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateWhyMigrateSection;
