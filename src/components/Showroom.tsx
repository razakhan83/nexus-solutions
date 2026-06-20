"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, CheckCircle2, Terminal, Loader2 } from "lucide-react";

export function Showroom() {
  const [clients, setClients] = useState<any[]>([]);
  const [activeClient, setActiveClient] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setClients(data);
          setActiveClient(data[0]);
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

  if (!clients || clients.length === 0 || !activeClient) {
    return null;
  }

  return (
    <section id="showroom" className="bg-white py-24 sm:py-32 relative overflow-hidden border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-10 md:mb-16 max-w-7xl mx-auto">
          
          {/* Illustration on Left */}
          <motion.div 
            className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
             <Image src="/undraw_charts_31si.svg" alt="Case Studies" fill className="object-contain p-8" />
          </motion.div>

          {/* Heading on Right */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">Case Studies</h2>
            <p className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground lg:text-5xl leading-tight mb-4 md:mb-6">
              Proven Delivery <span className="text-primary">at Scale</span>
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              See how we've helped enterprises transform their digital infrastructure and drive measurable revenue growth.
            </p>
          </motion.div>

        </div>

        {/* Corporate Split Panel Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-16 bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm flex flex-col lg:flex-row min-h-[550px]"
        >
          
          {/* Left Panel: Vertical Navigation */}
          <div className="lg:w-1/3 bg-zinc-50 border-b lg:border-b-0 lg:border-r border-zinc-200 p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-8 text-zinc-600">
              <Terminal className="size-5" />
              <span className="font-mono text-sm uppercase tracking-wider font-semibold">Active Projects</span>
            </div>
            
            <nav className="flex flex-col gap-3 relative">
              {clients.map((client) => {
                const isActive = activeClient.id === client.id;
                return (
                  <button
                    key={client.id}
                    onClick={() => setActiveClient(client)}
                    className={`relative w-full text-left px-5 py-4 rounded-lg transition-all border ${
                      isActive ? "border-primary/20 text-primary shadow-sm bg-primary/5" : "border-transparent text-zinc-600 hover:text-primary hover:bg-zinc-100 hover:translate-x-1"
                    }`}
                  >
                    <span className="relative z-10 font-medium text-lg block">{client.name}</span>
                    <span className="relative z-10 block text-sm mt-1 text-zinc-500 font-mono">{client.tag}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Panel: Viewport */}
          <div className="lg:w-2/3 p-8 relative overflow-hidden bg-white flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClient.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full relative z-10"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <span className="px-3 py-1 text-sm font-mono font-medium bg-primary/5 text-primary rounded-md border border-primary/20">
                      {activeClient.tag}
                    </span>
                    <h3 className="text-3xl font-bold text-zinc-900 mt-4">{activeClient.name}</h3>
                  </div>
                  <Button variant="outline" className="hidden sm:flex rounded-md border-primary/20 text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:-translate-y-1 transition-all h-10 px-6 font-medium text-base" render={<a href={activeClient.link} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
                      View Case Study <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-grow">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-3">Business Challenge</h4>
                    <p className="text-zinc-600 leading-relaxed text-base">
                      {activeClient.challenge}
                    </p>

                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mt-8 mb-3">Our Implementation</h4>
                    <ul className="space-y-4">
                      {activeClient.delivered.map((item: string, i: number) => (
                        <li key={i} className="flex items-start text-base text-zinc-700 hover:text-primary transition-colors">
                          <CheckCircle2 className="size-5 text-primary mr-3 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-start">
                    <Card className="bg-primary/5 border-primary/10 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center justify-center text-center shadow-none rounded-xl h-full">
                      <span className="text-5xl md:text-6xl font-bold text-primary tracking-tight">
                        {activeClient.stat}
                      </span>
                      <span className="text-zinc-600 mt-3 text-base font-medium">
                        {activeClient.statLabel}
                      </span>
                    </Card>
                    
                    <Button className="mt-6 sm:hidden w-full bg-primary hover:bg-primary text-white font-medium h-12 text-base" render={<a href={activeClient.link} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
                        View Case Study <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
