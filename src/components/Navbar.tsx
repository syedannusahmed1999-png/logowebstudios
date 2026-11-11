import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import logoWebStudio from '../assets/images/logo-web-studio.png';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEstimator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServiceActive =
    currentPage === 'app-design' ||
    currentPage === 'brand-design' ||
    currentPage === 'web-development';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900/10 bg-[#EEF3FA]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face, no descriptors/chips) */}
        <button
          onClick={() => handleNav('home')}
          className="shrink-0 rounded-lg bg-white p-1.5 transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01E1BB]/70"
          aria-label="Logo Web Studio home"
        >
          <img src={logoWebStudio} alt="" className="h-10 w-[146px] object-contain sm:w-[168px]" />
        </button>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#3F5068]">
          <button
            onClick={() => handleNav('home')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#10213D] py-1 relative ${
              currentPage === 'home' ? 'text-[#10213D] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0040FF]' : ''
            }`}
          >
            Overview
          </button>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 hover:text-[#10213D] py-1 relative ${
                isServiceActive ? 'text-[#10213D] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0040FF]' : ''
              }`}
              aria-expanded={servicesDropdownOpen}
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#586B84]" />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full -left-4 w-72 pt-3">
                <div className="bg-white border border-neutral-800 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                  <button
                    onClick={() => handleNav('app-design')}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex flex-col gap-0.5 ${
                      currentPage === 'app-design'
                        ? 'bg-[#E5ECF5] text-[#10213D]'
                        : 'hover:bg-[#E5ECF5]/60 text-[#28384F]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0040FF]">
                      <span>Mobile & Web Apps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium">App Design</span>
                    <span className="text-xs text-[#586B84]">iOS, Android, and SaaS applications</span>
                  </button>

                  <button
                    onClick={() => handleNav('brand-design')}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex flex-col gap-0.5 ${
                      currentPage === 'brand-design'
                        ? 'bg-[#E5ECF5] text-[#10213D]'
                        : 'hover:bg-[#E5ECF5]/60 text-[#28384F]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0040FF]">
                      <span>Brand Strategy</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium">Logo & Brand Design</span>
                    <span className="text-xs text-[#586B84]">Custom logos, 3D marks, brand books</span>
                  </button>

                  <button
                    onClick={() => handleNav('web-development')}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex flex-col gap-0.5 ${
                      currentPage === 'web-development'
                        ? 'bg-[#E5ECF5] text-[#10213D]'
                        : 'hover:bg-[#E5ECF5]/60 text-[#28384F]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0040FF]">
                      <span>Engineering</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium">Web Design & Dev</span>
                    <span className="text-xs text-[#586B84]">Custom sites, headless stores, CRO</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('blog')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#10213D] py-1 relative ${
              currentPage === 'blog' || currentPage === 'blog-post'
                ? 'text-[#10213D] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0040FF]'
                : ''
            }`}
          >
            Insights & Journal
          </button>

          <button
            onClick={() => handleNav('contact')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#10213D] py-1 relative ${
              currentPage === 'contact' ? 'text-[#10213D] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0040FF]' : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenEstimator}
            className="text-xs font-medium text-[#3F5068] hover:text-[#10213D] px-3 py-2 transition-colors whitespace-nowrap shrink-0"
          >
            Estimate Scope
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="px-5 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#0040FF] hover:bg-[#3B70FF] rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm shadow-[#0040FF]/10 active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#3F5068] hover:text-[#10213D] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-900/10 bg-[#EEF3FA] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <button
              onClick={() => handleNav('home')}
              className={`text-left px-3 py-2 rounded-lg ${
                currentPage === 'home' ? 'bg-[#E5ECF5] text-[#10213D]' : 'text-[#3F5068] hover:bg-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleNav('app-design')}
              className={`text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                currentPage === 'app-design' ? 'bg-[#E5ECF5] text-[#10213D]' : 'text-[#3F5068] hover:bg-white'
              }`}
            >
              <span>App Design (iOS & Android)</span>
              <span className="text-xs text-[#0040FF]">Service</span>
            </button>
            <button
              onClick={() => handleNav('brand-design')}
              className={`text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                currentPage === 'brand-design' ? 'bg-[#E5ECF5] text-[#10213D]' : 'text-[#3F5068] hover:bg-white'
              }`}
            >
              <span>Logo & Brand Design</span>
              <span className="text-xs text-[#0040FF]">Service</span>
            </button>
            <button
              onClick={() => handleNav('web-development')}
              className={`text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                currentPage === 'web-development' ? 'bg-[#E5ECF5] text-[#10213D]' : 'text-[#3F5068] hover:bg-white'
              }`}
            >
              <span>Web Design & Development</span>
              <span className="text-xs text-[#0040FF]">Service</span>
            </button>
            <button
              onClick={() => handleNav('blog')}
              className={`text-left px-3 py-2 rounded-lg ${
                currentPage === 'blog' || currentPage === 'blog-post'
                  ? 'bg-[#E5ECF5] text-[#10213D]'
                  : 'text-[#3F5068] hover:bg-white'
              }`}
            >
              Insights & Journal
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`text-left px-3 py-2 rounded-lg ${
                currentPage === 'contact' ? 'bg-[#E5ECF5] text-[#10213D]' : 'text-[#3F5068] hover:bg-white'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => handleNav('terms')}
              className="text-left px-3 py-2 text-xs text-[#586B84] hover:text-[#10213D]"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => handleNav('privacy')}
              className="text-left px-3 py-2 text-xs text-[#586B84] hover:text-[#10213D]"
            >
              Privacy Policy
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-2.5 text-xs font-semibold text-[#28384F] border border-neutral-700 rounded-lg hover:bg-white transition-colors"
            >
              Interactive Scope Estimator
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="w-full py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#0040FF] hover:bg-[#3B70FF] rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
