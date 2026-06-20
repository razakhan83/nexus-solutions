"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, CheckCircle2, Terminal } from "lucide-react";

const clients = [
  {
    id: "kifayatly",
    name: "Enterprise Retail System",
    tag: "Headless E-Commerce",
    challenge: "Client struggled with severe legacy platform bottlenecks, experiencing multi-second load times which severely impacted global conversion metrics.",
    delivered: [
      "Next.js App Router Architecture",
      "Headless CMS Integration",
      "Global Payment Processor Setup",
      "Real-time Search Infrastructure"
    ],
    stat: "+140%",
    statLabel: "Conversion Rate Increase",
    image: "/undraw_control-panel_s0j2.svg",
    link: "https://example.com"
  },
  {
    id: "chinaunique",
    name: "B2B Supply Chain",
    tag: "Digital Marketing & Analytics",
    challenge: "Struggling to track end-to-end B2B lead attribution resulting in inefficient ad spend and low return on marketing investment.",
    delivered: [
      "Server-side Tracking Architecture",
      "High-Performance Funnel Deployment",
      "Dynamic B2B Campaign Management",
      "CRM Integration Workflow"
    ],
    stat: "3.8x",
    statLabel: "Average ROAS",
    image: "/undraw_growth-analytics_vzjz.svg",
    link: "https://example.com"
  },
  {
    id: "horizon",
    name: "Financial Partners",
    tag: "Secure Corporate Portal",
    challenge: "Required a highly secure, compliant platform to share sensitive investment data with high-net-worth clients without relying on generic SaaS solutions.",
    delivered: [
      "Custom Encrypted Portal",
      "Automated PDF Reporting Engine",
      "Role-Based Access Control (RBAC)",
      "Strict Security Compliance"
    ],
    stat: "-60%",
    statLabel: "Reduction in Support Tickets",
    image: "/undraw_charts_31si.svg",
    link: "https://example.com"
  }
];

export function Showroom() {
  const [activeClient, setActiveClient] = useState(clients[0]);

  return (
    <section id="showroom" className="bg-white py-24 sm:py-32 relative overflow-hidden border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Case Studies</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Proven Delivery at Scale
            </p>
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
