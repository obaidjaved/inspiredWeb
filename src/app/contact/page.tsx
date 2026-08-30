'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const contactInfo = [
  { title: 'Phone (Pakistan)', value: '+92 300 9221193', href: 'tel:+923009221193', icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z' },
  { title: 'Phone (USA)', value: '+1 (973) 626-0873', href: 'tel:+19736260873', icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z' },
  { title: 'Email', value: 'contact@inspired.com.pk', href: 'mailto:contact@inspired.com.pk', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
  { title: 'Location', value: 'Karachi, Pakistan', href: '/contact', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 13a3 3 0 100-6 3 3 0 000 6z' },
];

const services = [
  'Network Security',
  'Web Development',
  'ERPNext Solutions',
  'AI Automation',
  'Data Cabling',
  'CCTV Systems',
  'IT Audits',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 relative" aria-labelledby="contact-hero-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// GET IN TOUCH</span>
            <h1 id="contact-hero-heading" className="text-4xl md:text-6xl font-bold mb-5">
              Contact us
            </h1>
            <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl leading-relaxed">
              Ready to transform your digital presence? Let&apos;s discuss your project and find the perfect solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-28" aria-label="Contact form and information">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold mb-6">Contact information</h2>

              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="group flex items-start gap-3.5 p-3.5 bg-[#111] border border-[#222] rounded-xl hover-glow transition-all duration-200"
                >
                  <div className="w-10 h-10 border border-[#222] rounded-lg flex items-center justify-center group-hover:border-[rgba(99,102,241,0.3)] group-hover:bg-[rgba(99,102,241,0.05)] transition-all flex-shrink-0">
                    <svg className="w-4 h-4 text-[#666666] group-hover:text-[#6366f1] transition-colors" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={info.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#666666] text-xs mb-0.5">{info.title}</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#6366f1] transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}

              <div className="pt-4">
                <h3 className="text-xs font-semibold text-[#6366f1] mb-3 tracking-wider">OFFICE HOURS</h3>
                <div className="space-y-1.5 text-[#a0a0a0] text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-[#111] border border-[#222] rounded-2xl p-7 md:p-8 space-y-5">
                <h2 className="text-xl font-bold mb-5">Send us a message</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-[#666666] mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border border-[#222] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[rgba(99,102,241,0.4)] focus:ring-1 focus:ring-[rgba(99,102,241,0.15)] transition-all placeholder:text-[#666666]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-[#666666] mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black border border-[#222] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[rgba(99,102,241,0.4)] focus:ring-1 focus:ring-[rgba(99,102,241,0.15)] transition-all placeholder:text-[#666666]"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs text-[#666666] mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black border border-[#222] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[rgba(99,102,241,0.4)] focus:ring-1 focus:ring-[rgba(99,102,241,0.15)] transition-all placeholder:text-[#666666]"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs text-[#666666] mb-1.5">Service Interested In *</label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-black border border-[#222] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[rgba(99,102,241,0.4)] focus:ring-1 focus:ring-[rgba(99,102,241,0.15)] transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-[#666666] mb-1.5">Your Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black border border-[#222] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[rgba(99,102,241,0.4)] focus:ring-1 focus:ring-[rgba(99,102,241,0.15)] transition-all resize-none placeholder:text-[#666666]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6366f1] text-white py-3 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.35)] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>

                <p className="text-[#666666] text-xs text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
