'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight, Globe, Megaphone, Sparkles, Target,
  CheckCircle2, AlertCircle, BarChart2, Repeat2,
  ShieldOff, Zap, Map, TrendingDown,
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
                  <span className="bg-white/85 backdrop-blur-sm text-[#E8231A] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#E8231A]/20 shadow-sm">
                    {slide.category}
                  </span>
                </div>
              </div>

              <div className="px-6 pt-5 pb-6">
                <p className="text-gray-400 text-[11px] font-extrabold uppercase tracking-widest mb-2">{slide.client}</p>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-[42px] font-extrabold leading-none text-gray-900" style={{ fontFamily: 'Poppins' }}>{slide.headline}</span>
                  <span className="text-gray-400 text-sm">{slide.sub}</span>
                </div>
                <div className="flex gap-2.5">
                  {slide.metrics.map((m) => (
                    <div key={m.label} className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3">
                      <p className="text-[#E8231A] font-extrabold text-base leading-none mb-1.5" style={{ fontFamily: 'Poppins' }}>{m.value}</p>
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

/* ── Brand Strip ── */
const brandClients = [
  { name: 'Alpino',                 logo: '/logos/alpino.webp' },
  { name: 'ASG Eye',                logo: '/logos/asgeye.jpeg' },
  { name: 'Baidyanath',             logo: '/logos/baidyanath.jpeg' },
  { name: 'BJP',                    logo: '/logos/bjp.png' },
  { name: 'Bloom',                  logo: '/logos/bloom.jpeg' },
  { name: 'CaratLane',              logo: '/logos/Caratlane.jpeg' },
  { name: 'Carbamide Forte',        logo: '/logos/Carbamide_Forte.webp' },
  { name: 'Carlinton',              logo: '/logos/carlinton.webp' },
  { name: 'Eat Better',             logo: '/logos/eat_better.jpeg' },
  { name: 'Emori',                  logo: '/logos/emori.webp' },
  { name: 'Enrico',                 logo: '/logos/enrico.png' },
  { name: 'Femella',                logo: '/logos/Femella.webp' },
  { name: 'Frizty Retail',          logo: '/logos/friztyretail.jpeg' },
  { name: 'Ghar Mandi',             logo: '/logos/ghar_mandi.jpeg' },
  { name: 'Ghar Mandir',            logo: '/logos/gharmandir.png' },
  { name: 'Gir Organi',             logo: '/logos/girorgani.webp' },
  { name: 'Glowtime',               logo: '/logos/glowtime.webp' },
  { name: 'Good Day',               logo: '/logos/goodday.png' },
  { name: 'Headway',                logo: '/logos/headway.png' },
  { name: 'Himalaya',               logo: '/logos/himalaya.webp' },
  { name: 'India IVF Fertility',    logo: '/logos/india_ivf_fertility.jpeg' },
  { name: 'JBL',                    logo: '/logos/JBL.webp' },
  { name: 'KOKO',                   logo: '/logos/KOKO.jpg' },
  { name: 'Lakmé',                  logo: '/logos/Lakm%C3%A9.jpg' },
  { name: 'LMJ',                    logo: '/logos/lmj.png' },
  { name: "L'Oréal",                logo: '/logos/loreal.png' },
  { name: 'Manyavar',               logo: '/logos/Manyavar.jpeg' },
  { name: 'Namhya',                 logo: '/logos/Namhya.webp' },
  { name: 'Neemans',                logo: '/logos/neemans.jpeg' },
  { name: 'Netflix',                logo: '/logos/netflix.png' },
  { name: 'Neuberg Diagnostics',    logo: '/logos/Neuberg%2B_Diagnostics_logo.png' },
  { name: 'Nova IVF',               logo: '/logos/Novaivf.png' },
  { name: 'Orimii',                 logo: '/logos/orimii.png' },
  { name: 'Origin',                 logo: '/logos/origin.jpeg' },
  { name: 'Plantbro Life Sciences', logo: '/logos/plantbro_life_sciences_logo.jpeg' },
  { name: 'Rabitat',                logo: '/logos/rabitat.png' },
  { name: 'Reequil',                logo: '/logos/Reequil.png' },
  { name: 'Shaadi.com',             logo: '/logos/shaadi_logo.png' },
  { name: 'Skullcandy',             logo: '/logos/skullcandy-logo.png' },
  { name: 'Soam',                   logo: '/logos/soam.jpeg' },
  { name: 'Sugar Fit',              logo: '/logos/Sugar-fit.webp' },
  { name: 'Sujatra',                logo: '/logos/sujatra.jpeg' },
  { name: 'Swiggy',                 logo: '/logos/swiggy.webp' },
  { name: 'Truly Desi',             logo: '/logos/truly_desi_logo%20(1).jpeg' },
  { name: 'Ugaoo',                  logo: '/logos/ugaoo.png' },
  { name: 'Vaadi',                  logo: '/logos/vaadi-logo-transparent-back-1000x1000.webp' },
];

// Rotate the array by `offset` so each row starts at a different brand
function rotate<T>(arr: T[], offset: number): T[] {
  return [...arr.slice(offset), ...arr.slice(0, offset)];
}

function BrandRow({ brands, direction, duration }: {
  brands: typeof brandClients;
  direction: 'left' | 'right';
  duration: number;
}) {
  // Triplicate for a seamless infinite loop
  const track = [...brands, ...brands, ...brands];
  const anim = direction === 'left' ? 'brandLeft' : 'brandRight';
  return (
    <div className="relative py-3">
      <div
        className="flex items-center gap-12 whitespace-nowrap"
        style={{ animation: `${anim} ${duration}s linear infinite`, willChange: 'transform' }}
      >
        {track.map((brand, i) => (
          // Fixed slot: every logo lives in the same 120 × 44 px box
          <div
            key={i}
            className="inline-flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            style={{ width: 160, height: 60 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.logo}
              alt={brand.name}
              loading="lazy"
              draggable={false}
              className="w-full h-full object-contain select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandStrip() {
  const row1 = rotate(brandClients, 0);    // left  → starts at brand 0
  const row2 = rotate(brandClients, 15);   // right → starts at brand 15
  const row3 = rotate(brandClients, 30);   // left  → starts at brand 30
  return (
    <section className="py-10 bg-[#F9F9F9] border-y border-gray-200 overflow-hidden">
      <p className="text-center text-[10px] font-extrabold uppercase tracking-[0.25em] text-gray-400 mb-7">
        Trusted by 100+ brands across India
      </p>

      <div className="relative space-y-1">
        <BrandRow brands={row1} direction="left"  duration={60} />
        <BrandRow brands={row2} direction="right" duration={70} />
        <BrandRow brands={row3} direction="left"  duration={52} />

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0  w-32 bg-linear-to-r from-[#F9F9F9] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#F9F9F9] to-transparent" />
      </div>

      <style>{`
        @keyframes brandLeft  { 0% { transform: translateX(0);        } 100% { transform: translateX(-33.333%); } }
        @keyframes brandRight { 0% { transform: translateX(-33.333%); } 100% { transform: translateX(0);        } }
      `}</style>
    </section>
  );
}

const stats = [
  { display: '15+', label: 'Years of Experience' },
  { display: '₹100Cr+', label: 'Ad Spends Managed' },
  { display: '12+', label: 'Industries Served' },
  { display: '3', label: 'Platform Certifications' },
];

const problems = [
  { icon: Target,       text: 'Establishing Product Market Fit (PMF)' },
  { icon: TrendingDown, text: 'Terrible ROAS' },
  { icon: BarChart2,    text: 'No Scalability — Revenue/Orders being constant month on month' },
  { icon: AlertCircle,  text: 'Not Reaching Breakeven on Marketing/Product, etc.' },
  { icon: ShieldOff,    text: 'Lack of Accountability by past agencies' },
  { icon: Zap,          text: 'Ad creative fatigue' },
  { icon: Map,          text: 'Lack of a Structured Digital GTM Strategy for Launching New Products/Services' },
  { icon: Repeat2,      text: 'Inability to Drive Demand & Validate New Offerings Through Digital Channels' },
];

const whyUs = [
  'Performance driven ad campaigns and growth strategies',
  'Platform specific content and ad expertise',
  'Creative that grabs attention and converts',
  'Data driven decisions with continuous optimisation',
  'Consistent brand storytelling across platforms',
  'End to end social media management',
  'Transparent reporting and clear communication',
  'Agile execution that moves with trends',
  'A growth focused partnership, not just a vendor',
];

const services = [
  {
    icon: Globe,
    title: 'Organic Marketing & Traffic Growth',
    items: ['CRO Services', 'Website Development', 'Social Media Marketing', 'SEO Services'],
    href: '/services#organic',
  },
  {
    icon: Megaphone,
    title: 'Demand Generation',
    items: ['Retention Marketing', 'Programmatic (DV360)', 'Google / Meta / Lead Gen', 'Influencer & Affiliate'],
    href: '/services#demand',
  },
  {
    icon: Sparkles,
    title: 'In-Depth Brand & Creative Strategy',
    items: ['Content Marketing', 'Content Creation', 'Creative Communication', 'Brand Strategy'],
    href: '/services#creative',
  },
];

const industries = [
  'D2C & E-commerce',
  'FMCG & Retail',
  'Healthcare & Pharmacies',
  'Fintech',
  'Real Estate',
  'Edutech',
  'SaaS & Tech',
  'Travel and Hospitality',
  'Fashion & Lifestyle',
  'Beauty & Skincare',
  'Health & Wellness',
  'Homecare & Kitchen',
  'Food & Beverages',
  'Personal Care & Hygiene',
  "NGO's & Non-profits",
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight lg:leading-[0.95] tracking-tight mb-6" style={{ fontFamily: 'Poppins' }}>
              Your Growth Partners
              <br />
              for{' '}
              <span className="text-[#E8231A]">Scaling</span>
              <br />
              and{' '}
              <span className="text-[#E8231A]">Driving</span>{' '}Results.
            </h1>

            <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-10" style={{ fontFamily: 'Poppins' }}>
              From performance marketing and organic growth to creative strategy and influencer — one partner, every channel, one outcome.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
              <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-[#E8231A] text-white font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full cta-blink hover:bg-gray-900 transition-colors duration-200" style={{ fontFamily: 'Poppins' }}>
                Our Services <ArrowUpRight size={20} />
              </Link>
              <Link href="/case-study" className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200" style={{ fontFamily: 'Poppins' }}>
                View Success Stories <ArrowUpRight size={20} />
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

      {/* ══════════════ BRAND STRIP ══════════════ */}
      <BrandStrip />

      {/* ══════════════ STATS ══════════════ */}
      <section className="border-y border-gray-200 bg-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-200">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                  {stat.display}
                </div>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ BRAND BUILDERS BY HEART ══════════════ */}
      <section className="py-24 px-6 lg:px-8 bg-white" ref={defineRef}>
        <div className="max-w-7xl mx-auto">

          {/* Centred heading */}
          <div className={`text-center mb-14 transition-all duration-700 ${defineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight"
              style={{ fontFamily: 'Poppins' }}
            >
              Brand builders <span className="text-[#E8231A]">by heart.</span>
            </h2>
          </div>

          {/* 9 boxes */}
          <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 mb-14 transition-all duration-700 delay-150 ${defineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { label: 'Creative First',   sub: 'Performance Led' },
              { label: 'Revenue Focused',  sub: 'ROI Driven' },
              { label: 'Full Funnel',      sub: 'Growth Engineering' },
              { label: 'Data Backed',      sub: 'Insight Led' },
              { label: 'Brand Native',     sub: 'Extended Team' },
              { label: '360° Coverage',    sub: 'One Roof' },
              { label: 'Transparent',      sub: 'Clear Reporting' },
              { label: 'Agile',            sub: 'Trend Aware' },
              { label: 'Growth Focused',   sub: 'Partnership Mindset' },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 lg:p-8 hover:border-[#E8231A]/25 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-200 flex flex-col gap-2"
              >
                <div className="w-3 h-3 bg-[#E8231A] rounded-full mb-2" />
                <p className="text-gray-900 font-black text-xl leading-snug" style={{ fontFamily: 'Poppins' }}>{card.label}</p>
                <p className="text-gray-500 text-sm font-semibold">{card.sub}</p>
              </div>
            ))}
          </div>

          {/* Centred CTA */}
          <div className={`text-center transition-all duration-700 delay-300 ${defineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-black text-lg sm:text-xl px-8 sm:px-14 py-5 sm:py-6 rounded-full cta-blink hover:bg-gray-900 transition-colors duration-200"
              style={{ fontFamily: 'Poppins' }}
            >
              Dive into Our Services <ArrowUpRight size={20} />
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════ TRUSTED PARTNERS ══════════════ */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 border-y border-gray-200" ref={partnersRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-400 text-xs font-extrabold uppercase tracking-widest mb-4">Our Trusted Partners</p>
            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Poppins' }}>
              Backed by the world&apos;s leading platforms.
            </h2>
          </div>

          {/* Platform partners — with logos */}
          <div className={`flex flex-wrap items-center justify-center gap-4 mb-5 transition-all duration-700 delay-100 ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { src: '/logos/google-logo.webp', alt: 'Google Premier Partner', tag: 'Premier Partner',    useImg: false },
              { src: '/logos/meta-logo.png',    alt: 'Meta Business Partner',  tag: 'Business Partner',  useImg: false },
              { src: '/logos/shopify-logo.png', alt: 'Shopify Partner',        tag: 'Partner',           useImg: false },
              {
                src: 'https://acadia.io/wp-content/uploads/2024/01/Advanced-partner-badge.png',
                alt: 'Amazon Ads Advanced Partner',
                tag: 'Advanced Partner',
                useImg: true,
              },
            ].map(({ src, alt, tag, useImg }) => (
              <div
                key={alt}
                className="bg-white border border-gray-200 rounded-2xl px-8 py-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
                style={{ minWidth: 180 }}
              >
                <div className="w-[120px] h-[36px] flex items-center justify-center">
                  {useImg ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt={alt} width={120} height={36} className="object-contain w-full h-full" />
                  ) : (
                    <Image src={src} alt={alt} width={120} height={36} className="object-contain w-full h-full" />
                  )}
                </div>
                <span className="text-[#E8231A] text-[10px] font-extrabold uppercase tracking-widest border border-[#E8231A]/20 bg-[#E8231A]/6 px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
            ))}
          </div>

          {/* Technology & channel partners — text-based */}
          <div className={`flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-200 ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              'Gokwik',
              'Fastrr by Shiprocket',
              'Webengage',
              'Nitro Commerce',
              'Snapchat Ads',
              'LinkedIn Ads',
            ].map((name) => (
              <div
                key={name}
                className="bg-white border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-3 shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
              >
                <div className="w-2 h-2 bg-[#E8231A] rounded-full shrink-0" />
                <span className="text-gray-800 font-extrabold text-sm" style={{ fontFamily: 'Poppins' }}>{name}</span>
                <span className="text-[#E8231A] text-[10px] font-extrabold uppercase tracking-wider border border-[#E8231A]/20 bg-[#E8231A]/6 px-2 py-0.5 rounded-full">
                  Partner
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PROBLEMS WE SOLVE ══════════════ */}
      <section className="py-24 px-6 lg:px-8 bg-white" ref={problemsRef}>
        <div className="max-w-7xl mx-auto">

          {/* Centred heading — one line */}
          <div className={`text-center mb-14 transition-all duration-700 ${problemsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Poppins' }}
            >
              If your brand is facing these challenges
            </h2>
          </div>

          {/* Problem cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {problems.map((problem, i) => (
              <div
                key={i}
                className={`bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#E8231A]/20 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-500 ${problemsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 bg-[#E8231A]/8 rounded-xl flex items-center justify-center mb-4">
                  <problem.icon size={18} className="text-[#E8231A]" />
                </div>
                <p className="text-gray-800 text-base leading-relaxed font-bold">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* "You're in the right place" + CTA — centred */}
          <div className={`text-center space-y-8 transition-all duration-700 delay-300 ${problemsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#E8231A] leading-tight"
              style={{ fontFamily: 'Poppins' }}
            >
              You&apos;re in the right place.
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-black text-lg sm:text-xl px-8 sm:px-14 py-5 sm:py-6 rounded-full cta-blink hover:bg-gray-900 transition-colors duration-200"
              style={{ fontFamily: 'Poppins' }}
            >
              Let&apos;s Fix This <ArrowUpRight size={20} />
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════ OUR EXPERTISE ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50 border-y border-gray-200" ref={whyRef}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${whyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-gray-400 text-xs font-extrabold uppercase tracking-widest mb-4">Why Choose Us</p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Poppins' }}
            >
              Our <span className="text-[#E8231A]">Expertise.</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8 text-base font-semibold">
              Most agencies specialise in one slice. We connect every slice — organic, paid,
              and creative — into a single cohesive growth machine for your brand.
            </p>
            <Link
              href="/strategy"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-full hover:border-[#E8231A]/30 hover:bg-white transition-all text-sm"
            >
              See Our Strategy <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className={`grid gap-3 transition-all duration-700 delay-200 ${whyInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {whyUs.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-[#E8231A]/20 hover:shadow-sm transition-all">
                <CheckCircle2 size={20} className="text-[#E8231A] mt-0.5 shrink-0" />
                <p className="text-gray-800 text-base leading-relaxed font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto">

          {/* Centred heading */}
          <div className={`text-center mb-14 transition-all duration-700 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-400 text-xs font-extrabold uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900" style={{ fontFamily: 'Poppins' }}>
              Three pillars.
              <br />
              One engine.
            </h2>
            <p className="text-gray-500 mt-3 text-base font-medium">Every pillar works alone, together they compound.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`group bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col hover:border-[#E8231A]/25 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-500 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#E8231A]/8 rounded-xl flex items-center justify-center group-hover:bg-[#E8231A]/15 transition-colors mb-7">
                  <svc.icon size={26} className="text-[#E8231A]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-gray-900 mb-5" style={{ fontFamily: 'Poppins' }}>{svc.title}</h3>

                {/* Service items */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
                      <span className="w-1.5 h-1.5 bg-[#E8231A] rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Prominent CTA */}
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-[#E8231A] text-white font-black text-sm px-6 py-3 rounded-full hover:bg-gray-900 transition-colors duration-200"
                >
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

          {/* Centred, bold heading */}
          <div className={`text-center mb-12 transition-all duration-700 ${industriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
              style={{ fontFamily: 'Poppins' }}
            >
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {industries.map((ind, i) => (
              <div
                key={ind}
                className={`group bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-3 hover:border-[#E8231A]/40 hover:bg-white/8 transition-all duration-300 ${industriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-2 h-2 bg-[#E8231A] rounded-full mt-1.5 shrink-0" />
                <p className="text-white font-bold text-sm leading-snug" style={{ fontFamily: 'Poppins' }}>{ind}</p>
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
              <p className="text-gray-400 text-xs font-extrabold uppercase tracking-widest mb-4">Case Studies</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900" style={{ fontFamily: 'Poppins' }}>
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
                  <p className="text-gray-400 text-xs font-extrabold uppercase tracking-widest mb-2">{study.client}</p>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Poppins' }}>{study.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{study.desc}</p>
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="bg-gray-50 rounded-lg p-2.5 text-center border border-gray-100">
                        <div className="text-[#E8231A] font-extrabold text-sm mb-0.5" style={{ fontFamily: 'Poppins' }}>{m.value}</div>
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


{/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="py-24 px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs font-extrabold uppercase tracking-widest mb-6">Ready to Scale?</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Poppins' }}>
            Let&apos;s build something
            <br />
            <span className="text-[#E8231A]">remarkable.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your goals and build the strategy that gets you there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-black text-lg px-10 py-5 rounded-full cta-blink hover:bg-gray-900 transition-colors duration-200 text-base">
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
