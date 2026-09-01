'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectMockup from '@/components/ProjectMockup';
import { caseStudies } from '@/data/case-studies';

const showcaseOrder = [
  'tapsvs-lms',
  'dikhatz-shopify',
  'khadamatfm-ae',
  'drive-venturous',
  'meri-pharmacy',
  'made-by-throne',
  'clineum-medical',
  'webratek-uk',
  'fusion-experts',
  'pegasus-writing',
  'thread21-pk',
  'english-evolution',
  'agrilift-ai',
  'ufussas-closet',
];

const showcaseProjects = showcaseOrder
  .map((slug) => caseStudies.find((c) => c.slug === slug))
  .filter(Boolean) as typeof caseStudies;

export default function PortfolioMockupTemplatePage() {
  return (
    <main id="main-content" className="bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="mockup-hero-heading">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// SELECTED WORK</span>
            <h1 id="mockup-hero-heading" className="text-4xl md:text-6xl font-bold mb-5 text-[#e8e8e8] leading-[1.08]">
              Fourteen builds, one consistent frame.
            </h1>
            <p className="text-[#9a9a9a] text-base md:text-lg max-w-2xl leading-relaxed">
              Live screenshots from each project, set inside a shared device-mockup system — laptop frame for desktop-led sites, dual-phone frame for mobile-led and Shopify storefronts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Rows */}
      <div className="relative z-10">
        {showcaseProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          const isMobile = project.mockupType === 'mobile';

          return (
            <section
              key={project.slug}
              className="border-b border-[#1f1f1f] py-20 md:py-24"
              aria-labelledby={`case-${project.slug}`}
            >
              <div className="max-w-7xl mx-auto px-6">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isEven ? '' : ''
                  }`}
                >
                  {/* Copy */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    className={isEven ? 'lg:order-2' : ''}
                  >
                    <p className="text-[#6366f1] text-xs font-bold mb-4 font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h2
                      id={`case-${project.slug}`}
                      className="text-2xl md:text-3xl font-bold mb-3 text-[#e8e8e8] leading-tight"
                    >
                      {project.title}
                    </h2>
                    <p className="text-[#636363] text-xs font-mono mb-5">{project.url}</p>
                    <p className="text-[#9a9a9a] text-sm leading-relaxed mb-6 max-w-lg">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-[#2a2a2a] text-[#9a9a9a] bg-[#121212] hover:border-[#6366f1]/30 hover:text-[#818cf8] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Device Stage */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
                    className={`relative flex items-center justify-center min-h-[420px] md:min-h-[520px] ${
                      isEven ? 'lg:order-1' : ''
                    }`}
                  >
                    {/* Ambient glow */}
                    <div
                      className="absolute inset-0 rounded-full opacity-30 blur-3xl"
                      aria-hidden="true"
                      style={{
                        background: `radial-gradient(closest-side, ${project.color}22, transparent 72%)`,
                      }}
                    />

                    {isMobile ? (
                      /* Dual Phone Layout */
                      <div className="relative w-full max-w-[400px] h-[420px] md:h-[520px] z-10">
                        <div className="absolute left-[6%] top-[8%] z-20 -rotate-9">
                          <ProjectMockup
                            image={project.featuredImage}
                            title={project.title}
                            url={project.url}
                            type="mobile"
                            accentColor={project.color}
                          />
                        </div>
                        <div className="absolute right-[6%] top-[20%] z-10 rotate-7">
                          <ProjectMockup
                            image={project.featuredImage}
                            title={project.title}
                            url={project.url}
                            type="mobile"
                            accentColor={project.color}
                          />
                        </div>
                      </div>
                    ) : (
                      /* Laptop Layout */
                      <div className="w-full max-w-[480px] z-10">
                        <ProjectMockup
                          image={project.featuredImage}
                          title={project.title}
                          url={project.url}
                          type="desktop"
                          accentColor={project.color}
                        />
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a]" aria-labelledby="mockup-cta-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 id="mockup-cta-heading" className="text-3xl md:text-5xl font-bold mb-5 text-[#e8e8e8]">
              Ready to build your next project?
            </h2>
            <p className="text-[#9a9a9a] text-base max-w-xl mx-auto mb-8">
              We bring the same precision and craft to every engagement. Let&apos;s discuss your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#6366f1] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.35)] active:scale-[0.98]"
            >
              Start a Conversation
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
