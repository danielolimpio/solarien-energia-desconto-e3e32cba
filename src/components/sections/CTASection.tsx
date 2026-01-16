import { Sun, Zap, Leaf, TrendingDown } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-foreground to-foreground/90 text-primary-foreground overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sun className="w-4 h-4" />
            <span>Comece a Economizar Hoje</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para Economizar até 45% na Sua Conta de Energia?
          </h2>
          
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Milhares de brasileiros já economizam com o Mercado Livre de Energia. 
            A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a> está 
            pronta para ajudar você a fazer parte dessa revolução energética. A simulação é gratuita 
            e a portabilidade não tem custos. O que você está esperando?
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <TrendingDown className="w-5 h-5 text-primary" />
              <span>Até 45% de economia</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Zap className="w-5 h-5 text-primary" />
              <span>Processo sem burocracia</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Leaf className="w-5 h-5 text-secondary" />
              <span>Energia 100% renovável</span>
            </div>
          </div>

          <WhatsAppButton 
            size="lg" 
            text="Simular Minha Economia Grátis"
            className="pulse-glow"
          />

          <p className="mt-6 text-sm text-primary-foreground/60">
            ✓ Atendimento 24/7 • ✓ Todo Brasil • ✓ Residencial, Comercial e Industrial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
