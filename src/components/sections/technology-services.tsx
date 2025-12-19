import Image from "next/image";
import Link from "next/link";

const SERVICE_ASSETS = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea809da34e77321adacef_Asset_2013-1.png", // DevOps
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7be165a33d44ce3bb49_Asset_2012-2.png", // Cloud
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7f2165a33d44ce3d142_Asset_2011-3.png", // Salesforce
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7e61d39e856dc083440_Asset_2010-4.png", // QA
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/icons/681ea7d0739ec6d3341c1654_Asset_208-5.png", // AI/ML
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/681ea74a773982bda5ba4fd4_Asset_2013-14.png", // Full-Stack
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c5982ea_arrow-narrow-right-6.svg" // Arrow
];

const services = [
  {
    title: "DevOps & CI/CD Engineers",
    description: "Engineers skilled in Jenkins, GitLab, Docker, Kubernetes, GitHub Actions, and more are ready to streamline your build-release workflows.",
    icon: SERVICE_ASSETS[0],
    href: "/services/devops-ci-cd-engineers"
  },
  {
    title: "Cloud Engineers",
    description: "AWS, Azure, or Google Cloud Platform certified talent who can architect, deploy, and optimize your cloud environment.",
    icon: SERVICE_ASSETS[1],
    href: "/services/cloud-engineers"
  },
  {
    title: "Salesforce Developers",
    description: "Experts in Lightning, Apex, Visualforce, Copado, integrations, and automated testing are available on demand.",
    icon: SERVICE_ASSETS[2],
    href: "/services/salesforce-developers"
  },
  {
    title: "QA Automation Specialists",
    description: "Professionals experienced in Selenium, Cypress, JUnit, REST API testing, and automated regression suites are ready to power your team.",
    icon: SERVICE_ASSETS[3],
    href: "/services/qa-automation-specialists"
  },
  {
    title: "AI/ML Developers",
    description: "Engineers skilled in integrating LLMs, building predictive models, and embedding AI in applications using Python, TensorFlow, and OpenAI APIs.",
    icon: SERVICE_ASSETS[4],
    href: "/services/ai-ml-developers"
  },
  {
    title: "Full-Stack & Backend Devs",
    description: "We staff for scalability and agility with our frontend pros (React, Angular, Vue) as much as the backend experts (Node, Java, Python, .NET).",
    icon: SERVICE_ASSETS[5],
    href: "/services/full-stack-backend-developers"
  }
];

export default function TechnologyServices() {
  return (
    <section className="bg-white py-20 lg:py-24 font-body text-primary-text">
      <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-[1280px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 space-y-4">
          <h2 className="text-[2.5rem] md:text-[40px] leading-[1.2] font-medium font-display text-foreground">
            Technology Services
          </h2>
          <p className="text-base leading-[1.6] text-muted-foreground w-full max-w-3xl mx-auto">
            Flexible IT staffing solutions tailored to your stack.<br className="hidden md:block" />
            Get instant access to top-tier IT talent, including DevOps engineers, cloud architects, AI developers, Salesforce experts, DevSecOps, Automation Engineers and more. Our handpicked experts are ready to plug into your teams. We support fast-paced startups and global enterprises with project-based or long-term staffing solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col pt-8 pb-8 px-8 bg-white border border-[#E0E0E0] rounded-[16px] transition-shadow hover:shadow-[0px_2px_8px_rgba(0,0,0,0.08)] h-full"
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#C3E944] rounded-[8px] flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground font-body tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Footer Link */}
              <div className="mt-8">
                <Link 
                  href={service.href} 
                  className="inline-flex items-center text-[15px] font-semibold text-foreground hover:underline gap-2 group-hover:opacity-80 transition-opacity"
                >
                  View service
                  <Image
                    src={SERVICE_ASSETS[6]}
                    alt="Arrow right"
                    width={16}
                    height={16}
                    className="w-4 h-4 ml-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}