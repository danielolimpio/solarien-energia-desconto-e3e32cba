import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Mercado Livre de Energia</title>
        <meta
          name="description"
          content="Política de Privacidade do Mercado Livre de Energia. Saiba como coletamos, usamos e protegemos suas informações pessoais."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://solarien-energia-desconto.lovable.app/politica-de-privacidade" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Política de Privacidade
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
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                
                {/* Introdução */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-primary" />
                    Introdução
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O Mercado Livre de Energia ("nós", "nosso" ou "empresa") está comprometido em proteger sua privacidade. 
                    Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações 
                    pessoais quando você visita nosso site ou utiliza nossos serviços.
                  </p>
                </div>

                {/* Coleta de Informações */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Database className="w-6 h-6 text-primary" />
                    Informações que Coletamos
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Informações fornecidas por você:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Nome completo e razão social</li>
                      <li>Endereço de e-mail e telefone de contato</li>
                      <li>CNPJ ou CPF</li>
                      <li>Endereço completo da unidade consumidora</li>
                      <li>Informações sobre consumo de energia</li>
                      <li>Cópias de faturas de energia elétrica</li>
                    </ul>
                    
                    <p className="leading-relaxed mt-6">
                      <strong className="text-foreground">Informações coletadas automaticamente:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Endereço IP e informações do navegador</li>
                      <li>Páginas visitadas e tempo de permanência</li>
                      <li>Dados de cookies e tecnologias similares</li>
                      <li>Informações do dispositivo utilizado</li>
                    </ul>
                  </div>
                </div>

                {/* Uso das Informações */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Eye className="w-6 h-6 text-primary" />
                    Como Usamos Suas Informações
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">Utilizamos suas informações para:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fornecer cotações personalizadas de energia</li>
                      <li>Processar solicitações e consultas</li>
                      <li>Comunicar ofertas e novidades relevantes</li>
                      <li>Melhorar nossos serviços e experiência do usuário</li>
                      <li>Cumprir obrigações legais e regulatórias</li>
                      <li>Prevenir fraudes e garantir segurança</li>
                    </ul>
                  </div>
                </div>

                {/* Compartilhamento */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <UserCheck className="w-6 h-6 text-primary" />
                    Compartilhamento de Informações
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Não vendemos suas informações pessoais. Podemos compartilhar dados com:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Comercializadoras de energia parceiras (com seu consentimento)</li>
                      <li>Prestadores de serviços que nos auxiliam nas operações</li>
                      <li>Autoridades legais quando exigido por lei</li>
                      <li>Parceiros de análise para melhorar nossos serviços</li>
                    </ul>
                  </div>
                </div>

                {/* Direitos do Usuário */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Seus Direitos (LGPD)
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Confirmar a existência de tratamento de dados</li>
                      <li>Acessar seus dados pessoais</li>
                      <li>Corrigir dados incompletos ou desatualizados</li>
                      <li>Solicitar anonimização ou exclusão de dados</li>
                      <li>Revogar consentimento a qualquer momento</li>
                      <li>Solicitar portabilidade dos dados</li>
                    </ul>
                  </div>
                </div>

                {/* Segurança */}
                <div className="bg-card rounded-xl p-8 border mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Segurança dos Dados
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações 
                    pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui 
                    criptografia de dados, firewalls, controles de acesso e auditorias regulares de segurança.
                  </p>
                </div>

                {/* Contato */}
                <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    Contato
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato conosco:
                  </p>
                  <div className="mt-4 space-y-2 text-foreground">
                    <p><strong>WhatsApp:</strong> (12) 98251-9116</p>
                    <p><strong>Endereço:</strong> Av. Julia Freire, 1200 - Expedicionários, João Pessoa - PB</p>
                  </div>
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

export default PrivacyPolicyPage;
