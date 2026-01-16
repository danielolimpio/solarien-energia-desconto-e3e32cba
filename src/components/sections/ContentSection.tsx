import { Lightbulb, TrendingUp, Scale, Zap, Sun, Factory, Building2, Users } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import SectionDivider from "../SectionDivider";

const ContentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* History and Context */}
        <div className="max-w-4xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Contexto Histórico
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            A História do Mercado Livre de Energia no Brasil
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              O <strong className="text-foreground">Mercado Livre de Energia no Brasil</strong> teve início em 1995, 
              com a Lei nº 9.074, que estabeleceu as bases para a reestruturação do setor elétrico brasileiro. 
              Inicialmente, apenas grandes consumidores industriais com demanda superior a 10 MW podiam participar. 
              Ao longo dos anos, a legislação evoluiu para ampliar o acesso a consumidores cada vez menores.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Em 2004, o Novo Modelo do Setor Elétrico trouxe mudanças significativas, criando a Câmara de 
              Comercialização de Energia Elétrica (CCEE) e estabelecendo regras mais claras para o mercado. 
              Desde então, o Mercado Livre de Energia tem crescido consistentemente, representando hoje mais 
              de <strong className="text-foreground">35% de toda a energia consumida no país</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              A mais recente abertura veio em 2024, quando consumidores com demanda a partir de 500 kW passaram 
              a poder acessar o mercado livre. Essa mudança representa uma revolução no setor, pois abre as 
              portas para milhares de novos consumidores que antes não tinham essa opção.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a> surgiu 
              nesse contexto de democratização da energia, oferecendo soluções inovadoras como a Energia 
              Compartilhada por Assinatura, que permite que qualquer consumidor, independente do seu tamanho, 
              tenha acesso aos benefícios do Mercado Livre de Energia.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <WhatsAppButton size="md" text="Saiba Mais Sobre o Mercado Livre" />
        </div>

        <SectionDivider />

        {/* Market Types */}
        <div className="max-w-4xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Entenda as Diferenças
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mercado Livre vs. Mercado Cativo: Qual a Diferença?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="gradient-border card-premium p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-muted">
                  <Scale className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Mercado Cativo</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  Você é obrigado a comprar da distribuidora local
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  Tarifa definida pela ANEEL sem negociação
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  Sujeito às bandeiras tarifárias
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  Sem previsibilidade de custos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  Sem escolha de fonte de energia
                </li>
              </ul>
            </div>

            <div className="gradient-border card-premium p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Mercado Livre</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  Liberdade para escolher seu fornecedor
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  Negociação direta de preços e condições
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  Economia de até 45% na conta
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  Maior previsibilidade orçamentária
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  Opção por energia 100% renovável
                </li>
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            A escolha entre Mercado Cativo e Mercado Livre é clara: enquanto no mercado tradicional você 
            está preso às tarifas definidas pela ANEEL e sujeito às variações das bandeiras tarifárias, 
            no Mercado Livre você tem poder de negociação, acesso a tarifas mais competitivas e pode 
            escolher consumir energia de fontes renováveis. Com a <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a>, 
            a migração é simples, rápida e sem custos.
          </p>
        </div>

        <div className="text-center mb-16">
          <WhatsAppButton size="md" text="Migrar para o Mercado Livre Agora" />
        </div>

        <SectionDivider />

        {/* Industry Segments */}
        <div className="max-w-4xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Segmentos Atendidos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mercado Livre de Energia para Todos os Segmentos
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a> atende 
            uma ampla variedade de segmentos, oferecendo soluções personalizadas para cada tipo de negócio. 
            Independente do seu ramo de atuação, podemos ajudar você a economizar na conta de energia.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Building2, title: "Shopping Centers", desc: "Redução significativa nos custos operacionais" },
              { icon: Factory, title: "Indústrias", desc: "Economia em larga escala para produção" },
              { icon: Users, title: "Hospitais e Clínicas", desc: "Energia confiável com menor custo" },
              { icon: Lightbulb, title: "Hotéis e Pousadas", desc: "Competitividade no setor de turismo" },
              { icon: TrendingUp, title: "Supermercados", desc: "Refrigeração e iluminação mais baratas" },
              { icon: Sun, title: "Escolas e Universidades", desc: "Recursos para investir em educação" },
            ].map((item, index) => (
              <div key={index} className="gradient-border card-premium p-6">
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Além desses, atendemos restaurantes, academias, igrejas, condomínios, padarias, farmácias, 
            oficinas mecânicas, lavanderias, agências bancárias, escritórios, consultórios, laboratórios, 
            e praticamente qualquer estabelecimento que consuma energia elétrica. A economia é real e 
            acessível para todos os tipos e tamanhos de negócio.
          </p>
        </div>

        <div className="text-center">
          <WhatsAppButton size="lg" text="Descobrir Economia Para Meu Negócio" />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
