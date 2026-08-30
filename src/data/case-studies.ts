export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  url: string;
  industry: string;
  category: 'Web Apps' | 'E-Commerce' | 'ERP & Enterprise' | 'AI & Automation' | 'EdTech' | 'HealthTech';
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
  featuredImage: string;
  mockupType?: 'desktop' | 'mobile' | 'dashboard';
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'zatca-enterprise-erp',
    title: 'ZATCA Phase 2 E-Invoicing & Supply Chain ERP',
    client: 'Saudi Industrial Logistics Group',
    url: 'inspired.com.pk/erpnext',
    industry: 'Enterprise ERP / Supply Chain',
    category: 'ERP & Enterprise',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-500',
    icon: '📊',
    tags: ['ERPNext', 'Frappe', 'ZATCA Phase 2', 'PostgreSQL', 'Multi-Warehouse'],
    summary:
      'Engineered a complete enterprise ERPNext rollout across 6 distribution centers in Saudi Arabia — achieving 100% ZATCA Phase 2 XML clearance, automated inventory valuation, and multi-currency financials.',
    challenge: [
      'Complex ZATCA compliance deadlines with steep penalties for non-compliant cryptographic invoicing.',
      'Fragmented warehouse data across regional branches causing stock inaccuracies and order delays.',
      'Heavy manual accounting reconciliation between point-of-sale terminals and central ledger.',
    ],
    solution: [
      'Native ZATCA Phase 2 Frappe integration generating cryptographic CSID stamps and automated FATOORA clearance.',
      'Centralized multi-warehouse stock management with automated batch and expiry tracking.',
      'Automated bank feed synchronization and real-time P&L reporting.',
    ],
    outcomes: [
      '100% audit compliance with zero ZATCA submission errors.',
      '45% reduction in inventory reconciliation time across all regional hubs.',
      'Unified executive reporting with real-time gross margin visibility.',
    ],
    metrics: [
      { label: 'ZATCA Compliance', value: '100%' },
      { label: 'Reconciliation Speed', value: '45% Faster' },
      { label: 'License Costs', value: '$0 (Open Source)' },
    ],
    technologies: ['ERPNext 15', 'Frappe Framework', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&auto=format',
    mockupType: 'dashboard',
  },
  {
    slug: 'agentic-ai-support',
    title: 'Autonomous Multilingual AI Support & Document OCR',
    client: 'Apex Global Telecommunications',
    url: 'inspired.com.pk/ai-automation',
    industry: 'AI Automation / Telecom',
    category: 'AI & Automation',
    color: '#818CF8',
    gradient: 'from-indigo-500 to-violet-500',
    icon: '🤖',
    tags: ['LangGraph', 'Enterprise RAG', 'OCR Vision', 'WhatsApp Bot', 'GPT-4o'],
    summary:
      'Deployed an enterprise autonomous AI agent ecosystem capable of handling 80,000+ monthly customer inquiries in Roman Urdu, Arabic, and English, while parsing invoice PDFs with 99.2% extraction accuracy.',
    challenge: [
      'Overwhelmed support desk during peak billing cycles causing 4+ hour customer wait times.',
      'Manual scanning and manual data entry of vendor invoices taking 15+ minutes per document.',
      'High error rate in customer ticket classification across multilingual regional inquiries.',
    ],
    solution: [
      'Multi-agent LangGraph workflow for autonomous inquiry triage, ticket lookup, and self-service resolution.',
      'Computer vision OCR pipeline parsing tabular data and line items directly into internal databases.',
      'Omnichannel deployment across WhatsApp Business API, Web Portal, and Slack.',
    ],
    outcomes: [
      '60% reduction in human support workload with average response latency under 2 seconds.',
      '99.2% verified invoice extraction accuracy with zero data hallucination.',
      '24/7 availability with seamless human-in-the-loop escalation triggers.',
    ],
    metrics: [
      { label: 'Workload Deflected', value: '60%' },
      { label: 'Extraction Accuracy', value: '99.2%' },
      { label: 'Response Latency', value: '<2s' },
    ],
    technologies: ['LangGraph', 'Python FastAPI', 'Qdrant Vector DB', 'OpenAI GPT-4o', 'Whisper', 'Docker'],
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=700&fit=crop&auto=format',
    mockupType: 'dashboard',
  },
  {
    slug: 'tapsvs-lms',
    title: 'Unified Custom LMS & Student Ecosystem for Tapsvs',
    client: 'Tapsvs',
    url: 'tapsvs.com',
    industry: 'Education / EdTech',
    category: 'EdTech',
    color: '#00FF88',
    gradient: 'from-emerald-500 to-teal-500',
    icon: '🎓',
    tags: ['LearnDash', 'Custom UI/UX', 'Next.js', 'WordPress Core', 'LMS'],
    summary:
      'Transformed Tapsvs from a basic quiz site into a high-concurrency Learning Management System with custom role-based dashboards, isolated sub-domain architecture, and multi-device video delivery.',
    challenge: [
      'Students and instructors were exposed to default WordPress panels, creating security risks and high confusion.',
      'Static quiz setups lacked dynamic progress tracking, automated prerequisites, and instant scoring.',
      'System crashed during peak exam submission windows due to monolithic database queries.',
    ],
    solution: [
      'Decoupled student portal on a dedicated high-speed sub-domain for optimized speed and scalability.',
      'Custom role-based front-end dashboards for students, instructors, and corporate proctors.',
      'LearnDash integration with automated course progression, drip content, and certificate generation.',
    ],
    outcomes: [
      '100% front-end workflow — zero WordPress core exposure for students or teachers.',
      'Sub-second page transitions supporting 50,000+ active concurrent learners.',
      'Automated grading engine eliminating 20+ hours of weekly manual grading per instructor.',
    ],
    metrics: [
      { label: 'Active Students', value: '50k+' },
      { label: 'Backend Exposure', value: '0%' },
      { label: 'Uptime', value: '99.99%' },
    ],
    technologies: ['Next.js', 'React', 'LearnDash', 'Custom PHP', 'REST API', 'Cloudflare CDN'],
    featuredImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=700&fit=crop&auto=format',
    mockupType: 'desktop',
  },
  {
    slug: 'clineum-medical',
    title: 'Enterprise Medical College & Hospital ERP for Clineum',
    client: 'Clineum',
    url: 'clineum.com',
    industry: 'Healthcare / HealthTech',
    category: 'HealthTech',
    color: '#00B4FF',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🏥',
    tags: ['HealthTech', 'Biometric Sync', 'Blockchain', 'Custom ERP', 'HIPAA'],
    summary:
      'Comprehensive digital platform engineered for medical and nursing colleges — unifying biometric attendance, hospital rotation tracking, and tamper-proof blockchain credentialing into a single modular ecosystem.',
    challenge: [
      'Generic software failed to accommodate hospital clinical rotations, ward logbooks, and surgical quotas.',
      'High credential tampering risk requiring secure, instant verification for global licensing boards.',
      'Disconnected records between academic lectures and real-time hospital ward attendance.',
    ],
    solution: [
      'Smart Campus & Clinical ERP Core managing clinical rotations, biometric attendance, and fee ledgers.',
      'Clinical Rotation Tracker recording verified hours, ward competencies, and supervisor sign-offs.',
      'Blockchain Credentialing Engine issuing tamper-proof verifiable digital diplomas and transcripts.',
    ],
    outcomes: [
      '100% instantly verifiable credentials for employers and international medical boards.',
      'Zero-friction clinical hour logging across 12 associated teaching hospitals.',
      'Eliminated paper logbook fraud with GPS-verified biometric ward clock-ins.',
    ],
    metrics: [
      { label: 'Verifiable Credentials', value: '100%' },
      { label: 'Hours Tracked', value: '250k+' },
      { label: 'Paperwork Eliminated', value: '85%' },
    ],
    technologies: ['React', 'Node.js', 'Blockchain Ledger', 'Biometric APIs', 'PostgreSQL', 'AWS'],
    featuredImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=700&fit=crop&auto=format',
    mockupType: 'desktop',
  },
  {
    slug: 'dikhatz-shopify',
    title: 'Interactive 3D Hat Patch Customizer for DIKHatz',
    client: 'DIKHatz',
    url: 'dikhatz.com',
    industry: 'Apparel & Headwear',
    category: 'E-Commerce',
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-indigo-500',
    icon: '🧢',
    tags: ['Shopify 2.0', 'Custom Liquid', 'Interactive Visualizer', 'Tailwind CSS'],
    summary:
      'Custom Shopify 2.0 storefront with an interactive real-time patch visualizer — enabling shoppers to preview, swap, and personalize headwear with interchangeable patches seamlessly on mobile.',
    challenge: [
      'Default Shopify themes cannot handle dynamic hat-patch combinations without slow page reloads.',
      'Passing custom SKU combinations into the checkout cart caused inventory stock count errors.',
      '85%+ mobile traffic demanded sub-second visual responsiveness without heavy 3D engine lag.',
    ],
    solution: [
      'Ultra-lightweight custom Liquid theme built from scratch with zero framework bloat.',
      'Interactive Canvas Customizer rendering photorealistic patch textures on selected hat colorways.',
      'Dynamic SKU bundling passing custom line-item properties cleanly to Shopify checkout.',
    ],
    outcomes: [
      '38% increase in conversion rate following the interactive visualizer launch.',
      '100% accurate fulfillment orders with exact custom patch specifications.',
      'Sub-second page load times across all mobile social ad traffic.',
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+38%' },
      { label: 'Real-Time Preview', value: 'Instant' },
      { label: 'Mobile Score', value: '98/100' },
    ],
    technologies: ['Shopify 2.0', 'Custom Liquid', 'JavaScript ES6', 'Tailwind CSS', 'Klaviyo'],
    featuredImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=700&fit=crop&auto=format',
    mockupType: 'mobile',
  },
  {
    slug: 'meri-pharmacy',
    title: 'High-Volume Online Pharmacy & Inventory Sync for Meri Pharmacy',
    client: 'Meri Pharmacy',
    url: 'meripharmacy.pk',
    industry: 'Healthcare & E-Commerce',
    category: 'E-Commerce',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-500',
    icon: '💊',
    tags: ['Shopify 2.0', 'Prescription Upload', 'Inventory Sync', 'WhatsApp API'],
    summary:
      'Complete digital transformation of a fast-growing pharmaceutical retail chain — custom Shopify UI, instant prescription upload flow, real-time inventory sync across 15,000+ SKUs, and nationwide courier dispatch.',
    challenge: [
      'Managing 15,000+ rapidly fluctuating pharmaceutical SKUs and batch expiry dates without stockouts.',
      'Strict regulatory requirement for verified pharmacist review before prescription fulfillment.',
      'High cart abandonment due to complex delivery tier calculations across nationwide cities.',
    ],
    solution: [
      'Custom Shopify 2.0 collection architecture with one-click prescription upload and dosage guides.',
      'Automated inventory sync engine integrating physical pharmacy POS systems with online catalog.',
      'WhatsApp order confirmation and rider dispatch notifications for transparent tracking.',
    ],
    outcomes: [
      '3x sales growth within 6 months of relaunch.',
      '65% faster order turnaround from prescription verification to courier handover.',
      'Near-zero order cancellation rates from inventory mismatches.',
    ],
    metrics: [
      { label: 'Sales Growth', value: '3x' },
      { label: 'Catalog SKUs', value: '15,000+' },
      { label: 'Dispatch Speed', value: '65% Faster' },
    ],
    technologies: ['Shopify 2.0', 'Custom Liquid', 'Node.js Middleware', 'WhatsApp API', 'Google Analytics 4'],
    featuredImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=700&fit=crop&auto=format',
    mockupType: 'desktop',
  },
  {
    slug: 'made-by-throne',
    title: 'Direct-to-Consumer Luxury Cosmetics Store for Made by Throne',
    client: 'Made by Throne',
    url: 'madebythrone.com',
    industry: 'Cosmetics & Beauty',
    category: 'E-Commerce',
    color: '#EC4899',
    gradient: 'from-pink-500 to-fuchsia-500',
    icon: '💄',
    tags: ['Shopify 2.0', 'Shade Matcher', 'Custom Liquid', 'Klaviyo Automation'],
    summary:
      'Custom-engineered US beauty storefront built from the ground up on Shopify 2.0 — featuring interactive shade match visualizers, before/after sliders, dynamic slide-out cart cross-sells, and high-conversion checkout.',
    challenge: [
      'Premium beauty buyers require photorealistic shade matching and skin tone visualization before purchase.',
      'Heavy influencer marketing traffic created massive traffic surges that caused legacy theme slowdowns.',
      'Low average order value without dynamic product bundling and tiered incentives.',
    ],
    solution: [
      'Custom Liquid component architecture crafted from scratch with zero third-party theme bloat.',
      'Interactive shade match visualizer and high-definition before/after image comparison sliders.',
      'Smart slide-out cart with automated free shipping progress bar and recommended bundle upsells.',
    ],
    outcomes: [
      '42% increase in Average Order Value (AOV) via smart cart bundle recommendations.',
      'Flawless 100% uptime during viral social media product launches.',
      '0.8s mobile load time resulting in a 28% drop in bounce rate.',
    ],
    metrics: [
      { label: 'AOV Increase', value: '+42%' },
      { label: 'Page Load', value: '0.8s' },
      { label: 'Bounce Rate', value: '-28%' },
    ],
    technologies: ['Shopify 2.0', 'Custom Liquid', 'Tailwind CSS', 'Klaviyo', 'Meta Pixel'],
    featuredImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=700&fit=crop&auto=format',
    mockupType: 'desktop',
  },
  {
    slug: 'drive-venturous',
    title: 'Hybrid Content & E-Commerce Platform for Drive Venturous',
    client: 'Drive Venturous',
    url: 'driveventurous.com',
    industry: 'Automotive & Off-Road Gear',
    category: 'Web Apps',
    color: '#FF0080',
    gradient: 'from-pink-500 to-rose-500',
    icon: '🚗',
    tags: ['WordPress', 'Shopify', 'AI Chatbot', 'Hybrid Architecture'],
    summary:
      'High-performance decoupled digital architecture pairing editorial storytelling on WordPress with high-speed checkout on Shopify, augmented with a 24/7 AI recommendation assistant.',
    challenge: [
      'Balancing high-resolution video adventure content with lightning-fast catalog browsing.',
      'Heavy volume of technical vehicle compatibility questions straining support staff.',
      'Disjointed brand feel across previous separate blog and shopping URLs.',
    ],
    solution: [
      'Hybrid decoupled stack — WordPress headless CMS for storytelling, Shopify for checkout.',
      'Integrated AI vehicle compatibility agent providing instant gear fitment answers.',
      'Unified design token system providing seamless cross-domain navigation.',
    ],
    outcomes: [
      '50% reduction in pre-purchase customer service inquiry tickets.',
      'Seamless single-click checkout across all editorial gear review pages.',
      'High search rankings across competitive automotive off-road keywords.',
    ],
    metrics: [
      { label: 'Support Inquiries', value: '-50%' },
      { label: 'Checkout Uptime', value: '100%' },
      { label: 'Architecture', value: 'Decoupled' },
    ],
    technologies: ['WordPress Headless', 'Shopify Sub-domain', 'Anthropic Claude AI', 'Cloudflare Edge'],
    featuredImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=700&fit=crop&auto=format',
    mockupType: 'desktop',
  },
  {
    slug: 'english-evolution',
    title: 'Tiered Membership & Learning Platform for English Evolution',
    client: 'English Evolution Academy',
    url: 'englishevolutionacademy.com',
    industry: 'EdTech / Language Education',
    category: 'EdTech',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-500',
    icon: '📚',
    tags: ['TutorLMS', 'SureMembers', 'Lifecycle Automation', 'Stripe'],
    summary:
      'Transformed an in-person language institute into an international digital academy — featuring tiered video lesson gating, interactive audio quizzes, and a 7-stage automated student onboarding engine.',
    challenge: [
      'Manual student access provisioning caused severe administrative delays and video piracy risks.',
      'Low course completion rates due to lack of automated retention touchpoints.',
      'Difficulty accepting international student payments in USD, EUR, and GBP.',
    ],
    solution: [
      'High-performance content gating engine with encrypted video streaming and device limit locks.',
      '7-stage automated email and WhatsApp retention sequence celebrating student milestones.',
      'Stripe & PayPal multi-currency international billing with automated subscription renewals.',
    ],
    outcomes: [
      '4x increase in active international student subscriptions.',
      '70% higher lesson completion rate through milestone celebration emails.',
      'Zero manual admin intervention required for new student onboarding.',
    ],
    metrics: [
      { label: 'Student Growth', value: '4x' },
      { label: 'Completion Rate', value: '+70%' },
      { label: 'Admin Work', value: 'Automated' },
    ],
    technologies: ['WordPress Core', 'TutorLMS', 'SureMembers', 'FluentCRM', 'Stripe Billing'],
    featuredImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=700&fit=crop&auto=format',
    mockupType: 'desktop',
  },
];
