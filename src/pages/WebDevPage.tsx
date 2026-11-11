import React, { useState } from 'react';
import { PageId } from '../types';
import webDevelopmentImage from '../assets/images/service_web_development_1793029454353.jpg';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ShoppingCart,
  TrendingUp,
  Zap,
  Globe,
  Database,
  Gauge,
  Lock,
} from 'lucide-react';

interface WebDevPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
}

export const WebDevPage: React.FC<WebDevPageProps> = ({
  onNavigate,
  onOpenEstimator,
}) => {
  const [selectedStackTier, setSelectedStackTier] = useState<'frontend' | 'commerce' | 'infra'>('frontend');

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span className="w-2 h-2 rounded-xs bg-amber-400 rotate-45 inline-block"></span>
              <span>Service Specialization</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213D] text-balance leading-[1.08]">
              Custom Web Engineering, Headless Commerce & Store Management.
            </h1>

            <p className="text-base sm:text-lg text-[#3F5068] leading-relaxed max-w-2xl">
              We design and engineer bespoke web platforms and e-commerce flagships that load under 500 milliseconds, convert high-value buyers, and scale effortlessly on modern edge infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-[#10213D] font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Initiate Web Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 bg-white hover:bg-[#E5ECF5] text-[#28384F] border border-neutral-700 font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Calculate Web Scope</span>
                <ArrowUpRight className="w-4 h-4 text-[#586B84]" />
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#586B84]">
              <span>99+ Core Web Vitals Guarantee</span>
              <span aria-hidden="true">·</span>
              <span>Headless Shopify Plus & Next.js</span>
              <span aria-hidden="true">·</span>
              <span>Continuous Growth & Maintenance</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-white group">
              <img
                src={webDevelopmentImage}
                alt="Ultra-slim monitor showing high performance web dashboard"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#F1F5FA]/80 backdrop-blur-md border border-neutral-800 text-xs">
                <div className="font-semibold text-[#10213D]">Sub-Second Global Edge Delivery</div>
                <p className="text-[#586B84] mt-0.5">
                  Static pre-rendering with real-time inventory hydration and sub-100ms time to first byte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE CORE SUB-SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Web & Commerce Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#10213D] tracking-tight">
            Engineered for speed, conversion, and longevity.
          </h2>
          <p className="text-sm text-[#586B84]">
            Slow, fragile websites lose customers. We build modern web applications with reliable TypeScript, headless e-commerce backends, and proactive store operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sub-Service 1: Custom Website Design and Development */}
          <div className="bg-white/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#10213D]">Custom Web Engineering</h3>
                <span className="text-xs text-sky-400 font-mono block mt-1">
                  React, Next.js & Edge Rendering
                </span>
              </div>
              <p className="text-sm text-[#3F5068] leading-relaxed">
                Websites designed and built from scratch, without unnecessary plugins. We write clean React and TypeScript, add considered interactions, and make the content easy to find.
              </p>
              <ul className="space-y-2 text-xs text-[#586B84] pt-2 border-t border-neutral-800/80">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Sub-second page load times on edge CDNs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Full semantic HTML5 & Schema.org JSON-LD structured data</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Zero-pill aesthetic layout & WCAG AA contrast compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Headless CMS integration (Sanity, Strapi, Contentful)</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <span className="text-[11px] text-[#586B84] block uppercase font-mono">
                Performance Target:
              </span>
              <span className="text-xs text-[#3F5068] font-medium font-mono">
                Lighthouse 98+ / TTFB &lt; 80ms
              </span>
            </div>
          </div>

          {/* Sub-Service 2: E-Commerce Development */}
          <div className="bg-white/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#10213D]">E-Commerce Development</h3>
                <span className="text-xs text-amber-400 font-mono block mt-1">
                  Shopify Plus & Headless Storefronts
                </span>
              </div>
              <p className="text-sm text-[#3F5068] leading-relaxed">
                Flagship shopping destinations tailored for high-volume luxury and direct-to-consumer brands. Optimized checkout flows, optimistic add-to-cart drawers, and 3D product viewports that maximize GMV.
              </p>
              <ul className="space-y-2 text-xs text-[#586B84] pt-2 border-t border-neutral-800/80">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Headless Shopify Plus Storefront API & Next.js Commerce</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Custom checkout extensions & one-click Apple Pay flows</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Multi-currency & localized international pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Interactive product visualizers & variant matrix</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <span className="text-[11px] text-[#586B84] block uppercase font-mono">
                Commercial Target:
              </span>
              <span className="text-xs text-[#3F5068] font-medium">
                Proven +35% to +65% Mobile Checkout Conversion
              </span>
            </div>
          </div>

          {/* Sub-Service 3: Online Store Management */}
          <div className="bg-white/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#10213D]">Online Store Management</h3>
                <span className="text-xs text-emerald-400 font-mono block mt-1">
                  Continuous Operations & CRO Sprints
                </span>
              </div>
              <p className="text-sm text-[#3F5068] leading-relaxed">
                We act as your dedicated digital CTO and store operations arm. We handle continuous catalog updates, inventory automation, A/B testing, security audits, and seasonal promotional rollouts with a dedicated SLA.
              </p>
              <ul className="space-y-2 text-xs text-[#586B84] pt-2 border-t border-neutral-800/80">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>24/7 uptime monitoring & rapid security patching</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Monthly Conversion Rate Optimization (A/B testing)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>ERP, warehouse, and CRM inventory sync pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Core Web Vitals regression audits upon every update</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <span className="text-[11px] text-[#586B84] block uppercase font-mono">
                Support SLA:
              </span>
              <span className="text-xs text-[#3F5068] font-medium">
                Guaranteed 4-hour critical incident response
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE BENCHMARKS & WHY SPEED MATTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/60 border border-neutral-800 rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="max-w-2xl space-y-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Performance, measured in the real world
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#10213D] tracking-tight">
              A headless stack vs. traditional CMS
            </h2>
            <p className="text-xs sm:text-sm text-[#586B84]">
              Real metrics based on Google Lighthouse audits and synthetic 4G mobile benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* How we work */}
            <div className="bg-[#F1F5FA] border border-amber-400/30 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase font-semibold">
                    Web performance
                  </span>
                  <h3 className="text-lg font-bold text-[#10213D] mt-0.5">
                    Next.js + Headless Commerce
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center font-mono font-bold text-emerald-400 text-lg">
                  99
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-[#586B84]">First Contentful Paint (FCP):</span>
                  <span className="font-mono text-emerald-400 font-bold">0.3s (Instant)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-[#586B84]">Largest Contentful Paint (LCP):</span>
                  <span className="font-mono text-emerald-400 font-bold">0.6s (Optimal)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-[#586B84]">Cumulative Layout Shift (CLS):</span>
                  <span className="font-mono text-emerald-400 font-bold">0.00 (Zero layout jump)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-[#586B84]">Total Blocking Time (TBT):</span>
                  <span className="font-mono text-emerald-400 font-bold">0ms (Zero thread lock)</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg text-xs text-[#3F5068]">
                <strong>Result:</strong> Search engine organic rankings climb, mobile bounce rates drop by 42%, and conversion rates jump significantly.
              </div>
            </div>

            {/* The Legacy Way */}
            <div className="bg-[#F1F5FA]/60 border border-neutral-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#586B84] uppercase font-semibold">
                    Traditional Agency Monolith
                  </span>
                  <h3 className="text-lg font-bold text-[#586B84] mt-0.5">
                    Generic CMS + 30 Plugins
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-rose-500/80 flex items-center justify-center font-mono font-bold text-rose-400 text-lg">
                  48
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-[#586B84]">First Contentful Paint (FCP):</span>
                  <span className="font-mono text-rose-400 font-bold">2.4s (High latency)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-[#586B84]">Largest Contentful Paint (LCP):</span>
                  <span className="font-mono text-rose-400 font-bold">4.2s (User bounces)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-[#586B84]">Cumulative Layout Shift (CLS):</span>
                  <span className="font-mono text-rose-400 font-bold">0.24 (Jarring jump)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-[#586B84]">Total Blocking Time (TBT):</span>
                  <span className="font-mono text-rose-400 font-bold">920ms (Frozen scroll)</span>
                </div>
              </div>

              <div className="p-3 bg-white/60 rounded-lg text-xs text-[#586B84]">
                <strong>Consequence:</strong> High ad spend is squandered as mobile shoppers abandon the page before it finishes rendering.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGY MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/30 border border-neutral-800 rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                The tools behind the work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#10213D] tracking-tight">
                Tools chosen for reliability and precision.
              </h2>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-[#F1F5FA] border border-neutral-800 rounded-xl">
              {(['frontend', 'commerce', 'infra'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedStackTier(tier)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize transition-colors ${
                    selectedStackTier === tier
                      ? 'bg-amber-400 text-[#10213D] font-semibold'
                      : 'text-[#586B84] hover:text-[#10213D]'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {selectedStackTier === 'frontend' && (
              <>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">React 19 & Next.js</div>
                  <p className="text-[#586B84]">Server components, streaming SSR, and zero-bundle hydration.</p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">TypeScript Strict</div>
                  <p className="text-[#586B84]">100% end-to-end typed props, APIs, and state containers.</p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">Tailwind CSS v4</div>
                  <p className="text-[#586B84]">Lightning fast compilation, zero unused styles, responsive tokens.</p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">Motion design</div>
                  <p className="text-[#586B84]">Compositor-only GPU animations with reduced-motion respect.</p>
                </div>
              </>
            )}

            {selectedStackTier === 'commerce' && (
              <>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">Shopify Plus Storefront API</div>
                  <p className="text-[#586B84]">Headless cart, checkout extensibility, and catalog sync.</p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">Stripe Custom Payments</div>
                  <p className="text-[#586B84]">Payment Element, multi-currency routing, fraud protection.</p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">Sanity Headless CMS</div>
                  <p className="text-[#586B84]">Real-time structured content modeling for editorial teams.</p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">Algolia Instant Search</div>
                  <p className="text-[#586B84]">Sub-10ms typo-tolerant search and merchandising rules.</p>
                </div>
              </>
            )}

            {selectedStackTier === 'infra' && (
              <>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">Vercel & Cloudflare Edge</div>
                  <p className="text-[#586B84]">Global edge network with automated CI/CD preview branches.</p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">Automated Lighthouse CI</div>
                  <p className="text-[#586B84]">Performance regressions blocked automatically in pull requests.</p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">Datadog & Sentry Telemetry</div>
                  <p className="text-[#586B84]">Real-time error tracking and Core Web Vitals field reporting.</p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <div className="font-semibold text-[#10213D]">Automated Daily Backups</div>
                  <p className="text-[#586B84]">Point-in-time disaster recovery and staging environment clones.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/60 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#10213D] tracking-tight">
            Ready to upgrade your web engineering?
          </h2>
          <p className="text-sm text-[#3F5068]">
            Let's build a flagship website or e-commerce storefront that runs circles around your competition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#10213D] font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Schedule Engineering Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenEstimator}
              className="px-6 py-3 bg-[#E5ECF5] hover:bg-[#D7E0EB] text-[#28384F] text-xs font-semibold rounded-xl transition-colors"
            >
              Estimate Web Development
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
