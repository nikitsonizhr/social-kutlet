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

const categories = ['All', 'D2C & E-commerce', 'FMCG & Food', 'Beauty & Lifestyle', 'F&B & Healthcare'];

const caseStudies = [
  {
    id: 1,
    slug: 'two-brothers-organic-farms',
    client: 'Two Brothers Organic Farms',
    category: 'FMCG & Food',
    title: '8X revenue growth during a high-stakes New Year sale',
    desc: 'We built a full-funnel performance system — scaling Performance Max and Shopping campaigns 120%, deploying video + discovery prospecting, and segmenting high-intent audiences — to deliver exponential growth while improving efficiency.',
    metrics: [{ label: 'Revenue Growth', value: '8X' }, { label: 'User Acquisition', value: '5.5X' }, { label: 'ROAS Improvement', value: '+60%' }],
    tag: 'Performance Marketing',
  },
  {
    id: 2,
    slug: 'adil-qadri',
    client: 'Adil Qadri — Shark Tank Featured',
    category: 'Beauty & Lifestyle',
    title: '800% ad spend scale with 170% ROAS improvement',
    desc: "Discovery-led scaling with founder-driven and vernacular content enabled high-growth, efficient scaling for India's largest Shark Tank featured attar and fragrance brand.",
    metrics: [{ label: 'Ad Spend Scale', value: '+800%' }, { label: 'ROAS Improvement', value: '+170%' }, { label: 'Conversions', value: '125X' }],
    tag: 'Demand Generation',
  },
  {
    id: 3,
    slug: 'neuberg-diagnostics',
    client: 'Neuberg Diagnostics',
    category: 'F&B & Healthcare',
    title: '55% lead growth with 24% CPL reduction across 5 cities',
    desc: 'A Google-first, intent-led strategy across Bangalore, Chennai, Mumbai, Kolkata, and Pune built a scalable, city-wise lead engine — consistently improving CPL, registration rates, and revenue over six months.',
    metrics: [{ label: 'Lead Growth', value: '+55%' }, { label: 'CPL Reduction', value: '-24%' }, { label: 'Revenue Growth', value: '+43%' }],
    tag: 'Healthcare Lead Gen',
  },
  {
    id: 4,
    slug: 'anveshan',
    client: 'Anveshan',
    category: 'FMCG & Food',
    title: '66% order volume growth through category expansion strategy',
    desc: "We launched Performance Max campaigns with shopping feeds, introduced a sampler kit strategy to drive cold-pressed oil trials, and built a high-performance retargeting funnel for India's largest ghee and oil brand.",
    metrics: [{ label: 'Order Volume', value: '+66%' }, { label: 'Category Revenue', value: '+33%' }, { label: 'Ad Spend Scale', value: '+20%' }],
    tag: 'Performance Marketing',
  },
  {
    id: 5,
    slug: 'eggoz',
    client: 'Eggoz',
    category: 'FMCG & Food',
    title: '30 million users reached with high-frequency video strategy',
    desc: "We deployed video views and reach campaigns with a high-frequency targeting strategy, combined with sequential storytelling and remarketing, to drive brand recall for India's largest egg and poultry brand.",
    metrics: [{ label: 'Users Reached', value: '30M' }, { label: 'Avg Frequency', value: '8x' }, { label: 'Market Coverage', value: 'Delhi + Bangalore' }],
    tag: 'Brand Awareness',
  },
  {
    id: 6,
    slug: 'phool',
    client: 'Phool',
    category: 'D2C & E-commerce',
    title: '24% revenue growth through AOV and acquisition strategy',
    desc: "We focused on new user acquisition, introduced bundled gifting combinations to improve AOV, and leveraged brand collaborations and retargeting to scale India's largest digital-first fragrance and incense brand.",
    metrics: [{ label: 'Revenue Growth', value: '+24%' }, { label: 'AOV Improvement', value: '+22%' }, { label: 'CAC Improvement', value: '-19%' }],
    tag: 'D2C Growth',
  },
  {
    id: 7,
    slug: 'bombay-sweet-shop',
    client: 'Bombay Sweet Shop',
    category: 'FMCG & Food',
    title: '1,300 leads generated with 32.6% qualification rate',
    desc: 'We built a clear brand persona and audience segmentation across corporate, wedding, and personal gifting cohorts — running lead generation and retargeting campaigns across Meta and Google for this premium gifting brand.',
    metrics: [{ label: 'Leads Generated', value: '1,300' }, { label: 'Qualification Rate', value: '32.6%' }, { label: 'Lead Quality', value: 'High' }],
    tag: 'Lead Generation',
  },
  {
    id: 8,
    slug: 'foxtale',
    client: 'Foxtale',
    category: 'Beauty & Lifestyle',
    title: '200% ad spend scale with improved ROAS on Google Ads',
    desc: 'We restructured Performance Max by separating assets, launching dedicated display campaigns, and introducing a multi-campaign structure — enabling aggressive scale while improving ROAS for this D2C skincare brand.',
    metrics: [{ label: 'Ad Spend Scale', value: '+200%' }, { label: 'ROAS Improvement', value: '+10%' }, { label: 'Creative Control', value: 'Enhanced' }],
    tag: 'Google Ads',
  },
  {
    id: 9,
    slug: 'tata-simply-better',
    client: 'Tata Simply Better',
    category: 'FMCG & Food',
    title: '25–30% MoM sales growth with 2X order volume in 6 months',
    desc: 'We implemented a full-funnel multi-channel performance system, deployed a Test & Learn model, built seasonality-led GTM plans, and activated vernacular creatives across key regions for this cold-pressed oils brand.',
    metrics: [{ label: 'MoM Sales Growth', value: '25–30%' }, { label: 'Order Volume', value: '2X' }, { label: 'AOV Uplift', value: '+20%' }],
    tag: 'FMCG Performance',
  },
  {
    id: 10,
    slug: 'jodi-life',
    client: 'Jodi Life',
    category: 'D2C & E-commerce',
    title: '71% CAC reduction for a premium handcrafted fashion label',
    desc: 'A continuous Test & Learn methodology, structured funnel marketing, and story-driven creatives enabled Jodi Life to significantly reduce acquisition costs, grow revenue, and expand across India and 50+ countries.',
    metrics: [{ label: 'CAC Reduction', value: '-71%' }, { label: 'Revenue Growth', value: '+60%' }, { label: 'AOV Increase', value: '+32%' }],
    tag: 'Fashion & Lifestyle',
  },
  {
    id: 11,
    slug: 'koko',
    client: 'KOKO — Multi-City Fine Dining',
    category: 'F&B & Healthcare',
    title: '68% engagement growth and 3.2X reach across 4 city markets',
    desc: 'We built aspirational content pillars, ran city-specific influencer campaigns, and deployed precision lead capture for reservations — helping KOKO attract the right diners and build momentum for its Goregaon launch.',
    metrics: [{ label: 'Engagement Growth', value: '+68%' }, { label: 'Reach Growth', value: '3.2X' }, { label: 'Lead Quality Uplift', value: '+74%' }],
    tag: 'F&B Marketing',
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
          className={`relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 md:pt-40 pb-20 transition-all duration-1000 ${
            hero.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-gray-400 text-xs font-extrabold uppercase tracking-widest mb-6">Case Studies</p>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-[0.9] tracking-tight mb-8 max-w-4xl"
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center gap-3 overflow-x-auto">
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
      <section className="py-16 px-6 lg:px-8 bg-white" ref={grid.ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((study, i) => (
              <div
                key={study.id}
                className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#E8231A]/25 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col ${
                  grid.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Image / placeholder */}
                <div className="h-48 relative overflow-hidden bg-gray-50">
                  <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(ellipse at 70% 30%, #E8231A 0%, transparent 60%)' }} />
                  <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-gray-50 to-transparent">
                    <span className="bg-[#E8231A]/10 text-[#E8231A] text-xs font-extrabold px-3 py-1 rounded-full border border-[#E8231A]/15">
                      {study.tag}
                    </span>
                    <span className="text-gray-400 text-xs">{study.category}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-lg font-extrabold text-gray-900 mb-3 leading-tight"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {study.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{study.desc}</p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                        <div className="text-[#E8231A] font-extrabold text-sm mb-0.5" style={{ fontFamily: 'Poppins' }}>
                          {m.value}
                        </div>
                        <div className="text-gray-400 text-[10px] leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/case-study/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#E8231A] text-sm font-medium group-hover:gap-2.5 transition-all"
                  >
                    Read Case Study <ArrowUpRight size={14} />
                  </Link>
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
      <section className="py-20 px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs font-extrabold uppercase tracking-widest mb-6">
            Be our next success story
          </p>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
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
            className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-black text-lg px-10 py-5 rounded-full cta-blink hover:bg-gray-900 transition-colors duration-200"
          >
            Start a Conversation <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
