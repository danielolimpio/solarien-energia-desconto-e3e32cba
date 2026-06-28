import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard";

const BlogPreviewSection = () => {
  const slots = Array.from({ length: 9 }, (_, i) => blogPosts[i]);

  return (
    <section id="blog" className="relative py-20 md:py-28 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20 mb-5">
            <Sparkles className="w-3.5 h-3.5" /> Blog · Conteúdo Premium
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
            Notícias e análises do{" "}
            <span className="text-gradient-solar">Mercado Livre de Energia</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Artigos aprofundados, guias práticos e atualizações regulatórias para
            empresas que querem reduzir o custo de energia com inteligência.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {slots.map((post, i) => (
            <BlogCard
              key={post?.slug ?? `placeholder-${i}`}
              post={post}
              placeholderIndex={i + 1}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="shadow-lg shadow-primary/20">
            <Link to="/blog">
              Ver todos os artigos <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
