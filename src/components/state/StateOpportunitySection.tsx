import { TrendingUp, Lightbulb, DollarSign, Percent, Award, Zap, BarChart3, LucideIcon } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";

interface StateOpportunitySectionProps {
  state: StateInfo;
  content: StateContent;
}

const getStatIcon = (label: string, value: string, index: number): LucideIcon => {
  const labelLower = label.toLowerCase();
  const valueLower = value.toLowerCase();
  
  if (labelLower.includes("tarifa") || valueLower.includes("r$")) return DollarSign;
  if (labelLower.includes("economia") || valueLower.includes("%")) return Percent;
  if (labelLower.includes("geração") || labelLower.includes("#") || valueLower.includes("#")) return Award;
  if (labelLower.includes("potência") || labelLower.includes("energia")) return Zap;
  
  const defaultIcons: LucideIcon[] = [DollarSign, Percent, Award];
  return defaultIcons[index % defaultIcons.length];
};

const StateOpportunitySection = ({ state, content }: StateOpportunitySectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            {content.opportunity.title}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            {content.opportunity.description}
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {content.opportunity.stats.map((stat, index) => {
              const Icon = getStatIcon(stat.label, stat.value, index);
              return (
                <div 
                  key={index} 
                  className="bg-card rounded-2xl p-8 border border-border/50 text-center hover:shadow-elegant transition-all group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-solar flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Economic Profile */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">Perfil Econômico {state.preposition} {state.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {content.economicProfile}
                </p>
              </div>
            </div>
          </div>

          {/* Energy Tip */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-6 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-lg font-semibold mb-1 text-primary">Dica de Economia</h4>
                <p className="text-foreground">{content.energyTip}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <WhatsAppButton size="lg">
              Aproveitar Esta Oportunidade
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateOpportunitySection;
