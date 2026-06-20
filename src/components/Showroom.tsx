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
        <Loader2 className="h-10 w-10 animate-spin text-purple-600" />
      </section>
    );
  }

  if (!clients || clients.length === 0 || !activeClient) {
    return null;
  }

  return (
    <section id="showroom" className="bg-white py-24 sm:py-32 relative overflow-hidden border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-row items-center justify-between gap-4 md:gap-12 mb-10 md:mb-16">
          <motion.div
            className="w-[60%] md:w-1/2 text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-3">Case Studies</h2>
            <p className="text-4xl md:text-5xl font-extrabold tracking-tighter text-zinc-900 mb-4 leading-[1.1]">
              Proven Delivery <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">at Scale</span>
            </p>
            <p className="mt-2 md:mt-4 text-sm md:text-lg text-zinc-600 max-w-lg hidden sm:block">
              See how we've helped enterprises transform their digital infrastructure and drive measurable revenue growth.
            </p>
          </motion.div>

          <motion.div 
            className="w-[40%] md:w-1/2 relative h-[120px] md:h-[200px] lg:h-[250px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <Image src="/undraw_build-mode_aa78.svg" alt="Proven Delivery" fill className="object-contain md:object-right" />
          </motion.div>
        </div>

        {/* Corporate Split Panel Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
                      isActive ? "border-purple-200 text-purple-900 shadow-sm bg-purple-50" : "border-transparent text-zinc-600 hover:text-purple-700 hover:bg-zinc-100 hover:translate-x-1"
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
                    <span className="px-3 py-1 text-sm font-mono font-medium bg-purple-50 text-purple-700 rounded-md border border-purple-200">
                      {activeClient.tag}
                    </span>
                    <h3 className="text-3xl font-bold text-zinc-900 mt-4">{activeClient.name}</h3>
                  </div>
                  <Button variant="outline" className="hidden sm:flex rounded-md border-purple-200 text-purple-700 hover:text-white hover:bg-purple-600 hover:shadow-lg hover:-translate-y-1 transition-all h-10 px-6 font-medium text-base" render={<a href={activeClient.link} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
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
                      {activeClient.delivered.map((item, i) => (
                        <li key={i} className="flex items-start text-base text-zinc-700 hover:text-purple-700 transition-colors">
                          <CheckCircle2 className="size-5 text-purple-600 mr-3 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-start">
                    <Card className="bg-purple-50/50 border-purple-100 hover:border-purple-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center justify-center text-center shadow-none rounded-xl h-full">
                      <span className="text-5xl md:text-6xl font-bold text-purple-700 tracking-tight">
                        {activeClient.stat}
                      </span>
                      <span className="text-zinc-600 mt-3 text-base font-medium">
                        {activeClient.statLabel}
                      </span>
                    </Card>
                    
                    <Button className="mt-6 sm:hidden w-full bg-purple-600 hover:bg-purple-700 text-white font-medium h-12 text-base" render={<a href={activeClient.link} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
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
