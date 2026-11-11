import React, { useState } from 'react';
import { PageId } from '../types';
import appDesignImage from '../assets/images/service_app_design_1793029451890.jpg';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Smartphone,
  Tablet,
  Layout,
  Layers,
  Sparkles,
  Sliders,
  Activity,
  CreditCard,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

interface AppDesignPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
}

export const AppDesignPage: React.FC<AppDesignPageProps> = ({
  onNavigate,
  onOpenEstimator,
}) => {
  // State for interactive app prototype preview
  const [activeAppTab, setActiveAppTab] = useState<'fintech' | 'health' | 'tasks'>('fintech');
  const [fintechBalance, setFintechBalance] = useState(14580.75);
  const [healthLogged, setHealthLogged] = useState(false);

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
              App Design for iOS, Android & Scalable Web Platforms.
            </h1>

            <p className="text-base sm:text-lg text-[#3F5068] leading-relaxed max-w-2xl">
              We design native mobile and SaaS applications engineered for high retention, effortless usability, and seamless developer handoff. Built on strict design tokens and platform physics.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-[#10213D] font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Start Your App Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 bg-white hover:bg-[#E5ECF5] text-[#28384F] border border-neutral-700 font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Estimate App Timeline</span>
                <ArrowUpRight className="w-4 h-4 text-[#586B84]" />
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#586B84]">
              <span>Apple HIG Compliant</span>
              <span aria-hidden="true">·</span>
              <span>Material Design 3 Certified</span>
              <span aria-hidden="true">·</span>
              <span>SwiftUI & Compose Ready</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-white group">
              <img
                src={appDesignImage}
                alt="Native mobile and tablet app UI design showcase"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#F1F5FA]/80 backdrop-blur-md border border-neutral-800 text-xs">
                <div className="font-semibold text-[#10213D]">Multi-Device Synchronized Design</div>
                <p className="text-[#586B84] mt-0.5">
                  Seamless optical scaling across smartphones, foldables, tablets, and web monitors.
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
            Platform Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#10213D] tracking-tight">
            An app that feels right at home on every screen.
          </h2>
          <p className="text-sm text-[#586B84]">
            We respect the native mental models of each operating system. An iOS user expects fluid gestures and dynamic islands; an Android user expects edge-to-edge Material surfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sub-Service 1: Android App Design */}
          <div className="bg-white/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#10213D]">Android App Design</h3>
                <span className="text-xs text-emerald-400 font-mono block mt-1">
                  Material Design 3 & Jetpack Compose
                </span>
              </div>
              <p className="text-sm text-[#3F5068] leading-relaxed">
                Native Android experiences crafted for fragmented screen sizes, foldables, and tablets. We leverage Material You dynamic color harmonizing, predictive back animations, and edge-to-edge window insets.
              </p>
              <ul className="space-y-2 text-xs text-[#586B84] pt-2 border-t border-neutral-800/80">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Adaptive layouts for foldables & large tablets</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Predictive back gesture choreography</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Material 3 state layers & elevation system</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct Jetpack Compose token export</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <span className="text-[11px] text-[#586B84] block uppercase font-mono">
                Key Standard:
              </span>
              <span className="text-xs text-[#3F5068] font-medium">
                Google Play Store 100% Core Quality Checklist
              </span>
            </div>
          </div>

          {/* Sub-Service 2: iOS App Design */}
          <div className="bg-white/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Tablet className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#10213D]">iOS App Design</h3>
                <span className="text-xs text-sky-400 font-mono block mt-1">
                  Apple HIG & SwiftUI Native Tokens
                </span>
              </div>
              <p className="text-sm text-[#3F5068] leading-relaxed">
                Refined iPhone, iPad, and Apple Watch interfaces with fluid spring physics, Dynamic Island live activities, and contextual haptic feedback that feels native to Apple hardware.
              </p>
              <ul className="space-y-2 text-xs text-[#586B84] pt-2 border-t border-neutral-800/80">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Fluid spring physics & 120Hz ProMotion curves</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Dynamic Island & Live Activity lock screen specs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>SF Symbols typography and optical kerning</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>SwiftUI-ready color asset catalog handoff</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <span className="text-[11px] text-[#586B84] block uppercase font-mono">
                Key Standard:
              </span>
              <span className="text-xs text-[#3F5068] font-medium">
                App Store Editorial Showcase & Apple Design Award Ready
              </span>
            </div>
          </div>

          {/* Sub-Service 3: Web App Design */}
          <div className="bg-white/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#10213D]">Web App & SaaS Design</h3>
                <span className="text-xs text-amber-400 font-mono block mt-1">
                  Dense Data Views & Productivity Engines
                </span>
              </div>
              <p className="text-sm text-[#3F5068] leading-relaxed">
                Complex enterprise and B2B SaaS web applications that turn dense data tables, analytical charts, and multi-tenant workflows into frictionless, power-user interfaces.
              </p>
              <ul className="space-y-2 text-xs text-[#586B84] pt-2 border-t border-neutral-800/80">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Command Bar (Cmd+K) navigation pattern</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>High-density tabular grids with sorting & frozen cols</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Multi-tenant permissions & team role matrix</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Zero-delay keyboard shortcuts & micro-states</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <span className="text-[11px] text-[#586B84] block uppercase font-mono">
                Key Standard:
              </span>
              <span className="text-xs text-[#3F5068] font-medium">
                WCAG AAA High Contrast & Keyboard Traversal Compliant
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE APP PROTOTYPE SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/60 border border-neutral-800 rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="max-w-2xl space-y-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Interactive Design System Lab
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#10213D] tracking-tight">
              Test drive our native mobile micro-interactions.
            </h2>
            <p className="text-xs sm:text-sm text-[#586B84]">
              Toggle between three distinct domain archetypes to explore layout ergonomics, tactile feedback loops, and token-based state choreography.
            </p>
          </div>

          {/* Archetype switcher tabs */}
          <div className="flex items-center gap-2 mb-8 p-1.5 bg-[#F1F5FA] border border-neutral-800 rounded-xl max-w-md">
            <button
              onClick={() => setActiveAppTab('fintech')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                activeAppTab === 'fintech'
                  ? 'bg-amber-400 text-[#10213D] shadow'
                  : 'text-[#586B84] hover:text-[#10213D]'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Fintech Wallet</span>
            </button>
            <button
              onClick={() => setActiveAppTab('health')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                activeAppTab === 'health'
                  ? 'bg-amber-400 text-[#10213D] shadow'
                  : 'text-[#586B84] hover:text-[#10213D]'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Clinical Health</span>
            </button>
            <button
              onClick={() => setActiveAppTab('tasks')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                activeAppTab === 'tasks'
                  ? 'bg-amber-400 text-[#10213D] shadow'
                  : 'text-[#586B84] hover:text-[#10213D]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SaaS Velocity</span>
            </button>
          </div>

          {/* Interactive Simulation Frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Phone Simulator viewport */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="brand-demo-dark w-full max-w-[320px] bg-black border-4 border-neutral-800 rounded-[38px] p-4 shadow-2xl relative overflow-hidden">
                {/* Dynamic island / speaker bar */}
                <div className="w-24 h-4 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#E5ECF5]"></div>
                </div>

                {activeAppTab === 'fintech' && (
                  <div className="space-y-4 text-[#10213D]">
                    <div className="flex items-center justify-between text-xs text-[#586B84]">
                      <span>Aura Vault</span>
                      <span className="font-mono text-emerald-400">+4.2% Today</span>
                    </div>

                    <div className="p-4 bg-white border border-neutral-800 rounded-2xl">
                      <span className="text-[11px] text-[#586B84] block">Available Liquidity</span>
                      <div className="text-2xl font-bold font-mono tracking-tight mt-0.5">
                        ${fintechBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => setFintechBalance((prev) => prev + 500)}
                          className="flex-1 py-1.5 bg-amber-400 hover:bg-amber-300 text-[#10213D] font-bold text-[11px] rounded-lg transition-colors"
                        >
                          + Deposit $500
                        </button>
                        <button
                          onClick={() => setFintechBalance((prev) => Math.max(0, prev - 250))}
                          className="flex-1 py-1.5 bg-[#E5ECF5] hover:bg-[#D7E0EB] text-[#28384F] font-medium text-[11px] rounded-lg transition-colors"
                        >
                          Send $250
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] text-[#586B84] block uppercase font-mono">
                        Recent Settlements
                      </span>
                      <div className="p-2.5 bg-white/60 border border-neutral-800/80 rounded-xl flex items-center justify-between text-xs">
                        <div>
                          <div className="font-medium text-[#10213D]">Atelier Kroma</div>
                          <div className="text-[10px] text-[#586B84]">Design Retainer</div>
                        </div>
                        <span className="font-mono text-[#28384F]">-$3,500.00</span>
                      </div>
                      <div className="p-2.5 bg-white/60 border border-neutral-800/80 rounded-xl flex items-center justify-between text-xs">
                        <div>
                          <div className="font-medium text-[#10213D]">Novaflow AI</div>
                          <div className="text-[10px] text-[#586B84]">Milestone 2</div>
                        </div>
                        <span className="font-mono text-emerald-400">+$12,000.00</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeAppTab === 'health' && (
                  <div className="space-y-4 text-[#10213D]">
                    <div className="flex items-center justify-between text-xs text-[#586B84]">
                      <span>Novaflow Telemetry</span>
                      <span className="text-amber-400 font-mono">Sync: 12ms</span>
                    </div>

                    <div className="p-4 bg-white border border-neutral-800 rounded-2xl">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#586B84]">Resting Heart Rate</span>
                        <Activity className="w-4 h-4 text-rose-400 animate-pulse" />
                      </div>
                      <div className="text-2xl font-bold font-mono tracking-tight mt-0.5">
                        58 <span className="text-xs font-normal text-[#586B84] font-sans">BPM</span>
                      </div>
                      <div className="w-full bg-[#E5ECF5] h-1.5 rounded-full mt-3 overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[82%]"></div>
                      </div>
                    </div>

                    <div className="p-3 bg-white/60 border border-neutral-800 rounded-xl text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Daily Vitals Check-in</span>
                        <span className="text-[10px] text-[#586B84]">Today</span>
                      </div>
                      <button
                        onClick={() => setHealthLogged(!healthLogged)}
                        className={`w-full py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                          healthLogged
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-amber-400 text-[#10213D] hover:bg-amber-300'
                        }`}
                      >
                        {healthLogged ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Vitals Transmitted</span>
                          </>
                        ) : (
                          <span>Submit Morning Vitals</span>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {activeAppTab === 'tasks' && (
                  <div className="space-y-4 text-[#10213D]">
                    <div className="flex items-center justify-between text-xs text-[#586B84]">
                      <span>Sprint Velocity</span>
                      <span className="font-mono text-amber-400">Week 3</span>
                    </div>

                    <div className="p-4 bg-white border border-neutral-800 rounded-2xl">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#586B84]">Sprint Progress</span>
                        <TrendingUp className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="text-2xl font-bold font-mono tracking-tight mt-0.5">
                        24 / 28 <span className="text-xs font-normal text-[#586B84] font-sans">Stories</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 bg-white/60 border border-neutral-800/80 rounded-xl flex items-center justify-between">
                        <span className="text-[#3F5068]">Design token export pipeline</span>
                        <span className="text-emerald-400 font-mono text-[11px]">Merged</span>
                      </div>
                      <div className="p-2.5 bg-white/60 border border-neutral-800/80 rounded-xl flex items-center justify-between">
                        <span className="text-[#3F5068]">Dynamic Island live activity</span>
                        <span className="text-amber-400 font-mono text-[11px]">In Review</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Home indicator bar */}
                <div className="w-28 h-1 bg-neutral-700 rounded-full mx-auto mt-6"></div>
              </div>
            </div>

            {/* Spec breakdown on the right */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                Design System Deliverables
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#10213D]">
                Every app deliverable includes production-grade token packages.
              </h3>
              <p className="text-sm text-[#3F5068] leading-relaxed">
                Your engineering team gets a shared design system with version control, not a pile of disconnected screens.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <span className="text-xs font-semibold text-[#10213D]">Figma Token Variables</span>
                  <p className="text-xs text-[#586B84]">
                    Primitive and semantic color modes, typography rem scales, and nested radii.
                  </p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <span className="text-xs font-semibold text-[#10213D]">Native Code Snippets</span>
                  <p className="text-xs text-[#586B84]">
                    SwiftUI Views and Jetpack Compose composables pre-matched to component states.
                  </p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <span className="text-xs font-semibold text-[#10213D]">Micro-Interactions</span>
                  <p className="text-xs text-[#586B84]">
                    Exact cubic-bezier timing curves and haptic sensory triggers documented.
                  </p>
                </div>
                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-1">
                  <span className="text-xs font-semibold text-[#10213D]">Accessibility Audit</span>
                  <p className="text-xs text-[#586B84]">
                    WCAG AA contrast validation, VoiceOver labels, and minimum 44px touch targets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/40 border border-neutral-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Featured App Engagement
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#10213D] tracking-tight">
              Novaflow Health: 184% Retention Surge in 6 Months
            </h3>
            <p className="text-sm text-[#3F5068] leading-relaxed">
              By replacing a cluttered multi-step clinical form with a single-screen morning routine and tactile haptic affirmations, daily patient adherence climbed to 94.2%.
            </p>
            <div className="flex items-center gap-6 text-xs text-[#586B84] pt-2">
              <div>
                <span className="text-lg font-bold text-[#10213D] font-mono block">+184%</span>
                <span>Active Retention</span>
              </div>
              <div className="h-8 w-px bg-[#E5ECF5]"></div>
              <div>
                <span className="text-lg font-bold text-[#10213D] font-mono block">94.2%</span>
                <span>Daily Log Compliance</span>
              </div>
              <div className="h-8 w-px bg-[#E5ECF5]"></div>
              <div>
                <span className="text-lg font-bold text-[#10213D] font-mono block">&lt; 100ms</span>
                <span>Interaction Settling</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-[#10213D] font-semibold text-xs rounded-xl transition-colors flex items-center gap-2"
            >
              <span>Build an App Like Novaflow</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/60 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#10213D] tracking-tight">
            Ready to design an app your users will love?
          </h2>
          <p className="text-sm text-[#3F5068]">
            From initial wireframe flows to production token pipelines, our senior team is ready to accelerate your product timeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#10213D] font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Schedule Initial App Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenEstimator}
              className="px-6 py-3 bg-[#E5ECF5] hover:bg-[#D7E0EB] text-[#28384F] text-xs font-semibold rounded-xl transition-colors"
            >
              Estimate App Budget
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
