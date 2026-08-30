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
    // Handle form submission
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative" aria-labelledby="contact-hero-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// GET IN TOUCH</span>
            <h1 id="contact-hero-heading" className="text-5xl md:text-7xl font-bold mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
              Ready to transform your digital presence? Let&apos;s discuss your project and find the perfect solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-32" aria-label="Contact form and information">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="group flex items-start gap-4 p-4 bg-dark-card border border-dark-border rounded-2xl hover-glow transition-all duration-200"
                >
                  <div className="w-12 h-12 border border-dark-border rounded-xl flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all flex-shrink-0">
                    <svg className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={info.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm mb-1">{info.title}</p>
                    <p className="text-text-primary font-medium group-hover:text-accent transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}

              <div className="pt-6">
                <h3 className="text-sm font-semibold text-accent mb-4 tracking-wider">OFFICE HOURS</h3>
                <div className="space-y-2 text-text-secondary text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-dark-card border border-dark-border rounded-3xl p-8 md:p-10 space-y-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-muted mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-text-muted mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-text-muted mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm text-text-muted mb-2">Service Interested In *</label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-text-muted mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-dark py-4 rounded-full text-base font-semibold hover:bg-accent/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>

                <p className="text-text-muted text-xs text-center">
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
