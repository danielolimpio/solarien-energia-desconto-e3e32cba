import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Lock } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

type Props = {
  post?: BlogPost;
  placeholderIndex?: number;
};

const BlogCard = ({ post, placeholderIndex }: Props) => {
  if (!post) {
    return (
      <article
        className="group relative overflow-hidden rounded-2xl border border-dashed border-border bg-card/50 p-6 flex flex-col items-center justify-center text-center min-h-[380px]"
        aria-label="Próximo artigo em breve"
      >
        <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
          <Lock className="w-6 h-6 text-muted-foreground" />
        </div>
        <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
          Em breve
        </span>
        <h3 className="font-display text-lg font-semibold text-foreground/70">
          Novo artigo #{placeholderIndex}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 max-w-[24ch]">
          Estamos preparando mais conteúdo sobre energia. Volte em breve.
        </p>
      </article>
    );
  }

  const date = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
            {post.category}
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readingTime}
          </span>
        </div>

        <h3 className="font-display text-lg font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <img
              src={post.author.photo}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border border-primary/30"
            />
            <span className="text-xs font-medium text-foreground">
              {post.author.name}
            </span>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
          >
            Ler artigo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
