import { MapPin, Sparkles } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";

interface StateHeroSectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateHeroSection = ({ state, content }: StateHeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">{state.name} ({state.abbreviation})</span>
          </div>
          
          {/* H1 Otimizado para SEO */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {content.h1 ? (
              <span dangerouslySetInnerHTML={{ 
                __html: content.h1.replace(state.name, `<span class="text-gradient">${state.name}</span>`) 
              }} />
            ) : (
              <>
                Mercado Livre de Energia{" "}
                <span className="text-gradient">{state.preposition} {state.name}</span>
              </>
            )}
          </h1>
          
          {/* Hook Premium */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 rounded-2xl p-6 mb-8 border border-primary/20">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Destaque Regional</span>
            </div>
            <p className="text-lg md:text-xl text-foreground font-medium">
              {content.hook}
            </p>
          </div>
          
          {/* Subtítulo Hero */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {content.heroSubtitle || (
              <>
                Descubra como empresas e residências {state.preposition} {state.name} estão economizando 
                até <strong className="text-primary">45% na conta de luz</strong> com o Mercado Livre de Energia 
                e a <strong>Solarien Energy</strong>.
              </>
            )}
          </p>
          
          <WhatsAppButton size="lg" className="shadow-elegant">
            Simular Economia {state.preposition} {state.name}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default StateHeroSection;
