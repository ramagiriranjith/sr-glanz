import { NavigationBar } from "@/components/sections/navigation-bar";
import { Footer } from "@/components/sections/footer";
import { TechnologyServices } from "@/components/home/technology-services";
import { WhyWorkWithUs } from "@/components/home/why-work-with-us";
import { CtaSections } from "@/components/home/cta-sections";
import { TrustedLogos } from "@/components/home/trusted-logos";

export default function TechnologyServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <main>
        <section className="pt-20 pb-16 px-4 md:px-10 lg:px-20">
          <div className="max-w-[1200px] mx-auto text-center mb-16">
            <h1 className="font-[family-name:var(--font-display)] text-[40px] md:text-[56px] leading-[1.2] font-medium mb-6">
              Technology Services
            </h1>
            <p className="text-[#1A1A1A] text-[16px] md:text-[18px] leading-[1.6] max-w-4xl mx-auto">
              Flexible IT staffing solutions tailored to your stack. Get instant access to top-tier IT talent, including DevOps engineers, cloud architects, AI developers, Salesforce experts, DevSecOps, Automation Engineers and more. Our handpicked experts are ready to plug into your teams.
            </p>
          </div>
        </section>

        <TechnologyServices />
        <TrustedLogos />
        <WhyWorkWithUs />
        <CtaSections />
      </main>

      <Footer />
    </div>
  );
}
