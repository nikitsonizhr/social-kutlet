'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Zap, BarChart2, Users, Repeat } from 'lucide-react';

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

const pillars = [
  {
    icon: BarChart2,
    title: 'Data Intelligence',
    desc: 'Every decision begins with data. We map your customer journey end-to-end — from first touch to loyal advocate — then identify the exact levers that unlock scalable growth.',
    points: ['Audience segmentation & profiling', 'Funnel drop-off analysis', 'Competitive benchmarking', 'Attribution modelling'],
  },
  {
    icon: Zap,
    title: 'Rapid Experimentation',
    desc: "We run structured A/B and multivariate tests across creative, copy, channels, and landing pages — learning fast and doubling down on what works for your brand's unique audience.",
    points: ['Test hypothesis frameworks', 'Creative variation sprints', 'Channel mix optimisation', 'Conversion rate experiments'],
  },
  {
    icon: Users,
    title: 'Brand-First Thinking',
    desc: 'Performance without brand is noise. We ensure every touchpoint — from an ad to a landing page — reinforces who you are and why your audience should care.',
    points: ['Tone of voice guidelines', 'Visual identity consistency', 'Content pillars & messaging', 'Audience empathy mapping'],
  },
  {
    icon: Repeat,
    title: 'Continuous Iteration',
    desc: "Growth isn't a sprint — it's a compounding system. We build feedback loops that improve performance month over month, turning good results into great ones.",
    points: ['Monthly strategy reviews', 'Real-time performance dashboards', 'Quarterly roadmap resets', 'Retention & loyalty loops'],
  },
];

const frameworks = [
  {
    phase: 'Phase 1',
    title: 'Audit & Discovery',
    duration: 'Week 1–2',
    desc: 'We conduct a full 360° brand audit — digital presence, paid accounts, SEO health, creative assets, and competitive landscape.',
  },
  {
    phase: 'Phase 2',
    title: 'Strategy Design',
    duration: 'Week 3',
    desc: 'We translate insights into a bespoke 90-day growth roadmap with channel priorities, budget allocation, and success metrics.',
  },
  {
    phase: 'Phase 3',
    title: 'Execution Sprint',
    duration: 'Week 4–12',
    desc: 'Cross-functional squads launch across organic, paid, and creative channels simultaneously — no sequential hand-offs.',
  },
  {
    phase: 'Phase 4',
    title: 'Optimise & Scale',
    duration: 'Ongoing',
    desc: 'Weekly optimisation cycles and monthly strategy reviews ensure your budget always flows to the highest-performing channels.',
  },
];

export default function StrategyPage() {
  const hero = useInView(0.1);
  const pillarsSection = useInView(0.1);
  const frameworkSection = useInView(0.1);
  const ctaSection = useInView(0.1);

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #E8231A 0%, transparent 70%)' }}
        />

        <div
          ref={hero.ref}
          className={`relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-24 transition-all duration-1000 ${
            hero.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">Our Strategy</p>
          <h1
            className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8 max-w-4xl"
            style={{ fontFamily: 'Poppins' }}
          >
            Growth by
            <br />
            <span className="text-[#E8231A]">design,</span>
            <br />
            not accident.
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
            We don&apos;t guess. We build evidence-based, brand-first growth strategies
            that compound over time — turning marketing spend into a sustainable asset.
          </p>
        </div>
      </section>

      {/* ══════════════ PILLARS ══════════════ */}
      <section className="py-28 px-6 lg:px-8 border-t border-gray-200 bg-white" ref={pillarsSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`mb-16 transition-all duration-700 ${
              pillarsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Strategic Pillars</p>
            <h2
              className="text-5xl md:text-6xl font-bold text-gray-900"
              style={{ fontFamily: 'Poppins' }}
            >
              How we think
              <br />
              about growth.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#E8231A]/20 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-500 ${
                  pillarsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#E8231A]/8 rounded-xl flex items-center justify-center mb-6">
                  <pillar.icon size={22} className="text-[#E8231A]" />
                </div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {pillar.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                <ul className="space-y-2">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-gray-500 text-sm">
                      <span className="w-1 h-1 bg-gray-400 rounded-full shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FRAMEWORK ══════════════ */}
      <section className="py-28 px-6 lg:px-8 bg-gray-50 border-y border-gray-200" ref={frameworkSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`mb-16 transition-all duration-700 ${
              frameworkSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Engagement Model</p>
            <h2
              className="text-5xl md:text-6xl font-bold text-gray-900"
              style={{ fontFamily: 'Poppins' }}
            >
              From day one
              <br />
              to quarter ten.
            </h2>
          </div>

          <div className="space-y-4">
            {frameworks.map((phase, i) => (
              <div
                key={phase.phase}
                className={`group flex flex-col md:flex-row md:items-center gap-6 bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#E8231A]/20 hover:shadow-lg hover:shadow-black/5 cursor-default transition-all duration-500 ${
                  frameworkSection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="shrink-0 w-28">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{phase.phase}</p>
                  <p className="text-[#E8231A] text-xs font-medium">{phase.duration}</p>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden md:block" />
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {phase.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{phase.desc}</p>
                </div>
                <div className="shrink-0 w-2 h-2 rounded-full bg-[#E8231A]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="py-28 px-6 lg:px-8 bg-white" ref={ctaSection.ref}>
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            ctaSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Ready to strategise?
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Let&apos;s map your
            <br />
            growth roadmap.
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Book a free 30-minute strategy call with our team and walk away with
            three actionable growth ideas — on us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition-colors duration-200"
            >
              Book a Strategy Call <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-medium px-8 py-4 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
