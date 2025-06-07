
import { HeroSection } from "@/components/HeroSection";
import { WhyARSection } from "@/components/WhyARSection";
import { ServicesGallery } from "@/components/ServicesGallery";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DroneAdDemo } from "@/components/DroneAdDemo";
import { ARCardDemo } from "@/components/ARCardDemo";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { SmartIndiaSection } from "@/components/SmartIndiaSection";
import { FinalCTASection } from "@/components/FinalCTASection";


const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-space overflow-x-hidden">
      <HeroSection />
      <WhyARSection />
      <ServicesGallery />
      <HowItWorksSection />
      <DroneAdDemo />
      <ARCardDemo />
      <AnalyticsSection />
      <SmartIndiaSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
