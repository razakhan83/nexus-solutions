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
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty with targeted, high-impact social campaigns.",
    longDescription: "In today's digital landscape, social media is the frontline of brand identity. Our Social Media Marketing services go beyond vanity metrics. We focus on building deep, authentic connections with your target demographic through data-driven content strategies, proactive community management, and high-impact influencer partnerships. We engineer campaigns that not only capture attention but drive measurable conversions and long-term brand loyalty.",
    features: ["Content Strategy & Creation", "Community Management", "Influencer Partnerships"],
    deepFeatures: [
      {
        title: "Platform-Native Content Strategy",
        description: "We don't just crosspost. We develop bespoke strategies tailored to the unique algorithms and audience behaviors of Instagram, TikTok, LinkedIn, and X.",
        image: "/undraw_mobile-post_zwbe.svg"
      },
      {
        title: "Proactive Community Management",
        description: "Transforming passive followers into active brand advocates through continuous, high-quality engagement and rapid-response customer care.",
        image: "/undraw_social-expert_wfam.svg"
      },
      {
        title: "Influencer & Creator Partnerships",
        description: "Identifying and collaborating with high-ROI creators to amplify your message authentically within niche communities.",
        image: "/undraw_followers_m4z4.svg"
      }
    ],
    image: "/undraw_social-growth_osro.svg",
    examples: []
  },
  {
    slug: "google-ads-services",
    title: "Google Ads Services",
    description: "Drive high-intent traffic and maximize ROI with precision-engineered Google Ads campaigns.",
    longDescription: "When your customers are searching, you need to be at the top. Our Google Ads management isn't just about bidding on keywords; it's about intercepting high-intent buyers exactly when they are ready to convert. We engineer hyper-targeted Search, Display, and Performance Max campaigns backed by rigorous A/B testing and advanced server-side conversion tracking to ensure every dollar spent translates directly to your bottom line.",
    features: ["Search & Display Campaigns", "Conversion Tracking", "Budget Optimization"],
    deepFeatures: [
      {
        title: "Performance Max Integration",
        description: "Leveraging Google's advanced machine learning algorithms to distribute your budget efficiently across Search, Display, YouTube, and Discover networks.",
        image: "/undraw_online-ad_703t.svg"
      },
      {
        title: "Advanced Server-Side Tracking",
        description: "Implementing robust API tracking to bypass cookie restrictions and ensure every single conversion is accurately attributed to your campaigns.",
        image: "/undraw_analyze_gcbr.svg"
      },
      {
        title: "Continuous Budget Optimization",
        description: "Daily bidding adjustments and negative keyword sculpting to drastically reduce wasted spend and lower your Cost Per Acquisition (CPA).",
        image: "/undraw_charts_31si.svg"
      }
    ],
    image: "/undraw_online-ad_703t.svg",
    examples: []
  },
  {
    slug: "custom-web-app-development",
    title: "Custom Web & App Development",
    description: "Enterprise-grade, scalable web and mobile applications tailored exactly to your business needs.",
    longDescription: "Off-the-shelf software rarely fits complex business models perfectly. We architect and deploy custom web and mobile applications engineered for extreme scalability and flawless user experience. Utilizing modern stacks like React, Next.js, and Node, our engineering team builds secure, microservice-based platforms that streamline your operations and provide your users with blazing-fast, intuitive interfaces.",
    features: ["React & Next.js Stacks", "Native Mobile Apps", "Custom API Architecture"],
    deepFeatures: [
      {
        title: "Modern Jamstack Architecture",
        description: "Building incredibly fast, secure, and SEO-optimized web applications using Next.js and headless CMS solutions.",
        image: "/undraw_next-js_hy59.svg"
      },
      {
        title: "Scalable Microservices",
        description: "Decoupling your backend architecture into scalable, resilient microservices that can handle massive traffic spikes without going down.",
        image: "/undraw_cloudflare-dev_nf79.svg"
      },
      {
        title: "Cross-Platform Mobile Apps",
        description: "Delivering native-feeling mobile experiences on both iOS and Android using React Native, drastically reducing time-to-market.",
        image: "/undraw_mobile-apps_p0aa.svg"
      }
    ],
    image: "/undraw_develop-app_yg6p.svg",
    examples: []
  },
  {
    slug: "ecommerce-optimization",
    title: "E-commerce Optimization",
    description: "Boost conversions, reduce cart abandonment, and streamline your entire digital storefront.",
    longDescription: "Traffic means nothing if your store doesn't convert. Our E-commerce Optimization service is a forensic approach to maximizing your digital storefront's revenue. We conduct deep CRO (Conversion Rate Optimization) audits, implement advanced A/B testing methodologies, and completely streamline your checkout flows. We don't just change button colors; we use behavioral analytics to remove every point of friction between your customer and the 'Buy' button.",
    features: ["CRO Audits", "Checkout Flow Optimization", "A/B Testing Strategies"],
    deepFeatures: [
      {
        title: "Behavioral Analytics & Heatmapping",
        description: "We use tools like Hotjar to literally see where your customers are clicking, scrolling, and getting frustrated, allowing for data-backed redesigns.",
        image: "/undraw_ui-analysis_crhb.svg"
      },
      {
        title: "Frictionless Checkout Flows",
        description: "Redesigning multi-step checkouts into streamlined, high-converting one-page experiences with robust abandoned cart recovery systems.",
        image: "/undraw_shopping-app_b80f.svg"
      },
      {
        title: "Continuous A/B Testing",
        description: "Running rigorous, statistically significant split tests on product pages, pricing structures, and calls-to-action to incrementally guarantee revenue growth.",
        image: "/undraw_online-shopping_po8w.svg"
      }
    ],
    image: "/undraw_shopping-app_b80f.svg",
    examples: []
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    description: "Custom themes, plugin integration, and optimized WordPress CMS solutions for content-heavy sites.",
    longDescription: "WordPress powers the web, but an unoptimized WordPress site is a liability. We specialize in enterprise-level WordPress development, moving beyond bloated templates. We code highly performant, custom-tailored themes from the ground up. Whether you need a massive content publishing platform, intricate custom plugin development, or a complete overhaul of a sluggish legacy site, we build WordPress solutions that are secure, lightning-fast, and easy for your team to manage.",
    features: ["Custom Theme Design", "Plugin Development", "Speed & Security Audits"],
    deepFeatures: [
      {
        title: "Bespoke Theme Development",
        description: "No generic templates. We build custom, lightweight themes strictly tailored to your brand identity and optimized for Core Web Vitals.",
        image: "/undraw_website-setup_o2zf.svg"
      },
      {
        title: "Custom Plugin Architecture",
        description: "When off-the-shelf plugins fail or slow down your site, we develop secure, custom plugins to handle your exact business logic.",
        image: "/undraw_customize-app_wqo5.svg"
      },
      {
        title: "Enterprise Security & Speed Optimization",
        description: "Hardening your WordPress installation against vulnerabilities, implementing advanced caching, and optimizing the database for sub-second load times.",
        image: "/undraw_fast-loading_ae60.svg"
      }
    ],
    image: "/undraw_website-setup_o2zf.svg",
    examples: []
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    description: "Dominate search rankings and drive sustainable organic traffic with data-backed SEO strategies.",
    longDescription: "SEO is not about keyword stuffing; it's about establishing digital authority. Our Search Engine Optimization service is a holistic, data-backed approach to dominating the SERPs (Search Engine Results Pages). We combine deep technical SEO audits with high-quality, intent-driven content creation and authoritative off-page backlink strategies. We build a sustainable organic foundation that drives highly qualified, 'free' traffic to your website month after month.",
    features: ["Technical SEO", "On-Page & Off-Page Content", "Competitor Keyword Research"],
    deepFeatures: [
      {
        title: "Deep Technical Audits",
        description: "Fixing crawl errors, optimizing site architecture, improving page speed, and ensuring search engine bots can index your site flawlessly.",
        image: "/undraw_control-panel_s0j2.svg"
      },
      {
        title: "Intent-Driven Content Strategy",
        description: "Mapping user intent to keyword research to create comprehensive, authoritative content that actually answers your customers' questions.",
        image: "/undraw_code-sample_kpju.svg"
      },
      {
        title: "High-Authority Link Building",
        description: "Executing outreach campaigns to secure high-quality backlinks from reputable publications in your industry, massively boosting your domain authority.",
        image: "/undraw_growth-analytics_vzjz.svg"
      }
    ],
    image: "/undraw_fast-loading_ae60.svg",
    examples: []
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    description: "End-to-end Shopify store creation, custom liquid development, and theme optimization.",
    longDescription: "Shopify is a powerful engine, but true eCommerce dominance requires custom engineering. We provide end-to-end Shopify development, from initial store setup and UI design to complex Custom Liquid coding and API integrations. Whether you are migrating from Magento, scaling a Shopify Plus enterprise store, or need a headless Shopify build for ultimate speed, we engineer storefronts that look breathtaking and convert relentlessly.",
    features: ["Store Setup & UI Design", "Custom Liquid Coding", "Third-Party App Integrations"],
    deepFeatures: [
      {
        title: "Headless Shopify Architecture",
        description: "Decoupling the frontend using Next.js while utilizing Shopify's robust backend, resulting in instantaneous page loads and unrestricted design freedom.",
        image: "/undraw_online-groceries_n03y.svg"
      },
      {
        title: "Custom Liquid & App Development",
        description: "Writing custom Liquid code to modify theme behaviors and building private Shopify Apps when existing public apps don't meet your needs.",
        image: "/undraw_code-deployed_iwvu.svg"
      },
      {
        title: "Enterprise Migrations",
        description: "Seamlessly and securely migrating massive product catalogs, customer data, and order histories from legacy platforms to Shopify Plus.",
        image: "/undraw_order-food_c92i.svg"
      }
    ],
    image: "/undraw_online-groceries_n03y.svg",
    examples: []
  },
  {
    slug: "secure-payment-integrations",
    title: "Secure Payment Integrations",
    description: "Seamless, secure local and global payment gateway integrations, fully supported in Pakistan.",
    longDescription: "A broken payment gateway is the fastest way to lose a customer. We specialize in engineering flawless, highly secure payment integrations that work seamlessly on a global scale, with specialized expertise in the Pakistani market. From complex Stripe and 2Checkout architectures to local banking APIs (JazzCash, EasyPaisa, PayFast), we ensure that your customers can transact smoothly, securely, and without friction, dramatically reducing cart abandonment at the final hurdle.",
    features: ["Stripe & 2Checkout Setup", "Local Pakistan Bank APIs", "Advanced Fraud Prevention"],
    deepFeatures: [
      {
        title: "Global Gateway Architecture",
        description: "Integrating robust international gateways like Stripe, PayPal, and 2Checkout with complex recurring billing and subscription models.",
        image: "/undraw_enter-payment-info_k1yw.svg"
      },
      {
        title: "Localized Pakistan Integrations",
        description: "Specialized implementation of local APIs including PayFast, JazzCash, EasyPaisa, and direct bank transfers to capture the domestic market.",
        image: "/undraw_pay-with-credit-card_77g6.svg"
      },
      {
        title: "PCI Compliance & Fraud Prevention",
        description: "Ensuring your data architecture meets strict PCI-DSS compliance standards and integrating machine-learning-based fraud detection to minimize chargebacks.",
        image: "/undraw_safe_0mei.svg"
      }
    ],
    image: "/undraw_credit-card_t6qm.svg",
    examples: []
  }
];
