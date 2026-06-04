import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Sun, Zap, TrendingDown, Leaf, Building2, Home, Factory, MapPin, 
  CheckCircle2, ArrowRight, ChevronLeft, MessageCircle, Star, 
  HelpCircle, Users, Award, Shield, Clock, Wallet
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";
import { getCityBySlug, getCitiesByState } from "@/data/cities";
import { brazilianStates } from "@/data/states";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  generateLocalFAQs,
  generateTestimonials,
  generateEnergySituation,
  generateSavingsCase,
  getNearbyCities,
  getDistributorsForState,
} from "@/data/localSeoData";

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

  // SEO optimized title and description
  const pageTitle = `Mercado Livre de Energia em ${city.name}`;
  const pageDescription = `Economize até 45% em ${city.name} com o Mercado Livre de Energia. Simule grátis com a Solarien Energy.`;

  // Get related data for unique content
  const otherCities = getCitiesByState(stateAbbr)
    .filter((c) => c.slug !== city.slug)
    .slice(0, 15);
  
  const nearbyCityNames = getNearbyCities(city.slug);
  const faqs = generateLocalFAQs(city.name, stateAbbr, state.name);
  const testimonials = generateTestimonials(city.name, stateAbbr).slice(0, 3);
  const energySituation = generateEnergySituation(city.name, stateAbbr, state.name, city.isCapital || false);
  const savingsCase = generateSavingsCase(city.name, stateAbbr);
  const distributors = getDistributorsForState(stateAbbr);

  // Find nearby cities that exist in our database for internal linking
  const nearbyLinks = nearbyCityNames
    .map(name => {
      const allCities = getCitiesByState(stateAbbr);
      return allCities.find(c => c.name === name);
    })
    .filter(Boolean)
    .slice(0, 5);

  // Schema.org JSON-LD for LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Solarien Energy - Mercado Livre de Energia em ${city.name}`,
    "description": pageDescription,
    "url": `https://mercadolivredeenergia.org/${city.slug}`,
    "telephone": "+55-12-98251-9116",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": state.abbreviation,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "BR"
    },
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
    "priceRange": "$$",
    "serviceType": ["Mercado Livre de Energia", "Energia por Assinatura", "Gestão de Energia", "Energia Renovável"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.slice(0, 5).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={`mercado livre de energia em ${city.name.toLowerCase()}, como migrar para o mercado livre de energia em ${city.name.toLowerCase()}, economia na conta de luz ${city.name.toLowerCase()}, energia renovável ${city.name.toLowerCase()}, fornecedor de energia ${stateAbbr.toLowerCase()}, tarifa branca ${city.name.toLowerCase()}, energia solar ${city.name.toLowerCase()}, ${distributors.join(', ').toLowerCase()}`}
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href={`https://mercadolivredeenergia.org/${city.slug}`} />
        <meta name="author" content="Solarien Energy" />
        <meta name="geo.region" content={`BR-${stateAbbr}`} />
        <meta name="geo.placename" content={city.name} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mercadolivredeenergia.org/${city.slug}`} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Mercado Livre de Energia - Solarien Energy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />

        <main>
          {/* Breadcrumb */}
          <section className="pt-24 pb-4">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-primary transition-colors">
                  Início
                </Link>
                <ChevronLeft className="w-4 h-4 rotate-180" aria-hidden="true" />
                <Link to={`/${state.slug}`} className="hover:text-primary transition-colors">
                  {state.name}
                </Link>
                <ChevronLeft className="w-4 h-4 rotate-180" aria-hidden="true" />
                <span className="text-foreground font-medium" aria-current="page">{city.name}</span>
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
                  até <strong className="text-primary">45% na conta de luz</strong> com o Mercado Livre de Energia.
                  A <strong>Solarien Energy</strong> é especialista em migração para energia renovável.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsAppButton size="lg" className="shadow-elegant">
                    Simular Economia em {city.name}
                  </WhatsAppButton>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Regulamentado ANEEL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-secondary" />
                    <span>Energia 100% Renovável</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Migração em 30-60 dias</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* Energy Situation Section - Unique content per city */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
                  Situação Energética em{" "}
                  <span className="text-gradient">{city.name}</span>
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                  Entenda o cenário de energia na sua cidade e como economizar
                </p>

                <div className="bg-card p-8 rounded-2xl border border-border/50 mb-8">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {energySituation}
                  </p>
                </div>

                {/* Consumer profiles */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card p-6 rounded-2xl border border-border/50 text-center hover:border-primary/30 transition-all">
                    <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-2">Residencial</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Economia para sua casa em {city.name}
                    </p>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Economia média mensal</p>
                      <p className="text-xl font-bold text-primary">R${savingsCase.residential.savings}</p>
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-2xl border border-border/50 text-center hover:border-secondary/30 transition-all">
                    <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-2">Comercial</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Reduza custos do seu negócio
                    </p>
                    <div className="bg-secondary/10 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Economia média mensal</p>
                      <p className="text-xl font-bold text-secondary">R${savingsCase.commercial.savings.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-2xl border border-border/50 text-center hover:border-accent/30 transition-all">
                    <Factory className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-2">Industrial</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Competitividade para sua indústria
                    </p>
                    <div className="bg-accent/10 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Economia média mensal</p>
                      <p className="text-xl font-bold text-accent">R${savingsCase.industrial.savings.toLocaleString()}</p>
                    </div>
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

          {/* How Solarien Helps Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
                Como a Solarien Energy Ajuda em{" "}
                <span className="text-gradient">{city.name}</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Empresas e residências em {city.name} economizam até 45% na conta de luz com nossa consultoria especializada
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
                    Processo simples e 100% digital de migração
                  </p>
                </div>

                <div className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-elegant">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Wallet className="w-7 h-7 text-primary" />
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

          {/* Testimonials Section */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
                Casos de Economia em{" "}
                <span className="text-gradient">{city.name}</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Veja como outros consumidores em {city.name} estão economizando
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-card p-6 rounded-2xl border border-border/50">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-solar flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground">Economia mensal</p>
                      <p className="text-lg font-bold text-primary">{testimonial.savings}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* How it Works */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
                Como Migrar para o Mercado Livre em {city.name}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Em apenas 4 passos simples você começa a economizar
              </p>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { step: 1, title: "Entre em Contato", desc: `Fale com a Solarien Energy pelo WhatsApp e informe que você está em ${city.name}` },
                    { step: 2, title: "Envie sua Conta", desc: `Compartilhe sua última conta de energia da ${distributors[0] || 'distribuidora local'}` },
                    { step: 3, title: "Simulação Gratuita", desc: "Receba uma análise detalhada com sua economia potencial" },
                    { step: 4, title: "Comece a Economizar", desc: "Migre sem burocracia e economize até 45% já na próxima fatura" },
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

          {/* FAQ Section */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                    <HelpCircle className="w-4 h-4" />
                    <span className="font-medium">Perguntas Frequentes</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Dúvidas sobre Energia em{" "}
                    <span className="text-gradient">{city.name}</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Respostas para as perguntas mais comuns sobre o Mercado Livre de Energia na sua cidade
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`faq-${index}`}
                      className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-semibold pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="text-center mt-10">
                  <p className="text-muted-foreground mb-4">
                    Ainda tem dúvidas sobre o Mercado Livre de Energia em {city.name}?
                  </p>
                  <WhatsAppButton>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar com Especialista
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* Why Solarien Section */}
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
                      A Solarien Energy é sua parceira ideal para migrar ao Mercado Livre de Energia em {city.name}. 
                      Somos credenciados pela ANEEL e atuamos em todo o estado de {state.name}.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      "Economia garantida de até 45%",
                      "Energia 100% renovável e sustentável",
                      "Atendimento 24/7 por WhatsApp",
                      "Portabilidade totalmente gratuita",
                      "Sem taxa de adesão ou mensalidade",
                      `Atendimento especializado em ${city.name}`,
                      "Processo 100% digital e sem burocracia",
                      "Suporte técnico especializado",
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

          {/* Nearby Cities Section - Internal Linking */}
          {nearbyLinks.length > 0 && (
            <>
              <section className="py-16 bg-card/50">
                <div className="container mx-auto px-4">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
                    Mercado Livre de Energia em Cidades Próximas
                  </h2>
                  <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                    A Solarien Energy também atende municípios vizinhos a {city.name}
                  </p>

                  <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                    {nearbyLinks.map((nearbyCity) => (
                      nearbyCity && (
                        <Link
                          key={nearbyCity.slug}
                          to={`/${nearbyCity.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all text-sm font-medium"
                        >
                          <MapPin className="w-3 h-3 text-primary" />
                          Mercado Livre de Energia em {nearbyCity.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </section>
              <SectionDivider />
            </>
          )}

          {/* Other Cities in State */}
          {otherCities.length > 0 && (
            <section className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
                  Cidades Atendidas {state.preposition}{" "}
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
          <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Sun className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Comece a Economizar em{" "}
                  {city.name} Hoje!
                </h2>
                <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
                  Faça uma simulação gratuita e descubra quanto você pode economizar
                  na conta de luz com o Mercado Livre de Energia em {city.name}, {state.name}.
                </p>
                <WhatsAppButton size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
                  Simular Minha Economia Agora
                </WhatsAppButton>
                
                <p className="mt-6 text-sm text-white/90">
                  Atendemos residências, comércios e indústrias em {city.name} e região
                </p>
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
