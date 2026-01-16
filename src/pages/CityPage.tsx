import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sun, Zap, TrendingDown, Leaf, Building2, Home, Factory, MapPin, CheckCircle2, ArrowRight, ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";
import { getCityBySlug, getCitiesByState } from "@/data/cities";
import { brazilianStates } from "@/data/states";

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const result = slug ? getCityBySlug(slug) : undefined;

  if (!result) {
    return <Navigate to="/404" replace />;
  }

  const { city, stateAbbr } = result;
  const state = brazilianStates.find((s) => s.abbreviation === stateAbbr);

  if (!state) {
    return <Navigate to="/404" replace />;
  }

  const pageTitle = `Mercado Livre de Energia em ${city.name} - ${stateAbbr}`;
  const pageDescription = `Economize até 45% na conta de luz em ${city.name}, ${state.name} com o Mercado Livre de Energia. Energia renovável para residências, comércios e indústrias. Simulação gratuita!`;

  // Get other cities in the same state for related links
  const otherCities = getCitiesByState(stateAbbr)
    .filter((c) => c.slug !== city.slug)
    .slice(0, 12);

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Economize até 45% | Solarien Energy</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={`mercado livre de energia ${city.name}, energia solar ${city.name}, economia energia ${city.name} ${stateAbbr}, energia renovável ${city.name}, desconto energia ${city.name}`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://mercadolivredeenergia.pagin.com.br/${city.slug}`} />

        <meta property="og:title" content={`${pageTitle} | Economize até 45%`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mercadolivredeenergia.pagin.com.br/${city.slug}`} />
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
            "url": `https://mercadolivredeenergia.pagin.com.br/${city.slug}`,
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
            "serviceType": ["Mercado Livre de Energia", "Energia por Assinatura", "Gestão de Energia"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />

        <main>
          {/* Breadcrumb */}
          <section className="pt-24 pb-4">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">
                  Início
                </Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link to={`/${state.slug}`} className="hover:text-primary transition-colors">
                  {state.name}
                </Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-foreground font-medium">{city.name}</span>
              </nav>
            </div>
          </section>

          {/* Hero Section */}
          <section className="relative pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">
                    {city.name} - {stateAbbr}
                    {city.isCapital && <span className="ml-2 text-xs bg-primary/20 px-2 py-0.5 rounded-full">Capital</span>}
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Mercado Livre de Energia em{" "}
                  <span className="text-gradient">{city.name}</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Descubra como empresas e residências em <strong>{city.name}</strong> estão economizando
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
                    <strong>{city.name}</strong>, localizada no estado de <strong>{state.name}</strong>, está na vanguarda
                    da transição energética brasileira. Com o Mercado Livre de Energia, consumidores de toda a cidade
                    podem escolher de quem comprar energia, negociando diretamente com geradores e comercializadores
                    para obter as melhores condições.
                  </p>

                  <p>
                    A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                      Solarien Energy</a> atua em {city.name} oferecendo soluções completas para
                    migração ao Mercado Livre de Energia, com economia garantida de até 45% na conta de luz
                    e energia 100% renovável.
                  </p>

                  <p>
                    Seja você um <strong>consumidor residencial</strong>, <strong>comerciante</strong> ou
                    <strong> industrial</strong> em {city.name}, a Solarien Energy pode ajudar sua empresa ou
                    residência a reduzir significativamente os custos com energia elétrica, contribuindo
                    também para um futuro mais sustentável.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-card p-6 rounded-2xl border border-border/50 text-center">
                    <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-2">Residencial</h3>
                    <p className="text-sm text-muted-foreground">
                      Economia para sua casa em {city.name}
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
                Vantagens do Mercado Livre de Energia
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Veja por que milhares de consumidores em {city.name} estão migrando para o Mercado Livre
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
                      `Cobertura em ${city.name}`,
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

          {/* Other Cities in State */}
          {otherCities.length > 0 && (
            <section className="py-20 bg-card/50">
              <div className="container mx-auto px-4">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
                  Outras Cidades Atendidas {state.preposition}{" "}
                  <span className="text-gradient">{state.name}</span>
                </h2>
                <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                  O Mercado Livre de Energia também está disponível em outras cidades {state.preposition} {state.name}
                </p>

                <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                  {otherCities.map((otherCity) => (
                    <Link
                      key={otherCity.slug}
                      to={`/${otherCity.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all text-sm font-medium"
                    >
                      <MapPin className="w-3 h-3 text-primary" />
                      {otherCity.name}
                      {otherCity.isCapital && (
                        <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">Capital</span>
                      )}
                    </Link>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Link
                    to={`/${state.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    Ver todas as cidades {state.preposition} {state.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          )}

          <SectionDivider />

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Comece a Economizar em{" "}
                  <span className="text-gradient">{city.name}</span> Hoje!
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Faça uma simulação gratuita e descubra quanto você pode economizar
                  na conta de luz com o Mercado Livre de Energia em {city.name}.
                </p>
                <WhatsAppButton size="lg" className="shadow-elegant">
                  Simular Minha Economia Agora
                </WhatsAppButton>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CityPage;
