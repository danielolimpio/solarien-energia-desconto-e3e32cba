import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Gavel } from "lucide-react";

const TermsOfUsePage = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Mercado Livre de Energia</title>
        <meta
          name="description"
          content="Termos de Uso do Mercado Livre de Energia. Leia os termos e condições para uso do nosso site e serviços."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://solarien-energia-desconto.lovable.app/termos-de-uso" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Termos de Uso
                </h1>
                <p className="text-lg text-muted-foreground">
                  Última atualização: Janeiro de 2026
                </p>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                
                {/* Aceitação */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Scale className="w-6 h-6 text-primary" />
                    Aceitação dos Termos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ao acessar e usar este site, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                    Se você não concordar com qualquer parte destes termos, não deverá usar nosso site ou serviços. 
                    Reservamo-nos o direito de modificar estes termos a qualquer momento, sendo sua responsabilidade 
                    revisá-los periodicamente.
                  </p>
                </div>

                {/* Descrição do Serviço */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Descrição dos Serviços
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      O Mercado Livre de Energia oferece:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Consultoria especializada em migração para o Mercado Livre de Energia</li>
                      <li>Cotações e comparativos de preços de energia</li>
                      <li>Intermediação com comercializadoras de energia</li>
                      <li>Gestão e acompanhamento de contratos de energia</li>
                      <li>Informações educativas sobre o mercado de energia</li>
                    </ul>
                  </div>
                </div>

                {/* Obrigações do Usuário */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Obrigações do Usuário
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">Ao usar nossos serviços, você concorda em:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fornecer informações verdadeiras, precisas e atualizadas</li>
                      <li>Manter a confidencialidade de suas credenciais de acesso</li>
                      <li>Não usar o site para fins ilegais ou não autorizados</li>
                      <li>Não interferir na segurança ou funcionamento do site</li>
                      <li>Não reproduzir, duplicar ou explorar comercialmente nosso conteúdo sem autorização</li>
                      <li>Respeitar os direitos de propriedade intelectual</li>
                    </ul>
                  </div>
                </div>

                {/* Proibições */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-destructive" />
                    Condutas Proibidas
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">É expressamente proibido:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Utilizar robôs, scrapers ou outras ferramentas automatizadas</li>
                      <li>Transmitir vírus, malware ou código malicioso</li>
                      <li>Tentar acessar áreas restritas do sistema</li>
                      <li>Realizar engenharia reversa do site ou serviços</li>
                      <li>Usar informações obtidas para spam ou assédio</li>
                      <li>Violar leis ou regulamentos aplicáveis</li>
                    </ul>
                  </div>
                </div>

                {/* Limitação de Responsabilidade */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                    Limitação de Responsabilidade
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      O site e os serviços são fornecidos "como estão", sem garantias de qualquer tipo. 
                      Não nos responsabilizamos por:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Interrupções temporárias do serviço</li>
                      <li>Decisões tomadas com base nas informações do site</li>
                      <li>Ações de terceiros, incluindo comercializadoras parceiras</li>
                      <li>Perdas indiretas, consequenciais ou punitivas</li>
                      <li>Variações de preços no mercado de energia</li>
                    </ul>
                  </div>
                </div>

                {/* Propriedade Intelectual */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Propriedade Intelectual
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Todo o conteúdo deste site, incluindo textos, gráficos, logos, ícones, imagens, 
                    clipes de áudio e software, é propriedade do Mercado Livre de Energia ou de seus 
                    licenciadores e está protegido pelas leis brasileiras de direitos autorais e 
                    propriedade intelectual. O uso não autorizado pode resultar em penalidades civis e criminais.
                  </p>
                </div>

                {/* Lei Aplicável */}
                <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Gavel className="w-6 h-6 text-primary" />
                    Lei Aplicável e Foro
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
                    Fica eleito o foro da Comarca de João Pessoa, Estado da Paraíba, para dirimir 
                    quaisquer controvérsias decorrentes destes termos, com renúncia expressa a 
                    qualquer outro, por mais privilegiado que seja.
                  </p>
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

export default TermsOfUsePage;
