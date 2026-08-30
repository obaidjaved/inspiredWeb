'use client';

import Link from 'next/link';

const quickLinks = [
  { name: 'Company', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Insights', href: '/about' },
  { name: 'Careers', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const offices = [
  { col1: ['Pakistan', 'United States', 'United Kingdom', 'Dubai'], col2: ['Canada', 'Saudi Arabia', 'Germany', 'Australia'] },
];

const socials = [
  { name: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
  { name: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  { name: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo + Description */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Inspired Technology - Home">
              <div className="w-8 h-8 bg-[#6366f1] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-base font-bold text-white">INSPIRED</span>
                <span className="text-[#818cf8] text-base font-semibold">.tech</span>
              </div>
            </Link>
            <p className="text-[#636363] text-sm leading-relaxed max-w-sm">
              Pakistan&apos;s most trusted IT solutions provider — delivering excellence in networking, security, ERP and digital transformation since 2009.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#636363] text-sm hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Offices */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Our Offices</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {offices[0].col1.map((office) => (
                <span key={office} className="text-[#636363] text-sm">{office}</span>
              ))}
              {offices[0].col2.map((office) => (
                <span key={office} className="text-[#636363] text-sm">{office}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1f1f1f] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#636363]">
            <a href="tel:+923009221193" className="hover:text-white transition-colors duration-200">+92 300 9221193</a>
            <a href="mailto:contact@inspired.com.pk" className="hover:text-white transition-colors duration-200">contact@inspired.com.pk</a>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-8 h-8 border border-[#2a2a2a] rounded-lg flex items-center justify-center text-[#636363] hover:text-[#818cf8] hover:border-[#6366f1]/30 transition-all duration-200"
                aria-label={social.name}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
            <span className="text-[#454545] text-sm ml-2">&copy; {new Date().getFullYear()} Inspired Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
