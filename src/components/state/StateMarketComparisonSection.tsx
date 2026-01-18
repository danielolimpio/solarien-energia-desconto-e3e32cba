import { Zap, Sun, CheckCircle2, ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StateMarketComparisonSectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateMarketComparisonSection = ({ state, content }: StateMarketComparisonSectionProps) => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          {content.marketTypes.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          {content.marketTypes.description}
        </p>

        <div className="max-w-5xl mx-auto">
          {/* Comparison Cards - Mobile/Tablet */}
          <div className="grid md:grid-cols-2 gap-6 lg:hidden">
            {/* Free Market Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-2 border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">
                  {content.marketTypes.freeMarket.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {content.marketTypes.freeMarket.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscription Card */}
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-6 border-2 border-secondary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary">
                  {content.marketTypes.subscription.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {content.marketTypes.subscription.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Comparison Table - Desktop */}
          <div className="hidden lg:block bg-card rounded-2xl border border-border/50 overflow-hidden shadow-card">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-display text-lg">Característica</TableHead>
                  <TableHead className="font-display text-lg text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-primary">{content.marketTypes.freeMarket.title}</span>
                    </div>
                  </TableHead>
                  <TableHead className="font-display text-lg text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Sun className="w-5 h-5 text-secondary" />
                      <span className="text-secondary">{content.marketTypes.subscription.title}</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {content.marketTypes.freeMarket.features.map((feature, index) => (
                  <TableRow key={index} className="hover:bg-muted/30">
                    <TableCell className="font-medium">
                      {feature.split(' ').slice(0, 3).join(' ')}...
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <span className="text-muted-foreground">
                          {content.marketTypes.subscription.features[index] || "—"}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* CTA */}
          <div className="mt-10 p-6 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-2xl border border-border/50 text-center">
            <p className="text-lg font-medium mb-4">
              Não sabe qual opção é melhor para você? Nossa equipe analisa seu perfil gratuitamente!
            </p>
            <WhatsAppButton>
              <span className="flex items-center gap-2">
                Descobrir Minha Melhor Opção
                <ArrowRight className="w-4 h-4" />
              </span>
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateMarketComparisonSection;
