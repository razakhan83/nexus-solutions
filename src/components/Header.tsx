"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set initial
    setActiveLink(pathname + window.location.hash);

    const handleHashChange = () => {
      setActiveLink(window.location.pathname + window.location.hash);
    };

    const handleScroll = () => {
      if (pathname === "/") {
        const contactEl = document.getElementById("contact");
        if (contactEl) {
          const rect = contactEl.getBoundingClientRect();
          // If contact section is in the upper half of the viewport
          if (rect.top <= window.innerHeight / 1.5) {
            setActiveLink("/#contact");
          } else {
            setActiveLink("/");
          }
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check on mount
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  const getLinkClass = (href: string, isMobile = false) => {
    // Simple exact match logic
    const isActive = activeLink === href || (href === "/" && activeLink === "");
    const baseSize = isMobile ? "text-base block w-full" : "text-sm";
    return `${baseSize} font-medium transition-colors ${
      isActive ? "text-purple-600 font-bold" : "text-zinc-600 hover:text-purple-600"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md text-zinc-900 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight text-zinc-900">Logo</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          <Link href="/" onClick={() => handleLinkClick("/")} className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/services" onClick={() => handleLinkClick("/services")} className={getLinkClass("/services")}>
            Services
          </Link>
          <Link href="/portfolio" onClick={() => handleLinkClick("/portfolio")} className={getLinkClass("/portfolio")}>
            Portfolio
          </Link>
          <Link href="/#contact" onClick={() => handleLinkClick("/#contact")} className={getLinkClass("/#contact")}>
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
              <Link onClick={() => handleLinkClick("/")} href="/" className={getLinkClass("/", true)}>
                Home
              </Link>
              <Link onClick={() => handleLinkClick("/services")} href="/services" className={getLinkClass("/services", true)}>
                Services
              </Link>
              <Link onClick={() => handleLinkClick("/portfolio")} href="/portfolio" className={getLinkClass("/portfolio", true)}>
                Portfolio
              </Link>
              <Link onClick={() => handleLinkClick("/#contact")} href="/#contact" className={getLinkClass("/#contact", true)}>
                Contact
              </Link>
              <Button render={<a href="/#contact" />} onClick={() => setIsMobileMenuOpen(false)} nativeButton={false} className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-all text-base h-11 rounded-md shadow-md shadow-purple-600/20">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
