"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-24 sm:pb-32 lg:px-8 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl text-left order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-tight">
              Full-Service Technical Infrastructure & Growth.
            </h1>
            
            <p className="text-lg leading-relaxed text-zinc-600 mb-10 max-w-xl">
              We engineer scalable e-commerce platforms, custom web applications, and data-driven marketing campaigns for enterprises that demand high performance and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button render={<a href="#showroom" />} nativeButton={false} size="lg" className="w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-700 transition-all rounded-lg px-8 h-12 text-base font-medium shadow-sm">
                View Portfolio
              </Button>
              <Button render={<a href="#contact" />} nativeButton={false} variant="outline" size="lg" className="w-full sm:w-auto rounded-lg px-8 border-zinc-200 text-zinc-900 hover:bg-zinc-50 transition-all h-12 text-base font-medium shadow-sm">
                Contact Sales
              </Button>
            </div>
          </motion.div>

          {/* Illustration Column (Always visible, sits above text on mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative w-full h-[240px] sm:h-[350px] lg:h-[450px] order-1 lg:order-2 mb-4 lg:mb-0"
          >
            <Image
              src="/undraw_web-developer_gxaa.svg"
              alt="Technical Infrastructure"
              fill
              className="object-contain lg:object-right"
              priority
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
