import React, { useState } from 'react';
import { PageId } from '../types';
import {
  AGENCY_PROCESS,
  AGENCY_SERVICES,
  FAQ_LIST,
  FEATURED_PROJECTS,
  STUDIO_METRICS,
  TESTIMONIALS,
} from '../data/agencyData';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
}

const serviceTitles = [
  'Custom Web Engineering',
  'iOS & Android Apps',
  'Brand Systems & Identity',
];

const serviceBadges = ['Built for the long run', 'Made for everyday use', 'A brand with a point of view'];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEstimator }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeProjectTab, setActiveProjectTab] = useState<
    'All' | 'App Design' | 'Web Development' | 'Brand Identity'
  >('All');

  const filteredProjects =
    activeProjectTab === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((project) => project.category === activeProjectTab);

  const serviceOrder = [
    AGENCY_SERVICES.find((service) => service.id === 'web-development'),
    AGENCY_SERVICES.find((service) => service.id === 'app-design'),
    AGENCY_SERVICES.find((service) => service.id === 'brand-design'),
  ].filter((service): service is (typeof AGENCY_SERVICES)[number] => Boolean(service));

  return (
    <div className="space-y-24 pb-24 sm:space-y-32">
      <section className="relative overflow-hidden pb-4 pt-14 sm:pt-20 lg:pt-24">
        <div className="pointer-events-none absolute -right-40 top-8 h-[34rem] w-[34rem] rounded-full bg-[#0040FF]/[0.035] blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="space-y-7 lg:col-span-7 lg:space-y-8">
            <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-[#586B84]">
              <span className="h-px w-8 bg-[#0040FF]" />
              Independent digital studio · San Francisco & everywhere
            </div>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#10213D] sm:text-6xl lg:text-[5.1rem]">
              We build digital products that people actually love using.
            </h1>
            <p className="max-w-xl text-base leading-7 text-[#3F5068] sm:text-lg sm:leading-8">
              From initial napkin sketch to high-conversion Web &amp; Mobile platforms. Zero fluff, just
              production-grade execution.
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0040FF] px-6 py-3.5 text-sm font-semibold text-[#FFFFFF] shadow-[0_0_28px_rgba(0,64,255,0.12)] transition-all hover:-translate-y-0.5 hover:bg-[#3B70FF] hover:shadow-[0_0_34px_rgba(0,64,255,0.24)] focus:outline-none focus:ring-1 focus:ring-[#0040FF]/60"
              >
                Tell us what you&apos;re making <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => document.getElementById('selected-work')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 px-6 py-3.5 text-sm font-medium text-[#28384F] transition-colors hover:border-[#0040FF]/25 hover:bg-[#0040FF]/5"
              >
                See selected work <ArrowUpRight className="h-4 w-4 text-[#586B84]" />
              </button>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-xs text-[#586B84]">
              <span>Small senior teams</span>
              <span className="text-[#A3AFBF]">/</span>
              <span>Clear, honest process</span>
              <span className="text-[#A3AFBF]">/</span>
              <span>Built to ship</span>
            </div>
          </div>

          <div className="brand-demo-dark relative mx-auto flex min-h-[440px] w-full max-w-lg items-center justify-center py-5 lg:col-span-5 lg:ml-3 lg:mt-4">
            <div className="absolute right-0 top-14 hidden h-[330px] w-[270px] translate-x-4 rotate-[7deg] overflow-hidden rounded-2xl border border-slate-900/10 bg-[#0F1728] p-5 shadow-2xl sm:block">
              <div className="flex items-center gap-2 border-b border-slate-900/10 pb-4">
                <span className="h-2 w-2 rounded-full bg-[#0040FF]" />
                <span className="text-[10px] tracking-wide text-[#586B84]">STUDIO OVERVIEW</span>
              </div>
              <div className="mt-5 text-xs text-[#586B84]">This month</div>
              <div className="mt-1 text-2xl font-medium text-[#10213D]">12 projects</div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-slate-900/[0.08] bg-white/[0.03] p-3">
                  <div className="text-[9px] text-[#586B84]">In progress</div>
                  <div className="mt-1 text-lg text-[#10213D]">04</div>
                </div>
                <div className="rounded-xl border border-slate-900/[0.08] bg-white/[0.03] p-3">
                  <div className="text-[9px] text-[#586B84]">Just shipped</div>
                  <div className="mt-1 text-lg text-[#10213D]">08</div>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {['New product site', 'Mobile app', 'Brand refresh'].map((item, index) => (
                  <div key={item} className="flex items-center gap-2 border-b border-slate-900/[0.08] pb-2.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${index === 1 ? 'bg-[#0040FF]' : 'bg-neutral-600'}`} />
                    <span className="text-[10px] text-[#3F5068]">{item}</span>
                    <span className="ml-auto text-[9px] text-[#6C7D94]">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="group relative z-10 w-[250px] -rotate-2 rounded-[2.6rem] border border-slate-900/15 bg-[#050916] p-2 shadow-[0_28px_90px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:rotate-0 sm:w-[275px]">
              <div className="overflow-hidden rounded-[2.1rem] border border-slate-900/[0.08] bg-[#0A1020] px-4 pb-5 pt-5">
                <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-white/15" />
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-medium tracking-wide text-[#3F5068]">AURA / MONEY</div>
                  <span className="h-6 w-6 rounded-full border border-slate-900/10 bg-[#18243A]" />
                </div>
                <div className="mt-7 text-[10px] text-[#586B84]">Good morning, Alex</div>
                <div className="mt-1 text-[11px] text-[#586B84]">Your balance</div>
                <div className="mt-1 text-3xl font-medium tracking-tight text-[#10213D]">$14,580<span className="text-lg text-[#586B84]">.75</span></div>
                <div className="mt-5 rounded-2xl border border-slate-900/[0.08] bg-[#111B2E] p-3">
                  <div className="flex items-center justify-between text-[9px] text-[#586B84]">
                    <span>Spending this week</span><span className="text-emerald-400">−8.4%</span>
                  </div>
                  <svg viewBox="0 0 220 58" role="img" aria-label="Weekly spending chart" className="mt-3 h-14 w-full">
                    <path d="M0 45 C20 43 25 26 45 32 S72 48 92 30 S122 34 142 19 S170 29 190 12 S209 15 220 4" fill="none" stroke="#0040FF" strokeWidth="2" />
                    <path d="M0 45 C20 43 25 26 45 32 S72 48 92 30 S122 34 142 19 S170 29 190 12 S209 15 220 4 V58 H0Z" fill="url(#chart-fill)" />
                    <defs><linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#0040FF" stopOpacity=".18" /><stop offset="1" stopColor="#0040FF" stopOpacity="0" /></linearGradient></defs>
                  </svg>
                </div>
                <div className="mt-5 flex items-center justify-between text-[10px] text-[#586B84]">
                  <span>Recent activity</span><span className="text-[#0040FF]">See all</span>
                </div>
                <div className="mt-3 space-y-3">
                  {[['Coffee House', '−$6.80'], ['Monthly pay', '+$3,200'], ['Market Street', '−$42.16']].map(([name, amount]) => (
                    <div key={name} className="flex items-center gap-2.5">
                      <span className="h-7 w-7 rounded-full border border-slate-900/[0.08] bg-[#18243A]" />
                      <span className="text-[9px] text-[#3F5068]">{name}</span>
                      <span className={`ml-auto text-[9px] ${amount.startsWith('+') ? 'text-emerald-400' : 'text-[#586B84]'}`}>{amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1 left-0 z-20 hidden items-center gap-3 rounded-2xl border border-slate-900/10 bg-white px-4 py-3 shadow-xl sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0040FF]/10 text-[#0040FF]">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-xs leading-5 text-[#3F5068]">
                Thoughtful by design.<br /><strong className="font-medium text-[#10213D]">Ready for the real world.</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900/[0.09] bg-white/65 py-8 sm:py-9">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-y divide-slate-900/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {STUDIO_METRICS.map((metric) => (
              <div key={metric.label} className="py-4 sm:px-6 sm:py-1 first:sm:pl-0">
                <div className="font-mono text-3xl font-medium tracking-tight text-[#10213D] sm:text-4xl">
                  {metric.value}
                </div>
                <div className="mt-1.5 text-xs text-[#586B84] sm:text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0040FF]">What we do</span>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#10213D] sm:text-5xl">
              Good work comes from getting the details right.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#586B84]">
            A close-knit team for the moments when your next digital move really matters.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {serviceOrder.map((service, index) => {
            const isFeatured = index === 0;
            const serviceTitle = serviceTitles[index];
            const icon = index === 0 ? <Code2 className="h-5 w-5" /> : index === 1 ? <Smartphone className="h-5 w-5" /> : <Layers className="h-5 w-5" />;
            return (
              <article
                key={service.id}
                className={`group relative isolate overflow-hidden rounded-3xl border border-slate-900/[0.09] bg-white transition-all duration-300 hover:border-[#0040FF]/30 ${
                  index === 1 ? 'lg:col-span-4' : index === 2 ? 'lg:col-span-4' : 'lg:col-span-8'
                }`}
              >
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 -z-20 h-full w-full object-cover opacity-25 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-35 ${
                    isFeatured ? 'min-h-[410px]' : 'min-h-[340px]'
                  }`}
                />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0040FF]/10 via-[#EEF3FA]/75 to-[#EEF3FA]/95" />
                <div className={`flex h-full min-h-[340px] flex-col justify-between p-6 sm:p-8 ${isFeatured ? 'sm:min-h-[410px]' : ''}`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-[#EEF3FA]/60 text-[#0040FF] backdrop-blur">
                      {icon}
                    </span>
                    <span className="rounded-full border border-slate-900/10 bg-[#EEF3FA]/55 px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#3F5068] backdrop-blur transition-colors group-hover:border-[#01E1BB]/30 group-hover:text-[#01E1BB]">
                      {serviceBadges[index]}
                    </span>
                  </div>
                  <div className={`mt-12 ${isFeatured ? 'max-w-xl' : 'max-w-sm'}`}>
                    <div className="mb-3 text-xs font-mono text-[#586B84]">0{index + 1} / {service.subtitle}</div>
                    <h3 className={`${isFeatured ? 'text-3xl sm:text-4xl' : 'text-2xl'} font-semibold tracking-[-0.04em] text-[#10213D]`}>
                      {serviceTitle}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-[#3F5068]">
                      {service.description}
                    </p>
                    <button
                      onClick={() => onNavigate(service.pageId)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#10213D] transition-colors hover:text-[#0040FF]"
                    >
                      Explore the work <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}

          <article className="group relative isolate flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-900/[0.09] bg-white p-6 transition-all duration-300 hover:border-[#0040FF]/30 sm:p-8 lg:col-span-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0040FF]/10 via-transparent to-transparent" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0040FF]">From the sketchbook</span>
                <h3 className="mt-3 max-w-lg text-2xl font-semibold tracking-[-0.04em] text-[#10213D] sm:text-3xl">
                  The best digital work feels simple. Getting there takes care.
                </h3>
              </div>
              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-900/10 text-[#3F5068] sm:flex">
                <ShieldCheck className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-5 border-t border-slate-900/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-[#586B84]">
                Strategy, design and engineering live together here. One small team, from the first rough idea to the final release.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#10213D] transition-colors hover:text-[#0040FF]"
              >
                Meet your team <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        </div>
      </section>

      <section id="selected-work" className="space-y-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
          <div className="space-y-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0040FF]">Selected work</span>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#10213D] sm:text-5xl">A few things we&apos;re proud of.</h2>
          </div>
          <div className="flex max-w-full flex-wrap items-center gap-1 rounded-2xl border border-slate-900/[0.1] bg-white p-1">
            {(['All', 'App Design', 'Web Development', 'Brand Identity'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveProjectTab(tab)}
                className={`rounded-xl px-3 py-2 text-xs whitespace-nowrap transition-colors ${
                  activeProjectTab === tab
                    ? 'bg-[#0040FF] font-semibold text-[#FFFFFF]'
                    : 'text-[#586B84] hover:text-[#10213D]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`portfolio-photo-card group relative h-[430px] min-w-0 overflow-hidden rounded-3xl border border-slate-900/10 bg-white transition-colors hover:border-[#0040FF]/30 sm:h-[500px] ${
                filteredProjects.length === 3 && index === 2 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D19] via-[#080D19]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-[#3F5068]">
                  <span className="rounded-full border border-[#0040FF]/30 bg-[#EEF3FA]/65 px-3 py-1.5 text-[#0040FF] backdrop-blur">{project.category}</span>
                  <span>{project.client}</span><span className="text-[#6C7D94]">/</span><span>{project.year}</span>
                </div>
                <h3 className="max-w-2xl text-2xl font-semibold tracking-[-0.04em] text-[#10213D] sm:text-4xl">{project.title}</h3>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-xl text-sm leading-6 text-[#3F5068]">{project.summary}</p>
                  <div className="shrink-0 border-l border-[#0040FF]/60 pl-4">
                    <div className="text-2xl font-semibold text-[#10213D]">{project.metrics.value}</div>
                    <div className="mt-1 text-xs text-[#586B84]">{project.metrics.label}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0040FF]">How we work</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#10213D] sm:text-4xl">
            Thoughtful from day one. Solid at launch.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#586B84]">
            Work closely with the people making your product, every step of the way.
          </p>
        </div>
        <div className="divide-y divide-slate-900/10 border-y border-slate-900/10 lg:col-span-8">
          {AGENCY_PROCESS.map((phase) => (
            <div key={phase.step} className="grid grid-cols-[3rem_1fr] gap-4 py-5 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-6">
              <span className="font-mono text-sm text-[#0040FF]">{phase.step}</span>
              <div>
                <h3 className="text-base font-medium text-[#10213D]">{phase.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#586B84]">{phase.description}</p>
              </div>
              <span className="col-start-2 text-xs text-[#586B84] sm:col-start-auto">{phase.timeframe}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl space-y-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0040FF]">Kind words</span>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#10213D] sm:text-4xl">Good partnerships make good work.</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.id} className="flex flex-col justify-between gap-8 rounded-3xl border border-slate-900/[0.09] bg-white p-6 sm:p-8">
              <div>
                <span className="text-xs font-mono text-[#0040FF]">{testimonial.metric}</span>
                <blockquote className="mt-5 text-base leading-7 text-[#28384F]">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              </div>
              <figcaption className="border-t border-slate-900/10 pt-4 text-sm">
                <div className="font-medium text-[#10213D]">{testimonial.clientName}</div>
                <div className="mt-1 text-xs text-[#586B84]">{testimonial.clientRole} · {testimonial.companyName}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0040FF]">A few good questions</span>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#10213D] sm:text-4xl">Before we get started.</h2>
        </div>
        <div className="divide-y divide-slate-900/10 border-y border-slate-900/10">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-[#10213D] transition-colors hover:text-[#0040FF]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-[#586B84] transition-transform ${isOpen ? 'rotate-180 text-[#0040FF]' : ''}`} />
                </button>
                {isOpen && <p className="max-w-3xl pb-5 pr-8 text-sm leading-6 text-[#586B84]">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/[0.1] bg-white px-6 py-10 sm:px-12 sm:py-14 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#0040FF]/[0.07] blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0040FF]">Have something in mind?</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#10213D] sm:text-5xl">Let&apos;s make it matter.</h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[#586B84]">
                Tell us where you want to go. We&apos;ll help you figure out how to get there.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <button onClick={() => onNavigate('contact')} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0040FF] px-6 py-3.5 text-sm font-semibold text-[#FFFFFF] transition-all hover:-translate-y-0.5 hover:bg-[#3B70FF] hover:shadow-[0_0_28px_rgba(0,64,255,0.18)]">
                Start a conversation <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={onOpenEstimator} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 px-6 py-3.5 text-sm font-medium text-[#28384F] transition-colors hover:border-[#0040FF]/25 hover:bg-[#0040FF]/5">
                Estimate scope <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
