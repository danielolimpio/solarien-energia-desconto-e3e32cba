import { CheckCircle2, BadgeCheck, Gift, Sparkles } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";

interface StateZeroCostSectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateZeroCostSection = ({ state, content }: StateZeroCostSectionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-accent/10 rounded-3xl p-8 md:p-12 border-2 border-secondary/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full">
                  <Gift className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wide text-sm">100% Gratuito</span>
                </div>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
                {content.zeroCost.title}
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
                {content.zeroCost.description}
              </p>

              {/* Zero Cost Items */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {content.zeroCost.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-xl border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-3 p-4 bg-card/60 rounded-xl mb-8">
                <BadgeCheck className="w-8 h-8 text-secondary" />
                <div>
                  <p className="font-display font-semibold text-foreground">Garantia Solarien Energy</p>
                  <p className="text-sm text-muted-foreground">Portabilidade sem custos ou seu dinheiro de volta</p>
                </div>
              </div>

              <div className="text-center">
                <WhatsAppButton size="lg">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Migrar Gratuitamente Agora
                  </span>
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateZeroCostSection;
