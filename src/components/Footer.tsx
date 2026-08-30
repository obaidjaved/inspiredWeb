'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'Network Security', href: '/services#network-security' },
    { name: 'Website Development', href: '/services#web-development' },
    { name: 'ERPNext Solutions', href: '/services#erpnext' },
    { name: 'AI Automation', href: '/services#ai-automation' },
    { name: 'Data Cabling', href: '/services#data-cabling' },
    { name: 'CCTV Systems', href: '/services#cctv' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/portfolio' },
    { name: 'Clients', href: '/about#clients' },
    { name: 'Leadership', href: '/about#leadership' },
    { name: 'Company Profile', href: '/about#profile' },
    { name: 'Contact', href: '/contact' },
  ],
  contact: [
    { name: '+92 300 9221193', href: 'tel:+923009221193' },
    { name: '+1 (973) 626-0873', href: 'tel:+19736260873' },
    { name: 'contact@inspired.com.pk', href: 'mailto:contact@inspired.com.pk' },
    { name: 'Karachi, Pakistan', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
  { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  { name: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label="Inspired Technology - Home">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-dark font-bold text-lg">I</span>
              </div>
              <div>
                <span className="text-xl font-bold text-text-primary">INSPIRED</span>
                <span className="text-accent text-xl">.tech</span>
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Pakistan&apos;s most trusted IT solutions provider — delivering excellence in networking, security, ERP and digital transformation since 2009.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 border border-dark-border rounded-lg flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs font-semibold text-accent mb-6 tracking-widest uppercase font-mono">Services</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs font-semibold text-accent mb-6 tracking-widest uppercase font-mono">Company</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xs font-semibold text-accent mb-6 tracking-widest uppercase font-mono">Contact</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Inspired Technology Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted text-sm hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted text-sm hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
