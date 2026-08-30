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
  { name: 'Ahmad Raza', role: 'CEO & Founder', description: 'Visionary leader with 15+ years in IT infrastructure and business strategy.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format' },
  { name: 'Usman Ali', role: 'CTO', description: 'Technical architect specializing in enterprise networking and security.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format' },
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
      <section className="pt-28 pb-16 relative" aria-labelledby="about-hero-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// WHO WE ARE</span>
            <h1 id="about-hero-heading" className="text-4xl md:text-6xl font-bold mb-5">
              About Inspired
            </h1>
            <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl leading-relaxed">
              Pakistan&apos;s most trusted IT solutions provider — delivering excellence in networking, security, ERP and digital transformation since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20" aria-labelledby="profile-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <h2 id="profile-heading" className="text-2xl md:text-3xl font-bold mb-5">
                Delivering networking excellence
              </h2>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                Inspired Technology is a network solutions provider based in Pakistan. We provide professional services to large-scale corporate businesses around the globe.
              </p>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-7">
                We take pride in being the most trusted networking solution provider in Pakistan, with a proven track record of delivering enterprise-grade solutions across multiple industries.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Cisco Certified', 'ISO Quality', '500+ Clients', 'Global Reach'].map((badge) => (
                  <div key={badge} className="bg-[#111] border border-[#222] px-4 py-2.5 rounded-full flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white text-xs font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&auto=format"
                  alt="Inspired Technology team meeting"
                  className="w-full h-[340px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {[
                  { value: '15+', label: 'Years' },
                  { value: '500+', label: 'Clients' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#111]/90 backdrop-blur-sm border border-[#222] rounded-xl p-3 text-center">
                    <div className="text-[#6366f1] text-lg font-bold">{stat.value}</div>
                    <div className="text-[#666666] text-[10px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0a0a0a]" aria-labelledby="timeline-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-14"
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// OUR JOURNEY</span>
            <h2 id="timeline-heading" className="text-2xl md:text-3xl font-bold">Company timeline</h2>
          </motion.div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
                className="flex items-start gap-6"
              >
                <div className="text-[#6366f1] text-sm font-bold w-14 flex-shrink-0 pt-4">{item.year}</div>
                <div className="bg-[#111] border border-[#222] rounded-xl p-5 flex-1 hover-glow">
                  <h3 className="text-base font-bold mb-1.5 text-white">{item.title}</h3>
                  <p className="text-[#a0a0a0] text-sm">{item.description}</p>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-14"
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// OUR TEAM</span>
            <h2 id="leadership-heading" className="text-2xl md:text-3xl font-bold">Leadership</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="bg-[#111] border border-[#222] rounded-2xl p-7 hover-glow"
              >
                <div className="flex items-start gap-5">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-16 h-16 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-bold mb-0.5 text-white">{leader.name}</h3>
                    <p className="text-[#6366f1] text-xs font-medium mb-3">{leader.role}</p>
                    <p className="text-[#a0a0a0] text-sm leading-relaxed">{leader.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-[#0a0a0a]" aria-labelledby="clients-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-14"
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// TRUSTED BY</span>
            <h2 id="clients-heading" className="text-2xl md:text-3xl font-bold">Our clients</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.32, 0.72, 0, 1] }}
                className="bg-[#111] border border-[#222] rounded-xl p-5 flex items-center justify-center hover-glow h-20"
              >
                <span className="text-[#666666] text-xs font-medium text-center">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" aria-labelledby="about-cta-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 id="about-cta-heading" className="text-3xl md:text-5xl font-bold mb-5">
              Join our growing family
            </h2>
            <p className="text-[#a0a0a0] text-base max-w-xl mx-auto mb-8">
              Experience the Inspired difference — where technology meets excellence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#6366f1] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.35)] active:scale-[0.98]"
            >
              Get in Touch
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
