import { Sun, Award, Users, Shield, Clock, Headphones, CheckCircle } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";

const SolarienSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Sua Parceira de Energia
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solarien Energy: Líder em Energia Renovável
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a> é 
            uma empresa brasileira especializada em soluções de energia renovável e gestão energética. 
            Com presença em todo o território nacional, oferecemos descontos de até 45% na conta de energia 
            através do Mercado Livre de Energia e da Energia Compartilhada por Assinatura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="gradient-border card-premium p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Sun className="w-8 h-8 text-primary" />
              Mercado Livre de Energia
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Para empresas e indústrias com consumo mais elevado, a Solarien Energy oferece acesso direto 
              ao Mercado Livre de Energia, com contratos personalizados, tarifas competitivas e gestão 
              completa de energia. Cuidamos de toda a burocracia para que você foque no seu negócio.
            </p>
            <ul className="space-y-3">
              {[
                "Economia de até 45% na conta de energia",
                "Contratos flexíveis e personalizados",
                "Gestão profissional de energia",
                "Relatórios detalhados de consumo",
                "Suporte técnico especializado",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="gradient-border card-premium p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-secondary" />
              Energia por Assinatura
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Para residências e pequenos comércios, a Solarien Energy oferece a Energia Compartilhada 
              por Assinatura. Você recebe créditos de energia solar gerados pelas nossas fazendas solares 
              diretamente na sua conta de luz, sem precisar instalar nenhum equipamento.
            </p>
            <ul className="space-y-3">
              {[
                "Sem investimento inicial",
                "Sem instalação de equipamentos",
                "Desconto imediato na conta de luz",
                "Energia 100% renovável",
                "Cancelamento sem multas",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose Solarien */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Por Que Escolher a Solarien Energy?
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">Segurança</h4>
              <p className="text-sm text-muted-foreground">Empresa regulamentada e com total segurança jurídica</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex p-4 rounded-2xl bg-secondary/10 mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">Experiência</h4>
              <p className="text-sm text-muted-foreground">Milhares de clientes satisfeitos em todo Brasil</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">Agilidade</h4>
              <p className="text-sm text-muted-foreground">Processo rápido e sem burocracia</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">Suporte 24/7</h4>
              <p className="text-sm text-muted-foreground">Atendimento disponível 24 horas por dia</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Entre em contato com a Solarien Energy e descubra como economizar até 45% na sua conta de energia!
          </p>
          <WhatsAppButton size="lg" text="Falar com Especialista da Solarien" />
        </div>
      </div>
    </section>
  );
};

export default SolarienSection;
