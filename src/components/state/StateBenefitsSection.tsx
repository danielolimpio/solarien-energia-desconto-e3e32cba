import { TrendingDown, Leaf, Zap, Sun, Shield, Clock, Award, CheckCircle2, Factory, Building2, Palmtree, Ship, Truck, Mountain, Wheat, LucideIcon } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";

interface StateBenefitsSectionProps {
  state: StateInfo;
  content: StateContent;
}

const getBenefitIcon = (title: string, index: number): LucideIcon => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes("economia") || titleLower.includes("reduz") || titleLower.includes("desconto")) return TrendingDown;
  if (titleLower.includes("solar") || titleLower.includes("eólica") || titleLower.includes("renovável") || titleLower.includes("limpa")) return Leaf;
  if (titleLower.includes("turismo") || titleLower.includes("hotel") || titleLower.includes("pousada")) return Zap;
  if (titleLower.includes("agro") || titleLower.includes("fazenda") || titleLower.includes("agrícola")) return Sun;
  if (titleLower.includes("indústria") || titleLower.includes("industrial")) return Factory;
  if (titleLower.includes("comércio") || titleLower.includes("comercial")) return Building2;
  if (titleLower.includes("sustent") || titleLower.includes("verde") || titleLower.includes("ambiente")) return Leaf;
  if (titleLower.includes("segur") || titleLower.includes("confiab")) return Shield;
  if (titleLower.includes("rápid") || titleLower.includes("ágil")) return Clock;
  
  const defaultIcons: LucideIcon[] = [TrendingDown, Leaf, Zap, Sun];
  return defaultIcons[index % defaultIcons.length];
};

const StateBenefitsSection = ({ state, content }: StateBenefitsSectionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          {content.benefits.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {content.benefits.description}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {content.benefits.items.map((benefit, index) => {
            const Icon = getBenefitIcon(benefit.title, index);
            
            const colors = [
              { bg: "bg-primary/10", text: "text-primary", border: "hover:border-primary/30" },
              { bg: "bg-secondary/10", text: "text-secondary", border: "hover:border-secondary/30" },
              { bg: "bg-accent/10", text: "text-accent", border: "hover:border-accent/30" },
              { bg: "bg-primary/10", text: "text-primary", border: "hover:border-primary/30" },
            ];
            const color = colors[index % colors.length];
            
            return (
              <div 
                key={index} 
                className={`group bg-card p-6 rounded-2xl border border-border/50 ${color.border} transition-all hover:shadow-elegant relative overflow-hidden`}
              >
                {/* Highlight Badge */}
                {benefit.highlight && (
                  <div className="absolute -top-1 -right-1">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl shadow-md">
                      {benefit.highlight}
                    </div>
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-xl ${color.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${color.text}`} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <WhatsAppButton>
            Quero Esses Benefícios
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default StateBenefitsSection;
