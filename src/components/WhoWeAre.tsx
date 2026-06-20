"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-[350px] sm:h-[450px] bg-purple-50 rounded-2xl flex items-center justify-center border border-purple-100"
          >
            <Image
              src="/undraw_team-collaboration_re_oubs.svg"
              alt="Who We Are"
              fill
              className="object-contain p-8"
              // Fallback to a different svg if the team collaboration one doesn't exist yet, we'll use growth analytics
              onError={(e: any) => {
                e.target.src = "/undraw_growth-analytics_vzjz.svg";
              }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-left"
          >
            <h2 className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-3">Who We Are</h2>
            <h3 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl mb-6 leading-tight">
              A Growth-Driven Digital Agency
            </h3>
            <p className="text-lg leading-relaxed text-zinc-600 mb-8">
              We are a collective of elite engineers, creative strategists, and performance marketers dedicated to scaling businesses. By combining cutting-edge technical infrastructure with data-driven marketing, we don&apos;t just build websites—we build digital ecosystems that drive measurable revenue.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-lg text-zinc-700">
                <CheckCircle2 className="size-6 text-purple-600 mr-3 shrink-0" />
                <span><strong>Data-Driven Approach:</strong> Every decision is backed by analytics.</span>
              </li>
              <li className="flex items-start text-lg text-zinc-700">
                <CheckCircle2 className="size-6 text-purple-600 mr-3 shrink-0" />
                <span><strong>End-to-End Solutions:</strong> From deep tech infrastructure to Meta Ads.</span>
              </li>
              <li className="flex items-start text-lg text-zinc-700">
                <CheckCircle2 className="size-6 text-purple-600 mr-3 shrink-0" />
                <span><strong>Local & Global Expertise:</strong> Proudly integrating global tech locally in Pakistan.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
