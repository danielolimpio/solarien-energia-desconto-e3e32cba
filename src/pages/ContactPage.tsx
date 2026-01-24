import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageCircle, Building2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const whatsappNumber = "5512982519116";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Mercado Livre de Energia e como posso economizar na minha conta de luz.")}`;

  return (
    <>
      <Helmet>
        <title>Contato | Mercado Livre de Energia - Fale Conosco</title>
        <meta
          name="description"
          content="Entre em contato com a Solarien Energy para simular sua economia no Mercado Livre de Energia. Atendimento via WhatsApp, telefone e e-mail. Resposta em até 24 horas."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mercadolivredeenergia.org/contato" />
        <meta name="keywords" content="contato mercado livre de energia, fale conosco energia, whatsapp energia, simulação energia, atendimento solarien" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Fale Conosco
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Estamos prontos para ajudar você a economizar até 45% na sua conta de energia. 
                  Entre em contato e descubra como migrar para o Mercado Livre de Energia.
                </p>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Informações de Contato
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      A Solarien Energy é especialista em migração para o Mercado Livre de Energia. 
                      Nossa equipe de consultores está disponível para esclarecer suas dúvidas e 
                      apresentar a melhor solução para reduzir seus custos com energia elétrica.
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Telefone / WhatsApp</h3>
                        <p className="text-muted-foreground">(12) 98251-9116</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Atendimento rápido via WhatsApp
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">E-mail</h3>
                        <p className="text-muted-foreground">contato@solarien.com.br</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Resposta em até 24 horas úteis
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Endereço</h3>
                        <p className="text-muted-foreground">
                          Av. Julia Freire, 1200<br />
                          João Pessoa - PB, 58041-000
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Atendimento presencial com agendamento
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 8h às 18h<br />
                          Sábado: 8h às 12h
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          WhatsApp disponível 24 horas
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">
                        Atendimento Imediato
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Para uma resposta rápida, entre em contato diretamente pelo WhatsApp. 
                      Nossa equipe está pronta para simular sua economia gratuitamente.
                    </p>
                    <Button asChild size="lg" className="w-full">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Falar no WhatsApp Agora
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card rounded-xl border border-border p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Solicite uma Simulação Gratuita
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Preencha o formulário abaixo e nossa equipe entrará em contato para 
                    apresentar uma proposta personalizada de economia de energia.
                  </p>

                  <form 
                    action={whatsappLink}
                    method="GET"
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.target as HTMLFormElement;
                      const formData = new FormData(form);
                      const name = formData.get('name') as string;
                      const email = formData.get('email') as string;
                      const phone = formData.get('phone') as string;
                      const company = formData.get('company') as string;
                      const consumption = formData.get('consumption') as string;
                      const message = formData.get('message') as string;
                      
                      const whatsappMessage = `Olá! Gostaria de solicitar uma simulação de economia.

*Dados do Contato:*
Nome: ${name}
E-mail: ${email}
Telefone: ${phone}
Empresa: ${company || 'Não informado'}
Consumo Mensal: ${consumption || 'Não informado'}

*Mensagem:*
${message || 'Gostaria de saber mais sobre o Mercado Livre de Energia.'}`;
                      
                      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                    }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          maxLength={100}
                          className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                          Telefone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          maxLength={20}
                          className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        maxLength={255}
                        className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          maxLength={100}
                          className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="Nome da empresa"
                        />
                      </div>
                      <div>
                        <label htmlFor="consumption" className="block text-sm font-medium text-foreground mb-1">
                          Consumo Mensal (kWh)
                        </label>
                        <input
                          type="text"
                          id="consumption"
                          name="consumption"
                          maxLength={20}
                          className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="Ex: 10.000 kWh"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={1000}
                        className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                        placeholder="Conte-nos mais sobre sua necessidade de energia..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Enviar Solicitação via WhatsApp
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar, você será redirecionado para o WhatsApp para finalizar o contato.
                      Seus dados são protegidos conforme nossa{" "}
                      <a href="/politica-de-privacidade" className="text-primary hover:underline">
                        Política de Privacidade
                      </a>.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Nossa Localização
                  </h2>
                  <p className="text-muted-foreground">
                    Atendemos todo o Brasil com consultoria especializada em Mercado Livre de Energia
                  </p>
                </div>
                
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8749!2d-34.861!3d-7.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDYnNTQuMCJTIDM0wrA1MSczOS42Ilc!5e0!3m2!1spt-BR!2sbr!4v1705600000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Solarien Energy - João Pessoa, PB"
                    className="w-full"
                  />
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground">Atendimento Nacional</h3>
                    <p className="text-sm text-muted-foreground">
                      Consultoria para empresas em todos os 27 estados brasileiros
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground">Migração Gratuita</h3>
                    <p className="text-sm text-muted-foreground">
                      Todo o processo de portabilidade sem custos para sua empresa
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground">Suporte Dedicado</h3>
                    <p className="text-sm text-muted-foreground">
                      Acompanhamento personalizado durante todo o contrato
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                  Perguntas Frequentes sobre Contato
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      Qual o tempo de resposta para minha solicitação?
                    </h3>
                    <p className="text-muted-foreground">
                      Via WhatsApp, respondemos em minutos durante o horário comercial. 
                      Por e-mail, garantimos resposta em até 24 horas úteis.
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      A simulação de economia é realmente gratuita?
                    </h3>
                    <p className="text-muted-foreground">
                      Sim, completamente gratuita e sem compromisso. Analisamos suas faturas 
                      de energia e apresentamos o potencial de economia sem nenhum custo.
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      Quais documentos preciso enviar para a simulação?
                    </h3>
                    <p className="text-muted-foreground">
                      Para uma análise inicial, basta enviar as últimas 3 faturas de energia 
                      da sua empresa. Nossa equipe fará todo o restante.
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      Vocês atendem em todo o Brasil?
                    </h3>
                    <p className="text-muted-foreground">
                      Sim! Atendemos empresas em todos os 27 estados brasileiros. 
                      Nossa consultoria é 100% digital, permitindo atendimento remoto eficiente.
                    </p>
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

export default ContactPage;
