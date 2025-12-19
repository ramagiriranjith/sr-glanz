import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "DevOps & CI/CD Engineers", description: "Engineers skilled in Jenkins, GitLab, Docker, Kubernetes, GitHub Actions, and more.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea809da34e77321adacef_Asset_2013-1.png", href: "/technology-services" },
  { title: "Cloud Engineers", description: "AWS, Azure, or Google Cloud Platform certified talent who can architect and optimize your cloud.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7be165a33d44ce3bb49_Asset_2012-2.png", href: "/technology-services" },
  { title: "Salesforce Developers", description: "Experts in Lightning, Apex, Visualforce, Copado, integrations, and automated testing.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7f2165a33d44ce3d142_Asset_2011-3.png", href: "/technology-services" },
  { title: "QA Automation Specialists", description: "Professionals experienced in Selenium, Cypress, JUnit, REST API testing, and automated suites.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7e61d39e856dc083440_Asset_2010-4.png", href: "/technology-services" },
  { title: "AI/ML Developers", description: "Engineers skilled in integrating LLMs, building predictive models using Python, TensorFlow, and OpenAI APIs.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7d0739ec6d3341c1654_Asset_208-5.png", href: "/technology-services" },
  { title: "Full-Stack & Backend Devs", description: "Frontend pros (React, Angular, Vue) and backend experts (Node, Java, Python, .NET).", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/681ea74a773982bda5ba4fd4_Asset_2013-14.png", href: "/technology-services" },
];

export function TechnologyServices() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-[1280px]">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 space-y-4">
          <h2 className="text-[2.5rem] md:text-[40px] leading-[1.2] font-medium font-[family-name:var(--font-display)] text-[#1A1A1A]">
            Technology Services
          </h2>
          <p className="text-base leading-[1.6] text-[#595959] w-full max-w-3xl mx-auto">
            Flexible IT staffing solutions tailored to your stack. Get instant access to top-tier IT talent, including DevOps engineers, cloud architects, AI developers, Salesforce experts, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group flex flex-col pt-8 pb-8 px-8 bg-white border border-[#E0E0E0] rounded-[16px] transition-shadow hover:shadow-[0px_2px_8px_rgba(0,0,0,0.08)] h-full">
              <div className="mb-6">
                  <div className="w-12 h-12 bg-[#febd73] rounded-[8px] flex items-center justify-center">
                  <Image src={service.icon} alt="" width={24} height={24} className="w-6 h-6 object-contain" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#1A1A1A] tracking-tight">{service.title}</h3>
                <p className="text-[15px] md:text-base text-[#595959] leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-8">
                <Link href={service.href} className="inline-flex items-center text-[15px] font-semibold text-[#1A1A1A] hover:underline gap-2">
                  View service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
