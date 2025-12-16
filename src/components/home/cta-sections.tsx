'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CtaSections() {
  return (
    <section className="bg-[#fff1de] py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative overflow-hidden rounded-[32px] bg-[#febd73] p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/68117dbd6c0bd4b62c5982ee_cta-div-bg1-20.svg"
                alt=""
                fill
                className="object-cover pointer-events-none select-none"
              />
            </div>
             
            <div className="relative z-10 w-full max-w-lg">
              <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.2] mb-6 text-[#1A1A1A]">
                Ready to elevate your business?
              </h2>
              <p className="text-base md:text-lg mb-8 text-[#1A1A1A] leading-[1.6]">
                Connect with our expert team today and discover how we can turn your digital challenges into opportunities for growth.
              </p>
              <div>
                <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#1A1A1A] font-semibold text-base px-8 py-3.5 rounded-full hover:bg-[#F2F4E6] transition-colors">
                  Let&apos;s get started
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-[#F9F9F6] p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/68117dbd6c0bd4b62c5982ef_cta-div-bg2-21.svg" 
                alt=""
                fill
                className="object-cover pointer-events-none select-none"
              />
            </div>

            <div className="relative z-10 w-full max-w-lg">
              <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.2] mb-6 text-[#1A1A1A]">
                Stay ahead in the digital world
              </h2>
              <p className="text-base md:text-lg mb-8 text-[#595959] leading-[1.6]">
                Get the latest insights, case studies, trends, and strategies delivered straight to your inbox.
              </p>
              
              <form className="relative flex items-center w-full max-w-md bg-white rounded-full p-2 pl-4 shadow-sm border border-transparent">
                <div className="relative w-5 h-5 flex-shrink-0 mr-3 opacity-60">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/68117dbd6c0bd4b62c5982f0_mail-01-22.svg" 
                    alt="" 
                    fill
                    className="object-contain"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-transparent border-none outline-none text-[#1A1A1A] placeholder:text-[#999999] text-base h-full py-2 min-w-0"
                  required
                />
                <button type="submit" className="flex-shrink-0 group w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors ml-2 cursor-pointer" aria-label="Subscribe">
                  <ArrowRight className="w-5 h-5 text-[#1A1A1A]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
