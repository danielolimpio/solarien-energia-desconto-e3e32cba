import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sun, Zap, TrendingDown, Leaf, Building2, Home, Factory, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";
import { getStateBySlug } from "@/data/states";
import { getCitiesByState } from "@/data/cities";

const StatePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const state = slug ? getStateBySlug(slug) : undefined;

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
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{state.name} ({state.abbreviation})</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Mercado Livre de Energia{" "}
                  <span className="text-gradient">{state.preposition} {state.name}</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Descubra como empresas e residências {state.preposition} {state.name} estão economizando 
                  até <strong className="text-primary">45% na conta de luz</strong> com o Mercado Livre de Energia 
                  e a <strong>Solarien Energy</strong>.
                </p>
                
                <WhatsAppButton size="lg" className="shadow-elegant">
                  Simular Economia {state.preposition} {state.name}
                </WhatsAppButton>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* About State Section */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
                  O Mercado Livre de Energia {state.preposition}{" "}
                  <span className="text-gradient">{state.name}</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    O estado de <strong>{state.name}</strong> está na vanguarda da transição energética brasileira. 
                    Com o Mercado Livre de Energia, consumidores de todo o estado podem escolher de quem comprar energia, 
                    negociando diretamente com geradores e comercializadores para obter as melhores condições.
                  </p>
                  
                  <p>
                    A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                    Solarien Energy</a> atua {state.preposition} {state.name} oferecendo soluções completas para 
                    migração ao Mercado Livre de Energia, com economia garantida de até 45% na conta de luz 
                    e energia 100% renovável.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-card p-6 rounded-2xl border border-border/50 text-center">
                    <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-2">Residencial</h3>
                    <p className="text-sm text-muted-foreground">
                      Economia para sua casa {state.preposition} {state.name}
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-2xl border border-border/50 text-center">
                    <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-2">Comercial</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduza custos do seu negócio
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-2xl border border-border/50 text-center">
                    <Factory className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-2">Industrial</h3>
                    <p className="text-sm text-muted-foreground">
                      Competitividade para sua indústria
                    </p>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <WhatsAppButton>
                    Falar com Especialista {state.preposition} {state.name}
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* Benefits Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
                Vantagens do Mercado Livre de Energia
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Veja por que milhares de consumidores {state.preposition} {state.name} estão migrando para o Mercado Livre
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-elegant">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingDown className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">Economia de até 45%</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduza drasticamente seus custos com energia {state.preposition} {state.name}
                  </p>
                </div>

                <div className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-secondary/30 transition-all hover:shadow-elegant">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Leaf className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">Energia 100% Renovável</h3>
                  <p className="text-sm text-muted-foreground">
                    Contribua para um {state.name} mais sustentável
                  </p>
                </div>

                <div className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:shadow-elegant">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">Sem Burocracia</h3>
                  <p className="text-sm text-muted-foreground">
                    Processo simples e rápido de migração
                  </p>
                </div>

                <div className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-elegant">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sun className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">Portabilidade Gratuita</h3>
                  <p className="text-sm text-muted-foreground">
                    Migre sem custos com a Solarien Energy
                  </p>
                </div>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* How it Works */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
                Como Funciona {state.preposition} {state.name}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Em apenas 4 passos simples você começa a economizar
              </p>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { step: 1, title: "Entre em Contato", desc: "Fale com a Solarien Energy pelo WhatsApp" },
                    { step: 2, title: "Envie sua Conta", desc: "Compartilhe sua última conta de energia" },
                    { step: 3, title: "Simulação Gratuita", desc: "Receba uma análise detalhada de economia" },
                    { step: 4, title: "Comece a Economizar", desc: "Migre sem burocracia e economize até 45%" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 bg-card p-6 rounded-2xl border border-border/50">
                      <div className="w-12 h-12 rounded-full bg-gradient-solar flex items-center justify-center text-white font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <WhatsAppButton size="lg">
                    Iniciar Simulação Gratuita
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* Solarien Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-border/50">
                  <div className="text-center mb-8">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      Por que escolher a{" "}
                      <span className="text-gradient">Solarien Energy</span>?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      A Solarien Energy é sua parceira ideal para migrar ao Mercado Livre de Energia {state.preposition} {state.name}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      "Economia garantida de até 45%",
                      "Energia 100% renovável",
                      "Atendimento 24/7",
                      "Portabilidade gratuita",
                      "Sem taxa de adesão",
                      "Cobertura em todo {state.name}",
                      "Processo 100% digital",
                      "Suporte especializado",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-card/50 p-4 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">{item.replace("{state.name}", state.name)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <WhatsAppButton size="lg">
                      Falar com a Solarien
                    </WhatsAppButton>
                    <a 
                      href="https://solarien.com.br" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                    >
                      Conhecer a Solarien
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SectionDivider />

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
                {/* Capital Highlight - Special Badge */}
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

                {/* Municipality Badges Grid */}
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

                {/* SEO Helper Text */}
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
                        em todas as cidades {state.preposition} {state.name}. Clique no seu município para ver 
                        informações específicas sobre economia de energia na sua região.
                      </p>
                      <WhatsAppButton size="sm">
                        Consultar minha cidade
                      </WhatsAppButton>
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
