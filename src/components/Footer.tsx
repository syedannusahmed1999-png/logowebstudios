import React, { useState } from 'react';
import { PageId } from '../types';
import { ArrowUpRight, Check, Mail } from 'lucide-react';
import logoWebStudio from '../assets/images/logo-web-studio.png';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^\S+@\S+\.\S+$/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid work email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  const navTo = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900/[0.09] bg-[#EEF3FA] text-[#586B84]">
      {/* Upper Footer: Marquee / Proposition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-slate-900/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="w-fit rounded-lg bg-white p-2">
              <img src={logoWebStudio} alt="Logo Web Studio" className="h-12 w-[190px] object-contain" />
            </div>
            <p className="text-[#586B84] text-sm leading-relaxed max-w-md">
              An independent team building useful digital products, thoughtful brands, and websites made to last.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#586B84] pt-2">
              <span>San Francisco</span>
              <span aria-hidden="true">·</span>
              <span>London</span>
              <span aria-hidden="true">·</span>
              <span>Stockholm</span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-900/10 rounded-2xl p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              The Design & Engineering Dispatch
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-[#10213D] mt-1">
              Monthly executive briefings on digital craft, tokens, and growth.
            </h3>
            <p className="text-xs text-[#586B84] mt-1 mb-4">
              Zero marketing fluff. Uncompromising essays and architecture breakdowns delivered once per month.
            </p>

            {newsletterSubmitted ? (
              <div className="flex items-center gap-2 p-3 bg-[#E5ECF5]/80 border border-amber-400/30 rounded-lg text-amber-300 text-sm">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Subscription confirmed. Welcome to the monthly studio dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-[#586B84] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        setNewsletterError('');
                      }}
                      placeholder="your.email@organization.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-700/80 rounded-lg text-sm text-[#10213D] placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-[#FFFFFF] font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {newsletterError && (
                  <p className="text-xs text-rose-400">{newsletterError}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Directory Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Core Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10213D] mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navTo('app-design')}
                  className="hover:text-[#10213D] transition-colors text-left"
                >
                  App Design (iOS & Android)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navTo('brand-design')}
                  className="hover:text-[#10213D] transition-colors text-left"
                >
                  Logo & Brand Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => navTo('web-development')}
                  className="hover:text-[#10213D] transition-colors text-left"
                >
                  Web Design & Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => navTo('app-design')}
                  className="text-[#586B84] hover:text-[#3F5068] transition-colors text-left text-xs"
                >
                  · Design Tokens & Governance
                </button>
              </li>
              <li>
                <button
                  onClick={() => navTo('web-development')}
                  className="text-[#586B84] hover:text-[#3F5068] transition-colors text-left text-xs"
                >
                  · Headless E-Commerce Optimization
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Studio & Thought Leadership */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10213D] mb-4">
              Studio & Work
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navTo('home')}
                  className="hover:text-[#10213D] transition-colors text-left"
                >
                  Selected Client Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navTo('home')}
                  className="hover:text-[#10213D] transition-colors text-left"
                >
                  Four-Phase Editorial Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => navTo('blog')}
                  className="hover:text-[#10213D] transition-colors text-left"
                >
                  Journal & Technical Essays
                </button>
              </li>
              <li>
                <button
                  onClick={() => navTo('contact')}
                  className="hover:text-[#10213D] transition-colors text-left"
                >
                  Discovery Call Scheduling
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Standards */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10213D] mb-4">
              Governance & Policies
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navTo('terms')}
                  className="hover:text-[#10213D] transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navTo('privacy')}
                  className="hover:text-[#10213D] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <span className="text-xs text-[#586B84] block pt-1">
                  WCAG AA Accessibility Compliant
                </span>
              </li>
              <li>
                <span className="text-xs text-[#586B84] block">
                  100% IP Transfer On Full Settlement
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Editable Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10213D] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm text-[#586B84]">
              <p>
                <span className="text-xs text-[#586B84] block">Inquiries:</span>
                <span className="break-all text-[#10213D] hover:text-amber-400 font-mono text-xs transition-colors">
                  [hello@auradigitalstudio.com]
                </span>
              </p>
              <p>
                <span className="text-xs text-[#586B84] block">Direct Line:</span>
                <span className="text-[#10213D] font-mono text-xs">
                  [+1 (555) 019-2834]
                </span>
              </p>
              <p>
                <span className="text-xs text-[#586B84] block">Studio HQ:</span>
                <span className="text-xs leading-relaxed text-[#3F5068]">
                  [742 Evergreen Terrace, Suite 400, San Francisco, CA 94107]
                </span>
              </p>
              <p className="text-xs text-[#586B84] pt-1">
                Business Hours: Mon–Fri, 9:00 AM – 6:00 PM PST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Unboxed Metadata */}
      <div className="border-t border-neutral-900 bg-[#F1F5FA] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#586B84]">
          <p>© {new Date().getFullYear()} Logo Web Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navTo('terms')}
              className="hover:text-[#3F5068] transition-colors"
            >
              Terms
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => navTo('privacy')}
              className="hover:text-[#3F5068] transition-colors"
            >
              Privacy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => navTo('contact')}
              className="hover:text-[#3F5068] transition-colors"
            >
              Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
