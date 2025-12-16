import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#fff1de] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-[1200px]">
        {/* Top Section: Image and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start mb-16 lg:mb-24">
          
          {/* Left Column: Image with Overlay */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-sm group">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/684e261a4b3760036f8e538c_business-people-in-a-conv-12.jpg"
                alt="Professional business team in a convention center"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Overlay per design instructions */}
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-start">
            <h2 className="font-[family-name:var(--font-display)] text-[2.5rem] leading-[1.2] font-medium text-[#1A1A1A] mb-6">
              Who we are
            </h2>
            
            <div className="space-y-6 text-base text-[#1A1A1A] font-body leading-relaxed">
              <p>
                Technolance is your partner in IT success. We provide specialized staffing solutions and comprehensive implementation support to help enterprises build, scale, and sustain cutting-edge technology systems.
              </p>
              <p>
                With deep expertise across DevOps & CI/CD, Cloud Architecture, Salesforce Integration & Administration, SailPoint Implementation, Automation Testing, AI/ML Development, Full-stack & Backend Engineering, Platform Rollouts, and AI-led development, we help businesses solve talent gaps and execute complex rollouts seamlessly.
              </p>
              <p>
                Whether you’re expanding your team or deploying new platforms, our experts deliver measurable impact, faster.
              </p>
              <p className="font-bold">
                In tech, success isn’t just about ideas. It’s about the people who bring them to life.
              </p>
            </div>

            <div className="mt-8">
              <Link 
                href="/about-us" 
                className="inline-flex items-center justify-center px-8 py-3 bg-[#C3E944] hover:bg-[#D4F76F] text-[#1A1A1A] text-sm font-semibold rounded-full transition-all duration-300 transform active:scale-95"
              >
                Meet Technolance
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-transparent lg:pt-4">
          
          {/* Stat Item 1 */}
          <div className="flex flex-col items-start group">
            <div className="font-[family-name:var(--font-display)] text-[3.5rem] lg:text-[4rem] font-semibold text-[#1A1A1A] leading-none mb-3 flex items-start">
              80<span className="text-[2.5rem] ml-0.5 mt-1 align-top">+</span>
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#1A1A1A] mb-2">
              Projects successful
            </h3>
            <p className="text-[#595959] text-sm leading-relaxed">
              Proven track record of achieving business goals.
            </p>
          </div>

          {/* Stat Item 2 */}
          <div className="flex flex-col items-start group">
            <div className="font-[family-name:var(--font-display)] text-[3.5rem] lg:text-[4rem] font-semibold text-[#1A1A1A] leading-none mb-3 flex items-start">
              50<span className="text-[2.5rem] ml-0.5 mt-1 align-top">+</span>
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#1A1A1A] mb-2">
              Clients satisfied
            </h3>
            <p className="text-[#595959] text-sm leading-relaxed">
              Our clients trust us to deliver excellence for their projects.
            </p>
          </div>

          {/* Stat Item 3 */}
          <div className="flex flex-col items-start group">
            <div className="font-[family-name:var(--font-display)] text-[3.5rem] lg:text-[4rem] font-semibold text-[#1A1A1A] leading-none mb-3 flex items-start">
              5<span className="text-[2.5rem] ml-0.5 mt-1 align-top">+</span>
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#1A1A1A] mb-2">
              Awards Won
            </h3>
            <p className="text-[#595959] text-sm leading-relaxed">
              Decades of expertise powering your success.
            </p>
          </div>

          {/* Stat Item 4 */}
          <div className="flex flex-col items-start group">
            <div className="font-[family-name:var(--font-display)] text-[3.5rem] lg:text-[4rem] font-semibold text-[#1A1A1A] leading-none mb-3 flex items-start">
              3
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#1A1A1A] mb-2">
              Countries Covered
            </h3>
            <p className="text-[#595959] text-sm leading-relaxed">
              Broad experience across diverse markets.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}