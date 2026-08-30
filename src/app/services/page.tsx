'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    id: '01',
    title: 'Network Security',
    description: 'Cisco and multi-vendor installations of any scale. We leverage industry-leading technologies to boost network performance and protect your infrastructure.',
    tags: ['Cisco Certified', 'Firewall', 'VPN', 'SIEM', 'Intrusion Detection'],
    features: ['Enterprise-grade security', '24/7 monitoring', 'Incident response', 'Compliance management'],
  },
  {
    id: '02',
    title: 'Service Level Agreements',
    description: 'Expert SLA coverage with 24×7 operations, resident engineers and remote monitoring. Maximum uptime guaranteed with certified on-site support.',
    tags: ['24/7 Operations', 'Resident Engineers', 'Remote Monitoring', 'Uptime SLA'],
    features: ['Guaranteed uptime', 'Dedicated support team', 'Proactive maintenance', 'Performance reporting'],
  },
  {
    id: '03',
    title: 'Comms Room Services',
    description: 'Structured cabling, fiber optic backbone, trunk cabling, CCTV and access control — complete server room infrastructure design and installation.',
    tags: ['Structured Cabling', 'Fiber Optic', 'CCTV', 'Access Control'],
    features: ['Custom design', 'Professional installation', 'Certification', 'Maintenance contracts'],
  },
  {
    id: '04',
    title: 'Data Cabling',
    description: 'Professional data cabling from single outlets to large multi-pair trunk cables across multiple buildings. Certified structured cabling solutions.',
    tags: ['Cat5e/Cat6', 'Fiber Optic', 'Multi-building', 'Certified'],
    features: ['Site survey', 'Cable management', 'Testing & certification', 'Documentation'],
  },
  {
    id: '05',
    title: 'IT & Network Audits',
    description: 'Detailed analysis and system documentation of all hardware and software. Identify risks, prevent outages, and optimize your network investment.',
    tags: ['Risk Assessment', 'Documentation', 'Optimization', 'Compliance'],
    features: ['Full infrastructure audit', 'Risk identification', 'Optimization roadmap', 'Compliance report'],
  },
  {
    id: '06',
    title: 'Fiber Optics',
    description: 'We design and install fiber optic cabling systems with the correct cable, connectors and equipment selected for your specific application requirements.',
    tags: ['Single-mode', 'Multi-mode', 'Splicing', 'OTDR Testing'],
    features: ['Custom design', 'Professional installation', 'OTDR testing', 'Warranty support'],
  },
  {
    id: '07',
    title: 'CCTV Systems',
    description: 'Complete IP camera network solutions — design, installation, testing and certification. Protect your premises with enterprise surveillance.',
    tags: ['IP Cameras', 'NVR/DVR', 'Analytics', 'Remote Access'],
    features: ['HD/4K cameras', 'Night vision', 'Mobile app access', 'Cloud storage'],
  },
  {
    id: '08',
    title: 'Website Development',
    description: 'Corporate websites, e-commerce, landing pages, CMS, UI/UX design and progressive web apps. We build digital experiences that convert visitors into clients.',
    tags: ['Next.js', 'React', 'Shopify', 'WordPress', 'Custom CMS'],
    features: ['Responsive design', 'SEO optimized', 'Performance focused', 'Conversion optimized'],
  },
  {
    id: '09',
    title: 'ERPNext Solutions',
    description: 'Complete ERPNext implementation — accounting, HR & payroll, inventory, CRM, manufacturing and project management. Digitize your entire business.',
    tags: ['ERPNext', 'Frappe', 'ZATCA', 'Custom Modules'],
    features: ['Full implementation', 'Data migration', 'Training & support', 'Custom development'],
  },
  {
    id: '10',
    title: 'AI Automation',
    description: 'AI-powered chatbots, intelligent workflow automation, and predictive analytics. Streamline your operations and enhance customer experience with cutting-edge AI.',
    tags: ['Chatbots', 'LLM', 'RPA', 'Predictive Analytics'],
    features: ['Custom AI solutions', 'Integration support', 'Training data', 'Performance optimization'],
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative" aria-labelledby="services-hero-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// WHAT WE DO</span>
            <h1 id="services-hero-heading" className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
              Comprehensive technology solutions tailored to your business needs — from infrastructure to digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32" aria-label="Services list">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group bg-dark-card border border-dark-border rounded-3xl p-8 md:p-12 hover-glow transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-6 mb-6">
                      <span className="text-accent text-5xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                        {service.id}
                      </span>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-text-secondary leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-4 py-2 bg-dark border border-dark-border rounded-full text-text-muted group-hover:border-accent/30 group-hover:text-accent/80 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-dark rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-accent mb-4 tracking-wider">KEY FEATURES</h3>
                    <ul className="space-y-3" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-text-secondary text-sm">
                          <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-dark-card/30" aria-labelledby="services-cta-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="services-cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Need a <span className="gradient-text">Custom Solution?</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              We tailor our services to meet your specific business requirements. Let&apos;s discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-dark px-8 py-4 rounded-full text-base font-semibold hover:bg-accent/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
            >
              Contact Us
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
