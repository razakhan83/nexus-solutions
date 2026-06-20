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
    setActiveLink(pathname + window.location.hash);
    const handleHashChange = () => setActiveLink(window.location.pathname + window.location.hash);
    const handleScroll = () => {
      if (pathname === "/") {
        const contactEl = document.getElementById("contact");
        if (contactEl) {
          const rect = contactEl.getBoundingClientRect();
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
    const isActive = activeLink === href || (href === "/" && activeLink === "");
    const baseSize = isMobile ? "text-3xl md:text-5xl font-heading tracking-tight block w-full py-4" : "text-xs uppercase tracking-widest";
    return `${baseSize} transition-all duration-300 relative group overflow-hidden ${
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`;
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/40 text-foreground transition-all duration-500">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-heading font-bold tracking-tighter uppercase">KG.</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-12 items-center">
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
          <div className="hidden md:flex items-center">
            <Button render={<a href="#contact" />} nativeButton={false} variant="default" className="uppercase tracking-widest text-xs px-8 min-w-[140px]">
              Engage
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center size-12 text-foreground"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X strokeWidth={1} className="size-8" /> : <Menu strokeWidth={1} className="size-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center px-6 pt-20 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 mt-12 mb-auto">
              <div className="overflow-hidden">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
                  <Link onClick={() => handleLinkClick("/")} href="/" className={getLinkClass("/", true)}>
                    Home
                  </Link>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.5 }}>
                  <Link onClick={() => handleLinkClick("/services")} href="/services" className={getLinkClass("/services", true)}>
                    Services
                  </Link>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                  <Link onClick={() => handleLinkClick("/portfolio")} href="/portfolio" className={getLinkClass("/portfolio", true)}>
                    Portfolio
                  </Link>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }}>
                  <Link onClick={() => handleLinkClick("/#contact")} href="/#contact" className={getLinkClass("/#contact", true)}>
                    Contact
                  </Link>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-12 w-full"
            >
              <Button render={<a href="/#contact" />} onClick={() => setIsMobileMenuOpen(false)} nativeButton={false} className="w-full text-sm uppercase tracking-widest">
                Start a Project
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
