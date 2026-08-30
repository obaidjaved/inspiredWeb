export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  url: string;
  industry: string;
  color: string;
  gradient: string;
  icon: string;
  tags: string[];
  summary: string;
  challenge: string[];
  solution: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tapsvs-lms',
    title: 'Unified Custom LMS for Tapsvs',
    client: 'Tapsvs',
    url: 'tapsvs.com',
    industry: 'Education / EdTech',
    color: '#00FF88',
    gradient: 'from-green-500 to-emerald-500',
    icon: '🎓',
    tags: ['LearnDash', 'WordPress', 'Custom UI', 'LMS'],
    summary:
      'Transformed Tapsvs from a basic WordPress quiz site into an enterprise-grade Learning Management System with custom front-end dashboards, zero WordPress backend exposure, and a seamless multi-device UX.',
    challenge: [
      'Users were exposed to default WordPress panels, creating confusion and security risks.',
      'Static quiz setups lacked dynamic progress tracking and automated prerequisites.',
      'Lack of a centralized hub for managing learning activities and administration.',
    ],
    solution: [
      'LearnDash integration powering course hierarchies, automated drip content, and performance tracking.',
      'Isolated student portal on a dedicated sub-domain for optimized speed, security, and scalability.',
      'Custom role-based front-end dashboards for students and instructors.',
    ],
    outcomes: [
      '100% front-end workflow — zero interaction with WordPress core for daily tasks.',
      'Single-dashboard ecosystem built for frictionless navigation across all devices.',
      'Scalable architecture supporting custom reporting and expanding course libraries.',
    ],
    metrics: [
      { label: 'Front-End Workflow', value: '100%' },
      { label: 'Backend Exposure', value: '0%' },
      { label: 'Platform', value: 'WordPress + LearnDash' },
    ],
    technologies: ['WordPress', 'LearnDash', 'Custom PHP', 'JavaScript', 'REST API'],
  },
  {
    slug: 'clineum-medical',
    title: 'Enterprise Medical College Platform for Clineum',
    client: 'Clineum',
    url: 'clineum.com',
    industry: 'Healthcare Education / EdTech',
    color: '#00B4FF',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🏥',
    tags: ['Blockchain', 'Biometric', 'ERP', 'Cloud'],
    summary:
      'Enterprise-grade digital platform tailored for medical and nursing colleges — unifying biometric attendance, clinical rotation tracking, and tamper-proof blockchain credentialing into a single modular ecosystem.',
    challenge: [
      'Generic educational software fails to accommodate medical-specific requirements like hospital rotations and clinical logbooks.',
      'Credential tampering risk — verifying medical diplomas requires high-security verification.',
      'Fragmented operations across separate systems for attendance, grading, and records.',
    ],
    solution: [
      'Smart Campus & Clinical ERP Core managing daily operations, biometric attendance, and fee management.',
      'Clinical Rotation & Skills Tracker for real-time placement hours and competency checklists.',
      'Blockchain Credentialing Engine issuing tamper-proof digital diplomas and transcripts.',
    ],
    outcomes: [
      '100% verifiable credentials — instant verification for employers and licensing bodies.',
      'Zero-friction tracking of hospital hours and clinical competencies.',
      'Unified operations — attendance, academics, and administration in a single interface.',
    ],
    metrics: [
      { label: 'Verifiable Credentials', value: '100%' },
      { label: 'Audit Friction', value: 'Zero' },
      { label: 'Systems Unified', value: 'All-in-One' },
    ],
    technologies: ['Cloud Infrastructure', 'Blockchain', 'Biometric APIs', 'Custom ERP', 'React'],
  },
  {
    slug: 'dikhatz-shopify',
    title: 'Custom Hat Patch Customizer for DIKHatz',
    client: 'DIKHatz',
    url: 'dikhatz.com',
    industry: 'Apparel & Headwear',
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-indigo-500',
    icon: '🧢',
    tags: ['Shopify 2.0', 'Custom Liquid', 'Interactive UI', 'E-Commerce'],
    summary:
      'Full Shopify 2.0 storefront built from scratch with an interactive hat patch customizer — letting shoppers select, preview, and personalize headwear with interchangeable patches in real time.',
    challenge: [
      'Generic Shopify pages cannot natively support dynamic patch combinations and real-time visual updates.',
      'Backend needed to pass custom patch selections and pricing into the cart without breaking inventory.',
      'Headwear consumers require high-resolution previewing of patch textures and placement.',
    ],
    solution: [
      'Custom Shopify 2.0 storefront built from scratch with lightweight Liquid code.',
      'Interactive Patch Customizer Engine for real-time preview of hat + patch combinations.',
      'Dynamic Cart & SKU Bundling passing line-item properties seamlessly to checkout.',
    ],
    outcomes: [
      'Seamless customization UX — users build and preview custom hats in a single interface.',
      'Clean inventory data — fulfillment teams receive exact patch selection details.',
      'Optimized mobile performance for social channel traffic.',
    ],
    metrics: [
      { label: 'Custom Theme', value: 'From Scratch' },
      { label: 'Real-Time Preview', value: 'Yes' },
      { label: 'Mobile Optimized', value: '100%' },
    ],
    technologies: ['Shopify 2.0', 'Custom Liquid', 'JavaScript', 'Meta Pixel', 'Google Ads'],
  },
  {
    slug: 'drive-venturous',
    title: 'Multi-Platform E-Commerce & AI for Drive Venturous',
    client: 'Drive Venturous',
    url: 'driveventurous.com',
    industry: 'Automotive & Off-Road Gear',
    color: '#FF0080',
    gradient: 'from-pink-500 to-rose-500',
    icon: '🚗',
    tags: ['WordPress', 'Shopify', 'AI Chatbot', 'Hybrid'],
    summary:
      'High-performing digital ecosystem decoupling brand storytelling on WordPress from e-commerce on Shopify, with an AI-driven Claude support agent for 24/7 automated customer service.',
    challenge: [
      'WordPress excels at content but needs heavy optimization for large-scale e-commerce.',
      'Frequent product inquiries tied up customer service resources.',
      'Cross-platform friction between main website and shopping portal.',
    ],
    solution: [
      'Hybrid architecture — WordPress for content, Shopify sub-domain for transactions.',
      'AI-Integrated Support Agent using Anthropic Claude API for product recommendations.',
      'Unified UI/UX with matching styles and single-click cross-domain routing.',
    ],
    outcomes: [
      'AI assistant resolves common inquiries instantly, reducing support burden.',
      'Isolated Shopify checkout ensures high speed and uptime during peak traffic.',
      'Zero backend exposure — customers interact with modern custom interfaces.',
    ],
    metrics: [
      { label: 'AI Support', value: '24/7' },
      { label: 'Checkout Speed', value: 'Optimized' },
      { label: 'Backend Exposure', value: 'Zero' },
    ],
    technologies: ['WordPress', 'Shopify', 'Anthropic Claude', 'REST API', 'Cloudflare'],
  },
  {
    slug: 'english-evolution',
    title: 'High-Converting Digital Portal for English Evolution Academy',
    client: 'English Evolution Academy',
    url: 'englishevolutionacademy.com',
    industry: 'EdTech / Language Education',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-500',
    icon: '📚',
    tags: ['TutorLMS', 'SureMembers', 'Email Automation', 'WordPress'],
    summary:
      'Transformed from a standard website into an enterprise-grade digital language academy with TutorLMS, SureMembers access gating, and a 7-stage automated email lifecycle engine.',
    challenge: [
      'Manual access management degraded site performance for premium video lessons.',
      'Generic WordPress layouts caused multi-click navigation and student drop-offs.',
      'Absence of automated lifecycle emails led to high learner inactivity.',
    ],
    solution: [
      'TutorLMS for course hierarchies, interactive quizzes, and progress tracking.',
      'SureMembers for high-performance content gating and tiered membership access.',
      '7-stage automated email engine — from lead magnet to social proof collection.',
    ],
    outcomes: [
      '3x faster load times replacing heavy legacy plugins.',
      '100% front-end student interface — zero WP-Admin access required.',
      'Fully automated onboarding and retention pipeline.',
    ],
    metrics: [
      { label: 'Load Time Improvement', value: '3x' },
      { label: 'Backend Exposure', value: '0%' },
      { label: 'Email Stages', value: '7' },
    ],
    technologies: ['WordPress', 'TutorLMS', 'SureMembers', 'FluentCRM', 'ActiveCampaign'],
  },
  {
    slug: 'made-by-throne',
    title: 'Custom Shopify Store for Made by Throne',
    client: 'Made by Throne',
    url: 'madebythrone.com',
    industry: 'Cosmetics & Beauty',
    color: '#EC4899',
    gradient: 'from-pink-500 to-fuchsia-500',
    icon: '💄',
    tags: ['Shopify 2.0', 'Custom Liquid', 'Klaviyo', 'Beauty'],
    summary:
      'Premium US beauty brand storefront built entirely from scratch on Shopify 2.0 — custom shade selectors, interactive product discovery, and conversion-optimized checkout pipeline.',
    challenge: [
      'Cosmetic brands require photorealistic visual presentation and interactive shade selectors.',
      '80%+ traffic from mobile social channels requiring instant page loads.',
      'Default Shopify themes lacked flexibility for custom bundle builders and PDP storytelling.',
    ],
    solution: [
      'Custom-coded Liquid sections from scratch for full modular content control.',
      'Interactive Product Discovery Engine — shade match visualizers, ingredient tabs, before/after sliders.',
      'Conversion ecosystem — slide-out cart with free shipping thresholds and dynamic cross-sells.',
    ],
    outcomes: [
      'Lightning-fast mobile performance on custom Liquid architecture.',
      'Increased AOV with dynamic cross-sell prompts and shipping thresholds.',
      'Zero theme bloat — total design freedom for future updates.',
    ],
    metrics: [
      { label: 'Mobile Performance', value: 'Lightning-Fast' },
      { label: 'AOV Impact', value: 'Increased' },
      { label: 'Theme Bloat', value: 'Zero' },
    ],
    technologies: ['Shopify 2.0', 'Custom Liquid', 'Tailwind CSS', 'Klaviyo', 'Meta Pixel'],
  },
  {
    slug: 'meri-pharmacy',
    title: 'E-Commerce & Inventory for Meri Pharmacy',
    client: 'Meri Pharmacy',
    url: 'meripharmacy.pk',
    industry: 'Healthcare & Online Pharmacy',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-500',
    icon: '💊',
    tags: ['Shopify 2.0', 'Inventory Sync', 'Digital Marketing', 'Healthcare'],
    summary:
      'Operational overhaul of a fast-growing Pakistani online pharmacy — custom Shopify UI, real-time inventory sync across thousands of SKUs, and targeted digital marketing campaigns.',
    challenge: [
      'Managing thousands of rapidly changing SKUs, batch numbers, and stock across channels.',
      'Complex local logistics — delivery fees, FBR charges, nationwide shipping tiers.',
      'High trust barrier for customers uploading prescriptions and ordering healthcare essentials.',
    ],
    solution: [
      'Custom Shopify 2.0 UI with collection layouts, prescription upload flows, and clean product cards.',
      'Real-time inventory sync engine with structured SKU mapping and automated stock updates.',
      'Digital marketing infrastructure — Meta Pixel, Google Analytics, re-engagement campaigns.',
    ],
    outcomes: [
      'Accelerated time-to-checkout for returning prescription refill customers.',
      'Reduced order cancellation rates from inventory mismatches.',
      'Scalable nationwide reach — local same-day delivery and nationwide dispatch.',
    ],
    metrics: [
      { label: 'Order Cancellations', value: 'Reduced' },
      { label: 'Delivery Coverage', value: 'Nationwide' },
      { label: 'SKU Management', value: 'Automated' },
    ],
    technologies: ['Shopify 2.0', 'Liquid', 'Meta Pixel', 'Google Analytics', 'WhatsApp API'],
  },
  {
    slug: 'student-portal',
    title: 'Student Portal for Tapsvs',
    client: 'Tapsvs',
    url: 'studentportal.tapsvs.com',
    industry: 'Education / EdTech',
    color: '#6366F1',
    gradient: 'from-indigo-500 to-violet-500',
    icon: '🖥️',
    tags: ['Custom Dashboard', 'LearnDash', 'Front-End', 'LMS'],
    summary:
      'Dedicated student portal sub-domain hosting the learning environment — optimized for speed, security, and scalability with a clean, unified custom UI.',
    challenge: [
      'Students and instructors were forced through WordPress backend for course management.',
      'No centralized hub for tracking progress, accessing courses, or managing profiles.',
      'Cross-device experience was inconsistent and cluttered.',
    ],
    solution: [
      'Isolated sub-domain portal for optimized speed and security.',
      'Custom front-end dashboards with role-based access for students and instructors.',
      'Seamless integration with LearnDash for course content and progress tracking.',
    ],
    outcomes: [
      'Zero WordPress backend interaction for daily learning tasks.',
      'Unified dashboard ecosystem across all devices.',
      'Scalable architecture supporting growing course libraries.',
    ],
    metrics: [
      { label: 'Backend Interaction', value: 'Zero' },
      { label: 'Device Support', value: 'All' },
      { label: 'Integration', value: 'LearnDash' },
    ],
    technologies: ['WordPress', 'LearnDash', 'Custom PHP', 'JavaScript', 'REST API'],
  },
];
