'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

const offices = [
  { city: 'Karachi', address: 'Plot 4/C, SB-14, KDA Scheme 24, Qayyumabad', phone: '+92 21 3258 0106', hours: 'Mon–Fri, 9AM–6PM' },
  { city: 'Lahore', address: 'Office 412, SB-12, City Tower, Main Boulevard', phone: '+92 42 3578 0106', hours: 'Mon–Fri, 9AM–6PM' },
  { city: 'Riyadh', address: 'Office 204, Business District, King Fahd Road', phone: '+966 11 234 5678', hours: 'Sun–Thu, 9AM–5PM' },
  { city: 'New York', address: '200 Park Avenue, Suite 1700, New York, NY 10166', phone: '+1 (888) 345 6789', hours: 'Mon–Fri, 9AM–5PM EST' },
];

const process = [
  { step: '01', title: 'Tell us about your project', description: 'Share your requirements and goals with our team.' },
  { step: '02', title: 'We analyze and plan', description: 'Our experts craft a tailored solution strategy.' },
  { step: '03', title: 'Deliver with excellence', description: 'We implement and provide ongoing support.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      alert('Message sent! We\'ll get back to you within 24 hours.');
    }, 1500);
  };

  return (
    <main id="main-content">
      <Navbar />

      {/* Dark Hero */}
      <section className="pt-28 pb-20 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="contact-hero-heading">
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
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// GET IN TOUCH</span>
            <h1 id="contact-hero-heading" className="text-4xl md:text-6xl font-bold mb-5 text-white">
              Contact us
            </h1>
            <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl leading-relaxed">
              Ready to transform your business? Let&apos;s discuss your project and find the perfect solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Light Process Steps */}
      <section className="bg-white border-b border-gray-100 py-14" aria-label="Our process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-5"
              >
                <span className="text-[#6366f1] text-2xl font-bold opacity-25 flex-shrink-0">{step.step}</span>
                <div>
                  <h3 className="text-sm font-bold text-[#171616] mb-1">{step.title}</h3>
                  <p className="text-[#888] text-xs leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Form + Contact Info */}
      <section className="py-20 bg-gray-50" aria-labelledby="form-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              >
                <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// SEND A MESSAGE</span>
                <h2 id="form-heading" className="text-2xl md:text-3xl font-bold mb-6 text-[#171616]">Get in touch</h2>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-[#171616] text-xs font-medium block mb-1.5">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#171616] text-sm placeholder:text-[#bbb] focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[#171616] text-xs font-medium block mb-1.5">Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#171616] text-sm placeholder:text-[#bbb] focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="text-[#171616] text-xs font-medium block mb-1.5">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#171616] text-sm placeholder:text-[#bbb] focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-[#171616] text-xs font-medium block mb-1.5">Company</label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#171616] text-sm placeholder:text-[#bbb] focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all duration-200"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="text-[#171616] text-xs font-medium block mb-1.5">Service Interest</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#171616] text-sm focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all duration-200 appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="networking">Network Infrastructure</option>
                    <option value="security">Cyber Security</option>
                    <option value="erp">ERP Solutions</option>
                    <option value="ai">AI Automation</option>
                    <option value="web">Web Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-[#171616] text-xs font-medium block mb-1.5">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#171616] text-sm placeholder:text-[#bbb] focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all duration-200 resize-none"
                    placeholder="Tell us about your project, requirements, and timeline..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6366f1] text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.35)] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="space-y-5"
              >
                {offices.map((office) => (
                  <div key={office.city} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <h3 className="text-base font-bold text-[#171616] mb-2">{office.city}</h3>
                    <p className="text-[#555] text-xs leading-relaxed mb-2">{office.address}</p>
                    <p className="text-[#6366f1] text-xs font-medium mb-1">{office.phone}</p>
                    <p className="text-[#888] text-[10px]">{office.hours}</p>
                  </div>
                ))}

                <div className="bg-[#0a0a0a] rounded-xl p-5">
                  <h3 className="text-sm font-bold text-white mb-3">Direct Contact</h3>
                  <div className="space-y-2">
                    <a href="mailto:sales@inspired.com.pk" className="flex items-center gap-3 text-[#a0a0a0] text-xs hover:text-white transition-colors">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      sales@inspired.com.pk
                    </a>
                    <a href="tel:+922132580106" className="flex items-center gap-3 text-[#a0a0a0] text-xs hover:text-white transition-colors">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +92 21 3258 0106
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
