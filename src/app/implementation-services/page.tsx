import { NavigationBar } from "@/components/sections/navigation-bar";
import { Footer } from "@/components/sections/footer";
import { ImplementationServices } from "@/components/home/implementation-services";
import { WhyWorkWithUs } from "@/components/home/why-work-with-us";
import { CtaSections } from "@/components/home/cta-sections";
import { TrustedLogos } from "@/components/home/trusted-logos";

export default function ImplementationServicesPage() {
  return (
    <div className="min-h-screen bg-[#fff1de]">
      <NavigationBar />
      
      <main>
        <section className="pt-20 pb-16 px-4 md:px-10 lg:px-20">
          <div className="max-w-[1200px] mx-auto text-center mb-16">
            <h1 className="font-[family-name:var(--font-display)] text-[40px] md:text-[56px] leading-[1.2] font-medium mb-6">
              Implementation Services
            </h1>
            <p className="text-[#1A1A1A] text-[16px] md:text-[18px] leading-[1.6] max-w-4xl mx-auto">
              Execute your IT vision without the execution stress. Beyond staffing, Technolance helps you implement. We deliver complex tech projects on time and on budget, so your teams can focus on what they do best.
            </p>
          </div>
        </section>

        <ImplementationServices />
        <TrustedLogos />
        <WhyWorkWithUs />
        <CtaSections />
      </main>

      <Footer />
    </div>
  );
}
