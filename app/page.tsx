'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight, TrendingUp, Target, Palette,
  CheckCircle2, AlertCircle, BarChart2, Repeat2,
  ShieldOff, Zap, Map, TrendingDown, Users,
} from 'lucide-react';

/* ── intersection-observer hook ── */
function useInView(threshold = 0.15): [(node: Element | null) => void, boolean] {
  const [inView, setInView] = useState(false);
  const ref = useCallback((node: Element | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(node);
  }, [threshold]);
  return [ref, inView];
}


/* ── Hero Carousel ── */
const carouselSlides = [
  {
    client: 'Two Brothers Organic Farms',
    category: 'Performance Marketing',
    headline: '8X Revenue',
    sub: 'during New Year sale',
    metrics: [
      { label: 'User Acquisition', value: '5.5X' },
      { label: 'ROAS Improvement', value: '+60%' },
    ],
    image: '/case-studies/perfora-1.jpg',
  },
  {
    client: 'Adil Qadri — Shark Tank Featured',
    category: 'Demand Generation',
    headline: '+170% ROAS',
    sub: 'at 800% ad spend scale',
    metrics: [
      { label: 'Conversions', value: '125X' },
      { label: 'CAC Reduction', value: '-40%' },
    ],
    image: '/case-studies/perfora-2.jpg',
  },
  {
    client: 'Neuberg Diagnostics',
    category: 'Healthcare Lead Gen',
    headline: '+55% Leads',
    sub: 'over 6 months',
    metrics: [
      { label: 'CPL Reduction', value: '-24%' },
      { label: 'Revenue Growth', value: '+43%' },
    ],
    image: '/case-studies/perfora-3.jpg',
  },
];

function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[460px]">
      <div className="grid mb-5">
        {carouselSlides.map((slide, i) => (
          <div
            key={i}
            className={`col-start-1 row-start-1 transition-all duration-700 ${
              i === active
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-[0.97] pointer-events-none'
            }`}
          >
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-2xl shadow-black/10 overflow-hidden">
              <div className="relative h-64 bg-[#F8F8F8] overflow-hidden">
                {slide.image
                  ? <Image src={slide.image} alt={slide.client} fill className="object-cover" />
                  : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-gray-200/60 flex items-center justify-center">
                        <div className="w-6 h-6 rounded bg-gray-300/80" />
                      </div>
                    </div>
                  )
                }
                <div className="absolute top-4 left-4">
                  <span className="bg-white/85 backdrop-blur-sm text-[#E8231A] text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#E8231A]/20 shadow-sm">
                    {slide.category}
                  </span>
                </div>
              </div>

              <div className="px-6 pt-5 pb-6">
                <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-widest mb-2">{slide.client}</p>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-[42px] font-bold leading-none text-gray-900" style={{ fontFamily: 'Poppins' }}>{slide.headline}</span>
                  <span className="text-gray-400 text-sm">{slide.sub}</span>
                </div>
                <div className="flex gap-2.5">
                  {slide.metrics.map((m) => (
                    <div key={m.label} className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3">
                      <p className="text-[#E8231A] font-bold text-base leading-none mb-1.5" style={{ fontFamily: 'Poppins' }}>{m.value}</p>
                      <p className="text-gray-400 text-[10px] leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`transition-all duration-300 rounded-full ${
              i === active ? 'w-7 h-2 bg-[#E8231A]' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── USP Marquee ── */
const usps = [
  'Trusted by 50+ Active Brands',
  'Data-Driven',
  'Creative-First. Performance-Driven. Revenue-Obsessed.',
  'Full-Funnel Growth Engineering',
  'Focus on Real Business Outcomes',
  '15+ Years of Brand Building Experience',
  'Building Sustainable Growth Frames',
];

function Marquee() {
  return (
    <div className="overflow-hidden bg-[#0A0A0A] py-4">
      <div className="flex gap-0 whitespace-nowrap" style={{ animation: 'marquee 28s linear infinite' }}>
        {[...usps, ...usps].map((usp, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-8 text-sm font-medium text-white/70">
            <span className="w-1.5 h-1.5 bg-[#E8231A] rounded-full shrink-0" />
            {usp}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

const stats = [
  { display: '15+', label: 'Years of Experience' },
  { display: '₹100Cr+', label: 'Ad Spends Managed' },
  { display: '12+', label: 'Industries Served' },
  { display: '3', label: 'Platform Certifications' },
];

const problems = [
  { icon: Target,      text: 'Establishing Product Market Fit (PMF)' },
  { icon: TrendingDown, text: 'Terrible ROAS with no improvement in sight' },
  { icon: BarChart2,   text: 'No scalability — revenue constant month on month' },
  { icon: AlertCircle, text: 'Not reaching breakeven on marketing or product' },
  { icon: ShieldOff,   text: 'Lack of accountability from past agencies' },
  { icon: Zap,         text: 'Ad creative fatigue hurting performance' },
  { icon: Map,         text: 'No structured digital GTM strategy for new launches' },
  { icon: Repeat2,     text: 'Unable to drive demand or validate new offerings' },
];

const whyUs = [
  'Performance-driven ad campaigns & strategies',
  'Platform-specific content & ad expertise',
  'Creative that grabs attention and converts',
  'Data-backed decisions & continuous optimisation',
  'Consistent brand storytelling across platforms',
  'End-to-end social media management',
  'Transparent reporting & clear communication',
  'Agile, trend-responsive execution',
  'Growth-focused partnership mindset',
];

const services = [
  {
    icon: TrendingUp,
    tag: '01',
    title: 'Organic Marketing & Traffic Growth',
    desc: 'Build compound growth engines that work 24/7 — SEO, CRO, social, and web that attract, convert, and retain.',
    items: ['CRO Services', 'Website Development', 'Social Media Marketing', 'SEO Services'],
    href: '/services#organic',
  },
  {
    icon: Target,
    tag: '02',
    title: 'Demand Generation',
    desc: 'Precision full-funnel performance campaigns across every platform — from awareness to acquisition.',
    items: ['Retention Marketing', 'Programmatic (DV360)', 'Google / Meta / Lead Gen', 'Influencer & Affiliate'],
    href: '/services#demand',
  },
  {
    icon: Palette,
    tag: '03',
    title: 'In-Depth Brand & Creative Strategy',
    desc: 'Breakthrough creative and strategic thinking that builds brand equity while driving measurable outcomes.',
    items: ['Content Marketing', 'Content Creation', 'Creative Communication', 'Brand Strategy'],
    href: '/services#creative',
  },
];

const industries = [
  { label: 'D2C & E-commerce', sub: 'From launch to scale' },
  { label: 'FMCG & Retail', sub: 'Brand + shelf presence' },
  { label: 'Fintech & BFSI', sub: 'Regulated, performance-led' },
  { label: 'SaaS & Tech', sub: 'Pipeline + product-led growth' },
  { label: 'Real Estate', sub: 'Lead gen + brand trust' },
  { label: 'Healthcare', sub: 'Compliant, patient-centric' },
];

const testimonials = [
  {
    quote: 'Social Kutlet is the first agency that explained our numbers in terms of business impact, not marketing metrics.',
    role: 'Founder',
    company: 'D2C Skincare Brand, Mumbai',
  },
  {
    quote: 'They rebuilt our entire Meta funnel in 6 weeks. The ROAS improvement was immediate and held for 8 months.',
    role: 'CMO',
    company: 'Consumer Electronics Brand',
  },
  {
    quote: "What sets them apart is that they push back when a strategy isn't right. Most agencies just execute. These guys think.",
    role: 'Growth Lead',
    company: 'Series A Fintech Startup',
  },
];

const featuredCaseStudies = [
  {
    id: 1,
    client: 'Two Brothers Organic Farms',
    category: 'Performance Marketing',
    title: '8X revenue growth during the New Year sale period',
    desc: 'We built a full-funnel Performance Max and Shopping system, segmented high-intent audiences, and deployed aggressive scaling — delivering exponential growth while improving efficiency.',
    metrics: [{ label: 'Revenue Growth', value: '8X' }, { label: 'User Acquisition', value: '5.5X' }, { label: 'ROAS Improvement', value: '+60%' }],
    accent: '#E8231A',
  },
  {
    id: 2,
    client: 'Adil Qadri — Shark Tank Featured',
    category: 'Demand Generation',
    title: '800% ad spend scale with 170% ROAS improvement',
    desc: 'Discovery-led scaling with founder-driven and vernacular content enabled high-growth, efficient scaling for India\'s largest Shark Tank featured attar & fragrance brand.',
    metrics: [{ label: 'Ad Spend Scale', value: '+800%' }, { label: 'ROAS Improvement', value: '+170%' }, { label: 'Conversions', value: '125X' }],
    accent: '#E8231A',
  },
  {
    id: 3,
    client: 'Neuberg Diagnostics',
    category: 'Healthcare Lead Gen',
    title: '55% lead growth with 24% CPL reduction in 6 months',
    desc: 'A Google-first, intent-led strategy across 5 city markets with Meta for awareness built a scalable lead engine — consistently improving CPL, registration rates, and revenue.',
    metrics: [{ label: 'Lead Growth', value: '+55%' }, { label: 'CPL Reduction', value: '-24%' }, { label: 'Revenue Growth', value: '+43%' }],
    accent: '#E8231A',
  },
];

export default function Home() {
  const [heroRef, heroInView]           = useInView(0.1);
  const [statsRef, statsInView]         = useInView(0.1);
  const [defineRef, defineInView]       = useInView(0.1);
  const [partnersRef, partnersInView]   = useInView(0.1);
  const [problemsRef, problemsInView]   = useInView(0.1);
  const [whyRef, whyInView]             = useInView(0.1);
  const [servicesRef, servicesInView]   = useInView(0.1);
  const [industriesRef, industriesInView] = useInView(0.1);
  const [caseRef, caseInView]           = useInView(0.1);
  const [testimonialsRef, testimonialsInView] = useInView(0.1);

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle, #E8231A 0%, transparent 70%)' }} />

        <div
          ref={heroRef}
          className={`relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8231A]/8 border border-[#E8231A]/15 text-[#E8231A] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 bg-[#E8231A] rounded-full animate-pulse" />
              360° Growth Partners
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-6" style={{ fontFamily: 'Poppins' }}>
              Your <span className="whitespace-nowrap">End-to-End</span>
              <br />
              Growth Partners
              <br />
              <span className="text-[#E8231A]">for Scaling</span>
              <br />
              and Driving Results.
            </h1>

            <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-10" style={{ fontFamily: 'Inter' }}>
              From performance marketing and organic growth to creative strategy and influencer — one partner, every channel, one outcome.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/services" className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition-colors duration-200 text-base">
                Our Services <ArrowUpRight size={18} />
              </Link>
              <Link href="/case-study" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-4 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-base">
                See How We&apos;ve Driven Results
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <HeroCarousel />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <div className="w-px h-12 bg-gradient-to-b from-[#E8231A]/40 to-transparent" />
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* ══════════════ MARQUEE ══════════════ */}
      <Marquee />

      {/* ══════════════ STATS ══════════════ */}
      <section className="border-y border-gray-200 bg-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-10 px-8 transition-all duration-700 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                  {stat.display}
                </div>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY SOCIAL KUTLET ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-white" ref={defineRef}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${defineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Why Social Kutlet</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Poppins' }}>
              Brand builders
              <br />
              at <span className="text-[#E8231A]">heart.</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8 text-base">
              <p>
                At Social Kutlet, we are brand builders at heart, designing creative-first, performance-led growth systems that deliver.
              </p>
              <p>
                We partner with brands to grow digitally — combining performance marketing across Meta and Google, quick commerce expansion, and conversion-focused e-commerce experiences to drive scalable profitable revenue, stronger ROAS, amplify AOV and maintain long-term customer relationships.
              </p>
              <p>
                We focus on turning strategy into results with precision, speed, and accountability.
              </p>
              <p className="font-semibold text-gray-800">
                We don&apos;t see ourselves as just partners; we embed ourselves into your brand&apos;s journey, working as an extended team to create meaningful growth and shared success.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition-colors duration-200">
              Dive into Our Services <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className={`grid grid-cols-3 gap-3 transition-all duration-700 delay-200 ${defineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { label: 'Creative-First',   sub: 'Performance-Driven' },
              { label: 'Revenue-Obsessed', sub: 'ROI Focused' },
              { label: 'Full-Funnel',      sub: 'Growth Engineering' },
              { label: 'Data-Driven',      sub: 'Insight-Backed' },
              { label: 'Brand-Native',     sub: 'Extended Team' },
              { label: '360° Coverage',    sub: 'One Roof' },
              { label: 'Transparent',      sub: 'Clear Reporting' },
              { label: 'Agile',            sub: 'Trend-Responsive' },
              { label: 'Growth-Focused',   sub: 'Partnership Mindset' },
            ].map((card, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-[#E8231A]/25 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-200 flex flex-col gap-1">
                <div className="w-2 h-2 bg-[#E8231A] rounded-full mb-2" />
                <p className="text-gray-900 font-bold text-sm leading-snug" style={{ fontFamily: 'Poppins' }}>{card.label}</p>
                <p className="text-gray-500 text-xs">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TRUSTED PARTNERS ══════════════ */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 border-y border-gray-200" ref={partnersRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-10 transition-all duration-700 ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Our Trusted Partners</p>
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>
              Backed by the world&apos;s leading platforms.
            </h2>
          </div>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-200 ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { src: '/logos/google-logo.webp', alt: 'Google Premier Partner', tag: 'Premier Partner' },
              { src: '/logos/meta-logo.png',    alt: 'Meta Business Partner',  tag: 'Business Partner' },
              { src: '/logos/shopify-logo.png', alt: 'Shopify Partner',        tag: 'Partner' },
            ].map(({ src, alt, tag }) => (
              <div
                key={alt}
                className="bg-white border border-gray-200 rounded-2xl px-8 py-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all w-[220px]"
              >
                <div className="w-[120px] h-[36px] flex items-center justify-center">
                  <Image src={src} alt={alt} width={120} height={36} className="object-contain w-full h-full" />
                </div>
                <span className="text-[#E8231A] text-[10px] font-semibold uppercase tracking-widest border border-[#E8231A]/20 bg-[#E8231A]/6 px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PROBLEMS WE SOLVE ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-white" ref={problemsRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 max-w-2xl transition-all duration-700 ${problemsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Sound Familiar?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Poppins' }}>
              If your brand is facing
              <br />
              these challenges—
              <br />
              <span className="text-[#E8231A]">you&apos;re in the right place.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map((problem, i) => (
              <div
                key={i}
                className={`bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#E8231A]/20 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-500 ${problemsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 bg-[#E8231A]/8 rounded-xl flex items-center justify-center mb-4">
                  <problem.icon size={18} className="text-[#E8231A]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{problem.text}</p>
              </div>
            ))}
          </div>

          <div className={`mt-10 text-center transition-all duration-700 delay-300 ${problemsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition-colors duration-200">
              Let&apos;s Fix This <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ WHY CHOOSE US ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50 border-y border-gray-200" ref={whyRef}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${whyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Why Choose Us</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Poppins' }}>
              The agency
              <br />
              that does it all—
              <br />
              <span className="text-[#E8231A]">right.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Most agencies specialise in one slice. We connect every slice — organic, paid,
              and creative — into a single cohesive growth machine for your brand.
            </p>
            <Link href="/strategy" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-full hover:border-[#E8231A]/30 hover:bg-white transition-all text-sm">
              See Our Strategy <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className={`grid gap-3 transition-all duration-700 delay-200 ${whyInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {whyUs.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-[#E8231A]/20 hover:shadow-sm transition-all">
                <CheckCircle2 size={18} className="text-[#E8231A] mt-0.5 shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 transition-all duration-700 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">What We Do</p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                Three pillars.
                <br />
                One engine.
              </h2>
              <p className="text-gray-500 mt-3 text-base font-medium">Every pillar works alone, together they compound.</p>
            </div>
            <Link href="/services" className="self-start md:self-auto inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 text-sm font-medium transition-colors">
              Learn More <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#E8231A]/25 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-500 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 bg-[#E8231A]/8 rounded-xl flex items-center justify-center group-hover:bg-[#E8231A]/15 transition-colors">
                    <svc.icon size={22} className="text-[#E8231A]" />
                  </div>
                  <span className="text-gray-200 text-4xl font-bold" style={{ fontFamily: 'Poppins' }}>{svc.tag}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins' }}>{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-2 mb-8">
                  {svc.items.map((item) => (
                    <li key={item}>
                      <Link href={svc.href} className="flex items-center gap-2 text-gray-500 text-sm hover:text-[#E8231A] transition-colors">
                        <span className="w-1 h-1 bg-gray-400 rounded-full shrink-0" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="inline-flex items-center gap-1.5 text-[#E8231A] text-sm font-medium group-hover:gap-2.5 transition-all">
                  Learn More <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ INDUSTRIES WE SERVE — dark ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-[#0A0A0A]" ref={industriesRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 transition-all duration-700 ${industriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#E8231A] text-xs font-semibold uppercase tracking-widest mb-4">Industries We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins' }}>
              Deep expertise across the categories that matter.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {industries.map((ind, i) => (
              <div
                key={ind.label}
                className={`group bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-[#E8231A]/40 hover:bg-white/8 transition-all duration-300 ${industriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 bg-[#E8231A]/15 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#E8231A]/25 transition-colors">
                  <div className="w-2 h-2 bg-[#E8231A] rounded-full" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1" style={{ fontFamily: 'Poppins' }}>{ind.label}</p>
                  <p className="text-white/50 text-xs">{ind.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CASE STUDIES ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-white border-t border-gray-200" ref={caseRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 transition-all duration-700 ${caseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Case Studies</p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                Strategies that scale.
                <br />
                <span className="text-[#E8231A]">Results that last.</span>
              </h2>
              <p className="text-gray-500 mt-3 text-base font-medium">Real brand strategies. Real strategies. Real numbers.</p>
            </div>
            <Link href="/case-study" className="self-start md:self-auto inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all text-sm">
              Read Our Success Stories <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {featuredCaseStudies.map((study, i) => (
              <div
                key={study.id}
                className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#E8231A]/25 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col ${caseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-48 relative overflow-hidden">
                  <Image src={`/case-studies/perfora-${i + 1}.jpg`} alt={study.client} fill className="object-cover" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">{study.client}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Poppins' }}>{study.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{study.desc}</p>
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="bg-gray-50 rounded-lg p-2.5 text-center border border-gray-100">
                        <div className="text-[#E8231A] font-bold text-sm mb-0.5" style={{ fontFamily: 'Poppins' }}>{m.value}</div>
                        <div className="text-gray-400 text-[10px] leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link href="/case-study" className="inline-flex items-center gap-1.5 text-[#E8231A] text-sm font-medium group-hover:gap-2.5 transition-all">
                    Read Full Story <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS — dark ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-[#0A0A0A]" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 transition-all duration-700 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#E8231A] text-xs font-semibold uppercase tracking-widest mb-4">What Our Clients Say</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins' }}>
              Heard directly from the brands we work with.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`group bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col hover:border-[#E8231A]/30 hover:bg-white/8 transition-all duration-300 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-[#E8231A]/50 text-5xl font-serif leading-none mb-4">&ldquo;</span>
                <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="w-8 h-8 rounded-full bg-[#E8231A]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#E8231A] text-xs font-bold">{t.role[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.role}</p>
                    <p className="text-white/40 text-xs mt-0.5">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="py-24 px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">Ready to Scale?</p>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Poppins' }}>
            Let&apos;s build something
            <br />
            <span className="text-[#E8231A]">remarkable.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your goals and build the strategy that gets you there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-semibold px-10 py-5 rounded-full hover:bg-gray-900 transition-colors duration-200 text-base">
              Book a Call <ArrowUpRight size={18} />
            </Link>
            <Link href="/case-study" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium px-10 py-5 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-base">
              See our Work first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
