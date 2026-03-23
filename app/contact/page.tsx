'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { ArrowUpRight, Mail, MapPin, Phone, Calendar } from 'lucide-react';

// ↓ Replace with your actual Calendly link once you have it
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

const services = [
  'Organic Marketing',
  'SEO Services',
  'Website Development',
  'Social Media Marketing',
  'CRO Services',
  'Retention Marketing',
  'Programmatic Advertising',
  'Google / Meta Ads',
  'Influencer Marketing',
  'Affiliate Marketing',
  'Content Marketing',
  'Creative Strategy',
];

const budgets = ['< ₹1L/month', '₹1L–10L/month', '₹10L–50L/month', '₹50L–1Cr/month', '₹1Cr+/month', "Let's discuss"];

export default function ContactPage() {
  const hero = useInView(0.1);
  const form = useInView(0.1);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
          className={`relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 transition-all duration-1000 ${
            hero.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-3xl">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">Get in Touch</p>
            <h1
              className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8"
              style={{ fontFamily: 'Poppins' }}
            >
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-[#E8231A]">great.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              Tell us about your brand and what you&apos;re trying to achieve.
              We&apos;ll come back with ideas, not a sales pitch.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ CONTENT ══════════════ */}
      <section className="py-16 px-6 lg:px-8 border-t border-gray-200 bg-white" ref={form.ref}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.8fr] gap-16">

          {/* Left: Contact info */}
          <div
            className={`transition-all duration-700 ${
              form.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="lg:sticky lg:top-28 space-y-8">
              <div>
                <h2
                  className="text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Contact us
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We typically respond within 24 hours. For urgent inquiries, reach us directly.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@socialcutlet.com' },
                  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                  { icon: MapPin, label: 'Location', value: 'Mumbai, India' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E8231A]/8 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#E8231A]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">{label}</p>
                      <p className="text-gray-900 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 pt-8">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Typical Response</p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#E8231A] rounded-full animate-pulse" />
                  <p className="text-gray-500 text-sm">Within 24 hours on weekdays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              form.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {submitted ? (
              <div className="bg-gray-50 border border-[#E8231A]/20 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-[#E8231A]/8 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3
                  className="text-3xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Message received!
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Thanks for reaching out. We&apos;ll review your brief and be in touch
                  within 24 hours with some initial thoughts.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: 'name', label: 'Your Name', placeholder: 'Jane Smith', required: true },
                    { id: 'email', label: 'Work Email', placeholder: 'jane@company.com', required: true },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                        {field.label} {field.required && <span className="text-[#E8231A]">*</span>}
                      </label>
                      <input
                        type={field.id === 'email' ? 'email' : 'text'}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.id as 'name' | 'email']}
                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#E8231A]/40 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Company / Brand</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#E8231A]/40 transition-colors"
                  />
                </div>

                {/* Services */}
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-3">
                    Services You&apos;re Interested In
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                          selectedServices.includes(s)
                            ? 'bg-[#E8231A] text-white'
                            : 'bg-white border border-gray-200 text-gray-500 hover:border-[#E8231A]/30 hover:text-gray-900'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-3">Monthly Revenue</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setSelectedBudget(b)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                          selectedBudget === b
                            ? 'bg-[#E8231A] text-white'
                            : 'bg-white border border-gray-200 text-gray-500 hover:border-[#E8231A]/30 hover:text-gray-900'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                    Tell Us About Your Goals <span className="text-[#E8231A]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What are you trying to achieve? What's your biggest marketing challenge right now?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#E8231A]/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E8231A] text-white font-semibold py-4 rounded-full hover:bg-gray-900 transition-colors duration-200 text-base"
                >
                  Send Message <ArrowUpRight size={18} />
                </button>

                <p className="text-gray-400 text-xs text-center">
                  No spam. No hard sell. Just a real conversation about your growth.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════ CALENDLY EMBED ══════════════ */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#E8231A]/8 border border-[#E8231A]/15 text-[#E8231A] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Calendar size={12} />
              Book a Call
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Prefer to talk directly?
            </h2>
            <p className="text-gray-500 text-base max-w-md mx-auto">
              Pick a time that works for you — 30 minutes, no commitment, just a real conversation about your brand&apos;s growth.
            </p>
          </div>

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg shadow-black/5"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=0a0a0a&primary_color=E8231A`}
            style={{ minWidth: '320px', height: '700px' }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </section>
    </>
  );
}
