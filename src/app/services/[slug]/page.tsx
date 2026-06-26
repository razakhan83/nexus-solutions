"use client";

import { use } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 selection:bg-primary selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 lg:pt-40 pb-16 sm:pb-24 bg-transparent overflow-hidden relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-white/10 opacity-30 blur-[100px]"></div>
        
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
                <span>Service Details</span>
              </div>
              <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed text-white/90 mb-8 max-w-2xl font-medium">
                {service.longDescription}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="default" className="bg-white hover:bg-white/90 text-primary rounded-full h-14 px-8 text-base font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all" render={<a href="/#contact" />} nativeButton={false}>
                  Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 relative h-[350px] sm:h-[450px] lg:h-[550px] w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
               <Image src={service.image} alt={service.title} fill className="object-contain drop-shadow-2xl" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section (NEW) */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 sm:py-28 bg-zinc-50 border-b border-zinc-100">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold tracking-tight text-zinc-900 sm:text-4xl">Core Capabilities</h2>
              <p className="mt-4 text-lg text-zinc-600">What we bring to the table for this service.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-zinc-800 font-semibold text-lg leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deep Features / Approach Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">Our Approach</h2>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600">A detailed breakdown of how we execute and deliver exceptional results.</p>
          </div>
          
          <div className="space-y-24 lg:space-y-40">
            {service.deepFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <motion.div 
                  className="lg:w-1/2 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-[120px] lg:text-[180px] font-extrabold text-zinc-50 absolute -top-16 -left-8 lg:-top-24 lg:-left-12 -z-10 leading-none select-none">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">{feature.title}</h3>
                  <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-xl">{feature.description}</p>
                  <ul className="mt-8 space-y-3">
                     <li className="flex items-center text-zinc-700 font-medium">
                       <ChevronRight className="w-5 h-5 text-primary mr-2" /> Precision driven results.
                     </li>
                     <li className="flex items-center text-zinc-700 font-medium">
                       <ChevronRight className="w-5 h-5 text-primary mr-2" /> Engineered for scale.
                     </li>
                  </ul>
                </motion.div>
                
                {/* Illustration Image */}
                <motion.div 
                  className="lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-primary/5 rounded-[40px] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 -z-10"></div>
                  {feature.image && (
                    <Image src={feature.image} alt={feature.title} fill className="object-contain drop-shadow-2xl p-4 lg:p-8 transform group-hover:scale-105 transition-transform duration-500" />
                  )}
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-8 leading-tight">Ready to transform your <span className="text-primary">business</span>?</h2>
          <p className="text-xl sm:text-2xl leading-relaxed text-zinc-400 mb-12 max-w-2xl mx-auto">
            Let's discuss how our {service.title} expertise can drive measurable growth for your enterprise.
          </p>
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-white rounded-full h-16 px-12 text-lg font-bold shadow-2xl hover:-translate-y-1 transition-all" render={<a href="/#contact" />} nativeButton={false}>
            Start a Conversation
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
