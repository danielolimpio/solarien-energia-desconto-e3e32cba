import { Quote, Star, MapPin, TrendingDown } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { StateInfo } from "@/data/states";
import { StateContent } from "@/data/stateContent";

interface StateTestimonialsSectionProps {
  state: StateInfo;
  content: StateContent;
}

const StateTestimonialsSection = ({ state, content }: StateTestimonialsSectionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">Depoimentos</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              O que dizem nossos clientes {state.preposition} {state.name}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de empresas e residências que já economizam com a Solarien Energy
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {content.testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-elegant transition-all relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="flex items-center gap-1 bg-gradient-solar text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                    <TrendingDown className="w-4 h-4" />
                    {testimonial.savings}
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 pt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <div className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {testimonial.role}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-primary">
                    <MapPin className="w-3 h-3" />
                    {testimonial.city}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Junte-se a milhares de clientes satisfeitos {state.preposition} {state.name}
            </p>
            <WhatsAppButton>
              Quero Economizar Também
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateTestimonialsSection;
