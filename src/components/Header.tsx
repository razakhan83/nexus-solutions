"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md text-zinc-900 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-purple-600 flex items-center justify-center shadow-md shadow-purple-600/20">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900">Nexus</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          <Link href="#services" className="text-sm font-medium text-zinc-600 hover:text-purple-600 transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-zinc-600 hover:text-purple-600 transition-colors">
            Portfolio
          </Link>
          <Link href="#contact" className="text-sm font-medium text-zinc-600 hover:text-purple-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button render={<a href="#contact" />} nativeButton={false} className="bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/30 transition-all text-sm px-5 h-9 rounded-md">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-zinc-600 hover:text-zinc-900"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-200 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#services" className="text-base font-medium text-zinc-600 hover:text-purple-600 transition-colors">
                Services
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/portfolio" className="text-base font-medium text-zinc-600 hover:text-purple-600 transition-colors">
                Portfolio
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#contact" className="text-base font-medium text-zinc-600 hover:text-purple-600 transition-colors">
                Contact
              </Link>
              <Button render={<a href="#contact" />} onClick={() => setIsMobileMenuOpen(false)} nativeButton={false} className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-all text-base h-11 rounded-md shadow-md shadow-purple-600/20">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
