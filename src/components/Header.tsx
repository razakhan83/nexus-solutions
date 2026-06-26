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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveLink(pathname + window.location.hash);
    const handleHashChange = () => setActiveLink(window.location.pathname + window.location.hash);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    const baseSize = isMobile ? "text-2xl md:text-3xl font-heading tracking-tight block w-full py-3" : "text-[15px] font-medium tracking-wide px-2";
    
    if (isMobile) {
      return `${baseSize} transition-all duration-300 relative group overflow-hidden ${
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`;
    }
    
    // The purple wave is now global, so text should always be white when not scrolled
    const useWhiteText = !scrolled;

    return `${baseSize} transition-all duration-300 relative group overflow-hidden ${
      isActive 
        ? (useWhiteText ? "text-white" : "text-primary") 
        : (useWhiteText ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground")
    }`;
  };

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-200 ${scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border/40 py-2' : 'bg-transparent text-white py-6'}`}>
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 max-w-7xl">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className={`text-xl sm:text-2xl font-bold tracking-widest uppercase ${(!scrolled && !isMobileMenuOpen) ? "text-white" : "text-foreground"}`}>
              LOGO
            </span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Link href="/" onClick={() => handleLinkClick("/")} className={getLinkClass("/")}>
                HOME
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Link href="/services" onClick={() => handleLinkClick("/services")} className={getLinkClass("/services")}>
                SERVICES
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link href="/portfolio" onClick={() => handleLinkClick("/portfolio")} className={getLinkClass("/portfolio")}>
                PORTFOLIO
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Link href="?contact=true" scroll={false} onClick={() => handleLinkClick("?contact=true")} className={getLinkClass("?contact=true")}>
                CONTACT
              </Link>
            </motion.div>
          </nav>

          {/* Desktop CTA */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="hidden md:flex items-center">
            <Button 
              render={<Link href="?contact=true" scroll={false} />} 
              nativeButton={false}
              size="sm"
              variant={!scrolled ? "outline" : "default"} 
              className={`${!scrolled ? "bg-white text-primary hover:bg-white/90 border-0" : ""}`}
            >
              ENGAGE
            </Button>
          </motion.div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center size-12"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X strokeWidth={1.5} className="text-foreground" /> : <Menu strokeWidth={1.5} className={!scrolled ? "text-white" : "text-foreground"} />}
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
                    HOME
                  </Link>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.5 }}>
                  <Link onClick={() => handleLinkClick("/services")} href="/services" className={getLinkClass("/services", true)}>
                    SERVICES
                  </Link>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                  <Link onClick={() => handleLinkClick("/portfolio")} href="/portfolio" className={getLinkClass("/portfolio", true)}>
                    PORTFOLIO
                  </Link>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }}>
                  <Link onClick={() => handleLinkClick("?contact=true")} href="?contact=true" scroll={false} className={getLinkClass("?contact=true", true)}>
                    CONTACT
                  </Link>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-8 pt-8 border-t border-border/50 flex flex-col gap-6"
            >
              <a href="mailto:hello@kgagency.com" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                hello@kgagency.com
              </a>
              <div className="flex items-center gap-6">
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 w-full flex justify-start"
            >
              <Button render={<Link href="?contact=true" scroll={false} />} onClick={() => setIsMobileMenuOpen(false)} nativeButton={false} variant="default" className="px-6 h-10 rounded-full text-sm">
                ENGAGE
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
