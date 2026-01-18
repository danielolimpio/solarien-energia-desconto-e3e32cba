import { Award, Users, Headphones, BarChart3, Shield, Clock, Star, CheckCircle2, ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";

interface StateDifferentialsSectionProps {
  state: StateInfo;
  content: StateContent;
}

const differentialIcons = [Award, Users, Headphones, BarChart3, Shield, Clock, Star, CheckCircle2];

const StateDifferentialsSection = ({ state, content }: StateDifferentialsSectionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-border/50">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {content.differentials.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {content.differentials.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {content.differentials.items.map((item, index) => {
                const Icon = differentialIcons[index % differentialIcons.length];
                return (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 bg-card/80 backdrop-blur-sm p-5 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-solar flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Coverage Highlights */}
            <div className="bg-card/60 rounded-2xl p-6 mb-8">
              <h3 className="font-display text-xl font-semibold mb-4 text-center">
                {content.coverage.title}
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                {content.coverage.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {content.coverage.highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton size="lg">
                Falar com a Solarien
              </WhatsAppButton>
              <a 
                href="https://solarien.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
              >
                Conhecer a Solarien
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateDifferentialsSection;
