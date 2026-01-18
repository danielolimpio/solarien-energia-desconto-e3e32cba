import { CheckCircle2, AlertCircle, Users, Building2, Factory, Store } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContents/types";

interface StateWhoCanMigrateSectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateWhoCanMigrateSection = ({ state, content }: StateWhoCanMigrateSectionProps) => {
  if (!content.whoCanMigrate) return null;

  const icons = [Building2, Factory, Store, Users];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">Elegibilidade</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {content.whoCanMigrate.title}
            </h2>
          </div>

          {/* Requirements Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {content.whoCanMigrate.requirements.map((requirement, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <div 
                  key={index}
                  className="group bg-card rounded-xl border border-border/50 p-5 flex items-start gap-4 hover:border-primary/30 hover:shadow-soft transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-foreground font-medium">{requirement}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note */}
          <div className="bg-muted/50 rounded-xl p-5 flex items-start gap-4 mb-8">
            <AlertCircle className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-semibold mb-1">Importante</h4>
              <p className="text-muted-foreground">{content.whoCanMigrate.note}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Não sabe se sua empresa pode migrar? Verifique gratuitamente!
            </p>
            <WhatsAppButton>
              Verificar Elegibilidade
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateWhoCanMigrateSection;
