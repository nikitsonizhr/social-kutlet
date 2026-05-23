'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import {
  ArrowUpRight, Mail, MapPin, Phone, Clock,
  Calendar, Linkedin, Instagram, ChevronDown,
} from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/nikitsoni17/30min';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const serviceOptions = [
  'Performance Marketing',
  'SEO',
  'Social Media',
  'Influencer',
  'Creative Strategy',
  'CRO / Website',
  'Programmatic',
  'Affiliate',
  'Retention',
];

const budgetOptions = [
  '< ₹1L/month',
  '₹1L–5L/month',
  '₹5L–10L/month',
  '₹10L–50L/month',
  '₹50L+/month',
  "Let's discuss",
];

const hearFromOptions = [
  'Google Search',
  'LinkedIn',
  'Instagram',
  'Referral from a friend or colleague',
  'Referral from another brand / founder',
  'Attended an event or conference',
];

const afterSubmitSteps = [
  {
    title: 'We review your submission',
    desc: 'A senior strategist reads your goals before getting back to you. Not an automated reply.',
  },
  {
    title: 'We respond within 24 hours',
    desc: "With a specific, relevant response based on what you've shared.",
  },
  {
    title: 'We schedule a 30-min call',
    desc: 'No pitch deck, no hard sell. Just a real conversation about your brand and where the opportunity is.',
  },
];

export default function ContactPage() {
  const hero = useInView(0.1);
  const form = useInView(0.1);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [hearFrom, setHearFrom] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget,
          hearFrom,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitError('Network error — please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #E8231A 0%, transparent 70%)' }}
        />

        <div
          ref={hero.ref}
          className={`relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 md:pt-40 pb-16 transition-all duration-1000 ${
            hero.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-3xl">
            <p className="text-gray-400 text-xs font-extrabold uppercase tracking-widest mb-5">Get in Touch</p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[0.95] tracking-tight mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Let&apos;s talk about
              <br />
              <span className="text-[#E8231A]">Growing Your Brand</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              Tell us about your brand and what you&apos;re trying to achieve.
              We&apos;ll come back with ideas, not a sales pitch.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ CONTENT ══════════════ */}
      <section className="py-12 px-6 lg:px-8 border-t border-gray-200 bg-white" ref={form.ref}>
        <div className="max-w-3xl mx-auto">

          {/* Form — full width */}
          <div className={`transition-all duration-700 ${form.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {submitted ? (
              <div className="bg-gray-50 border border-[#E8231A]/20 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-[#E8231A]/8 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Poppins' }}>
                  Message received!
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Thanks for reaching out. We&apos;ll review your brief and be in touch
                  within 24 hours with some initial thoughts.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  📩 We&apos;ve also sent our company deck to your email — check your inbox (and spam, just in case).
                </p>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-2xl p-7 lg:p-8">
                <h2 className="text-3xl font-black text-gray-900 mb-8" style={{ fontFamily: 'Poppins' }}>
                  Tell us about your brand
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* First name + Last name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-800 text-base font-bold mb-2">
                        First name <span className="text-[#E8231A]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:border-[#E8231A]/50 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 text-base font-bold mb-2">
                        Last name <span className="text-[#E8231A]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:border-[#E8231A]/50 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Work email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-800 text-base font-bold mb-2">
                        Work email <span className="text-[#E8231A]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:border-[#E8231A]/50 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 text-base font-bold mb-2">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:border-[#E8231A]/50 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-gray-800 text-base font-bold mb-2">
                      Company / Brand name <span className="text-[#E8231A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your brand name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:border-[#E8231A]/50 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2.5">
                      Services you&apos;re interested in
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                            selectedServices.includes(s)
                              ? 'bg-[#E8231A] text-white'
                              : 'bg-gray-100 border border-gray-200 text-gray-600 hover:border-[#E8231A]/30 hover:text-gray-900'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget + How did you hear */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-800 text-base font-bold mb-2">
                        Monthly marketing budget <span className="text-[#E8231A]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-base focus:outline-none focus:border-[#E8231A]/50 focus:bg-white transition-colors appearance-none cursor-pointer pr-10"
                        >
                          <option value="" disabled>Select budget range</option>
                          {budgetOptions.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-800 text-base font-bold mb-2">
                        How did you hear about us?
                      </label>
                      <div className="relative">
                        <select
                          value={hearFrom}
                          onChange={(e) => setHearFrom(e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-base focus:outline-none focus:border-[#E8231A]/50 focus:bg-white transition-colors appearance-none cursor-pointer pr-10"
                        >
                          <option value="" disabled>Select source</option>
                          {hearFromOptions.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-800 text-base font-bold mb-2">
                      Tell us about your goals <span className="text-[#E8231A]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="e.g. We're a D2C brand doing ₹30L/month. Our Meta ROAS has been declining and we want to fix performance while also building organic. Looking for a partner who can handle both..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:border-[#E8231A]/50 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#E8231A] text-white font-black text-lg py-5 rounded-full cta-blink hover:bg-gray-900 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:animate-none"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>Request My Free Strategy Call <ArrowUpRight size={18} /></>
                    )}
                  </button>

                  {submitError && (
                    <p className="text-[#E8231A] text-sm font-medium text-center bg-[#E8231A]/5 border border-[#E8231A]/20 rounded-xl px-4 py-3">
                      {submitError}
                    </p>
                  )}

                  <p className="text-gray-400 text-xs text-center">
                    We respond within 24 hours on business days. Your information is never shared with third parties.
                  </p>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ══════════════ CALENDLY EMBED ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#E8231A]/8 border border-[#E8231A]/15 text-[#E8231A] text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Calendar size={12} />
              Book a Call
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
              Prefer to talk directly?
            </h2>
            <p className="text-gray-500 text-base max-w-md mx-auto">
              Pick a time that works for you — 30 minutes, no commitment, just a real conversation about your brand&apos;s growth.
            </p>
          </div>

          <div
            className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg shadow-black/5"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=0a0a0a&primary_color=E8231A`}
            style={{ minWidth: '320px', height: '700px' }}
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        </div>
      </section>
    </>
  );
}
