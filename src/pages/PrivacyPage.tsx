import React from 'react';
import { PageId } from '../types';
import { ArrowLeft, Lock, ShieldCheck, Mail } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-24 space-y-12">
      {/* Top back button */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs text-[#586B84] hover:text-[#10213D] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </button>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-neutral-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
          <Lock className="w-4 h-4" />
          <span>Client Confidentiality & Data Security</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213D]">
          Privacy Policy & Data Ethics
        </h1>
        <div className="flex items-center gap-3 text-xs text-[#586B84]">
          <span>Effective Date: January 1, 2026</span>
          <span aria-hidden="true">·</span>
          <span>Last Updated: October 2026</span>
          <span aria-hidden="true">·</span>
          <span>GDPR & CCPA Compliant</span>
        </div>
      </div>

      {/* Main Privacy Content */}
      <div className="space-y-10 text-[#3F5068] leading-relaxed text-sm">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            01. Our Privacy Commitment
          </h2>
          <p>
            At Aura Creative Studio LLC ("Aura", "we", "our", or "us"), we hold client privacy and data minimization as foundational engineering principles. We never sell, monetize, or lease personal or corporate information. This policy transparently outlines how data is collected, processed, and safeguarded when interacting with our studio website, inquiry forms, and client portals.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            02. Information We Collect
          </h2>
          <p>We only collect information strictly necessary to scope, evaluate, and fulfill design and engineering engagements:</p>
          <ul className="space-y-2 pl-4 list-disc text-[#586B84] text-xs">
            <li>
              <strong className="text-[#28384F]">Voluntarily Provided Information:</strong> Full name, professional work email, company name, project brief parameters, budget ranges, and scheduling preferences submitted through our inquiry and scope estimator tools.
            </li>
            <li>
              <strong className="text-[#28384F]">Automated Technical Telemetry:</strong> Standard server logs (including truncated IP address, browser type, operating environment, and referring URL) collected automatically to prevent distributed denial-of-service (DDoS) attacks and ensure network security.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            03. Lawful Basis & Usage of Data
          </h2>
          <p>We process your data strictly under the following lawful grounds:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
            <div className="p-4 bg-white border border-neutral-800 rounded-xl space-y-1">
              <span className="font-semibold text-[#10213D] block">Pre-Contractual Steps</span>
              <p className="text-[#586B84]">
                Evaluating project feasibility, estimating timelines, generating proposals, and conducting technical discovery sessions.
              </p>
            </div>
            <div className="p-4 bg-white border border-neutral-800 rounded-xl space-y-1">
              <span className="font-semibold text-[#10213D] block">Contract Performance</span>
              <p className="text-[#586B84]">
                Delivering software development sprints, design token handoffs, and invoicing client accounts.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            04. Cookies & Tracking Technologies
          </h2>
          <p>
            We do not use invasive third-party ad retargeting pixels (such as Meta Pixel or TikTok tracking scripts). Any analytical cookies deployed are strictly configured for aggregated, privacy-preserving metrics with IP anonymization enabled. You can disable cookies at any time via your browser settings without impacting website functionality.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            05. Subprocessors & Infrastructure Security
          </h2>
          <p>
            All website traffic and data transmission is protected using modern TLS 1.3 transport encryption. Data at rest is encrypted via AES-256 standards. We partner only with audited, SOC2-certified cloud service providers:
          </p>
          <ul className="space-y-1.5 pl-4 list-disc text-[#586B84] text-xs">
            <li>Edge CDN & Hosting: Cloudflare / Vercel (San Francisco, CA)</li>
            <li>Secure Email Relay: Google Workspace with DMARC/SPF enforcement</li>
            <li>Invoicing & Payments: Stripe Inc. (PCI-DSS Level 1 Compliant)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            06. Your Legal Rights (GDPR & CCPA/CPRA)
          </h2>
          <p>
            Depending on your geographic residency, you possess statutory rights regarding your personal information, including:
          </p>
          <ul className="space-y-1.5 pl-4 list-disc text-[#586B84] text-xs">
            <li>The right to access and receive a copy of your personal data.</li>
            <li>The right to rectify inaccurate or incomplete records.</li>
            <li>The right to request immediate erasure of your project inquiry history ("Right to be Forgotten").</li>
            <li>The right to data portability in a machine-readable JSON format.</li>
            <li>The right to withdraw consent for communications at any moment.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            07. Data Protection Officer & Requests
          </h2>
          <p>
            To exercise any data rights, submit an inquiry, or request permanent deletion of your project records, please contact our designated Data Protection Officer:
          </p>
          <div className="p-4 bg-white/60 border border-neutral-800 rounded-xl text-xs space-y-1">
            <span className="font-semibold text-[#10213D] block">Aura Privacy & Compliance Office:</span>
            <p className="font-mono text-[#3F5068]">
              Email: [privacy@auradigitalstudio.com]
            </p>
            <p className="text-[#586B84]">
              Mailing Address: [Aura Creative Studio LLC, Attn: Privacy Officer, 742 Evergreen Terrace, Suite 400, San Francisco, CA 94107, USA]
            </p>
            <p className="text-[#586B84] pt-1">
              Response SLA: All privacy requests receive a formal acknowledgment within 48 business hours.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
