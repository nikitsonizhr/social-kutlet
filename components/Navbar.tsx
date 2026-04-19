'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = {
  'Organic Marketing': [
    'CRO Services',
    'Website Development',
    'Social Media Marketing',
    'SEO Services',
  ],
  'Demand Generation': [
    'Retention Marketing',
    'Programmatic Advertising (DV360)',
    'Acquisition Marketing (Google / Meta / Lead Gen)',
    'Influencer Marketing',
    'Affiliate Marketing',
  ],
  'Creative': [
    'Content Marketing',
    'Content Creation',
    'Creative Communication',
    'Strategy',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Strategy', href: '/strategy' },
  { label: 'Case Study', href: '/case-study' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const handleDropdownEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setDropdownOpen(true);
  };
  const handleDropdownLeave = () => {
    leaveTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — file: public/logos/brand-logo.png */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/brand-logo.png"
              alt="Social Kutlet"
              width={360}
              height={90}
              className="object-contain h-14 w-auto max-w-[320px]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenus}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      pathname === link.href
                        ? 'text-[#E8231A]'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>

                  {/* Mega Dropdown — pt-2 creates a hover bridge so gap doesn't close it */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px] transition-all duration-200 ${
                      dropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 grid grid-cols-3 gap-6 shadow-xl shadow-black/5">
                    {Object.entries(services).map(([category, items]) => (
                      <div key={category}>
                        <p className="text-[#E8231A] text-xs font-semibold uppercase tracking-widest mb-3">
                          {category}
                        </p>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item}>
                              <Link
                                href="/services"
                                onClick={closeMenus}
                                className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-150 block py-0.5"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenus}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-[#E8231A]'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-[#E8231A] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-900 transition-colors duration-200"
            >
              Book a Call
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-200`}
      >
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={closeMenus}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  pathname === link.href
                    ? 'text-[#E8231A] bg-[#E8231A]/5'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
              {link.hasDropdown && (
                <div className="ml-4 mt-2 space-y-4 pb-2">
                  {Object.entries(services).map(([category, items]) => (
                    <div key={category}>
                      <p className="text-[#E8231A] text-xs font-semibold uppercase tracking-widest mb-2 px-4">
                        {category}
                      </p>
                      {items.map((item) => (
                        <Link
                          key={item}
                          href="/services"
                          onClick={closeMenus}
                          className="block px-4 py-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={closeMenus}
              className="block text-center bg-[#E8231A] text-white font-semibold py-3 rounded-full"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
