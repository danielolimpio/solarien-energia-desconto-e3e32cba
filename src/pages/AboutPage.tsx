import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/blog/AuthorCard";
import { author } from "@/data/author";
import { Award, Briefcase, Lightbulb, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Lightbulb,
    title: "Conteúdo claro",
    text: "Traduzimos a complexidade regulatória do setor elétrico em linguagem prática para gestores e diretores.",
  },
  {
    icon: Target,
    title: "Foco em resultado",
    text: "Cada análise tem um objetivo: ajudar empresas a tomar decisões de energia que reduzem custo e risco.",
  },
  {
    icon: Award,
    title: "Independência editorial",
    text: "Não recebemos para indicar comercializadoras. Comparações e recomendações são baseadas em dados públicos.",
  },
  {
    icon: Users,
    title: "Comunidade B2B",
    text: "Conteúdo pensado para indústrias, comércios, redes e operações multissite que querem migrar com segurança.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre | Mercado Livre de Energia</title>
        <meta
          name="description"
          content="Conheça o time, a missão e o autor por trás do portal Mercado Livre de Energia: conteúdo independente para empresas que querem economizar até 45% na conta de luz."
        />
        <link rel="canonical" href="https://mercadolivredeenergia.org/sobre" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-20">
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-secondary/10 py-20 md:py-28">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20 mb-6">
                  <Briefcase className="w-3.5 h-3.5" /> Quem somos
                </span>
                <h1 className="font-display text-4xl md:text-6xl font-black text-foreground leading-tight mb-5">
                  Conteúdo independente sobre{" "}
                  <span className="text-gradient-solar">energia</span> para
                  empresas
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O portal Mercado Livre de Energia nasceu para descomplicar o
                  Ambiente de Contratação Livre (ACL) e ajudar empresas
                  brasileiras a tomar decisões melhores sobre o maior custo
                  operacional depois da folha de pagamento: a conta de luz.
                </p>
              </div>
            </div>
          </section>

          {/* Pilares */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {pillars.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <p.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-lg mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Author */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20 mb-4">
                    <Zap className="w-3.5 h-3.5" /> Editor & autor
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">
                    Quem assina os conteúdos
                  </h2>
                </div>
                <AuthorCard author={author} />
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 md:p-12 text-center">
                <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-3">
                  Quer simular a economia da sua empresa?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nossa equipe analisa sua conta de luz e mostra, sem
                  compromisso, quanto você pode economizar migrando para o
                  Mercado Livre de Energia.
                </p>
                <Button asChild size="lg">
                  <Link to="/contato">Falar com um especialista</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
