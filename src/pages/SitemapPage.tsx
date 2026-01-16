import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brazilianStates } from "@/data/states";
import { citiesByState } from "@/data/cities";
import { getSitemapStats } from "@/utils/generateSitemap";
import { MapPin, Building2, Home, FileText, ExternalLink } from "lucide-react";

const SitemapPage = () => {
  const stats = getSitemapStats();

  return (
    <>
      <Helmet>
        <title>Sitemap | Solarien Energy - Todas as Páginas</title>
        <meta
          name="description"
          content="Navegue por todas as páginas do site Solarien Energy. Encontre informações sobre o Mercado Livre de Energia em todos os estados e cidades do Brasil."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://solarien-energia-desconto.lovable.app/sitemap" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Mapa do Site
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Navegue por todas as {stats.total} páginas do nosso site
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="bg-card rounded-lg p-4 shadow-sm border">
                    <Home className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">1</div>
                    <div className="text-sm text-muted-foreground">Home</div>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-sm border">
                    <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stats.states}</div>
                    <div className="text-sm text-muted-foreground">Estados</div>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-sm border">
                    <Building2 className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stats.cities}</div>
                    <div className="text-sm text-muted-foreground">Cidades</div>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-sm border">
                    <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stats.total}</div>
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
                <div className="bg-card rounded-lg p-4 border">
                  <Link
                    to="/"
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Solarien Energy - Mercado Livre de Energia
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* States Section */}
          <section className="py-8 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Estados ({stats.states})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {brazilianStates.map((state) => (
                    <Link
                      key={state.abbreviation}
                      to={`/${state.slug}`}
                      className="bg-card rounded-lg p-3 border hover:border-primary/50 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">
                          {state.abbreviation}
                        </span>
                        <span className="text-foreground group-hover:text-primary transition-colors font-medium truncate">
                          {state.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Cities Section */}
          <section className="py-8 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  Cidades por Estado ({stats.cities})
                </h2>

                <div className="space-y-8">
                  {brazilianStates.map((state) => {
                    const cities = citiesByState[state.abbreviation] || [];
                    if (cities.length === 0) return null;

                    return (
                      <div key={state.abbreviation} className="bg-card rounded-lg p-6 border">
                        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                          <span className="bg-primary text-primary-foreground text-sm font-bold px-2 py-1 rounded">
                            {state.abbreviation}
                          </span>
                          {state.name}
                          <span className="text-sm font-normal text-muted-foreground">
                            ({cities.length} cidades)
                          </span>
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          {cities.map((city) => (
                            <Link
                              key={city.slug}
                              to={`/${city.slug}`}
                              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm transition-all hover:shadow-md ${
                                city.isCapital
                                  ? "bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
                                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                              }`}
                            >
                              {city.isCapital && <span className="mr-1">★</span>}
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
          <section className="py-8 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="bg-card rounded-lg p-6 border text-center">
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Sitemap XML para Mecanismos de Busca
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Para indexação no Google, Bing e outros buscadores
                  </p>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    Ver sitemap.xml
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
