import { Shield, Scale, FileCheck } from "lucide-react";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContents/types";

interface StateRegulatorySectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateRegulatorySection = ({ state, content }: StateRegulatorySectionProps) => {
  if (!content.regulatory) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full mb-4">
              <Shield className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">Segurança Regulatória</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Regulamentação do Mercado Livre de Energia
            </h2>
            <p className="text-muted-foreground">
              Conheça as entidades que regulam e garantem a segurança das operações
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* ANEEL */}
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">ANEEL</h3>
                  <p className="text-sm text-muted-foreground">Agência Nacional de Energia Elétrica</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {content.regulatory.aneel}
              </p>
            </div>

            {/* CCEE */}
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <FileCheck className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">CCEE</h3>
                  <p className="text-sm text-muted-foreground">Câmara de Comercialização de Energia Elétrica</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {content.regulatory.ccee}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateRegulatorySection;
