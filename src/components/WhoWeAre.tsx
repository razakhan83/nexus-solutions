"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MonitorPlay, LineChart, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function WhoWeAre() {
  return (
    <section id="about" className="relative overflow-hidden bg-background min-h-[100dvh] w-full flex flex-col justify-center border-t border-border/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-8 md:gap-12 justify-center h-full md:max-h-[100dvh] relative z-10">
        
        {/* Top Section: Split Row */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-16 w-full flex-1 min-h-0 pt-20 md:pt-0">
          
          {/* Left: Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full md:w-1/2 h-[200px] sm:h-[250px] lg:h-[400px] flex items-center justify-center shrink-0 bg-primary/5 md:bg-transparent rounded-3xl md:rounded-none p-6 md:p-0 border border-primary/10 md:border-transparent"
          >
            <Image
              src="/undraw_team-collaboration_phnf.svg"
              alt="Who We Are"
              fill
              className="object-contain"
              onError={(e: any) => {
                e.target.src = "/undraw_growth-analytics_vzjz.svg";
              }}
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full md:w-1/2 text-left flex flex-col justify-center"
          >
            <h2 className="text-xs lg:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2 lg:mb-3">Who We Are</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground mb-4 leading-tight">
              A <span className="text-primary">Growth-Driven</span> Digital Agency
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
              We are a team of experienced developers, creators, and marketers who help businesses grow online. Instead of templates, we build fast, custom websites, set up secure checkouts, and run smart ad campaigns that turn visitors into customers.
            </p>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} className="mt-6 lg:mt-8">
              <Button render={<Link href="?contact=true" scroll={false} />} nativeButton={false}>
                LET'S TALK <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom Section: Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full mt-auto shrink-0">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }} className="group relative flex flex-col p-6 lg:p-8 rounded-2xl bg-card border border-border/40 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
            <div className="mb-5 text-muted-foreground group-hover:text-primary transition-colors duration-500">
              <MonitorPlay className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="text-primary font-heading font-semibold text-lg mb-3 tracking-tight">Complete Digital Setup</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">From professional product shoots to complex web development and running ads, we manage your entire digital presence in-house.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }} className="group relative flex flex-col p-6 lg:p-8 rounded-2xl bg-card border border-border/40 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
            <div className="mb-5 text-muted-foreground group-hover:text-primary transition-colors duration-500">
              <LineChart className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="text-primary font-heading font-semibold text-lg mb-3 tracking-tight">Results Over Guesswork</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Every website we build and ad dollar we spend is fully tracked and optimized for the absolute best return on investment.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 }} className="group relative flex flex-col p-6 lg:p-8 rounded-2xl bg-card border border-border/40 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
            <div className="mb-5 text-muted-foreground group-hover:text-primary transition-colors duration-500">
              <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="text-primary font-heading font-semibold text-lg mb-3 tracking-tight">Top Standards</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Based in Pakistan, we mix international quality development with deep local market experience to give your brand an edge.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
