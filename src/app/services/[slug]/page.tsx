"use client";

import { use } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
      <section className="pt-8 lg:pt-12 pb-12 sm:pb-24 bg-white border-b border-zinc-200 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl font-heading font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 mb-8">
                {service.longDescription}
              </p>
              <Button variant="default" className="bg-primary hover:bg-primary text-white rounded-full h-14 px-8 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" render={<a href="/#contact" />} nativeButton={false}>
                Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 relative h-[300px] sm:h-[400px] w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
               <Image src={service.image} alt={service.title} fill className="object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Features Section */}
      <section className="py-24 sm:py-32 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-heading font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">Our Approach to {service.title}</h2>
          </div>
          
          <div className="space-y-16 lg:space-y-32">
            {service.deepFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-4">{feature.title}</h3>
                  <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">{feature.description}</p>
                </motion.div>
                
                {/* Illustration Image */}
                <motion.div 
                  className="lg:w-1/2 relative h-[250px] sm:h-[350px] w-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  {feature.image && (
                    <Image src={feature.image} alt={feature.title} fill className="object-contain" />
                  )}
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-24 sm:py-32 bg-primary text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold tracking-tight text-white sm:text-3xl lg:text-4xl mb-6">Ready to scale your business?</h2>
          <p className="text-xl leading-relaxed text-primary/20 mb-10">
            Let's discuss how our {service.title} expertise can drive measurable growth for your enterprise.
          </p>
          <Button variant="outline" className="bg-white hover:bg-zinc-100 border-white text-primary rounded-full h-14 px-10 text-lg font-bold shadow-lg hover:-translate-y-1 transition-all" render={<a href="/#contact" />} nativeButton={false}>
            Start a Conversation
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
