"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
import { X, CheckCircle2, Loader2 } from "lucide-react";

export function ContactModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("contact") === "true";
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close modal by removing query parameter
  const handleClose = () => {
    // If the URL has ?contact=true, we remove it
    // Wait for animation to finish before doing anything destructive, but router.back or router.push handles it
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("contact");
    const newPath = window.location.pathname + (newParams.toString() ? `?${newParams.toString()}` : "");
    router.push(newPath, { scroll: false });
    
    // Reset state after a short delay to allow exit animation to play
    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitting(false);
    }, 500);
  };

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-card border border-border/50 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-0 border-b border-border/0">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Start a Project</h2>
              <button 
                onClick={handleClose}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Body */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Inquiry Sent Successfully</h3>
                    <p className="text-muted-foreground max-w-sm mb-8">
                      Thank you for reaching out. A senior strategist will review your requirements and contact you within 24 hours.
                    </p>
                    <Button onClick={handleClose} className="w-full sm:w-auto px-8">
                      Close
                    </Button>
                  </motion.div>
                ) : (
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
                    className="w-full"
                  >
                    <FieldGroup>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                          <Field>
                            <FieldLabel htmlFor="modal-name">Full Name</FieldLabel>
                            <Input 
                              id="modal-name" 
                              required 
                              placeholder="e.g. Sarah Jenkins" 
                              className="bg-muted/20 hover:border-primary/30 transition-all duration-300 shadow-none"
                            />
                          </Field>
                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                          <Field>
                            <FieldLabel htmlFor="modal-email">Corporate Email</FieldLabel>
                            <Input 
                              id="modal-email" 
                              type="email" 
                              required 
                              placeholder="sarah@company.com" 
                              className="bg-muted/20 hover:border-primary/30 transition-all duration-300 shadow-none"
                            />
                          </Field>
                        </motion.div>
                      </div>

                      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                        <Field>
                          <FieldLabel htmlFor="modal-project-type">Primary Objective</FieldLabel>
                          <Select required>
                            <SelectTrigger id="modal-project-type" className="w-full bg-muted/20 hover:border-primary/30 transition-all duration-300 shadow-none">
                              <SelectValue placeholder="Select an objective..." />
                            </SelectTrigger>
                            <SelectContent className="z-[105]">
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
                          <FieldLabel htmlFor="modal-description">Project Scope & Timeline</FieldLabel>
                          <Textarea 
                            id="modal-description" 
                            required 
                            placeholder="Briefly describe your requirements, timeline, and estimated budget..." 
                            className="bg-muted/20 hover:border-primary/30 min-h-[100px] resize-none transition-all duration-300 shadow-none"
                          />
                        </Field>
                      </motion.div>

                      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="pt-2">
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full relative overflow-hidden group"
                        >
                          <span className={`flex items-center justify-center transition-transform duration-300 ${isSubmitting ? '-translate-y-12' : 'translate-y-0'}`}>
                            Submit Inquiry
                          </span>
                          
                          <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isSubmitting ? 'translate-y-0' : 'translate-y-12'}`}>
                            <Loader2 className="w-5 h-5 animate-spin" />
                          </span>
                        </Button>
                        <p className="text-xs text-center text-muted-foreground mt-4">
                          By submitting, you agree to our privacy policy. Your data is encrypted and secure.
                        </p>
                      </motion.div>
                    </FieldGroup>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
