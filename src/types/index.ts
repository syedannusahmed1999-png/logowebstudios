export type PageId =
  | 'home'
  | 'app-design'
  | 'brand-design'
  | 'web-development'
  | 'blog'
  | 'blog-post'
  | 'contact'
  | 'terms'
  | 'privacy';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'App Design' | 'Brand Identity' | 'Web Development';
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    timeframe: string;
  };
  deliverables: string[];
  image: string;
  fallbackGradient: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Product Design' | 'Brand Strategy' | 'Web Engineering' | 'UX Research';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  featured?: boolean;
  content: {
    introduction: string;
    sections: {
      heading: string;
      paragraphs: string[];
      quote?: string;
    }[];
    takeaways: string[];
  };
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  quote: string;
  metric: string;
  verifiedPlaceholder: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Process' | 'Pricing' | 'Technology' | 'Deliverables';
}

export interface ContactFormState {
  fullName: string;
  email: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
}
