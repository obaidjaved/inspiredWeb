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
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: '02',
    title: 'Service Level Agreements',
    description: 'Expert SLA coverage with 24x7 operations, resident engineers and remote monitoring. Maximum uptime guaranteed with certified on-site support.',
    tags: ['24/7 Operations', 'Resident Engineers', 'Remote Monitoring', 'Uptime SLA'],
    features: ['Guaranteed uptime', 'Dedicated support team', 'Proactive maintenance', 'Performance reporting'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: '03',
    title: 'Comms Room Services',
    description: 'Structured cabling, fiber optic backbone, trunk cabling, CCTV and access control — complete server room infrastructure design and installation.',
    tags: ['Structured Cabling', 'Fiber Optic', 'CCTV', 'Access Control'],
    features: ['Custom design', 'Professional installation', 'Certification', 'Maintenance contracts'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: '04',
    title: 'Data Cabling',
    description: 'Professional data cabling from single outlets to large multi-pair trunk cables across multiple buildings. Certified structured cabling solutions.',
    tags: ['Cat5e/Cat6', 'Fiber Optic', 'Multi-building', 'Certified'],
    features: ['Site survey', 'Cable management', 'Testing & certification', 'Documentation'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: '05',
    title: 'IT & Network Audits',
    description: 'Detailed analysis and system documentation of all hardware and software. Identify risks, prevent outages, and optimize your network investment.',
    tags: ['Risk Assessment', 'Documentation', 'Optimization', 'Compliance'],
    features: ['Full infrastructure audit', 'Risk identification', 'Optimization roadmap', 'Compliance report'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: '06',
    title: 'Fiber Optics',
    description: 'We design and install fiber optic cabling systems with the correct cable, connectors and equipment selected for your specific application requirements.',
    tags: ['Single-mode', 'Multi-mode', 'Splicing', 'OTDR Testing'],
    features: ['Custom design', 'Professional installation', 'OTDR testing', 'Warranty support'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: '07',
    title: 'CCTV Systems',
    description: 'Complete IP camera network solutions — design, installation, testing and certification. Protect your premises with enterprise surveillance.',
    tags: ['IP Cameras', 'NVR/DVR', 'Analytics', 'Remote Access'],
    features: ['HD/4K cameras', 'Night vision', 'Mobile app access', 'Cloud storage'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: '08',
    title: 'Website Development',
    description: 'Corporate websites, e-commerce, landing pages, CMS, UI/UX design and progressive web apps. We build digital experiences that convert visitors into clients.',
    tags: ['Next.js', 'React', 'Shopify', 'WordPress', 'Custom CMS'],
    features: ['Responsive design', 'SEO optimized', 'Performance focused', 'Conversion optimized'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: '09',
    title: 'ERPNext Solutions',
    description: 'Complete ERPNext implementation — accounting, HR & payroll, inventory, CRM, manufacturing and project management. Digitize your entire business.',
    tags: ['ERPNext', 'Frappe', 'ZATCA', 'Custom Modules'],
    features: ['Full implementation', 'Data migration', 'Training & support', 'Custom development'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: '10',
    title: 'AI Automation',
    description: 'AI-powered chatbots, intelligent workflow automation, and predictive analytics. Streamline your operations and enhance customer experience with cutting-edge AI.',
    tags: ['Chatbots', 'LLM', 'RPA', 'Predictive Analytics'],
    features: ['Custom AI solutions', 'Integration support', 'Training data', 'Performance optimization'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&auto=format',
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 relative" aria-labelledby="services-hero-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="text-[#6366f1] text-xs font-medium tracking-[0.15em] mb-4 block">// WHAT WE DO</span>
            <h1 id="services-hero-heading" className="text-4xl md:text-6xl font-bold mb-5">
              Our <span className="gradient-text">services</span>
            </h1>
            <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl leading-relaxed">
              Comprehensive technology solutions tailored to your business needs — from infrastructure to digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-28" aria-label="Services list">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: [0.32, 0.72, 0, 1] }}
                className="group bg-[#111] border border-[#222] rounded-2xl overflow-hidden hover-glow transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="relative h-52 lg:h-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} service`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111]/50 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent lg:hidden" />
                  </div>

                  <div className="lg:col-span-2 p-7 md:p-8">
                    <div className="flex items-start gap-5 mb-5">
                      <span className="text-[#6366f1] text-4xl font-bold opacity-20 group-hover:opacity-80 transition-opacity">
                        {service.id}
                      </span>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#6366f1] transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-[#a0a0a0] text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-3 py-1.5 bg-black border border-[#222] rounded-full text-[#666666] group-hover:border-[rgba(99,102,241,0.2)] group-hover:text-[#a0a0a0] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="bg-black rounded-xl p-5">
                      <h3 className="text-xs font-semibold text-[#6366f1] mb-3 tracking-wider">KEY FEATURES</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-[#a0a0a0] text-xs">
                            <svg className="w-3.5 h-3.5 text-[#6366f1] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#0a0a0a]" aria-labelledby="services-cta-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 id="services-cta-heading" className="text-3xl md:text-5xl font-bold mb-5">
              Need a <span className="gradient-text">custom solution?</span>
            </h2>
            <p className="text-[#a0a0a0] text-base max-w-xl mx-auto mb-8">
              We tailor our services to meet your specific business requirements. Let&apos;s discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#6366f1] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.35)] active:scale-[0.98]"
            >
              Contact Us
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
