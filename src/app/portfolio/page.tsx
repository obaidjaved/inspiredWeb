'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { caseStudies } from '@/data/case-studies';
import { useState } from 'react';

const projectImages: Record<string, string> = {
  'tapsvs-lms': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&h=500&fit=crop&auto=format',
  'clineum-medical': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=500&fit=crop&auto=format',
  'dikhatz-shopify': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=500&fit=crop&auto=format',
  'drive-venturous': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&h=500&fit=crop&auto=format',
  'english-evolution': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=500&fit=crop&auto=format',
  'made-by-throne': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&h=500&fit=crop&auto=format',
  'meri-pharmacy': 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&h=500&fit=crop&auto=format',
  'student-portal': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&h=500&fit=crop&auto=format',
};

const fallbackImage = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=500&fit=crop&auto=format';

const industries = ['All', 'Telecom', 'Finance', 'Healthcare', 'Manufacturing', 'Education'];

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '1000+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function PortfolioPage() {
  const [activeIndustry, setActiveIndustry] = useState('All');

  const filtered = activeIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.industry === activeIndustry);

  return (
    <main id="main-content">
      <Navbar />

      {/* Dark Hero */}
      <section className="pt-28 pb-20 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="portfolio-hero-heading">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// CASE STUDIES</span>
            <h1 id="portfolio-hero-heading" className="text-4xl md:text-6xl font-bold mb-5 text-[#e8e8e8]">
              Our work
            </h1>
            <p className="text-[#9a9a9a] text-base md:text-lg max-w-2xl leading-relaxed">
              Explore our portfolio of successful implementations across diverse industries and business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dark Stats Bar */}
      <section className="bg-[#121212] border-b border-[#1f1f1f] py-12" aria-label="Portfolio statistics">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#6366f1] mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{stat.value}</div>
                <div className="text-[#9a9a9a] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Filter + Projects */}
      <section className="py-20 bg-black" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-10"
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// FILTER BY INDUSTRY</span>
            <h2 id="projects-heading" className="text-2xl md:text-3xl font-bold text-[#e8e8e8] mb-6">Featured projects</h2>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  className={`text-xs font-medium px-5 py-2.5 rounded-full border transition-all duration-200 ${
                    activeIndustry === industry
                      ? 'bg-[#6366f1] text-white border-[#6366f1] shadow-[0_0_16px_rgba(99,102,241,0.3)]'
                      : 'bg-[#121212] text-[#9a9a9a] border-[#2a2a2a] hover:border-[rgba(99,102,241,0.3)] hover:text-[#818cf8]'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
              >
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="group block bg-[#121212] border border-[#2a2a2a] rounded-2xl overflow-hidden hover-glow card-lift transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={projectImages[study.slug] || fallbackImage}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] px-3 py-1.5 bg-black/70 backdrop-blur-sm border border-[#2a2a2a] rounded-full text-[#e8e8e8] font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-[#e8e8e8] mb-1">{study.title}</h3>
                      <p className="text-white/70 text-xs line-clamp-2">{study.summary}</p>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between mb-4">
                      {study.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label}>
                          <div className="text-lg font-bold text-[#818cf8]">{metric.value}</div>
                          <div className="text-[10px] text-[#636363]">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[#818cf8] text-xs font-medium group-hover:gap-3 transition-all">
                      View Case Study
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-20 bg-[#121212]" aria-labelledby="portfolio-cta-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 id="portfolio-cta-heading" className="text-3xl md:text-5xl font-bold mb-5 text-[#e8e8e8]">
              Start your success story
            </h2>
            <p className="text-[#9a9a9a] text-base max-w-xl mx-auto mb-8">
              Let us help you build a solution that delivers real business results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#6366f1] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.35)] active:scale-[0.98]"
            >
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
