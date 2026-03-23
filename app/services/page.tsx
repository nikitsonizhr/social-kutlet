'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Target, Palette, ChevronDown } from 'lucide-react';

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

const serviceCategories = [
  {
    id: 'organic',
    icon: TrendingUp,
    number: '01',
    title: 'Organic Marketing',
    tagline: "Build compound growth that doesn't stop when the budget does.",
    description:
      'Organic marketing is the backbone of sustainable brand growth. We build systems across SEO, CRO, and social that work 24/7 — attracting, converting, and retaining customers without constant ad spend.',
    services: [
      {
        name: 'CRO Services',
        desc: 'Turn more of your existing traffic into revenue. We audit, test, and optimise every step of the user journey — from landing page to checkout.',
        outcomes: ['Higher conversion rates', 'Lower cost per acquisition', 'Improved LTV'],
      },
      {
        name: 'Website Development',
        desc: 'Performance-first websites built for conversion. Fast, accessible, and designed to rank — our dev team builds sites that work as hard as your marketing.',
        outcomes: ['Sub-2s load times', 'Mobile-first builds', 'CMS integration'],
      },
      {
        name: 'Social Media Marketing',
        desc: 'Community building, content strategy, and social-first creative that builds loyal audiences and drives real engagement.',
        outcomes: ['Audience growth', 'Engagement rate uplift', 'Brand sentiment improvement'],
      },
      {
        name: 'SEO Services',
        desc: 'Sustainable search visibility through technical SEO, content strategy, and authority building that compounds over time.',
        outcomes: ['Organic traffic growth', 'Keyword ranking improvements', 'Domain authority building'],
      },
    ],
  },
  {
    id: 'demand',
    icon: Target,
    number: '02',
    title: 'Demand Generation',
    tagline: 'Reach the right audience, at the right time, on every platform.',
    description:
      'Demand generation is where data meets precision. We run full-funnel performance campaigns — from awareness to acquisition — across programmatic, paid social, influencer, and affiliate channels.',
    services: [
      {
        name: 'Retention Marketing',
        desc: 'Acquiring customers is just the beginning. We design lifecycle programs — email, push, WhatsApp — that increase repeat purchase rates and maximise LTV.',
        outcomes: ['Higher repeat purchase rate', 'Reduced churn', 'Increased CLV'],
      },
      {
        name: 'Programmatic Advertising (DV360)',
        desc: "Advanced display and video campaigns through Google's DV360 platform — precision targeting at scale across the open web.",
        outcomes: ['Brand reach expansion', 'Cost-efficient CPMs', 'Advanced audience targeting'],
      },
      {
        name: 'Acquisition Marketing (Google / Meta / Lead Gen)',
        desc: "Performance campaigns on Google and Meta built around your CAC targets — whether you're driving leads, installs, or direct e-commerce sales.",
        outcomes: ['Predictable CAC', 'Scalable pipeline', 'Platform-agnostic strategies'],
      },
      {
        name: 'Influencer Marketing',
        desc: 'Authentic partnerships with creators who genuinely reach your audience — from micro-influencers to national campaigns.',
        outcomes: ['Brand awareness lift', 'UGC content library', 'Conversion-tracked campaigns'],
      },
      {
        name: 'Affiliate Marketing (GPay / CRED / PhonePe / Paytm)',
        desc: "Performance-only distribution through India's leading fintech platforms — pay only for results, not impressions.",
        outcomes: ['Zero upfront media cost', 'Qualified new-user acquisition', 'Platform-native discovery'],
      },
    ],
  },
  {
    id: 'creative',
    icon: Palette,
    number: '03',
    title: 'Creative',
    tagline: 'Ideas with impact — creative that performs as well as it looks.',
    description:
      'Great performance needs great creative. Our in-house creative team produces content, campaigns, and communication that earns attention and drives action — without compromising brand integrity.',
    services: [
      {
        name: 'Content Marketing',
        desc: 'Long-form content strategies that build authority, educate your audience, and feed your SEO and social channels with high-quality material.',
        outcomes: ['Organic traffic growth', 'Thought leadership positioning', 'Lead generation through content'],
      },
      {
        name: 'Content Creation',
        desc: 'End-to-end content production — video, photography, copy, and design — crafted for the right platform and audience.',
        outcomes: ['Platform-native formats', 'High-volume output', 'Consistent brand voice'],
      },
      {
        name: 'Creative Communication',
        desc: 'From ad copy to brand manifestos — we craft messaging that resonates, differentiates, and drives response.',
        outcomes: ['Higher CTRs on paid', 'Stronger brand recall', 'Unified messaging framework'],
      },
      {
        name: 'Strategy',
        desc: 'Brand positioning, go-to-market planning, and audience strategy — the thinking that makes every other service work harder.',
        outcomes: ['Clear brand positioning', 'GTM roadmap', 'Audience personas & messaging map'],
      },
    ],
  },
];

function ServiceAccordion({ service }: { service: typeof serviceCategories[0]['services'][0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-900 font-medium" style={{ fontFamily: 'Poppins' }}>
          {service.name}
        </span>
        <ChevronDown
          size={18}
          className={`text-gray-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 border-t border-gray-100">
          <p className="text-gray-500 text-sm leading-relaxed mt-4 mb-4">{service.desc}</p>
          <div className="flex flex-wrap gap-2">
            {service.outcomes.map((outcome) => (
              <span
                key={outcome}
                className="bg-[#E8231A]/8 text-[#E8231A] text-xs font-medium px-3 py-1 rounded-full border border-[#E8231A]/15"
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ category, alt }: { category: typeof serviceCategories[0]; alt: boolean }) {
  const section = useInView(0.05);
  return (
    <section
      id={category.id}
      className={`py-24 px-6 lg:px-8 border-t border-gray-200 ${alt ? 'bg-gray-50' : 'bg-white'}`}
      ref={section.ref}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start transition-all duration-700 ${
            section.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left sticky info */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E8231A]/8 rounded-lg flex items-center justify-center">
                <category.icon size={18} className="text-[#E8231A]" />
              </div>
              <span className="text-gray-200 text-3xl font-bold" style={{ fontFamily: 'Poppins' }}>
                {category.number}
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'Poppins' }}
            >
              {category.title}
            </h2>
            <p className="text-[#E8231A] text-sm font-medium mb-4">{category.tagline}</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">{category.description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-5 py-3 rounded-full hover:border-[#E8231A]/30 hover:shadow-md transition-all"
            >
              Get a Quote <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Right accordion */}
          <div className="space-y-3">
            {category.services.map((service) => (
              <ServiceAccordion key={service.name} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const hero = useInView(0.1);

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden bg-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div
          ref={hero.ref}
          className={`relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-24 transition-all duration-1000 ${
            hero.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">Our Services</p>
          <h1
            className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8 max-w-4xl"
            style={{ fontFamily: 'Poppins' }}
          >
            Everything your
            <br />
            brand needs,
            <br />
            <span className="text-[#E8231A]">under one roof.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
            Three service pillars, 15+ capabilities, one integrated team. No silos, no gaps.
          </p>
        </div>
      </section>

      {/* ══════════════ CATEGORIES ══════════════ */}
      {serviceCategories.map((category, i) => (
        <CategorySection key={category.id} category={category} alt={i % 2 !== 0} />
      ))}

      {/* ══════════════ CTA ══════════════ */}
      <section className="py-28 px-6 lg:px-8 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Not sure where to start?
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Let&apos;s find your
            <br />
            growth gap.
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll audit your current marketing setup and tell you exactly which services will move the needle most.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-semibold px-10 py-5 rounded-full hover:bg-gray-900 transition-colors duration-200"
          >
            Book a Free Audit <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
