"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Server, Layout, Megaphone, ShieldCheck, Search, MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Web & App Development",
    description: "We build fully bespoke, high-performance web applications and mobile-responsive platforms using React, Next.js, and Node.js. Our architectures include custom admin panels, real-time data synchronization, and scalable server infrastructure designed for enterprise loads.",
    tags: ["React & Next.js", "Node.js Architecture", "Database Design"],
    icon: Server,
    image: "/undraw_online-shopping_po8w.svg",
  },
  {
    title: "WordPress & CMS Solutions",
    description: "Empower your content team with deeply customized, high-speed WordPress builds and Headless CMS integrations. We deliver pixel-perfect frontends, conversion-optimized landing pages, and complete client autonomy over their digital assets.",
    tags: ["Headless CMS", "WordPress", "Custom Themes"],
    icon: Layout,
    image: "/undraw_landing-page_zc5e.svg",
  },
  {
    title: "Performance Marketing & Meta Ads",
    description: "Drive predictable, scalable revenue with data-driven Meta advertising campaigns. We implement bulletproof server-side tracking, advanced audience segmentation, and rigorous A/B testing protocols to maximize your Return on Ad Spend (ROAS).",
    tags: ["Meta Ads", "Analytics Setup", "Conversion Tracking"],
    icon: Megaphone,
    image: "/undraw_social-media-post_tg7l.svg",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Dominate search engine rankings and capture high-intent organic traffic. We conduct deep technical SEO audits, strategic keyword mapping, and rigorous backlink acquisition to ensure long-term sustainable growth.",
    tags: ["Technical SEO", "On-Page Optimization", "Link Building"],
    icon: Search,
    image: "/undraw_growth-analytics_vzjz.svg",
  },
  {
    title: "SEM & Google Ads",
    description: "Capture active demand instantly with highly targeted Pay-Per-Click campaigns. We optimize bidding strategies, ad copy, and landing pages to lower your Cost Per Acquisition (CPA) and maximize conversions.",
    tags: ["Google Ads", "PPC Campaigns", "SEM Strategy"],
    icon: MousePointerClick,
    image: "/undraw_online-ad_703t.svg",
  },
  {
    title: "Secure Payment Integrations",
    description: "Robust integrations of global payment processors and digital wallets, engineered for maximum security and reduced cart abandonment.",
    tags: ["Stripe API", "Webhooks", "Payment Gateways"],
    icon: ShieldCheck,
    image: "/undraw_pay-with-credit-card_77g6.svg",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-zinc-50 py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Core Competencies</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Technical Excellence Across the Stack
            </p>
            <p className="mt-4 text-xl text-zinc-600">
              We provide comprehensive digital infrastructure solutions tailored to the strict requirements of modern enterprises.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="bg-white border border-zinc-200 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden flex flex-col sm:flex-row h-full">
                <div className="flex-1 flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                        <Icon className="size-6" />
                      </div>
                      <CardTitle className="text-xl text-zinc-900">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-zinc-600 leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-md text-sm font-medium bg-zinc-50 text-zinc-600 border border-zinc-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
                <div className="w-full sm:w-1/3 bg-zinc-50/50 flex items-center justify-center p-6 border-t sm:border-t-0 sm:border-l border-zinc-100 relative min-h-[150px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
