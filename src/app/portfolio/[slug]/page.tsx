'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { caseStudies } from '@/data/case-studies';
import ProjectVisual from '@/components/visuals/ProjectVisual';
import { MagneticElement, RippleButton } from '@/components/MicroInteractions';

export default function CaseStudyPage() {
  const params = useParams();
  const study = caseStudies.find((s) => s.slug === params.slug);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  if (!study) {
    return (
      <main id="main-content">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <Link href="/portfolio" className="text-accent hover:text-accent/80 transition-colors">
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
        className="pt-32 pb-20 relative min-h-[70vh] flex flex-col justify-end overflow-hidden"
        aria-labelledby="case-study-hero-heading"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${study.color}30 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Floating shapes */}
        <motion.div
          className="absolute top-32 right-20 w-24 h-24 border border-white/10 rounded-2xl"
          animate={{ rotate: 360, y: [0, -10, 0] }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute top-1/2 left-16 w-16 h-16 border border-white/10 rounded-full"
          animate={{ rotate: -360, x: [0, 10, 0] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, x: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
          aria-hidden="true"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(${study.color}15 1px, transparent 1px), linear-gradient(90deg, ${study.color}15 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-16"
        >
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-sm font-mono"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Case Studies
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span
              className="text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full"
              style={{ background: `${study.color}15`, color: study.color, border: `1px solid ${study.color}30` }}
            >
              {study.industry}
            </span>
            <span className="text-text-muted text-sm">{study.url}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            id="case-study-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-8 max-w-5xl tracking-tight"
          >
            {study.title}
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-text-secondary text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            {study.summary}
          </motion.p>

          {/* Metrics bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6 mt-10"
          >
            {study.metrics.map((metric) => (
              <div key={metric.label} className="flex items-baseline gap-3">
                <span className="text-2xl md:text-3xl font-bold" style={{ color: study.color }}>{metric.value}</span>
                <span className="text-text-muted text-sm">{metric.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Project Visual Banner */}
      <section className="relative z-10 -mt-10" aria-label="Project preview">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ProjectVisual
              gradient={study.gradient}
              icon={study.icon}
              title={study.client}
              index={currentIndex}
            />
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 relative z-10" aria-label="Case study details">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-20">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-bold opacity-20" style={{ color: study.color }}>01</span>
                  <h2 className="text-3xl md:text-4xl font-bold">The Challenge</h2>
                </div>
                <div className="space-y-4 ml-0 md:ml-20">
                  {study.challenge.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start gap-4 p-5 bg-dark-card border border-dark-border rounded-2xl hover-glow card-lift"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${study.color}15` }}>
                        <svg className="w-4 h-4" style={{ color: study.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <p className="text-text-secondary leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-bold opacity-20" style={{ color: study.color }}>02</span>
                  <h2 className="text-3xl md:text-4xl font-bold">The Solution</h2>
                </div>
                <div className="space-y-4 ml-0 md:ml-20">
                  {study.solution.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start gap-4 p-5 bg-dark-card border border-dark-border rounded-2xl hover-glow card-lift"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-accent/10">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-text-secondary leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-bold opacity-20" style={{ color: study.color }}>03</span>
                  <h2 className="text-3xl md:text-4xl font-bold">Key Outcomes</h2>
                </div>
                <div className="space-y-4 ml-0 md:ml-20">
                  {study.outcomes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start gap-4 p-5 bg-dark-card border border-dark-border rounded-2xl hover-glow card-lift"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-green-500/10">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-text-secondary leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-dark-card border border-dark-border rounded-3xl p-8 sticky top-32"
              >
                <h3 className="text-sm font-semibold text-accent mb-6 tracking-widest uppercase font-mono">Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-2 bg-dark border border-dark-border rounded-lg text-text-muted hover:border-accent/30 hover:text-accent/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-sm font-semibold text-accent mb-4 tracking-widest uppercase font-mono">Visit Live Site</h3>
                <a
                  href={`https://${study.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-primary hover:text-accent transition-colors text-sm"
                >
                  {study.url}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <div className="border-t border-dark-border mt-8 pt-8">
                  <h3 className="text-sm font-semibold text-accent mb-4 tracking-widest uppercase font-mono">Industry</h3>
                  <p className="text-text-secondary text-sm">{study.industry}</p>
                </div>

                <div className="border-t border-dark-border mt-8 pt-8">
                  <h3 className="text-sm font-semibold text-accent mb-4 tracking-widest uppercase font-mono">Client</h3>
                  <p className="text-text-secondary text-sm">{study.client}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 bg-dark-card/30 relative z-10" aria-label="Next case study">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-text-muted text-sm font-mono tracking-wider mb-4">NEXT PROJECT</p>
            <Link
              href={`/portfolio/${nextStudy.slug}`}
              className="group block"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                  {nextStudy.icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold group-hover:text-accent transition-colors duration-200 mb-4">
                    {nextStudy.title}
                  </h2>
                  <div className="flex items-center gap-2 text-text-muted group-hover:text-accent transition-colors">
                    <span className="text-sm">View Case Study</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
