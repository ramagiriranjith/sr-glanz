export default function TrustedCompaniesLogos() {
  return (
    <section className="section-logos py-12 bg-[var(--color-background)] border-b border-[var(--color-border)]/50">
      <div className="padding-global px-4 md:px-8 lg:px-12">
        <div className="container-large max-w-[1200px] mx-auto">
          <div className="logos-mega-wrap flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="shrink-0 text-sm font-medium text-[var(--color-text-secondary)] whitespace-nowrap">
              Trusted by world’s best companies
            </div>
            
            <div className="logo-container flex-1 overflow-hidden w-full relative mask-linear-fade">
              <div className="marquee-track flex gap-8 items-center w-max animate-infinite-scroll hover:pause">
                {/* First Set */}
                <LogoGroup />
                {/* Second Set (Duplicate for seamless loop) */}
                <LogoGroup />
              </div>
            </div>
          </div>
          <div className="spacer-xxlarge hidden"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  )
}

function LogoGroup() {
  return (
    <div className="flex gap-8 md:gap-16 items-center shrink-0">
      <div className="logos-wrap flex items-center gap-8 md:gap-16">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d0818b51a565f245db1d_IBM-Logo_wine-3.png"
          alt="IBM"
          className="logo-image h-6 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d086daaa9e8ee044dacb_United_Parcel_Service-Log-4.png"
          alt="UPS"
          className="logo-image h-8 md:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d073197efcc82d995ee1_Banfield-logo-5.jpeg"
          alt="Banfield"
          className="logo-image h-6 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply"
        />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d08db3dd9bf7d89a84c6_Novartis-Logo_wine-6.png"
          alt="Novartis"
          className="logo-image h-6 md:h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6830a990014c72926a1bc06a_Edward-Jones-logo-7.png"
          alt="Edward Jones"
          className="logo-image h-6 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      </div>
      
      <div className="logos-wrap flex items-center gap-8 md:gap-16">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813dde8847ecc71d5dd1112_Microsoft_India-Logo_wine-8.png"
          alt="Microsoft"
          className="logo-image h-6 md:h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/6813d0920b790362505d7985_Humana_logo_svg-1.png"
          alt="Humana"
          className="logo-image h-6 md:h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d07ef5f4c1a6691b5c02_AT_26T-Logo_wine-9.png"
          alt="AT&T"
          className="logo-image h-6 md:h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d06fadabd61fc3f819aa_Cognizant-Logo-10.png"
          alt="Cognizant"
          className="logo-image h-5 md:h-6 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d069e3fe3347d419a914_tcs-p-c-11.png"
          alt="TCS"
          className="logo-image h-5 md:h-6 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      </div>
    </div>
  )
}