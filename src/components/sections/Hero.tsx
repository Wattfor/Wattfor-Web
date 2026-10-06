"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import dynamic from "next/dynamic";

const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 18 },
    },
  };

  return (
    <section className="relative h-[100dvh] flex flex-col overflow-hidden bg-brand-navy text-white">
      {/* Silk animated WebGL background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Silk
          speed={5}
          scale={1}
          color="#0e3151"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Subtle overlays so centered text is crisp while Silk motion remains visible */}
      <div className="absolute inset-0 bg-radial from-transparent via-brand-navy/20 to-brand-navy/75 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-transparent to-brand-navy/80 pointer-events-none z-[1]" />

      {/* Main content — vertically centred and horizontally centered, fills viewport */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full px-5 sm:px-10 lg:px-16 pt-24 pb-6 sm:pt-28 sm:pb-8">
        <div className="max-w-5xl mx-auto w-full flex justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-5 sm:space-y-6"
          >
            {/* Eyebrow Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-sky flex-shrink-0" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-brand-sky font-bold">
                Websites &amp; Local SEO for Trade Contractors
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="tracking-tight leading-none text-white text-center">
              <span className="font-normal text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-brand-sky block normal-case mb-1 sm:mb-2">
                wired for trades.
              </span>
              <span className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-black block">
                Built for Search.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium text-center"
            >
              We build high-speed websites and manage local search visibility for electricians,
              plumbers, HVAC, and roofers — so the next job goes to your crew, not whoever ranks
              first on Google.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 w-full"
            >
              <button
                onClick={onCtaClick}
                className="flex items-center gap-2 bg-white text-brand-navy hover:bg-brand-sky hover:text-brand-navy px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm shadow-md transition-colors duration-200 w-full sm:w-auto justify-center"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom client strip — infinite sliding marquee */}
      <div className="relative z-10 border-t border-white/10 w-full overflow-hidden py-4 sm:py-5">
        {/* Fade vignettes */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-x-10 sm:gap-x-16 opacity-35">
          {[
            "Apex Electric", "Summit HVAC", "Vance Plumb", "Croft Roof", "Jenkins Gas",
            "Apex Electric", "Summit HVAC", "Vance Plumb", "Croft Roof", "Jenkins Gas",
          ].map((brand, i) => (
            <span
              key={i}
              className="text-base sm:text-xl uppercase tracking-widest font-extrabold text-white whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
