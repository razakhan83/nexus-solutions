"use client";

import { motion } from "framer-motion";

const trustBadges = [
  { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads" },
  { name: "Meta", icon: "https://cdn.simpleicons.org/meta" },
  { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify" },
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
  { name: "WooCommerce", icon: "https://cdn.simpleicons.org/woocommerce" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
];

export function TrustBadges() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-border/40 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-400 uppercase">Trusted by Global Platforms</h2>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        {/* Left Gradient Mask */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right Gradient Mask */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap pl-16 md:pl-24"
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* Double the array for seamless looping */}
          {[...trustBadges, ...trustBadges, ...trustBadges].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src={badge.icon} alt="" className="h-8 md:h-10 w-auto object-contain" />
              <span className="font-bold text-lg md:text-xl text-zinc-800">{badge.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
