import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { BookOpen, Sparkles, TrendingUp, Zap } from "lucide-react";

const BlogPage = () => {
  const slots = Array.from({ length: 9 }, (_, i) => blogPosts[i]);

  return (
    <>
      <Helmet>
        <title>Blog | Mercado Livre de Energia</title>
        <meta
          name="description"
          content="Artigos, guias e análises sobre Mercado Livre de Energia, eficiência energética, ACL, CCEE e economia na conta de luz para empresas."
        />
        <link rel="canonical" href="https://mercadolivredeenergia.org/blog" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-20">
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-secondary/10 py-20 md:py-28">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" aria-hidden />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20 mb-6">
                  <Sparkles className="w-3.5 h-3.5" /> Blog Premium
                </span>
                <h1 className="font-display text-4xl md:text-6xl font-black text-foreground leading-tight mb-5">
                  Inteligência em{" "}
                  <span className="text-gradient-solar">Energia</span> para
                  empresas
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Artigos aprofundados sobre Mercado Livre de Energia, ACL,
                  CCEE, eficiência energética e estratégias para reduzir o
                  custo da sua operação.
                </p>

                <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto">
                  {[
                    { icon: BookOpen, label: "Conteúdo aprofundado" },
                    { icon: TrendingUp, label: "Análises de mercado" },
                    { icon: Zap, label: "Guias práticos" },
                  ].map((it, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-border bg-card/80 backdrop-blur p-4 flex flex-col items-center gap-2"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <it.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-foreground text-center">
                        {it.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Grid */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 max-w-7xl mx-auto">
                {slots.map((post, i) => (
                  <BlogCard
                    key={post?.slug ?? `placeholder-${i}`}
                    post={post}
                    placeholderIndex={i + 1}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
