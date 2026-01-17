import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie, Settings, BarChart3, Target, Shield, ToggleLeft } from "lucide-react";

const CookiePolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | Mercado Livre de Energia</title>
        <meta
          name="description"
          content="Política de Cookies do Mercado Livre de Energia. Entenda como utilizamos cookies e tecnologias similares em nosso site."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://solarien-energia-desconto.lovable.app/politica-de-cookies" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Cookie className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Política de Cookies
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
                
                {/* O que são Cookies */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Cookie className="w-6 h-6 text-primary" />
                    O que são Cookies?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo 
                    (computador, tablet ou smartphone) quando você visita nosso site. Eles nos permitem 
                    reconhecer seu navegador e capturar certas informações para melhorar sua experiência 
                    de navegação. Os cookies não causam danos ao seu dispositivo e não contêm vírus.
                  </p>
                </div>

                {/* Tipos de Cookies */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Tipos de Cookies que Utilizamos
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Essenciais */}
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Settings className="w-5 h-5 text-primary" />
                        Cookies Essenciais
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        Necessários para o funcionamento básico do site. Permitem navegação e uso de 
                        recursos essenciais como áreas seguras e formulários. Sem esses cookies, o site 
                        não funcionaria corretamente.
                      </p>
                    </div>

                    {/* Analíticos */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                        Cookies Analíticos
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        Nos ajudam a entender como os visitantes interagem com o site, coletando informações 
                        anônimas. Usamos esses dados para melhorar continuamente nosso site e serviços.
                      </p>
                    </div>

                    {/* Marketing */}
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Target className="w-5 h-5 text-purple-500" />
                        Cookies de Marketing
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        Utilizados para rastrear visitantes em diferentes sites. A intenção é exibir anúncios 
                        relevantes e envolventes para o usuário, tornando-os mais valiosos para editores e 
                        anunciantes terceiros.
                      </p>
                    </div>

                    {/* Funcionalidade */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-500" />
                        Cookies de Funcionalidade
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        Permitem que o site lembre suas escolhas (como idioma ou região) e forneça recursos 
                        aprimorados e mais personalizados. Também podem ser usados para lembrar alterações 
                        feitas no tamanho do texto e outras preferências.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cookies de Terceiros */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Cookies de Terceiros
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Utilizamos serviços de terceiros que podem definir seus próprios cookies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Google Analytics:</strong> Análise de tráfego e comportamento do usuário</li>
                      <li><strong>Google Ads:</strong> Publicidade e remarketing</li>
                      <li><strong>Facebook Pixel:</strong> Análise e publicidade em redes sociais</li>
                      <li><strong>WhatsApp:</strong> Integração com chat de atendimento</li>
                    </ul>
                  </div>
                </div>

                {/* Gerenciar Cookies */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <ToggleLeft className="w-6 h-6 text-primary" />
                    Como Gerenciar Cookies
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Você pode controlar e/ou excluir cookies conforme desejar. A maioria dos navegadores 
                      permite que você:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Veja quais cookies estão armazenados e os delete individualmente</li>
                      <li>Bloqueie cookies de terceiros</li>
                      <li>Bloqueie cookies de sites específicos</li>
                      <li>Bloqueie todos os cookies</li>
                      <li>Delete todos os cookies ao fechar o navegador</li>
                    </ul>
                    <p className="mt-4 leading-relaxed">
                      <strong className="text-foreground">Importante:</strong> Se você optar por desativar cookies, 
                      algumas funcionalidades do site podem não funcionar corretamente.
                    </p>
                  </div>
                </div>

                {/* Configurações do Navegador */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Configurações por Navegador
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a 
                      href="https://support.google.com/chrome/answer/95647" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors"
                    >
                      <span className="font-semibold text-foreground">Google Chrome</span>
                      <p className="text-sm text-muted-foreground">Gerenciar cookies no Chrome</p>
                    </a>
                    <a 
                      href="https://support.mozilla.org/pt-BR/kb/cookies-informacoes-sites-armazenam-no-computador" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors"
                    >
                      <span className="font-semibold text-foreground">Mozilla Firefox</span>
                      <p className="text-sm text-muted-foreground">Gerenciar cookies no Firefox</p>
                    </a>
                    <a 
                      href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors"
                    >
                      <span className="font-semibold text-foreground">Safari</span>
                      <p className="text-sm text-muted-foreground">Gerenciar cookies no Safari</p>
                    </a>
                    <a 
                      href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors"
                    >
                      <span className="font-semibold text-foreground">Microsoft Edge</span>
                      <p className="text-sm text-muted-foreground">Gerenciar cookies no Edge</p>
                    </a>
                  </div>
                </div>

                {/* Contato */}
                <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Dúvidas sobre Cookies?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Se você tiver dúvidas sobre como usamos cookies ou qualquer outra questão relacionada 
                    à privacidade, entre em contato conosco pelo WhatsApp: <strong className="text-foreground">(12) 98251-9116</strong>
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

export default CookiePolicyPage;
