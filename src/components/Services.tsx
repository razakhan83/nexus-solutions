"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-zinc-50 border-y border-zinc-200 scroll-mt-16 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* Top Header Grid Layout (Similar to Who We Are) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-10 md:mb-16 max-w-7xl mx-auto">
          
          <motion.div 
            className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] flex items-center justify-center lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
             <Image src="/undraw_build-mode_aa78.svg" alt="Services and Engineering" fill className="object-contain p-8" />
          </motion.div>

          <motion.div
            className="text-left lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">Our Core Services</h2>
            <p className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 lg:text-5xl leading-tight mb-4 md:mb-6">
              Everything you need to <span className="text-primary">scale digitally</span>.
            </p>
            <p className="text-base md:text-lg text-zinc-600 max-w-xl leading-relaxed">
              We provide end-to-end technical infrastructure and data-driven marketing tailored specifically to help your enterprise achieve measurable growth and outpace the competition.
            </p>
          </motion.div>

        </div>
        
        {/* Full Width Slider (8 Detailed Service Cards) */}
        <div className="w-full">
          <Carousel 
            opts={{
              align: "start",
              dragFree: false, // Enforce one-by-one snapping
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-[380px]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                    className="h-full select-none p-3"
                  >
                    <Card className="bg-white border border-zinc-200 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm h-full group overflow-hidden flex flex-col">
                      <div className="w-full h-40 sm:h-48 relative flex items-center justify-center p-4 md:p-6">
                        <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                          <Image src={service.image} alt={service.title} fill className="object-contain" />
                        </div>
                      </div>
                      <CardHeader className="p-4 md:p-8 pb-2 md:pb-4">
                        <CardTitle className="text-base md:text-xl font-bold text-zinc-900 leading-tight">{service.title}</CardTitle>
                        <CardDescription className="text-zinc-600 leading-relaxed text-xs md:text-base pt-1 md:pt-2 line-clamp-2 sm:line-clamp-none">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 md:p-8 pt-0 flex-grow flex flex-col justify-end">
                        <div className="border-t border-zinc-100 pt-3 md:pt-6 mt-1 md:mt-2">
                          <ul className="space-y-1.5 md:space-y-3 hidden sm:block">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-xs md:text-sm text-zinc-700 font-medium">
                                <div className="w-1.5 h-1.5 rounded-sm bg-primary mr-2 md:mr-3 mt-1.5 shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 md:mt-8">
                            <Link href={`/services/${service.slug}`} className="inline-flex items-center text-xs md:text-sm font-bold text-primary hover:text-primary transition-colors group/link">
                              Explore <span className="hidden sm:inline">&nbsp;Service</span> <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 transform group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation buttons: absolute on all screens */}
            <div className="block">
              <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-6 lg:-left-12 h-10 w-10 md:h-14 md:w-14 bg-white border-zinc-200 text-zinc-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md z-10" />
              <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-6 lg:-right-12 h-10 w-10 md:h-14 md:w-14 bg-white border-zinc-200 text-zinc-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md z-10" />
            </div>
            
          </Carousel>
        </div>
        
      </div>
    </section>
  );
}
