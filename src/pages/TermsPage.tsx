import React from 'react';
import { PageId } from '../types';
import { ArrowLeft, Shield, FileText, CheckCircle2 } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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
          <Shield className="w-4 h-4" />
          <span>Legal Framework & Governance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213D]">
          Terms & Conditions of Service
        </h1>
        <div className="flex items-center gap-3 text-xs text-[#586B84]">
          <span>Effective Date: January 1, 2026</span>
          <span aria-hidden="true">·</span>
          <span>Last Updated: October 2026</span>
          <span aria-hidden="true">·</span>
          <span>Document Version: 3.2</span>
        </div>
      </div>

      {/* Main Legal Content */}
      <div className="space-y-10 text-[#3F5068] leading-relaxed text-sm">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight flex items-center gap-2">
            <span>01. Scope of Engagement & Statement of Work</span>
          </h2>
          <p>
            These Terms & Conditions ("Agreement") govern the provision of digital design, branding, and software engineering services provided by Aura Creative Studio LLC ("Aura", "Studio", "we", or "us") to the client specified in an executed Statement of Work ("Client", "you").
          </p>
          <p>
            Each project shall be outlined in a formal Statement of Work ("SOW") detailing the approved deliverables, sprint schedule, milestone benchmarks, and financial compensation. In the event of any conflict between this Agreement and a specific SOW, the terms of the SOW shall prevail.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight flex items-center gap-2">
            <span>02. Intellectual Property Rights & Ownership</span>
          </h2>
          <div className="p-4 bg-white border border-neutral-800 rounded-xl space-y-2 text-xs text-[#28384F]">
            <div className="font-semibold text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Full 100% Intellectual Property Assignment</span>
            </div>
            <p>
              Upon receipt of full and final payment for the services described in the applicable SOW, Aura irrevocably assigns, transfers, and conveys to Client all right, title, and interest worldwide in and to all custom deliverables created specifically for Client, including finalized vector logos, Figma token systems, UI designs, and custom application source code.
            </p>
          </div>
          <p>
            <strong>Studio Pre-Existing Tools:</strong> Aura retains ownership of any pre-existing software libraries, open-source boilerplate utilities, and general developer tooling utilized during production. Aura grants Client a perpetual, royalty-free, non-exclusive license to use such embedded tools solely as incorporated into the final deliverables.
          </p>
          <p>
            <strong>Portfolio Showcase Rights:</strong> Unless explicitly restricted via a formal Mutual Non-Disclosure Agreement (NDA) executed prior to project kickoff, Aura reserves the professional right to showcase completed non-confidential designs in our portfolio, case studies, and industry design awards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            <span>03. Invoicing, Payments & Milestone Schedules</span>
          </h2>
          <p>
            Unless otherwise agreed in writing in the SOW, standard project compensation follows our three-tier milestone structure:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-[#586B84] text-xs">
            <li>
              <strong className="text-[#28384F]">Deposit:</strong> 40% non-refundable deposit due upon contract execution prior to sprint initiation.
            </li>
            <li>
              <strong className="text-[#28384F]">Prototype Milestone:</strong> 30% due upon mutual approval of the interactive high-fidelity prototype or brand design direction.
            </li>
            <li>
              <strong className="text-[#28384F]">Final Handover:</strong> 30% due upon final production deployment, repository transfer, or master asset delivery.
            </li>
          </ul>
          <p>
            Invoices are payable net fifteen (15) days from receipt. Delinquent balances exceeding thirty (30) days are subject to a statutory interest charge of 1.5% per month or the maximum permissible by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            <span>04. Client Review Periods & Revision Limits</span>
          </h2>
          <p>
            Timely collaboration is essential for agile velocity. Upon submission of each milestone deliverable, Client shall have ten (10) business days to review and either approve the deliverable or supply consolidated written feedback.
          </p>
          <p>
            Each milestone includes up to two (2) rounds of comprehensive revisions within the defined scope. Material changes that depart fundamentally from the approved project brief or introduce new platform targets shall be scoped as an independent Change Order.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            <span>05. Confidentiality & Non-Disclosure</span>
          </h2>
          <p>
            Both parties agree that all confidential proprietary business data, investor information, unreleased product roadmaps, and trade secrets disclosed during the engagement shall remain strictly confidential. Neither party shall disclose such confidential information to third parties without prior written consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            <span>06. Warranties & Limitation of Liability</span>
          </h2>
          <p>
            Aura warrants that all bespoke work delivered will be original and will not knowingly infringe on the intellectual property rights of any third party. Aura warrants web code against reproducible technical defects for a period of thirty (30) days following launch.
          </p>
          <p>
            To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, consequential, or punitive damages. Aura's total aggregate liability arising out of this agreement shall not exceed the total fees paid by Client under the applicable SOW during the six (6) months preceding the claim.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10213D] tracking-tight">
            <span>07. Governing Jurisdiction & Contact Details</span>
          </h2>
          <p>
            This Agreement shall be construed and governed in accordance with the laws of the State of California, United States, without regard to conflict of law principles. Any legal disputes shall be resolved in the state or federal courts situated in San Francisco County, California.
          </p>
          <div className="p-4 bg-white/60 border border-neutral-800 rounded-xl text-xs space-y-1">
            <span className="font-semibold text-[#10213D] block">Official Legal Notices:</span>
            <p className="text-[#586B84]">
              Aura Creative Studio LLC — Legal & Contracts Division
            </p>
            <p className="font-mono text-[#3F5068]">
              Email: [legal@auradigitalstudio.com]
            </p>
            <p className="text-[#586B84]">
              Address: [742 Evergreen Terrace, Suite 400, San Francisco, CA 94107, USA]
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
