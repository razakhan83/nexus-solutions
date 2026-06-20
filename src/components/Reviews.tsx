"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Ahmed Raza",
    role: "CEO",
    content: "The team at Digital Marketing Services completely transformed our online presence. Our organic traffic increased by 150% in just three months. Truly the best digital services provider we've worked with.",
  },
  {
    id: 2,
    name: "Keizer Ghanatra",
    role: "CGO",
    content: "Their SEM and Google Ads campaigns were perfectly optimized. We saw our Return on Ad Spend (ROAS) double within the first few weeks. Highly recommended for serious growth.",
  },
  {
    id: 3,
    name: "Fatima Ali",
    role: "Small Business Owner",
    content: "From the new custom website to the social media marketing strategy, everything was handled with extreme professionalism. They took our brand to the next level.",
  },
  {
    id: 4,
    name: "Bilal Khan",
    role: "Tech Startup CEO",
    content: "The custom web app they built for us is insanely fast and scalable. We had complex API requirements and they handled everything flawlessly. Best development agency in the game.",
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Retail Chain Owner",
    content: "Integrating local Pakistani payment gateways was a nightmare before we hired them. They set up PayFast and EasyPaisa seamlessly, boosting our checkout conversion by 40%.",
  },
  {
    id: 6,
    name: "Usman Tariq",
    role: "SaaS Founder",
    content: "Their technical SEO audit uncovered issues we didn't even know existed. Within 6 months, we were ranking on page 1 for our most competitive, high-intent keywords.",
  }
];

export function Reviews() {
  return (
    <section className="bg-zinc-50 py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        <div className="flex flex-row items-center justify-between gap-4 md:gap-12 mb-10 md:mb-16 max-w-7xl mx-auto">
          <motion.div
            className="w-[60%] md:w-1/2 text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1 md:mb-2">What We Do</h2>
            <p className="mt-1 md:mt-2 text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl leading-tight">
              We Provide Best Digital Services
            </p>
            <p className="mt-2 md:mt-4 text-sm md:text-xl text-zinc-600 max-w-lg leading-relaxed hidden sm:block">
              Don&apos;t just take our word for it. Read what our clients have to say about the results we deliver.
            </p>
          </motion.div>

          <motion.div 
            className="w-[40%] md:w-1/2 relative h-[120px] md:h-[200px] lg:h-[250px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/undraw_testimonials_4c7y.svg"
              alt="Client Reviews"
              fill
              className="object-contain md:object-right"
            />
          </motion.div>
        </div>

        <div className="w-full">
          <Carousel 
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 py-4">
              {reviews.map((review, index) => (
                <CarouselItem key={review.id} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full select-none p-3"
                  >
                    <Card className="bg-white border border-zinc-200 hover:border-purple-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm h-full flex flex-col justify-between">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-1 mb-6 text-purple-500">
                          <Star className="size-5 fill-purple-500" />
                          <Star className="size-5 fill-purple-500" />
                          <Star className="size-5 fill-purple-500" />
                          <Star className="size-5 fill-purple-500" />
                          <Star className="size-5 fill-purple-500" />
                        </div>
                        <p className="text-zinc-600 leading-relaxed mb-8 italic text-lg">
                          &quot;{review.content}&quot;
                        </p>
                        <div>
                          <h4 className="font-bold text-zinc-900 text-lg">{review.name}</h4>
                          <p className="text-base text-zinc-500">{review.role}</p>
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
