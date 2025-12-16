'use client';

import { useState } from 'react';
import { NavigationBar } from "@/components/sections/navigation-bar";
import { Footer } from "@/components/sections/footer";
import { CtaSections } from "@/components/home/cta-sections";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

const ALL_POSTS = [
  { id: '1', title: 'Automating Metadata Deployments in Salesforce Using Copado Pipelines', excerpt: 'Learn how to streamline your Salesforce metadata deployments using Copado pipelines.', date: 'August 15, 2025', category: 'Salesforce', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/689d3f8ae201f07a77b935c4_Screenshot_202025-08-13_2-16.png', slug: 'automating-metadata-deployments' },
  { id: '2', title: 'Salesforce DevOps with Copado: A Beginner\'s Deployment Guide', excerpt: 'A comprehensive guide for beginners to get started with Salesforce DevOps using Copado.', date: 'August 6, 2025', category: 'DevOps', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/68929d72d9f88418583cc264_copado_20deployment-17.png', slug: 'salesforce-devops-copado' },
  { id: '3', title: 'Using Apex Triggers Without Breaking Your Org', excerpt: 'Master the art of writing efficient Apex triggers and avoid common pitfalls.', date: 'July 30, 2025', category: 'Development', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6889684c504518937fd19b93_Using_20Apex_20Triggers_2-18.png', slug: 'apex-triggers-best-practices' },
  { id: '4', title: 'Cloud Infrastructure Provisioning: A Modern Approach', excerpt: 'Explore modern techniques for provisioning cloud infrastructure using IaC tools.', date: 'July 20, 2025', category: 'Cloud', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/689d3f8ae201f07a77b935c4_Screenshot_202025-08-13_2-16.png', slug: 'cloud-infrastructure-provisioning' },
  { id: '5', title: 'AI/ML Development Trends in 2025', excerpt: 'Discover the latest trends in AI and Machine Learning development.', date: 'July 12, 2025', category: 'AI/ML', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/68929d72d9f88418583cc264_copado_20deployment-17.png', slug: 'ai-ml-trends-2025' },
  { id: '6', title: 'Building Scalable Backend Systems with Node.js', excerpt: 'Best practices for designing scalable backend systems using Node.js.', date: 'July 05, 2025', category: 'Full-Stack', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e12b34e1-95bf-45dc-a20e-8e1714eb6026-techno-lance-com/assets/images/6889684c504518937fd19b93_Using_20Apex_20Triggers_2-18.png', slug: 'scalable-backend-nodejs' }
];

const CATEGORIES = ['All', 'Salesforce', 'DevOps', 'Cloud', 'AI/ML', 'Development', 'Full-Stack'];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = ALL_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#fff1de]">
      <NavigationBar />
      
      <main>
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto text-center">
            <h1 className="text-[40px] md:text-[56px] font-medium tracking-tight mb-6 font-[family-name:var(--font-display)]">
              Insights & Innovation
            </h1>
            <p className="text-[#595959] text-lg max-w-2xl mx-auto leading-relaxed">
              Stay informed with expert articles, trends, and ideas shaping enterprise technology today.
            </p>
          </div>
        </section>

        <section className="pb-16 px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-4 md:p-2 rounded-2xl md:rounded-full border border-[#E0E0E0] shadow-sm">
              <div className="flex flex-wrap justify-center gap-2 px-2">
                {CATEGORIES.map((category) => (
                  <button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category ? 'bg-[#C3E944] text-[#1A1A1A]' : 'bg-transparent text-[#595959] hover:bg-[#fff1de] hover:text-[#1A1A1A]'}`}>
                    {category}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-[320px]">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-11 pr-4 py-3 rounded-full border border-transparent bg-[#F9F9F6] focus:bg-white focus:border-[#C3E944] focus:ring-0 outline-none transition-all text-sm placeholder:text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-32 px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="flex flex-col group h-full">
                    <Link href={`/blogs/${post.slug}`} className="block w-full mb-6">
                      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    </Link>
                    <div className="flex flex-col flex-grow">
                      <div className="text-[13px] text-[#595959] mb-3 font-medium">Published on: {post.date}</div>
                      <h3 className="text-[20px] leading-[1.4] font-semibold text-[#1A1A1A] mb-4 line-clamp-2 group-hover:text-[#2563EB] transition-colors">
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-[16px] text-[#595959] mb-6 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                      <Link href={`/blogs/${post.slug}`} className="inline-flex items-center text-[#1A1A1A] font-medium text-[15px] hover:text-[#2563EB] transition-colors mt-auto">
                        Read more <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#595959] text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        <CtaSections />
      </main>

      <Footer />
    </div>
  );
}
