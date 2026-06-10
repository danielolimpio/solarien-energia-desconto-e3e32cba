import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CoverageSection from "@/components/sections/CoverageSection";
import SolarienSection from "@/components/sections/SolarienSection";
import ContentSection from "@/components/sections/ContentSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mercado Livre de Energia | Economize até 45%</title>
        <meta 
          name="description" 
          content="Economize até 45% na conta de energia com o Mercado Livre de Energia. Energia renovável para residências, comércios e indústrias. Simulação grátis!" 
        />
        <meta 
          name="keywords" 
          content="mercado livre de energia, mercado livre de energia para empresas, mercado livre de energia para indústrias, mercado livre de energia para comércio, mercado livre de energia elétrica, ambiente de contratação livre, acl energia, acr mercado regulado, migração para mercado livre de energia, como migrar para o mercado livre de energia, como entrar no mercado livre de energia, vantagens do mercado livre de energia, desvantagens do mercado livre de energia, regras do mercado livre de energia, consumidor livre de energia, consumidor especial de energia, consumidor cativo e livre, energia incentivada, energia convencional, comercializadora de energia, comercializador varejista de energia, gestão de energia para empresas, consultoria em mercado livre de energia, contrato de compra de energia, ppa contrato de energia, ccee câmara de comercialização, aneel mercado livre, abertura do mercado livre de energia, nova lei do mercado livre de energia 2024, mercado livre de energia 2025, mercado livre de energia 2026, tarifa do mercado livre de energia, preço da energia no mercado livre, pld preço de liquidação das diferenças, leilão de energia, energia por assinatura, energia por assinatura para empresas, energia por assinatura sem investimento, como economizar energia elétrica na empresa, como reduzir conta de luz da empresa, como reduzir custos com energia elétrica, redução de custos com energia para indústria, redução de custos com energia para comércio, redução da conta de luz empresarial, economia de até 35 na conta de luz, economia de até 40 na conta de luz, economia de até 45 na conta de luz, desconto na conta de luz para empresas, desconto de energia para empresas, economia de energia para empresas, economia de energia para indústrias, economia de energia para comércio varejista, economia de energia para shoppings, economia de energia para hospitais, economia de energia para hotéis, economia de energia para supermercados, economia de energia para condomínios comerciais, economia de energia para postos de combustível, economia de energia para padarias industriais, economia de energia para frigoríficos, economia de energia para laticínios, como diminuir gastos com energia elétrica, auditoria de conta de luz empresarial, diagnóstico de eficiência energética, eficiência energética industrial, eficiência energética para empresas, gestão de demanda de energia, redução de demanda contratada, otimização de tarifa de energia, enquadramento tarifário industrial, tarifa azul ou verde indústria, tarifa branca empresa, horário de ponta e fora de ponta, fator de potência indústria, multa por baixo fator de potência, energia limpa para empresas, energia renovável para empresas, energia renovável para indústrias, energia sustentável para empresas, energia eólica para empresas, energia hidrelétrica incentivada, energia de biomassa para indústria, energia incentivada 50, energia incentivada 100, energia 100% renovável corporativa, certificado de energia renovável, i-rec certificado, descarbonização da empresa, esg e energia limpa, metas esg energia renovável, pegada de carbono empresarial, redução de emissões de co2 empresa, neutralidade de carbono empresa, selo de energia limpa, matriz energética limpa brasil, transição energética empresarial, mercado livre de energia para indústria têxtil, mercado livre de energia para indústria metalúrgica, mercado livre de energia para indústria química, mercado livre de energia para indústria alimentícia, mercado livre de energia para indústria farmacêutica, mercado livre de energia para indústria automotiva, mercado livre de energia para indústria de plásticos, mercado livre de energia para indústria de papel e celulose, mercado livre de energia para indústria cerâmica, mercado livre de energia para indústria moveleira, mercado livre de energia para indústria de bebidas, mercado livre de energia para indústria de embalagens, mercado livre de energia para mineração, mercado livre de energia para agroindústria, mercado livre de energia para frigorífico, mercado livre de energia para laticínio, mercado livre de energia para cervejaria, mercado livre de energia para torrefadora de café, mercado livre de energia para shopping center, mercado livre de energia para hospital, mercado livre de energia para clínica médica, mercado livre de energia para rede de farmácias, mercado livre de energia para supermercado, mercado livre de energia para atacadista, mercado livre de energia para hotel resort, mercado livre de energia para rede hoteleira, mercado livre de energia para pousada, mercado livre de energia para posto de combustível, mercado livre de energia para data center, mercado livre de energia para logística e armazém, mercado livre de energia para distribuidora, mercado livre de energia para gráfica, mercado livre de energia para tinturaria industrial, mercado livre de energia para lavanderia industrial, mercado livre de energia para metalmecânica, mercado livre de energia para siderúrgica, mercado livre de energia para cimenteira, mercado livre de energia para mineradora, mercado livre de energia para empresa de telecomunicações, mercado livre de energia para operadora logística, economia de energia para indústria têxtil, economia de energia para indústria metalúrgica, economia de energia para indústria química, economia de energia para indústria alimentícia, economia de energia para indústria farmacêutica, economia de energia para indústria automotiva, economia de energia para indústria de plásticos, economia de energia para indústria de papel e celulose, economia de energia para indústria cerâmica, economia de energia para indústria moveleira, economia de energia para indústria de bebidas, economia de energia para indústria de embalagens, economia de energia para mineração, economia de energia para agroindústria, economia de energia para frigorífico, economia de energia para laticínio, economia de energia para cervejaria, economia de energia para torrefadora de café, economia de energia para shopping center, economia de energia para hospital, economia de energia para clínica médica, economia de energia para rede de farmácias, economia de energia para supermercado, economia de energia para atacadista, economia de energia para hotel resort, economia de energia para rede hoteleira, economia de energia para pousada, economia de energia para posto de combustível, economia de energia para data center, economia de energia para logística e armazém, economia de energia para distribuidora, economia de energia para gráfica, economia de energia para tinturaria industrial, economia de energia para lavanderia industrial, economia de energia para metalmecânica, economia de energia para siderúrgica, economia de energia para cimenteira, economia de energia para mineradora, economia de energia para empresa de telecomunicações, economia de energia para operadora logística, redução de conta de luz para indústria têxtil, redução de conta de luz para indústria metalúrgica, redução de conta de luz para indústria química, redução de conta de luz para indústria alimentícia, redução de conta de luz para indústria farmacêutica, redução de conta de luz para indústria automotiva, redução de conta de luz para indústria de plásticos, redução de conta de luz para indústria de papel e celulose, redução de conta de luz para indústria cerâmica, redução de conta de luz para indústria moveleira, redução de conta de luz para indústria de bebidas, redução de conta de luz para indústria de embalagens, redução de conta de luz para mineração, redução de conta de luz para agroindústria, redução de conta de luz para frigorífico, redução de conta de luz para laticínio, redução de conta de luz para cervejaria, redução de conta de luz para torrefadora de café, redução de conta de luz para shopping center, redução de conta de luz para hospital, redução de conta de luz para clínica médica, redução de conta de luz para rede de farmácias, redução de conta de luz para supermercado, redução de conta de luz para atacadista, redução de conta de luz para hotel resort, redução de conta de luz para rede hoteleira, redução de conta de luz para pousada, redução de conta de luz para posto de combustível, redução de conta de luz para data center, redução de conta de luz para logística e armazém, redução de conta de luz para distribuidora, redução de conta de luz para gráfica, redução de conta de luz para tinturaria industrial, redução de conta de luz para lavanderia industrial, redução de conta de luz para metalmecânica, redução de conta de luz para siderúrgica, redução de conta de luz para cimenteira, redução de conta de luz para mineradora, redução de conta de luz para empresa de telecomunicações, redução de conta de luz para operadora logística, o que é mercado livre de energia, como funciona o mercado livre de energia, quem pode aderir ao mercado livre de energia, quanto custa migrar para o mercado livre de energia, vale a pena migrar para o mercado livre de energia, qual a economia real do mercado livre de energia, quanto tempo leva a migração para o mercado livre, preciso trocar de distribuidora no mercado livre, mercado livre de energia é seguro, mercado livre de energia tem multa, como sair do mercado livre de energia, diferença entre mercado livre e mercado cativo, quem regula o mercado livre de energia, quais empresas podem entrar no mercado livre, consumo mínimo para mercado livre de energia, 500 kw mercado livre de energia, demanda mínima 500 kw mercado livre, mercado livre de energia alta tensão, mercado livre de energia baixa tensão, grupo a mercado livre de energia, grupo b mercado livre de energia, subgrupo a4 mercado livre, subgrupo a3 mercado livre, modelagem comercial ccee, adesão ccee como fazer, representante comercial ccee, encargos setoriais energia, como migrar da enel para o mercado livre, como migrar da cpfl para o mercado livre, como migrar da light para o mercado livre, como migrar da cemig para o mercado livre, como migrar da copel para o mercado livre, como migrar da celesc para o mercado livre, como migrar da equatorial para o mercado livre, como migrar da neoenergia para o mercado livre, como migrar da coelba para o mercado livre, como migrar da celpe para o mercado livre, como migrar da cosern para o mercado livre, como migrar da energisa para o mercado livre, como migrar da edp para o mercado livre, como migrar da elektro para o mercado livre, como migrar da eletropaulo para o mercado livre, como migrar da escelsa para o mercado livre, como migrar da amazonas energia para o mercado livre, como migrar da ceee para o mercado livre, como migrar da rge para o mercado livre, como migrar da cea para o mercado livre, como migrar da ceam para o mercado livre, como migrar da ceron para o mercado livre, como migrar da boa vista energia para o mercado livre, alternativa à enel mercado livre de energia, alternativa à cpfl mercado livre de energia, alternativa à light mercado livre de energia, alternativa à cemig mercado livre de energia, alternativa à copel mercado livre de energia, alternativa à celesc mercado livre de energia, alternativa à equatorial mercado livre de energia, alternativa à neoenergia mercado livre de energia, alternativa à coelba mercado livre de energia, alternativa à celpe mercado livre de energia, alternativa à cosern mercado livre de energia, alternativa à energisa mercado livre de energia, alternativa à edp mercado livre de energia, alternativa à elektro mercado livre de energia, alternativa à eletropaulo mercado livre de energia, alternativa à escelsa mercado livre de energia, alternativa à amazonas energia mercado livre de energia, alternativa à ceee mercado livre de energia, alternativa à rge mercado livre de energia, alternativa à cea mercado livre de energia, alternativa à ceam mercado livre de energia, alternativa à ceron mercado livre de energia, alternativa à boa vista energia mercado livre de energia, mercado livre de energia no sul, mercado livre de energia no sudeste, mercado livre de energia no nordeste, mercado livre de energia no norte, mercado livre de energia no centro-oeste, mercado livre de energia em são paulo, mercado livre de energia em rio de janeiro, mercado livre de energia em minas gerais, mercado livre de energia em bahia, mercado livre de energia em paraná, mercado livre de energia em rio grande do sul, mercado livre de energia em santa catarina, mercado livre de energia em pernambuco, mercado livre de energia em ceará, mercado livre de energia em goiás, mercado livre de energia em pará, mercado livre de energia em espírito santo, mercado livre de energia em distrito federal, mercado livre de energia em mato grosso, mercado livre de energia em mato grosso do sul, mercado livre de energia em maranhão, mercado livre de energia em rio grande do norte, mercado livre de energia em paraíba, mercado livre de energia em alagoas, mercado livre de energia em sergipe, mercado livre de energia em piauí, mercado livre de energia em amazonas, mercado livre de energia em rondônia, mercado livre de energia em acre, mercado livre de energia em tocantins, mercado livre de energia em roraima, mercado livre de energia em amapá, economia de energia para empresas em são paulo, economia de energia para empresas em rio de janeiro, economia de energia para empresas em minas gerais, economia de energia para empresas em bahia, economia de energia para empresas em paraná, economia de energia para empresas em rio grande do sul, economia de energia para empresas em santa catarina, economia de energia para empresas em pernambuco, economia de energia para empresas em ceará, economia de energia para empresas em goiás, economia de energia para empresas em pará, economia de energia para empresas em espírito santo, economia de energia para empresas em distrito federal, economia de energia para empresas em mato grosso, economia de energia para empresas em mato grosso do sul, economia de energia para empresas em maranhão, economia de energia para empresas em rio grande do norte, economia de energia para empresas em paraíba, economia de energia para empresas em alagoas, economia de energia para empresas em sergipe, economia de energia para empresas em piauí, economia de energia para empresas em amazonas, economia de energia para empresas em rondônia, economia de energia para empresas em acre, economia de energia para empresas em tocantins, economia de energia para empresas em roraima, economia de energia para empresas em amapá, documentos para migrar mercado livre de energia, última conta de luz para migração, análise gratuita da conta de luz, simulação gratuita mercado livre de energia, simulador de economia mercado livre, calculadora de economia energia empresas, proposta de migração mercado livre, consultoria gratuita mercado livre de energia, passo a passo migração mercado livre, checklist migração mercado livre de energia, prazo de adesão mercado livre, denúncia de contrato com distribuidora, denúncia cusd ccd, cusd contrato uso sistema distribuição, ccd contrato comercialização distribuição, tusd e te no mercado livre, bandeira tarifária mercado livre, previsibilidade de custo de energia, trava de preço de energia longo prazo, contrato de longo prazo energia, contrato flexível de energia, contrato take or pay energia, compra coletiva de energia, pool de energia para pequenas empresas, varejista de energia para pequenas empresas" 
        />
        <meta name="author" content="Mercado Livre de Energia" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mercadolivredeenergia.org" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mercado Livre de Energia | Economize até 45% na Conta de Luz" />
        <meta property="og:description" content="Descubra como economizar até 45% na conta de energia com o Mercado Livre de Energia. Energia renovável para todo Brasil." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mercadolivredeenergia.org" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mercado Livre de Energia | Economize até 45% na Conta de Luz" />
        <meta name="twitter:description" content="Descubra como economizar até 45% na conta de energia com o Mercado Livre de Energia." />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mercado Livre de Energia",
            "description": "Plataforma de Mercado Livre de Energia oferecendo economia de até 45% na conta de luz com energia renovável para todo Brasil.",
            "url": "https://mercadolivredeenergia.org",
            "telephone": "+55-12-98251-9116",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Julia Freire, 1200",
              "addressLocality": "João Pessoa",
              "addressRegion": "PB",
              "postalCode": "58041-000",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -7.115,
              "longitude": -34.861
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Brasil"
            },
            "serviceType": ["Mercado Livre de Energia", "Energia por Assinatura", "Gestão de Energia", "Consultoria de Energia"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <HowItWorksSection />
          <BenefitsSection />
          <CoverageSection />
          <SolarienSection />
          <ContentSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
