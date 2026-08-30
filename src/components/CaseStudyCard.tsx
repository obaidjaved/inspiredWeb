'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import type { CaseStudy } from '@/data/case-studies';
import ProjectVisual from '@/components/visuals/ProjectVisual';

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/portfolio/${study.slug}`} className="block group" aria-label={`View case study: ${study.title}`}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative bg-dark-card border border-dark-border rounded-3xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,255,136,0.15)]"
        >
          {/* Project Visual Banner */}
          <ProjectVisual
            gradient={study.gradient}
            icon={study.icon}
            title={study.client}
            index={index}
          />

          {/* Content */}
          <div className="p-8">
            {/* Glare effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
              }}
            />

            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, transparent, ${study.color}, transparent)` }}
            />

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-text-muted text-xs font-mono tracking-wider uppercase mb-1">{study.industry}</p>
                <p className="text-text-primary font-semibold text-sm">{study.client}</p>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center border border-dark-border group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-200">
                <svg
                  className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-200 leading-tight">
              {study.title}
            </h3>

            {/* Summary */}
            <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
              {study.summary}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-2 mb-5">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-dark border border-dark-border rounded-xl px-3 py-2 flex flex-col"
                >
                  <span className="text-[10px] text-text-muted mb-0.5">{metric.label}</span>
                  <span className="text-xs font-bold" style={{ color: study.color }}>
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 bg-dark border border-dark-border rounded-full text-text-muted group-hover:border-accent/30 group-hover:text-accent/80 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
