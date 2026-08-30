'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ===== DATA =====
const heroSlides = [
  {
    tag: 'Digital Transformation',
    headline: 'AI-Native Global Digital Engineering Partner',
    sub: 'Product Development · Digital Transformation · Agile Teams',
    cta: { label: "LET'S CONNECT", href: '/contact', variant: 'gradient' as const },
    bg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&auto=format',
  },
  {
    tag: 'AI & Automation',
    headline: 'Intelligent Solutions for Modern Enterprises',
    sub: 'Leverage AI-powered automation, predictive analytics, and machine learning to transform your business operations and accelerate growth.',
    cta: { label: 'LEARN MORE', href: '/services', variant: 'ghost' as const },
    bg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&auto=format',
  },
  {
    tag: 'Enterprise Platforms',
    headline: 'Managed Service Provider for Enterprises',
    sub: 'End-to-end IT managed services that optimize your infrastructure, reduce costs, and ensure business continuity with 24/7 expert support.',
    cta: { label: 'LEARN MORE', href: '/services', variant: 'ghost' as const },
    bg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&auto=format',
  },
  {
    tag: 'Cloud Solutions',
    headline: 'Modernize Enterprise Cloud Infrastructure',
    sub: 'Migrate, optimize, and scale your cloud environment with AWS, Azure, and Google Cloud — reducing costs while maximizing performance.',
    cta: { label: 'LEARN MORE', href: '/services', variant: 'ghost' as const },
    bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format',
  },
  {
    tag: 'Cybersecurity',
    headline: 'Enterprise-Grade Security Solutions',
    sub: 'Protect your digital assets with advanced threat detection, zero-trust architecture, compliance management, and 24/7 security operations.',
    cta: { label: 'LEARN MORE', href: '/services', variant: 'ghost' as const },
    bg: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop&auto=format',
  },
];

const expertiseItems = [
  { label: 'AI & Data Solutions', href: '/services#ai' },
  { label: 'Software Development', href: '/services#web' },
  { label: 'Strategy & Consulting', href: '/services#strategy' },
  { label: 'Enterprise Platforms', href: '/services#erp' },
  { label: 'Cloud & DevOps', href: '/services#cloud' },
  { label: 'Cybersecurity', href: '/services#security' },
];

const anchorLinks = [
  { label: 'CLIENTS', href: '#clients' },
  { label: 'CASE STUDIES', href: '#case-studies' },
  { label: 'ADVANTAGES', href: '#advantages' },
  { label: 'AWARDS', href: '#awards' },
  { label: 'INSIGHTS', href: '#insights' },
  { label: 'TEAM', href: '#team' },
];

const clientLogos = [
  { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/200px-Cisco_logo_blue_2016.svg.png' },
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png' },
  { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
  { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png' },
  { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png' },
  { name: 'Oracle', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/200px-Oracle_logo.svg.png' },
  { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/200px-Salesforce.com_logo.svg.png' },
  { name: 'SAP', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/200px-SAP_2011_logo.svg.png' },
  { name: 'Intel', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Intel_logo_%282020%2C_light_blue%29.svg/200px-Intel_logo_%282020%2C_light_blue%29.svg.png' },
  { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016_stacked.svg/200px-Dell_logo_2016_stacked.svg.png' },
  { name: 'HP', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/200px-HP_logo_2012.svg.png' },
  { name: 'VMware', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/VMware_logo.svg/200px-VMware_logo.svg.png' },
];

const caseStudies = [
  {
    category: 'Artificial Intelligence',
    title: 'Automated property appraisal detection system',
    desc: 'Built an AI-powered computer vision system that automates property assessments with 99% accuracy, reducing manual inspection time by 80%.',
    stats: [{ value: '99%', label: 'Detection accuracy' }, { value: '80%', label: 'Time reduction' }],
    bg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=800&fit=crop&auto=format',
    href: '/portfolio',
  },
  {
    category: 'Healthcare',
    title: 'Caregiver support platform',
    desc: 'Developed a comprehensive digital platform connecting caregivers with patients, achieving 50% cost reduction through intelligent matching algorithms.',
    stats: [{ value: '50%', label: 'Cost reduction' }, { value: '3x', label: 'Patient satisfaction' }],
    bg: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop&auto=format',
    href: '/portfolio',
  },
  {
    category: 'Fintech',
    title: 'Dynamic digital banking payment solution',
    desc: 'Engineered a next-gen payment processing platform handling millions of transactions daily with real-time fraud detection and compliance.',
    stats: [{ value: '$2B+', label: 'Transactions processed' }, { value: '99.99%', label: 'Uptime' }],
    bg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=800&fit=crop&auto=format',
    href: '/portfolio',
  },
  {
    category: 'AI & Automation',
    title: 'Healthcare support platform with agentic AI',
    desc: 'Created an AI-first healthcare platform using autonomous agents to triage patients, schedule appointments, and provide 24/7 medical guidance.',
    stats: [{ value: '24/7', label: 'AI availability' }, { value: '60%', label: 'Load reduction' }],
    bg: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=800&fit=crop&auto=format',
    href: '/portfolio',
  },
  {
    category: 'Enterprise',
    title: 'Order management automation for telecom',
    desc: 'Automated end-to-end order management for a major telecom provider, eliminating revenue leakage and reducing processing time by 80%.',
    stats: [{ value: '80%', label: 'Faster processing' }, { value: '$1.7M+', label: 'Revenue recovered' }],
    bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=800&fit=crop&auto=format',
    href: '/portfolio',
  },
];

const advantages = [
  { icon: '🤖', title: 'AI experts', desc: 'Our AI Launchpad accelerates innovation with pre-built models, custom training, and production-ready deployment pipelines.' },
  { icon: '🏆', title: 'Industry expertise', desc: 'Deep industry insight across healthcare, finance, retail, and enterprise — we speak your language.' },
  { icon: '🛡️', title: 'Product mindset', desc: 'We deliver outcomes, not just outputs. Every solution is designed for measurable business impact.' },
  { icon: '🚀', title: 'Delivery excellence', desc: 'Deep technical expertise with agile methodology ensures on-time, on-budget delivery of complex projects.' },
  { icon: '🌍', title: 'Global scale', desc: 'Experts across four continents with nearshore and offshore teams available in any time zone.' },
  { icon: '🔒', title: 'Security first', desc: 'Security built into every layer — from architecture design to deployment, meeting all regulatory requirements.' },
];

const awards = [
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Inc._Magazine_logo.svg/200px-Inc._Magazine_logo.svg.png', desc: 'Inc. 5000 — Fastest Growing Companies in America' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Twitter_logo_2012.svg/200px-Twitter_logo_2012.svg.png', desc: 'BuiltIn — Best Places to Work in Tech' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Washington_Post_logo.svg/200px-Washington_Post_logo.svg.png', desc: 'Washington Business Journal — Top IT Consulting Firms' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/200px-Forbes_logo.svg.png', desc: 'Forbes — America\'s Best Professional Services Firms' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Gartner_logo_%282022%29.svg/200px-Gartner_logo_%282022%29.svg.png', desc: 'Gartner — Cool Vendor in AI and Emerging Technologies' },
];

const insights = [
  { tag: 'AI', title: 'How AI is transforming enterprise operations in 2026', excerpt: 'Explore the latest AI trends reshaping how businesses operate, from autonomous agents to predictive analytics.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format' },
  { tag: 'CLOUD', title: 'Multi-cloud strategies for enterprise resilience', excerpt: 'Why leading enterprises are adopting multi-cloud architectures and how to implement them effectively.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&auto=format' },
  { tag: 'SECURITY', title: 'Zero-trust security: A complete implementation guide', excerpt: 'Step-by-step guide to implementing zero-trust architecture in your organization.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format' },
  { tag: 'DEVOPS', title: 'The future of DevOps: AI-powered pipelines', excerpt: 'How machine learning is automating CI/CD, testing, and infrastructure management.', image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop&auto=format' },
  { tag: 'ENTERPRISE', title: 'Digital transformation ROI: Measuring what matters', excerpt: 'Key metrics and frameworks for tracking the success of your digital transformation initiatives.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format' },
  { tag: 'DATA', title: 'Building a data-driven culture in your organization', excerpt: 'Practical steps to foster data literacy and enable informed decision-making across teams.', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format' },
];

const rotatingWords = ['Software Development', 'Cloud Migration', 'AI Integration', 'Digital Transformation', 'Enterprise Platforms', 'Cybersecurity', 'Data Engineering', 'DevOps & SecOps'];

const teamStats = [
  { value: '4', label: 'continents', sub: 'North America, South America, Europe & Asia' },
  { value: '1,400+', label: 'team of global creators & innovators', sub: '' },
  { value: '40%', label: 'of our global workforce are women', sub: '' },
];

const teamPhotos = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&auto=format',
];

const cities = ['Karachi', 'Lahore', 'Islamabad', 'Dubai', 'London', 'New York', 'San Francisco', 'Toronto'];

const contactSteps = [
  { title: 'Hop on a discovery call', desc: 'We learn about your business, explore your goals, timeline, and budget to understand exactly what you need.' },
  { title: 'Identify the right solution together', desc: 'Shape a project plan, select the right team, and define clear milestones for delivery.' },
  { title: 'Get started and accelerate fast', desc: 'Regular updates, flexible adjustments, and agile delivery to bring your vision to life.' },
];

// ===== COMPONENTS =====

function HeroSlideCounter({ current, total, onPrev, onNext }: { current: number; total: number; onPrev: () => void; onNext: () => void }) {
  return (
    <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
      <span className="text-white text-sm font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {String(current + 1).padStart(2, '0')}
      </span>
      <div className="w-px h-16 bg-white/20 relative">
        <div className="absolute top-0 left-0 w-full bg-white transition-all duration-500" style={{ height: `${((current + 1) / total) * 100}%` }} />
      </div>
      <div className="flex gap-2">
        <button onClick={onPrev} className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors" aria-label="Previous slide">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={onNext} className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors" aria-label="Next slide">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}

function CaseStudySlider() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((p) => (p + 1) % caseStudies.length), 6000);
  }, []);

  useEffect(() => { startTimer(); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, [startTimer]);

  const goTo = (i: number) => { setActive(i); startTimer(); };
  const prev = () => goTo((active - 1 + caseStudies.length) % caseStudies.length);
  const next = () => goTo((active + 1) % caseStudies.length);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden"
        >
          <img
            src={caseStudies[active].bg}
            alt={caseStudies[active].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
            <span className="inline-block bg-[#6366f1]/20 border border-[#6366f1]/30 text-[#d0d1fb] text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit uppercase tracking-wider">
              {caseStudies[active].category}
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">{caseStudies[active].title}</h3>
            <p className="text-white/70 text-sm md:text-base mb-6 leading-relaxed">{caseStudies[active].desc}</p>
            <div className="flex gap-8 mb-8">
              {caseStudies[active].stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-bold text-white">{s.value}</div>
                  <div className="text-white/50 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <Link href={caseStudies[active].href} className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[#d0d1fb] transition-colors w-fit">
              Read case study
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev/Next arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Previous case study">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Next case study">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Tab navigation */}
      <div className="flex justify-center gap-1 mt-6">
        {caseStudies.map((cs, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
              i === active
                ? 'bg-[#6366f1] text-white'
                : 'bg-[#111] text-[#666] border border-[#222] hover:text-white hover:border-[#444]'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${i === active ? 'bg-white' : 'bg-[#444]'}`} />
            <span className="hidden md:inline">{cs.category}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function AnimatedRotatingText() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % rotatingWords.length), 2500);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="inline-block relative h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="absolute left-0 whitespace-nowrap"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function InsightsCarousel() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {insights.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group relative bg-[#111] border border-[#222] rounded-2xl overflow-hidden cursor-pointer h-[420px]"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${hovered === i ? 'h-full flex flex-col justify-end' : 'h-[140px]'}`}>
            <span className="text-[#6366f1] text-xs font-bold uppercase tracking-wider mb-2">{item.tag}</span>
            <h4 className="text-white text-lg font-bold mb-2 leading-snug">{item.title}</h4>
            {hovered === i && (
              <>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">{item.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-[#6366f1] text-sm font-semibold">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ===== MAIN PAGE =====
export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const heroTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const startHeroTimer = useCallback(() => {
    if (heroTimerRef.current) clearInterval(heroTimerRef.current);
    heroTimerRef.current = setInterval(() => setHeroSlide((p) => (p + 1) % heroSlides.length), 6000);
  }, []);

  useEffect(() => { startHeroTimer(); return () => { if (heroTimerRef.current) clearInterval(heroTimerRef.current); }; }, [startHeroTimer]);

  const heroPrev = () => { setHeroSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length); startHeroTimer(); };
  const heroNext = () => { setHeroSlide((p) => (p + 1) % heroSlides.length); startHeroTimer(); };

  return (
    <main id="main-content">
      <Navbar />

      {/* ===== 1. HERO — Full viewport slider ===== */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden" aria-label="Hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[heroSlide].bg}
              alt=""
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <HeroSlideCounter current={heroSlide} total={heroSlides.length} onPrev={heroPrev} onNext={heroNext} />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="max-w-2xl"
              >
                <span className="inline-flex items-center gap-2 bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#d0d1fb] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 bg-[#6366f1] rounded-full" />
                  {heroSlides[heroSlide].tag}
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                  {heroSlides[heroSlide].headline}
                </h1>

                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                  {heroSlides[heroSlide].sub}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={heroSlides[heroSlide].cta.href}
                    className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      heroSlides[heroSlide].cta.variant === 'gradient'
                        ? 'bg-gradient-to-r from-[#6366f1] to-[#818cf8] text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]'
                        : 'border border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    {heroSlides[heroSlide].cta.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* ===== 2. OUR EXPERTISE — Horizontal link row ===== */}
      <section className="bg-[#0a0a0a] border-b border-[#222] py-6" aria-label="Our expertise">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {expertiseItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-white/70 text-sm font-medium hover:text-white transition-colors duration-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. STICKY ANCHOR BAR ===== */}
      <section className="sticky top-[72px] z-30 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222] hidden md:block" aria-label="Section navigation">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-1 overflow-x-auto py-2" aria-label="Jump to section">
            {anchorLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#666] hover:text-white transition-colors whitespace-nowrap rounded-full hover:bg-[#111]"
              >
                {link.label}
                <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ===== 4. CLIENT LOGOS ===== */}
      <section id="clients" className="py-20 relative z-10" aria-label="Trusted by leading enterprises">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Trusted by leading global enterprises</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-50">
            {clientLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={`${logo.name} logo`}
                className="h-8 md:h-10 object-contain filter invert"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. CASE STUDIES ===== */}
      <section id="case-studies" className="py-20 relative z-10" aria-labelledby="cs-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 id="cs-heading" className="text-2xl md:text-3xl font-bold mb-3">Proven solutions. Real-world impact.</h2>
            <p className="text-[#666] text-sm max-w-xl">Explore how our teams solve critical business problems through strategy, engineering, and innovation.</p>
          </div>
          <CaseStudySlider />
          <div className="text-center mt-8">
            <Link href="/portfolio" className="inline-flex items-center gap-2 bg-[#6366f1] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200">
              All Case Studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 6. MID-PAGE CTA BANNER ===== */}
      <section className="py-16 relative z-10 bg-gradient-to-r from-[rgba(99,102,241,0.08)] to-transparent border-y border-[#222]/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Build custom, AI-native solutions that deliver real business value</h2>
            <p className="text-[#666] text-sm">From strategy to deployment — we engineer intelligent products that scale.</p>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-200 whitespace-nowrap">
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* ===== 7. ADVANTAGES — 3x2 grid ===== */}
      <section id="advantages" className="py-20 relative z-10" aria-labelledby="adv-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 id="adv-heading" className="text-2xl md:text-3xl font-bold mb-3">The Inspired Technology difference</h2>
            <p className="text-[#666] text-sm max-w-xl">We don&apos;t just build software. We provide the strategic depth and technical precision required to dominate your market.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-[#111] border border-[#222] rounded-2xl p-7 hover-glow card-lift"
              >
                <div className="text-3xl mb-4">{adv.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. AWARDS ===== */}
      <section id="awards" className="py-20 bg-[#0a0a0a] relative z-10" aria-labelledby="awards-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="awards-heading" className="text-2xl md:text-3xl font-bold mb-10">Awards & recognitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-[#111] border border-[#222] rounded-2xl p-6 flex items-start gap-4"
              >
                <img src={award.logo} alt="Award logo" className="h-8 object-contain filter invert opacity-60 shrink-0 mt-0.5" loading="lazy" />
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{award.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/about" className="inline-flex items-center gap-2 text-[#6366f1] text-sm font-semibold hover:text-[#d0d1fb] transition-colors">
              All Awards
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 9. INSIGHTS ===== */}
      <section id="insights" className="py-20 relative z-10" aria-labelledby="insights-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="insights-heading" className="text-2xl md:text-3xl font-bold mb-10">Insights</h2>
          <InsightsCarousel />
        </div>
      </section>

      {/* ===== 10. ANIMATED CTA — "Let us accelerate your..." ===== */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Let us accelerate your{' '}
            <span className="text-[#6366f1]">
              <AnimatedRotatingText />
            </span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-bold hover:bg-white/90 transition-all duration-200">
            Let&apos;s talk
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* ===== 11. TEAM — Photo scroller + Map + Stats ===== */}
      <section id="team" className="py-20 bg-[#0a0a0a] relative z-10 overflow-hidden" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 id="team-heading" className="text-2xl md:text-3xl font-bold mb-3">We&apos;re a global team of innovators</h2>
          <p className="text-[#666] text-sm max-w-xl">Navigate complex digital initiatives with confidence.</p>
        </div>

        {/* Photo scroller */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex gap-4 animate-marquee-fast" style={{ width: 'max-content' }}>
            {[...teamPhotos, ...teamPhotos].map((photo, i) => (
              <img key={i} src={photo} alt="Team member" className="w-64 h-44 object-cover rounded-xl shrink-0" loading="lazy" />
            ))}
          </div>
        </div>

        {/* Map + Stats */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative bg-[#111] border border-[#222] rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
            <svg viewBox="0 0 800 400" className="w-full h-auto opacity-20">
              <ellipse cx="400" cy="200" rx="350" ry="150" fill="none" stroke="#6366f1" strokeWidth="0.5" />
              <ellipse cx="400" cy="200" rx="250" ry="100" fill="none" stroke="#6366f1" strokeWidth="0.3" />
              <line x1="50" y1="200" x2="750" y2="200" stroke="#6366f1" strokeWidth="0.3" />
              <line x1="400" y1="50" x2="400" y2="350" stroke="#6366f1" strokeWidth="0.3" />
              {/* Location dots */}
              {[
                [180, 180], [350, 160], [420, 150], [550, 190], [600, 170],
                [250, 220], [480, 230], [650, 200], [150, 200], [300, 250],
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="4" fill="#6366f1" opacity={0.6 + (i % 3) * 0.15} />
              ))}
            </svg>
          </div>
          <div className="space-y-8">
            {teamStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[#a0a0a0] text-sm">{stat.label}</div>
                {stat.sub && <div className="text-[#666] text-xs mt-1">{stat.sub}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* City scroller */}
        <div className="mt-12 overflow-hidden border-t border-[#222] pt-6">
          <div className="flex gap-6 animate-marquee-fast" style={{ width: 'max-content' }}>
            {[...cities, ...cities].map((city, i) => (
              <span key={i} className="text-[#666] text-sm whitespace-nowrap flex items-center gap-3">
                {city}
                <span className="w-1.5 h-1.5 bg-[#6366f1] rounded-full opacity-40" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 12. CONTACT — 3-step process ===== */}
      <section className="py-20 relative z-10" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-8">Let&apos;s talk</h2>
            <div className="space-y-0">
              {contactSteps.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#6366f1]/20 border border-[#6366f1]/30 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-[#6366f1] text-sm font-bold">{i + 1}</span>
                    </div>
                    {i < contactSteps.length - 1 && <div className="w-px h-16 bg-[#222]" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=600&fit=crop&auto=format"
              alt="Team collaboration"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
