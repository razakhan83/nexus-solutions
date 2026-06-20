"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Marketing Director",
    content: "The team at Digital Marketing Services completely transformed our online presence. Our organic traffic increased by 150% in just three months. Truly the best digital services provider we've worked with.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "E-Commerce Founder",
    content: "Their SEM and Google Ads campaigns were perfectly optimized. We saw our Return on Ad Spend (ROAS) double within the first few weeks. Highly recommended for serious growth.",
  },
  {
    id: 3,
    name: "Emily Roberts",
    role: "Small Business Owner",
    content: "From the new custom website to the social media marketing strategy, everything was handled with extreme professionalism. They took our brand to the next level.",
  }
];

export function Reviews() {
  return (
    <section className="bg-zinc-50 py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">What We Do</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              We Provide Best Digital Services
            </p>
            <p className="mt-4 text-xl text-zinc-600">
              Don&apos;t just take our word for it. Read what our clients have to say about the results we deliver.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[250px] hidden lg:block"
          >
            <Image
              src="/undraw_testimonials_4c7y.svg"
              alt="Client Reviews"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 md:grid md:grid-cols-3 md:overflow-visible md:snap-none md:mx-0 md:px-0 gap-8 hide-scrollbar">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[85vw] shrink-0 snap-center md:w-auto"
            >
              <Card className="bg-white border border-zinc-200 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm h-full flex flex-col justify-between">
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
          ))}
        </div>
      </div>
    </section>
  );
}
