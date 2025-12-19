export default function WhyWorkWithUsSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-[1248px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h2 className="font-display text-[2.5rem] leading-[1.2] font-medium text-[#1A1A1A] mb-6">
              Why work with us
            </h2>
            <div className="space-y-6 mb-10">
              <p className="font-body text-[#1A1A1A] text-lg leading-relaxed">
                We’re more than just consultants. We’re your extended technology
                team.
              </p>
              <p className="font-body text-[#1A1A1A] text-lg leading-relaxed">
                At Technolance, we power your digital journey by combining the
                right people with the right execution. Whether you&apos;re
                looking to strengthen your tech team or implement a critical IT
                solution, our services help you move with speed, precision, and
                confidence.
              </p>
            </div>
            <div>
              <a
                href="/contact"
                className="inline-block bg-[#C3E944] text-[#1A1A1A] font-semibold text-base px-8 py-3.5 rounded-full hover:bg-[#d4f76f] transition-all duration-300"
              >
                Let’s Build Something Better Together
              </a>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-[#E0E0E0] flex flex-col items-start h-full">
              <div className="mb-8 w-12 h-12 flex items-center justify-center">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c5982e6_light-bulb-03-2.svg"
                  alt="Industry-Proven Expertise"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-3">
                Industry-Proven Expertise
              </h3>
              <p className="font-body text-[#595959] text-base leading-relaxed">
                in DevOps, CI/CD, Cloud, and Salesforce ecosystems
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-[#E0E0E0] flex flex-col items-start h-full">
              <div className="mb-8 w-12 h-12 flex items-center justify-center">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c598385_expand-06-3.svg"
                  alt="Tailored solutions"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-3">
                Tailored solutions
              </h3>
              <p className="font-body text-[#595959] text-base leading-relaxed">
                Scalable and secure architectures tailored for your goals
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-[#E0E0E0] flex flex-col items-start h-full">
              <div className="mb-8 w-12 h-12 flex items-center justify-center">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c598386_pie-chart-03-4.svg"
                  alt="Results-driven approach"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-3">
                Results-driven approach
              </h3>
              <p className="font-body text-[#595959] text-base leading-relaxed">
                A product mindset, focused on outcomes over outputs
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 border border-[#E0E0E0] flex flex-col items-start h-full">
              <div className="mb-8 w-12 h-12 flex items-center justify-center">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c598387_switch-horizontal-01-5.svg"
                  alt="Transparent processes"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-3">
                Transparent processes
              </h3>
              <p className="font-body text-[#595959] text-base leading-relaxed">
                A collaborative, always-on support model
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}