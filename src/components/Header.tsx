import { Sun } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Sun className="w-10 h-10 text-primary transition-transform group-hover:rotate-45 duration-500" strokeWidth={1.5} />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          </div>
          <span className="font-display text-xl md:text-2xl font-bold text-foreground">
            Mercado Livre de <span className="text-gradient-solar">Energia</span>
          </span>
        </a>
        
        <WhatsAppButton size="sm" />
      </div>
    </header>
  );
};

export default Header;
