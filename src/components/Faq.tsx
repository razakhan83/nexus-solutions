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
    <section className="bg-white py-24 sm:py-32 border-t border-zinc-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Illustration */}
          <div className="flex w-[80%] sm:w-[60%] lg:w-1/2 justify-center items-center relative h-[250px] lg:h-[400px] mx-auto lg:mx-0">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-full relative"
             >
                <Image src="/undraw_questions_52ic.svg" alt="Frequently Asked Questions" fill className="object-contain" />
             </motion.div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 text-center lg:text-left"
            >
              <h2 className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-3">FAQ</h2>
              <p className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Frequently Asked Questions
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" className="w-full bg-zinc-50 rounded-2xl border border-zinc-200 shadow-sm px-6 py-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="last:border-0 border-zinc-200">
                    <AccordionTrigger className="text-left text-lg font-semibold text-zinc-900 hover:text-purple-600 transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
