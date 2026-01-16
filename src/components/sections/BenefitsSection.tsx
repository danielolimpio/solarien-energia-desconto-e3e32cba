import { Leaf, Sun, DollarSign, Shield, Clock, Globe, Award, Recycle } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import SectionDivider from "../SectionDivider";

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Environmental Benefits */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Energia Verde e Sustentável
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Energia Renovável e Preservação Ambiental
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O Mercado Livre de Energia não é apenas sobre economia - é sobre fazer parte da transição 
            energética do Brasil rumo a um futuro mais sustentável e limpo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="gradient-border card-premium p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 rounded-xl bg-secondary/10 shrink-0">
                <Leaf className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Energia Verde</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  No Mercado Livre de Energia, você pode escolher consumir energia 100% renovável, proveniente 
                  de fontes como solar, eólica, biomassa e pequenas centrais hidrelétricas (PCHs). Ao optar 
                  pela <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a>, 
                  você contribui diretamente para a redução da emissão de gases de efeito estufa e para a 
                  preservação do meio ambiente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A energia solar, em especial, tem crescido exponencialmente no Brasil. Com mais de 
                  300 dias de sol por ano na maior parte do território nacional, nosso país tem um 
                  potencial imenso para geração de energia limpa e renovável.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border card-premium p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 shrink-0">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Energia Solar Compartilhada</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a> oferece 
                  um modelo inovador de energia compartilhada por assinatura. Você não precisa instalar 
                  painéis solares no seu telhado ou fazer qualquer investimento inicial. Basta assinar 
                  e começar a receber os créditos de energia diretamente na sua conta.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As fazendas solares da Solarien estão estrategicamente localizadas em todo o Brasil, 
                  gerando energia limpa que é injetada na rede e creditada na sua conta de luz. 
                  É simples, sustentável e economicamente vantajoso.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6">
            <div className="inline-flex p-4 rounded-2xl bg-secondary/10 mb-4">
              <Recycle className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="font-display font-semibold text-foreground mb-2">100% Renovável</h4>
            <p className="text-sm text-muted-foreground">Energia limpa de fontes naturais</p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-display font-semibold text-foreground mb-2">Baixa Emissão</h4>
            <p className="text-sm text-muted-foreground">Reduza sua pegada de carbono</p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-4">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h4 className="font-display font-semibold text-foreground mb-2">Certificação</h4>
            <p className="text-sm text-muted-foreground">I-REC e certificados verdes</p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex p-4 rounded-2xl bg-secondary/10 mb-4">
              <Leaf className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="font-display font-semibold text-foreground mb-2">ESG</h4>
            <p className="text-sm text-muted-foreground">Compromisso ambiental</p>
          </div>
        </div>

        <div className="text-center mb-16">
          <WhatsAppButton size="lg" text="Quero Energia Verde e Economia" />
        </div>

        <SectionDivider />

        {/* Economic Benefits */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Vantagens Econômicas
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Por Que o Mercado Livre de Energia é Mais Barato?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          <div className="gradient-border card-premium p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 shrink-0">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Negociação Direta</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No mercado cativo (tradicional), você paga a tarifa definida pela ANEEL, sem poder de 
                  negociação. Já no Mercado Livre de Energia, você negocia diretamente com geradores e 
                  comercializadores, obtendo preços muito mais competitivos. A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a> possui 
                  parcerias estratégicas com as maiores usinas geradoras do Brasil, garantindo as melhores 
                  tarifas para seus clientes.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border card-premium p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 rounded-xl bg-secondary/10 shrink-0">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Previsibilidade de Custos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Uma das grandes vantagens do Mercado Livre de Energia é a previsibilidade. Enquanto no 
                  mercado cativo você está sujeito às bandeiras tarifárias (verde, amarela e vermelha), 
                  no Mercado Livre seus custos são mais estáveis e previsíveis. Isso permite um melhor 
                  planejamento financeiro tanto para famílias quanto para empresas.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border card-premium p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 rounded-xl bg-accent/10 shrink-0">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Economia a Longo Prazo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A economia no Mercado Livre de Energia é contínua e cumulativa. Com descontos de até 
                  45% na conta de luz, ao longo de anos você pode economizar dezenas de milhares de reais. 
                  Para empresas e indústrias, essa economia pode representar milhões, tornando o negócio 
                  mais competitivo e sustentável.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <WhatsAppButton size="lg" text="Calcular Minha Economia Agora" />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
