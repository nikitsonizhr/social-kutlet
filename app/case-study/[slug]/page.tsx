'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getCaseStudyBySlug } from '@/lib/case-study-data';

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

function ImageSlot({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [hasError, setHasError] = useState(false);
  if (hasError) {
    return (
      <div className={`bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 mx-auto mb-2" />
          <p className="text-gray-300 text-xs">Image coming soon</p>
        </div>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gray-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const study = getCaseStudyBySlug(slug);

  const hero = useInView(0.05);
  const body = useInView(0.05);
  const results = useInView(0.05);
  const takeaway = useInView(0.1);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">Case study not found</p>
          <Link href="/case-study" className="text-[#E8231A] font-medium text-sm hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-white">
        {/* Grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Red glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-5 rounded-full"
          style={{ background: 'radial-gradient(circle, #E8231A 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

        <div
          ref={hero.ref}
          className={`relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 w-full transition-all duration-1000 ${
            hero.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Back link */}
          <Link
            href="/case-study"
            className="inline-flex items-center gap-1.5 text-gray-400 text-sm hover:text-gray-700 transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            All Case Studies
          </Link>

          {/* Badges */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="bg-[#E8231A]/10 text-[#E8231A] text-xs font-extrabold px-3 py-1 rounded-full border border-[#E8231A]/15">
              {study.tag}
            </span>
            <span className="text-gray-300 text-xs">{study.category}</span>
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-gray-400 text-xs">{study.industry}</span>
          </div>

          {/* Client name */}
          <p className="text-gray-400 text-xs font-extrabold uppercase tracking-widest mb-4">{study.client}</p>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[0.95] tracking-tight mb-6 max-w-5xl"
            style={{ fontFamily: 'Poppins' }}
          >
            {study.headline}
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">{study.subheadline}</p>

          {/* Hero metrics */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden max-w-2xl">
            {study.heroMetrics.map((m) => (
              <div key={m.label} className="bg-white px-6 py-5 text-center">
                <div
                  className="text-3xl md:text-4xl font-extrabold text-[#E8231A] mb-1"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {m.value}
                </div>
                <div className="text-gray-400 text-xs leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ HERO IMAGE ══════════════ */}
      <section className="px-6 lg:px-8 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ImageSlot
            src={study.heroImage}
            alt={`${study.client} hero image`}
            className="w-full h-[400px] md:h-[520px]"
          />
        </div>
      </section>

      {/* ══════════════ BODY — TWO COLUMN ══════════════ */}
      <section className="py-16 px-6 lg:px-8 bg-white border-t border-gray-100" ref={body.ref}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid lg:grid-cols-[1fr_340px] gap-16 items-start transition-all duration-700 ${
              body.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* ── LEFT: NARRATIVE ── */}
            <div className="space-y-16">

              {/* Challenge */}
              <div>
                <p className="text-[#E8231A] text-xs font-extrabold uppercase tracking-widest mb-4">The Challenge</p>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{study.challenge.intro}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {study.challenge.points.map((point, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-[#E8231A] shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image slot 1 */}
              {study.contentImages[0] && (
                <ImageSlot
                  src={study.contentImages[0]}
                  alt={`${study.client} campaign image`}
                  className="w-full h-64 md:h-80"
                />
              )}

              {/* Approach */}
              <div>
                <p className="text-[#E8231A] text-xs font-extrabold uppercase tracking-widest mb-4">Our Approach</p>
                <p className="text-gray-600 text-base leading-relaxed mb-8">{study.approach.intro}</p>
                <div className="space-y-4">
                  {study.approach.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#E8231A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-xs font-extrabold">{i + 1}</span>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image slot 2 */}
              {study.contentImages[1] && (
                <ImageSlot
                  src={study.contentImages[1]}
                  alt={`${study.client} results image`}
                  className="w-full h-64 md:h-80"
                />
              )}

              {/* Creative Framework */}
              <div>
                <p className="text-[#E8231A] text-xs font-extrabold uppercase tracking-widest mb-4">Creative Framework</p>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{study.creativeFramework.intro}</p>
                <ul className="space-y-3">
                  {study.creativeFramework.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#E8231A] rounded-full shrink-0 mt-2.5" />
                      <p className="text-gray-600 text-base leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* ── RIGHT: STICKY AT A GLANCE ── */}
            <div className="lg:sticky lg:top-28 space-y-4">

              {/* At a Glance card */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-[#0A0A0A] px-6 py-4">
                  <p className="text-white text-xs font-extrabold uppercase tracking-widest">At a Glance</p>
                </div>
                <div className="p-5 space-y-1">
                  <div className="pb-4 mb-4 border-b border-gray-100">
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Client</p>
                    <p className="text-gray-900 font-extrabold text-sm" style={{ fontFamily: 'Poppins' }}>{study.client}</p>
                  </div>
                  <div className="pb-4 mb-4 border-b border-gray-100">
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Industry</p>
                    <p className="text-gray-700 text-sm">{study.industry}</p>
                  </div>
                  <div className="pb-4 mb-4 border-b border-gray-100">
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Service Area</p>
                    <p className="text-gray-700 text-sm">{study.tag}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-3">Key Results</p>
                    <div className="space-y-2">
                      {study.results.metrics.slice(0, 4).map((m) => (
                        <div key={m.label} className="flex items-center justify-between">
                          <span className="text-gray-500 text-xs">{m.label}</span>
                          <span className="text-[#E8231A] font-extrabold text-sm" style={{ fontFamily: 'Poppins' }}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-[#E8231A] rounded-2xl p-6 text-white">
                <p className="text-white/70 text-xs font-extrabold uppercase tracking-widest mb-2">Want similar results?</p>
                <p className="text-white font-extrabold text-base mb-4" style={{ fontFamily: 'Poppins' }}>
                  Let&apos;s build your growth story.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-between bg-white text-[#E8231A] font-extrabold text-sm px-5 py-3 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Book a Strategy Call <ArrowUpRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ RESULTS BAND ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-[#0A0A0A]" ref={results.ref}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              results.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-[#E8231A] text-xs font-extrabold uppercase tracking-widest mb-4">Results</p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-12 max-w-2xl leading-tight"
              style={{ fontFamily: 'Poppins' }}
            >
              The numbers that
              <br />
              tell the story.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-12">
              {study.results.metrics.map((m) => (
                <div key={m.label} className="bg-[#0A0A0A] px-6 py-8 text-center">
                  <div
                    className="text-3xl md:text-4xl font-extrabold text-[#E8231A] mb-2"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {m.value}
                  </div>
                  <div className="text-white/40 text-xs leading-tight">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {study.results.highlights.map((highlight, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="w-6 h-6 bg-[#E8231A] rounded-full flex items-center justify-center mb-3">
                    <span className="text-white text-xs font-extrabold">{i + 1}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ KEY TAKEAWAY ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-white border-b border-gray-200" ref={takeaway.ref}>
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              takeaway.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-[#E8231A] text-xs font-extrabold uppercase tracking-widest mb-8 text-center">Key Takeaway</p>
            <div className="relative">
              {/* Big quote mark */}
              <div
                className="absolute -top-6 -left-4 text-[120px] text-gray-100 font-serif leading-none select-none pointer-events-none"
                aria-hidden
              >
                &ldquo;
              </div>
              <blockquote
                className="relative text-gray-700 text-xl md:text-2xl leading-relaxed font-medium text-center px-8"
                style={{ fontFamily: 'Poppins' }}
              >
                {study.keyTakeaway}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
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
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-black text-lg px-10 py-5 rounded-full cta-blink hover:bg-gray-900 transition-colors duration-200"
            >
              Start a Conversation <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/case-study"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-medium px-8 py-5 rounded-full hover:border-gray-400 transition-colors duration-200 text-sm"
            >
              <ArrowLeft size={16} /> More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
