"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Lock,
  Globe,
  ShieldCheck,
  Database,
  Smartphone,
  Layers,
  CheckCircle2,
  Zap,
  PhoneCall,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Hook to animate numbers smoothly from 0 to target
function useCounter(target: number, duration: number = 1.2, trigger: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easeProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, trigger]);

  return count;
}

export default function BentoFeatures() {
  const [isInView, setIsInView] = useState(false);
  const speedCount = useCounter(98, 1.2, isInView);

  const tradeSpecs = [
    {
      title: "Top Google Maps Ranking",
      desc: "Set up so local homeowners searching for emergency repairs find your business first.",
      badge: "Local SEO",
      icon: Globe,
    },
    {
      title: "Instant Text Alerts for Leads",
      desc: "Your phone receives a text alert in seconds the moment a customer requests a quote.",
      badge: "Real-Time",
      icon: Smartphone,
    },
    {
      title: "Clear Services & Pricing Menus",
      desc: "Show your exact services and rates upfront so customers trust you before they call.",
      badge: "Transparent",
      icon: Layers,
    },
    {
      title: "Bank-Grade Website Security",
      desc: "Includes SSL security padlock so customers and Google know your site is safe and authentic.",
      badge: "Protected",
      icon: ShieldCheck,
    },
    {
      title: "Automatic Nightly Backups",
      desc: "Saved every single night so you never lose customer reviews, photos, or job data.",
      badge: "Automated",
      icon: Database,
    },
  ];

  return (
    <section
      id="specs"
      className="relative py-16 sm:py-20 lg:py-24 bg-brand-offwhite border-b border-brand-navy/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto border-x border-brand-navy/10 px-4 xs:px-5 sm:px-10 lg:px-16 space-y-10 sm:space-y-12">
        {/* Section Header with Simple English */}
        <div className="max-w-2xl text-left space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-copper font-bold block">
            - WHAT YOU RECEIVE
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-brand-navy tracking-tight leading-tight">
            Everything your website needs to win jobs.
          </h2>
          <p className="text-brand-slate text-sm sm:text-base font-medium leading-relaxed">
            Fast loading, top Google rankings, and 100% full ownership of your site from day one. No confusing tech jargon — just reliable tools that bring in phone calls.
          </p>
        </div>

        {/* Asymmetric Animated Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Page Speed & Performance HUD (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="lg:col-span-7 bg-white rounded-xl border border-brand-navy/10 shadow-sm p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-copper/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            {/* Top decorative subtle glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-radial from-emerald-500/10 to-transparent pointer-events-none" />

            <div className="space-y-6">
              {/* Card Eyebrow & Status */}
              <div className="flex items-center justify-between border-b border-brand-navy/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-brand-copper uppercase tracking-widest font-bold">
                    Official Google Speed Test
                  </span>
                </div>
                <span className="text-[10px] text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  Tested on 4G Mobile
                </span>
              </div>

              {/* Main Gauge + Headline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl uppercase font-black text-brand-navy tracking-tight leading-tight">
                    Loads in under 1 second.
                  </h3>
                  <p className="text-brand-slate text-xs sm:text-sm max-w-sm leading-relaxed font-medium">
                    When someone has an emergency, they won&apos;t wait for a slow website. If your page takes more than 2 seconds to load, they click away and call your competitor. We make yours open instantly.
                  </p>
                </div>

                {/* Clean, Innovative Animated Circular Speed Gauge matching uploaded screenshot */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 flex items-center justify-center bg-[#F8FAFC] rounded-2xl border border-brand-navy/10 p-2.5 self-start sm:self-auto shadow-sm group/gauge transition-all duration-300"
                >
                  {/* Subtle pulsing glow ring behind gauge */}
                  <div className="absolute inset-2 rounded-full bg-emerald-500/10 blur-md animate-pulse pointer-events-none" />

                  {/* SVG Circle Gauge */}
                  <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 100 100">
                    {/* Background Track */}
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      className="stroke-slate-200 fill-none"
                      strokeWidth="7"
                    />
                    {/* Animated Emerald Progress Ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      className="stroke-[#00C853] fill-none transition-all duration-1000 ease-out"
                      strokeWidth="7"
                      strokeDasharray="263.89"
                      strokeDashoffset={263.89 - (263.89 * speedCount) / 100}
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Exact Center Typography from Photo: Bold 98 + OPTIMAL */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 select-none">
                    <span className="text-3xl sm:text-4xl font-black text-[#0B1528] tracking-tight leading-none">
                      {speedCount}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-[#00A843] uppercase tracking-wider mt-0.5">
                      OPTIMAL
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* 4 Clean, Understandable Diagnostic Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-brand-offwhite/60 border border-brand-navy/10 rounded-lg p-3 space-y-1 hover:border-emerald-500/40 transition-colors"
                >
                  <span className="text-[9px] uppercase tracking-wider text-brand-slate font-bold block">
                    Load Speed
                  </span>
                  <span className="text-base sm:text-lg font-black text-brand-navy block">
                    0.8s
                  </span>
                  <span className="text-[9px] text-emerald-600 font-semibold block flex items-center gap-1">
                    <Check className="w-2.5 h-2.5" /> Instant open
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-brand-offwhite/60 border border-brand-navy/10 rounded-lg p-3 space-y-1 hover:border-emerald-500/40 transition-colors"
                >
                  <span className="text-[9px] uppercase tracking-wider text-brand-slate font-bold block">
                    Mobile Friendly
                  </span>
                  <span className="text-base sm:text-lg font-black text-brand-navy block">
                    100%
                  </span>
                  <span className="text-[9px] text-emerald-600 font-semibold block flex items-center gap-1">
                    <Check className="w-2.5 h-2.5" /> All phones
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-brand-offwhite/60 border border-brand-navy/10 rounded-lg p-3 space-y-1 hover:border-emerald-500/40 transition-colors"
                >
                  <span className="text-[9px] uppercase tracking-wider text-brand-slate font-bold block">
                    Zero Glitches
                  </span>
                  <span className="text-base sm:text-lg font-black text-brand-navy block">
                    Smooth
                  </span>
                  <span className="text-[9px] text-emerald-600 font-semibold block flex items-center gap-1">
                    <Check className="w-2.5 h-2.5" /> No jumping
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-brand-offwhite/60 border border-brand-navy/10 rounded-lg p-3 space-y-1 hover:border-emerald-500/40 transition-colors"
                >
                  <span className="text-[9px] uppercase tracking-wider text-brand-slate font-bold block">
                    Always Online
                  </span>
                  <span className="text-base sm:text-lg font-black text-brand-navy block">
                    99.9%
                  </span>
                  <span className="text-[9px] text-emerald-600 font-semibold block flex items-center gap-1">
                    <Check className="w-2.5 h-2.5" /> Never down
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Bottom Status Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold text-brand-slate border-t border-brand-navy/10 pt-4 mt-6">
              <span className="flex items-center gap-1.5 text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Passed All Google Speed Standards</span>
              </span>
              <span className="uppercase text-brand-copper">
                Faster than 99% of competitor websites
              </span>
            </div>
          </motion.div>

          {/* Card 2: 100% Client Ownership Guarantee (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="lg:col-span-5 bg-white rounded-xl border border-brand-navy/10 shadow-sm p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-copper/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-5">
              {/* Card Eyebrow */}
              <div className="flex items-center justify-between border-b border-brand-navy/10 pb-4">
                <span className="text-[10px] text-brand-copper uppercase tracking-widest font-bold">
                  Your Business · Your Property
                </span>
                <span className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>100% Yours</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl uppercase font-black text-brand-navy tracking-tight leading-tight">
                  You own everything. No hostage fees.
                </h3>
                <p className="text-brand-slate text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                  Many marketing agencies lease you a website and hold your domain hostage if you leave. With Wattfor, you own everything legally from day one.
                </p>
              </div>

              {/* Ownership Breakdown in Simple English */}
              <div className="space-y-2.5 bg-brand-offwhite/50 border border-brand-navy/10 rounded-lg p-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-navy font-semibold">Your Website Domain (.com)</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Registered in Your Name
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-brand-navy/5 pt-2">
                  <span className="text-brand-navy font-semibold">Google Business Profile</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded">
                    You Are Primary Owner
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-brand-navy/5 pt-2">
                  <span className="text-brand-navy font-semibold">Complete Website Code</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Yours to Keep Forever
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-brand-navy/5 pt-2">
                  <span className="text-brand-navy font-semibold">Leaving or Moving</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-copper bg-brand-copper/10 px-2 py-0.5 rounded">
                    Zero Buyout Penalties
                  </span>
                </div>
              </div>

              {/* Official Clear Quote */}
              <div className="bg-brand-navy text-white p-4 rounded-lg space-y-1 relative overflow-hidden border border-brand-navy/20 shadow-md">
                <span className="text-[8px] text-brand-sky uppercase tracking-widest font-bold block">
                  Contract Guarantee
                </span>
                <p className="text-xs text-white/90 font-medium leading-relaxed italic">
                  &ldquo;You own your domain, your website files, and your Google listings. We never lock you into long-term hostage contracts.&rdquo;
                </p>
              </div>
            </div>

            {/* Bottom Portability Banner */}
            <div className="flex items-center justify-between text-[10px] font-bold text-brand-navy border-t border-brand-navy/10 pt-4 mt-6">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5 text-brand-copper" />
                <span>Full Ownership Guaranteed</span>
              </span>
              <span className="text-emerald-700 uppercase">Walk away anytime</span>
            </div>
          </motion.div>

          {/* Card 3: The 5 Included Must-Haves (Span 12) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-12 bg-white rounded-xl border border-brand-navy/10 shadow-sm p-6 sm:p-8 space-y-6 group hover:border-brand-copper/30 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-navy/10 pb-4">
              <div>
                <span className="text-[10px] text-brand-copper uppercase tracking-widest font-bold block">
                  - INCLUDED STANDARD
                </span>
                <h3 className="text-xl sm:text-2xl uppercase font-black text-brand-navy tracking-tight">
                  Built into every trade website we make
                </h3>
              </div>
              <span className="text-xs text-brand-slate font-medium">
                Tested and ready before your website goes live
              </span>
            </div>

            {/* 5 Modular Spec Columns with Animated Hover Effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {tradeSpecs.map((spec, i) => {
                const IconComponent = spec.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                    className="bg-brand-offwhite/50 border border-brand-navy/10 rounded-lg p-4 flex flex-col justify-between hover:bg-white hover:border-brand-copper/40 hover:shadow-md transition-all duration-200 shadow-2xs group/spec cursor-default"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-md bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy group-hover/spec:bg-brand-copper group-hover/spec:text-white transition-all duration-200">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                          {spec.badge}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-tight text-brand-navy leading-snug">
                          {spec.title}
                        </h4>
                        <p className="text-brand-slate text-xs mt-1 leading-relaxed font-medium">
                          {spec.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
