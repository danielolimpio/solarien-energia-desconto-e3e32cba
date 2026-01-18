import { Home, Building2, Factory, Lightbulb, TrendingUp } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";

interface StateIntroSectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateIntroSection = ({ state, content }: StateIntroSectionProps) => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
            {content.whatIs?.title || `O Mercado Livre de Energia ${state.preposition} `}
            {!content.whatIs && <span className="text-gradient">{state.name}</span>}
          </h2>
          
          {/* Introduction Text with Premium Styling */}
          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-soft mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">Introdução ao Mercado Livre</h3>
                <p className="text-sm text-muted-foreground">Entenda como funciona a liberdade energética {state.preposition} {state.name}</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {/* Use whatIs content if available, otherwise fall back to introduction */}
              {(content.whatIs?.content || content.introduction).split('\n\n').map((paragraph, index) => {
                // Check if paragraph contains bullet points
                if (paragraph.includes('•')) {
                  const lines = paragraph.split('\n').filter(l => l.trim());
                  const titleLine = lines[0].includes('•') ? null : lines[0];
                  const bulletLines = lines.filter(l => l.includes('•'));
                  
                  return (
                    <div key={index} className="mb-4 last:mb-0">
                      {titleLine && (
                        <p className="font-semibold text-foreground mb-3 text-base">{titleLine}</p>
                      )}
                      <ul className="space-y-2">
                        {bulletLines.map((line, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                            <span className="text-base leading-relaxed">{line.replace('•', '').trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                
                return (
                  <p key={index} className="mb-4 last:mb-0 leading-relaxed text-base">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Regional Context Card */}
          <div className="bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 rounded-2xl p-6 mb-12 border border-secondary/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-2 text-secondary">Contexto Regional</h4>
                <p className="text-muted-foreground">{content.regionalContext}</p>
              </div>
            </div>
          </div>

          {/* Audience Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-card p-6 rounded-2xl border border-border/50 text-center hover:border-primary/30 hover:shadow-elegant transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Residencial</h3>
              <p className="text-sm text-muted-foreground">
                Economia para sua casa {state.preposition} {state.name} com energia limpa
              </p>
            </div>
            <div className="group bg-card p-6 rounded-2xl border border-border/50 text-center hover:border-secondary/30 hover:shadow-elegant transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Comercial</h3>
              <p className="text-sm text-muted-foreground">
                Reduza custos operacionais do seu negócio
              </p>
            </div>
            <div className="group bg-card p-6 rounded-2xl border border-border/50 text-center hover:border-accent/30 hover:shadow-elegant transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Industrial</h3>
              <p className="text-sm text-muted-foreground">
                Competitividade máxima para sua indústria
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <WhatsAppButton>
              Falar com Especialista {state.preposition} {state.name}
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateIntroSection;
