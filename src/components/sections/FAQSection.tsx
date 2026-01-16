import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatsAppButton from "../WhatsAppButton";

const faqs = [
  {
    question: "O que é o Mercado Livre de Energia?",
    answer: "O Mercado Livre de Energia é um ambiente de contratação regulamentado pela ANEEL onde consumidores podem escolher livremente seus fornecedores de energia elétrica, negociando diretamente preços e condições. Diferente do mercado cativo, onde você é obrigado a comprar energia da distribuidora local, no Mercado Livre você tem liberdade de escolha e acesso a tarifas mais competitivas."
  },
  {
    question: "Quem pode participar do Mercado Livre de Energia?",
    answer: "Atualmente, consumidores com demanda contratada acima de 500 kW podem acessar diretamente o Mercado Livre. No entanto, através da Energia Compartilhada por Assinatura oferecida pela Solarien Energy, qualquer consumidor - seja residencial, comercial ou industrial - pode ter acesso aos benefícios do Mercado Livre de Energia, independente do seu consumo."
  },
  {
    question: "Quanto posso economizar no Mercado Livre de Energia?",
    answer: "A economia pode chegar a até 45% na conta de energia, dependendo do seu perfil de consumo e da região. A Solarien Energy oferece uma simulação gratuita onde você pode descobrir exatamente quanto vai economizar antes de tomar qualquer decisão."
  },
  {
    question: "A migração para o Mercado Livre de Energia é segura?",
    answer: "Sim, totalmente segura! O Mercado Livre de Energia é regulamentado pela ANEEL desde 1995 e representa mais de 35% de toda energia consumida no Brasil. Você continua recebendo energia pela mesma rede de distribuição - apenas o fornecedor e a tarifa mudam. A Solarien Energy cuida de toda a documentação e processo de migração."
  },
  {
    question: "Preciso fazer alguma obra ou instalação?",
    answer: "Não! Tanto para o Mercado Livre de Energia quanto para a Energia Compartilhada por Assinatura, não é necessário fazer nenhuma obra ou instalação. A energia continua chegando pela mesma rede que já existe. Você só precisa enviar sua conta de energia e a Solarien Energy cuida do resto."
  },
  {
    question: "Quanto custa para migrar para o Mercado Livre de Energia?",
    answer: "A portabilidade é 100% gratuita! Não há taxas de adesão, não há custos de migração e não há nenhuma taxa oculta. A Solarien Energy cuida de todo o processo sem cobrar nada por isso. Você só começa a pagar quando já estiver economizando."
  },
  {
    question: "O que é Energia Compartilhada por Assinatura?",
    answer: "É um modelo onde você recebe créditos de energia solar gerados por fazendas solares remotas diretamente na sua conta de luz. Você não precisa instalar painéis solares no seu telhado - a Solarien Energy possui usinas solares em todo o Brasil que geram energia limpa e creditam na sua conta, proporcionando desconto imediato."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim! Dependendo do tipo de contrato, você pode ter flexibilidade para cancelar. A Solarien Energy oferece contratos transparentes, sem letras miúdas, e sempre prioriza a satisfação do cliente. Consulte as condições específicas do seu plano."
  },
  {
    question: "A Solarien Energy atende minha cidade?",
    answer: "A Solarien Energy atende todos os 27 estados brasileiros e mais de 5.500 municípios. De norte a sul do Brasil, temos infraestrutura para atender residências, comércios e indústrias. Entre em contato para confirmar a disponibilidade na sua região."
  },
  {
    question: "Como funciona o atendimento da Solarien Energy?",
    answer: "A Solarien Energy oferece atendimento 24 horas por dia, 7 dias por semana. Você pode entrar em contato pelo WhatsApp, telefone ou email. Nossa equipe de especialistas está pronta para tirar todas as suas dúvidas e ajudar você a economizar na conta de energia."
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas Frequentes sobre o Mercado Livre de Energia
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Reunimos as principais dúvidas sobre o Mercado Livre de Energia para ajudar você a 
            entender melhor como funciona essa modalidade e como a <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a> pode 
            ajudar você a economizar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="gradient-border bg-card rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ainda tem dúvidas? Fale diretamente com nossa equipe de especialistas!
          </p>
          <WhatsAppButton size="lg" text="Tirar Minhas Dúvidas no WhatsApp" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
