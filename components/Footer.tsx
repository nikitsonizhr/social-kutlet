'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Pages: [
    { label: 'Home', href: '/' },
    { label: 'Strategy', href: '/strategy' },
    { label: 'Services', href: '/services' },
    { label: 'Case Study', href: '/case-study' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Organic Marketing', href: '/services' },
    { label: 'Demand Generation', href: '/services' },
    { label: 'Creative', href: '/services' },
    { label: 'SEO Services', href: '/services' },
    { label: 'Influencer Marketing', href: '/services' },
  ],
};

const socials = [
  { label: 'Instagram', href: '#', svg: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { label: 'LinkedIn', href: '#', svg: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'X (Twitter)', href: '#', svg: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.858L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* CTA Band */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">Ready to scale?</p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900"
              style={{ fontFamily: 'Poppins' }}
            >
              Let&apos;s build something
              <br />
              <span className="text-[#E8231A]">remarkable.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#E8231A] text-white font-black text-lg px-10 py-5 rounded-full cta-blink hover:bg-gray-900 transition-colors duration-200 text-base whitespace-nowrap"
            >
              Book a Call <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/case-study"
              className="flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-full hover:border-gray-400 hover:bg-white transition-all duration-200 text-base whitespace-nowrap"
            >
              See our Work first
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          {/* Brand logo — file: public/logos/brand-logo.png */}
          <div className="mb-5">
            <Image
              src="/logos/brand-logo.png"
              alt="Social &utlet"
              width={280}
              height={72}
              className="object-contain h-12 w-auto max-w-40"
            />
          </div>
          <p className="text-gray-600 text-sm font-medium leading-relaxed max-w-xs mb-6">
            360° solutions for brands — Performance, Organic, Creative, all under one roof.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, svg, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#E8231A] hover:border-[#E8231A]/30 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
                  <path d={svg} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <p className="text-gray-900 font-extrabold text-sm mb-5">{category}</p>
            <ul className="space-y-3">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Social Kutlet. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm font-medium">
            360° solutions for brands — Performance, Organic, Creative, all under one roof.
          </p>
        </div>
      </div>
    </footer>
  );
}
