/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CountdownBanner } from "./components/CountdownBanner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PainVsTransformation } from "./components/PainVsTransformation";
import { PlanningIntroBanner } from "./components/PlanningIntroBanner";
import { GuideModulesSection } from "./components/GuideModulesSection";
import { InteractiveChecklistPreview } from "./components/InteractiveChecklistPreview";
import { SavingsCalculator } from "./components/SavingsCalculator";
import { BonusesSection } from "./components/BonusesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PricingOfferSection } from "./components/PricingOfferSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { MobileStickyCTA } from "./components/MobileStickyCTA";

export default function App() {
  const scrollToOffer = () => {
    const el = document.getElementById("oferta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7FD] text-[#2E1065] selection:bg-[#E9D5FF] selection:text-[#581C87]">
      {/* Top Urgency Banner */}
      <CountdownBanner />

      {/* Main 3-Zone Navigation Header */}
      <Header onScrollToOffer={scrollToOffer} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Dores Específicas vs Transformação */}
        <PainVsTransformation />

        {/* Imagem de Dúvidas e Planejamento da Gravidez */}
        <PlanningIntroBanner />

        {/* Conteúdo Detalhado dos 5 Módulos */}
        <GuideModulesSection />

        {/* Degustação Interativa do Checklist */}
        <InteractiveChecklistPreview />

        {/* Simulador de Economia no Enxoval */}
        <SavingsCalculator />

        {/* 3 Bônus Exclusivos Inclusos */}
        <BonusesSection />

        {/* Prova Social e Depoimentos */}
        <TestimonialsSection />

        {/* Seção Principal de Oferta e Preço */}
        <PricingOfferSection />

        {/* Garantia Incondicional de 7 Dias */}
        <GuaranteeSection />

        {/* Perguntas Frequentes (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA for Mobile Conversion */}
      <MobileStickyCTA />
    </div>
  );
}
