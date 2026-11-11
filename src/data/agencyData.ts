import { BlogPost, FAQItem, ProjectItem, Testimonial } from '../types';
import appDesignImage from '../assets/images/service_app_design_1793029451890.jpg';
import brandIdentityImage from '../assets/images/service_brand_identity_1793029453265.jpg';
import webDevelopmentImage from '../assets/images/service_web_development_1793029454353.jpg';

export const STUDIO_METRICS = [
  { label: 'Digital Products Launched', value: '84+' },
  { label: 'Client Retention Rate', value: '98.5%' },
  { label: 'Avg. Client Growth in 12 Mo', value: '+164%' },
  { label: 'International Design Honors', value: '18' },
];

export const AGENCY_SERVICES = [
  {
    id: 'app-design',
    title: 'iOS & Android Apps',
    pageId: 'app-design' as const,
    subtitle: 'Native iOS, Android & Responsive Web Apps',
    description:
      'Useful, well-considered mobile and web apps designed around real people and the way they work.',
    image: appDesignImage,
    capabilities: [
      'Android App Design (Material 3 & Edge-to-Edge)',
      'iOS App Design (Apple HIG & Fluid Haptics)',
      'Web App & SaaS Dashboard Design',
      'Design Systems & Token Architecture',
    ],
  },
  {
    id: 'brand-design',
    title: 'Brand Systems & Identity',
    pageId: 'brand-design' as const,
    subtitle: 'Identity Systems, 3D Marks & Conversion Pages',
    description:
      'Distinctive identities that give your business a clear voice, a memorable look and room to grow.',
    image: brandIdentityImage,
    capabilities: [
      'Custom Vector Logo Systems & Lockups',
      '3D Logo Modeling & Kinetic Motion Assets',
      'Comprehensive Brand Style Guides & Tokens',
      'Conversion-Optimized Landing Page Design',
    ],
  },
  {
    id: 'web-development',
    title: 'Custom Web Engineering',
    pageId: 'web-development' as const,
    subtitle: 'Custom Web Apps, Headless Stores & Management',
    description:
      'Fast, accessible websites and online stores, built around your business and ready for what comes next.',
    image: webDevelopmentImage,
    capabilities: [
      'Bespoke React & Next.js Web Engineering',
      'Shopify Plus & Headless E-Commerce Engines',
      'Continuous Online Store Management & CRO',
      'Core Web Vitals & Technical SEO Optimization',
    ],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'novaflow-health',
    title: 'Novaflow Clinical AI & Patient Portal',
    client: '[Novaflow Biosystems]',
    category: 'App Design',
    year: '2026',
    summary:
      'A cross-platform mobile suite for remote patient diagnostics and clinical monitoring with sub-100ms sync.',
    challenge:
      'Complex patient diagnostic telemetry was overwhelming users and causing 38% drop-off during daily biometric logging.',
    solution:
      'Designed a calm iOS and Android interface with one-touch morning routines and biometric sensor integrations.',
    metrics: {
      label: 'Patient Daily Active Retention',
      value: '+184%',
      timeframe: 'Over 6 Months',
    },
    deliverables: ['iOS Design System', 'Android Material 3 Tokens', 'Interactive Prototype', 'WCAG AAA Audit'],
    image: appDesignImage,
    fallbackGradient: 'from-emerald-950 via-slate-900 to-black',
  },
  {
    id: 'atelier-kroma',
    title: 'Atelier Kroma Flagship E-Commerce',
    client: '[Kroma Luxury Homewares]',
    category: 'Web Development',
    year: '2026',
    summary:
      'A bespoke headless shopping experience with 3D product visualizer and dynamic catalog synchronization.',
    challenge:
      'Legacy monolith store suffered 4.2-second initial page loads and poor international mobile checkout conversion.',
    solution:
      'Built a headless Shopify storefront on Next.js with edge caching, resulting in 99/100 Lighthouse performance and instant checkout.',
    metrics: {
      label: 'Mobile GMV Growth',
      value: '+220%',
      timeframe: 'Over 90 Days',
    },
    deliverables: ['Custom Headless Architecture', 'Stripe Multi-Currency', 'Catalog Sync API', 'Lighthouse 99 Engine'],
    image: webDevelopmentImage,
    fallbackGradient: 'from-amber-950 via-neutral-900 to-black',
  },
  {
    id: 'solstice-brand',
    title: 'Solstice Capital Identity & Spatial 3D Mark',
    client: '[Solstice Ventures]',
    category: 'Brand Identity',
    year: '2025',
    summary:
      'Complete institutional rebranding, vector logo suite, metallic 3D assets, and Series A investor portal.',
    challenge:
      'The firm needed to transition from early angel syndicate to an institutional $120M deep-tech fund without losing founder rapport.',
    solution:
      'Created a distinctive typographic identity with an embossed 3D emblem and tactile print stationery.',
    metrics: {
      label: 'Institutional LP Allocation',
      value: '$120M',
      timeframe: 'Fund III Close',
    },
    deliverables: ['Brand Guidelines Book', '3D Kinetic Stinger', 'Investor Landing Portal', 'Stationery Specs'],
    image: brandIdentityImage,
    fallbackGradient: 'from-stone-900 via-neutral-900 to-black',
  },
];

export const AGENCY_PROCESS = [
  {
    step: '01',
    title: 'Discovery & Strategic Architecture',
    timeframe: 'Week 1 – 2',
    description:
      'We dissect your business goals, user personas, unit economics, and technical boundaries. We define clear KPIs, structural wireframes, and design system foundations before writing a single line of code.',
  },
  {
    step: '02',
    title: 'Interactive Prototyping & Visual Direction',
    timeframe: 'Week 3 – 4',
    description:
      'We develop high-fidelity clickable Figma prototypes and kinetic motion studies. You test real interaction loops, typography scales, and responsive transitions in your hands on actual devices.',
  },
  {
    step: '03',
    title: 'High-Fidelity Engineering & Polish',
    timeframe: 'Week 5 – 7',
    description:
      'Our senior engineers build your product using typed React, TypeScript, and modern headless infrastructure. Zero fluff, 100% semantic code, automated test suites, and strict sub-second performance budgets.',
  },
  {
    step: '04',
    title: 'Deployment & Continuous Evolution',
    timeframe: 'Week 8+',
    description:
      'Rigorous cross-browser QA, accessibility compliance, and zero-downtime deployment. Post-launch, we monitor analytics, optimize conversion funnels, and iterate based on real user behavioral telemetry.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: '[Elena Vance]',
    clientRole: 'Chief Product Officer',
    companyName: '[Vance BioSciences Inc.]',
    quote:
      'The team transformed our clinical data app into an intuitive experience that physicians actually enjoy using. Our monthly active retention increased by 184% in just six months.',
    metric: '+184% Retention',
    verifiedPlaceholder: true,
  },
  {
    id: '2',
    clientName: '[Marcus Sterling]',
    clientRole: 'Founder & CEO',
    companyName: '[Sterling Atelier London]',
    quote:
      'The brand identity and custom web platform positioned our luxury brand alongside century-old European houses. Our average order value surged by 65%.',
    metric: '+65% Average Order Value',
    verifiedPlaceholder: true,
  },
  {
    id: '3',
    clientName: '[Dr. Aris Thorne]',
    clientRole: 'Managing General Partner',
    companyName: '[Apex DeepTech Ventures]',
    quote:
      'Unlike traditional agencies that hand off static PSDs, this team delivered production-ready code with thoughtful typography and micro-interactions. They hit every milestone ahead of schedule.',
    metric: '100% On-Time Milestones',
    verifiedPlaceholder: true,
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    category: 'Process',
    question: 'How does your collaborative design and engineering process work?',
    answer:
      'We operate in 2-week agile sprints with direct access to your lead designer and engineer via a dedicated Slack/Discord channel. You receive interactive Figma builds and staging preview URLs at the conclusion of every sprint, ensuring full transparency and continuous feedback without bureaucratic delays.',
  },
  {
    category: 'Deliverables',
    question: 'Who owns the intellectual property and code upon project completion?',
    answer:
      'You do. 100% of the intellectual property, including all Figma token files, production vector source assets, font licensing guidelines, and typed source code repositories, transfers entirely to your organization upon final invoice settlement.',
  },
  {
    category: 'Pricing',
    question: 'How do you structure project pricing and payment schedules?',
    answer:
      'We offer fixed-scope project agreements for defined scopes (typically starting at $15k) and flexible monthly engineering/design retainers for high-growth startups. Invoicing is milestone-based: 40% upfront deposit, 30% upon interactive prototype approval, and 30% upon final production deployment.',
  },
  {
    category: 'Deliverables',
    question: 'How many design revisions are included during the design phase?',
    answer:
      'Our structured process includes two rounds of comprehensive revisions at each major milestone (wireframe architecture, visual direction, and high-fidelity prototype). Because we co-align on strategy in Week 1, 94% of our client partners approve directions within the initial revision cycle.',
  },
  {
    category: 'Technology',
    question: 'What modern technologies do you employ for custom web and app development?',
    answer:
      'We specialize in modern, battle-tested stacks: React, TypeScript, Next.js, React Native, Swift, Kotlin, Tailwind CSS, headless CMS (Sanity, Strapi), and Shopify Plus engines. Every codebase is optimized for sub-second page loads, WCAG AA accessibility, and automated CI/CD pipelines.',
  },
  {
    category: 'Process',
    question: 'Do you offer ongoing maintenance and store management post-launch?',
    answer:
      'Yes. Our Online Store & Web Management retainer covers 24/7 uptime monitoring, security patching, Core Web Vitals maintenance, conversion rate experiments (A/B testing), and ongoing feature sprints with a dedicated monthly SLA.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'design-tokens-multiplatform-apps',
    title: 'The Unified Design Token Architecture for iOS, Android & Web in 2026',
    excerpt:
      'How to build a single source of design truth that compiles flawlessly to SwiftUI, Jetpack Compose, and Tailwind CSS without manual overhead.',
    category: 'Product Design',
    readTime: '6 min read',
    date: 'October 2026',
    featured: true,
    author: {
      name: '[Marcus Chen]',
      role: 'Head of Design Systems',
      avatar: 'MC',
    },
    image: '/src/assets/images/blog_featured_editorial_1793029454161.jpg',
    content: {
      introduction:
        'As software ecosystems expand across phones, tablets, foldables, and browsers, keeping design tokens synchronized across platforms is no longer a luxury—it is an architectural necessity.',
      sections: [
        {
          heading: '01. The Fallacy of Platform Parity Without Shared Tokens',
          paragraphs: [
            'For years, product teams treated iOS, Android, and Web design as three isolated silos. The design team handed off a static Figma artboard, and each engineering team re-interpreted spacing variables, color shades, and animation curves from scratch. The inevitable result was visual drift: iOS buttons had a 12px radius, Android used 8px, and the Web used 6px.',
            'By establishing a machine-readable token repository structured in JSON with Style Dictionary, we can automatically compile one semantic token into Swift color structures, Kotlin Material 3 themes, and Tailwind CSS configuration objects.',
          ],
          quote:
            'A design system without machine-compiled tokens is merely a suggestion that decays with every deployment.',
        },
        {
          heading: '02. Semantic Hierarchy: Global vs Component Tokens',
          paragraphs: [
            'We categorize tokens into three distinct tiers: Primitive (e.g., color-slate-900), Semantic (e.g., surface-elevated-primary), and Component-scoped (e.g., button-primary-hover-background). This ensures that updating a brand accent or introducing a high-contrast accessibility theme takes minutes instead of months of code refactoring.',
            'Semantic tokens also streamline dark-mode optical compensation, ensuring text legible on white canvases receives appropriate weight adjustments when rendered on OLED deep black surfaces.',
          ],
        },
      ],
      takeaways: [
        'Centralize token definitions in a version-controlled repository using W3C Design Tokens Community Group standards.',
        'Enforce semantic naming rather than literal color names to support effortless theming.',
        'Automate compilation pipelines to output native Swift, Kotlin Compose, and CSS packages directly to engineer pull requests.',
      ],
    },
  },
  {
    id: '2',
    slug: 'brand-identity-longevity-in-digital-age',
    title: 'Designing for Permanence: Why Modern Brand Identities Must Transcend Trends',
    excerpt:
      'Examining how timeless geometric principles, optical kerning, and spatial 3D versatility protect brand equity from rapid aesthetic obsolescence.',
    category: 'Brand Strategy',
    readTime: '5 min read',
    date: 'September 2026',
    featured: false,
    author: {
      name: '[Sophia Lindqvist]',
      role: 'Creative Director',
      avatar: 'SL',
    },
    image: '/src/assets/images/service_brand_identity_1793029453265.jpg',
    content: {
      introduction:
        'In an era where generative tools can output thousands of superficial logos in seconds, enduring brand value is rooted in restraint, optical precision, and structural conceptual depth.',
      sections: [
        {
          heading: '01. The Resistance to Ephemeral Micro-Trends',
          paragraphs: [
            'Every eighteen months, digital design is flooded with a new visual craze—whether it is skeuomorphic glass, candy 3D balloons, or aggressive neo-brutalism. While micro-trends are suitable for seasonal social campaigns, a corporate identity must withstand 10 to 15 years of market fluctuations.',
            'Our studio focuses on foundational geometric purity: proportional relationships based on root rectangles, unmistakable silhouettes that remain identifiable at 16x16 pixel favicons, and optical balancing that machines cannot replicate.',
          ],
        },
        {
          heading: '02. Dimensional Extension: From Stationery to Spatial Computing',
          paragraphs: [
            'A contemporary mark must function equally well debossed into 350gsm cotton business cards and rendered as a physical metallic object in 3D environments. Designing the mark with volumetric integrity from day one ensures effortless adaptability across digital interfaces, physical architecture, and kinetic motion.',
          ],
        },
      ],
      takeaways: [
        'Validate logo marks in high-contrast monochrome before exploring chromatic palettes.',
        'Test legibility at micro-scales (16px app icons) and macro-scales (architectural signage).',
        'Prioritize emotional resonance and concept clarity over decorative embellishments.',
      ],
    },
  },
  {
    id: '3',
    slug: 'sub-second-headless-ecommerce-engineering',
    title: 'Engineering Sub-Second Flagship Storefronts with Modern Headless Architectures',
    excerpt:
      'A deep technical dive into how disconnecting frontend presentation layers from e-commerce backends unlocked 99+ Core Web Vitals and boosted conversion by 220%.',
    category: 'Web Engineering',
    readTime: '7 min read',
    date: 'August 2026',
    featured: false,
    author: {
      name: '[David K. Sterling]',
      role: 'VP of Technology',
      avatar: 'DS',
    },
    image: '/src/assets/images/service_web_development_1793029454353.jpg',
    content: {
      introduction:
        'Every 100 milliseconds of page latency costs modern e-commerce brands 1% of total revenue. Monolithic storefront architectures struggle to meet modern Core Web Vitals standards while handling complex international catalogs.',
      sections: [
        {
          heading: '01. The Latency Bottleneck of Monolithic Themes',
          paragraphs: [
            'Traditional e-commerce platforms bundle hundreds of third-party tracking scripts, render-blocking stylesheets, and unoptimized liquid templates that force the browser to recalculate layouts continuously. By the time a mobile shopper on a 4G connection reaches checkout, they have endured 4 to 6 seconds of layout shifts.',
            'Decoupling the frontend using Next.js on edge servers allows static asset pre-rendering and dynamic hydration strictly where user interaction occurs.',
          ],
        },
        {
          heading: '02. Edge Caching & Real-Time Inventory Coordination',
          paragraphs: [
            'With GraphQL storefront APIs and ISR (Incremental Static Regeneration), catalog pages render in sub-150ms globally while remaining in real-time synchronization with ERP warehouse inventory.',
          ],
        },
      ],
      takeaways: [
        'Eliminate render-blocking client scripts by offloading telemetry to server-side webhooks.',
        'Adopt optimistic UI patterns for add-to-cart flows to provide instant tactile feedback.',
        'Audit Core Web Vitals continuously through synthetic synthetic CI/CD gating.',
      ],
    },
  },
  {
    id: '4',
    slug: 'cognitive-load-in-fintech-dashboards',
    title: 'Reducing Cognitive Overload in High-Density Financial Dashboards',
    excerpt:
      'Practical heuristics for presenting complex real-time market data, portfolio charts, and multi-asset positions without overwhelming the user.',
    category: 'UX Research',
    readTime: '5 min read',
    date: 'July 2026',
    featured: false,
    author: {
      name: '[Dr. Helena Ross]',
      role: 'Principal UX Researcher',
      avatar: 'HR',
    },
    image: '/src/assets/images/agency_hero_workspace_1793029451207.jpg',
    content: {
      introduction:
        'Financial applications frequently confuse visual complexity with professional utility. When an investor or risk analyst views a screen, their working memory must focus on decision-making, not deciphering chaotic UI controls.',
      sections: [
        {
          heading: '01. Progressive Disclosure of Secondary Telemetry',
          paragraphs: [
            'High-frequency traders and everyday portfolio holders have differing information appetites. By structuring information into collapsible density levels and keyboard-first command bars, power users retain granular depth while everyday users enjoy a calm, legible overview.',
          ],
        },
      ],
      takeaways: [
        'Utilize monospace tabular numerals for all financial figures to preserve vertical column alignment.',
        'Never convey positive/negative asset returns through color alone; always pair with explicit directional glyphs.',
      ],
    },
  },
];
