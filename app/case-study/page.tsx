'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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

const categories = ['All', 'Organic Marketing', 'Demand Generation', 'Creative'];

const caseStudies = [
  {
    id: 1,
    client: 'D2C Fashion Brand',
    category: 'Demand Generation',
    title: '4.2x ROAS in 90 days with performance-led creative',
    desc: 'A struggling D2C fashion label was burning budget on Meta with no returns. We rebuilt their funnel, introduced UGC-style creative, and scaled to ₹50L/month profitable spend.',
    metrics: [{ label: 'ROAS', value: '4.2x' }, { label: 'Revenue Growth', value: '+280%' }, { label: 'CAC Reduction', value: '-42%' }],
    tag: 'Featured',
    accent: '#E8231A',
  },
  {
    id: 2,
    client: 'B2B SaaS',
    category: 'Organic Marketing',
    title: 'From 500 to 15,000 monthly organic visitors in 6 months',
    desc: 'A B2B SaaS startup with zero organic presence needed to build pipeline without depending entirely on paid. Our SEO and content strategy delivered 30x traffic growth.',
    metrics: [{ label: 'Traffic Growth', value: '30x' }, { label: 'Organic Leads', value: '+320%' }, { label: 'Domain Rating', value: '42 → 67' }],
    tag: 'SEO',
    accent: '#E8231A',
  },
  {
    id: 3,
    client: 'E-commerce FMCG',
    category: 'Creative',
    title: 'Brand refresh that increased engagement by 3x across social',
    desc: 'An established FMCG brand was invisible on social despite a large following. A creative overhaul — new visual identity, content system, and tone of voice — drove massive organic engagement.',
    metrics: [{ label: 'Engagement Rate', value: '3.1x' }, { label: 'Follower Growth', value: '+85K' }, { label: 'UGC Generated', value: '2,000+' }],
    tag: 'Creative',
    accent: '#E8231A',
  },
  {
    id: 4,
    client: 'Fintech App',
    category: 'Demand Generation',
    title: 'Affiliate-led acquisition: 50,000 users in 3 months via CRED & GPay',
    desc: 'A fintech startup needed rapid user acquisition. We built a performance affiliate program on CRED, GPay, and PhonePe — acquiring 50K qualified users at ₹18 CAC.',
    metrics: [{ label: 'Users Acquired', value: '50K' }, { label: 'CAC', value: '₹18' }, { label: 'Activation Rate', value: '67%' }],
    tag: 'Affiliate',
    accent: '#E8231A',
  },
  {
    id: 5,
    client: 'Luxury Skincare',
    category: 'Organic Marketing',
    title: 'CRO optimisation: +68% checkout completion rate',
    desc: 'A premium skincare brand had strong traffic but a leaky funnel. Through rigorous CRO testing — from product pages to checkout — we improved their conversion rate significantly.',
    metrics: [{ label: 'Checkout Rate', value: '+68%' }, { label: 'AOV', value: '+22%' }, { label: 'Revenue Impact', value: '+₹1.2Cr' }],
    tag: 'CRO',
    accent: '#E8231A',
  },
  {
    id: 6,
    client: 'EdTech Platform',
    category: 'Demand Generation',
    title: 'Programmatic campaign delivers 1M reach at ₹0.4 CPM',
    desc: 'An edtech platform needed affordable brand awareness at scale. DV360 programmatic campaigns delivered unparalleled reach with premium placements at budget-friendly CPMs.',
    metrics: [{ label: 'Total Reach', value: '1M+' }, { label: 'CPM', value: '₹0.4' }, { label: 'Brand Recall Lift', value: '+34%' }],
    tag: 'Programmatic',
    accent: '#E8231A',
  },
];

export default function CaseStudyPage() {
  const hero = useInView(0.1);
  const grid = useInView(0.05);
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? caseStudies : caseStudies.filter((c) => c.category === active);

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-white">
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
          className={`relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 transition-all duration-1000 ${
            hero.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">Case Studies</p>
          <h1
            className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8 max-w-4xl"
            style={{ fontFamily: 'Poppins' }}
          >
            Results that
            <br />
            <span className="text-[#E8231A]">speak</span> for
            <br />
            themselves.
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
            Real brands, real challenges, real outcomes. Here&apos;s what 360° thinking looks like in practice.
          </p>
        </div>
      </section>

      {/* ══════════════ FILTERS ══════════════ */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center gap-3 overflow-x-auto horizontal-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-[#E8231A] text-white'
                  : 'bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ══════════════ GRID ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-white" ref={grid.ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((study, i) => (
              <div
                key={study.id}
                className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#E8231A]/25 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col ${
                  grid.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/*
                  IMAGE SLOT — replace inner div with:
                  <Image src={study.image} alt={study.client} fill className="object-cover" />
                  Recommended: 800×480px brand/campaign screenshot
                */}
                <div className="h-52 relative overflow-hidden bg-gray-50">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{ background: `radial-gradient(ellipse at 70% 30%, ${study.accent} 0%, transparent 60%)` }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-300 text-xs uppercase tracking-widest">Add image</span>
                  </div>
                  {/* Bottom tag row */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-gray-50 to-transparent">
                    <span className="bg-[#E8231A]/10 text-[#E8231A] text-xs font-semibold px-3 py-1 rounded-full border border-[#E8231A]/15">
                      {study.tag}
                    </span>
                    <span className="text-gray-400 text-xs">{study.category}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    {study.client}
                  </p>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-3 leading-tight"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {study.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{study.desc}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                        <div
                          className="text-[#E8231A] font-bold text-sm mb-0.5"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          {m.value}
                        </div>
                        <div className="text-gray-400 text-xs leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-1.5 text-[#E8231A] text-sm font-medium group-hover:gap-2.5 transition-all">
                    Read Case Study <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-300">No case studies in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Be our next success story
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Your results could
            <br />
            be next.
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
            Let&apos;s talk about what growth looks like for your brand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-semibold px-10 py-5 rounded-full hover:bg-gray-900 transition-colors duration-200"
          >
            Start a Conversation <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
