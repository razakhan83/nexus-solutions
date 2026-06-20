"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
        
        {/* Top Header Split Layout */}
        <div className="flex flex-row items-center justify-between gap-4 md:gap-12 mb-10 md:mb-16 max-w-7xl mx-auto">
          <motion.div
            className="w-[60%] md:w-1/2 text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs md:text-sm font-bold text-purple-600 uppercase tracking-widest mb-1 md:mb-2">Our Core Services</h2>
            <p className="mt-1 md:mt-2 text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl leading-tight">
              Everything you need to scale digitally.
            </p>
            <p className="mt-2 md:mt-4 text-sm md:text-lg text-zinc-600 max-w-lg leading-relaxed hidden sm:block">
              We provide end-to-end technical infrastructure and data-driven marketing tailored specifically to help your enterprise achieve measurable growth and outpace the competition.
            </p>
          </motion.div>

          <motion.div 
            className="w-[40%] md:w-1/2 relative h-[120px] md:h-[200px] lg:h-[250px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <Image src="/undraw_growth-analytics_vzjz.svg" alt="Growth and Services" fill className="object-contain md:object-right" />
          </motion.div>
        </div>
        
        {/* Full Width Slider (8 Detailed Service Cards) */}
        <div className="w-full">
          <Carousel 
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-[380px]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full select-none p-3"
                  >
                    <Card className="bg-white border border-zinc-200 hover:border-purple-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm h-full group overflow-hidden flex flex-col">
                      <div className="w-full bg-purple-50/50 h-32 md:h-48 relative flex items-center justify-center p-4 md:p-6 border-b border-zinc-100 group-hover:bg-purple-50 transition-colors duration-300">
                        <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                          <Image src={service.image} alt={service.title} fill className="object-contain" />
                        </div>
                      </div>
                      <CardHeader className="p-6 md:p-8 pb-3 md:pb-4">
                        <CardTitle className="text-lg md:text-xl font-bold text-zinc-900 leading-tight">{service.title}</CardTitle>
                        <CardDescription className="text-zinc-600 leading-relaxed text-sm md:text-base pt-1 md:pt-2">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 md:p-8 pt-0 flex-grow flex flex-col justify-end">
                        <div className="border-t border-zinc-100 pt-4 md:pt-6 mt-2">
                          <ul className="space-y-2 md:space-y-3">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-xs md:text-sm text-zinc-700 font-medium">
                                <CheckCircle2 className="size-3 md:size-4 text-purple-600 mr-2 md:mr-3 mt-0.5 shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 md:mt-8">
                            <Link href={`/services/${service.slug}`} className="inline-flex items-center text-xs md:text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors group/link">
                              Explore Service <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 transform group-hover/link:translate-x-1 transition-transform" />
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
              <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-6 lg:-left-12 h-10 w-10 md:h-14 md:w-14 bg-white border-zinc-200 text-zinc-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-md z-10" />
              <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-6 lg:-right-12 h-10 w-10 md:h-14 md:w-14 bg-white border-zinc-200 text-zinc-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-md z-10" />
            </div>
            
          </Carousel>
        </div>
        
      </div>
    </section>
  );
}
