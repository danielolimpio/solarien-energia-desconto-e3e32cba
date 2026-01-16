import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sun, Zap, TrendingDown, Leaf, Building2, Home, Factory, MapPin, CheckCircle2, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";
import { getCityBySlug, getCitiesByState } from "@/data/cities";
import { brazilianStates } from "@/data/states";

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityData = citySlug ? getCityBySlug(citySlug) : undefined;

  if (!cityData) {
    return <Navigate to="/404" replace />;
  }

  const { city, stateAbbreviation } = cityData;
  const state = brazilianStates.find(s => s.abbreviation === stateAbbreviation);

  if (!state) {
    return <Navigate to="/404" replace />;
  }

  const pageTitle = `Mercado Livre de Energia em ${city.name} - ${stateAbbreviation}`;
  const pageDescription = `Economize até 45% na conta de luz em ${city.name} - ${stateAbbreviation} com o Mercado Livre de Energia. Energia renovável para residências, comércios e indústrias. Simulação gratuita com a Solarien Energy!`;
  const canonicalUrl = `https://mercadolivredeenergia.pagin.com.br/${city.slug}`;

  // Get other cities from the same state for related tags
  const otherCities = getCitiesByState(stateAbbreviation)
    .filter(c => c.slug !== city.slug)
    .slice(0, 20);

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Economize até 45% | Solarien Energy</title>
        <meta name="description" content={pageDescription} />
        <meta 
          name="keywords" 
          content={`mercado livre de energia ${city.name}, energia solar ${city.name} ${stateAbbreviation}, economia energia ${city.name}, energia renovável ${city.name}, desconto energia ${city.name} ${stateAbbreviation}, conta de luz ${city.name}`} 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={`${pageTitle} | Economize até 45%`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="pt_BR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${pageTitle} | Economize até 45%`} />
        <meta name="twitter:description" content={pageDescription} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Mercado Livre de Energia - ${city.name}`,
            "description": pageDescription,
            "url": canonicalUrl,
            "telephone": "+55-12-98251-9116",
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "containedInPlace": {
                "@type": "State",
                "name": state.name,
                "containedInPlace": {
                  "@type": "Country",
                  "name": "Brasil"
                }
              }
            },
            "serviceType": ["Mercado Livre de Energia", "Energia por Assinatura", "Gestão de Energia", "Consultoria de Energia"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Breadcrumb */}
          <div className="pt-24 pb-4 bg-card/30">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-primary transition-colors">Início</Link>
                <span>/</span>
                <Link to={`/${state.slug}`} className="hover:text-primary transition-colors">{state.name}</Link>
                <span>/</span>
                <span className="text-foreground font-medium">{city.name}</span>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative pt-8 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{city.name} - {stateAbbreviation}</span>
                  {city.isCapital && (
                    <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full ml-2">Capital</span>
                  )}
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Mercado Livre de Energia em{" "}
                  <span className="text-gradient">{city.name} - {stateAbbreviation}</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Descubra como empresas e residências em {city.name} estão economizando 
                  até <strong className="text-primary">45% na conta de luz</strong> com o Mercado Livre de Energia 
                  e a <strong>Solarien Energy</strong>.
                </p>
                
                <WhatsAppButton size="lg" className="shadow-elegant">
                  Simular Economia em {city.name}
                </WhatsAppButton>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* About City Section */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
                  O Mercado Livre de Energia em{" "}
                  <span className="text-gradient">{city.name}</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    {city.name}, localizada no estado de <strong>{state.name}</strong>, está entre as cidades que mais 
                    se beneficiam do Mercado Livre de Energia no Brasil. Com o crescimento do setor e a abertura 
                    regulatória, consumidores residenciais, comerciais e industriais da cidade podem agora escolher 
                    de quem comprar energia elétrica.
                  </p>
                  
                  <p>
                    A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                    Solarien Energy</a> oferece atendimento especializado em {city.name} - {stateAbbreviation}, 
                    proporcionando economia de até 45% na conta de luz com energia 100% renovável. 
                    O processo de migração é simples, sem burocracia e totalmente gratuito.
                  </p>

                  <p>
                    Seja você proprietário de uma residência, comércio ou indústria em {city.name}, 
                    a Solarien Energy tem a solução ideal para reduzir seus custos com energia. 
                    Nossa equipe de especialistas está pronta para realizar uma simulação gratuita 
                    e mostrar quanto você pode economizar mensalmente.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-card p-6 rounded-2xl border border-border/50 text-center hover:border-primary/30 transition-all">
                    <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-2">Residencial</h3>
                    <p className="text-sm text-muted-foreground">
                      Economia para sua casa em {city.name}
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-2xl border border-border/50 text-center hover:border-secondary/30 transition-all">
                    <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-2">Comercial</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduza custos do seu negócio
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-2xl border border-border/50 text-center hover:border-accent/30 transition-all">
                    <Factory className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-2">Industrial</h3>
                    <p className="text-sm text-muted-foreground">
                      Competitividade para sua indústria
                    </p>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <WhatsAppButton>
                    Falar com Especialista em {city.name}
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
                Vantagens do Mercado Livre de Energia em {city.name}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Veja por que consumidores em {city.name} - {stateAbbreviation} estão migrando para o Mercado Livre
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-elegant">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingDown className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">Economia de até 45%</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduza drasticamente seus custos com energia em {city.name}
                  </p>
                </div>

                <div className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-secondary/30 transition-all hover:shadow-elegant">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Leaf className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">Energia 100% Renovável</h3>
                  <p className="text-sm text-muted-foreground">
                    Contribua para um {city.name} mais sustentável
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
                Como Funciona em {city.name}
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
                    Iniciar Simulação Gratuita em {city.name}
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
                      A Solarien Energy é sua parceira ideal para migrar ao Mercado Livre de Energia em {city.name}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      "Economia garantida de até 45%",
                      "Energia 100% renovável",
                      "Atendimento 24/7",
                      "Portabilidade gratuita",
                      "Sem taxa de adesão",
                      `Atendimento em ${city.name}`,
                      "Processo 100% digital",
                      "Suporte especializado",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-card/50 p-4 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
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

          {/* Related Cities Tags Section */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <Tag className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Mercado Livre de Energia</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Outras Cidades em{" "}
                  <span className="text-gradient">{state.name}</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A Solarien Energy também atende outras cidades no estado de {state.name}. 
                  Clique em uma cidade para saber mais:
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                {/* Link to State Page */}
                <div className="text-center mb-8">
                  <Link 
                    to={`/${state.slug}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 px-6 py-3 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
                    title={`Mercado Livre de Energia ${state.preposition} ${state.name}`}
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Ver todas as cidades de {state.name}</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </Link>
                </div>

                {/* City Tags */}
                <div className="flex flex-wrap justify-center gap-2" role="navigation" aria-label="Cidades relacionadas">
                  {otherCities.map((otherCity) => (
                    <Link
                      key={otherCity.slug}
                      to={`/${otherCity.slug}`}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-sm ${
                        otherCity.isCapital 
                          ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 hover:border-primary/50 font-semibold' 
                          : 'bg-card border-border/50 hover:border-primary/30 hover:bg-primary/5'
                      }`}
                      title={`Mercado Livre de Energia em ${otherCity.name} - ${stateAbbreviation}`}
                    >
                      <MapPin className="w-3 h-3 text-primary" />
                      <span>{otherCity.name} - {stateAbbreviation}</span>
                      {otherCity.isCapital && (
                        <span className="bg-primary/20 text-primary text-xs px-1.5 py-0.5 rounded">Capital</span>
                      )}
                    </Link>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <p className="text-muted-foreground mb-4">
                    Sua cidade não está na lista? Não se preocupe! Atendemos todo o estado de {state.name}.
                  </p>
                  <WhatsAppButton>
                    Consultar Disponibilidade na Minha Cidade
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
            <div className="container mx-auto px-4 text-center">
              <Sun className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Pronto para Economizar em {city.name}?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Entre em contato agora e descubra quanto você pode economizar com o Mercado Livre de Energia
              </p>
              <WhatsAppButton size="lg" className="bg-white text-primary hover:bg-white/90">
                Simular Minha Economia em {city.name}
              </WhatsAppButton>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CityPage;
