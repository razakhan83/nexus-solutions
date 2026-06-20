"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
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
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      
      <section className="pt-8 lg:pt-12 pb-8 sm:pb-12 bg-muted/10 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-[200px] sm:max-w-[250px] h-[120px] sm:h-[160px] mb-6 sm:mb-8">
              <Image src="/undraw_website-setup_o2zf.svg" alt="Our Portfolio" fill className="object-contain" priority />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold tracking-tight text-foreground mb-4 sm:mb-6">
              Our Portfolio
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Explore how we have engineered scalable digital infrastructure and high-growth campaigns for enterprises across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pt-8 sm:pt-16 pb-16 sm:pb-24 lg:pb-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              >
                <Card className="bg-background border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col lg:flex-row group">
                  
                  {/* Left content */}
                  <div className="p-6 sm:p-8 lg:p-10 lg:w-2/3 flex flex-col justify-center">
                    <span className="px-3 py-1 text-xs sm:text-sm font-mono font-semibold bg-primary/5 text-primary rounded-md border border-primary/10 self-start mb-4 sm:mb-6">
                      {project.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 sm:mb-6">{project.name}</h3>
                    
                    <h4 className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2 sm:mb-3">Business Challenge</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                      {project.challenge}
                    </p>

                    <h4 className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2 sm:mb-3">Our Implementation</h4>
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {project.delivered.map((item, i) => (
                        <li key={i} className="flex items-start text-sm sm:text-base lg:text-lg text-foreground/80 font-medium">
                          <div className="size-2 rounded-full bg-primary mt-2 mr-3 sm:mr-4 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" className="w-full sm:w-auto self-start rounded-xl border-border/50 text-foreground hover:text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all h-11 sm:h-12 px-6 sm:px-8 font-semibold text-sm sm:text-base" render={<a href={project.link} />} nativeButton={false}>
                        Read Full Case Study <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>

                  {/* Right Stat Panel with Illustration */}
                  <div className="lg:w-1/3 bg-primary/5 border-t lg:border-t-0 lg:border-l border-primary/10 p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] relative overflow-hidden group-hover:bg-primary/10 transition-colors duration-500">
                    
                    <div className="relative w-full h-[120px] sm:h-[160px] mb-6 sm:mb-8 transform group-hover:scale-105 transition-transform duration-500">
                      <Image src={project.image} alt={project.name} fill className="object-contain" />
                    </div>

                    <span className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-primary tracking-tight relative z-10">
                      {project.stat}
                    </span>
                    <span className="text-muted-foreground mt-2 sm:mt-4 text-base sm:text-lg lg:text-xl font-medium relative z-10">
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
