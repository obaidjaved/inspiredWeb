'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: 'Mucho Burrito',
    category: 'UI/UX Design & Web Development',
    description: 'Complete brand identity and web platform for a leading food chain. Custom ordering system with real-time tracking.',
    metric: '+310% Revenue Growth',
    metricLabel: 'Revenue Increase',
    tags: ['React', 'Node.js', 'UI/UX', 'E-Commerce'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: 'myZoi Financial',
    category: 'Full Stack Marketing & Development',
    description: 'Digital transformation for a fintech startup. From brand strategy to full-stack development and performance marketing.',
    metric: '3.4x ROAS',
    metricLabel: 'Return on Ad Spend',
    tags: ['Next.js', 'Fintech', 'Marketing', 'Analytics'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: "Stillman's Beauty",
    category: 'E-Commerce & Brand Strategy',
    description: 'Premium e-commerce platform with custom product configurator and integrated inventory management.',
    metric: '$1.2M Revenue Generated',
    metricLabel: 'First Year Revenue',
    tags: ['Shopify', 'E-Commerce', 'Branding', 'SEO'],
    color: 'from-pink-500 to-purple-500',
  },
  {
    id: 4,
    title: 'Combaxx Sports',
    category: 'Web Development & SEO',
    description: 'High-performance sports brand website with integrated e-commerce and global shipping capabilities.',
    metric: '+85% Conversion Boost',
    metricLabel: 'Conversion Rate',
    tags: ['Next.js', 'Shopify', 'SEO', 'Performance'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Tech Crafters',
    category: 'AI Automation & ERP',
    description: 'Custom complaint tracking system with AI-powered ticket routing and automated response generation.',
    metric: '60% Cost Reduction',
    metricLabel: 'Operational Costs',
    tags: ['ERPNext', 'AI', 'Automation', 'Custom'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 6,
    title: 'Royal Canadian Steel',
    category: 'Web Development & Branding',
    description: 'Corporate website redesign with integrated project portfolio and client management system.',
    metric: '+200% Lead Generation',
    metricLabel: 'Qualified Leads',
    tags: ['WordPress', 'Branding', 'SEO', 'CMS'],
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function PortfolioPage() {
  return (
    <main id="main-content">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative" aria-labelledby="portfolio-hero-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// OUR WORK</span>
            <h1 id="portfolio-hero-heading" className="text-5xl md:text-7xl font-bold mb-6">
              Case Studies That <span className="gradient-text">Speak</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32" aria-label="Projects list">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden min-h-[400px] bg-dark-card border border-dark-border hover-glow"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 bg-dark border border-dark-border rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-accent text-xl font-bold">{String(project.id).padStart(2, '0')}</span>
                    </div>
                    <div className="bg-accent/10 border border-accent/30 px-5 py-2.5 rounded-full">
                      <span className="text-accent text-sm font-bold">{project.metric}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-accent/80 text-sm font-medium mb-4">{project.category}</p>
                    <p className="text-text-secondary leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 bg-dark border border-dark-border rounded-full text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-dark-border">
                    <span className="text-text-muted text-sm">{project.metricLabel}</span>
                    <div className="w-10 h-10 border border-dark-border rounded-full flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-200">
                      <svg className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-dark-card/30" aria-labelledby="portfolio-cta-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="portfolio-cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can help you achieve similar results for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-dark px-8 py-4 rounded-full text-base font-semibold hover:bg-accent/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
