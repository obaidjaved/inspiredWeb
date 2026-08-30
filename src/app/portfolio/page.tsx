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
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 relative min-h-[60vh] flex flex-col justify-end overflow-hidden"
        aria-labelledby="portfolio-hero-heading"
      >
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-accent text-sm font-mono tracking-widest uppercase mb-6 block">// Case Studies</span>
          </motion.div>

          <motion.h1
            id="portfolio-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-6 max-w-4xl tracking-tight"
          >
            Work That <span className="gradient-text">Speaks</span>{' '}
            <span className="text-text-secondary text-3xl md:text-4xl lg:text-5xl font-light block mt-4 leading-snug">
              Results across {caseStudies.length} industries and counting.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            {[
              { value: `${caseStudies.length}+`, label: 'Projects Delivered' },
              { value: '6+', label: 'Industries Served' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</span>
                <span className="text-text-muted text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden="true" />
      </section>

      {/* Case Studies Grid */}
      <section className="pb-32 relative z-10" aria-label="Case studies">
        <div className="max-w-7xl mx-auto px-6">
          {/* Industry filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {['All', ...new Set(caseStudies.map((s) => s.industry))].map((industry, i) => (
              <span
                key={industry}
                className={`text-sm px-5 py-2.5 rounded-full border transition-colors cursor-pointer ${
                  i === 0
                    ? 'bg-accent text-dark border-accent font-semibold'
                    : 'bg-dark-card text-text-muted border-dark-border hover:border-accent/50 hover:text-accent'
                }`}
              >
                {industry}
              </span>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
