"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AstraCaseStudy() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 lg:pt-16 pb-12 sm:pb-20 bg-muted/10 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="mr-2 size-4" /> Back to Portfolio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="px-3 py-1 text-xs sm:text-sm font-mono font-semibold bg-primary/5 text-primary rounded-md border border-primary/10 mb-6 inline-block">
              E-Commerce Platform
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground mb-6 leading-tight">
              Custom Multi-Tenant E-Commerce Suite & Admin Dashboard
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
              We engineered a fully custom, server-side rendered Next.js e-commerce website and mobile web app. The platform provides complete administrative control via a comprehensive dashboard and features an intuitive, seamless order tracking system for customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-primary/5 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary/10">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-2">215%</span>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Mobile Conv.</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-2">sub-1s</span>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Load Time</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-2">40%</span>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Cart Recovery</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-2">$2M+</span>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Monthly GMV</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-24">
          
          {/* Main Storefront (Desktop View) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">The Digital Storefront</h2>
              <p className="text-muted-foreground">A completely custom, lightning-fast frontend engineered for maximum conversion and zero friction. Click to view full details.</p>
            </div>
            <div 
              className="relative w-full aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-muted/10 cursor-zoom-in group"
              onClick={() => setLightboxImage("/Project Images/Store front.png")}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                 <span className="text-white font-bold tracking-widest uppercase bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">View Full Image</span>
              </div>
              <Image src="/Project Images/Store front.png" alt="Store Front" fill className="object-contain sm:object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
            </div>
          </motion.div>

          {/* Admin Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Enterprise Admin Dashboard</h2>
              <p className="text-muted-foreground">We built a powerful custom backend for inventory, order management, and analytics.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/50 shadow-lg bg-muted/10 group cursor-zoom-in"
                onClick={() => setLightboxImage("/Project Images/Deshboard.png")}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                   <span className="text-white font-bold tracking-widest uppercase text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Expand</span>
                </div>
                <Image src="/Project Images/Deshboard.png" alt="Dashboard Main" fill className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
              <div 
                className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/50 shadow-lg bg-muted/10 group cursor-zoom-in"
                onClick={() => setLightboxImage("/Project Images/Deshboard 2.png")}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                   <span className="text-white font-bold tracking-widest uppercase text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Expand</span>
                </div>
                <Image src="/Project Images/Deshboard 2.png" alt="Dashboard Details" fill className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
            </div>
          </motion.div>

          {/* E-Commerce Logic */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Order & Product Management</h2>
              <p className="text-muted-foreground">Seamless tracking, extensive product catalogs, and custom promotional code architecture.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border/50 shadow-md bg-muted/10 cursor-zoom-in group" onClick={() => setLightboxImage("/Project Images/Products list.png")}>
                <Image src="/Project Images/Products list.png" alt="Products List" fill className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border/50 shadow-md bg-muted/10 cursor-zoom-in group" onClick={() => setLightboxImage("/Project Images/Order Page.png")}>
                <Image src="/Project Images/Order Page.png" alt="Order Page" fill className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border/50 shadow-md bg-muted/10 cursor-zoom-in group" onClick={() => setLightboxImage("/Project Images/Coupon code.png")}>
                <Image src="/Project Images/Coupon code.png" alt="Coupon Code System" fill className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
            </div>
          </motion.div>

          {/* Mobile Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl font-heading font-bold mb-4">Flawless Mobile Experience</h2>
              <p className="text-muted-foreground">Over 80% of their traffic comes from mobile. We engineered the mobile views to feel like a native application.</p>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8 lg:gap-12">
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[3rem] overflow-hidden border-[8px] border-zinc-900 shadow-2xl bg-zinc-900 shrink-0">
                <Image src="/Project Images/Mobile View.png" alt="Mobile View 1" fill className="object-contain object-top" />
              </div>
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[3rem] overflow-hidden border-[8px] border-zinc-900 shadow-2xl bg-zinc-900 shrink-0">
                <Image src="/Project Images/Mobile view Store.png" alt="Mobile View Store" fill className="object-contain object-top" />
              </div>
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[3rem] overflow-hidden border-[8px] border-zinc-900 shadow-2xl bg-zinc-900 shrink-0">
                <Image src="/Project Images/Mobile View Order Tracking.png" alt="Order Tracking Mobile" fill className="object-contain object-top" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-primary text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">Need an E-Commerce overhaul?</h2>
          <p className="text-xl leading-relaxed text-primary/20 mb-10">
            Our engineering team is ready to scale your platform and eliminate conversion bottlenecks.
          </p>
          <Link href="?contact=true" scroll={false} className="inline-flex items-center justify-center bg-white hover:bg-zinc-100 text-primary rounded-full h-14 px-10 text-lg font-bold shadow-lg hover:-translate-y-1 transition-all">
            Contact Sales
          </Link>
        </div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-2 bg-muted/50 hover:bg-muted text-foreground rounded-full transition-colors z-50"
            >
              <X className="size-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[95vw] h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightboxImage} alt="Full detail view" fill className="object-contain" quality={100} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
