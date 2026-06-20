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
    <section className="bg-background py-16 sm:py-24 relative overflow-hidden border-t border-border/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* Top Header Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-10 md:mb-16 max-w-7xl mx-auto">
          
          <motion.div 
            className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <Image
              src="/undraw_testimonials_4c7y.svg"
              alt="Client Reviews"
              fill
              className="object-contain p-8"
            />
          </motion.div>

          <motion.div
            className="text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">Testimonials</h2>
            <p className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground lg:text-5xl leading-tight mb-4 md:mb-6">
              Trusted by <span className="text-primary">industry leaders.</span>
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Read what our clients have to say about the technical infrastructure and results we deliver.
            </p>
          </motion.div>

        </div>

        <div className="w-full">
          <Carousel 
            opts={{
              align: "start",
              dragFree: false, // snap exactly
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-4">
              {reviews.map((review, index) => (
                <CarouselItem key={review.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                    className="h-full select-none p-2"
                  >
                    <Card className="bg-primary/5 border-transparent hover:border-primary/20 transition-all duration-300 shadow-none h-full flex flex-col justify-between rounded-2xl group">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-center gap-1 mb-5 text-primary">
                          <Star className="size-3.5 fill-primary" />
                          <Star className="size-3.5 fill-primary" />
                          <Star className="size-3.5 fill-primary" />
                          <Star className="size-3.5 fill-primary" />
                          <Star className="size-3.5 fill-primary" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                          &quot;{review.content}&quot;
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
                            <p className="text-xs text-muted-foreground">{review.role}</p>
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
              <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-6 lg:-left-12 h-10 w-10 md:h-12 md:w-12 bg-background border-border/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-md z-10" />
              <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-6 lg:-right-12 h-10 w-10 md:h-12 md:w-12 bg-background border-border/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-md z-10" />
            </div>
          </Carousel>
        </div>

      </div>
    </section>
  );
}
