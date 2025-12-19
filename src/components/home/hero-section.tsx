import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col items-start max-w-[600px] lg:max-w-none animate-fade-in-up">
            <h1 className="font-[family-name:var(--font-display)] text-[2.75rem] leading-[1.05] md:text-[4.25rem] font-semibold text-[#1A1A1A] mb-8 tracking-tight">
              Empowering IT Teams.{" "}
              <em className="italic text-[#8B6B47]">Enabling Seamless Implementation.</em>
            </h1>
            
            <p className="font-[family-name:var(--font-body)] text-[1.0625rem] md:text-[1.1875rem] text-[#4A4A4A] leading-[1.75] mb-8 max-w-[540px] font-light">
              SR Glanz bridges the IT talent gap and powers execution, from
              strategy to delivery. We connect you to expert teams and implement
              solutions that accelerate your digital goals.
            </p>

            <Link
              href="/technology-services"
              className="inline-flex items-center justify-center bg-[#1A1A1A] hover:bg-[#8B6B47] text-white font-medium text-[0.9375rem] md:text-[1.0625rem] py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Experience Our Power-packed Services
            </Link>
          </div>

          <div className="relative w-full animate-fade-in">
            <div className="relative rounded-[24px] overflow-hidden w-full h-full shadow-[0px_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[0px_30px_80px_rgba(0,0,0,0.15)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B6B47]/20 to-transparent z-10 pointer-events-none"></div>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/684e261b001e5f8fdf3bbd73_window-view-of-businesswo-2.jpg"
                alt="Business professionals meeting in modern glass office"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
