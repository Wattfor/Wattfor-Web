"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Are there any hidden setup fees?",
      a: "Absolutely not. We do not charge configuration, activation, or design fees. You pay the flat-rate monthly cost for the plan you select, which covers custom development, maintenance, local search tracking, and hosting.",
    },
    {
      q: "Do I own my domain and website?",
      a: "Yes. From launch, the domain registration and GBP listings are set up under your name. If you ever choose to cancel your monthly service, we will transfer full ownership of the domain and website assets directly to you. No buy-out fees.",
    },
    {
      q: "What trades do you work with?",
      a: "We specialise in independent contractors and small crews in the home service trades. This includes electricians, plumbers, HVAC technicians, roofers, and general handymen. Our designs and keywords are custom-tailored for these specific markets.",
    },
    {
      q: "How do updates and changes work?",
      a: "Both plans include monthly text and layout changes. Simply drop an email or text with your changes (e.g. updating pricing, adding a service, uploading new job site pictures), and we'll apply it to the live site within 24 hours.",
    },
    {
      q: "How long does it take to go live?",
      a: "Typical site builds are live within 5–7 business days of receiving your business details, logo, and service list. Local SEO setup begins in parallel and shows measurable ranking movement within 30–60 days.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-brand-offwhite border-b border-brand-navy/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto border-x border-brand-navy/10 px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column — Section Header matching reference photo */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <span className="text-xs uppercase tracking-widest text-brand-copper font-bold block">
              - QUICK ANSWERS
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-extrabold uppercase text-brand-navy tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-slate text-sm sm:text-base font-medium leading-relaxed max-w-md">
              Everything you need to know about domain ownership, trade-specific designs, maintenance plans, and flat-rate contracts.
            </p>
          </div>

          {/* Right Column — Horizontal divider rows matching reference photo */}
          <div className="lg:col-span-7 divide-y divide-brand-navy/10 border-y border-brand-navy/10">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    onClick={() => handleToggle(idx)}
                    className="w-full flex justify-between items-center py-5 sm:py-6 text-left cursor-pointer select-none gap-4 group"
                  >
                    <span className="text-base sm:text-lg uppercase tracking-wide font-bold text-brand-navy leading-snug group-hover:text-brand-copper transition-colors">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-md bg-brand-navy/5 flex items-center justify-center text-brand-navy flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-brand-copper/10 text-brand-copper" : "group-hover:bg-brand-navy/10"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="pb-6 text-xs sm:text-sm text-brand-slate leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
