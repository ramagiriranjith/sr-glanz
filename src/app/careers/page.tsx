import { NavigationBar } from "@/components/sections/navigation-bar";
import { Footer } from "@/components/sections/footer";
import { WhoWeAre } from "@/components/home/who-we-are";
import { WhyWorkWithUs } from "@/components/home/why-work-with-us";
import { CtaSections } from "@/components/home/cta-sections";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Users, Lightbulb, Trophy } from "lucide-react";

const benefits = [
  { icon: Briefcase, title: "Remote Flexibility", desc: "Work from anywhere with flexible schedules that fit your lifestyle." },
  { icon: Users, title: "Collaborative Culture", desc: "Join a diverse team of experts who support and learn from each other." },
  { icon: Lightbulb, title: "Growth Opportunities", desc: "Continuous learning with access to certifications and training programs." },
  { icon: Trophy, title: "Competitive Benefits", desc: "Comprehensive healthcare, retirement plans, and performance bonuses." },
];

const openPositions = [
  { title: "Senior DevOps Engineer", location: "Remote", type: "Full-time" },
  { title: "Salesforce Developer", location: "San Francisco, CA", type: "Full-time" },
  { title: "Cloud Architect - AWS", location: "Remote", type: "Contract" },
  { title: "QA Automation Lead", location: "New York, NY", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <main>
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 px-6">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="font-[family-name:var(--font-display)] text-5xl lg:text-[3.75rem] leading-[1.1] font-medium text-[#1A1A1A] mb-8">
                Join Our <em className="italic">Team</em>
              </h1>
              <p className="text-lg text-[#595959] leading-relaxed mb-10 max-w-lg">
                Be part of a team that&apos;s empowering businesses to succeed in the digital age. We&apos;re always looking for talented individuals who share our passion for technology and innovation.
              </p>
              <div>
                <Link href="#positions" className="inline-flex items-center px-8 py-4 bg-[#C3E944] text-[#1A1A1A] rounded-full font-semibold text-base hover:bg-[#d4f76f] transition-all">
                  View Open Positions <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/684e261a47d026982530bd78_graphic-designers-interac-15.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F9F9F6]">
          <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-[1200px]">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-display)] text-[2.5rem] font-medium text-[#1A1A1A] mb-4">Why Work at Technolance?</h2>
              <p className="text-[#595959] text-lg max-w-2xl mx-auto">We believe in empowering our team members to do their best work.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 border border-[#E0E0E0] flex flex-col items-start">
                  <div className="w-12 h-12 bg-[#C3E944] rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <h3 className="font-semibold text-xl text-[#1A1A1A] mb-3">{benefit.title}</h3>
                  <p className="text-[#595959] text-base leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="positions" className="py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-[1200px]">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-display)] text-[2.5rem] font-medium text-[#1A1A1A] mb-4">Open Positions</h2>
              <p className="text-[#595959] text-lg max-w-2xl mx-auto">Explore opportunities to join our growing team.</p>
            </div>
            
            <div className="space-y-4">
              {openPositions.map((position, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-[#E0E0E0] flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-md transition-shadow">
                  <div>
                    <h3 className="font-semibold text-xl text-[#1A1A1A] mb-2">{position.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[#595959]">
                      <span>{position.location}</span>
                      <span className="w-1 h-1 rounded-full bg-[#595959]"></span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#C3E944] text-[#1A1A1A] rounded-full font-semibold text-sm hover:bg-[#d4f76f] transition-all whitespace-nowrap">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSections />
      </main>

      <Footer />
    </div>
  );
}
