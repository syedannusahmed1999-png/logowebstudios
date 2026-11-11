import React, { useState } from 'react';
import { PageId } from '../types';
import brandIdentityImage from '../assets/images/service_brand_identity_1793029453265.jpg';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Box,
  Palette,
  Monitor,
  Eye,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';

interface BrandDesignPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
}

export const BrandDesignPage: React.FC<BrandDesignPageProps> = ({
  onNavigate,
  onOpenEstimator,
}) => {
  // Interactive Brand Theme Preview
  const [activePalette, setActivePalette] = useState<'obsidian' | 'nordic' | 'cobalt'>('obsidian');

  const paletteData = {
    obsidian: {
      name: 'Obsidian & Marigold Gold',
      bgClass: 'bg-[#F1F5FA]',
      borderClass: 'border-amber-400/40',
      accentClass: 'text-amber-400',
      buttonBg: 'bg-amber-400 text-[#10213D]',
      description: 'Engineered for luxury technology, high-end private equity, and sovereign infrastructure.',
      colors: ['#0A0A0A', '#1C1917', '#F59E0B', '#FDF8F0'],
    },
    nordic: {
      name: 'Nordic Paper & Stone',
      bgClass: 'bg-stone-900',
      borderClass: 'border-stone-400/30',
      accentClass: 'text-stone-300',
      buttonBg: 'bg-stone-200 text-stone-950',
      description: 'Refined warmth for sustainable architecture, artisanal goods, and editorial houses.',
      colors: ['#1C1917', '#292524', '#D6D3D1', '#F5F5F4'],
    },
    cobalt: {
      name: 'Electric Cobalt Deep-Tech',
      bgClass: 'bg-slate-950',
      borderClass: 'border-blue-500/40',
      accentClass: 'text-blue-400',
      buttonBg: 'bg-blue-500 text-[#10213D]',
      description: 'Authoritative precision for AI infrastructure, biotechnology, and autonomous systems.',
      colors: ['#020617', '#0F172A', '#38BDF8', '#F8FAFC'],
    },
  };

  const currentTheme = paletteData[activePalette];

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
              Logo & Brand Identity Designed for Permanence.
            </h1>

            <p className="text-base sm:text-lg text-[#3F5068] leading-relaxed max-w-2xl">
              We design timeless vector logos, spatial 3D kinetic marks, comprehensive brand design systems, and high-converting landing pages that instill trust and command premium value.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-[#10213D] font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Initiate Brand Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 bg-white hover:bg-[#E5ECF5] text-[#28384F] border border-neutral-700 font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Estimate Brand Kit Budget</span>
                <ArrowUpRight className="w-4 h-4 text-[#586B84]" />
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#586B84]">
              <span>Full Vector Master Suites (SVG, EPS, AI)</span>
              <span aria-hidden="true">·</span>
              <span>3D Spatial & Motion Stingers</span>
              <span aria-hidden="true">·</span>
              <span>Comprehensive Brand Guidelines</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-white group">
              <img
                src={brandIdentityImage}
                alt="Tactile brand identity stationery and gold embossed brand book"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#F1F5FA]/80 backdrop-blur-md border border-neutral-800 text-xs">
                <div className="font-semibold text-[#10213D]">Tactile & Digital Cohesion</div>
                <p className="text-[#586B84] mt-0.5">
                  Consistent elegance across physical stationery, debossed print, and digital responsive interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUR PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Four Brand Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#10213D] tracking-tight">
            From foundational geometry to spatial motion.
          </h2>
          <p className="text-sm text-[#586B84]">
            Every great brand is built on uncompromising geometric principles and deliberate typography. We craft complete visual ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Custom Logo Design */}
          <div className="bg-white/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#10213D]">01. Custom Logo Design</h3>
              <span className="text-xs text-amber-400 font-mono block mt-1">
                Vector Geometry & Optical Kerning
              </span>
            </div>
            <p className="text-sm text-[#3F5068] leading-relaxed">
              We draw distinctive marks that stay clear from a tiny app icon to a building sign.
            </p>
            <ul className="space-y-2 text-xs text-[#586B84] pt-2 border-t border-neutral-800/80">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Responsive lockup suite: Primary, Horizontal, Monogram, Favicon</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Optical kerning balancing for dark & light canvas inversions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Monochrome silhouette test for guaranteed legibility</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: 3D Logo Design & Motion */}
          <div className="bg-white/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Box className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#10213D]">02. 3D Logo Design & Motion</h3>
              <span className="text-xs text-amber-400 font-mono block mt-1">
                Spatial Depth & Kinetic Stingers
              </span>
            </div>
            <p className="text-sm text-[#3F5068] leading-relaxed">
              Extend your mark into three dimensions. We model volumetric 3D assets with bespoke metallic, glass, and brushed textures, paired with kinetic logo stingers for video intro sequences and interactive 3D web scenes.
            </p>
            <ul className="space-y-2 text-xs text-[#586B84] pt-2 border-t border-neutral-800/80">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Digital previews that show the identity in context</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>60fps kinetic motion animation stingers (MP4, ProRes, Lottie JSON)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Lightweight GLTF / Spline assets for interactive web integration</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Brand Identity Design */}
          <div className="bg-white/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#10213D]">03. Brand Identity Systems</h3>
              <span className="text-xs text-amber-400 font-mono block mt-1">
                Comprehensive Guidelines & Design Tokens
              </span>
            </div>
            <p className="text-sm text-[#3F5068] leading-relaxed">
              An authoritative brand guidelines manual specifying typography pairing hierarchies, 60-30-10 color allocations with WCAG AA compliance, photography art direction, stationery specs, and social media kits.
            </p>
            <ul className="space-y-2 text-xs text-[#586B84] pt-2 border-t border-neutral-800/80">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>60+ page interactive digital & PDF Brand Style Bible</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Digital color tokens (HEX, RGB, CMYK, Pantone PMS matches)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Stationery templates (letterheads, cards, packaging foils)</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4: Landing Page Design */}
          <div className="bg-white/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#10213D]">04. Landing Page Design</h3>
              <span className="text-xs text-amber-400 font-mono block mt-1">
                Visual Storytelling & Conversion Funnels
              </span>
            </div>
            <p className="text-sm text-[#3F5068] leading-relaxed">
              Landing pages engineered to convert high-value visitors. We marry compelling editorial storytelling with zero-latency visual polish, claim-to-proof adjacency, and optimized lead capture mechanisms.
            </p>
            <ul className="space-y-2 text-xs text-[#586B84] pt-2 border-t border-neutral-800/80">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Paced visual narrative sequence: Proposition → Proof → Action</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>A compact mobile header that leaves room for the work</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>High-converting validated lead capture forms with instant SLAs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE BRAND PALETTE TESTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/60 border border-neutral-800 rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Interactive Palette Explorer
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#10213D] tracking-tight">
                Preview our curated brand design systems.
              </h2>
              <p className="text-xs sm:text-sm text-[#586B84]">
                Switch aesthetics below to see how color tokens, contrast ratios, and typography dynamically align.
              </p>
            </div>

            {/* Selector buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#F1F5FA] border border-neutral-800 rounded-xl">
              {(['obsidian', 'nordic', 'cobalt'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setActivePalette(mode)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize transition-colors ${
                    activePalette === mode
                      ? 'bg-amber-400 text-[#10213D] font-semibold'
                      : 'text-[#586B84] hover:text-[#10213D]'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Live Preview Container */}
          <div
            className={`rounded-2xl border ${currentTheme.borderClass} ${currentTheme.bgClass} p-6 sm:p-8 transition-all duration-500`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${currentTheme.accentClass}`}>
                  {currentTheme.name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#10213D] tracking-tight">
                  Clear ideas. Distinctive type. A brand that feels like you.
                </h3>
                <p className="text-xs sm:text-sm text-[#3F5068] leading-relaxed">
                  {currentTheme.description}
                </p>

                <div className="flex items-center gap-2 pt-2">
                  {currentTheme.colors.map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div
                        className="w-6 h-6 rounded-md border border-white/20 shadow-sm"
                        style={{ backgroundColor: c }}
                      ></div>
                      <span className="text-[11px] font-mono text-[#586B84]">{c}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onNavigate('contact')}
                    className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-transform active:scale-95 ${currentTheme.buttonBg}`}
                  >
                    Request Custom Palette Brief
                  </button>
                </div>
              </div>

              {/* Sample Card Mockup */}
              <div className="brand-demo-dark lg:col-span-5 bg-black/70 border border-slate-900/10 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#586B84]">
                  <span className="font-semibold text-[#10213D]">Logo Web Studio Identity</span>
                  <span className="font-mono text-[11px]">WCAG AAA 7.2:1</span>
                </div>
                <div className="h-24 rounded-lg bg-white/5 border border-slate-900/10 flex items-center justify-center">
                  <span className={`text-lg font-bold tracking-tight ${currentTheme.accentClass}`}>
                    AURA STUDIO MARK
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#586B84]">
                  <span>Display: Plus Jakarta Sans</span>
                  <span>Prose: DM Sans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRAND DELIVERABLES CHECKLIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/30 border border-neutral-800 rounded-3xl p-8 sm:p-12">
          <div className="max-w-xl space-y-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              The Brand Suite
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#10213D] tracking-tight">
              Complete brand asset kit delivered upon settlement.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-[#3F5068]">
            <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-2">
              <span className="font-semibold text-[#10213D] block">Vector Master Files</span>
              <p className="text-[#586B84]">
                Lossless SVG, AI, EPS, and PDF files. Every curve mathematically optimized for ultra-sharp reproduction.
              </p>
            </div>
            <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-2">
              <span className="font-semibold text-[#10213D] block">3D Models & Shaders</span>
              <p className="text-[#586B84]">
                Volumetric Blender files, glTF web runtime meshes, 4K texture maps, and pre-rendered motion bumpers.
              </p>
            </div>
            <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-2">
              <span className="font-semibold text-[#10213D] block">Comprehensive Brand Manual</span>
              <p className="text-[#586B84]">
                Detailed clear space rules, prohibited manipulations, minimum sizing, and print vs digital conversion charts.
              </p>
            </div>
            <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-2">
              <span className="font-semibold text-[#10213D] block">Typography & Font Licenses</span>
              <p className="text-[#586B84]">
                Curated font pairings with open-source commercial or licensed webfont packages pre-configured.
              </p>
            </div>
            <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-2">
              <span className="font-semibold text-[#10213D] block">Social & Marketing Kit</span>
              <p className="text-[#586B84]">
                High-res avatars, Twitter/LinkedIn banners, OpenGraph share cards, and email signature components.
              </p>
            </div>
            <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-2">
              <span className="font-semibold text-[#10213D] block">Physical Stationery Specs</span>
              <p className="text-[#586B84]">
                Paper stock recommendations, foil-stamp dies, embossed business card layouts, and envelope dies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/60 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#10213D] tracking-tight">
            Ready to give your venture an unmistakable brand identity?
          </h2>
          <p className="text-sm text-[#3F5068]">
            Let's create an identity that inspires confidence and stands the test of time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#10213D] font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Schedule Brand Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenEstimator}
              className="px-6 py-3 bg-[#E5ECF5] hover:bg-[#D7E0EB] text-[#28384F] text-xs font-semibold rounded-xl transition-colors"
            >
              Estimate Brand Scope
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
