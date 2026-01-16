import { Zap, Shield, Clock, Users, Building, Home, Factory, TrendingDown } from "lucide-react";
import FeatureCard from "../FeatureCard";
import WhatsAppButton from "../WhatsAppButton";
import SectionDivider from "../SectionDivider";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Conheça o Mercado Livre de Energia
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Que é o Mercado Livre de Energia?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            O <strong className="text-foreground">Mercado Livre de Energia</strong> é um ambiente de contratação 
            regulamentado pela ANEEL (Agência Nacional de Energia Elétrica) que permite que consumidores escolham 
            livremente seus fornecedores de energia elétrica. Diferente do mercado cativo, onde você é obrigado 
            a comprar energia da distribuidora local, no Mercado Livre você negocia diretamente com geradores e 
            comercializadores, obtendo preços mais competitivos e condições personalizadas.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde a sua regulamentação em 1995, o Mercado Livre de Energia tem crescido exponencialmente no Brasil, 
            representando hoje mais de <strong className="text-foreground">35% de toda a energia consumida no país</strong>. 
            Com as recentes mudanças na legislação, consumidores residenciais, comerciais e industriais de todo o 
            Brasil podem agora acessar esse mercado e economizar significativamente em suas contas de luz.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FeatureCard
            icon={TrendingDown}
            title="Economia de até 45%"
            description="Reduza drasticamente sua conta de energia negociando diretamente com geradores e obtendo tarifas muito abaixo do mercado regulado."
            variant="primary"
          />
          <FeatureCard
            icon={Shield}
            title="100% Seguro e Legal"
            description="Ambiente regulamentado pela ANEEL com total segurança jurídica. Você continua recebendo energia pela mesma rede de distribuição."
            variant="secondary"
          />
          <FeatureCard
            icon={Clock}
            title="Processo Simplificado"
            description="Migração sem burocracia, sem obras, sem interrupção do fornecimento. A Solarien Energy cuida de toda a documentação."
          />
          <FeatureCard
            icon={Users}
            title="Atendimento Nacional"
            description="Atendimento especializado 24/7 em todos os 27 estados brasileiros. De norte a sul, estamos prontos para ajudar."
          />
        </div>

        <div className="text-center">
          <WhatsAppButton size="lg" text="Quero Economizar na Minha Conta de Energia" />
        </div>

        <SectionDivider />

        {/* Who Can Benefit */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Quem Pode Participar
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            O Mercado Livre de Energia é Para Você!
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com as novas regulamentações, o acesso ao Mercado Livre de Energia foi democratizado. 
            Hoje, praticamente qualquer consumidor pode migrar e aproveitar os benefícios da energia mais barata e sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="gradient-border card-premium p-8 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
              <Home className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Residencial</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Casas, apartamentos e condomínios agora podem acessar o Mercado Livre através da 
              <strong className="text-foreground"> Energia Compartilhada por Assinatura</strong>. 
              Ideal para famílias que buscam economia real na conta de luz sem precisar instalar 
              painéis solares ou fazer qualquer investimento inicial.
            </p>
            <ul className="text-left text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Sem investimento em equipamentos
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Desconto imediato na conta
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Portabilidade gratuita
              </li>
            </ul>
          </div>

          <div className="gradient-border card-premium p-8 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-secondary/10 mb-6">
              <Building className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Comercial</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lojas, restaurantes, hotéis, escritórios, clínicas, academias e todos os tipos de 
              estabelecimentos comerciais. <strong className="text-foreground">Reduza seus custos operacionais</strong> e 
              aumente sua competitividade no mercado com energia mais barata e sustentável.
            </p>
            <ul className="text-left text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                Ideal para alto consumo energético
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                Contratos flexíveis
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                Gestão profissional de energia
              </li>
            </ul>
          </div>

          <div className="gradient-border card-premium p-8 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6">
              <Factory className="w-10 h-10 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Industrial</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fábricas, indústrias e grandes consumidores de energia. O Mercado Livre de Energia 
              oferece <strong className="text-foreground">as maiores economias para o setor industrial</strong>, 
              podendo representar milhões de reais em economia ao longo do tempo.
            </p>
            <ul className="text-left text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                Economia significativa em larga escala
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                Previsibilidade de custos
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                Certificação de energia verde
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <WhatsAppButton size="lg" text="Descubra Quanto Posso Economizar" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
