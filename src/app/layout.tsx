import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Inspired Technology | IT Solutions & Digital Transformation',
  description: 'Pakistan\'s most trusted IT solutions provider — networking, cybersecurity, ERP systems, web development, and AI automation across Pakistan, USA & Middle East.',
  keywords: 'IT solutions, networking, cybersecurity, ERPNext, web development, AI automation, Pakistan, USA, Middle East',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
