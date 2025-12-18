'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full bg-[#fff1de]/95 backdrop-blur-md sticky top-0 z-[1000] border-b border-[#E0E0E0]/30">
      <div className="mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="flex items-center justify-between h-[88px]">
          <Link href="/" className="flex-shrink-0 relative z-50 transition-transform hover:scale-105 duration-300">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/sr_glanz_logo-1765992284834.png?width=8000&height=8000&resize=contain"
                alt="SR Glanz Logo"
                width={176}
                height={43}
                className="w-[140px] md:w-[176px] h-20 object-contain"
                priority
              />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-[#1A1A1A] text-[15.5px] font-medium leading-[1.6] hover:text-[#8B6B47] transition-all duration-300">
              Home
            </Link>
            <Link href="/about-us" className="text-[#1A1A1A] text-[15.5px] font-normal leading-[1.6] hover:text-[#8B6B47] transition-all duration-300">
              About us
            </Link>

            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer py-4 text-[#1A1A1A] text-[15.5px] font-normal leading-[1.6] hover:text-[#8B6B47] transition-all duration-300">
                Services
                <ChevronDown className={`w-4 h-4 text-[#1A1A1A] transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </div>

              <div className={`absolute top-[85%] left-1/2 -translate-x-1/2 pt-4 w-max min-w-[280px] transition-all duration-300 ease-out ${isServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                <div className="bg-white/95 backdrop-blur-md rounded-[16px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#E0E0E0]/40 flex flex-col items-start gap-4">
                  <div className="text-[19px] font-semibold text-[#1A1A1A] leading-tight font-[family-name:var(--font-display)]">Services</div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E0E0E0] to-transparent"></div>
                  <div className="flex flex-col gap-3">
                      <Link href="/technology-services" className="text-[15.5px] text-[#1A1A1A] hover:text-[#8B6B47] transition-all duration-300 whitespace-nowrap">
                      Technology Services
                    </Link>
                      <Link href="/implementation-services" className="text-[15.5px] text-[#1A1A1A] hover:text-[#8B6B47] transition-all duration-300 whitespace-nowrap">
                      Implementation Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/careers" className="text-[#1A1A1A] text-[15.5px] font-normal leading-[1.6] hover:text-[#8B6B47] transition-all duration-300">
              Careers
            </Link>
            <Link href="/blogs" className="text-[#1A1A1A] text-[15.5px] font-normal leading-[1.6] hover:text-[#8B6B47] transition-all duration-300">
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Link 
                href="/contact" 
                className="bg-[#1A1A1A] hover:bg-[#8B6B47] text-white px-9 py-3.5 rounded-full text-[15.5px] font-medium transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get in touch
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#1A1A1A] z-50 focus:outline-none relative"
              aria-label="Toggle menu"
            >
               {isOpen ? <X className="w-8 h-8" strokeWidth={1.5} /> : <Menu className="w-8 h-8" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 z-40 bg-[#fff1de] lg:hidden transition-transform duration-300 ease-in-out pt-[100px] px-6 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-8 items-center w-full">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-[20px] font-medium text-[#0A0D14]">Home</Link>
          <Link href="/about-us" onClick={() => setIsOpen(false)} className="text-[20px] font-normal text-[#171717]">About us</Link>
          
          <div className="w-full flex flex-col items-center">
            <div className="text-[20px] font-normal text-[#171717] mb-4 opacity-70">Services</div>
            <div className="flex flex-col gap-4 items-center w-full border-l-2 border-[#E0E0E0] pl-4 max-w-[200px]">
              <Link href="/technology-services" onClick={() => setIsOpen(false)} className="text-[18px] text-[#171717]">Technology Services</Link>
              <Link href="/implementation-services" onClick={() => setIsOpen(false)} className="text-[18px] text-[#171717]">Implementation Services</Link>
            </div>
          </div>

          <Link href="/careers" onClick={() => setIsOpen(false)} className="text-[20px] font-normal text-[#171717]">Careers</Link>
          <Link href="/blogs" onClick={() => setIsOpen(false)} className="text-[20px] font-normal text-[#171717]">Blog</Link>

          <div className="pt-4 pb-12 w-full flex justify-center">
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
                className="mx-auto bg-[#febd73] text-[#1A1A1A] px-10 py-4 rounded-[32px] text-[18px] font-semibold w-full max-w-[280px] text-center shadow-sm"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
