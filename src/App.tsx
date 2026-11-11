import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { HomePage } from './pages/HomePage';
import { AppDesignPage } from './pages/AppDesignPage';
import { BrandDesignPage } from './pages/BrandDesignPage';
import { WebDevPage } from './pages/WebDevPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string>('1');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [prefillContact, setPrefillContact] = useState<{
    services?: string[];
    budget?: string;
  } | undefined>(undefined);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = document.querySelectorAll<HTMLElement>(
      'main section, main article, main form, main section > div > div, footer, footer > div'
    );
    if (!('IntersectionObserver' in window)) return;

    const sectionVariants = [
      'cinematic',
      'wipe',
      'rise',
      'scale',
      'left',
      'tilt',
      'right',
      'focus',
    ] as const;
    const cardVariants = ['card-rise', 'card-left', 'card-scale', 'card-tilt'] as const;
    let sectionIndex = 0;
    let cardIndex = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((element) => {
      const isCard = element.tagName === 'ARTICLE';
      element.classList.add('scroll-reveal');

      if (isCard) {
        element.classList.add('scroll-reveal-card');
        element.classList.add(`scroll-reveal--${cardVariants[cardIndex % cardVariants.length]}`);
        element.style.setProperty('--scroll-reveal-delay', `${(cardIndex % 4) * 85}ms`);
        cardIndex += 1;
      } else if (element.tagName === 'FOOTER') {
        element.classList.add('scroll-reveal--footer');
      } else if (element.matches('footer > div')) {
        element.classList.add('scroll-reveal--footer-content');
        element.style.setProperty('--scroll-reveal-delay', `${sectionIndex * 100}ms`);
        sectionIndex += 1;
      } else if (element.matches('main section > div > div')) {
        element.classList.add('scroll-reveal--content');
        element.style.setProperty('--scroll-reveal-delay', `${(sectionIndex % 3) * 90}ms`);
        sectionIndex += 1;
      } else {
        element.classList.add(`scroll-reveal--${sectionVariants[sectionIndex % sectionVariants.length]}`);
        sectionIndex += 1;
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  // Update dynamic page title for client SEO & history tracking
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Logo Web Studio – Digital Products, Websites & Brand Identity',
      'app-design': 'App Design (iOS, Android & Web) – Logo Web Studio',
      'brand-design': 'Logo & Brand Design, 3D Marks & Landing Pages – Logo Web Studio',
      'web-development': 'Web Design, Headless E-Commerce & Management – Logo Web Studio',
      blog: 'Insights & Journal – Design Systems & Engineering – Logo Web Studio',
      'blog-post': 'Editorial Dispatch – Logo Web Studio',
      contact: 'Start a Project – Logo Web Studio',
      terms: 'Terms & Conditions of Service – Logo Web Studio',
      privacy: 'Privacy Policy & Data Security – Logo Web Studio',
    };
    document.title = titles[currentPage] || 'Logo Web Studio';
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEstimatorToContact = (data?: { services: string[]; budget: string }) => {
    setPrefillContact(data);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#EEF3FA] font-sans text-[#10213D] selection:bg-[#0040FF] selection:text-[#FFFFFF]">
      {/* Strict Top Bar Contract Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        <div key={currentPage} className="page-transition">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'app-design' && (
          <AppDesignPage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'brand-design' && (
          <BrandDesignPage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'web-development' && (
          <WebDevPage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onSelectArticle={(id) => setSelectedArticleId(id)}
          />
        )}

        {currentPage === 'blog-post' && (
          <BlogPostPage
            articleId={selectedArticleId}
            onNavigate={handleNavigate}
            onSelectArticle={(id) => setSelectedArticleId(id)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            prefillData={prefillContact}
          />
        )}

        {currentPage === 'terms' && <TermsPage onNavigate={handleNavigate} />}

        {currentPage === 'privacy' && <PrivacyPage onNavigate={handleNavigate} />}
        </div>
      </main>

      {/* Interactive Scope Estimator Modal */}
      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onNavigateToContact={handleEstimatorToContact}
      />

      {/* Consistent Multi-page Directory Footer with Editable Placeholders */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
