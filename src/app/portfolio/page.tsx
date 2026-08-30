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
  { value: '1,000+', label: 'Projects Completed' },
  { value: '99.4%', label: 'SLA Fulfillment' },
  { value: '15+', label: 'Years Experience' },
];

export default function PortfolioPage() {
  const [activeIndustry, setActiveIndustry] = useState('All');

  const filtered = activeIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.industry === activeIndustry);

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero (Dark) */}
      <section className="pt-32 pb-24 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="portfolio-hero-heading">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(99,102,241,0.2) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link href="/" className="text-[#636363] hover:text-white text-xs transition-colors">Home</Link>
            <span className="text-[#454545] text-xs">/</span>
            <span className="text-[#818cf8] text-xs font-semibold">Case Studies &amp; Portfolio</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-[#6366f1]/15 border border-[#6366f1]/30 text-[#d0d1fb] text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              Proven Track Record
            </span>
            <h1 id="portfolio-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#e8e8e8] leading-[1.08] tracking-tight">
              Real-World Solutions. <span className="gradient-text">Measurable Business Impact.</span>
            </h1>
            <p className="text-[#9a9a9a] text-base md:text-lg leading-relaxed mb-8">
              Explore how we have engineered scalable digital platforms, automated business workflows, and secured enterprise network infrastructure for industry leaders worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar (Dark) */}
      <section className="bg-[#121212] border-y border-[#1f1f1f] py-12" aria-label="Portfolio metrics">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {stat.value}
                </div>
                <div className="text-[#9a9a9a] text-xs font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Projects Grid (Light Section) */}
      <section className="section-light py-24 relative z-10" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="badge-light mb-3">Filter by Industry</span>
              <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mt-2">
                Featured Client Implementations
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                    activeIndustry === industry
                      ? 'bg-[#6366f1] text-white shadow-sm'
                      : 'bg-white text-[#4b5563] border border-[#e5e7eb] hover:border-[#6366f1]/40'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="client-logo-card flex-col items-start p-0 rounded-2xl bg-white border border-[#e5e7eb] overflow-hidden hover:border-[#6366f1]/50 group h-full flex justify-between"
                >
                  <div className="w-full">
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={projectImages[study.slug] || fallbackImage}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white">
                          {study.industry}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-[#d0d1fb] transition-colors">{study.title}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-[#6b7280] text-xs leading-relaxed line-clamp-3 mb-6">
                        {study.summary}
                      </p>

                      <div className="grid grid-cols-2 gap-4 py-3 border-t border-[#f0f0f0] mb-4">
                        {study.metrics.slice(0, 2).map((metric) => (
                          <div key={metric.label}>
                            <div className="text-lg font-bold text-[#6366f1]">{metric.value}</div>
                            <div className="text-[10px] text-[#9ca3af]">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 w-full flex items-center justify-between text-xs font-bold text-[#6366f1] group-hover:text-[#4f46e5]">
                    <span>Read Full Case Study</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (Dark Section) */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-[#818cf8] text-xs font-bold tracking-widest uppercase mb-4 block">// READY TO TRANSFORM?</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Start Your Next Enterprise Success Story
          </h2>
          <p className="text-[#9a9a9a] text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Let our technical architects build a scalable solution tailored to your operational KPIs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#6366f1] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-[0.98]"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
