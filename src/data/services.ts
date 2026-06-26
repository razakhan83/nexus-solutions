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
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  deepFeatures: DeepFeature[];
  image: string;
  examples: ServiceExample[];
}

export const services: Service[] = [
  {
    slug: "custom-web-development",
    title: "Custom Web Development",
    description: "Building ultra-fast, modern web applications tailored to your business logic.",
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
        image: "/undraw_web-developer_gxaa.svg"
      },
      {
        title: "Mobile-First Design",
        description: "Every interface is built for mobile devices first, ensuring flawless experiences across all screen sizes.",
        image: "/undraw_mobile-testing_jhlw.svg"
      }
    ],
    image: "/undraw_web-developer_gxaa.svg",
    examples: []
  },
  {
    slug: "ecommerce-solutions-shopify",
    title: "E-Commerce Solutions & Shopify",
    description: "Complete turn-key development to launch and scale your online storefront.",
    longDescription: "We build powerful, automated e-commerce stores designed purely for conversion. Whether it's Shopify or WordPress, we handle everything from product configurations and seamless checkout flows to advanced CRO to ensure your sales multiply.",
    features: [
      "Full Shopify & WordPress automated store setup.",
      "Product page configuration and checkout funnel design.",
      "Conversion Rate Optimization (CRO) to maximize sales."
    ],
    deepFeatures: [
      {
        title: "Optimized Checkout Funnels",
        description: "Reducing cart abandonment with streamlined, single-page checkout flows.",
        image: "/undraw_online-shopping_po8w.svg"
      },
      {
        title: "Data-Driven CRO",
        description: "A/B testing and behavioral analytics to continually improve your conversion rates.",
        image: "/undraw_ui-analysis_crhb.svg"
      }
    ],
    image: "/undraw_online-shopping_po8w.svg",
    examples: []
  },
  {
    slug: "payment-gateway-integration",
    title: "Payment Gateway Integration",
    description: "Seamless and secure checkout setups to handle local and international transactions.",
    longDescription: "A broken payment gateway kills sales. We specialize in robust, secure integration for local providers like AsaanPay, JazzCash, and EasyPaisa, as well as global gateways like Stripe and 2Checkout, complete with deep fraud prevention.",
    features: [
      "Specialized integration with AsaanPay and local providers.",
      "API configurations, multi-currency support, and testing.",
      "Fraud prevention and secure payment processing steps."
    ],
    deepFeatures: [
      {
        title: "Local & Global Coverage",
        description: "Connect to customers worldwide and locally with customized payment APIs.",
        image: "/undraw_online-payments_d5ef.svg"
      },
      {
        title: "Fraud Prevention",
        description: "Implementing advanced security standards to protect your revenue and minimize chargebacks.",
        image: "/undraw_safe_0mei.svg"
      }
    ],
    image: "/undraw_credit-card_t6qm.svg",
    examples: []
  },
  {
    slug: "product-photography-ai-editing",
    title: "Product Photography & AI Editing",
    description: "Premium post-processing and shoots that make your products stand out on digital shelves.",
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
        image: "/undraw_image-editing_qqbe.svg"
      },
      {
        title: "Catalog-Ready Outputs",
        description: "Flawless color correction, retouching, and sizing for immediate upload to your store.",
        image: "/undraw_photo-session_flr1.svg"
      }
    ],
    image: "/undraw_taking-photo_s23u.svg",
    examples: []
  },
  {
    slug: "video-editing-short-form",
    title: "Video Editing & Short-Form Content",
    description: "High-retention video production designed for organic and paid reach.",
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
        image: "/undraw_video-upload_70s5.svg"
      },
      {
        title: "High-CTR Thumbnails",
        description: "Eye-catching custom thumbnails that drastically increase your click-through rates.",
        image: "/undraw_videographer_v91u.svg"
      }
    ],
    image: "/undraw_videographer_v91u.svg",
    examples: []
  },
  {
    slug: "meta-ads-campaign-scaling",
    title: "Meta Ads & Campaign Scaling",
    description: "Data-driven paid advertising to turn clicks into high-ticket customers.",
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
        image: "/undraw_mobile-marketing_7x7m.svg"
      },
      {
        title: "Pixel & Analytics",
        description: "Flawless tracking architecture to attribute every single sale back to the correct ad.",
        image: "/undraw_charts_31si.svg"
      }
    ],
    image: "/undraw_mobile-marketing_7x7m.svg",
    examples: []
  },
  {
    slug: "google-ads-search-marketing",
    title: "Google Ads & Search Marketing",
    description: "Capturing high-intent buyers exactly when they are searching for your product.",
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
        image: "/undraw_online-ad_703t.svg"
      },
      {
        title: "Budget Sculpting",
        description: "Constantly refining search terms and eliminating wasted spend through negative keywords.",
        image: "/undraw_analyze_gcbr.svg"
      }
    ],
    image: "/mohamed_hassan-online-advertising-6693945.svg",
    examples: []
  },
  {
    slug: "seo-smm",
    title: "Search Engine Optimization (SEO) & SMM",
    description: "Driving organic growth and automating your daily digital operations.",
    longDescription: "Stop relying purely on paid ads. We build your organic empire through technical SEO specialized in Next.js and Shopify, combined with end-to-end Social Media Management to automate your consistent daily presence.",
    features: [
      "Technical & On-Page SEO (Specialized in Next.js & Shopify stores).",
      "End-to-end Social Media Management and content scheduling.",
      "Building consistent organic presence to cut down paid advertising dependency."
    ],
    deepFeatures: [
      {
        title: "Technical Next.js/Shopify SEO",
        description: "Fixing crawl errors and utilizing modern SSR to dominate search engine indexing.",
        image: "/undraw_growth-analytics_vzjz.svg"
      },
      {
        title: "Social Automation",
        description: "Handling your entire social calendar so you can focus on running your business.",
        image: "/undraw_social-expert_wfam.svg"
      }
    ],
    image: "/undraw_social-growth_osro.svg",
    examples: []
  }
];
