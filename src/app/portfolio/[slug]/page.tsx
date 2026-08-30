'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { caseStudies } from '@/data/case-studies';
import ProjectVisual from '@/components/visuals/ProjectVisual';

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

export default function CaseStudyPage() {
  const params = useParams();
  const study = caseStudies.find((s) => s.slug === params.slug);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  if (!study) {
    return (
      <main id="main-content">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
            <Link href="/portfolio" className="text-[#6366f1] hover:text-[#5558e6] transition-colors text-sm">
              Back to Portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="pt-28 pb-16 relative min-h-[65vh] flex flex-col justify-end overflow-hidden"
        aria-labelledby="case-study-hero-heading"
      >
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={projectImages[study.slug] || `https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=500&fit=crop&auto=format`}
            alt=""
            className="w-full h-full object-cover opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-28 right-16 w-20 h-20 border border-white/8 rounded-2xl"
          animate={{ rotate: 360, y: [0, -8, 0] }}
          transition={{ rotate: { duration: 35, repeat: Infinity, ease: 'linear' }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute top-1/2 left-12 w-14 h-14 border border-white/8 rounded-full"
          animate={{ rotate: -360, x: [0, 8, 0] }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, x: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          aria-hidden="true"
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-14"
        >
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="mb-10"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[#666666] hover:text-[#6366f1] transition-colors text-xs"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Case Studies
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-wrap items-center gap-3 mb-5"
          >
            <span
              className="text-[10px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full"
              style={{ background: `${study.color}12`, color: study.color, border: `1px solid ${study.color}25` }}
            >
              {study.industry}
            </span>
            <span className="text-[#666666] text-xs">{study.url}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            id="case-study-hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 max-w-5xl tracking-tight"
          >
            {study.title}
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="text-[#a0a0a0] text-sm md:text-base max-w-3xl leading-relaxed"
          >
            {study.summary}
          </motion.p>

          {/* Metrics bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-wrap gap-6 mt-8"
          >
            {study.metrics.map((metric) => (
              <div key={metric.label} className="flex items-baseline gap-2.5">
                <span className="text-xl md:text-2xl font-bold" style={{ color: study.color, fontVariantNumeric: 'tabular-nums' }}>{metric.value}</span>
                <span className="text-[#666666] text-xs">{metric.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Project Visual Banner */}
      <section className="relative z-10 -mt-8" aria-label="Project preview">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.32, 0.72, 0, 1] }}
          >
            <ProjectVisual
              gradient={study.gradient}
              icon={study.icon}
              title={study.client}
              index={currentIndex}
              image={projectImages[study.slug]}
            />
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 relative z-10" aria-label="Case study details">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-4xl font-bold opacity-15" style={{ color: study.color }}>01</span>
                  <h2 className="text-2xl md:text-3xl font-bold">The challenge</h2>
                </div>
                <div className="space-y-3 ml-0 md:ml-16">
                  {study.challenge.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                      className="flex items-start gap-3.5 p-4 bg-[#111] border border-[#222] rounded-xl hover-glow card-lift"
                    >
                      <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${study.color}12` }}>
                        <svg className="w-3.5 h-3.5" style={{ color: study.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <p className="text-[#a0a0a0] text-sm leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-4xl font-bold opacity-15" style={{ color: study.color }}>02</span>
                  <h2 className="text-2xl md:text-3xl font-bold">The solution</h2>
                </div>
                <div className="space-y-3 ml-0 md:ml-16">
                  {study.solution.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                      className="flex items-start gap-3.5 p-4 bg-[#111] border border-[#222] rounded-xl hover-glow card-lift"
                    >
                      <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 bg-[rgba(99,102,241,0.1)]">
                        <svg className="w-3.5 h-3.5 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-[#a0a0a0] text-sm leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-4xl font-bold opacity-15" style={{ color: study.color }}>03</span>
                  <h2 className="text-2xl md:text-3xl font-bold">Key outcomes</h2>
                </div>
                <div className="space-y-3 ml-0 md:ml-16">
                  {study.outcomes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                      className="flex items-start gap-3.5 p-4 bg-[#111] border border-[#222] rounded-xl hover-glow card-lift"
                    >
                      <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 bg-[rgba(99,102,241,0.1)]">
                        <svg className="w-3.5 h-3.5 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[#a0a0a0] text-sm leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="bg-[#111] border border-[#222] rounded-2xl p-7 sticky top-28"
              >
                <h3 className="text-xs font-semibold text-[#6366f1] mb-5 tracking-widest uppercase">Technologies</h3>
                <div className="flex flex-wrap gap-1.5 mb-7">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2.5 py-1.5 bg-black border border-[#222] rounded-md text-[#666666] hover:border-[rgba(99,102,241,0.2)] hover:text-[#a0a0a0] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xs font-semibold text-[#6366f1] mb-3 tracking-widest uppercase">Visit Live Site</h3>
                <a
                  href={`https://${study.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-[#6366f1] transition-colors text-xs"
                >
                  {study.url}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <div className="border-t border-[#222] mt-7 pt-7">
                  <h3 className="text-xs font-semibold text-[#6366f1] mb-3 tracking-widest uppercase">Industry</h3>
                  <p className="text-[#a0a0a0] text-xs">{study.industry}</p>
                </div>

                <div className="border-t border-[#222] mt-7 pt-7">
                  <h3 className="text-xs font-semibold text-[#6366f1] mb-3 tracking-widest uppercase">Client</h3>
                  <p className="text-[#a0a0a0] text-xs">{study.client}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 bg-[#0a0a0a] relative z-10" aria-label="Next case study">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className="text-[#666666] text-xs tracking-wider mb-3">NEXT PROJECT</p>
            <Link
              href={`/portfolio/${nextStudy.slug}`}
              className="group block"
            >
              <div className="flex items-start gap-5">
                <div className="text-4xl opacity-25 group-hover:opacity-50 transition-opacity duration-300">
                  {nextStudy.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold group-hover:text-[#6366f1] transition-colors duration-200 mb-3">
                    {nextStudy.title}
                  </h2>
                  <div className="flex items-center gap-2 text-[#666666] group-hover:text-[#6366f1] transition-colors">
                    <span className="text-xs">View Case Study</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
