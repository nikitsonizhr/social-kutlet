export type CaseStudyMetric = { label: string; value: string };

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  tag: string;
  industry: string;
  // Images — drop files at /public/case-studies/[slug]/hero.jpg etc.
  heroImage: string;
  contentImages: string[]; // scattered through body content
  headline: string;
  subheadline: string;
  heroMetrics: CaseStudyMetric[];
  challenge: {
    intro: string;
    points: string[];
  };
  approach: {
    intro: string;
    steps: string[];
  };
  creativeFramework: {
    intro: string;
    points: string[];
  };
  results: {
    metrics: CaseStudyMetric[];
    highlights: string[];
  };
  keyTakeaway: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'two-brothers-organic-farms',
    client: 'Two Brothers Organic Farms',
    category: 'FMCG & Food',
    tag: 'Performance Marketing',
    industry: 'Premium Organic Food & Grocery',
    heroImage: '/case-studies/two-brothers-organic-farms/hero.jpg',
    contentImages: [
      '/case-studies/two-brothers-organic-farms/image-1.jpg',
      '/case-studies/two-brothers-organic-farms/image-2.jpg',
    ],
    headline: 'Scaling a Premium Organic Food Brand During New Year Sale',
    subheadline: '8X revenue growth in a single sale period through full-funnel performance precision.',
    heroMetrics: [
      { label: 'Revenue Growth', value: '8X' },
      { label: 'User Acquisition', value: '5.5X' },
      { label: 'ROAS Improvement', value: '+60%' },
    ],
    challenge: {
      intro: 'Two Brothers Organic Farms needed to capitalise on the New Year sale window aggressively — but without letting efficiency fall apart as budgets scaled.',
      points: [
        'Maximise revenue during a high-stakes, short-window New Year sale period',
        'Scale ad spend aggressively while maintaining ROAS efficiency across campaigns',
        'Expand reach to new users without inflating customer acquisition cost',
        'Align full-funnel campaigns for peak conversion across all channels simultaneously',
      ],
    },
    approach: {
      intro: 'We built a complete full-funnel architecture from scratch — designed specifically to scale fast during peak demand without losing efficiency.',
      steps: [
        'Scaled Performance Max & Shopping campaigns by 120% for rapid reach expansion across search and shopping surfaces',
        'Deployed video + discovery prospecting using in-market and affinity audiences to capture high-intent demand at the top of funnel',
        'Built a full-funnel system spanning Search, Display, YouTube, and Discovery — ensuring no buyer intent was missed',
        'Segmented high-intent retargeting audiences — website visitors, add-to-cart users, and past purchasers — with tailored messaging for each cohort',
        'Strengthened remarketing layers to maximise sale-period conversions from warm audiences already in the funnel',
      ],
    },
    creativeFramework: {
      intro: 'Creative was built around urgency, value, and the brand\'s premium organic positioning — balancing performance with brand integrity.',
      points: [
        'Sale-period creative with clear urgency signals while maintaining premium organic brand tone',
        'Product-led visuals showcasing the Two Brothers range across different use cases and occasions',
        'Video formats for YouTube and Discovery driving consideration before conversion',
        'Retargeting creatives personalised to funnel stage — cart abandoners saw different messaging than first-time visitors',
        'Continuously tested hooks and CTAs to maximise click-through and conversion rates across the sale window',
      ],
    },
    results: {
      metrics: [
        { label: 'Revenue Growth', value: '8X' },
        { label: 'User Acquisition', value: '5.5X' },
        { label: 'ROAS Improvement', value: '+60%' },
        { label: 'Ad Spend Scaled', value: '+800%' },
        { label: 'Conversions', value: '125X' },
        { label: 'CAC Reduction', value: '-40%' },
      ],
      highlights: [
        '8X revenue growth achieved during the sale period — the highest single-period result for the brand',
        'User acquisition scaled 5.5X while simultaneously reducing CAC by 40% — proving efficiency at scale',
        'ROAS improved 60% despite 800% increase in ad spend, validating the full-funnel architecture',
      ],
    },
    keyTakeaway:
      'High-impact sales events demand full-funnel precision, not just higher spends. By combining aggressive scaling with structured audience targeting and remarketing, Social Kutlet delivered exponential growth while improving efficiency across every metric.',
  },

  {
    slug: 'adil-qadri',
    client: 'Adil Qadri',
    category: 'Beauty & Lifestyle',
    tag: 'Demand Generation',
    industry: 'D2C Beauty & Fragrance (Shark Tank Featured)',
    heroImage: '/case-studies/adil-qadri/hero.jpg',
    contentImages: [
      '/case-studies/adil-qadri/image-1.jpg',
      '/case-studies/adil-qadri/image-2.jpg',
    ],
    headline: "Scaling India's Largest Shark Tank Featured Attar & Fragrance Brand",
    subheadline: '170% ROAS improvement while scaling ad spend 800% through Discovery and creative optimisation.',
    heroMetrics: [
      { label: 'Ad Spend Scale', value: '+800%' },
      { label: 'ROAS Improvement', value: '+170%' },
      { label: 'Conversions', value: '125X' },
    ],
    challenge: {
      intro: 'Adil Qadri had strong brand equity from its Shark Tank appearance but was struggling to scale its digital performance profitably at higher spend levels.',
      points: [
        'Difficulty scaling the business profitably — ROAS deteriorated as spends increased',
        'Need to increase revenue significantly while maintaining or improving ROAS across campaigns',
        'Limited structure in Discovery campaigns with inadequate audience segmentation',
        'Dependence on a narrow set of audience cohorts limiting new customer reach at scale',
      ],
    },
    approach: {
      intro: 'We conducted a comprehensive account audit and rebuilt the entire campaign architecture — with a specific focus on Discovery-led scaling and granular audience segmentation.',
      steps: [
        'Conducted an account-level audit to identify scale opportunities within Discovery campaigns and identify structural inefficiencies',
        'Segmented campaigns by audience cohorts — website visitors, past purchasers, add-to-cart users, and new prospects — each with tailored bidding and creative',
        'Launched dedicated prospecting campaigns to expand new customer acquisition beyond existing audience pools',
        'Structured campaigns into asset-based and feed-based formats for better performance control and evaluation across each format type',
        'Focused optimisation effort on Discovery campaign performance — improving reach, engagement, and downstream conversion rates',
        'Continuously optimised landing pages, ad copy, and messaging to improve conversion performance at scale',
      ],
    },
    creativeFramework: {
      intro: 'For a fragrance brand, the creative challenge is conveying sensory experience through visual and video formats. We leaned heavily into founder credibility and regional relevance.',
      points: [
        'Developed visually engaging creatives to improve click-through rates and drive product discovery across Discovery placements',
        'Extensively leveraged founder-led content with multiple hooks and real-user personas to build trust and improve conversion rates',
        'Tested multiple creative formats including statics, videos, and UGC-style content to identify best-performing combinations',
        'Deployed vernacular creatives across key regions to improve regional relevance, engagement, and conversion rates',
        'Collaborated with regional influencers and fragrance creators to strengthen awareness and credibility with niche audiences',
        'Identified and scaled high-performing vernacular and regional combinations based on engagement data',
      ],
    },
    results: {
      metrics: [
        { label: 'Ad Spend Scale', value: '+800%' },
        { label: 'ROAS Improvement', value: '+170%' },
        { label: 'Conversion Volume', value: '125X' },
        { label: 'CAC Reduction', value: '-40%' },
      ],
      highlights: [
        '800% increase in ad spend managed efficiently — ROAS improved 170% despite the aggressive scale',
        '125X increase in conversion volume demonstrates the structural improvement in campaign architecture',
        'Customer acquisition cost reduced by 40% while scaling — proving efficiency gains, not just growth',
      ],
    },
    keyTakeaway:
      "Scaling in high-competition D2C categories requires strong audience segmentation and a robust creative engine. By combining Discovery-led scaling with founder-driven and vernacular content, Social Kutlet enabled high-growth, efficient scaling for India's largest Shark Tank featured fragrance brand.",
  },

  {
    slug: 'neuberg-diagnostics',
    client: 'Neuberg Diagnostics',
    category: 'F&B & Healthcare',
    tag: 'Healthcare Lead Gen',
    industry: 'Healthcare / Diagnostic Services',
    heroImage: '/case-studies/neuberg-diagnostics/hero.jpg',
    contentImages: [
      '/case-studies/neuberg-diagnostics/image-1.jpg',
      '/case-studies/neuberg-diagnostics/image-2.jpg',
    ],
    headline: 'Driving High-Quality Lead Generation at Scale for a Pan-India Diagnostic Healthcare Brand',
    subheadline: '55% lead growth and 24% CPL reduction across 5 city markets over 6 months.',
    heroMetrics: [
      { label: 'Lead Growth', value: '+55%' },
      { label: 'CPL Reduction', value: '-24%' },
      { label: 'Revenue Growth', value: '+43%' },
    ],
    challenge: {
      intro: 'Neuberg Diagnostics needed a performance marketing engine that prioritised lead quality over volume — scaling across 5 cities with distinct healthcare dynamics.',
      points: [
        'Generating consistent, high-quality leads across multiple city markets with varying digital maturity',
        'Maintaining efficient Cost Per Lead while scaling month-on-month across both Google and Meta',
        'Improving lead-to-registration conversion rates — raw volume alone was insufficient without downstream quality',
        'Establishing Google as the primary engine (75% of spend) while using Meta for complementary reach',
        'Scaling newer markets like Kolkata and Pune from the ground up while sustaining mature market performance',
      ],
    },
    approach: {
      intro: 'We built a Google-first, city-specific campaign architecture — structuring each market independently while sharing learnings across the portfolio.',
      steps: [
        'Structured campaigns across Google (Search, Display, Performance Max) and Meta — 75% on Google to capture high-intent diagnostic queries, 15% Meta for awareness and retargeting',
        'Built city-specific campaign architectures for each market with independent budget controls, audience segments, and CPL benchmarks to avoid cross-market dilution',
        'Deployed intent-based Google Search campaigns targeting diagnostic test-specific keywords, health condition queries, and lab proximity searches',
        'Used Meta campaigns for top-of-funnel reach, health awareness content, and retargeting website visitors and form abandoners',
        'Implemented lead quality filters within form flows — capturing test type, city, urgency, and contact details — to pass only qualified leads to sales teams',
        'Scaled Kolkata and Pune as new markets with phased budget ramp-ups, starting with awareness before pushing lead generation volume',
      ],
    },
    creativeFramework: {
      intro: 'Healthcare creative requires precision — specific, trust-building, and non-sensational. Every piece was designed to educate before converting.',
      points: [
        'Developed test-category-specific creatives across health checkup packages, diagnostic panels, and preventive health messaging',
        'Ran Google Search ads with tightly structured ad groups around high-intent queries — specific test names, home collection services, diagnostic proximity',
        'Used Meta creatives to educate audiences on preventive diagnostics, building trust and brand recall before lead capture',
        'Regularly refreshed ad copy and visuals to avoid creative fatigue, especially in high-spend markets like Bangalore and Chennai',
        'A/B tested landing page messaging, form lengths, and CTA copy to improve form submission and registration rates',
      ],
    },
    results: {
      metrics: [
        { label: 'Lead Growth (6 months)', value: '+55%' },
        { label: 'CPL Reduction', value: '-24%' },
        { label: 'Registration Growth', value: '+37%' },
        { label: 'Revenue Growth', value: '+43%' },
        { label: 'ROAS Improvement', value: '3.7x → 4.5x' },
        { label: 'AOV Growth', value: '₹2,238 → ₹2,348' },
      ],
      highlights: [
        'Total leads grew from 9,327 in October 2025 to 14,432 in March 2026 — a 55% increase over six months',
        'Chennai delivered a standout month — CPL dropped 46% MoM, ROAS jumped to 7.0x, lead-to-registration rate hit 78%',
        'Mumbai shifted from volume to quality: lead-to-registration rate improved from 9% to 51% in 6 months',
      ],
    },
    keyTakeaway:
      'The real measure of success was registration quality and downstream conversion — not just lead volume. By deploying a Google-first, intent-led strategy supported by Meta for awareness and retargeting, Social Kutlet built a scalable, city-wise lead generation engine that consistently improved CPL, registration rates, and revenue across all active markets.',
  },

  {
    slug: 'anveshan',
    client: 'Anveshan',
    category: 'FMCG & Food',
    tag: 'Performance Marketing',
    industry: 'D2C Food & FMCG (Cold-Pressed Oils, A2 Ghee, Pantry Staples)',
    heroImage: '/case-studies/anveshan/hero.jpg',
    contentImages: [
      '/case-studies/anveshan/image-1.jpg',
      '/case-studies/anveshan/image-2.jpg',
    ],
    headline: "Scaling India's Largest Ghee & Oil Brand with Focus on Category Expansion",
    subheadline: '66% order growth and 33% category revenue expansion for a Shark Tank featured FMCG brand.',
    heroMetrics: [
      { label: 'Order Volume Growth', value: '+66%' },
      { label: 'Category Revenue', value: '+33%' },
      { label: 'Ad Spend Scaled', value: '+20%' },
    ],
    challenge: {
      intro: 'Anveshan had a loyal customer base but was struggling to scale new acquisition profitably while simultaneously reducing its reliance on a single hero product category.',
      points: [
        'Difficulty scaling orders profitably while maintaining a healthy ROI across campaigns',
        'Need to increase new customer acquisition beyond the existing loyal base',
        'High dependency on a single category — ghee — with a requirement to grow cold-pressed oil revenue share',
      ],
    },
    approach: {
      intro: 'We built a dual-track strategy — scaling new acquisition through performance campaigns while using product-led tactics to drive category expansion.',
      steps: [
        'Launched Performance Max campaigns with shopping feeds on Google to capture high-intent demand for cold-pressed oils',
        'Structured Meta campaigns for new user acquisition, aligned with a funnel-based approach for improved engagement and conversions',
        'Maintained a profitable CPA while scaling new customer acquisition — balancing volume with efficiency',
        'Introduced a sampler kit strategy to drive first-time trials specifically for cold-pressed oils, lowering the barrier to purchase',
        'Implemented retargeting campaigns across Meta and Google to convert sampler users into higher-value repeat purchases',
        'Leveraged personalised ad communication to improve conversion rates and drive repeat purchase behaviour',
      ],
    },
    creativeFramework: {
      intro: 'Communicating the quality and provenance of premium FMCG requires education-first creative — especially for products like cold-pressed oils with a knowledge gap.',
      points: [
        'Product-led creative highlighting the cold-pressing process, provenance, and nutritional benefits to drive consideration',
        'Sampler kit creative designed to reduce trial anxiety and encourage first-time buyers to experience the product range',
        'Category-specific visuals for ghee, oils, and pantry staples — avoiding a generic brand message',
        'Retargeting creative personalised to purchase stage — sampler users received upgrade messaging, past buyers saw cross-category content',
        'Continuously tested hooks and messaging angles to improve CTR and conversion across both new and returning audiences',
      ],
    },
    results: {
      metrics: [
        { label: 'Total Order Growth', value: '+66%' },
        { label: 'Cold-Pressed Oil Revenue', value: '+33%' },
        { label: 'Ad Spend Efficiency', value: '+20% spend, profitable CPA maintained' },
        { label: 'New Customer Acquisition', value: 'Improved significantly' },
      ],
      highlights: [
        '66% increase in total orders driven by improved acquisition and conversion strategy',
        'Cold-pressed oil revenue contribution increased 33% — significantly reducing category dependency on ghee',
        'Sampler kit strategy proved highly effective at converting first-time buyers into higher-value purchasers',
      ],
    },
    keyTakeaway:
      'Scaling a multi-category FMCG brand requires balancing acquisition with category expansion. By combining high-intent demand capture with structured retargeting and product-led strategy, Social Kutlet enabled profitable growth while diversifying revenue streams for a Shark Tank featured brand.',
  },

  {
    slug: 'eggoz',
    client: 'Eggoz',
    category: 'FMCG & Food',
    tag: 'Brand Awareness',
    industry: 'D2C Food & FMCG (Fresh Produce and Poultry)',
    heroImage: '/case-studies/eggoz/hero.jpg',
    contentImages: [
      '/case-studies/eggoz/image-1.jpg',
      '/case-studies/eggoz/image-2.jpg',
    ],
    headline: "Driving High-Frequency Reach for India's Largest Egg & Poultry Brand Through Video-First Strategy",
    subheadline: '30 million users reached across Delhi and Bangalore with an average frequency of 8.',
    heroMetrics: [
      { label: 'Users Reached', value: '30M' },
      { label: 'Average Frequency', value: '8x' },
      { label: 'Markets', value: 'Delhi + Bangalore' },
    ],
    challenge: {
      intro: "Eggoz needed to build top-of-mind awareness in a low-consideration category where consumers rarely think about brand differentiation — making recall the primary challenge.",
      points: [
        'Need to increase brand recall and engagement in a low-consideration, commoditised category',
        'Requirement to reach new users at scale while maintaining message consistency across touchpoints',
        'Limited brand awareness despite a strong product proposition and quality differentiation',
        'Need to balance reach, frequency, and conversion intent without one cannibalising the other',
      ],
    },
    approach: {
      intro: "We built a high-frequency video strategy designed to create unavoidable brand recall — combining mass reach with structured remarketing to drive downstream conversions.",
      steps: [
        'Deployed campaigns with a focus on Video Views and Reach objectives to maximise audience exposure across key metro cities',
        'Built a high-frequency targeting strategy ensuring repeated brand visibility across key user cohorts within target markets',
        'Leveraged audience segmentation targeting premium shoppers, health-focused consumers, and busy professionals — the core Eggoz buyer profiles',
        'Implemented remarketing strategies targeting video viewers and website visitors to move high-intent users towards conversion',
        'Directed traffic towards quick commerce platforms to reduce purchase friction and capitalise on existing consumer behaviour',
      ],
    },
    creativeFramework: {
      intro: 'For a low-consideration category, creative has to work harder — the goal was to make Eggoz the automatic mental shortcut when consumers think about eggs.',
      points: [
        'Developed awareness-led video content with relatable, real-life hooks designed to capture attention at scale with high completion rates',
        'Executed sequential storytelling — moving users from awareness to consideration through structured messaging across multiple exposures',
        'Used testimonials, influencer-led content, and social proof to build trust and brand legitimacy during the consideration phase',
        'Tested multiple video formats, hooks, and narratives to optimise engagement and video completion rates across placements',
        'Focused on high-frequency exposure of top-performing creatives to strengthen brand recall and association over time',
      ],
    },
    results: {
      metrics: [
        { label: 'Users Reached', value: '30M+' },
        { label: 'Average Frequency', value: '8x' },
        { label: 'Engagement Metrics', value: 'Improved across campaigns' },
        { label: 'Brand Recall', value: 'Strengthened significantly' },
      ],
      highlights: [
        '30 million users reached across Delhi and Bangalore with high-impact, high-frequency exposure',
        'Average frequency of 8 ensured Eggoz was seen multiple times by each user — driving strong brand recall in a low-consideration category',
        'Strengthened top-of-mind awareness drove higher downstream conversions across quick commerce platforms',
      ],
    },
    keyTakeaway:
      'In low-consideration categories, growth is driven by consistent visibility and repeated exposure — not just reach. By combining high-frequency video strategy with structured remarketing, Social Kutlet enabled mass awareness with real performance impact for a fresh produce brand.',
  },

  {
    slug: 'phool',
    client: 'Phool',
    category: 'D2C & E-commerce',
    tag: 'D2C Growth',
    industry: 'D2C Gifting & Fragrance (Incense, Dhoop, Eco-Friendly Products)',
    heroImage: '/case-studies/phool/hero.jpg',
    contentImages: [
      '/case-studies/phool/image-1.jpg',
      '/case-studies/phool/image-2.jpg',
    ],
    headline: "Scaling India's Largest Digital-First Fragrance and Incense Brand Through AOV and Acquisition Strategy",
    subheadline: '24% revenue growth, 22% AOV improvement, and 19% CAC reduction for a premium eco-gifting brand.',
    heroMetrics: [
      { label: 'Revenue Growth', value: '+24%' },
      { label: 'AOV Improvement', value: '+22%' },
      { label: 'CAC Improvement', value: '-19%' },
    ],
    challenge: {
      intro: "Phool had a strong product story and brand identity, but was struggling to efficiently scale acquisition and improve the economics of each transaction.",
      points: [
        'Need to drive new customer acquisition efficiently at scale without inflating CAC',
        'High competition in the premium gifting category with well-funded competitors',
        'Low average order value limiting revenue growth and contribution margins',
        'Requirement to position gifting as trendy and relevant for Gen Z and millennial audiences',
        'Need to improve overall customer acquisition cost and ROI across paid channels',
      ],
    },
    approach: {
      intro: "We built a two-pronged strategy: acquiring new customers more efficiently while simultaneously engineering higher-value transactions through bundling and price point diversification.",
      steps: [
        'Focused on new user acquisition campaigns to expand reach across high-intent audiences on Meta and Google',
        'Introduced bundled gifting combinations specifically designed to improve average order value and make gifting more complete',
        'Launched gifting options across multiple price points to attract audiences from different spending tiers and broaden the accessible market',
        'Optimised product detail pages and website experience for festive and seasonal relevance — Diwali, Rakhi, and key gifting occasions',
        'Leveraged brand collaborations to expand reach and drive product discovery among new audiences',
        'Implemented retargeting strategies to re-engage past users and drive repeat purchases from the existing customer base',
      ],
    },
    creativeFramework: {
      intro: "Phool's creative strategy centred on elevating gifting from a transactional act to a meaningful personal experience — especially for younger audiences.",
      points: [
        'Developed festive-first creative strategy aligned with occasions like Diwali, Rakhi, and other seasonal gifting moments',
        'Tested UGC-led creatives, statics, and videos to improve engagement and brand relatability across different audience segments',
        'Positioned gifting as a personal and experiential category — especially for younger audiences who value meaning over price',
        'Experimented with multiple hooks, messaging angles, and storytelling formats to improve CTR and downstream conversions',
        'Scaled high-performing creatives based on audience engagement and purchase behaviour data',
      ],
    },
    results: {
      metrics: [
        { label: 'Revenue Growth', value: '+24%' },
        { label: 'AOV Improvement', value: '+22%' },
        { label: 'CAC Improvement', value: '-19%' },
        { label: 'Website Sessions', value: '+12%' },
        { label: 'Cost Per Session', value: '-13%' },
        { label: 'Overall ROI', value: '+10%' },
      ],
      highlights: [
        '24% revenue growth driven by a combination of new acquisition and higher-value transactions',
        '22% AOV improvement directly attributed to bundling strategy and multi-price-point approach',
        '19% CAC reduction while simultaneously growing revenue — proving acquisition efficiency improved',
      ],
    },
    keyTakeaway:
      'Scaling a gifting brand requires a balance of strong acquisition, higher cart value, and culturally relevant storytelling. By combining bundling strategies, price-point diversification, and festive-led creatives, Social Kutlet enabled sustainable and scalable growth for a premium eco-conscious gifting brand.',
  },

  {
    slug: 'bombay-sweet-shop',
    client: 'Bombay Sweet Shop',
    category: 'FMCG & Food',
    tag: 'Lead Generation',
    industry: 'D2C Food and Gifting (Premium Sweets and Hampers)',
    heroImage: '/case-studies/bombay-sweet-shop/hero.jpg',
    contentImages: [
      '/case-studies/bombay-sweet-shop/image-1.jpg',
      '/case-studies/bombay-sweet-shop/image-2.jpg',
    ],
    headline: 'Scaling a Premium Gifting Brand Through Lead Generation and Creative Strategy',
    subheadline: '1,300 leads generated with a 32.6% qualification rate — quality, not just volume.',
    heroMetrics: [
      { label: 'Leads Generated', value: '1,300' },
      { label: 'Qualification Rate', value: '32.6%' },
      { label: 'Lead Quality', value: 'High' },
    ],
    challenge: {
      intro: "Bombay Sweet Shop operates in a high-emotion, occasion-driven gifting category where lead quality matters far more than lead volume — especially for corporate clients.",
      points: [
        'High competition in the premium gifting category with commoditised pricing from many competitors',
        'Strong seasonality spikes creating inconsistent lead flow outside peak gifting periods',
        'Long sales cycle for corporate gifting orders, delaying conversion and making attribution difficult',
        'Diverse audience spanning B2B corporate gifting and B2C personal occasions — requiring distinct messaging for each',
        'Need to improve cost per lead and lead qualification rates simultaneously',
      ],
    },
    approach: {
      intro: "We built segmented lead generation campaigns designed from the ground up to capture the right buyers — not just the most buyers.",
      steps: [
        'Built a clear brand persona and audience segmentation across corporate gifting, wedding gifting, and personal celebration cohorts',
        'Optimised landing pages specifically for lead capture — improving information architecture, form design, and page load performance',
        'Implemented lead generation and retargeting campaigns across Meta and Google, with audience targeting aligned to each gifting use case',
        'Focused on conversion optimisation and budget scaling based on real-time performance signals across campaigns',
        'Established a continuous testing and optimisation framework to improve lead quality and cost efficiency over time',
      ],
    },
    creativeFramework: {
      intro: "Premium gifting is emotional by nature — creative had to speak to the meaning behind the gift, not just the product itself.",
      points: [
        'Developed persona-led gifting narratives for each use case — corporate gifting, weddings, baby announcements, customised gifts, and celebrations',
        'Tested multiple creative formats including statics, videos, and GIF-based creatives to improve engagement across placements',
        'Created story-driven campaigns positioning gifting as an experience rather than a product purchase',
        'Continuously tested hooks, messaging angles, and visual styles to improve click-through and lead conversion rates',
        'Scaled high-performing creative themes based on audience response and engagement data over the campaign period',
      ],
    },
    results: {
      metrics: [
        { label: 'Leads Generated', value: '1,200–1,300' },
        { label: 'Lead Qualification Rate', value: '32.6%' },
        { label: 'Lead-to-Conversion', value: 'Improved significantly' },
        { label: 'Brand Awareness', value: 'Enhanced in premium gifting segment' },
      ],
      highlights: [
        '32.6% lead qualification rate — well above industry benchmarks for gifting lead generation',
        'Improved lead-to-conversion efficiency through structured targeting and multi-touchpoint retargeting',
        'Enhanced brand awareness and consideration specifically in the premium corporate gifting segment',
      ],
    },
    keyTakeaway:
      'Gifting is driven by emotion and context, not just intent. By combining structured lead generation with persona-led creative storytelling, Social Kutlet helped build a high-quality, scalable lead engine for a premium gifting brand.',
  },

  {
    slug: 'foxtale',
    client: 'Foxtale',
    category: 'Beauty & Lifestyle',
    tag: 'Google Ads',
    industry: 'D2C Beauty and Skincare',
    heroImage: '/case-studies/foxtale/hero.jpg',
    contentImages: [
      '/case-studies/foxtale/image-1.jpg',
      '/case-studies/foxtale/image-2.jpg',
    ],
    headline: 'Scaling a D2C Skincare Brand Through Campaign Restructuring on Google Ads',
    subheadline: '200% ad spend scale with improved ROAS — proving that structure unlocks efficiency.',
    heroMetrics: [
      { label: 'Ad Spend Scale', value: '+200%' },
      { label: 'ROAS Improvement', value: '+10%' },
      { label: 'Creative Control', value: 'Fully Restored' },
    ],
    challenge: {
      intro: "Foxtale had strong products and brand recognition but was hitting a ceiling on Google — Performance Max was constraining their ability to scale without ROAS degradation.",
      points: [
        'Difficulty scaling Google Ads campaigns efficiently — ROAS fell as spend increased due to structural issues',
        'Need to increase ad spend significantly without compromising return on ad spend',
        'Limited control over campaign structure and creative performance within Performance Max campaigns',
      ],
    },
    approach: {
      intro: "We audited the entire Google account and rebuilt the architecture — separating campaign types, restoring creative control, and enabling intelligent budget allocation.",
      steps: [
        'Conducted a comprehensive account-level audit to identify structural inefficiencies and scale opportunities across all campaigns',
        'Restructured existing Performance Max campaigns by separating PMax assets, removing display components, and launching dedicated display campaigns for better creative control',
        'Introduced a multi-campaign structure including Display, Discovery, Search DSA, and Shopping campaigns to improve targeting precision and budget allocation',
        'Optimised budget distribution based on real-time performance signals across all campaign types — ensuring spend followed performance',
        'Expanded reach by integrating a brand keyword strategy within Performance Max, enabling acquisition beyond existing brand traffic',
      ],
    },
    creativeFramework: {
      intro: "With creative control restored, we could test and iterate at the granular level that D2C skincare demands.",
      points: [
        'Developed dedicated display creatives for each campaign type — free from PMax asset mixing',
        'Product-benefit-led creative for Search and Shopping — communicating specific results for specific skin concerns',
        'Discovery creative designed for awareness — introducing Foxtale to audiences not yet in the market',
        'Continuous A/B testing across headline copy, imagery, and offer framing at the campaign level',
        'Performance feedback loops: winning creatives from Display informed Shopping assets and vice versa',
      ],
    },
    results: {
      metrics: [
        { label: 'Ad Spend Scale', value: '+200%' },
        { label: 'ROAS Improvement', value: '+10% despite 200% more spend' },
        { label: 'Campaign Efficiency', value: 'Improved across all types' },
        { label: 'Creative Control', value: 'Fully restored and granular' },
      ],
      highlights: [
        '200% increase in ad spend achieved while simultaneously improving ROAS by 10% — disproving the scale/efficiency tradeoff',
        'Structural rebuild restored full creative control, enabling real A/B testing for the first time',
        'Multi-campaign architecture provided clear performance attribution that was impossible inside PMax',
      ],
    },
    keyTakeaway:
      'Scalable growth on Google Ads requires structured campaign architecture and controlled experimentation — not just higher budgets. By restructuring Performance Max and building a diversified campaign mix, Social Kutlet enabled higher spend efficiency while improving overall returns for a leading D2C skincare brand.',
  },

  {
    slug: 'tata-simply-better',
    client: 'Tata Simply Better',
    category: 'FMCG & Food',
    tag: 'FMCG Performance',
    industry: 'D2C Food & FMCG (Cold-Pressed Oils)',
    heroImage: '/case-studies/tata-simply-better/hero.jpg',
    contentImages: [
      '/case-studies/tata-simply-better/image-1.jpg',
      '/case-studies/tata-simply-better/image-2.jpg',
    ],
    headline: 'Scaling a D2C Cold-Pressed Oils Brand Through Full-Funnel and Vernacular Strategy',
    subheadline: '25–30% MoM sales growth sustained over 6 months with 2X order volume growth.',
    heroMetrics: [
      { label: 'MoM Sales Growth', value: '25–30%' },
      { label: 'Order Volume', value: '2X in 6 months' },
      { label: 'AOV Uplift', value: '+20%' },
    ],
    challenge: {
      intro: "Tata Simply Better needed to build brand awareness from a relatively low base in the competitive cold-pressed oils segment while driving both new and repeat purchases simultaneously.",
      points: [
        'Need to build brand awareness in a competitive FMCG category against established and emerging players',
        'Drive new customer acquisition and repeat purchase behaviour simultaneously — two different objectives, one budget',
        'Stagnant average order value limiting revenue growth despite healthy transaction volumes',
        'Scale ad spends significantly without impacting campaign efficiency or ROAS',
      ],
    },
    approach: {
      intro: "We built a full-funnel, multi-channel system anchored by regional intelligence — treating India's FMCG market as the hyper-local opportunity it is.",
      steps: [
        'Implemented a full-funnel, multi-channel performance system covering acquisition and retention in a single integrated architecture',
        'Deployed a Test & Learn model to identify high-performing customer cohorts and optimise toward them over time',
        'Built seasonality-led GTM plans to maximise demand during peak consumption cycles and regional purchase patterns',
        'Increased AOV via larger pack sizes — 5L and 15L variants — shifting the purchase value without increasing customer effort',
        'Shifted promotional strategy from discounts to value-led offers (GWP and merchandising) to protect brand positioning',
        'Activated quick commerce collaboration ads for faster conversions and to meet consumers at the point of intent',
      ],
    },
    creativeFramework: {
      intro: "FMCG creative in India cannot be generic — regional language, local buying behaviour, and cultural relevance are non-negotiable performance drivers.",
      points: [
        'Tested multiple creative formats: statics, videos, and UGC-led content to identify the best-performing mix for each market',
        'Deployed vernacular creatives across key regions, aligning messaging with local buying behaviour and cultural context',
        'Continuously optimised landing pages, hooks, and ad copy to improve conversion rates across the funnel',
        'Collaborated with regional influencers to build trust and drive higher engagement within specific geographic markets',
        'Identified and scaled high-performing vernacular and geography combinations based on engagement and conversion data',
      ],
    },
    results: {
      metrics: [
        { label: 'MoM Sales Growth', value: '25–30% (sustained)' },
        { label: 'Order Volume Growth', value: '2X in 6 months' },
        { label: 'Ad Spend Scale', value: '2X with maintained efficiency' },
        { label: 'AOV Uplift', value: '+20% MoM' },
        { label: 'Retention Rate', value: '30–40% monthly repeat' },
      ],
      highlights: [
        '25–30% MoM sales growth sustained over 6 months — not a spike, but a compounding trajectory',
        '2X order volume growth with 2X ad spend scale and maintained efficiency — proving the architecture scaled cleanly',
        '30–40% monthly repeat purchase rate indicating strong retention performance alongside acquisition',
      ],
    },
    keyTakeaway:
      "FMCG growth is hyper-local, not just digital. By combining performance marketing with a strong vernacular and regional creative engine, Social Kutlet unlocked scalable, repeat-driven growth for a cold-pressed oils brand backed by one of India's most trusted conglomerates.",
  },

  {
    slug: 'jodi-life',
    client: 'Jodi Life',
    category: 'D2C & E-commerce',
    tag: 'Fashion & Lifestyle',
    industry: 'D2C Fashion and Lifestyle (India & 50+ Countries)',
    heroImage: '/case-studies/jodi-life/hero.jpg',
    contentImages: [
      '/case-studies/jodi-life/image-1.jpg',
      '/case-studies/jodi-life/image-2.jpg',
    ],
    headline: 'Scaling a Pune-Based Handcrafted Fashion Label Through Performance Marketing and a Test & Learn Approach',
    subheadline: '71% CAC reduction and 60% revenue growth while protecting premium brand positioning.',
    heroMetrics: [
      { label: 'CAC Reduction', value: '-71%' },
      { label: 'Revenue Growth', value: '+60%' },
      { label: 'AOV Increase', value: '+32%' },
    ],
    challenge: {
      intro: "Jodi Life needed to scale a premium handcrafted fashion brand — without discounting, without compromising brand equity, and without the large budgets that usually underpin fashion brand building.",
      points: [
        'Premium product pricing in a niche market with limited scope for discounts or promotional offers to avoid brand dilution',
        'Limited digital marketing budgets while needing to drive growth across every new collection launch',
        'High new customer acquisition cost (CAC) making profitable scaling extremely difficult to achieve',
        'Need to establish brand presence in international markets including the Gulf, Europe, Indo-Pacific, and the USA',
      ],
    },
    approach: {
      intro: "We deployed a Test & Learn methodology at scale — using data to identify the right products, audiences, and geographies before committing significant budget.",
      steps: [
        'Deployed a continuous Test & Learn (T&L) methodology to identify the right products for first-time buyers and build up-sell and cross-sell strategies',
        'Launched Brand Awareness and Consideration campaigns with carefully designed funnel structures to extract value from every stage of the buyer journey',
        'Expanded product verticals beyond women\'s clothing to include Men\'s Clothing, Jewellery, Home Décor, Fragrances, Furniture, and Stationery to support AOV growth',
        'Identified target geographies using website visitor data, weather conditions, collection relevance, supply chain capabilities, and cultural diversity to minimise wastage',
        'Deployed ad-sequence-based approaches to educate users on high-value products and nurture cold audiences towards purchase over multiple touchpoints',
        'Set up remarketing campaigns via website custom audiences across digital ads, email, and WhatsApp to continuously nurture audiences across product categories',
      ],
    },
    creativeFramework: {
      intro: "For a handcrafted fashion brand, creative is not just marketing — it's the primary vehicle for communicating artisanship, story, and value.",
      points: [
        'Conducted continuous creative and persona testing to establish KPIs for top, middle, and bottom-funnel ads — ensuring timely refresh to avoid fatigue',
        'Developed collection-specific narratives with moodboard-style visuals drawing from prints, art, music, and global references to tell each collection\'s story',
        'Used carousel formats for photo ads and video for Reels and Stories, each with clear calls to action appropriate to funnel stage',
        'Prioritised product and collection storytelling over discount-led communication — limiting promotions strictly to festive periods',
        'Collaborated with influencers and leveraged UGC to expand reach and build social credibility for international audiences',
        'Deployed Google Search and Shopping campaigns with Brand Protection campaigns ensuring maximum impression share on brand keywords',
      ],
    },
    results: {
      metrics: [
        { label: 'CAC Reduction', value: '-71.26% (₹1,037 → ₹298)' },
        { label: 'Revenue Growth', value: '+60% within a year' },
        { label: 'AOV Increase', value: '+32.54%' },
        { label: 'New User Growth', value: '14.4% → 36% of acquisitions' },
      ],
      highlights: [
        'CAC dropped 71.26% — from ₹1,037 in March to ₹298 in April 2022 — transforming the economics of the business',
        '60% revenue growth within a year while maintaining premium positioning and avoiding discount-led campaigns',
        'New user acquisition nearly tripled as a share of total — demonstrating true top-of-funnel expansion',
      ],
    },
    keyTakeaway:
      'Scaling a premium handcrafted fashion brand requires a disciplined approach that protects brand equity while driving efficient growth. By combining a Test & Learn framework with structured funnel marketing, intent-based search strategies, and story-driven creatives, Social Kutlet enabled Jodi Life to significantly reduce acquisition costs, grow revenue, and expand its customer base both domestically and internationally.',
  },

  {
    slug: 'koko',
    client: 'KOKO',
    category: 'F&B & Healthcare',
    tag: 'F&B Marketing',
    industry: 'Premium F&B / Fine Dining (Hyderabad, Bangalore, Mumbai, Goregaon)',
    heroImage: '/case-studies/koko/hero.jpg',
    contentImages: [
      '/case-studies/koko/image-1.jpg',
      '/case-studies/koko/image-2.jpg',
    ],
    headline: 'Building Premium Brand Presence and High-Quality Lead Generation for a Multi-City Fine Dining Asian Restaurant',
    subheadline: '68% engagement growth, 3.2X reach, and a successful Goregaon launch — all while keeping the brand at the top end of the market.',
    heroMetrics: [
      { label: 'Engagement Growth', value: '+68%' },
      { label: 'Reach Growth', value: '3.2X' },
      { label: 'Lead Quality Uplift', value: '+74%' },
    ],
    challenge: {
      intro: "KOKO needed to build a consistent aspirational identity across four distinct city markets while generating high-quality leads — all without diluting its premium fine dining positioning.",
      points: [
        'Establishing a consistent and aspirational brand identity across multiple cities with distinct dining cultures and expectations',
        'Attracting high-intent, high-affinity diners rather than generating mass, low-quality enquiries that waste sales team effort',
        'Generating quality leads for reservations, private dining, and event bookings without compromising the premium brand positioning',
        'Building anticipation and momentum for the new Goregaon outlet while maintaining performance across existing locations',
        'Competing in saturated urban markets where premium Asian dining has several well-established and well-funded players',
      ],
    },
    approach: {
      intro: "We built a precision-first strategy that prioritised the right diners over the most diners — using audience intelligence and aspirational content to attract KOKO's natural audience.",
      steps: [
        'Conducted a brand and audience audit across all four city markets to identify perception gaps and high-value audience segments in each location',
        'Defined a clear audience framework targeting premium diners — people who valued culinary experience, ambience, and occasion dining over price',
        'Deployed lead generation campaigns with thoughtfully designed form flows capturing occasion type, party size, and city to prioritise lead quality over volume',
        'Built city-specific content and campaign strategies that respected the cultural nuances of Hyderabad, Bangalore, Mumbai, and Goregaon audiences',
        'Created a dedicated launch strategy for Goregaon — including teaser content, countdown campaigns, and local influencer activations to build anticipation',
      ],
    },
    creativeFramework: {
      intro: "A fine dining brand's creative has one primary job: make the audience feel the experience before they walk through the door.",
      points: [
        'Developed a cohesive visual identity reflecting the restaurant\'s high-end ambience through atmospheric imagery of the space, plating, and cocktail craft',
        'Built content pillars around signature dishes, the bar programme, chef specials, and the restaurant lifestyle to drive aspiration and recall',
        'Produced Reels and short-form videos showcasing ambience, live counters, and signature Asian preparations to boost organic reach and save-worthy content',
        'Ran city-specific influencer campaigns with food and lifestyle creators, focusing on experiential and credibility-driven content over product placement',
        'Created occasion-specific campaigns for Valentine\'s Day, anniversary dinners, corporate dining, and festive bookings throughout the year',
        'Launched teaser and countdown content for the Goregaon outlet to build local anticipation before opening',
      ],
    },
    results: {
      metrics: [
        { label: 'Engagement Rate Growth', value: '+68% in 6 months' },
        { label: 'Reach Growth', value: '3.2X across city markets' },
        { label: 'Follower Growth', value: '+42%' },
        { label: 'Lead Submissions', value: '+55%' },
        { label: 'Lead Quality', value: '+74% improvement' },
        { label: 'Goregaon Launch', value: '70+ reservations in first 3 weeks' },
        { label: 'Influencer Reach', value: '4.7M impressions at 6.2% engagement' },
        { label: 'CPL Reduction', value: '-38%' },
      ],
      highlights: [
        '68% engagement growth across Instagram and Facebook within 6 months — organic traction improving alongside paid',
        'Goregaon launch generated over 70 qualified reservation enquiries within the first 3 weeks — a strong validation of the launch strategy',
        'Lead quality improved 74% while cost per lead fell 38% — proving that targeting precision, not just volume, was the right approach',
      ],
    },
    keyTakeaway:
      "For a premium restaurant brand, success is measured by relevance and brand elevation — not volume alone. By balancing aspirational content with precision lead capture across four cities, Social Kutlet helped KOKO attract the right diners, grow an engaged community, and generate strong momentum for its newest location while keeping the brand firmly at the top end of the market.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
