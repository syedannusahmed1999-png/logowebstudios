import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Send,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  prefillData?: {
    services?: string[];
    budget?: string;
  };
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, prefillData }) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [services, setServices] = useState<string[]>(
    prefillData?.services && prefillData.services.length > 0
      ? prefillData.services
      : ['App Design']
  );
  const [budget, setBudget] = useState(() => {
    const prefilledBudget = prefillData?.budget;
    if (!prefilledBudget) return '$15,000 – $30,000';
    if (prefilledBudget === '$15,000 – $25,000') return '$15,000 – $30,000';
    if (prefilledBudget === '$25,000 – $50,000') return '$30,000 – $60,000';
    if (prefilledBudget === '$50,000+') return '$60,000+';
    if (prefilledBudget === '$15,000 – $30,000' || prefilledBudget === '$30,000 – $60,000') {
      return prefilledBudget;
    }
    return '$60,000+';
  });
  const [timeline, setTimeline] = useState('1 – 3 Months');
  const [message, setMessage] = useState('');

  // UI & Validation State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Interactive scheduler state
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('10:00 AM PST');
  const [callBooked, setCallBooked] = useState(false);

  const toggleService = (svc: string) => {
    setServices((prev) =>
      prev.includes(svc)
        ? prev.length > 1
          ? prev.filter((s) => s !== svc)
          : prev
        : [...prev, svc]
    );
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = 'Please provide a valid work email address.';
    }
    if (!message.trim() || message.trim().length < 15) {
      errs.message = 'Please provide at least a few details about your project goals (min 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedRef = `AURA-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
    }, 600);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <span className="w-2 h-2 rounded-xs bg-amber-400 rotate-45 inline-block"></span>
            <span>Initiate An Engagement</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213D] leading-[1.08]">
            Let's build something exceptional together.
          </h1>

          <p className="text-base sm:text-lg text-[#3F5068] leading-relaxed">
            Tell us about your upcoming project, product milestone, or brand transformation. Every inquiry is reviewed by our managing partners within 24 business hours.
          </p>
        </div>
      </section>

      {/* 2. FORM & CONTACT DETAILS SPLIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Form or Success State */}
          <div className="lg:col-span-7 bg-white border border-slate-900/10 rounded-3xl p-6 sm:p-10">
            {isSubmitted ? (
              <div className="space-y-6 py-6 text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto sm:mx-0">
                  <CheckCircle className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    Inquiry Dispatched Successfully
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#10213D]">
                    Thank you, {fullName.split(' ')[0]}. We're on it.
                  </h2>
                  <p className="text-sm text-[#3F5068] leading-relaxed">
                    Your brief has been forwarded directly to our Senior Design & Technical Directors. We have reserved reference code{' '}
                    <strong className="text-[#10213D] font-mono">{referenceId}</strong> for your inquiry.
                  </p>
                </div>

                <div className="p-4 bg-[#F1F5FA] border border-neutral-800 rounded-xl space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[#586B84]">
                    <span>Targeted Disciplines:</span>
                    <span className="text-[#10213D] font-medium">{services.join(', ')}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#586B84]">
                    <span>Allocated Budget:</span>
                    <span className="text-[#10213D] font-mono">{budget}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#586B84]">
                    <span>Estimated Timeline:</span>
                    <span className="text-[#10213D] font-medium">{timeline}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#586B84] pt-2 border-t border-neutral-800/80">
                    <span>Response Commitment:</span>
                    <span className="text-amber-400 font-semibold">Within 24 Business Hours</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-2.5 bg-[#E5ECF5] hover:bg-[#D7E0EB] text-[#28384F] text-xs font-semibold rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                  <button
                    onClick={() => onNavigate('home')}
                    className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-[#10213D] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Return to Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-[#10213D]">Project Inquiry Brief</h2>
                  <p className="text-xs text-[#586B84]">
                    Fill out the parameters below to receive a personalized scope and sprint breakdown.
                  </p>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#3F5068] block">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-2.5 bg-[#F1F5FA] border rounded-xl text-sm text-[#10213D] placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-neutral-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#3F5068] block">
                      Work Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-2.5 bg-[#F1F5FA] border rounded-xl text-sm text-[#10213D] placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-neutral-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#3F5068] block">
                    Company / Organization Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Technologies"
                    className="w-full px-4 py-2.5 bg-[#F1F5FA] border border-neutral-800 rounded-xl text-sm text-[#10213D] placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                {/* Service Disciplines Multi-select */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#3F5068] block">
                    Disciplines Required (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'App Design (iOS & Android)',
                      'Logo & Brand Design',
                      'Web Design & Development',
                      'Online Store Management',
                    ].map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => toggleService(svc)}
                        className={`p-3 rounded-xl border text-left text-xs font-medium transition-colors ${
                          services.includes(svc)
                            ? 'bg-amber-400/10 border-amber-400/80 text-amber-300'
                            : 'bg-[#F1F5FA] border-neutral-800 text-[#586B84] hover:text-[#10213D]'
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Bracket */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#3F5068] block">
                    Allocated Investment Range
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Under $15k', value: '< $15,000' },
                      { label: '$15k–$30k', value: '$15,000 – $30,000' },
                      { label: '$30k–$60k', value: '$30,000 – $60,000' },
                      { label: '$60k+', value: '$60,000+' },
                    ].map((option) => (
                      <label key={option.value} className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="budget"
                          value={option.value}
                          checked={budget === option.value}
                          onChange={() => setBudget(option.value)}
                          className="peer sr-only"
                        />
                        <span className="flex min-h-14 items-center justify-center rounded-xl border border-slate-900/10 bg-[#EEF3FA] px-3 py-3 text-center text-sm font-medium text-[#3F5068] transition-colors hover:border-[#0040FF]/40 peer-checked:border-[#0040FF] peer-checked:bg-[#0040FF]/10 peer-checked:text-[#10213D] peer-focus-visible:ring-1 peer-focus-visible:ring-[#0040FF]/30">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Target Timeline */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#3F5068] block">
                    Target Completion Horizon
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['< 1 Month', '1 – 3 Months', '3 – 6 Months'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        className={`py-2 text-xs font-medium rounded-lg border text-center transition-colors ${
                          timeline === t
                            ? 'bg-[#0040FF] text-[#FFFFFF] font-bold border-[#0040FF]'
                            : 'bg-[#F1F5FA] border-neutral-800 text-[#586B84] hover:text-[#10213D]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#3F5068] block">
                    Project Overview & Strategic Objectives <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Briefly describe your product goals, target audience, timeline constraints, or existing links/materials..."
                    className={`w-full px-4 py-3 bg-[#F1F5FA] border rounded-xl text-sm text-[#10213D] placeholder-neutral-500 focus:outline-none transition-colors ${
                      errors.message
                        ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-neutral-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-[#10213D] font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting Project Brief...</span>
                  ) : (
                    <>
                      <span>Transmit Brief to Partners</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#586B84] pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#586B84]" />
                  <span>Strict NDA and client privacy guaranteed. Never shared.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Contact Details with Editable Placeholders & Quick Scheduler */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Studio Channels */}
            <div className="bg-white/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-[#10213D]">Studio Headquarters</h3>
              </div>

              <div className="space-y-5 text-xs sm:text-sm text-[#3F5068]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[#586B84] text-xs block">Executive Inquiries</span>
                    <a
                      href="mailto:hello@auradigitalstudio.com"
                      className="break-all text-[#10213D] hover:text-amber-400 font-mono transition-colors"
                    >
                      [hello@auradigitalstudio.com]
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-[#586B84] text-xs block">Studio Phone</span>
                    <span className="text-[#10213D] font-mono">
                      [+1 (555) 019-2834]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-[#586B84] text-xs block">San Francisco Studio</span>
                    <span className="text-[#28384F] leading-relaxed block">
                      [742 Evergreen Terrace, Suite 400, San Francisco, CA 94107]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-[#586B84] text-xs block">Studio Operating Hours</span>
                    <span className="text-[#28384F]">
                      Monday – Friday: 9:00 AM – 6:00 PM PST
                    </span>
                    <span className="text-xs text-[#586B84] block mt-0.5">
                      Response SLA: 24 business hours guaranteed.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive 30-min Video Call Scheduler preview */}
            <div className="bg-white/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-[#10213D]">
                  Schedule Direct 30-Min Discovery Call
                </h4>
              </div>
              <p className="text-xs text-[#586B84]">
                Prefer to speak directly with our Partner? Reserve a dedicated video conference slot.
              </p>

              {callBooked ? (
                <div className="p-4 bg-[#F1F5FA] border border-emerald-500/40 rounded-xl text-xs space-y-1 text-emerald-300">
                  <div className="font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Discovery Call Reserved!
                  </div>
                  <p className="text-[#586B84]">
                    Slot held for <strong className="text-[#10213D]">{selectedDay} at {selectedTime}</strong>. A calendar invite link will be emailed alongside your brief.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {['Tomorrow', 'Wednesday', 'Thursday'].map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        className={`py-2 px-1 text-center rounded-lg border transition-colors ${
                          selectedDay === day
                            ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                            : 'bg-[#F1F5FA] border-neutral-800 text-[#586B84] hover:text-[#10213D]'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['10:00 AM PST', '2:30 PM PST'].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 text-center rounded-lg border transition-colors font-mono ${
                          selectedTime === time
                            ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                            : 'bg-[#F1F5FA] border-neutral-800 text-[#586B84] hover:text-[#10213D]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setCallBooked(true)}
                    className="w-full py-2 bg-[#E5ECF5] hover:bg-[#D7E0EB] text-[#10213D] text-xs font-semibold rounded-lg transition-colors"
                  >
                    Hold Video Slot ({selectedDay}, {selectedTime})
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
