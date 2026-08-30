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
  { id: '01', title: 'Network Security', description: 'Cisco and multi-vendor installations of any scale. Enterprise-grade security to protect your infrastructure and boost performance.', tags: ['Cisco', 'Firewall', 'VPN', 'SIEM'], icon: '🔒', color: '#00E87B', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format' },
  { id: '02', title: 'Web Development', description: 'Corporate websites, e-commerce, landing pages, CMS, UI/UX design and progressive web apps that convert.', tags: ['Next.js', 'React', 'Shopify', 'WordPress'], icon: '🌐', color: '#00A3E0', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format' },
  { id: '03', title: 'ERPNext Solutions', description: 'Complete ERPNext implementation — accounting, HR, inventory, CRM, manufacturing and project management.', tags: ['ERPNext', 'Frappe', 'ZATCA', 'Custom'], icon: '📊', color: '#7C4DFF', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format' },
  { id: '04', title: 'AI Automation', description: 'AI-powered chatbots, intelligent workflow automation, and predictive analytics for smarter operations.', tags: ['Chatbots', 'LLM', 'RPA', 'Analytics'], icon: '🤖', color: '#E91E7D', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format' },
  { id: '05', title: 'Data Cabling', description: 'Professional structured cabling from single outlets to large multi-pair trunk cables across buildings.', tags: ['Fiber', 'Cat6', 'Structured', 'Certified'], icon: '🔌', color: '#F59E0B', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format' },
  { id: '06', title: 'CCTV Systems', description: 'Complete IP camera network solutions — design, installation, testing and certification for total coverage.', tags: ['IP Cameras', 'NVR', 'Analytics', 'Cloud'], icon: '📹', color: '#10B981', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop&auto=format' },
];

const projects = [
  { id: 1, title: 'Mucho Burrito', category: 'UI/UX & Web Dev', metric: '+310% Revenue', gradient: 'from-orange-500 to-red-500', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&auto=format' },
  { id: 2, title: 'myZoi Financial', category: 'Full Stack Marketing', metric: '3.4x ROAS', gradient: 'from-blue-500 to-cyan-500', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format' },
  { id: 3, title: "Stillman's Beauty", category: 'E-Commerce', metric: '$1.2M Revenue', gradient: 'from-pink-500 to-purple-500', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop&auto=format' },
  { id: 4, title: 'Combaxx Sports', category: 'Web Dev & SEO', metric: '+85% Conversion', gradient: 'from-green-500 to-emerald-500', image: 'https://images.unsplash.com/photo-1461896836934-bd45ba8b8c6c?w=600&h=400&fit=crop&auto=format' },
];

const testimonials = [
  { quote: "Inspired Technology transformed our digital presence completely. Their AI automation solutions saved us 40% in operational costs.", author: 'Sarah Mitchell', role: 'CEO, TechVentures Inc.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format' },
  { quote: "The team delivered a world-class e-commerce platform that increased our online revenue by 310%. Outstanding technical expertise.", author: 'Ahmed Al-Rashid', role: 'Founder, Luxe Commerce', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format' },
  { quote: "From SEO to performance marketing, Inspired Technology took our brand from invisible to industry leader in just six months.", author: 'Fatima Khan', role: 'Marketing Director, Global Brands', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&auto=format' },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                className="mb-6"
              >
                <span className="text-[#00E87B] text-xs font-mono tracking-[0.2em] uppercase">// INSPIRED TECHNOLOGY</span>
              </motion.div>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.08] mb-6 max-w-xl"
              >
                <TextReveal delay={0.4}>
                  We build digital experiences that deliver real results.
                </TextReveal>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="text-[#9A9BB0] text-base md:text-lg max-w-lg mb-10 leading-relaxed"
              >
                Enterprise networking, cybersecurity, ERP systems, and web development — end-to-end technology solutions for businesses across Pakistan, USA & Middle East.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9, ease: [0.32, 0.72, 0, 1] }}
                className="flex flex-wrap gap-3 mb-14"
              >
                <MagneticElement strength={0.15}>
                  <RippleButton href="/services" variant="primary" className="px-7 py-3.5 rounded-full text-sm">
                    Explore Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </RippleButton>
                </MagneticElement>
                <MagneticElement strength={0.15}>
                  <RippleButton href="/contact" variant="secondary" className="px-7 py-3.5 rounded-full text-sm">
                    Talk to an Expert
                    <div className="w-1.5 h-1.5 bg-[#00E87B] rounded-full animate-glow-pulse" aria-hidden="true" />
                  </RippleButton>
                </MagneticElement>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1, ease: [0.32, 0.72, 0, 1] }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {[
                  { value: '500+', label: 'Clients Served' },
                  { value: '15+', label: 'Years Experience' },
                  { value: '1000+', label: 'Projects Done' },
                  { value: '24/7', label: 'Expert Support' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.06, ease: [0.32, 0.72, 0, 1] }}
                    className="text-left"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#00E87B] mb-0.5" style={{ fontVariantNumeric: 'tabular-nums' }}>{stat.value}</div>
                    <div className="text-[#5C5D72] text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=500&fit=crop&auto=format"
                  alt="Team collaborating on technology solutions"
                  className="w-full h-[420px] object-cover img-dark"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#00E87B] rounded-full animate-glow-pulse" />
                    <span className="text-[#EDEEF2] text-sm font-medium">Trusted by 500+ enterprises worldwide</span>
                  </div>
                </div>
              </div>
              {/* Floating accent card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-[#16161F] border border-[#252533] rounded-xl p-4 shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[rgba(0,232,123,0.1)] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#00E87B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#EDEEF2] text-sm font-semibold">99.9% Uptime</div>
                    <div className="text-[#5C5D72] text-xs">Network reliability</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Marquee */}
        <div className="relative border-y border-[#252533]/60 bg-[#111118]/50 py-3.5 overflow-hidden z-10" aria-hidden="true">
          <div className="animate-marquee flex whitespace-nowrap">
            {['PERFORMANCE MARKETING', 'UI/UX DESIGN', 'AI AUTOMATION', 'E-COMMERCE GROWTH', 'CUSTOM WEB SYSTEMS', 'SEO OPTIMIZATION', 'NETWORK SECURITY', 'ERPNext'].map((item, index) => (
              <span key={index} className="mx-8 text-xs font-mono text-[#5C5D72] tracking-wider">
                {item}
                <span className="ml-8 text-[#00E87B] opacity-40">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-28 relative z-10" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <span className="text-[#00E87B] text-xs font-mono tracking-[0.2em] uppercase mb-4 block">// WHO WE ARE</span>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-5">
                We deliver <span className="gradient-text">networking excellence</span>
              </h2>
              <p className="text-[#9A9BB0] text-base leading-relaxed mb-7">
                Inspired Technology is a network solutions provider based in Pakistan, delivering professional services to large-scale corporate businesses around the globe. We take pride in being the most trusted networking solution provider in Pakistan.
              </p>
              <div className="flex flex-wrap gap-3 mb-7">
                <div className="bg-[#16161F] border border-[#252533] px-4 py-2.5 rounded-lg flex items-center gap-2.5">
                  <span className="text-[#00E87B] font-semibold text-sm">Cisco</span>
                  <span className="text-[#5C5D72] text-xs">Certified Partner</span>
                </div>
                <div className="bg-[#16161F] border border-[#252533] px-4 py-2.5 rounded-lg flex items-center gap-2.5">
                  <span className="text-[#00E87B] font-semibold text-sm">ISO</span>
                  <span className="text-[#5C5D72] text-xs">Quality Standards</span>
                </div>
              </div>
              <MagneticElement strength={0.12}>
                <RippleButton href="/about" variant="ghost" className="text-[#00E87B] font-semibold text-sm">
                  Learn More About Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </RippleButton>
              </MagneticElement>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop&auto=format"
                  alt="Technology team working on network infrastructure"
                  className="w-full h-[380px] object-cover img-dark rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 to-transparent rounded-2xl" />
              </div>
              {/* Feature cards overlay */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {[
                  { icon: '🌐', title: 'Global Reach', desc: 'Pakistan, USA & beyond' },
                  { icon: '🔒', title: 'Secure by Design', desc: 'Enterprise-grade security' },
                ].map((item) => (
                  <div key={item.title} className="bg-[#16161F]/90 backdrop-blur-sm border border-[#252533] rounded-xl p-3">
                    <div className="text-lg mb-1">{item.icon}</div>
                    <div className="text-[#EDEEF2] text-xs font-semibold">{item.title}</div>
                    <div className="text-[#5C5D72] text-[10px]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 relative z-10 bg-[#111118]/40" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-14"
          >
            <span className="text-[#00E87B] text-xs font-mono tracking-[0.2em] uppercase mb-4 block">// OUR EXPERTISE</span>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold">
              Services that <span className="gradient-text">drive growth</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
                className="group bg-[#16161F] border border-[#252533] rounded-2xl overflow-hidden hover-glow card-lift cursor-pointer"
              >
                {/* Service Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    className="w-full h-full object-cover img-dark group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16161F] via-[#16161F]/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <ServiceVisual icon={service.icon} color={service.color} size="sm" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#00E87B] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-[#9A9BB0] text-sm mb-4 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 bg-[#0A0A0F] border border-[#252533] rounded-full text-[#5C5D72] group-hover:border-[rgba(0,232,123,0.2)] group-hover:text-[#9A9BB0] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <MagneticElement strength={0.12}>
              <RippleButton href="/services" variant="ghost" className="text-[#00E87B] font-semibold text-sm">
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </RippleButton>
            </MagneticElement>
          </motion.div>
        </div>
      </section>

      {/* Tagline Reveal */}
      <section className="py-28 relative z-10" aria-labelledby="tagline-heading">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 id="tagline-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#5C5D72]">Technology should work for you, </span>
              <span className="gradient-text">not the other way around.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-28 relative z-10" aria-labelledby="work-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-14"
          >
            <span className="text-[#00E87B] text-xs font-mono tracking-[0.2em] uppercase mb-4 block">// OUR WORK</span>
            <h2 id="work-heading" className="text-3xl md:text-4xl font-bold">
              Case studies that <span className="gradient-text">speak</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer min-h-[300px] card-lift"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="absolute inset-0 w-full h-full object-cover img-dark group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-[#0A0A0F]/40 to-transparent" />

                <div className="relative z-10 p-7 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-[#16161F]/80 backdrop-blur-sm border border-[#252533] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[rgba(0,232,123,0.3)] transition-all duration-300">
                      <span className="text-[#00E87B] text-base font-bold">{String(project.id).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1.5 text-[#EDEEF2] group-hover:text-[#00E87B] transition-colors">{project.title}</h3>
                    <p className="text-[#9A9BB0] text-sm">{project.category}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="bg-[rgba(0,232,123,0.08)] border border-[rgba(0,232,123,0.2)] px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                      <span className="text-[#00E87B] text-xs font-semibold">{project.metric}</span>
                    </div>
                    <div className="w-9 h-9 border border-[#252533] rounded-full flex items-center justify-center group-hover:border-[rgba(0,232,123,0.3)] group-hover:bg-[rgba(0,232,123,0.04)] transition-all duration-200 backdrop-blur-sm">
                      <svg className="w-4 h-4 text-[#5C5D72] group-hover:text-[#00E87B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <MagneticElement strength={0.12}>
              <RippleButton href="/portfolio" variant="ghost" className="text-[#00E87B] font-semibold text-sm">
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </RippleButton>
            </MagneticElement>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 relative z-10 bg-[#111118]/40" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-14"
          >
            <span className="text-[#00E87B] text-xs font-mono tracking-[0.2em] uppercase mb-4 block">// WHAT PEOPLE SAY</span>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold">
              Client <span className="gradient-text">testimonials</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="bg-[#16161F] border border-[#252533] rounded-2xl p-7 hover-glow card-lift relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[rgba(0,232,123,0.03)] rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

                <svg className="w-8 h-8 text-[rgba(0,232,123,0.2)] mb-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#EDEEF2] text-sm leading-relaxed mb-5">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-9 h-9 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-xs text-[#EDEEF2]">{testimonial.author}</div>
                    <div className="text-[#5C5D72] text-[11px]">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative z-10 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,232,123,0.06)] via-transparent to-[rgba(0,163,224,0.06)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="text-[#00E87B] text-xs font-mono tracking-[0.2em] uppercase mb-5 block">// READY TO GROW?</span>
            <h2 id="cta-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to build something <span className="gradient-text">remarkable?</span>
            </h2>
            <p className="text-[#9A9BB0] text-base md:text-lg max-w-xl mx-auto mb-10">
              Let&apos;s discuss how we can transform your digital presence and drive real results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <MagneticElement strength={0.15}>
                <RippleButton href="/contact" variant="primary" className="px-8 py-4 rounded-full text-sm">
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </RippleButton>
              </MagneticElement>
              <MagneticElement strength={0.15}>
                <RippleButton href="/services" variant="secondary" className="px-8 py-4 rounded-full text-sm">
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
