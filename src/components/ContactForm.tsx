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
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
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
    <footer id="contact" className="bg-background py-16 sm:py-24 border-t border-border/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Left Column: Contact Info & Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between pt-4"
          >
            <div>
              <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Contact</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground lg:text-5xl leading-tight mb-6">
                Start a Conversation.
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
                Our engineering and growth teams are ready to architect your next phase of scale. We typically respond to all technical inquiries within one business day.
              </p>
            </div>

            <div className="relative w-full h-[150px] sm:h-[250px] mt-8 lg:mt-12 block -ml-4">
               <Image src="/undraw_message-sent_iyz6.svg" alt="Message Sent" fill className="object-contain object-left" />
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-5 text-foreground group">
                <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.1em] mb-1">Corporate Sales</p>
                  <a href="mailto:sales@kgagency.com" className="text-base font-semibold hover:text-primary transition-colors">
                    sales@kgagency.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 text-foreground group">
                <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <MessageCircle className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.1em] mb-1">Direct Line</p>
                  <p className="text-base font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
          </motion.div>

          {/* Right Column: Corporate Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-background border border-border/50 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-lg shadow-black/5 mt-8 lg:mt-0"
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
                  className="relative z-10 w-full"
                >
                  <FieldGroup>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                        <Field>
                          <FieldLabel htmlFor="name">Full Name</FieldLabel>
                          <Input 
                            id="name" 
                            required 
                            placeholder="e.g. Sarah Jenkins" 
                            className="bg-muted/20 hover:border-primary/30 transition-all duration-300 shadow-none h-12"
                          />
                        </Field>
                      </motion.div>
                      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                        <Field>
                          <FieldLabel htmlFor="email">Corporate Email</FieldLabel>
                          <Input 
                            id="email" 
                            type="email" 
                            required 
                            placeholder="sarah@company.com" 
                            className="bg-muted/20 hover:border-primary/30 transition-all duration-300 shadow-none h-12"
                          />
                        </Field>
                      </motion.div>
                    </div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                      <Field>
                        <FieldLabel htmlFor="project-type">Primary Objective</FieldLabel>
                        <Select required>
                          <SelectTrigger id="project-type" className="w-full bg-muted/20 hover:border-primary/30 transition-all duration-300 shadow-none h-12">
                            <SelectValue placeholder="Select an objective..." />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border/50 shadow-xl">
                            <SelectGroup>
                              <SelectItem value="ecommerce">Enterprise E-Commerce Replatforming</SelectItem>
                              <SelectItem value="cms">Corporate Website & CMS Development</SelectItem>
                              <SelectItem value="marketing">Performance Marketing & Scale</SelectItem>
                              <SelectItem value="other">General Technical Consultation</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </Field>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                      <Field>
                        <FieldLabel htmlFor="description">Project Scope & Timeline</FieldLabel>
                        <Textarea 
                          id="description" 
                          required 
                          placeholder="Briefly describe your requirements, timeline, and estimated budget..." 
                          className="bg-muted/20 hover:border-primary/30 min-h-[140px] resize-none transition-all duration-300 shadow-none p-4"
                        />
                      </Field>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 relative overflow-hidden group"
                      >
                        <span className={`flex items-center transition-transform duration-300 ${isSubmitting ? '-translate-y-12' : 'translate-y-0'}`}>
                          Submit Inquiry <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        
                        <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isSubmitting ? 'translate-y-0' : 'translate-y-12'}`}>
                          <Loader2 className="w-5 h-5 animate-spin" />
                        </span>
                      </Button>
                      <p className="text-xs text-muted-foreground mt-4">
                        By submitting, you agree to our privacy policy. Your data is encrypted and secure.
                      </p>
                    </motion.div>
                  </FieldGroup>
                </motion.form>
              ) : (
                  <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-background flex flex-col items-center justify-center text-center p-10 z-20"
                >
                  <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="size-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Inquiry Received</h3>
                  <p className="text-muted-foreground text-lg mb-8 max-w-sm leading-relaxed">
                    Thank you. Your request has been securely logged. An infrastructure specialist will review your details and be in touch shortly.
                  </p>
                  
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-luminosity flex items-center justify-center">
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
                    className="relative z-10"
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
