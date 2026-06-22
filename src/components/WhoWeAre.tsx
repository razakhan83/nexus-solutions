"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center"
          >
            <Image
              src="/undraw_team-collaboration_re_oubs.svg"
              alt="Who We Are"
              fill
              className="object-contain p-8"
              // Fallback to a different svg if the team collaboration one doesn't exist yet, we'll use growth analytics
              onError={(e: any) => {
                e.target.src = "/undraw_growth-analytics_vzjz.svg";
              }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-2xl text-left"
          >
            <h2 className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">Who We Are</h2>
            <h3 className="text-3xl font-heading font-bold tracking-tight text-foreground sm:text-4xl mb-6 leading-tight">
              A <span className="text-primary">Growth-Driven</span> Digital Agency
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-8">
              We are a collective of elite engineers, creative strategists, and performance marketers dedicated to scaling businesses. By combining cutting-edge technical infrastructure with data-driven marketing, we don&apos;t just build websites—we build digital ecosystems that drive measurable revenue.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">1</span>
                  <strong className="text-foreground font-semibold">Data-Driven Approach</strong>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed sm:pl-11">Every decision is backed by comprehensive analytics and continuous A/B testing.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">2</span>
                  <strong className="text-foreground font-semibold">End-to-End Solutions</strong>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed sm:pl-11">From scalable tech infrastructure to high-converting Meta and Google Ads.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="sm:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">3</span>
                  <strong className="text-foreground font-semibold">Local & Global Expertise</strong>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed sm:pl-11">Proudly integrating world-class strategies and engineering locally in Pakistan.</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
