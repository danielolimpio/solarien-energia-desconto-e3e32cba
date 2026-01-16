import { FileText, Calculator, CheckCircle, Zap, ArrowRight } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";

const steps = [
  {
    icon: FileText,
    title: "Envie sua Conta de Energia",
    description: "Basta enviar uma cópia da sua conta de energia atual para a Solarien Energy. Pode ser por WhatsApp, email ou através do site. É rápido e simples!",
  },
  {
    icon: Calculator,
    title: "Simulação Gratuita",
    description: "Nossa equipe especializada analisa seu perfil de consumo e calcula exatamente quanto você pode economizar. A simulação é 100% gratuita e sem compromisso.",
  },
  {
    icon: CheckCircle,
    title: "Aprovação e Contrato",
    description: "Após aprovar a proposta, cuidamos de toda a burocracia. Você não precisa se preocupar com nada - a migração é totalmente gerenciada pela Solarien Energy.",
  },
  {
    icon: Zap,
    title: "Comece a Economizar",
    description: "Pronto! Você já está no Mercado Livre de Energia. A economia começa a aparecer nas próximas faturas, com descontos de até 45% na sua conta de luz.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Processo Simplificado
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como Migrar para o Mercado Livre de Energia
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a> torna 
            o processo de migração para o Mercado Livre de Energia extremamente simples. 
            Sem burocracia, sem custos de portabilidade e sem interrupção no fornecimento de energia.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="gradient-border card-premium p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="gradient-border bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Portabilidade 100% Gratuita
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Assim como você pode mudar de operadora de celular sem custos, no Mercado Livre de Energia 
              a portabilidade é completamente gratuita. Não há taxas de adesão, não há multas e não há 
              nenhum custo oculto. A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a> cuida 
              de tudo para você começar a economizar o mais rápido possível.
            </p>
            <WhatsAppButton size="lg" text="Iniciar Minha Portabilidade Gratuita" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
