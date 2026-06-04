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
          content="mercado livre de energia, energia solar, economia na conta de luz, energia renovável, Solarien Energy, energia por assinatura, desconto energia, energia verde, energia limpa, energia sustentável" 
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
