import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-10 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-5 flex flex-col items-start gap-6 pr-0 lg:pr-12">
            <Link href="/" className="block">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d9776e79786155475b74_horizontal_20logo_20multi-19.png"
                  alt="SR Glanz"
                width={200}
                height={50}
                className="w-48 h-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-[#D4D4D4] text-[15px] leading-relaxed max-w-[320px] font-normal">
              Empowering businesses to succeed in the digital age.
            </p>
          </div>

          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-8">
              <div className="flex flex-col gap-6">
                <h3 className="text-white font-semibold text-base tracking-wide">Company</h3>
                <ul className="flex flex-col gap-3">
                  <li>
                      <Link href="/about-us" className="text-[#A3A3A3] hover:text-[#febd73] text-[15px] transition-colors duration-200">
                      About
                    </Link>
                  </li>
                  <li>
                      <Link href="/careers" className="text-[#A3A3A3] hover:text-[#febd73] text-[15px] transition-colors duration-200">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <div className="h-6 hidden lg:block" aria-hidden="true" />
                <ul className="flex flex-col gap-3">
                  <li>
                      <Link href="/technology-services" className="text-[#A3A3A3] hover:text-[#febd73] text-[15px] transition-colors duration-200 whitespace-nowrap">
                      Technology Services
                    </Link>
                  </li>
                  <li>
                      <Link href="/implementation-services" className="text-[#A3A3A3] hover:text-[#febd73] text-[15px] transition-colors duration-200 whitespace-nowrap">
                      Implementation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                 <div className="h-6 hidden lg:block" aria-hidden="true" />
                <ul className="flex flex-col gap-3">
                  <li>
                      <Link href="/blogs" className="text-[#A3A3A3] hover:text-[#febd73] text-[15px] transition-colors duration-200">
                      Blog
                    </Link>
                  </li>
                  <li>
                      <Link href="/contact" className="text-[#A3A3A3] hover:text-[#febd73] text-[15px] transition-colors duration-200">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-white font-semibold text-base tracking-wide">Pages</h3>
                <ul className="flex flex-col gap-3">
                  <li>
                      <Link href="/privacy-policy" className="text-[#A3A3A3] hover:text-[#febd73] text-[15px] transition-colors duration-200 whitespace-nowrap">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#333333] mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[13px] text-[#888888]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
              <span>© SR Glanz - 2025</span>
            <span className="hidden sm:inline">-</span>
            <div className="flex gap-1">
              <span>Built by</span>
                <a href="#" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-[#febd73] transition-colors duration-200">
                happycodelabs
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity duration-200 block" aria-label="LinkedIn">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c5982fa_Social_20media_20logo_20_-8.svg" 
                alt="LinkedIn"
                width={20}
                height={20}
                className="w-5 h-5 object-contain brightness-0 invert" 
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
