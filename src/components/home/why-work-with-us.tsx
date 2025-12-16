import Link from "next/link";
import Image from "next/image";

const features = [
  { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c5982e6_light-bulb-03-2.svg", title: "Industry-Proven Expertise", desc: "in DevOps, CI/CD, Cloud, and Salesforce ecosystems" },
  { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c598385_expand-06-3.svg", title: "Tailored solutions", desc: "Scalable and secure architectures tailored for your goals" },
  { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c598386_pie-chart-03-4.svg", title: "Results-driven approach", desc: "A product mindset, focused on outcomes over outputs" },
  { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c598387_switch-horizontal-01-5.svg", title: "Transparent processes", desc: "A collaborative, always-on support model" },
];

export function WhyWorkWithUs() {
  return (
    <section className="bg-[#fff1de] py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-[1248px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h2 className="font-[family-name:var(--font-display)] text-[2.5rem] leading-[1.2] font-medium text-[#1A1A1A] mb-6">
              Why work with us
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-[#1A1A1A] text-lg leading-relaxed">
                We&apos;re more than just consultants. We&apos;re your extended technology team.
              </p>
                <p className="text-[#1A1A1A] text-lg leading-relaxed">
                  At SR Glanz, we power your digital journey by combining the right people with the right execution. Whether you&apos;re looking to strengthen your tech team or implement a critical IT solution, our services help you move with speed, precision, and confidence.
                </p>
            </div>
            <div>
                <Link href="/contact" className="inline-block bg-[#febd73] text-[#1A1A1A] font-semibold text-base px-8 py-3.5 rounded-full hover:bg-[#fff1de] transition-all duration-300">
                Let&apos;s Build Something Better Together
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-[#E0E0E0] flex flex-col items-start h-full">
                <div className="mb-8 w-12 h-12 flex items-center justify-center">
                  <Image src={feature.icon} alt={feature.title} width={48} height={48} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#1A1A1A] mb-3">{feature.title}</h3>
                <p className="text-[#595959] text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
