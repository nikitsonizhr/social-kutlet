'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ContentMarketingPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E8231A 0%, transparent 70%)' }}
      />

      <div className="relative text-center px-6 max-w-3xl mx-auto">
        <p className="text-gray-400 text-xs font-extrabold uppercase tracking-widest mb-6">
          Content Marketing
        </p>
        <h1
          className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.95] tracking-tight mb-6"
          style={{ fontFamily: 'Poppins' }}
        >
          UGC &amp; Content
          <br />
          <span className="text-[#E8231A]">Coming Soon.</span>
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          We&apos;re putting together our full content marketing showcase — UGC videos, brand stories, and creative that converts. Check back soon.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-black text-lg px-10 py-5 rounded-full cta-blink hover:bg-gray-900 transition-colors duration-200"
          style={{ fontFamily: 'Poppins' }}
        >
          Talk to Us in the Meantime <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
