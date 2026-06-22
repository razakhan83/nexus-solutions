"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you build custom websites or use WordPress/Shopify?",
    answer: "We do both! We build highly scalable, custom web applications from scratch (using React and Next.js) for enterprises, but we also create highly optimized, conversion-focused WordPress and Shopify stores tailored to your exact needs."
  },
  {
    question: "How long does it take to see results from SEO and Performance Marketing?",
    answer: "Performance marketing (Google/Meta Ads) can start generating high-intent traffic and leads within the first week of launch. SEO is a sustainable long-term strategy, and significant ranking improvements typically take between 3 to 6 months depending on keyword competitiveness."
  },
  {
    question: "Do you support secure payment gateway integrations in Pakistan?",
    answer: "Yes. We specialize in integrating secure, local, and international payment gateways that are fully supported in Pakistan (such as Stripe, 2Checkout, Safepay, and local bank APIs) to ensure your e-commerce platform processes transactions flawlessly."
  },
  {
    question: "Will my website be fully mobile responsive?",
    answer: "Absolutely. Over 70% of web traffic is mobile. We design and develop with a mobile-first approach, ensuring your website or app performs perfectly across all devices and screen sizes."
  },
  {
    question: "Do you provide ongoing support after the project is launched?",
    answer: "Yes, we offer dedicated technical infrastructure support, maintenance, and ongoing growth marketing retainers to ensure your digital assets scale alongside your business."
  }
];

export function Faq() {
  return (
    <section className="bg-background py-16 sm:py-24 border-t border-border/40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start max-w-7xl mx-auto">
          
          {/* Left Column: Heading and Accordion */}
          <div className="order-2 lg:order-1 w-full flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">FAQ</h2>
              <p className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground lg:text-5xl leading-tight mb-4">
                Got questions? <br className="hidden lg:block"/><span className="text-primary">We have answers.</span>
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Everything you need to know about our digital services and how we operate.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full"
            >
              <Accordion className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/40 bg-muted/20 px-6 rounded-xl hover:border-primary/30 transition-colors data-[state=open]:bg-primary/5 data-[state=open]:border-primary/20">
                    <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary transition-colors py-5 hover:no-underline [&[data-state=open]]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>

          {/* Right Column: Illustration */}
          <motion.div 
            className="relative w-full h-[250px] sm:h-[300px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2 lg:sticky lg:top-32"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
             <Image src="/undraw_questions_52ic.svg" alt="Frequently Asked Questions" fill className="object-contain p-8 lg:p-12" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
