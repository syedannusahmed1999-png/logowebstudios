import React, { useState } from 'react';
import { X, Check, Calculator, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: (prefillData?: { services: string[]; budget: string }) => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  onNavigateToContact,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['app']);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['ios']);
  const [timeline, setTimeline] = useState<'standard' | 'accelerated'>('standard');
  const [designTokensNeeded, setDesignTokensNeeded] = useState(true);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((s) => s !== id) : prev) : [...prev, id]
    );
  };

  const togglePlatform = (id: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((p) => p !== id) : prev) : [...prev, id]
    );
  };

  // Calculate pricing model
  let baseEstimate = 0;
  if (selectedServices.includes('app')) {
    baseEstimate += 18000;
    if (selectedPlatforms.length > 1) baseEstimate += (selectedPlatforms.length - 1) * 7000;
  }
  if (selectedServices.includes('brand')) {
    baseEstimate += 12000;
  }
  if (selectedServices.includes('web')) {
    baseEstimate += 16000;
  }
  if (designTokensNeeded) {
    baseEstimate += 4000;
  }
  if (timeline === 'accelerated') {
    baseEstimate = Math.round(baseEstimate * 1.25);
  }

  const estimatedWeeks = timeline === 'accelerated' ? '4 – 6 Weeks' : '8 – 10 Weeks';

  const handleProceed = () => {
    const serviceLabels = selectedServices.map((s) => {
      if (s === 'app') return 'App Design';
      if (s === 'brand') return 'Logo & Brand Design';
      return 'Web Design & Development';
    });

    let budgetBracket = '$15,000 – $25,000';
    if (baseEstimate > 35000) budgetBracket = '$50,000+';
    else if (baseEstimate > 22000) budgetBracket = '$25,000 – $50,000';

    onClose();
    onNavigateToContact({
      services: serviceLabels,
      budget: budgetBracket,
    });
  };

  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="modal-panel relative w-full max-w-2xl bg-white border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-[#10213D] tracking-tight">
              Interactive Scope & Timeline Estimator
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#586B84] hover:text-[#10213D] rounded-lg hover:bg-[#E5ECF5] transition-colors"
            aria-label="Close estimator modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 pt-5">
          {/* Services selector */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#586B84] block mb-2">
              1. Core Service Disciplines
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'app', label: 'App Design (iOS/Android)', desc: 'Prototypes & design systems' },
                { id: 'brand', label: 'Logo & Brand Identity', desc: 'Vector suite & guidelines' },
                { id: 'web', label: 'Web Design & Dev', desc: 'Next.js & headless e-comm' },
              ].map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => toggleService(svc.id)}
                  className={`p-3 text-left rounded-xl border transition-all ${
                    selectedServices.includes(svc.id)
                      ? 'bg-[#E5ECF5] border-amber-400 text-[#10213D] shadow-sm'
                      : 'bg-[#F1F5FA]/60 border-neutral-800 text-[#3F5068] hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{svc.label}</span>
                    {selectedServices.includes(svc.id) && (
                      <Check className="w-4 h-4 text-amber-400" />
                    )}
                  </div>
                  <span className="text-xs text-[#586B84] mt-1 block">{svc.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Platform selection if app design is active */}
          {selectedServices.includes('app') && (
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#586B84] block mb-2">
                2. Target Operating Environments
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'ios', label: 'Apple iOS' },
                  { id: 'android', label: 'Google Android' },
                  { id: 'webapp', label: 'Web App / SaaS' },
                ].map((plat) => (
                  <button
                    key={plat.id}
                    type="button"
                    onClick={() => togglePlatform(plat.id)}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-colors ${
                      selectedPlatforms.includes(plat.id)
                        ? 'bg-amber-400/10 border-amber-400/80 text-amber-300'
                        : 'bg-[#F1F5FA] border-neutral-800 text-[#586B84] hover:text-[#10213D]'
                    }`}
                  >
                    {plat.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Delivery Cadence */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#586B84] block mb-2">
              3. Delivery Cadence
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTimeline('standard')}
                className={`p-3 rounded-xl border text-left transition-colors ${
                  timeline === 'standard'
                    ? 'bg-[#E5ECF5] border-amber-400 text-[#10213D]'
                    : 'bg-[#F1F5FA] border-neutral-800 text-[#586B84] hover:border-neutral-700'
                }`}
              >
                <div className="text-sm font-semibold">Standard Sprint Cadence</div>
                <div className="text-xs text-[#586B84] mt-0.5">8 – 10 weeks comprehensive discovery & QA</div>
              </button>

              <button
                type="button"
                onClick={() => setTimeline('accelerated')}
                className={`p-3 rounded-xl border text-left transition-colors ${
                  timeline === 'accelerated'
                    ? 'bg-[#E5ECF5] border-amber-400 text-[#10213D]'
                    : 'bg-[#F1F5FA] border-neutral-800 text-[#586B84] hover:border-neutral-700'
                }`}
              >
                <div className="text-sm font-semibold">Priority Fast-Track</div>
                <div className="text-xs text-[#586B84] mt-0.5">4 – 6 weeks dedicated dual-team sprint (+25%)</div>
              </button>
            </div>
          </div>

          {/* Token architecture checkbox */}
          <div className="flex items-center gap-3 pt-1">
            <input
              type="checkbox"
              id="tokens"
              checked={designTokensNeeded}
              onChange={(e) => setDesignTokensNeeded(e.target.checked)}
              className="w-4 h-4 rounded border-neutral-700 text-amber-400 focus:ring-amber-400 bg-[#F1F5FA]"
            />
            <label htmlFor="tokens" className="text-xs text-[#3F5068] cursor-pointer">
              Include W3C cross-platform design token compilation (Swift + Compose + CSS export)
            </label>
          </div>

          {/* Output estimate summary */}
          <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#586B84] block uppercase font-mono tracking-wider">
                Indicative Project Investment
              </span>
              <div className="text-2xl font-bold text-[#10213D] font-mono tabular-nums">
                ${baseEstimate.toLocaleString()}{' '}
                <span className="text-xs font-normal text-[#586B84] font-sans">USD (est.)</span>
              </div>
              <span className="text-xs text-[#586B84]">
                Timeline: <strong className="text-[#28384F]">{estimatedWeeks}</strong> · 100% IP Transfer Included
              </span>
            </div>

            <button
              onClick={handleProceed}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-[#10213D] font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0"
            >
              <span>Transfer to Project Brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
