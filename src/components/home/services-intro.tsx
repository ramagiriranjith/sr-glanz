export function ServicesIntro() {
  return (
    <section className="bg-[#F9F9F6] py-[80px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col">
            <h2 className="font-[family-name:var(--font-display)] text-[2.5rem] leading-[1.2] font-medium text-[#1A1A1A]">
              Services Offered
            </h2>
            <div className="h-6"></div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1A1A1A] leading-[1.3]">
              Smart Talent. Seamless Tech Execution.
            </h3>
            <div className="h-6"></div>
            <div className="max-w-[480px]">
                <p className="text-base text-[#1A1A1A] leading-[1.6]">
                  At SR Glanz, we help businesses scale with top-tier IT staffing solutions and end-to-end implementation support.
                </p>
            </div>
            <div className="h-6"></div>
            <h3 className="font-[family-name:var(--font-display)] text-xl italic font-medium text-[#1A1A1A] leading-[1.4]">
              We specialize in two core offerings
            </h3>
          </div>

          <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
            <div className="relative w-full h-auto overflow-hidden rounded-2xl shadow-sm">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/684e261bb846b620e2a36a51_making-success-happen-202-13.jpg"
                  alt="SR Glanz team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
