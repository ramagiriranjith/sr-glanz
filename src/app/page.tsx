import { NavigationBar } from "@/components/sections/navigation-bar";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/home/hero-section";
import { TrustedLogos } from "@/components/home/trusted-logos";
import { WhoWeAre } from "@/components/home/who-we-are";
import { WhyWorkWithUs } from "@/components/home/why-work-with-us";
import { ServicesIntro } from "@/components/home/services-intro";
import { TechnologyServices } from "@/components/home/technology-services";
import { ImplementationServices } from "@/components/home/implementation-services";
import { WhyTechnolance } from "@/components/home/why-technolance";
import { InsightsInnovation } from "@/components/home/insights-innovation";
import { CtaSections } from "@/components/home/cta-sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff1de]">
      <NavigationBar />
      <main>
        <HeroSection />
        <TrustedLogos />
        <WhoWeAre />
        <WhyWorkWithUs />
        <ServicesIntro />
        <TechnologyServices />
        <ImplementationServices />
        <WhyTechnolance />
        <InsightsInnovation />
        <CtaSections />
      </main>
      <Footer />
    </div>
  );
}
