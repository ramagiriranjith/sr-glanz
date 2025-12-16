'use client';

export function TrustedLogos() {
  const logos = [
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d0818b51a565f245db1d_IBM-Logo_wine-3.png", alt: "IBM" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d086daaa9e8ee044dacb_United_Parcel_Service-Log-4.png", alt: "UPS" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d073197efcc82d995ee1_Banfield-logo-5.jpeg", alt: "Banfield" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d08db3dd9bf7d89a84c6_Novartis-Logo_wine-6.png", alt: "Novartis" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6830a990014c72926a1bc06a_Edward-Jones-logo-7.png", alt: "Edward Jones" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813dde8847ecc71d5dd1112_Microsoft_India-Logo_wine-8.png", alt: "Microsoft" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/6813d0920b790362505d7985_Humana_logo_svg-1.png", alt: "Humana" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d07ef5f4c1a6691b5c02_AT_26T-Logo_wine-9.png", alt: "AT&T" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d06fadabd61fc3f819aa_Cognizant-Logo-10.png", alt: "Cognizant" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6813d069e3fe3347d419a914_tcs-p-c-11.png", alt: "TCS" },
  ];

  return (
    <section className="py-12 bg-[#fff1de] border-b border-[#E0E0E0]/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="shrink-0 text-sm font-medium text-[#595959] whitespace-nowrap">
            Trusted by world&apos;s best companies
          </div>
          
          <div className="flex-1 overflow-hidden w-full relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex gap-8 items-center w-max animate-[infinite-scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
              {[...logos, ...logos].map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
