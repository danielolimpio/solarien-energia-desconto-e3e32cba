import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Facebook, Twitter, Linkedin, Instagram, ChevronDown, ChevronUp } from "lucide-react";
import { author as defaultAuthor } from "@/data/author";

const AuthorCard = ({ author = defaultAuthor }: { author?: typeof defaultAuthor }) => {
  const [open, setOpen] = useState(false);

  return (
    <aside className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-6 md:p-8 shadow-sm">
      <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <img
          src={author.photo}
          alt={author.name}
          className="w-24 h-24 rounded-2xl object-cover border-2 border-primary/40 shadow-md flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-primary mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Autor do artigo
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{author.role}</p>
          <p className="text-sm md:text-base text-foreground/80 mt-3 leading-relaxed">
            {author.shortBio}
          </p>

          {open && (
            <div className="mt-4 space-y-3 text-sm md:text-base text-foreground/80 leading-relaxed border-l-2 border-primary/40 pl-4">
              {author.fullBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href={author.links.website} target="_blank" rel="noopener noreferrer" aria-label="Site"
                   className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
                <a href={author.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                   className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={author.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                   className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={author.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                   className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={author.links.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                   className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          <Button
            variant="outline"
            size="sm"
            className="mt-4"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <>
                Mostrar menos <ChevronUp className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                Ver Mais <ChevronDown className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default AuthorCard;
