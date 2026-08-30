'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudyCard from '@/components/CaseStudyCard';
import { caseStudies } from '@/data/case-studies';

export default function PortfolioPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="pt-28 pb-16 relative min-h-[55vh] flex flex-col justify-end overflow-hidden"
        aria-labelledby="portfolio-hero-heading"
      >
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] uppercase mb-5 block">// Case Studies</span>
          </motion.div>

          <motion.h1
            id="portfolio-hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.06] mb-5 max-w-4xl tracking-tight"
          >
            Work that speaks
            <span className="text-[#a0a0a0] text-2xl md:text-3xl lg:text-4xl font-light block mt-3 leading-snug">
              Results across {caseStudies.length} industries and counting.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-wrap gap-8 mt-8"
          >
            {[
              { value: `${caseStudies.length}+`, label: 'Projects Delivered' },
              { value: '6+', label: 'Industries Served' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2.5">
                <span className="text-xl md:text-2xl font-bold text-[#6366f1]" style={{ fontVariantNumeric: 'tabular-nums' }}>{stat.value}</span>
                <span className="text-[#666666] text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" aria-hidden="true" />
      </section>

      {/* Case Studies Grid */}
      <section className="pb-28 relative z-10" aria-label="Case studies">
        <div className="max-w-7xl mx-auto px-6">
          {/* Industry filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {['All', ...new Set(caseStudies.map((s) => s.industry))].map((industry, i) => (
              <span
                key={industry}
                className={`text-xs px-4 py-2 rounded-full border transition-colors cursor-pointer ${
                  i === 0
                    ? 'bg-[#6366f1] text-white border-[#6366f1] font-semibold'
                    : 'bg-[#111] text-[#666666] border-[#222] hover:border-[rgba(99,102,241,0.3)] hover:text-[#6366f1]'
                }`}
              >
                {industry}
              </span>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
