import { HelpCircle, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface StateFAQSectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateFAQSection = ({ state, content }: StateFAQSectionProps) => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">FAQ</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Perguntas Frequentes sobre o Mercado Livre de Energia {state.preposition} {state.name}
            </h2>
            <p className="text-muted-foreground">
              Tire suas dúvidas sobre a migração e economia de energia no seu estado
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 mb-8">
            <Accordion type="single" collapsible className="w-full">
              {content.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                  <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Map Description */}
          <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-6 border border-accent/20 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-2">Cobertura Regional</h4>
                <p className="text-muted-foreground text-sm">{content.mapDescription}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Fale com nossos especialistas!
            </p>
            <WhatsAppButton>
              Tirar Minhas Dúvidas
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateFAQSection;
