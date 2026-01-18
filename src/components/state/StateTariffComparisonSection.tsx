import { TrendingDown, AlertCircle, Calculator } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContents/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StateTariffComparisonSectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateTariffComparisonSection = ({ state, content }: StateTariffComparisonSectionProps) => {
  if (!content.tariffComparison) return null;

  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <TrendingDown className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">Comparativo de Tarifas</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {content.tariffComparison.title}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {content.tariffComparison.description}
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden mb-8">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-display font-semibold">Modalidade</TableHead>
                  <TableHead className="font-display font-semibold text-center">Tarifa Atual</TableHead>
                  <TableHead className="font-display font-semibold text-center">Mercado Livre</TableHead>
                  <TableHead className="font-display font-semibold text-center">Economia</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {content.tariffComparison.comparisons.map((comparison, index) => (
                  <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">{comparison.distributor}</TableCell>
                    <TableCell className="text-center">
                      <span className="text-destructive font-semibold">{comparison.distributorTariff}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-primary font-semibold">{comparison.freeMarketTariff}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
                        <TrendingDown className="w-4 h-4" />
                        {comparison.savings}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Disclaimer */}
          <div className="bg-muted/30 rounded-xl p-4 flex items-start gap-3 mb-8">
            <AlertCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              {content.tariffComparison.disclaimer}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">
              Quer saber exatamente quanto sua empresa pode economizar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa simulação gratuita analisa suas faturas e calcula a economia real para o perfil de consumo da sua empresa {state.preposition} {state.name}.
            </p>
            <WhatsAppButton size="lg">
              Solicitar Simulação Gratuita
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateTariffComparisonSection;
