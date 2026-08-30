'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroVisual from '@/components/visuals/HeroVisual';
import ServiceVisual from '@/components/visuals/ServiceVisual';
import { RippleButton, MagneticElement, TextReveal } from '@/components/MicroInteractions';

const Background3DCSS = dynamic(() => import('@/components/Background3DCSS'), { ssr: false });

const services = [
  { id: '01', title: 'Network Security', description: 'Cisco and multi-vendor installations of any scale. Industry-leading technologies to boost network performance.', tags: ['Cisco', 'Firewall', 'VPN', 'SIEM'], icon: '🔒', color: '#00FF88' },
  { id: '02', title: 'Web Development', description: 'Corporate websites, e-commerce, landing pages, CMS, UI/UX design and progressive web apps.', tags: ['Next.js', 'React', 'Shopify', 'WordPress'], icon: '🌐', color: '#00B4FF' },
  { id: '03', title: 'ERPNext Solutions', description: 'Complete ERPNext implementation — accounting, HR, inventory, CRM, manufacturing and project management.', tags: ['ERPNext', 'Frappe', 'ZATCA', 'Custom'], icon: '📊', color: '#8B5CF6' },
  { id: '04', title: 'AI Automation', description: 'AI-powered chatbots, intelligent workflow automation, and predictive analytics.', tags: ['Chatbots', 'LLM', 'RPA', 'Analytics'], icon: '🤖', color: '#FF0080' },
  { id: '05', title: 'Data Cabling', description: 'Professional structured cabling from single outlets to large multi-pair trunk cables.', tags: ['Fiber', 'Cat6', 'Structured', 'Certified'], icon: '🔌', color: '#F59E0B' },
  { id: '06', title: 'CCTV Systems', description: 'Complete IP camera network solutions — design, installation, testing and certification.', tags: ['IP Cameras', 'NVR', 'Analytics', 'Cloud'], icon: '📹', color: '#10B981' },
];

const projects = [
  { id: 1, title: 'Mucho Burrito', category: 'UI/UX & Web Dev', metric: '+310% Revenue', gradient: 'from-orange-500 to-red-500', icon: '🌮' },
  { id: 2, title: 'myZoi Financial', category: 'Full Stack Marketing', metric: '3.4x ROAS', gradient: 'from-blue-500 to-cyan-500', icon: '💳' },
  { id: 3, title: "Stillman's Beauty", category: 'E-Commerce', metric: '$1.2M Revenue', gradient: 'from-pink-500 to-purple-500', icon: '💄' },
  { id: 4, title: 'Combaxx Sports', category: 'Web Dev & SEO', metric: '+85% Conversion', gradient: 'from-green-500 to-emerald-500', icon: '⚽' },
];

const testimonials = [
  { quote: "Inspired Technology transformed our digital presence completely. Their AI automation solutions saved us 40% in operational costs.", author: 'Sarah Mitchell', role: 'CEO, TechVentures Inc.' },
  { quote: "The team delivered a world-class e-commerce platform that increased our online revenue by 310%.", author: 'Ahmed Al-Rashid', role: 'Founder, Luxe Commerce' },
  { quote: "From SEO to performance marketing, Inspired Technology took our brand from invisible to industry leader.", author: 'Fatima Khan', role: 'Marketing Director, Global Brands' },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  return (
    <main id="main-content">
      <Navbar />
      <Background3DCSS />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-labelledby="hero-heading">
        <HeroVisual variant="default" />

        <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8"
          >
            <span className="text-accent text-sm font-mono tracking-widest uppercase">// INSPIRED TECHNOLOGY</span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.03] mb-8 max-w-5xl tracking-tight"
          >
            <TextReveal delay={0.5}>
              We Build, Design, and Scale Digital Experiences That Deliver.
            </TextReveal>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          >
            From enterprise networking and cybersecurity to ERP systems and web development — we deliver end-to-end technology solutions that transform businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <MagneticElement strength={0.2}>
              <RippleButton href="/services" variant="primary" className="px-8 py-4 rounded-full text-base">
                Explore Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </RippleButton>
            </MagneticElement>
            <MagneticElement strength={0.2}>
              <RippleButton href="/contact" variant="secondary" className="px-8 py-4 rounded-full text-base">
                Talk to an Expert
                <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" aria-hidden="true" />
              </RippleButton>
            </MagneticElement>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '500+', label: 'Clients Served' },
              { value: '15+', label: 'Years Experience' },
              { value: '1000+', label: 'Projects Completed' },
              { value: '24/7', label: 'Expert Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center md:text-left"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Marquee */}
        <div className="relative border-y border-dark-border bg-dark-card/50 py-4 overflow-hidden z-10" aria-hidden="true">
          <div className="animate-marquee flex whitespace-nowrap">
            {['PERFORMANCE MARKETING', 'UI/UX DESIGN', 'AI AUTOMATION', 'E-COMMERCE GROWTH', 'CUSTOM WEB SYSTEMS', 'SEO OPTIMIZATION', 'NETWORK SECURITY', 'ERPNext'].map((item, index) => (
              <span key={index} className="mx-8 text-sm font-mono text-text-muted tracking-wider">
                {item}
                <span className="ml-8 text-accent">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 relative z-10" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="text-accent text-sm font-mono tracking-widest uppercase mb-4 block">// WHO WE ARE</span>
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6">
                We Deliver <span className="gradient-text">Networking Excellence</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Inspired Technology is a network solutions provider based in Pakistan, delivering professional services to large-scale corporate businesses around the globe. We take pride in being the most trusted networking solution provider in Pakistan.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-dark-card border border-dark-border px-5 py-3 rounded-xl flex items-center gap-3">
                  <span className="text-accent font-bold">Cisco</span>
                  <span className="text-text-muted text-sm">Certified Partner</span>
                </div>
                <div className="bg-dark-card border border-dark-border px-5 py-3 rounded-xl flex items-center gap-3">
                  <span className="text-accent font-bold">ISO</span>
                  <span className="text-text-muted text-sm">Quality Standards</span>
                </div>
              </div>
              <MagneticElement strength={0.15}>
                <RippleButton href="/about" variant="ghost" className="text-accent font-semibold">
                  Learn More About Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </RippleButton>
              </MagneticElement>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: '🌐', title: 'Global Reach', desc: 'Serving clients in Pakistan, USA, Saudi Arabia & beyond' },
                { icon: '🔒', title: 'Secure by Design', desc: 'Enterprise-grade security in every solution' },
                { icon: '⚡', title: 'Fast Deployment', desc: 'Quick turnaround without compromising quality' },
                { icon: '🤝', title: '24/7 Support', desc: 'Resident engineers and remote monitoring always ready' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="bg-dark-card border border-dark-border rounded-2xl p-6 hover-glow card-lift"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative z-10 bg-dark-card/30" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-16"
          >
            <span className="text-accent text-sm font-mono tracking-widest uppercase mb-4 block">// OUR EXPERTISE</span>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold">
              Services That <span className="gradient-text">Drive Growth</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group bg-dark-card border border-dark-border rounded-2xl p-8 hover-glow card-lift cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <ServiceVisual icon={service.icon} color={service.color} size="md" />
                  <div className="w-10 h-10 border border-dark-border rounded-full flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-200">
                    <svg className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-dark border border-dark-border rounded-full text-text-muted group-hover:border-accent/30 group-hover:text-accent/80 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <MagneticElement strength={0.15}>
              <RippleButton href="/services" variant="ghost" className="text-accent font-semibold">
                View All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </RippleButton>
            </MagneticElement>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-32 relative z-10" aria-labelledby="work-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-16"
          >
            <span className="text-accent text-sm font-mono tracking-widest uppercase mb-4 block">// OUR WORK</span>
            <h2 id="work-heading" className="text-4xl md:text-5xl font-bold">
              Case Studies That <span className="gradient-text">Speak</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer min-h-[320px] card-lift"
              >
                {/* Visual background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-25 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />
                <div className="absolute inset-0 bg-dark/50" />

                {/* Floating shapes */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 border border-white/10 rounded-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute bottom-12 left-12 w-10 h-10 border border-white/10 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                  {project.icon}
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-dark-card/80 border border-dark-border rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
                      <span className="text-accent text-xl font-bold">{String(project.id).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-text-secondary text-sm">{project.category}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="bg-accent/10 border border-accent/30 px-4 py-2 rounded-full backdrop-blur-sm">
                      <span className="text-accent text-sm font-semibold">{project.metric}</span>
                    </div>
                    <div className="w-10 h-10 border border-dark-border rounded-full flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-200 backdrop-blur-sm">
                      <svg className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <MagneticElement strength={0.15}>
              <RippleButton href="/portfolio" variant="ghost" className="text-accent font-semibold">
                View All Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </RippleButton>
            </MagneticElement>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative z-10 bg-dark-card/30" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-16"
          >
            <span className="text-accent text-sm font-mono tracking-widest uppercase mb-4 block">// WHAT PEOPLE SAY</span>
            <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-dark-card border border-dark-border rounded-2xl p-8 hover-glow card-lift relative overflow-hidden"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
                
                <svg className="w-10 h-10 text-accent/30 mb-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-text-primary leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-text-muted text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative z-10 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-blue/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-accent text-sm font-mono tracking-widest uppercase mb-6 block">// READY TO GROW?</span>
            <h2 id="cta-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              Ready to squish the <span className="gradient-text">competition?</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Let&apos;s talk about how we can transform your digital presence and drive real results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticElement strength={0.2}>
                <RippleButton href="/contact" variant="primary" className="px-10 py-5 rounded-full text-lg">
                  Start Your Project
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </RippleButton>
              </MagneticElement>
              <MagneticElement strength={0.2}>
                <RippleButton href="/services" variant="secondary" className="px-10 py-5 rounded-full text-lg">
                  Explore Services
                </RippleButton>
              </MagneticElement>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
