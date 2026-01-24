import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brazilianStates } from "@/data/states";
import { citiesByState } from "@/data/cities";
import { getSitemapStats } from "@/utils/generateSitemap";
import { MapPin, Building2, Home, FileText, ExternalLink, Shield, Scale, Cookie, Globe, Zap, MessageCircle } from "lucide-react";

const SitemapPage = () => {
  const stats = getSitemapStats();

  const mainPages = [
    { 
      title: "Contato", 
      path: "/contato", 
      icon: MessageCircle,
      description: "Fale conosco e solicite uma simulação gratuita"
    },
  ];

  const legalPages = [
    { 
      title: "Política de Privacidade", 
      path: "/politica-de-privacidade", 
      icon: Shield,
      description: "Como coletamos e protegemos seus dados"
    },
    { 
      title: "Termos de Uso", 
      path: "/termos-de-uso", 
      icon: Scale,
      description: "Condições de uso do site e serviços"
    },
    { 
      title: "Política de Cookies", 
      path: "/politica-de-cookies", 
      icon: Cookie,
      description: "Uso de cookies e tecnologias similares"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | Mercado Livre de Energia - Todas as Páginas</title>
        <meta
          name="description"
          content="Navegue por todas as páginas do Mercado Livre de Energia. Encontre informações sobre energia em todos os estados e cidades do Brasil."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mercadolivredeenergia.org/sitemap" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Mapa do Site
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Navegue por todas as <span className="text-primary font-semibold">{stats.total + 4}</span> páginas do nosso site
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                  <div className="bg-card rounded-xl p-4 shadow-sm border hover:border-primary/50 transition-colors">
                    <Home className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">1</div>
                    <div className="text-sm text-muted-foreground">Home</div>
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-sm border hover:border-primary/50 transition-colors">
                    <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stats.states}</div>
                    <div className="text-sm text-muted-foreground">Estados</div>
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-sm border hover:border-primary/50 transition-colors">
                    <Building2 className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stats.cities}</div>
                    <div className="text-sm text-muted-foreground">Cidades</div>
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-sm border hover:border-primary/50 transition-colors">
                    <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">4</div>
                    <div className="text-sm text-muted-foreground">Legais</div>
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-sm border bg-primary/5 border-primary/30">
                    <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stats.total + 4}</div>
                    <div className="text-sm text-muted-foreground">Total</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Homepage Section */}
          <section className="py-8 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Home className="w-6 h-6 text-primary" />
                  Página Principal
                </h2>
                <div className="bg-card rounded-xl p-6 border hover:border-primary/50 hover:shadow-lg transition-all">
                  <Link
                    to="/"
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                          Mercado Livre de Energia
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Economia de até 45% na conta de luz
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Main Pages Section */}
          <section className="py-8 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Páginas Principais
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {mainPages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className="bg-card rounded-xl p-6 border hover:border-primary/50 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <page.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-foreground font-semibold group-hover:text-primary transition-colors block">
                            {page.title}
                          </span>
                          <p className="text-sm text-muted-foreground mt-1">
                            {page.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Páginas Legais
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {legalPages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className="bg-card rounded-xl p-6 border hover:border-primary/50 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <page.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-foreground font-semibold group-hover:text-primary transition-colors block">
                            {page.title}
                          </span>
                          <p className="text-sm text-muted-foreground mt-1">
                            {page.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* States Section */}
          <section className="py-8 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Estados ({stats.states})
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {brazilianStates.map((state) => (
                    <Link
                      key={state.abbreviation}
                      to={`/${state.slug}`}
                      className="bg-card rounded-xl p-4 border hover:border-primary/50 hover:shadow-lg transition-all group text-center"
                    >
                      <span className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full inline-block mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {state.abbreviation}
                      </span>
                      <span className="text-foreground group-hover:text-primary transition-colors font-medium block text-sm">
                        {state.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Cities Section */}
          <section className="py-8 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  Cidades por Estado ({stats.cities})
                </h2>

                <div className="space-y-6">
                  {brazilianStates.map((state) => {
                    const cities = citiesByState[state.abbreviation] || [];
                    if (cities.length === 0) return null;

                    return (
                      <div key={state.abbreviation} className="bg-card rounded-xl p-6 border hover:border-primary/20 transition-colors">
                        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                          <span className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1.5 rounded-lg">
                            {state.abbreviation}
                          </span>
                          <span>{state.name}</span>
                          <span className="text-sm font-normal text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            {cities.length} cidades
                          </span>
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          {cities.map((city) => (
                            <Link
                              key={city.slug}
                              to={`/${city.slug}`}
                              className={`inline-flex items-center px-4 py-2 rounded-full text-sm transition-all hover:shadow-md ${
                                city.isCapital
                                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:from-primary/90 hover:to-primary/70 shadow-sm"
                                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                              }`}
                            >
                              {city.isCapital && <span className="mr-1.5">⭐</span>}
                              {city.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* XML Sitemap Link */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-2xl p-8 border text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Sitemap XML para Mecanismos de Busca
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    Arquivo XML otimizado para indexação no Google, Bing e outros buscadores
                  </p>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                  >
                    <FileText className="w-5 h-5" />
                    Ver sitemap.xml
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SitemapPage;
