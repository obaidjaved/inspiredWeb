'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const timeline = [
  { year: '2009', title: 'Founded', description: 'Inspired Technology established in Karachi, Pakistan.' },
  { year: '2012', title: 'First Major Client', description: 'Secured enterprise networking contracts across Pakistan.' },
  { year: '2015', title: 'Global Expansion', description: 'Expanded operations to USA and Saudi Arabia.' },
  { year: '2018', title: 'ERPNext Partner', description: 'Became certified ERPNext implementation partner.' },
  { year: '2020', title: 'AI Division', description: 'Launched AI automation and chatbot development services.' },
  { year: '2023', title: '500+ Clients', description: 'Reached milestone of 500+ clients served globally.' },
];

const leaders = [
  { name: 'Ahmad Raza', role: 'CEO & Founder', description: 'Visionary leader with 15+ years in IT infrastructure and business strategy.' },
  { name: 'Usman Ali', role: 'CTO', description: 'Technical architect specializing in enterprise networking and security.' },
];

const clients = [
  'Bank Alfalah', 'careem', 'Olpak', 'Dolmen Group', 'Hashoo Group', 'Ghandhara',
  'Pakland Cement', 'Packages Ltd', 'Dawood Hercules', 'Engro Corp',
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative" aria-labelledby="about-hero-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// WHO WE ARE</span>
            <h1 id="about-hero-heading" className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="gradient-text">Inspired</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
              Pakistan&apos;s most trusted IT solutions provider — delivering excellence in networking, security, ERP and digital transformation since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20" aria-labelledby="profile-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="profile-heading" className="text-3xl md:text-4xl font-bold mb-6">
                Delivering <span className="gradient-text">Networking Excellence</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Inspired Technology is a network solutions provider based in Pakistan. We provide professional services to large-scale corporate businesses around the globe.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                We take pride in being the most trusted networking solution provider in Pakistan, with a proven track record of delivering enterprise-grade solutions across multiple industries.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Cisco Certified', 'ISO Quality', '500+ Clients', 'Global Reach'].map((badge) => (
                  <div key={badge} className="bg-dark-card border border-dark-border px-5 py-3 rounded-xl flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-primary text-sm font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '500+', label: 'Clients Served' },
                { value: '1000+', label: 'Projects Completed' },
                { value: '24/7', label: 'Expert Support' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-dark-card border border-dark-border rounded-2xl p-6 text-center hover-glow"
                >
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-text-muted text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-dark-card/30" aria-labelledby="timeline-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// OUR JOURNEY</span>
            <h2 id="timeline-heading" className="text-3xl md:text-4xl font-bold">Company Timeline</h2>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-8"
              >
                <div className="text-accent font-mono text-lg font-bold w-16 flex-shrink-0">{item.year}</div>
                <div className="bg-dark-card border border-dark-border rounded-2xl p-6 flex-1 hover-glow">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20" aria-labelledby="leadership-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// OUR TEAM</span>
            <h2 id="leadership-heading" className="text-3xl md:text-4xl font-bold">Leadership</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-3xl p-8 hover-glow"
              >
                <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-accent text-3xl font-bold">{leader.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-accent text-sm font-medium mb-4">{leader.role}</p>
                <p className="text-text-secondary leading-relaxed">{leader.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-dark-card/30" aria-labelledby="clients-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// TRUSTED BY</span>
            <h2 id="clients-heading" className="text-3xl md:text-4xl font-bold">Our Clients</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-dark-card border border-dark-border rounded-xl p-6 flex items-center justify-center hover-glow h-24"
              >
                <span className="text-text-muted text-sm font-medium text-center">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32" aria-labelledby="about-cta-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="about-cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="gradient-text">Growing Family</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Experience the Inspired difference — where technology meets excellence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-dark px-8 py-4 rounded-full text-base font-semibold hover:bg-accent/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
            >
              Get in Touch
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
