"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

  const realWorldPartners = [
    {
      name: "Google",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
      ),
    },
    {
      name: "ServiceTitan",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm1 14.5h-2v-4h-2l3-5 3 5h-2v4z"/>
        </svg>
      ),
    },
    {
      name: "Jobber",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm4 11.5c0 2-1.5 3.5-4 3.5-1.5 0-2.8-.5-3.5-1.2l1.2-1.8c.5.5 1.3.8 2.2.8 1.2 0 1.9-.7 1.9-1.6V8h2.2v5.5z"/>
        </svg>
      ),
    },
    {
      name: "Housecall Pro",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L2 12h3v8h14v-8h3L12 3zm-1 14l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z"/>
        </svg>
      ),
    },
    {
      name: "Angi",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6.5l3.2 10h-2l-.7-2.3h-3l-.7 2.3H6.8l3.2-10h2zm-.3 6.2l-.9-3.2-.9 3.2h1.8z" fill="#02242F" />
        </svg>
      ),
    },
    {
      name: "Yelp",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.5 11.2l3.8-2.6c.5-.3.6-1 .2-1.5l-1.2-1.4c-.4-.5-1.1-.6-1.6-.2l-2.7 3.7 1.5 2zm-2.4-.2l-1.5-4.4c-.2-.6-.8-.9-1.4-.7l-1.8.6c-.6.2-.9.8-.7 1.4l2.6 4.1 2.8-1zm.3 2.5l-3.8 2.5c-.5.3-.6 1-.2 1.5l1.2 1.4c.4.5 1.1.6 1.6.2l2.7-3.7-1.5-1.9zm2.4.2l1.5 4.4c.2.6.8.9 1.4.7l1.8-.6c.6-.2.9-.8.7-1.4l-2.6-4.1-2.8 1zm-.5-1.7l4.3.4c.6.1 1.1-.4 1.2-1l.3-1.8c.1-.6-.4-1.1-1-1.2l-4.7-.3-.1 3.9z"/>
        </svg>
      ),
    },
    {
      name: "Nextdoor",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 9.3V4h-3v2.7L12 3 2 12h3v9h6v-6h2v6h6v-9h3l-3-2.7z"/>
        </svg>
      ),
    },
    {
      name: "Carrier",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.48 0-4.5-2.02-4.5-4.5S8.52 7.5 11 7.5c1.33 0 2.52.58 3.33 1.5l-1.42 1.42c-.5-.57-1.19-.92-1.91-.92-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.72 0 1.41-.35 1.91-.92l1.42 1.42c-.81.92-2 1.5-3.33 1.5z"/>
        </svg>
      ),
    },
  ];

  const marqueePartners = [...realWorldPartners, ...realWorldPartners];

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-brand-navy text-white">
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

      {/* Subtle dotted matrix overlay matching reference layout */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-[2] opacity-60" />

      {/* Main content — vertically balanced with generous breathing room and framed by border-x edge lines */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto border-x border-white/10 px-5 sm:px-10 lg:px-16 pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
        <div className="w-full flex justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center text-center"
          >
            {/* Eyebrow Pill Badge matching reference layout */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 pl-1.5 pr-4 py-1.5 rounded-full backdrop-blur-md transition-all duration-200 shadow-sm mb-7 sm:mb-9 cursor-default"
            >
              <span className="bg-white text-brand-navy font-bold text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
                Trades
              </span>
              <span className="text-white/85 text-xs sm:text-sm font-medium">
                Websites &amp; Local SEO for Trade Contractors
              </span>
            </motion.div>

            {/* Headline with reduced typography size and airy line-height */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-center leading-[1.14] mb-5 sm:mb-7 max-w-3xl"
            >
              <span className="block text-white/95">
                wired for trades.
              </span>
              <span className="block text-white mt-1">
                Built for Search.
              </span>
            </motion.h1>

            {/* Description — relaxed width and line height */}
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-normal text-center mb-8 sm:mb-10"
            >
              We build high-speed websites and manage local search visibility for electricians,
              plumbers, HVAC, and roofers — so the next job goes to your crew, not whoever ranks
              first on Google.
            </motion.p>

            {/* CTA Buttons Row matching reference layout */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy hover:bg-brand-sky hover:text-brand-navy px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold text-sm transition-all duration-200 backdrop-blur-sm w-full sm:w-auto cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Learn More</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Partners section matching uploaded reference image structure */}
      <div className="relative z-10 border-t border-white/10 w-full">
        <div className="max-w-7xl mx-auto border-x border-white/10 pt-5 pb-6 sm:pt-6 sm:pb-7 px-5 sm:px-10 lg:px-16 space-y-4">
          {/* Header label matching screenshot */}
          <p className="text-xs sm:text-sm text-white/50 font-medium">
            Trusted by 56+ trade crews who rely on direct search leads
          </p>

          {/* Real world logos row with sliding marquee */}
          <div className="overflow-hidden relative py-1">
            {/* Fade vignettes */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-x-10 sm:gap-x-14 opacity-75">
              {marqueePartners.map((partner, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-white/90 hover:text-white transition-opacity select-none whitespace-nowrap group shrink-0"
                >
                  <div className="text-white/80 group-hover:text-brand-sky transition-colors">
                    {partner.icon}
                  </div>
                  <span className="text-base sm:text-lg font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
