import { Sun, MapPin, Phone, Clock, Zap, Mail } from "lucide-react";

const states = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const services = [
  "Mercado Livre de Energia",
  "Energia por Assinatura",
  "Gestão de Energia",
  "Consultoria de Energia",
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-primary-foreground/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Sun className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <span className="font-display text-xl font-bold text-primary-foreground">
                Mercado Livre de <span className="text-primary">Energia</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Sua porta de entrada para o Mercado Livre de Energia no Brasil. 
              Economia de até 45% na conta de luz com energia 100% renovável.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Energia que transforma!</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">
                  Av. Julia Freire, 1200<br />
                  Expedicionários<br />
                  João Pessoa - PB<br />
                  CEP: 58.041-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+5512982519116" className="text-sm hover:text-primary transition-colors">
                  (12) 98251-9116
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">Atendimento em Todo Brasil 24/7</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">
              <Clock className="w-5 h-5 inline mr-2 text-primary" />
              Horário de Funcionamento
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Segunda-feira:</span>
                <span className="text-primary">24 horas</span>
              </li>
              <li className="flex justify-between">
                <span>Terça-feira:</span>
                <span className="text-primary">24 horas</span>
              </li>
              <li className="flex justify-between">
                <span>Quarta-feira:</span>
                <span className="text-primary">24 horas</span>
              </li>
              <li className="flex justify-between">
                <span>Quinta-feira:</span>
                <span className="text-primary">24 horas</span>
              </li>
              <li className="flex justify-between">
                <span>Sexta-feira:</span>
                <span className="text-primary">24 horas</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span className="text-primary">24 horas</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-primary">24 horas</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">Serviços</h4>
            <ul className="space-y-3 mb-8">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  {service}
                </li>
              ))}
            </ul>

            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Estados Atendidos</h4>
            <div className="flex flex-wrap gap-1">
              {states.map((state) => (
                <span 
                  key={state} 
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center text-sm">
          <p className="mb-2">
            Copyright © 2026 | <span className="text-primary-foreground font-semibold">Mercado Livre de Energia</span> | Todos os direitos reservados
          </p>
          <p>
            Desenvolvido por{" "}
            <a 
              href="https://danielolimpio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              DanielOlimpio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
