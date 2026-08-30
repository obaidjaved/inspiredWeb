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

const clientLogos = [
  { name: 'Client 1', url: 'https://inspired.com.pk/img/clients_img1.jpg' },
  { name: 'Client 2', url: 'https://inspired.com.pk/img/clients_img2.jpg' },
  { name: 'Client 3', url: 'https://inspired.com.pk/img/clients_img3.jpg' },
  { name: 'Client 4', url: 'https://inspired.com.pk/img/clients_img4.png' },
  { name: 'Client 5', url: 'https://inspired.com.pk/img/clients_img5.png' },
  { name: 'Client 6', url: 'https://inspired.com.pk/img/clients_img6.png' },
];

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '15+', label: 'Years Experience' },
  { value: '1000+', label: 'Projects Done' },
  { value: '24/7', label: 'Expert Support' },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <Navbar />

      <section className="pt-28 pb-20 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// WHO WE ARE</span>
            <h1 id="about-hero-heading" className="text-4xl md:text-6xl font-bold mb-5 text-[#e8e8e8]">
              About Inspired
            </h1>
            <p className="text-[#9a9a9a] text-base md:text-lg max-w-2xl leading-relaxed">
              Pakistan&apos;s most trusted IT solutions provider — delivering excellence in networking, security, ERP and digital transformation since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#121212] border-b border-[#1f1f1f] py-12" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#6366f1] mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{stat.value}</div>
                <div className="text-[#636363] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]" aria-labelledby="profile-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <h2 id="profile-heading" className="text-2xl md:text-3xl font-bold mb-5 text-[#e8e8e8]">
                Delivering networking excellence
              </h2>
              <p className="text-[#9a9a9a] text-sm leading-relaxed mb-4">
                Inspired Technology is a network solutions provider based in Pakistan. We provide professional services to large-scale corporate businesses around the globe.
              </p>
              <p className="text-[#9a9a9a] text-sm leading-relaxed mb-7">
                We take pride in being the most trusted networking solution provider in Pakistan, with a proven track record of delivering enterprise-grade solutions across multiple industries.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Cisco Certified', 'ISO Quality', '500+ Clients', 'Global Reach'].map((badge) => (
                  <div key={badge} className="bg-[#6366f1]/10 border border-[#6366f1]/20 px-4 py-2.5 rounded-full flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#818cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#d0d1fb] text-xs font-medium">{badge}</span>
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
                  className="w-full h-[340px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {[
                  { value: '15+', label: 'Years' },
                  { value: '500+', label: 'Clients' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#121212]/95 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-3 text-center">
                    <div className="text-[#818cf8] text-lg font-bold">{stat.value}</div>
                    <div className="text-[#636363] text-[10px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
            <h2 id="timeline-heading" className="text-2xl md:text-3xl font-bold text-[#e8e8e8]">Company timeline</h2>
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
                <div className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-5 flex-1 hover:border-[#6366f1]/30 transition-colors duration-300">
                  <h3 className="text-base font-bold mb-1.5 text-[#e8e8e8]">{item.title}</h3>
                  <p className="text-[#9a9a9a] text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]" aria-labelledby="leadership-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-14"
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// OUR TEAM</span>
            <h2 id="leadership-heading" className="text-2xl md:text-3xl font-bold text-[#e8e8e8]">Leadership</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#6366f1]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-16 h-16 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-bold mb-0.5 text-[#e8e8e8]">{leader.name}</h3>
                    <p className="text-[#818cf8] text-xs font-medium mb-3">{leader.role}</p>
                    <p className="text-[#9a9a9a] text-sm leading-relaxed">{leader.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <h2 id="clients-heading" className="text-2xl md:text-3xl font-bold text-[#e8e8e8]">Our clients</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-60">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.32, 0.72, 0, 1] }}
                className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-4 flex items-center justify-center hover:border-[#6366f1]/30 transition-colors duration-300 h-20"
              >
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-10 object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]" aria-labelledby="about-cta-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 id="about-cta-heading" className="text-3xl md:text-5xl font-bold mb-5 text-[#e8e8e8]">
              Join our growing family
            </h2>
            <p className="text-[#9a9a9a] text-base max-w-xl mx-auto mb-8">
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
