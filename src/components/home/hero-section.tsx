import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-[#fff1de] py-16 md:py-20 lg:py-[80px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start max-w-[600px] lg:max-w-none">
            <h1 className="font-[family-name:var(--font-display)] text-[2.5rem] leading-[1.1] md:text-[3.75rem] font-medium text-[#1A1A1A] mb-6">
              Empowering IT Teams.{" "}
              <em className="italic">Enabling Seamless Implementation.</em>
            </h1>
            
              <p className="font-[family-name:var(--font-body)] text-base md:text-[1.125rem] text-[#595959] leading-relaxed mb-6 max-w-[540px]">
                SR Glanz bridges the IT talent gap and powers execution, from
                strategy to delivery. We connect you to expert teams and implement
                solutions that accelerate your digital goals.
              </p>

              <Link
                href="/technology-services"
                className="inline-flex items-center justify-center bg-[#febd73] hover:bg-[#fff1de] active:scale-95 text-[#1A1A1A] font-semibold text-[0.875rem] md:text-[1rem] py-3 px-8 rounded-[24px] transition-all duration-200"
              >
              Experience Our Power-packed Services
            </Link>
          </div>

          <div className="relative w-full">
            <div className="relative rounded-[16px] overflow-hidden w-full h-full shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none"></div>
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
