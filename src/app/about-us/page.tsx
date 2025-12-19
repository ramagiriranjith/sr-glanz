import { NavigationBar } from "@/components/sections/navigation-bar";
import { Footer } from "@/components/sections/footer";
import { WhoWeAre } from "@/components/home/who-we-are";
import { WhyWorkWithUs } from "@/components/home/why-work-with-us";
import { WhyTechnolance } from "@/components/home/why-technolance";
import { CtaSections } from "@/components/home/cta-sections";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <main>
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 px-6 overflow-hidden">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="font-[family-name:var(--font-display)] text-5xl lg:text-[3.75rem] leading-[1.1] font-medium text-[#1A1A1A] mb-8">
                Empowering IT Teams. <br />
                <em className="italic">Enabling Seamless Implementation.</em>
              </h1>
              <p className="text-lg text-[#595959] leading-relaxed mb-10 max-w-lg">
                Technolance bridges the IT talent gap and powers execution, from strategy to delivery. We connect you to expert teams and implement solutions that accelerate your digital goals.
              </p>
              <div>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#C3E944] text-[#1A1A1A] rounded-full font-semibold text-base hover:bg-[#d4f76f] transition-all transform hover:-translate-y-1 shadow-sm">
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/684e261b001e5f8fdf3bbd73_window-view-of-businesswo-2.jpg"
                  alt="Technolance Office View"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/10 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        <WhoWeAre />
        <WhyWorkWithUs />
        <WhyTechnolance />
        <CtaSections />
      </main>

      <Footer />
    </div>
  );
}
