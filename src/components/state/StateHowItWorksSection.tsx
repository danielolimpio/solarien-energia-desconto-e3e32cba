import { MessageSquare, FileSearch, ClipboardCheck, Zap, ArrowRight, LucideIcon, Phone, BarChart2, FileText, CheckCircle } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";

interface StateHowItWorksSectionProps {
  state: StateInfo;
  content: StateContent;
}

const getStepIcon = (title: string, index: number): LucideIcon => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes("contato") || titleLower.includes("fale") || titleLower.includes("whatsapp")) return MessageSquare;
  if (titleLower.includes("análise") || titleLower.includes("avalia")) return BarChart2;
  if (titleLower.includes("proposta") || titleLower.includes("solução")) return FileText;
  if (titleLower.includes("migração") || titleLower.includes("migra") || titleLower.includes("economia")) return CheckCircle;
  
  const defaultIcons: LucideIcon[] = [MessageSquare, BarChart2, FileText, CheckCircle];
  return defaultIcons[index % defaultIcons.length];
};

const StateHowItWorksSection = ({ state, content }: StateHowItWorksSectionProps) => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          {content.howItWorks.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {content.howItWorks.description}
        </p>

        <div className="max-w-5xl mx-auto">
          {/* Steps Timeline */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.howItWorks.steps.map((step, index) => {
                const Icon = getStepIcon(step.title, index);
                return (
                  <div key={index} className="relative">
                    <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-all h-full">
                      {/* Step Number Badge */}
                      <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-solar flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto shadow-glow">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="font-display text-lg font-semibold text-center mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground text-center">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Arrow - Mobile/Tablet */}
                    {index < content.howItWorks.steps.length - 1 && (
                      <div className="lg:hidden flex justify-center py-4">
                        <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <WhatsAppButton size="lg">
              Iniciar Processo {state.preposition} {state.name}
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateHowItWorksSection;
