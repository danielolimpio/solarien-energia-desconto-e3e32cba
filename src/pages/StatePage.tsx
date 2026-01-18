import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sun, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";
import { getStateBySlug } from "@/data/states";
import { getCitiesByState } from "@/data/cities";
import { stateContents } from "@/data/stateContent";

// State Section Components
import StateHeroSection from "@/components/state/StateHeroSection";
import StateIntroSection from "@/components/state/StateIntroSection";
import StateHowItWorksSection from "@/components/state/StateHowItWorksSection";
import StateBenefitsSection from "@/components/state/StateBenefitsSection";
import StateMarketComparisonSection from "@/components/state/StateMarketComparisonSection";
import StateZeroCostSection from "@/components/state/StateZeroCostSection";
import StateOpportunitySection from "@/components/state/StateOpportunitySection";
import StateDocumentsSection from "@/components/state/StateDocumentsSection";
import StateDifferentialsSection from "@/components/state/StateDifferentialsSection";
import StateWhyMigrateSection from "@/components/state/StateWhyMigrateSection";
import StateTestimonialsSection from "@/components/state/StateTestimonialsSection";
import StateFAQSection from "@/components/state/StateFAQSection";

const StatePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const state = slug ? getStateBySlug(slug) : undefined;
  const content = state ? stateContents[state.abbreviation] : undefined;

  if (!state) {
    return <Navigate to="/404" replace />;
  }

  const pageTitle = `Mercado Livre de Energia ${state.preposition} ${state.name}`;
  const pageDescription = `Economize até 45% na conta de luz ${state.preposition} ${state.name} com o Mercado Livre de Energia. Energia renovável para residências, comércios e indústrias. Simulação gratuita!`;

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Economize até 45% | Solarien Energy</title>
        <meta name="description" content={pageDescription} />
        <meta 
          name="keywords" 
          content={`mercado livre de energia ${state.name}, energia solar ${state.name}, economia energia ${state.abbreviation}, energia renovável ${state.name}, desconto energia ${state.abbreviation}`} 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://mercadolivredeenergia.pagin.com.br/${state.slug}`} />
        
        <meta property="og:title" content={`${pageTitle} | Economize até 45%`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mercadolivredeenergia.pagin.com.br/${state.slug}`} />
        <meta property="og:locale" content="pt_BR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${pageTitle} | Economize até 45%`} />
        <meta name="twitter:description" content={pageDescription} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Mercado Livre de Energia - ${state.name}`,
            "description": pageDescription,
            "url": `https://mercadolivredeenergia.pagin.com.br/${state.slug}`,
            "telephone": "+55-12-98251-9116",
            "areaServed": {
              "@type": "State",
              "name": state.name,
              "containedInPlace": {
                "@type": "Country",
                "name": "Brasil"
              }
            },
            "serviceType": ["Mercado Livre de Energia", "Energia por Assinatura", "Gestão de Energia"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section with Rich Content */}
          {content ? (
            <StateHeroSection state={state} content={content} />
          ) : (
            <section className="relative pt-32 pb-20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    Mercado Livre de Energia{" "}
                    <span className="text-gradient">{state.preposition} {state.name}</span>
                  </h1>
                  <WhatsAppButton size="lg">Simular Economia</WhatsAppButton>
                </div>
              </div>
            </section>
          )}

          <SectionDivider />

          {/* Rich Content Sections */}
          {content && (
            <>
              <StateIntroSection state={state} content={content} />
              <SectionDivider />
              
              <StateHowItWorksSection state={state} content={content} />
              <SectionDivider />
              
              <StateBenefitsSection state={state} content={content} />
              <SectionDivider />
              
              <StateMarketComparisonSection state={state} content={content} />
              <SectionDivider />
              
              <StateZeroCostSection state={state} content={content} />
              <SectionDivider />
              
              <StateOpportunitySection state={state} content={content} />
              <SectionDivider />
              
              <StateDocumentsSection state={state} content={content} />
              <SectionDivider />
              
              <StateDifferentialsSection state={state} content={content} />
              <SectionDivider />
              
              <StateWhyMigrateSection state={state} content={content} />
              <SectionDivider />
              
              <StateTestimonialsSection state={state} content={content} />
              <SectionDivider />
              
              <StateFAQSection state={state} content={content} />
              <SectionDivider />
            </>
          )}

          {/* Municipalities Badges Section */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
                Mercado Livre de Energia nos Principais Municípios{" "}
                <span className="text-gradient">{state.preposition} {state.name}</span>
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
                Atendimento especializado em energia renovável para empresas, comércios e residências 
                em todo o estado. Confira as cidades com maior demanda por economia de energia:
              </p>
              
              <div className="max-w-5xl mx-auto">
                {getCitiesByState(state.abbreviation).filter(c => c.isCapital).map((cityItem) => (
                  <div key={cityItem.slug} className="mb-8 text-center">
                    <Link 
                      to={`/${cityItem.slug}`} 
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/15 px-6 py-3 rounded-full border-2 border-primary/30 hover:border-primary/60 hover:shadow-elegant transition-all group"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-solar flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-left">
                        <span className="text-[10px] uppercase tracking-wider text-primary font-bold">Capital do Estado</span>
                        <h3 className="font-display text-lg font-bold text-foreground">{cityItem.name}</h3>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                ))}

                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {getCitiesByState(state.abbreviation)
                    .filter(c => !c.isCapital)
                    .map((cityItem) => (
                      <Link
                        key={cityItem.slug}
                        to={`/${cityItem.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-background rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm transition-all text-xs md:text-sm font-medium text-foreground group"
                        title={`Mercado Livre de Energia em ${cityItem.name} - ${state.abbreviation}`}
                      >
                        <MapPin className="w-3 h-3 text-primary/70 group-hover:text-primary transition-colors" />
                        <span>{cityItem.name}</span>
                      </Link>
                    ))}
                </div>

                <div className="mt-10 p-6 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-2">
                        Atendemos todos os municípios {state.preposition} {state.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        A Solarien Energy oferece Mercado Livre de Energia para residências, comércios e indústrias 
                        em todas as cidades {state.preposition} {state.name}.
                      </p>
                      <WhatsAppButton size="sm">Consultar minha cidade</WhatsAppButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
            <div className="container mx-auto px-4 text-center">
              <Sun className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Pronto para Economizar {state.preposition} {state.name}?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Entre em contato agora e descubra quanto você pode economizar com o Mercado Livre de Energia
              </p>
              <WhatsAppButton size="lg" className="bg-white text-primary hover:bg-white/90">
                Simular Minha Economia Agora
              </WhatsAppButton>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default StatePage;
