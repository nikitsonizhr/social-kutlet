'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Target, Palette, ChevronDown } from 'lucide-react';

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

const serviceCategories = [
  {
    id: 'organic',
    icon: TrendingUp,
    number: '01',
    title: 'Organic Marketing',
    tagline: "Build compound growth that doesn't stop when the budget does.",
    description:
      'Organic marketing is the backbone of sustainable brand growth. We build integrated systems across SEO, CRO, and social that attract, convert, and retain customers — continuously, without dependency on paid media.',
    services: [
      {
        name: 'CRO Services',
        desc: 'Conversion Rate Optimisation (CRO) is the discipline of turning existing traffic into revenue — without increasing your ad spend. We audit your funnel end-to-end, identify friction points, and implement data-backed improvements across every touchpoint.',
        outcomes: [
          'Full funnel audit — landing pages, checkout flows, CTAs, and micro-copy',
          'A/B and multivariate testing with statistical significance frameworks',
          'Heatmaps, session recordings, and behavioural analytics (Hotjar, Clarity)',
          'Form and lead capture optimisation to reduce drop-offs',
          'Personalisation strategies based on traffic source and user intent',
        ],
      },
      {
        name: 'Website Development',
        desc: 'We build high-performance websites engineered for conversion — not just design. Every project is rooted in user psychology, speed optimisation, and SEO architecture from day one.',
        outcomes: [
          'Custom website and landing page design with conversion-first UX principles',
          'Core Web Vitals and PageSpeed optimisation (LCP, CLS, FID)',
          'Technical SEO integration — structured data, canonical tags, XML sitemaps',
          'CMS implementation: Webflow, WordPress, Shopify, and headless builds',
          'Mobile-first, accessibility-compliant, and analytics-ready from launch',
        ],
      },
      {
        name: 'Social Media Marketing',
        desc: 'Social media is a brand-building engine when treated strategically. We create content systems and community frameworks that drive reach, engagement, and qualified pipeline — across the platforms that matter to your audience.',
        outcomes: [
          'Platform strategy across Instagram, LinkedIn & YouTube',
          'Content calendar development aligned to brand voice and business objectives',
          'Short-form video production, scripting, and performance editing',
          'Community management, response frameworks, and brand reputation handling',
          'Monthly performance reporting with platform-native benchmarking',
        ],
      },
      {
        name: 'SEO Services',
        desc: 'We treat SEO as a long-term asset — building domain authority, topical depth, and technical credibility that compounds over time. Our approach integrates content, technical, and off-page SEO into one cohesive growth strategy.',
        outcomes: [
          'Keyword research, topical clustering, and search intent mapping',
          'On-page optimisation — meta structures, internal linking, content hierarchy',
          'Technical SEO audits — crawlability, indexation, and site architecture',
          'Link acquisition through editorial outreach and digital PR',
          'Ongoing rank tracking and quarterly SEO health reviews',
        ],
      },
    ],
  },
  {
    id: 'demand',
    icon: Target,
    number: '02',
    title: 'Demand Generation',
    tagline: 'Create demand before it exists. Own the market before competitors respond.',
    description:
      "Demand generation isn't just about leads — it's about building a pipeline of buyers who already trust you before they've spoken to sales. We deploy paid, programmatic, and retention strategies that create sustained commercial intent.",
    services: [
      {
        name: 'Retention Marketing',
        desc: 'Acquiring a customer is step one. Keeping them — and increasing their lifetime value — is where the real margin lives. Our retention systems are built to reduce churn, drive repeat purchase, and create brand advocates through structured lifecycle marketing.',
        outcomes: [
          'Email marketing automation — welcome sequences, win-back flows, and nurture journeys',
          'Segmentation strategy based on RFM modelling (Recency, Frequency, Monetary)',
          'Push notifications, SMS, and in-app messaging integration (Klaviyo, Braze, MoEngage)',
          'Loyalty programme design and referral mechanism implementation',
          'Churn prediction analysis and proactive re-engagement campaigns',
        ],
      },
      {
        name: 'Programmatic Advertising (DV360)',
        desc: 'Programmatic advertising allows brands to reach the right audience, at the right moment, at scale — with precision that manual buying cannot match. We manage campaigns end-to-end on Google\'s Display & Video 360 (DV360) platform, built for performance and brand safety.',
        outcomes: [
          'Full DV360 campaign setup, audience configuration, and inventory management',
          'First-party data activation and custom audience modelling',
          'Cross-channel programmatic buying — display, video, CTV, and native',
          'Brand safety controls, frequency capping, and viewability optimisation',
          'Attribution modelling and closed-loop reporting with GA4 and Floodlight integration',
        ],
      },
      {
        name: 'Performance Marketing (Google / Meta / LinkedIn)',
        desc: 'We run paid campaigns across Google, Meta, and LinkedIn with a singular focus on cost-efficient pipeline generation. Every rupee is tracked, attributed, and optimised for the outcomes that matter to your business — leads, revenue, and ROI.',
        outcomes: [
          'Google Search, Shopping, and YouTube campaign management',
          'Meta Ads — prospecting, retargeting, and catalogue-based dynamic ads',
          'LinkedIn Ads for B2B demand generation and account-based targeting',
          'Bid strategy optimisation — tROAS, tCPA, and Max Conversion approaches',
          'Creative testing frameworks and ad fatigue management',
        ],
      },
      {
        name: 'Influencer Marketing',
        desc: 'We identify, vet, and manage creator partnerships aligned to your brand\'s audience and goals. From nano-influencers driving niche trust to macro campaigns building mass reach, every collaboration is tied to measurable outcomes — reach, engagement, and attributed conversions.',
        outcomes: [
          'Creator identification and vetting aligned to audience fit and brand values',
          'Campaign briefing, content review, and performance benchmarking',
          'Nano to macro influencer management across Instagram, YouTube, and LinkedIn',
          'UGC content library build from influencer partnerships',
          'Attribution tracking for reach, engagement, and downstream conversions',
        ],
      },
      {
        name: 'Affiliate Marketing (GPay / CRED / PhonePe / Paytm)',
        desc: "We manage performance-based affiliate partnerships across India's leading fintech and super-app platforms — GPay, CRED, PhonePe, and Paytm. Campaigns are structured around cost-per-action models, ensuring every rupee spent is tied to a verified transaction or lead.",
        outcomes: [
          'Zero upfront media cost — pay only for verified results',
          'Platform onboarding and creative asset management for fintech super-apps',
          'Cost-per-action campaign structuring for installs, leads, and transactions',
          'Qualified new-user acquisition through platform-native discovery',
          'Performance reporting with cohort analysis and LTV tracking',
        ],
      },
    ],
  },
  {
    id: 'creative',
    icon: Palette,
    number: '03',
    title: 'Creative',
    tagline: 'Ideas with impact — creative that performs as well as it looks.',
    description:
      'Great performance needs great creative. Our in-house creative team produces content, campaigns, and communication that earns attention and drives action — without compromising brand integrity.',
    services: [
      {
        name: 'Content Marketing',
        desc: 'We build content strategies that serve the entire funnel — from awareness-stage editorial and thought leadership to decision-stage comparison pages and case studies. Every piece is mapped to a search intent, a buyer stage, and a business objective.',
        outcomes: [
          'Full-funnel content strategy mapped to buyer journey and search intent',
          'Thought leadership, editorial, and long-form SEO content',
          'Decision-stage content — comparisons, case studies, and product guides',
          'Content calendar management and editorial workflow',
          'Performance tracking and content ROI measurement',
        ],
      },
      {
        name: 'Content Creation',
        desc: 'From short-form video scripts and carousels to long-form blogs and email copy, we produce content built for performance — not just aesthetics. Our creative output is rooted in brand voice guidelines, platform best practices, and conversion psychology.',
        outcomes: [
          'Short-form video scripting, production, and performance editing',
          'Carousel, static, and motion graphic creation for paid and organic',
          'Long-form blog writing, email copy, and landing page content',
          'Platform-native format adaptation (Reels, Shorts, LinkedIn posts)',
          'Brand voice documentation and content style guides',
        ],
      },
      {
        name: 'Creative Communication',
        desc: 'Brand messaging, campaign concepts, ad copy, and communication frameworks that make your brand impossible to ignore. We translate business positioning into language that resonates — across channels, formats, and audience segments.',
        outcomes: [
          'Brand messaging architecture and positioning statements',
          'Campaign concept development and creative direction',
          'Ad copy frameworks for paid, organic, and outbound channels',
          'Tone of voice development and brand communication guidelines',
          'Cross-channel messaging consistency and audience segmentation',
        ],
      },
      {
        name: 'Strategy',
        desc: 'Before any execution, we build the blueprint. Our strategy engagements cover brand positioning, channel mix planning, audience architecture, competitive analysis, and go-to-market frameworks — giving every campaign a clear commercial rationale.',
        outcomes: [
          'Brand positioning and competitive differentiation strategy',
          'Channel mix planning and budget allocation frameworks',
          'Audience architecture, persona development, and segmentation',
          'Go-to-market planning for new products, verticals, and markets',
          'Quarterly strategy reviews and growth roadmap development',
        ],
      },
    ],
  },
];

function ServiceAccordion({ service }: { service: typeof serviceCategories[0]['services'][0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-900 font-semibold text-base" style={{ fontFamily: 'Poppins' }}>
          {service.name}
        </span>
        <ChevronDown
          size={18}
          className={`text-gray-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 border-t border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-5">{service.desc}</p>
          <ul className="space-y-2">
            {service.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#E8231A] rounded-full shrink-0 mt-2" />
                <span className="text-gray-600 text-sm leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ category, alt }: { category: typeof serviceCategories[0]; alt: boolean }) {
  const section = useInView(0.05);
  return (
    <section
      id={category.id}
      className={`py-20 px-6 lg:px-8 border-t border-gray-200 ${alt ? 'bg-gray-50' : 'bg-white'}`}
      ref={section.ref}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start transition-all duration-700 ${
            section.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left sticky info */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E8231A]/8 rounded-lg flex items-center justify-center">
                <category.icon size={18} className="text-[#E8231A]" />
              </div>
              <span className="text-gray-200 text-3xl font-bold" style={{ fontFamily: 'Poppins' }}>
                {category.number}
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'Poppins' }}
            >
              {category.title}
            </h2>
            <p className="text-[#E8231A] text-sm font-semibold mb-4">{category.tagline}</p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">{category.description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-5 py-3 rounded-full hover:border-[#E8231A]/30 hover:shadow-md transition-all"
            >
              Get a Quote <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Right accordion */}
          <div className="space-y-3">
            {category.services.map((service) => (
              <ServiceAccordion key={service.name} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const hero = useInView(0.1);

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
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">Our Services</p>
          <h1
            className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8 max-w-4xl"
            style={{ fontFamily: 'Poppins' }}
          >
            Everything your
            <br />
            brand needs,
            <br />
            <span className="text-[#E8231A]">under one roof.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
            Three service pillars, 15+ capabilities, one integrated team. No silos, no gaps.
          </p>
        </div>
      </section>

      {/* ══════════════ CATEGORIES ══════════════ */}
      {serviceCategories.map((category, i) => (
        <CategorySection key={category.id} category={category} alt={i % 2 !== 0} />
      ))}

      {/* ══════════════ CTA ══════════════ */}
      <section className="py-20 px-6 lg:px-8 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Not sure where to start?
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Let&apos;s find your
            <br />
            growth gap.
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll audit your current marketing setup and tell you exactly which services will move the needle most.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8231A] text-white font-semibold px-10 py-5 rounded-full hover:bg-gray-900 transition-colors duration-200"
          >
            Book a Free Audit <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
