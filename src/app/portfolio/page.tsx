"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "techflow",
    name: "TechFlow Enterprise",
    tag: "FinTech App",
    challenge: "The client was struggling with an outdated, monolithic PHP application that could not handle real-time trading data, resulting in massive latency and system crashes during peak market hours.",
    delivered: [
      "Migrated to Next.js & Node.js Microservices",
      "WebSocket Integration for Real-Time Data",
      "99.99% Uptime Guarantee Implementation"
    ],
    stat: "14x",
    statLabel: "Faster Load Times",
    image: "/undraw_control-panel_s0j2.svg",
    link: "#"
  },
  {
    id: "aethos",
    name: "Aethos Lifestyle",
    tag: "E-Commerce",
    challenge: "Aethos had strong brand presence but a terrible conversion rate due to an unoptimized Shopify theme and extremely poor mobile responsiveness.",
    delivered: [
      "Custom Headless Shopify Build",
      "Sub-second Page Transitions",
      "Advanced Cart Recovery Systems"
    ],
    stat: "215%",
    statLabel: "Increase in Mobile Conversion",
    image: "/undraw_shopping-app_b80f.svg",
    link: "#"
  },
  {
    id: "lumina",
    name: "Lumina Health",
    tag: "SaaS Platform",
    challenge: "Lumina needed a HIPAA-compliant patient portal built from scratch within 4 months to secure their Series A funding round.",
    delivered: [
      "End-to-End React Architecture",
      "AWS Enterprise Cloud Security",
      "Role-Based Access Control (RBAC)"
    ],
    stat: "4 Mo",
    statLabel: "Time to Market",
    image: "/undraw_safe_0mei.svg",
    link: "#"
  },
  {
    id: "omni",
    name: "OmniRetail Group",
    tag: "Performance Marketing",
    challenge: "Customer acquisition costs were skyrocketing, and their return on ad spend (ROAS) on Meta and Google had dropped below profitability.",
    delivered: [
      "Complete Analytics & Pixel Overhaul",
      "Server-Side API Tracking Integration",
      "Data-Driven A/B Creative Testing"
    ],
    stat: "3.4x",
    statLabel: "Increase in Overall ROAS",
    image: "/undraw_growth-analytics_vzjz.svg",
    link: "#"
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 selection:bg-purple-900 selection:text-white">
      <Header />
      
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              Explore how we have engineered scalable digital infrastructure and high-growth campaigns for enterprises across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 rounded-xl overflow-hidden flex flex-col lg:flex-row group">
                  
                  {/* Left content */}
                  <div className="p-10 lg:w-2/3 flex flex-col justify-center">
                    <span className="px-3 py-1 text-sm font-mono font-medium bg-purple-50 text-purple-700 rounded-md border border-purple-200 self-start mb-6">
                      {project.tag}
                    </span>
                    <h3 className="text-4xl font-bold text-zinc-900 mb-6">{project.name}</h3>
                    
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-3">Business Challenge</h4>
                    <p className="text-zinc-600 leading-relaxed text-lg mb-8">
                      {project.challenge}
                    </p>

                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-3">Our Implementation</h4>
                    <ul className="space-y-4 mb-8">
                      {project.delivered.map((item, i) => (
                        <li key={i} className="flex items-start text-lg text-zinc-700">
                          <CheckCircle2 className="size-6 text-purple-600 mr-3 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" className="w-full sm:w-auto self-start rounded-md border-purple-200 text-purple-700 hover:text-white hover:bg-purple-600 hover:shadow-lg hover:-translate-y-1 transition-all h-12 px-8 font-medium text-lg" render={<a href={project.link} />} nativeButton={false}>
                        Read Full Case Study <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  {/* Right Stat Panel with Illustration */}
                  <div className="lg:w-1/3 bg-purple-50/50 border-t lg:border-t-0 lg:border-l border-purple-100 p-10 flex flex-col items-center justify-center text-center min-h-[400px] relative overflow-hidden group-hover:bg-purple-100/50 transition-colors duration-500">
                    
                    <div className="relative w-full h-[160px] mb-8 transform group-hover:scale-105 transition-transform duration-500">
                      <Image src={project.image} alt={project.name} fill className="object-contain" />
                    </div>

                    <span className="text-7xl lg:text-8xl font-bold text-purple-700 tracking-tight relative z-10">
                      {project.stat}
                    </span>
                    <span className="text-zinc-600 mt-4 text-xl font-medium relative z-10">
                      {project.statLabel}
                    </span>
                  </div>

                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
