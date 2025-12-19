import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  { title: "DevOps Toolchain Setup", description: "We implement end-to-end CI/CD pipelines, monitoring tools, and IaC frameworks.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7a81ccb5540ea6dbd2f_Asset_209-6.png" },
  { title: "Cloud Infrastructure Provisioning", description: "From network design to HA configuration, we deploy secure, scalable cloud environments.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7934d1e2dd7bd71c40c_Asset_207-7.png" },
  { title: "Salesforce Configuration & Deployment", description: "We set up and customize Salesforce platforms, automate workflows, and integrate tools.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7854f9fb397c0ae6f13_Asset_206-8.png" },
  { title: "CI/CD Deployment & Automation", description: "From source control to automated testing and blue/green releases, we set up smart pipelines.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7934d1e2dd7bd71c40c_Asset_207-7.png" },
  { title: "Post-Implementation Support", description: "We stay with you after go-live with bug fixes, performance checks, and adoption support.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7a81ccb5540ea6dbd2f_Asset_209-6.png" },
];

export function ImplementationServices() {
  return (
    <section className="bg-white py-20 text-[#1A1A1A]">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-[1240px]">
        <div className="text-center mb-16 px-4">
          <h2 className="text-[#1A1A1A] mb-6 font-[family-name:var(--font-display)] text-[40px] font-medium leading-[1.2]">
            Implementation Services
          </h2>
          <div className="max-w-[800px] mx-auto">
              <p className="text-[#1A1A1A] text-[16px] leading-[1.6]">
                Execute your IT vision without the execution stress. Beyond staffing, SR Glanz helps you implement. We deliver complex tech projects on time and on budget.
              </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-white border border-[#E0E0E0] rounded-xl p-8 flex flex-col h-full hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#febd73] rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                <Image src={service.icon} alt={service.title} width={24} height={24} className="w-6 h-6 object-contain opacity-80" />
              </div>
              <div className="flex-grow">
                <h3 className="text-[#1A1A1A] mb-4 text-[24px] font-semibold font-[family-name:var(--font-display)] leading-[1.3]">{service.title}</h3>
                <p className="text-[#595959] text-[16px] leading-[1.6] mb-8">{service.description}</p>
              </div>
              <div className="mt-auto">
                <Link href="/implementation-services" className="inline-flex items-center text-[15px] font-semibold text-[#1A1A1A] hover:opacity-70 transition-opacity">
                  View service <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
