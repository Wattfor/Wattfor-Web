"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

interface NavigationProps {
  onCtaClick: () => void;
}

export default function Navigation({ onCtaClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on escape key or resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Specs", href: "#specs" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed z-40 transition-all duration-300 top-0 left-0 right-0 w-full ${
          isScrolled
            ? "bg-brand-offwhite/95 border-b border-brand-navy/10 shadow-sm backdrop-blur-xl"
            : "bg-brand-navy/80 border-b border-white/10 backdrop-blur-xl"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 xs:px-5 sm:px-10 lg:px-16 py-3 sm:py-4 flex justify-between items-center transition-colors duration-300 ${
            isScrolled ? "border-x border-brand-navy/10" : "border-x border-white/10"
          }`}
        >
          {/* Logo / Wordmark */}
          <a
            href="#"
            className="flex items-center space-x-2.5 sm:space-x-3 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white shadow-sm border border-white/20 flex items-center justify-center p-1.5 transition-all duration-300 group-hover:shadow-md flex-shrink-0">
              <img
                src="/wattfor.svg"
                alt="Wattfor Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className={`text-xl sm:text-2xl lowercase tracking-wider font-extrabold transition-colors duration-300 ${
                isScrolled ? "text-brand-navy" : "text-white"
              }`}
            >
              wattfor
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-xs uppercase tracking-widest items-center font-bold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors relative group py-2 ${
                  isScrolled
                    ? "text-brand-slate hover:text-brand-navy"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-copper transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {isScrolled ? (
              <Button onClick={onCtaClick} variant="primary" className="py-2.5 px-6 rounded-lg text-xs">
                Contact Us
              </Button>
            ) : (
              <button
                onClick={onCtaClick}
                className="bg-white text-brand-navy hover:bg-brand-sky text-xs font-bold uppercase tracking-widest py-2.5 px-6 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer"
              >
                Contact Us
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
              isScrolled ? "hover:bg-brand-navy/5 text-brand-navy" : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-md"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="relative w-full max-w-xs xs:max-w-sm h-full bg-brand-offwhite border-l border-brand-navy/10 px-6 sm:px-8 py-16 flex flex-col justify-between shadow-2xl"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white shadow-md border border-brand-navy/10 flex items-center justify-center p-2 flex-shrink-0">
                      <img
                        src="/wattfor.svg"
                        alt="Wattfor Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-2xl lowercase tracking-wider font-extrabold text-brand-navy">
                      wattfor
                    </span>
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="p-1.5 rounded-lg text-brand-navy hover:bg-brand-navy/5 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-4 pt-2">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl xs:text-3xl uppercase tracking-wider font-bold text-brand-navy hover:text-brand-copper transition-colors py-1"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 pt-6 border-t border-brand-navy/10">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    onCtaClick();
                  }}
                  variant="primary"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-[10px] text-center text-brand-slate uppercase tracking-widest font-bold">
                  No lock-in terms · Billed month-to-month
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
