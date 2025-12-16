import Image from "next/image";

export default function WhyTechnolance() {
  return (
    <section className="bg-[#fff1de] py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <h2 className="text-[#1A1A1A] text-4xl md:text-[2.5rem] font-medium leading-[1.2] mb-6 font-[family-name:var(--font-display)]">
            Why Technolance?
          </h2>
          <p className="text-[#1A1A1A] text-base md:text-lg font-normal leading-relaxed max-w-2xl font-[family-name:var(--font-body)]">
            Core values of integrity, innovation, and excellence shape every solution we deliver.
          </p>
        </div>

        <div className="relative w-full rounded-[12px] overflow-hidden bg-gray-200">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/684e261a47d026982530bd78_graphic-designers-interac-15.jpg"
            alt="Technolance office environment showing team collaboration"
            width={1200}
            height={675}
            className="w-full h-auto object-cover min-h-[300px]"
            priority
          />
          {/* Image overlay effect as requested */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}