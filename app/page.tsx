'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight, TrendingUp, Target, Palette,
  CheckCircle2, AlertCircle, BarChart2, Repeat2,
  ShieldOff, Zap, Map, TrendingDown, Users
} from 'lucide-react';

/* ── intersection-observer hook ── */
function useInView(threshold = 0.15) {
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

/* ── animated counter ── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.5);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Creative Hero Animation ── */
function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    let raf: number;
    const layers = el.querySelectorAll<HTMLElement>('[data-depth]');
    const animate = () => {
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth || '0');
        const tx = mouse.current.x * depth * 22;
        const ty = mouse.current.y * depth * 22;
        layer.style.transform = `translate(${tx}px, ${ty}px)`;
      });
      raf = requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', handleMove);
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener('mousemove', handleMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[520px] mx-auto select-none" aria-hidden>
      <div className="absolute inset-0 rounded-3xl" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div data-depth="0.15" className="absolute top-[8%] right-[5%] w-[62%] h-[62%] rounded-full border-2 border-[#E8231A]/20 float-a" style={{ transition: 'transform 0.08s linear' }} />
      <div data-depth="0.35" className="absolute top-[18%] left-[12%] w-[28%] h-[28%] rounded-full bg-[#E8231A]/8 border border-[#E8231A]/15 float-b" style={{ transition: 'transform 0.06s linear' }} />
      <div data-depth="0.55" className="absolute top-[52%] right-[18%] w-[10%] h-[10%] rounded-full bg-[#E8231A] float-c shadow-lg shadow-[#E8231A]/30" style={{ transition: 'transform 0.04s linear' }} />
      <div data-depth="0.2" className="absolute top-[30%] left-[25%] w-[50%] h-[50%]" style={{ transition: 'transform 0.07s linear' }}>
        <div className="w-full h-full rounded-full border-2 border-dashed border-gray-300 spin-slow" />
      </div>
      <div data-depth="0.45" className="absolute bottom-[22%] left-[10%] w-[14%] h-[14%] rounded-full bg-gray-200 float-a" style={{ animationDelay: '1s', transition: 'transform 0.05s linear' }} />
      <div data-depth="0.3" className="absolute bottom-[30%] right-[12%] w-[22%] h-[8%] rounded-lg bg-gray-100 border border-gray-200 float-b" style={{ animationDelay: '2s', transition: 'transform 0.06s linear' }} />
      <div data-depth="0.1" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center float-c" style={{ transition: 'transform 0.09s linear' }}>
        <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-xl shadow-black/5">
          <p className="text-[#E8231A] font-bold text-3xl" style={{ fontFamily: 'Poppins' }}>360°</p>
          <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">Growth Partners</p>
        </div>
      </div>
      <div data-depth="0.4" className="absolute top-[6%] left-[4%] bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-lg shadow-black/5 float-b" style={{ animationDelay: '0.5s', transition: 'transform 0.05s linear' }}>
        <p className="text-gray-900 font-bold text-sm" style={{ fontFamily: 'Poppins' }}>50+</p>
        <p className="text-gray-400 text-[10px] uppercase tracking-wider">Active Brands</p>
      </div>
      <div data-depth="0.5" className="absolute bottom-[8%] right-[4%] bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-lg shadow-black/5 float-a" style={{ animationDelay: '1.5s', transition: 'transform 0.04s linear' }}>
        <p className="text-gray-900 font-bold text-sm" style={{ fontFamily: 'Poppins' }}>15+ Yrs</p>
        <p className="text-gray-400 text-[10px] uppercase tracking-wider">Experience</p>
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
  { value: 50, suffix: '+', label: 'Active Brands' },
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 360, suffix: '°', label: 'Full-Service Coverage' },
  { value: 4, suffix: 'x', label: 'Avg. ROAS Delivered' },
];

const problems = [
  { icon: Target, text: 'Establishing Product Market Fit (PMF)' },
  { icon: TrendingDown, text: 'Terrible ROAS with no improvement in sight' },
  { icon: BarChart2, text: 'No scalability — revenue constant month on month' },
  { icon: AlertCircle, text: 'Not reaching breakeven on marketing or product' },
  { icon: ShieldOff, text: 'Lack of accountability from past agencies' },
  { icon: Zap, text: 'Ad creative fatigue hurting performance' },
  { icon: Map, text: 'No structured digital GTM strategy for new launches' },
  { icon: Repeat2, text: 'Unable to drive demand or validate new offerings' },
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

const featuredCaseStudies = [
  {
    id: 1,
    client: 'D2C Fashion Brand',
    category: 'Demand Generation',
    title: '4.2x ROAS in 90 days with performance-led creative',
    desc: 'We rebuilt a failing Meta funnel with UGC-style creative and scaled to ₹50L/month in profitable spend.',
    metrics: [{ label: 'ROAS', value: '4.2x' }, { label: 'Revenue Growth', value: '+280%' }, { label: 'CAC Reduction', value: '-42%' }],
    accent: '#E8231A',
  },
  {
    id: 2,
    client: 'B2B SaaS',
    category: 'Organic Marketing',
    title: 'From 500 to 15,000 monthly organic visitors in 6 months',
    desc: 'Our SEO and content strategy delivered 30x traffic growth and 320% more organic leads — without ad spend.',
    metrics: [{ label: 'Traffic Growth', value: '30x' }, { label: 'Organic Leads', value: '+320%' }, { label: 'Domain Rating', value: '42 → 67' }],
    accent: '#E8231A',
  },
  {
    id: 3,
    client: 'Fintech App',
    category: 'Demand Generation',
    title: '50,000 users acquired in 3 months via CRED & GPay',
    desc: 'We built a performance affiliate program on India\'s top fintech platforms — 50K qualified users at ₹18 CAC.',
    metrics: [{ label: 'Users Acquired', value: '50K' }, { label: 'CAC', value: '₹18' }, { label: 'Activation Rate', value: '67%' }],
    accent: '#E8231A',
  },
];

export default function Home() {
  const hero = useInView(0.1);
  const statsSection = useInView(0.1);
  const defineSection = useInView(0.1);
  const problemsSection = useInView(0.1);
  const whySection = useInView(0.1);
  const partnersSection = useInView(0.1);
  const servicesSection = useInView(0.1);
  const caseSection = useInView(0.1);

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle, #E8231A 0%, transparent 70%)' }} />

        <div
          ref={hero.ref}
          className={`relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-28 grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${hero.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8231A]/8 border border-[#E8231A]/15 text-[#E8231A] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-[#E8231A] rounded-full animate-pulse" />
              360° Growth Partners
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-6" style={{ fontFamily: 'Poppins' }}>
              Your End-to-End
              <br />
              Growth Partners
              <br />
              <span className="text-[#E8231A]">for Scaling</span>
              <br />
              and Driving Results.
            </h1>

            <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-10" style={{ fontFamily: 'Inter' }}>
              Every strategy is insight-driven, full-funnel, and engineered to turn attention into measurable outcomes.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/services" className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition-colors duration-200 text-base">
                Dive into Our Services <ArrowUpRight size={18} />
              </Link>
              <Link href="/case-study" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-4 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-base">
                Read Case Studies
              </Link>
            </div>
          </div>

          {/* Right: animation */}
          <div className="hidden lg:flex items-center justify-center">
            <HeroAnimation />
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
      <section className="border-b border-gray-200 bg-white" ref={statsSection.ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-12 px-8 transition-all duration-700 ${statsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                  {statsSection.inView ? <Counter target={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHAT DEFINES US ══════════════ */}
      <section className="py-28 px-6 lg:px-8 bg-white" ref={defineSection.ref}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${defineSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">What Defines Us</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Poppins' }}>
              Brand builders
              <br />
              at <span className="text-[#E8231A]">heart.</span>
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed mb-8">
              <p>
                At Social &utlet, we are brand builders at heart, designing creative-first, performance-led growth systems that deliver.
              </p>
              <p>
                We partner with brands to grow digitally — combining performance marketing across Meta and Google, quick commerce expansion, and conversion-focused e-commerce experiences to drive scalable profitable revenue, stronger ROAS, amplify AOV and maintain long-term customer relationships.
              </p>
              <p>
                We focus on turning strategy into results with precision, speed, and accountability.
              </p>
              <p className="font-medium text-gray-700">
                We don&apos;t see ourselves as just partners; we embed ourselves into your brand&apos;s journey, working as an extended team to create meaningful growth and shared success.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition-colors duration-200">
              Dive into Our Services <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className={`grid grid-cols-2 gap-3 transition-all duration-700 delay-200 ${defineSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { label: 'Creative-First', sub: 'Performance-Driven' },
              { label: 'Revenue-Obsessed', sub: 'ROI Focused' },
              { label: 'Full-Funnel', sub: 'Growth Engineering' },
              { label: 'Data-Driven', sub: 'Insight-Backed' },
              { label: 'Brand-Native', sub: 'Extended Team' },
              { label: '360° Coverage', sub: 'One Roof' },
            ].map((card, i) => (
              <div key={i} className={`bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-[#E8231A]/20 hover:bg-white transition-all ${i === 0 ? 'col-span-2' : ''}`}>
                <p className="text-gray-900 font-bold text-lg mb-1" style={{ fontFamily: 'Poppins' }}>{card.label}</p>
                <p className="text-gray-400 text-sm">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PROBLEMS WE SOLVE ══════════════ */}
      <section className="py-28 px-6 lg:px-8 bg-gray-50 border-y border-gray-200" ref={problemsSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 max-w-2xl transition-all duration-700 ${problemsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                className={`bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#E8231A]/20 hover:shadow-lg hover:shadow-black/5 transition-all duration-500 ${problemsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 bg-[#E8231A]/8 rounded-xl flex items-center justify-center mb-4">
                  <problem.icon size={18} className="text-[#E8231A]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY CHOOSE US ══════════════ */}
      <section className="py-28 px-6 lg:px-8 bg-white" ref={whySection.ref}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${whySection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Why Choose Us</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Poppins' }}>
              The agency
              <br />
              that does it all—
              <br />
              <span className="text-[#E8231A]">right.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Most agencies specialise in one slice. We connect every slice — organic, paid,
              and creative — into a single cohesive growth machine for your brand.
            </p>
            <Link href="/strategy" className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-full hover:border-[#E8231A]/30 hover:bg-white transition-all text-sm">
              See Our Strategy <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className={`grid gap-3 transition-all duration-700 delay-200 ${whySection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {whyUs.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 hover:border-[#E8231A]/20 hover:bg-white transition-all">
                <CheckCircle2 size={18} className="text-[#E8231A] mt-0.5 shrink-0" />
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TRUSTED PARTNERS ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50 border-y border-gray-200" ref={partnersSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${partnersSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Our Trusted Partners</p>
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>
              Backed by the world&apos;s leading platforms.
            </h2>
          </div>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-200 ${partnersSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { src: '/logos/google-logo.webp', alt: 'Google Premier Partner', tag: 'Premier Partner' },
              { src: '/logos/meta-logo.png',    alt: 'Meta Business Partner',  tag: 'Business Partner' },
              { src: '/logos/shopify-logo.png', alt: 'Shopify Partner',        tag: 'Partner' },
            ].map(({ src, alt, tag }) => (
              <div
                key={alt}
                className="bg-white border border-gray-200 rounded-2xl px-8 py-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all w-[220px]"
              >
                {/* Fixed container so all logos sit at the same visual size */}
                <div className="w-[120px] h-[36px] flex items-center justify-center">
                  <Image
                    src={src}
                    alt={alt}
                    width={120}
                    height={36}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="text-[#E8231A] text-[10px] font-semibold uppercase tracking-widest border border-[#E8231A]/20 bg-[#E8231A]/6 px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="py-28 px-6 lg:px-8 bg-white" ref={servicesSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-700 ${servicesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">What We Do</p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                Three pillars.
                <br />
                One engine.
              </h2>
            </div>
            <Link href="/services" className="self-start md:self-auto inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 text-sm font-medium transition-colors">
              Learn More <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#E8231A]/25 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-500 ${servicesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
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

      {/* ══════════════ CASE STUDIES ══════════════ */}
      <section className="py-28 px-6 lg:px-8 bg-gray-50 border-t border-gray-200" ref={caseSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-700 ${caseSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Case Studies</p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                Strategies that scale.
                <br />
                <span className="text-[#E8231A]">Results that last.</span>
              </h2>
            </div>
            <Link href="/case-study" className="self-start md:self-auto inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-full hover:border-gray-400 hover:bg-white transition-all text-sm">
              Read Our Success Stories <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {featuredCaseStudies.map((study, i) => (
              <div
                key={study.id}
                className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#E8231A]/25 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col ${caseSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                
                  {/* IMAGE SLOT — replace this div with: */}
                  <div className="h-48 relative overflow-hidden">
                    <Image src={`/case-studies/perfora-${i + 1}.jpg`} alt={study.client} fill className="object-cover" />
                  </div>
                  {/* Recommended size: 800×480px */}
               
                {/* <div className="h-48 relative overflow-hidden bg-gray-50">
                  <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(ellipse at 70% 30%, ${study.accent} 0%, transparent 60%)` }} />
                  <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-50">
                    <span className="bg-[#E8231A]/10 text-[#E8231A] text-xs font-semibold px-3 py-1 rounded-full border border-[#E8231A]/15">
                      {study.category}
                    </span>
                  </div>
                </div> */}

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

      {/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="py-28 px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">360° Growth Awaits</p>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Poppins' }}>
            Your brand&apos;s next chapter
            <br />
            starts here.
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your goals and build the strategy that gets you there.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-semibold px-10 py-5 rounded-full hover:bg-gray-900 transition-colors duration-200 text-base">
            Let&apos;s Talk <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
