export default function InsightsInnovation() {
  const articles = [
    {
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/689d3f8ae201f07a77b935c4_Screenshot_202025-08-13_2-16.png",
      date: "August 15, 2025",
      title: "Automating Metadata Deployments in Salesforce Using Copado Pipelines",
      link: "#"
    },
    {
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/68929d72d9f88418583cc264_copado_20deployment-17.png",
      date: "August 6, 2025",
      title: "Salesforce DevOps with Copado: A Beginner's Deployment Guide",
      link: "#"
    },
    {
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6889684c504518937fd19b93_Using_20Apex_20Triggers_2-18.png",
      date: "July 30, 2025",
      title: "Using Apex Triggers Without Breaking Your Org",
      link: "#"
    }
  ];

  return (
    <section className="bg-[#fff1de] py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-10 max-w-[1240px]">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-[#1A1A1A] text-4xl md:text-5xl lg:text-[2.5rem] font-medium leading-[1.2] mb-6">
            Insights & Innovation
          </h2>
          <p className="font-body text-[#595959] text-base md:text-lg font-normal leading-relaxed">
            Stay informed with expert articles, trends, and ideas shaping enterprise technology today.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col h-full group">
              <a href={article.link} className="block w-full mb-6">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white shadow-sm border border-[#E0E0E0]/50">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </a>
              
              <div className="flex flex-col flex-1">
                <div className="text-xs font-normal text-[#595959] mb-3">
                  Published on: {article.date}
                </div>
                
                <h3 className="flex-1 font-body text-xl font-semibold text-[#1A1A1A] leading-tight mb-4">
                  <a href={article.link} className="hover:underline decoration-1 underline-offset-2">
                    {article.title}
                  </a>
                </h3>

                <a 
                  href={article.link} 
                  className="inline-flex items-center text-[15px] font-semibold text-[#1A1A1A] hover:underline decoration-1 underline-offset-2 w-fit mt-auto group/link"
                >
                  Read more
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/svgs/68117dbd6c0bd4b62c5982ea_arrow-narrow-right-6.svg" 
                    alt="Arrow right" 
                    className="ml-2 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="/blogs"
            className="inline-block bg-[#C3E944] hover:bg-[#D4F76F] text-[#1A1A1A] text-[15px] font-semibold py-3 px-8 rounded-full transition-colors duration-200"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}