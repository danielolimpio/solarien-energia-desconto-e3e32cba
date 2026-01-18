import { FileText, Building, User, MapPin, FileCheck, ClipboardCheck } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";

interface StateDocumentsSectionProps {
  state: StateInfo;
  content: StateContent;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  file: FileText,
  building: Building,
  user: User,
  map: MapPin,
};

const StateDocumentsSection = ({ state, content }: StateDocumentsSectionProps) => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
              <ClipboardCheck className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">Documentação</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {content.documents.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {content.documents.description}
            </p>
          </div>

          {/* Documents Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {content.documents.items.map((doc, index) => {
              const Icon = iconMap[doc.icon] || FileText;
              return (
                <div 
                  key={index} 
                  className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1 text-base">{doc.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{doc.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Availability Info */}
          <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-6 border border-accent/20 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-2">{content.availability.title}</h4>
                <p className="text-muted-foreground">{content.availability.description}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Não se preocupe com a burocracia — a Solarien cuida de tudo para você!
            </p>
            <WhatsAppButton>
              Enviar Meus Documentos
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateDocumentsSection;
