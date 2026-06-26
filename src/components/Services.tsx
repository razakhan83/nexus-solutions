"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

export function Services({ limit, showViewAll = false, layout = "carousel" }: { limit?: number, showViewAll?: boolean, layout?: "grid" | "carousel" } = {}) {
  const displayedServices = limit ? services.slice(0, limit) : services;
  return (
    <section 
      id="services" 
      className={`py-16 sm:py-20 bg-zinc-50 scroll-mt-16 relative overflow-hidden ${layout === "carousel" ? "border-y border-zinc-200" : ""}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* Top Header Grid Layout (Similar to Who We Are) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-10 md:mb-16 max-w-7xl mx-auto">
          
          <motion.div 
            className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] flex items-center justify-center lg:order-2 bg-primary/5 lg:bg-transparent rounded-3xl lg:rounded-none p-6 lg:p-0 border border-primary/10 lg:border-transparent"
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
        
        {layout === "grid" ? (
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                  className="h-full select-none"
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full">
            <Carousel opts={{ align: "start", dragFree: false }} className="w-full">
              <CarouselContent className="-ml-6">
                {displayedServices.map((service, index) => (
                  <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-[350px]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                      className="h-full select-none p-3"
                    >
                      <ServiceCard service={service} />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="block">
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-6 lg:-left-12 h-10 w-10 md:h-14 md:w-14 bg-white border-zinc-200 text-zinc-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md z-10" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-6 lg:-right-12 h-10 w-10 md:h-14 md:w-14 bg-white border-zinc-200 text-zinc-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md z-10" />
              </div>
            </Carousel>
          </div>
        )}
        
        {showViewAll && (
          <div className="mt-12 md:mt-16 flex justify-center w-full">
            <Button 
              variant="default"
              render={<Link href="/services" />} 
              nativeButton={false}
              className=""
            >
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}
        
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <Card className="bg-white border border-zinc-200 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm h-full group overflow-hidden flex flex-col">
      <div className="w-full h-32 sm:h-40 relative flex items-center justify-center p-4">
        <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
          <Image src={service.image} alt={service.title} fill className="object-contain" />
        </div>
      </div>
      <CardHeader className="p-3 md:p-4 pb-0 md:pb-1">
        <CardTitle className="text-base md:text-xl font-bold text-primary leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-zinc-600 leading-relaxed text-xs md:text-sm pt-1 md:pt-2">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3 md:p-4 pt-1 md:pt-2 flex-grow flex flex-col justify-start">
        {/* Features section stays at top right under description */}
        <div className="pt-1 md:pt-2">
          <ul className="space-y-1.5 md:space-y-2 block">
            {service.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start text-xs md:text-sm text-zinc-700 font-medium">
                <div className="w-1.5 h-1.5 rounded-sm bg-primary mr-2 md:mr-3 mt-1.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
          
        {/* Integrations and link get pushed to the absolute bottom */}
        <div className="mt-auto">
          {service.brandLogos && service.brandLogos.length > 0 && (
            <div className="mt-2 pt-2 border-t border-zinc-100">
              <p className="text-[10px] md:text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-3">Integrations & Tech</p>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                {service.brandLogos.map((logo: any, idx: number) => (
                  <div key={idx} className="relative h-8 md:h-10 w-auto drop-shadow-sm hover:scale-105 transition-transform duration-300" title={logo.name}>
                    <Image src={logo.url} alt={logo.name} width={120} height={28} className="object-contain h-full w-auto" />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-2 pt-2 border-t border-zinc-100">
            <Link href={`/services/${service.slug}`} className="inline-flex items-center text-xs md:text-sm font-bold text-primary hover:text-primary transition-colors group/link">
              Explore <span className="hidden sm:inline">&nbsp;Service</span> <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 transform group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
