import { Sun, Zap, Leaf, TrendingDown } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import heroBg from "@/assets/hero-solar-bg.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background" />
      
      {/* Floating elements */}
      <div className="absolute top-32 left-[10%] floating-animation">
        <div className="icon-container p-4">
          <Sun className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-48 right-[15%] floating-animation" style={{ animationDelay: "1s" }}>
        <div className="icon-container p-4">
          <Leaf className="w-8 h-8 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-32 left-[20%] floating-animation" style={{ animationDelay: "2s" }}>
        <div className="icon-container p-4">
          <Zap className="w-8 h-8 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Leaf className="w-4 h-4" />
            <span>Energia Limpa e Renovável para Todo Brasil</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Mercado Livre de{" "}
            <span className="text-gradient-solar">Energia</span>
          </h1>

          {/* SEO-optimized description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Descubra como economizar <strong className="text-foreground">até 45% na sua conta de energia</strong> com o 
            Mercado Livre de Energia. A revolução energética chegou ao Brasil: energia mais barata, 
            sustentável e acessível para residências, comércios e indústrias em todos os estados brasileiros.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary">
                <TrendingDown className="w-6 h-6" />
                <span className="font-display text-3xl md:text-4xl font-bold">45%</span>
              </div>
              <span className="text-sm text-muted-foreground">Economia Garantida</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-secondary">
                <Zap className="w-6 h-6" />
                <span className="font-display text-3xl md:text-4xl font-bold">27</span>
              </div>
              <span className="text-sm text-muted-foreground">Estados Atendidos</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-accent">
                <Sun className="w-6 h-6" />
                <span className="font-display text-3xl md:text-4xl font-bold">24/7</span>
              </div>
              <span className="text-sm text-muted-foreground">Atendimento</span>
            </div>
          </div>

          {/* CTA Button */}
          <WhatsAppButton 
            size="lg" 
            text="Simule Sua Economia Agora - É Grátis!"
          />

          {/* Trust badge */}
          <p className="mt-6 text-sm text-muted-foreground">
            ✓ Portabilidade 100% Gratuita • ✓ Sem Burocracia • ✓ Atendimento em Todo Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
