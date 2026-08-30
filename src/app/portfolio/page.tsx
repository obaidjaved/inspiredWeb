'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectMockup from '@/components/ProjectMockup';
import { caseStudies } from '@/data/case-studies';

const categories = [
  'All Work',
  'AI & Automation',
  'ERP & Enterprise',
  'E-Commerce',
  'Web Apps',
  'HealthTech',
  'EdTech',
];

const clientLogos = [
  { name: 'National Medical Centre', url: '/clients/clients_img1.jpg' },
  { name: 'Benztech Solutions', url: '/clients/clients_img2.jpg' },
  { name: 'Foundation Securities', url: '/clients/clients_img3.jpg' },
  { name: 'Kolson', url: '/clients/clients_img4.png' },
  { name: 'Amna', url: '/clients/clients_img5.png' },
  { name: 'CP', url: '/clients/clients_img6.png' },
];

const testimonials = [
  {
    quote:
      'Inspired Technology engineered our entire hospital and medical college clinical tracking system. What used to take days of manual paperwork is now instantaneous and 100% tamper-proof.',
    author: 'Chief Operating Officer',
    organization: 'Clineum Healthcare',
    rating: 5,
  },
  {
    quote:
      'Their ZATCA Phase 2 ERPNext implementation saved us hundreds of thousands in licensing fees while ensuring 100% compliance with Saudi tax authorities on day one.',
    author: 'Head of Supply Chain & Finance',
    organization: 'Khadamat Facilities Management',
    rating: 5,
  },
  {
    quote:
      'The custom Shopify 2.0 store and real-time inventory engine transformed our pharmacy operations. Sales tripled within six months and our mobile bounce rate dropped dramatically.',
    author: 'Managing Director',
    organization: 'Meri Pharmacy Online',
    rating: 5,
  },
];

const stats = [
  { value: '14+', label: 'Featured Client Case Studies' },
  { value: '500+', label: 'Delivered Projects Globally' },
  { value: '99.4%', label: 'SLA Fulfillment Rate' },
  { value: '15+', label: 'Years Engineering Track Record' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All Work');

  const filteredStudies =
    activeCategory === 'All Work'
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeCategory);

  const featuredProject = filteredStudies[0];
  const gridProjects = filteredStudies.slice(1);

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero Section (Dark, Cubix-Inspired) */}
      <section className="pt-32 pb-20 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="work-hero-heading">
        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(rgba(99,102,241,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link href="/" className="text-[#636363] hover:text-white text-xs transition-colors">Home</Link>
            <span className="text-[#454545] text-xs">/</span>
            <span className="text-[#818cf8] text-xs font-semibold">Our Work &amp; Case Studies</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-8"
            >
              <span className="inline-flex items-center gap-2 bg-[#6366f1]/15 border border-[#6366f1]/30 text-[#d0d1fb] text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
                Featured Client Portfolio ({caseStudies.length} Real-World Implementations)
              </span>

              <h1
                id="work-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#e8e8e8] leading-[1.08] tracking-tight"
              >
                Transforming Visions into <span className="gradient-text">Market-Defining</span> Digital Products
              </h1>

              <p className="text-[#9a9a9a] text-base md:text-lg max-w-2xl leading-relaxed">
                Explore our comprehensive showcase of custom web applications, ZATCA-compliant ERPNext ecosystems, AI drone analytics, and high-conversion e-commerce storefronts built for industry leaders worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-4"
            >
              <div className="p-6 rounded-2xl bg-[#121212] border border-[#2a2a2a] shadow-xl">
                <div className="text-xs font-bold uppercase tracking-wider text-[#818cf8] mb-4">
                  // PROVEN GLOBAL RESULTS
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold text-white mb-0.5" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {s.value}
                      </div>
                      <div className="text-[#636363] text-[11px] font-medium leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Interactive Filter Bar */}
      <section className="sticky top-[72px] z-30 bg-black/90 backdrop-blur-xl border-y border-[#1f1f1f] py-4" aria-label="Filter case studies">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = cat === 'All Work' ? caseStudies.length : caseStudies.filter((c) => c.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#6366f1] text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                      : 'bg-[#121212] text-[#9a9a9a] border border-[#2a2a2a] hover:text-white hover:border-[#444]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#1f1f1f] text-[#636363]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#636363] font-medium hidden md:block shrink-0">
            Showing <span className="text-white font-bold">{filteredStudies.length}</span> live client projects
          </div>
        </div>
      </section>

      {/* Main Showcase Section (Light / High-Contrast Section) */}
      <section className="section-light py-20 relative z-10" aria-labelledby="showcase-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="space-y-12"
            >
              {/* 1. Featured Spotlight Project Card (with Live Website Mockup) */}
              {featuredProject && (
                <div className="client-logo-card p-0 rounded-3xl bg-white border border-[#e5e7eb] overflow-hidden hover:border-[#6366f1]/50 group shadow-lg transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                    {/* Left Mockup View */}
                    <div className="lg:col-span-7 p-6 lg:p-10 bg-[#0d0d0d] flex items-center justify-center">
                      <ProjectMockup
                        image={featuredProject.featuredImage}
                        title={featuredProject.title}
                        url={featuredProject.url}
                        type={featuredProject.mockupType || 'desktop'}
                        accentColor={featuredProject.color}
                        className="w-full"
                      />
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-white">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-[#6366f1] uppercase tracking-wider mb-2">
                          <span>{featuredProject.client}</span>
                          <span>•</span>
                          <span>{featuredProject.industry}</span>
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold text-[#0d0d0d] mb-4 leading-tight group-hover:text-[#6366f1] transition-colors">
                          {featuredProject.title}
                        </h2>

                        <p className="text-[#6b7280] text-sm leading-relaxed mb-6">
                          {featuredProject.summary}
                        </p>

                        <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#f0f0f0] mb-6">
                          {featuredProject.metrics.map((m) => (
                            <div key={m.label}>
                              <div className="text-xl font-bold text-[#0d0d0d]">{m.value}</div>
                              <div className="text-[10px] text-[#9ca3af] font-medium leading-tight">{m.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {featuredProject.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#f3f4f6] text-[#374151]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={`/portfolio/${featuredProject.slug}`}
                          className="flex-1 bg-[#0d0d0d] text-white px-6 py-3.5 rounded-xl text-xs font-bold hover:bg-[#6366f1] transition-all flex items-center justify-between text-center"
                        >
                          <span>View Full Case Study</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                        <a
                          href={`https://${featuredProject.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-[#e5e7eb] text-[#374151] px-5 py-3.5 rounded-xl text-xs font-bold hover:bg-[#f8f9fa] transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Visit Live</span>
                          <svg className="w-3.5 h-3.5 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Grid of Remaining Projects (2 & 3 Columns with Browser Mockups) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridProjects.map((study, index) => (
                  <motion.article
                    key={study.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="client-logo-card p-0 rounded-2xl bg-white border border-[#e5e7eb] overflow-hidden hover:border-[#6366f1]/50 group shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Browser Mockup Header Area */}
                      <div className="p-4 bg-[#0d0d0d]">
                        <ProjectMockup
                          image={study.featuredImage}
                          title={study.title}
                          url={study.url}
                          type={study.mockupType || 'desktop'}
                          accentColor={study.color}
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#f3f4f6] text-[#4b5563]">
                            {study.category}
                          </span>
                          <span className="text-[11px] font-bold text-[#6366f1] truncate">
                            {study.client}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-[#0d0d0d] mb-2 leading-snug group-hover:text-[#6366f1] transition-colors line-clamp-2">
                          {study.title}
                        </h3>

                        <p className="text-[#6b7280] text-xs leading-relaxed line-clamp-3 mb-5">
                          {study.summary}
                        </p>

                        {/* Metrics Bar */}
                        <div className="grid grid-cols-2 gap-3 py-3 border-t border-[#f0f0f0] mb-4">
                          {study.metrics.slice(0, 2).map((metric) => (
                            <div key={metric.label}>
                              <div className="text-base font-bold text-[#0d0d0d]">{metric.value}</div>
                              <div className="text-[10px] text-[#9ca3af] font-medium leading-tight">{metric.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1 mb-2">
                          {study.technologies.slice(0, 3).map((t) => (
                            <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#f8f9fa] text-[#4b5563] border border-[#f0f0f0]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="p-6 pt-0 w-full flex items-center gap-2">
                      <Link
                        href={`/portfolio/${study.slug}`}
                        className="flex-1 py-2.5 px-3 rounded-xl text-center text-xs font-bold text-[#0d0d0d] bg-[#f8f9fa] border border-[#e5e7eb] hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1] transition-all flex items-center justify-between"
                      >
                        <span>Case Study</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <a
                        href={`https://${study.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl text-xs font-bold text-[#6366f1] bg-indigo-50 hover:bg-indigo-100 transition-all flex items-center justify-center gap-1 shrink-0"
                        title="Visit Live Site"
                      >
                        <span>Live</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Client Testimonials & Trust (Light Gray Section) */}
      <section className="section-light-gray py-24 relative z-10" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge-light mb-4">Verified Client Reviews</span>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              What Enterprise Leaders Say About Inspired
            </h2>
            <p className="text-[#6b7280] text-sm mt-3 max-w-xl mx-auto">
              Trusted by healthcare systems, telecom providers, retail chains, and government institutions worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex text-amber-400 text-sm mb-4">
                    {'★'.repeat(t.rating)}
                  </div>
                  <p className="text-[#374151] text-sm leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f3f4f6]">
                  <div className="font-bold text-[#0d0d0d] text-sm">{t.author}</div>
                  <div className="text-xs text-[#6366f1] font-semibold">{t.organization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Client Logos Grid (Light Section) */}
      <section className="section-light py-20 border-t border-[#f0f0f0]" aria-label="Trusted corporate clients">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="badge-light mb-3">Enterprise Trust</span>
            <h3 className="text-2xl font-bold text-[#0d0d0d] mt-2">
              Trusted by Leading Organizations
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="client-logo-card">
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-12 md:h-14 w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner (Dark CTA, Cubix Style) */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-[#818cf8] text-xs font-bold tracking-widest uppercase mb-4 block">
            // HAVE A VISION IN MIND?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Let&apos;s Build Your Next High-Impact Digital Solution
          </h2>
          <p className="text-[#9a9a9a] text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Schedule a 30-minute discovery call with our principal solutions architects. We will discuss your technical requirements and provide a free project estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#6366f1] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-[0.98]"
            >
              Start a Project Discussion
            </Link>
            <a
              href="tel:+923009221193"
              className="border border-[#2a2a2a] text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-white/5 transition-all"
            >
              Call Us: +92 300 9221193
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
