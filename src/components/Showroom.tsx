"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, CheckCircle2, Loader2, MoveRight } from "lucide-react";
import Link from "next/link";

export function Showroom() {
  const [clients, setClients] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setClients(data);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch projects", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section id="showroom" className="bg-white py-24 sm:py-32 relative border-t border-zinc-200 min-h-[600px] flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </section>
    );
  }

  if (!clients || clients.length === 0) {
    return null;
  }

  return (
    <section id="showroom" className="bg-white py-24 sm:py-32 relative overflow-hidden border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 md:mb-16">
          <motion.div
            className="text-left max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">Case Studies</h2>
            <p className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground lg:text-5xl leading-tight mb-4">
              Proven Delivery <span className="text-primary">at Scale</span>
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              See how we've helped enterprises transform their digital infrastructure and drive measurable revenue growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center gap-2 text-sm font-bold text-zinc-400 uppercase tracking-widest"
          >
            Swipe to explore <MoveRight className="size-5" />
          </motion.div>
        </div>

        {/* Scrollable Project Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex overflow-x-auto gap-6 lg:gap-8 pb-12 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 lg:-mx-8 lg:px-8"
        >
          {clients.map((client) => (
            <Card 
              key={client.id} 
              className="min-w-[85vw] sm:min-w-[400px] lg:min-w-[450px] shrink-0 snap-start bg-white border border-zinc-200 shadow-sm flex flex-col overflow-hidden group hover:shadow-2xl hover:border-primary/20 transition-all duration-500 rounded-2xl"
            >
              
              {/* Image Section */}
              <div className="relative w-full aspect-video bg-zinc-50 overflow-hidden border-b border-zinc-100">
                <Image 
                  src={client.image} 
                  alt={client.name} 
                  fill 
                  className="object-cover sm:object-contain p-4 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-mono font-bold text-primary rounded-lg border border-primary/10 shadow-sm">
                  {client.tag}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-zinc-900 mb-5">{client.name}</h3>
                
                {/* Highlight Metric */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-100">
                  <div className="flex flex-col">
                     <span className="text-4xl font-heading font-bold text-primary tracking-tight">{client.stat}</span>
                     <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">{client.statLabel}</span>
                  </div>
                </div>

                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Implementation</h4>
                <ul className="space-y-3 mb-8 flex-grow">
                  {client.delivered.slice(0, 3).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm text-zinc-700 font-medium">
                      <CheckCircle2 className="size-4 text-primary mr-3 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full rounded-xl border-zinc-200 text-zinc-700 hover:text-primary-foreground hover:bg-primary hover:border-primary hover:shadow-lg transition-all h-12 font-semibold text-base" 
                  render={client.link !== "#" ? <Link href={client.link} /> : <a href={client.link} />} 
                  nativeButton={false}
                >
                    View Case Study <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
