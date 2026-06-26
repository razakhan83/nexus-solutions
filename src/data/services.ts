export interface ServiceExample {
  name: string;
  challenge: string;
  result: string;
  stat: string;
}

export interface DeepFeature {
  title: string;
  description: string;
  image?: string;
  bullets: string[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  deepFeatures: DeepFeature[];
  image: string;
  brandLogos?: { name: string; url: string; }[];
  examples: ServiceExample[];
}

export const services: Service[] = [
  {
    slug: "custom-web-development",
    title: "Custom Web Development",
    description: "Building ultra-fast, server-side rendered platforms and clean static sites with minimalist, modern UI frameworks.",
    longDescription: "We engineer highly scalable and lightning-fast web experiences using modern technologies. From corporate static sites to complex web applications, we focus on responsive, mobile-first design that captivates users and ranks high on search engines.",
    features: [
      "High-performance Next.js & React frameworks.",
      "Lightning-fast static websites for corporate branding.",
      "Minimalist, responsive, and mobile-first UI/UX."
    ],
    deepFeatures: [
      {
        title: "Modern Tech Stack",
        description: "Utilizing Next.js, React, and Tailwind CSS to ensure your site is incredibly fast and secure.",
        image: "/undraw_react_ytu4.svg",
        bullets: [
          "Server-Side Rendering (SSR) for instant load times.",
          "Secure architecture immune to typical CMS vulnerabilities."
        ]
      },
      {
        title: "Mobile-First Design",
        description: "Every interface is built for mobile devices first, ensuring flawless experiences across all screen sizes.",
        image: "/undraw_mobile-ux_5h2w.svg",
        bullets: [
          "Fluid responsive layouts that adapt dynamically.",
          "Touch-optimized interfaces and gesture-friendly interactions."
        ]
      },
      {
        title: "Performance Optimization",
        description: "Obsessive focus on Core Web Vitals to guarantee sub-second load times globally.",
        image: "/undraw_fast-loading_ae60.svg",
        bullets: [
          "Automated image and asset minification.",
          "Global Edge caching and CDN routing."
        ]
      },
      {
        title: "Custom Backend Logic",
        description: "Engineering scalable databases and API-first architectures to power your application.",
        image: "/undraw_code-review_jdgp.svg",
        bullets: [
          "Headless CMS integration for effortless content management.",
          "Scalable database modeling built for high concurrency."
        ]
      }
    ],
    image: "/undraw_web-developer_gxaa.svg",
    brandLogos: [
      { name: "Next.js", url: "/Services icons/Next.JS.png" },
      { name: "React", url: "/Services icons/React.png" },
      { name: "Tailwind", url: "/Services icons/tailwindcss-jro9es7xxpcvj06j6yxfjm-removebg-preview.png" }
    ],
    examples: []
  },
  {
    slug: "ecommerce-solutions-shopify",
    title: "E-Commerce Solutions (Shopify & WooCommerce)",
    description: "End-to-end storefront design, theme configuration, and conversion rate optimization to scale your online sales.",
    longDescription: "We build powerful, automated e-commerce stores designed purely for conversion. Whether it's Shopify or WooCommerce, we handle everything from product configurations and seamless checkout flows to advanced CRO to ensure your sales multiply.",
    features: [
      "Full Shopify & WooCommerce automated store setup.",
      "Product page configuration and checkout funnel design.",
      "Conversion Rate Optimization (CRO) to maximize sales."
    ],
    deepFeatures: [
      {
        title: "Optimized Checkout Funnels",
        description: "Reducing cart abandonment with streamlined, single-page checkout flows.",
        image: "/undraw_add-to-cart_c8f2.svg",
        bullets: [
          "Frictionless single-page checkout logic.",
          "Automated abandoned cart email recovery flows."
        ]
      },
      {
        title: "Data-Driven CRO",
        description: "A/B testing and behavioral analytics to continually improve your conversion rates.",
        image: "/undraw_ui-analysis_crhb.svg",
        bullets: [
          "Heatmap tracking to analyze user behavior.",
          "A/B testing of call-to-actions and product layouts."
        ]
      },
      {
        title: "Fulfillment Automation",
        description: "Integrating logistics seamlessly so orders route straight to your shipping partners.",
        image: "/undraw_setup_fzje.svg",
        bullets: [
          "Syncing logic for multiple fulfillment warehouses.",
          "Automated dropshipping and inventory tracking."
        ]
      },
      {
        title: "Loyalty & Retention",
        description: "Building systems that turn one-time buyers into lifetime customers.",
        image: "/undraw_super-thank-you_flq2.svg",
        bullets: [
          "Automated VIP point and reward systems.",
          "Frictionless recurring subscription models."
        ]
      }
    ],
    image: "/undraw_online-shopping_po8w.svg",
    brandLogos: [
      { name: "Shopify", url: "/Services icons/Shopify.png" },
      { name: "WooCommerce", url: "/Services icons/woocommerce-icon-removebg-preview.png" }
    ],
    examples: []
  },
  {
    slug: "payment-gateway-integration",
    title: "Advanced Payment Integrations",
    description: "Setting up trusted, secure checkouts and seamless API configurations for local and international payment flows.",
    longDescription: "A broken payment gateway kills sales. We specialize in robust, secure integration for local providers like AsaanPay, JazzCash, and EasyPaisa, as well as global gateways like Stripe and 2Checkout, complete with deep fraud prevention.",
    features: [
      "Specialized integration with AsaanPay, JazzCash and Easypaisa.",
      "API configurations, multi-currency support, and testing.",
      "Fraud prevention and secure payment processing steps."
    ],
    deepFeatures: [
      {
        title: "Local & Global Coverage",
        description: "Connect to customers worldwide and locally with customized payment APIs.",
        image: "/undraw_pay-online_806n.svg",
        bullets: [
          "Multi-currency routing for international buyers.",
          "Thorough sandbox testing for API handshake reliability."
        ]
      },
      {
        title: "Fraud Prevention",
        description: "Implementing advanced security standards to protect your revenue and minimize chargebacks.",
        image: "/undraw_security_0ubl.svg",
        bullets: [
          "3D Secure 2.0 protocol implementation.",
          "Customized high-risk blocking rules."
        ]
      },
      {
        title: "Subscription Management",
        description: "Flawless technical setups for businesses running on recurring revenue models.",
        image: "/undraw_digital-calendar_180l.svg",
        bullets: [
          "Automated recurring billing cycles and dunning management.",
          "Prorated upgrade routing and trial period logic."
        ]
      },
      {
        title: "Financial Reporting",
        description: "Connecting your gateways directly to your accounting software for instant visibility.",
        image: "/undraw_charts_31si.svg",
        bullets: [
          "Real-time centralized revenue dashboards.",
          "Automated ledger syncing and tax calculation logic."
        ]
      }
    ],
    image: "/undraw_credit-card_t6qm.svg",
    brandLogos: [
      { name: "Easypaisa", url: "/Services icons/Easypaisa.png" },
      { name: "JazzCash", url: "/Services icons/JazzCash.png" },
      { name: "AsaanPay", url: "/Services icons/AssanPay.png" }
    ],
    examples: []
  },
  {
    slug: "product-photography-ai-editing",
    title: "AI-Powered Product Visuals",
    description: "High-volume product extraction, advanced AI-driven background generation, and premium catalog-ready post-processing.",
    longDescription: "Visuals are the new storefront. We provide catalog-ready product editing, high-volume image extraction, and advanced AI-generated backgrounds to make your jewelry, apparel, or lifestyle products look completely premium.",
    features: [
      "Precision background removal and high-volume image extraction.",
      "Advanced AI-enhanced background generation and texturing.",
      "Catalog-ready editing for jewelry, apparel, and lifestyle brands."
    ],
    deepFeatures: [
      {
        title: "AI-Enhanced Backgrounds",
        description: "Using cutting-edge AI to generate breathtaking contextual backgrounds for standard product shots.",
        image: "/undraw_image-editing_qqbe.svg",
        bullets: [
          "Contextual lifestyle generation from raw product photos.",
          "Pixel-perfect edge masking and shadow recreation."
        ]
      },
      {
        title: "Catalog-Ready Outputs",
        description: "Flawless color correction, retouching, and sizing for immediate upload to your store.",
        image: "/undraw_photo-session_flr1.svg",
        bullets: [
          "Automated batch resizing for platform compliance.",
          "Consistent color-grade matching across product lines."
        ]
      },
      {
        title: "Dynamic 3D Mockups",
        description: "Elevating flat apparel designs and standard assets into photorealistic 3D renders.",
        image: "/undraw_visualization_zhab.svg",
        bullets: [
          "Transforming 2D flats into dynamic lifestyle mockups.",
          "Accurate perspective matching and lighting integration."
        ]
      },
      {
        title: "High-Volume Processing",
        description: "Scaling our visual pipeline to handle entire seasonal catalogs without dropping quality.",
        image: "/undraw_photocopy_k0g7.svg",
        bullets: [
          "Thousands of SKUs processed and delivered rapidly.",
          "Strict adherence to your unique brand aesthetic guidelines."
        ]
      }
    ],
    image: "/undraw_taking-photo_s23u.svg",
    brandLogos: [
      { name: "ChatGPT", url: "/Services icons/ChatGPT.png" },
      { name: "Gemini", url: "/Services icons/Gemini.png" },
      { name: "Photoshop", url: "/Services icons/adobe-photoshop-logos-adobe-icons-abstract-art-free-vector-removebg-preview.png" }
    ],
    examples: []
  },
  {
    slug: "video-editing-short-form",
    title: "High-Retention Video & Short Content",
    description: "Viral short-form editing with engaged pacing, custom high-CTR thumbnails, and high-retention motion effects.",
    longDescription: "Attention spans are short. We engineer viral, high-retention short-form content for Reels, TikToks, and Shorts. From rapid pacing to dynamic subtitles and trending motion effects, our edits are designed to farm engagement.",
    features: [
      "Viral short-form editing for Instagram Reels, TikTok, and YouTube Shorts.",
      "Engaged pacing, subtitles, and trending motion effects.",
      "Custom, high-CTR video and product thumbnails."
    ],
    deepFeatures: [
      {
        title: "Algorithmic Pacing",
        description: "Editing designed specifically around social media algorithms to maximize watch time.",
        image: "/undraw_watching-reels_53wl.svg",
        bullets: [
          "Pattern-interrupt edits to maintain viewer attention.",
          "Dynamic subtitle animation synchronized with speech."
        ]
      },
      {
        title: "High-CTR Thumbnails",
        description: "Eye-catching custom thumbnails that drastically increase your click-through rates.",
        image: "/undraw_click-interaction_r772.svg",
        bullets: [
          "Contrast-heavy text and subject highlighting.",
          "A/B tested visual hooks for maximum discoverability."
        ]
      },
      {
        title: "Viral Hook Engineering",
        description: "Scripting and editing the first 3 seconds to guarantee the viewer stops scrolling.",
        image: "/undraw_ideas_vn7a.svg",
        bullets: [
          "Aggressive 3-second visual and auditory attention grabbers.",
          "Psychological framing that builds immediate curiosity."
        ]
      },
      {
        title: "Platform-Specific Sizing",
        description: "Optimizing the exact same content to perform natively on every different app.",
        image: "/undraw_responsive_csbt.svg",
        bullets: [
          "Perfect 9:16 vertical exports for Reels and TikTok.",
          "Optimized 1:1 and 4:5 feed formatting for legacy platforms."
        ]
      }
    ],
    image: "/undraw_watching-reels_53wl.svg",
    brandLogos: [
      { name: "Instagram Reels", url: "/Services icons/instagram-reel-removebg-preview.png" },
      { name: "YouTube Shorts", url: "/Services icons/Youtube_shorts_icon.svg.png" },
      { name: "CapCut", url: "/Services icons/Capcut-icon.png" }
    ],
    examples: []
  },
  {
    slug: "meta-ads-campaign-scaling",
    title: "Meta Ads & Revenue Scaling",
    description: "Running high-ROI, targeted campaigns on Facebook and Instagram through Meta Business Suite to scale daily sales.",
    longDescription: "We use Meta Business Suite to deploy aggressive, behavior-based retargeting and precision audience campaigns. We track every pixel to ensure daily ROI optimization, scaling your ad spend profitably.",
    features: [
      "Complete setup and management via Meta Business Suite.",
      "Precision audience targeting and behavior-based retargeting.",
      "In-depth analytics tracking, pixel setups, and daily ROI optimization."
    ],
    deepFeatures: [
      {
        title: "Behavior-Based Retargeting",
        description: "Serving customized ads to users based on the exact actions they took on your website.",
        image: "/undraw_mobile-marketing_7x7m.svg",
        bullets: [
          "View-content to purchase funnel mapping.",
          "Dynamic product ads based on cart abandonment."
        ]
      },
      {
        title: "Pixel & Analytics",
        description: "Flawless tracking architecture to attribute every single sale back to the correct ad.",
        image: "/undraw_marketing-analysis_2u5r.svg",
        bullets: [
          "Server-side Conversions API (CAPI) implementation.",
          "Real-time ROAS (Return On Ad Spend) attribution."
        ]
      },
      {
        title: "Lookalike Audience Scaling",
        description: "Using machine learning to find thousands of new users who match your best customers.",
        image: "/undraw_followers_m4z4.svg",
        bullets: [
          "Utilizing lifetime-value (LTV) data for hyper-targeted growth.",
          "Seed audience expansion testing across multiple regions."
        ]
      },
      {
        title: "Creative A/B Testing",
        description: "Systematically testing visuals to find the ultimate winning ad combination.",
        image: "/undraw_ui-analysis_crhb.svg",
        bullets: [
          "Multivariate testing of ad copy, headlines, and videos.",
          "Relentless ad fatigue management and creative refreshing."
        ]
      }
    ],
    image: "/undraw_mobile-marketing_7x7m.svg",
    brandLogos: [
      { name: "Meta", url: "/Services icons/Meta Ads Meta.png" },
      { name: "Instagram", url: "/Services icons/Instagram_icon.png" }
    ],
    examples: []
  },
  {
    slug: "google-ads-search-marketing",
    title: "Google Ads & Search Marketing",
    description: "Capturing high-intent buyers using precision keyword targeting, display campaigns, and video ad tracking.",
    longDescription: "Google Ads is about intent. We structure highly targeted Search, Display, and Video campaigns using deep keyword research and aggressive negative-keyword filtering to drastically lower your cost-per-click and outbid competitors.",
    features: [
      "Target-driven Google Search, Display, and Video campaigns.",
      "Keyword research, negative-keyword filtering, and budget scaling.",
      "Competitor analysis to bid effectively and lower your cost-per-click."
    ],
    deepFeatures: [
      {
        title: "High-Intent Capture",
        description: "Placing your brand at the exact top of search results when users are ready to buy.",
        image: "/undraw_web-search_7oif.svg",
        bullets: [
          "Transactional long-tail keyword targeting.",
          "Sitelink and callout ad extension optimization."
        ]
      },
      {
        title: "Budget Sculpting",
        description: "Constantly refining search terms and eliminating wasted spend through negative keywords.",
        image: "/undraw_spreadsheet_uj8z.svg",
        bullets: [
          "Aggressive negative keyword harvesting.",
          "Automated bid cap algorithms to prevent overspending."
        ]
      },
      {
        title: "Competitor Conquesting",
        description: "Directly intercepting traffic that is searching for your biggest industry rivals.",
        image: "/undraw_business-decisions_7vkl.svg",
        bullets: [
          "Bidding on rival brand terms to capture their market share.",
          "Crafting superior comparison-based ad copy."
        ]
      },
      {
        title: "Google Shopping Feeds",
        description: "Putting your actual physical products directly into the top search carousel.",
        image: "/undraw_shopping-app_b80f.svg",
        bullets: [
          "Dynamic inventory syncing via Google Merchant Center.",
          "Optimized product titles to dominate Shopping queries."
        ]
      }
    ],
    image: "/mohamed_hassan-online-advertising-6693945.svg",
    brandLogos: [
      { name: "Google Ads", url: "/Services icons/Google Ads.png" }
    ],
    examples: []
  },
  {
    slug: "seo-smm",
    title: "Organic Growth (SEO & SMM)",
    description: "Technical Next.js/Shopify SEO ranking alongside consistent social account management and content scheduling.",
    longDescription: "Stop relying purely on paid ads. We build your organic empire through technical SEO specialized in Next.js and Shopify, combined with end-to-end Social Media Management to automate your consistent daily presence.",
    features: [
      "Technical & On-Page SEO (Specialized in Next.js & Shopify stores).",
      "End-to-end Social Media Management and content scheduling.",
      "Building consistent organic presence to cut down paid advertising dependency."
    ],
    deepFeatures: [
      {
        title: "Technical SEO",
        description: "Fixing crawl errors and utilizing modern SSR to dominate search engine indexing.",
        image: "/undraw_growth-analytics_vzjz.svg",
        bullets: [
          "Core Web Vitals performance optimization.",
          "Rich snippet and JSON-LD schema markup."
        ]
      },
      {
        title: "Social Automation",
        description: "Handling your entire social calendar so you can focus on running your business.",
        image: "/undraw_social-media-post_tg7l.svg",
        bullets: [
          "Multi-platform strategic content scheduling.",
          "Trend-jacking and proactive community engagement."
        ]
      },
      {
        title: "Content Silos & Backlinking",
        description: "Structuring your website to become the absolute authority in your specific niche.",
        image: "/undraw_social-tree_p8cw.svg",
        bullets: [
          "Establishing strict topical authority via content silos.",
          "Acquiring high-DR (Domain Rating) ethical backlinks."
        ]
      },
      {
        title: "Community Management",
        description: "Turning passive followers into a dedicated tribe of brand loyalists.",
        image: "/undraw_welcoming_42an.svg",
        bullets: [
          "Active, fast-response direct message (DM) handling.",
          "Cultivating brand loyalists through proactive commenting."
        ]
      }
    ],
    image: "/undraw_social-growth_osro.svg",
    brandLogos: [
      { name: "SEO", url: "/Services icons/SEO.png" },
      { name: "Search Console", url: "/Services icons/google-search-console-icon-logo-png_seeklogo-624699-removebg-preview.png" }
    ],
    examples: []
  }
];
