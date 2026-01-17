import WhatsAppButton from "./WhatsAppButton";
import logoSun from "@/assets/logo-sun.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src={logoSun} 
              alt="Mercado Livre de Energia" 
              className="w-10 h-10 spin-logo"
            />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          </div>
          <span className="font-display text-2xl md:text-3xl font-black tracking-tight text-foreground drop-shadow-sm">
            Mercado Livre de <span className="text-gradient-solar font-black">Energia</span>
          </span>
        </a>
        
        <WhatsAppButton size="sm" />
      </div>
    </header>
  );
};

export default Header;
