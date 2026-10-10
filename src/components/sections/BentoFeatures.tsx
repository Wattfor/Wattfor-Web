"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Lock,
  Zap,
  Globe,
  ShieldCheck,
  Database,
  Smartphone,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function BentoFeatures() {
  const [speedVal, setSpeedVal] = useState(0);

  const handleInView = () => {
    setSpeedVal(98);
  };

  const tradeSpecs = [
    {
      title: "Google Maps 3-Pack SEO",
      desc: "LocalBusiness schema pre-configured with trade geo-coordinates.",
      badge: "Pre-Wired",
      icon: Globe,
    },
    {
      title: "Instant SMS Lead Alert",
      desc: "Direct-to-crew SMS dispatch with full job details in < 3 seconds.",
      badge: "Real-Time",
      icon: Smartphone,
    },
    {
      title: "Trade Service Menus",
      desc: "Structured service items, transparent pricing, and trade scope.",
      badge: "Standard",
      icon: Layers,
    },
    {
      title: "SSL & Edge Security",
      desc: "256-bit TLS encryption, Cloudflare DDoS defense & edge caching.",
      badge: "A+ Grade",
      icon: ShieldCheck,
    },
    {
      title: "Daily Cloud Snapshots",
      desc: "Nightly automated encrypted backups with 1-click disaster recovery.",
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
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-copper font-bold block">
            - PLATFORM BENCHMARKS
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-brand-navy tracking-tight leading-tight">
            What every site receives.
          </h2>
          <p className="text-brand-slate text-sm sm:text-base font-medium leading-relaxed">
            Enterprise infrastructure, sub-second mobile speed, and complete digital ownership — standard on every single trade build.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Performance Engine & Core Web Vitals HUD (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={handleInView}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 bg-white rounded-xl border border-brand-navy/10 shadow-sm p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-copper/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top decorative grid line */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-brand-copper/5 to-transparent pointer-events-none" />

            <div className="space-y-6">
              {/* Card Eyebrow & Status */}
              <div className="flex items-center justify-between border-b border-brand-navy/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-brand-copper uppercase tracking-widest font-bold">
                    Telemetry Engine · Google Lighthouse
                  </span>
                </div>
                <span className="text-[10px] text-brand-slate uppercase tracking-wider font-semibold">
                  Test Server: Colorado Edge Cluster
                </span>
              </div>

              {/* Main Gauge + Headline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl uppercase font-black text-brand-navy tracking-tight leading-none">
                    Page Speed &amp; Vitals
                  </h3>
                  <p className="text-brand-slate text-xs sm:text-sm mt-2 max-w-sm leading-relaxed font-medium">
                    Google mobile ranking prioritizes fast-loading sites. We optimize every asset, font, and script to score in the top 1%.
                  </p>
                </div>

                {/* Animated Radial Score Gauge */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center bg-brand-offwhite/40 rounded-xl border border-brand-navy/5 p-2 self-start sm:self-auto shadow-inner">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      className="stroke-brand-navy/10 fill-none"
                      strokeWidth="6"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      className="stroke-emerald-500 fill-none transition-all duration-1000 ease-out"
                      strokeWidth="6"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * speedVal) / 100}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-black text-brand-navy leading-none">
                      {speedVal}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-emerald-600 tracking-wider">
                      Optimal
                    </span>
                  </div>
                </div>
              </div>

              {/* 4-Metric Diagnostic Telemetry Readout */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
                <div className="bg-brand-offwhite/50 border border-brand-navy/10 rounded-lg p-3 space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-brand-slate font-bold block">
                    LCP (Content)
                  </span>
                  <span className="text-base sm:text-lg font-black text-brand-navy block">
                    0.7s
                  </span>
                  <span className="text-[9px] text-emerald-600 font-semibold block">
                    Target &lt; 2.5s
                  </span>
                </div>
                <div className="bg-brand-offwhite/50 border border-brand-navy/10 rounded-lg p-3 space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-brand-slate font-bold block">
                    INP (Interaction)
                  </span>
                  <span className="text-base sm:text-lg font-black text-brand-navy block">
                    14ms
                  </span>
                  <span className="text-[9px] text-emerald-600 font-semibold block">
                    Instant tap
                  </span>
                </div>
                <div className="bg-brand-offwhite/50 border border-brand-navy/10 rounded-lg p-3 space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-brand-slate font-bold block">
                    CLS (Stability)
                  </span>
                  <span className="text-base sm:text-lg font-black text-brand-navy block">
                    0.00
                  </span>
                  <span className="text-[9px] text-emerald-600 font-semibold block">
                    Zero shift
                  </span>
                </div>
                <div className="bg-brand-offwhite/50 border border-brand-navy/10 rounded-lg p-3 space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-brand-slate font-bold block">
                    TTFB (Edge CDN)
                  </span>
                  <span className="text-base sm:text-lg font-black text-brand-navy block">
                    38ms
                  </span>
                  <span className="text-[9px] text-emerald-600 font-semibold block">
                    Sub-second
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Status Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold text-brand-slate border-t border-brand-navy/10 pt-4 mt-6">
              <span className="flex items-center gap-1.5 text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>99.98% Measured Uptime SLA</span>
              </span>
              <span className="uppercase text-brand-copper">
                Zero Render-Blocking Scripts
              </span>
            </div>
          </motion.div>

          {/* Card 2: 100% Client Ownership & Compliance Vault (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 bg-white rounded-xl border border-brand-navy/10 shadow-sm p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-copper/30 transition-all duration-300"
          >
            <div className="space-y-5">
              {/* Card Eyebrow */}
              <div className="flex items-center justify-between border-b border-brand-navy/10 pb-4">
                <span className="text-[10px] text-brand-copper uppercase tracking-widest font-bold">
                  Compliance Code · Digital Vault
                </span>
                <span className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">
                  100% Protected
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl uppercase font-black text-brand-navy tracking-tight leading-none">
                  Your Domain &amp; Assets
                </h3>
                <p className="text-brand-slate text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                  Unlike marketing agencies that lease you code, Wattfor guarantees you retain full legal ownership of your business assets from day one.
                </p>
              </div>

              {/* Ownership Matrix */}
              <div className="space-y-2.5 bg-brand-offwhite/40 border border-brand-navy/10 rounded-lg p-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-navy font-semibold">Custom Domain Name</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Client Registrant
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-brand-navy/5 pt-2">
                  <span className="text-brand-navy font-semibold">Google Business Profile</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Primary Owner
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-brand-navy/5 pt-2">
                  <span className="text-brand-navy font-semibold">Code &amp; Database Files</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Full ZIP Export
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-brand-navy/5 pt-2">
                  <span className="text-brand-navy font-semibold">Agency Lockout Risk</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-copper bg-brand-copper/10 px-2 py-0.5 rounded">
                    Zero Buyouts
                  </span>
                </div>
              </div>

              {/* Official Contract Quote */}
              <div className="bg-brand-navy text-white p-4 rounded-lg space-y-1 relative overflow-hidden border border-brand-navy/20 shadow-md">
                <span className="text-[8px] text-brand-sky uppercase tracking-widest font-bold block">
                  Legal Binding Agreement · Section 9
                </span>
                <p className="text-xs text-white/90 font-medium leading-relaxed italic">
                  &ldquo;All domain registrations, search listings, and website assets remain the exclusive legal property of the client.&rdquo;
                </p>
              </div>
            </div>

            {/* Bottom Portability Banner */}
            <div className="flex items-center justify-between text-[10px] font-bold text-brand-navy border-t border-brand-navy/10 pt-4 mt-6">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5 text-brand-copper" />
                <span>Full Portability Guaranteed</span>
              </span>
              <span className="text-brand-slate uppercase">No Locked Contracts</span>
            </div>
          </motion.div>

          {/* Card 3: The Complete Included Trade Stack (Full Width Span 12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-12 bg-white rounded-xl border border-brand-navy/10 shadow-sm p-6 sm:p-8 space-y-6 group hover:border-brand-copper/30 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-navy/10 pb-4">
              <div>
                <span className="text-[10px] text-brand-copper uppercase tracking-widest font-bold block">
                  - COMPLETE ARCHITECTURE
                </span>
                <h3 className="text-xl sm:text-2xl uppercase font-black text-brand-navy tracking-tight">
                  Included Standard on Every Trade Site
                </h3>
              </div>
              <span className="text-xs text-brand-slate font-medium">
                100% pre-configured, tested, and live before handoff
              </span>
            </div>

            {/* 5 Modular Spec Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {tradeSpecs.map((spec, i) => {
                const IconComponent = spec.icon;
                return (
                  <div
                    key={i}
                    className="bg-brand-offwhite/40 border border-brand-navy/10 rounded-lg p-4 flex flex-col justify-between hover:bg-white hover:border-brand-copper/30 transition-all duration-200 shadow-2xs group/spec"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-md bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy group-hover/spec:bg-brand-copper group-hover/spec:text-white transition-colors">
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
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
