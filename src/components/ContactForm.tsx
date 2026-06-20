"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectGroup,
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Mail, MessageCircle, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";


export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-white py-24 sm:py-32 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          
          {/* Left Column: Contact Info & Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-6">
                Start a Conversation
              </h2>
              <p className="text-base text-zinc-600 max-w-md leading-relaxed">
                Our engineering and growth teams are ready to architect your next phase of scale. We typically respond to all technical inquiries within one business day.
              </p>
            </div>

            <div className="relative w-full h-[150px] sm:h-[250px] mt-8 lg:mt-12 block -ml-4">
               <Image src="/undraw_message-sent_iyz6.svg" alt="Message Sent" fill className="object-contain object-left" />
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 text-zinc-900 group">
                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                  <Mail className="size-5 text-zinc-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Corporate Sales</p>
                  <a href="mailto:sales@kgagency.com" className="text-base font-medium hover:underline">
                    sales@kgagency.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-900 group">
                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                  <MessageCircle className="size-5 text-zinc-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Direct Line</p>
                  <p className="text-base font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
          </motion.div>

          {/* Right Column: Corporate Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-zinc-200 rounded-xl p-6 sm:p-10 relative overflow-hidden shadow-sm mt-8 lg:mt-0"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                  }}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.98 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-2 group">
                      <Label htmlFor="name" className="text-zinc-700 text-sm font-medium group-focus-within:text-purple-700 transition-colors">Full Name</Label>
                      <Input 
                        id="name" 
                        required 
                        placeholder="e.g. Sarah Jenkins" 
                        className="bg-white border-zinc-200 hover:border-purple-300 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:border-purple-600 transition-all duration-300 shadow-sm"
                      />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-2 group">
                      <Label htmlFor="email" className="text-zinc-700 text-sm font-medium group-focus-within:text-purple-700 transition-colors">Corporate Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="sarah@company.com" 
                        className="bg-white border-zinc-200 hover:border-purple-300 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:border-purple-600 transition-all duration-300 shadow-sm"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-2 group">
                    <Label htmlFor="project-type" className="text-zinc-700 text-sm font-medium group-focus-within:text-purple-700 transition-colors">Primary Objective</Label>
                    <Select required>
                      <SelectTrigger className="w-full bg-white border-zinc-200 hover:border-purple-300 focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all duration-300 shadow-sm">
                        <SelectValue placeholder="Select an objective..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-zinc-200 text-zinc-900 shadow-md">
                        <SelectGroup>
                          <SelectItem value="ecommerce">Enterprise E-Commerce Replatforming</SelectItem>
                          <SelectItem value="cms">Corporate Website & CMS Development</SelectItem>
                          <SelectItem value="marketing">Performance Marketing & Scale</SelectItem>
                          <SelectItem value="other">General Technical Consultation</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-2 group">
                    <Label htmlFor="description" className="text-zinc-700 text-sm font-medium group-focus-within:text-purple-700 transition-colors">Project Scope & Timeline</Label>
                    <Textarea 
                      id="description" 
                      required 
                      placeholder="Briefly describe your requirements, timeline, and estimated budget..." 
                      className="bg-white border-zinc-200 hover:border-purple-300 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:border-purple-600 min-h-[120px] resize-none transition-all duration-300 shadow-sm"
                    />
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full bg-purple-600 hover:bg-purple-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-300 text-white font-medium h-14 rounded-lg text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Transmitting Request...
                        </>
                      ) : (
                        <>
                          Submit Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
              ) : (
                  <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-10 z-20"
                >
                  <div className="size-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="size-10 text-purple-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 mb-2">Inquiry Received</h3>
                  <p className="text-zinc-600 text-lg mb-8 max-w-sm leading-relaxed">
                    Thank you. Your request has been securely logged. An infrastructure specialist will review your details and be in touch shortly.
                  </p>
                  
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply flex items-center justify-center">
                    <Image 
                      src="/undraw_message-sent_iyz6.svg" 
                      alt="Success" 
                      width={300} 
                      height={300} 
                      className="object-contain"
                    />
                  </div>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSuccess(false)}
                    className="border-zinc-200 text-zinc-700 hover:text-purple-700 hover:bg-purple-50 hover:-translate-y-1 transition-all rounded-lg px-8 h-12 text-base font-medium relative z-10"
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
