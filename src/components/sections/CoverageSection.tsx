import { MapPin, Building, Store, Factory } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";

const states = [
  { name: "Acre", abbr: "AC", capital: "Rio Branco" },
  { name: "Alagoas", abbr: "AL", capital: "Maceió" },
  { name: "Amapá", abbr: "AP", capital: "Macapá" },
  { name: "Amazonas", abbr: "AM", capital: "Manaus" },
  { name: "Bahia", abbr: "BA", capital: "Salvador" },
  { name: "Ceará", abbr: "CE", capital: "Fortaleza" },
  { name: "Distrito Federal", abbr: "DF", capital: "Brasília" },
  { name: "Espírito Santo", abbr: "ES", capital: "Vitória" },
  { name: "Goiás", abbr: "GO", capital: "Goiânia" },
  { name: "Maranhão", abbr: "MA", capital: "São Luís" },
  { name: "Mato Grosso", abbr: "MT", capital: "Cuiabá" },
  { name: "Mato Grosso do Sul", abbr: "MS", capital: "Campo Grande" },
  { name: "Minas Gerais", abbr: "MG", capital: "Belo Horizonte" },
  { name: "Pará", abbr: "PA", capital: "Belém" },
  { name: "Paraíba", abbr: "PB", capital: "João Pessoa" },
  { name: "Paraná", abbr: "PR", capital: "Curitiba" },
  { name: "Pernambuco", abbr: "PE", capital: "Recife" },
  { name: "Piauí", abbr: "PI", capital: "Teresina" },
  { name: "Rio de Janeiro", abbr: "RJ", capital: "Rio de Janeiro" },
  { name: "Rio Grande do Norte", abbr: "RN", capital: "Natal" },
  { name: "Rio Grande do Sul", abbr: "RS", capital: "Porto Alegre" },
  { name: "Rondônia", abbr: "RO", capital: "Porto Velho" },
  { name: "Roraima", abbr: "RR", capital: "Boa Vista" },
  { name: "Santa Catarina", abbr: "SC", capital: "Florianópolis" },
  { name: "São Paulo", abbr: "SP", capital: "São Paulo" },
  { name: "Sergipe", abbr: "SE", capital: "Aracaju" },
  { name: "Tocantins", abbr: "TO", capital: "Palmas" },
];

const CoverageSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Cobertura Nacional
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mercado Livre de Energia em Todo o Brasil
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a> atende 
            clientes em todos os 27 estados brasileiros. De norte a sul, de leste a oeste, 
            levamos economia e energia sustentável para residências, comércios e indústrias em todas 
            as capitais e principais municípios do país.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="gradient-border card-premium p-6 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
              <Building className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-2">27</h3>
            <p className="text-muted-foreground">Estados Atendidos</p>
          </div>
          <div className="gradient-border card-premium p-6 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-secondary/10 mb-4">
              <Store className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-2">5.570+</h3>
            <p className="text-muted-foreground">Municípios Cobertos</p>
          </div>
          <div className="gradient-border card-premium p-6 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-4">
              <Factory className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-2">Milhares</h3>
            <p className="text-muted-foreground">Clientes Atendidos</p>
          </div>
        </div>

        {/* States Grid */}
        <div className="mb-12">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Estados e Capitais Atendidos
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {states.map((state) => (
              <div
                key={state.abbr}
                className="gradient-border bg-card p-4 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="font-display font-bold text-primary text-sm">{state.abbr}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{state.capital}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extended coverage text */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="gradient-border card-premium p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">
              Mercado Livre de Energia nas Principais Cidades do Brasil
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Atendemos as maiores metrópoles brasileiras como <strong className="text-foreground">São Paulo, Rio de Janeiro, 
              Belo Horizonte, Salvador, Brasília, Fortaleza, Recife, Porto Alegre, Curitiba e Manaus</strong>. 
              Também estamos presentes em cidades de médio porte como Campinas, Santos, Ribeirão Preto, 
              Uberlândia, Londrina, Joinville, Caxias do Sul, Juiz de Fora, Feira de Santana e muitas outras.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nossa infraestrutura de atendimento permite chegar a qualquer município brasileiro onde haja 
              rede de distribuição de energia elétrica. Seja no interior do Nordeste, no coração do Centro-Oeste, 
              nas grandes capitais do Sul e Sudeste, ou nas remotas cidades do Norte, a <a href="https://solarien.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Solarien Energy</a> está 
              pronta para atender você.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Não importa se você está em um grande centro comercial de São Paulo, em uma fazenda no 
              interior de Goiás, em uma indústria na Zona Franca de Manaus ou em um pequeno comércio no 
              sertão da Paraíba. O Mercado Livre de Energia está disponível para você, e a Solarien Energy 
              é sua parceira nessa jornada de economia e sustentabilidade.
            </p>
          </div>
        </div>

        <div className="text-center">
          <WhatsAppButton size="lg" text="Consultar Disponibilidade na Minha Cidade" />
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
