"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center bg-background pt-8 lg:pt-12 pb-12 lg:pb-16 lg:px-10 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 flex flex-col order-2 lg:order-1">
            
            {/* Top Label / Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-[1px] w-8 lg:w-12 bg-foreground" />
              <span className="text-[10px] lg:text-xs uppercase tracking-[0.2em] font-medium text-foreground">
                Digital Engineering Studio
              </span>
            </motion.div>

            {/* Main Typographic Thesis */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-heading font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Technical Infrastructure <br className="hidden lg:block"/> <span className="text-primary">& Growth.</span>
              </h1>
            </motion.div>

            {/* Subheading and Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col gap-8"
            >
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md font-medium">
                We engineer scalable digital infrastructure and data-driven campaigns for enterprises demanding absolute precision.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button render={<Link href="/portfolio" />} nativeButton={false} className="w-full sm:w-auto font-semibold text-sm h-10 sm:h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 rounded-xl">
                  View Portfolio
                </Button>
                <Button render={<a href="#contact" />} nativeButton={false} className="w-full sm:w-auto font-semibold text-sm h-10 sm:h-11 px-6 bg-foreground text-background hover:bg-foreground/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-xl">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[16/11] overflow-hidden order-1 lg:order-2"
          >
            <Image
              src="/undraw_web-developer_gxaa.svg"
              alt="Technical Infrastructure"
              fill
              className="object-contain lg:object-right"
              priority
            />
            
            {/* Corner Accents for high-end feel */}
            <div className="absolute top-0 left-0 w-4 h-[1px] bg-foreground/20" />
            <div className="absolute top-0 left-0 w-[1px] h-4 bg-foreground/20" />
            <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-foreground/20" />
            <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-foreground/20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
