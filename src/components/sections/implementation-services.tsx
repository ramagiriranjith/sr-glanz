import Image from 'next/image';
import Link from 'next/link';

const ASSETS = {
  arrow: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c5982ea_arrow-narrow-right-6.svg",
  icon1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7854f9fb397c0ae6f13_Asset_206-8.png",
  icon2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7934d1e2dd7bd71c40c_Asset_207-7.png",
  icon3: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7a81ccb5540ea6dbd2f_Asset_209-6.png",
};

const services = [
  {
    title: "DevOps Toolchain Setup",
    description: "We implement end-to-end CI/CD pipelines, monitoring tools, and IaC frameworks tailored to your ecosystem.",
    icon: ASSETS.icon1,
    href: "#",
  },
  {
    title: "Cloud Infrastructure Provisioning",
    description: "From network design to HA configuration, we deploy secure, scalable cloud environments across AWS, Azure, and GCP.",
    icon: ASSETS.icon2,
    href: "#",
  },
  {
    title: "Salesforce Configuration & Deployment",
    description: "We set up and customize Salesforce platforms, automate workflows, integrate third-party tools, and prepare your teams for success.",
    icon: ASSETS.icon3,
    href: "#",
  },
  {
    title: "CI/CD Deployment & Automation",
    description: "From source control to automated testing and blue/green releases, we set up smart pipelines that move code safely to production.",
    icon: ASSETS.icon2,
    href: "#",
  },
  {
    title: "Post-Implementation Support (Hypercare)",
    description: "We stay with you after go-live with bug fixes, performance checks, and adoption support until everything runs smoothly.",
    icon: ASSETS.icon1,
    href: "#",
  },
];

const ImplementationServices = () => {
  return (
    <section className="bg-white py-20 text-[#1A1A1A]">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-[1240px]">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-[#1A1A1A] mb-6 font-display text-[40px] font-medium leading-[1.2]">
            Implementation Services
          </h2>
          <div className="max-w-[800px] mx-auto">
            <p className="text-[#1A1A1A] text-[16px] leading-[1.6]">
              Execute your IT vision without the execution stress.
              <br className="hidden md:block" />
              Beyond staffing, Technolance helps you implement. We deliver complex tech projects on time and on budget, so your teams can focus on what they do best.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-[#E0E0E0] rounded-xl p-8 flex flex-col h-full hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-[#C3E944] rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain opacity-80"
                />
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="text-[#1A1A1A] mb-4 text-[24px] font-semibold font-display leading-[1.3]">
                  {service.title}
                </h3>
                <p className="text-[#595959] text-[16px] leading-[1.6] mb-8 font-body">
                  {service.description}
                </p>
              </div>

              {/* Link */}
              <div className="mt-auto">
                <Link 
                  href={service.href} 
                  className="inline-flex items-center text-[15px] font-semibold text-[#1A1A1A] hover:opacity-70 transition-opacity"
                >
                  View service
                  <Image
                    src={ASSETS.arrow}
                    alt=""
                    width={16}
                    height={16}
                    className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationServices;