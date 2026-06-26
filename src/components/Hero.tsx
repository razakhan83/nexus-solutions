"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, ShoppingCart, CreditCard, Camera, 
  Video, TrendingUp, Search, LineChart, ArrowRight 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

// Map presentation-specific data to our 8 core services, but we only use the first 4 for the Hero grid
const presentationData = [
  { icon: Code, color: "text-blue-500", offsetClass: "lg:translate-y-4", shortDetail: "Ultra-fast custom web apps." },
  { icon: ShoppingCart, color: "text-emerald-500", offsetClass: "lg:-translate-y-4", shortDetail: "High-converting online stores." },
  { icon: CreditCard, color: "text-violet-500", offsetClass: "lg:translate-y-4", shortDetail: "Secure payment integrations." },
  { icon: Camera, color: "text-rose-500", offsetClass: "lg:-translate-y-4", shortDetail: "Premium product photography." },
  { icon: Video, color: "text-red-500", offsetClass: "lg:translate-y-4", shortDetail: "Viral short-form content." },
  { icon: TrendingUp, color: "text-blue-600", offsetClass: "lg:-translate-y-4", shortDetail: "Data-driven Meta & Google Ads." },
  { icon: Search, color: "text-yellow-500", offsetClass: "lg:translate-y-4", shortDetail: "High-intent search marketing." },
  { icon: LineChart, color: "text-emerald-400", offsetClass: "lg:-translate-y-4", shortDetail: "Organic growth & SEO." }
];

const mappedServices = services.map((s, i) => ({
  ...s,
  icon: presentationData[i].icon,
  color: presentationData[i].color,
  offsetClass: presentationData[i].offsetClass,
  detail: presentationData[i].shortDetail
}));

// Select the top 4 services to feature in the Hero section
const heroServices = [
  mappedServices[0], // Web Dev
  mappedServices[1], // E-commerce
  mappedServices[5], // Meta Ads
  mappedServices[7]  // SEO
];

// Re-adjust offsets for just these 4 so the staggered grid effect works perfectly
heroServices[0].offsetClass = "translate-y-4";
heroServices[1].offsetClass = "-translate-y-4";
heroServices[2].offsetClass = "translate-y-4";
heroServices[3].offsetClass = "-translate-y-4";


function ServiceIllustration({ service, index }: { service: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
      className={`w-full flex flex-col items-center justify-start ${service.offsetClass} group`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="relative w-full aspect-[4/3] transform transition-all duration-300 ease-out cursor-pointer group-hover:scale-105">
        <Image src={service.image} alt={service.title} fill className="object-contain drop-shadow-sm group-hover:drop-shadow-md z-10" />
        
        {/* Thinking Bubble */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute -top-16 -right-4 sm:-right-8 z-30 flex flex-col items-end pointer-events-none">
              {/* Main Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 10, transformOrigin: 'bottom right' }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: 10 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.5, delay: 0.15 }}
                className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl rounded-br-sm shadow-xl border border-slate-100 dark:border-slate-700 w-max max-w-[200px] sm:max-w-[240px] backdrop-blur-sm bg-white/95 dark:bg-slate-800/95 pointer-events-auto"
              >
                <div className="flex items-center gap-2 mb-2">
                  <service.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${service.color}`} />
                  <h4 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-slate-800 dark:text-slate-100 truncate w-[140px]">{service.title}</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-3 truncate w-[140px]">
                  {service.detail}
                </p>
                <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-primary hover:underline bg-primary/5 px-3 py-1.5 rounded-full w-fit transition-colors hover:bg-primary/10">
                  Explore Details <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
              
              {/* Thinking Dots */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                className="w-3 h-3 sm:w-4 sm:h-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full mt-2 mr-6 sm:mr-8 shadow-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2, delay: 0 }}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full mt-1.5 mr-10 sm:mr-12 shadow-sm"
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center bg-transparent min-h-[90vh] pt-28 lg:pt-36 pb-16 lg:pb-20 lg:px-10 overflow-hidden">
      
      <div className="mx-auto max-w-7xl w-full relative z-10 pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 px-4 lg:px-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:space-y-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Scale Your <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Business</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
                We build fast websites, launch high-converting stores, and run ads that actually bring sales. Your complete digital growth partner
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 lg:pt-6 w-full lg:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Button 
                    variant="default"
                    render={<a href="#contact" />} 
                    nativeButton={false} 
                    className="w-full sm:w-auto font-bold text-sm lg:text-base h-12 lg:h-14 px-8 lg:px-10 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
                  >
                    Start Your Project
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Button 
                    variant="outline"
                    render={<Link href="/portfolio" />} 
                    nativeButton={false} 
                    className="w-full sm:w-auto font-semibold text-sm lg:text-base h-12 lg:h-14 px-8 lg:px-10 bg-white/50 dark:bg-transparent backdrop-blur-sm transition-all duration-300 rounded-xl shadow-sm hover:shadow-md border-border/50 hover:bg-slate-50 dark:hover:bg-slate-900"
                  >
                    View Portfolio
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Illustrations Grid */}
          <div className="lg:col-span-7 relative w-full pt-12 lg:pt-0 order-1 lg:order-2 z-20">
            <div className="grid grid-cols-2 gap-8 lg:gap-12 place-items-center">
              {heroServices.map((service, idx) => (
                <ServiceIllustration key={service.title} service={service} index={idx} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
