"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Radio,
  PhoneCall,
  Smartphone,
  Code2,
  Gauge,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function BlueprintGallery() {
  const [activeBlueprint, setActiveBlueprint] = useState<number | null>(null);

  const blueprints = [
    {
      id: "SPEC-01",
      tag: "Site Architecture",
      title: "Landing Wireframe Grid",
      desc: "Optimized visual hierarchy prioritizing immediate above-the-fold call dispatch.",
      metric: "100% Conversion Flow",
      status: "Mobile Pass",
      icon: Globe,
      visual: (
        <div className="w-full h-36 bg-brand-navy text-white rounded-lg p-3 relative overflow-hidden font-mono text-[9px] border border-white/10 flex flex-col justify-between select-none">
          {/* Faux browser header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[8px] text-white/40">wattfor://blueprint/wireframe.cad</span>
            <span className="text-[8px] text-brand-copper font-bold">GRID: 12-COL</span>
          </div>

          {/* Wireframe blocks schematic */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded px-2 py-1">
              <span className="text-white/60">[NAV: Logo + Menu]</span>
              <span className="text-emerald-400 text-[8px] font-bold bg-emerald-500/10 px-1 rounded">
                CALL NOW BUTTON (HOTSPOT)
              </span>
            </div>
            <div className="grid grid-cols-12 gap-1.5">
              <div className="col-span-8 bg-white/5 border border-white/10 rounded p-1.5 space-y-1">
                <span className="text-white/70 block font-bold">HERO HEADLINE + GEO-PROOF</span>
                <span className="text-white/30 block text-[7px] truncate">Electrician · Denver Metro · 24/7 Available</span>
              </div>
              <div className="col-span-4 bg-brand-copper/10 border border-brand-copper/30 rounded p-1.5 flex items-center justify-center text-brand-sky text-[8px] text-center font-bold">
                1-CLICK FORM
              </div>
            </div>
          </div>

          {/* Wireframe bottom specs */}
          <div className="flex justify-between items-center text-[7px] text-white/40 border-t border-white/10 pt-1">
            <span>SCALE: 1:1 MOBILE</span>
            <span className="text-emerald-400 font-bold">CLS: 0.00 ZERO SHIFT</span>
          </div>
        </div>
      ),
    },
    {
      id: "SPEC-02",
      tag: "SEO Signal Mapping",
      title: "Local Citations Map Grid",
      desc: "45+ synced trade directory signals radiating through your primary 15-mile service area.",
      metric: "15-Mile Coverage",
      status: "Verified Radii",
      icon: Radio,
      visual: (
        <div className="w-full h-36 bg-brand-navy text-white rounded-lg p-3 relative overflow-hidden font-mono text-[9px] border border-white/10 flex flex-col justify-between select-none">
          {/* Radar background circles & crosshair */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
            <div className="w-24 h-24 rounded-full border border-brand-sky/40 animate-ping" />
            <div className="absolute w-28 h-28 rounded-full border border-dashed border-white/20" />
            <div className="absolute w-16 h-16 rounded-full border border-white/30" />
            <div className="absolute w-full h-[1px] bg-white/15" />
            <div className="absolute h-full w-[1px] bg-white/15" />
          </div>

          <div className="flex justify-between items-center relative z-10 border-b border-white/10 pb-1.5">
            <span className="text-[8px] text-brand-sky">GEO-PIN: 39.7392° N, 104.9903° W</span>
            <span className="text-[8px] text-emerald-400 font-bold bg-emerald-500/10 px-1 rounded">RADAR ACTIVE</span>
          </div>

          {/* Regional Geo Nodes */}
          <div className="relative z-10 grid grid-cols-2 gap-2 text-[8px]">
            <div className="bg-white/5 border border-white/10 rounded p-1">
              <span className="text-emerald-400 font-bold block">● HUB: DENVER METRO</span>
              <span className="text-white/40 text-[7px]">Rank #1 GBP 3-Pack</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded p-1">
              <span className="text-brand-copper font-bold block">● ZONE: LAKEWOOD</span>
              <span className="text-white/40 text-[7px]">45+ Directory Signals</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[7px] text-white/40 border-t border-white/10 pt-1 relative z-10">
            <span>NAP CONSISTENCY: 100%</span>
            <span className="text-brand-sky font-bold">CITATION ACCURACY: VERIFIED</span>
          </div>
        </div>
      ),
    },
    {
      id: "SPEC-03",
      tag: "Lead Conversion Flow",
      title: "Click-To-Call Pipeline",
      desc: "Instant routing directly to your owner or dispatcher phone without third-party agency delays.",
      metric: "< 3.2s Latency",
      status: "Zero Drop Rate",
      icon: PhoneCall,
      visual: (
        <div className="w-full h-36 bg-brand-navy text-white rounded-lg p-3 relative overflow-hidden font-mono text-[9px] border border-white/10 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
            <span className="text-[8px] text-white/60">PIPELINE: PROSPECT → CREW DISPATCH</span>
            <span className="text-[8px] text-emerald-400 font-bold">&lt; 3.2s AVERAGE</span>
          </div>

          {/* Flow Sequence */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[8px]">
              <span className="bg-white/10 border border-white/15 px-1.5 py-0.5 rounded text-white font-bold">1. USER TAPS</span>
              <span className="text-brand-copper">➔</span>
              <span className="bg-white/10 border border-white/15 px-1.5 py-0.5 rounded text-white font-bold">2. TELEPHONY DISPATCH</span>
              <span className="text-brand-copper">➔</span>
              <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 px-1.5 py-0.5 rounded font-bold">3. PHONE RINGS</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded p-1.5 flex items-center justify-between text-[8px]">
              <span className="text-white/80 font-bold">SMS NOTIFICATION:</span>
              <span className="text-brand-sky text-[7px] truncate">&ldquo;New lead: 200A Panel Replacement · Denver, CO&rdquo;</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[7px] text-white/40 border-t border-white/10 pt-1">
            <span>FAILOVER PROTOCOL: ACTIVE</span>
            <span className="text-emerald-400 font-bold">ZERO MISSED INBOUNDS</span>
          </div>
        </div>
      ),
    },
    {
      id: "SPEC-04",
      tag: "Responsive Specs",
      title: "Mobile Ergonomics Layout",
      desc: "Engineered specifically for homeowners on mobile phones searching during trade emergencies.",
      metric: "Thumb-Zone Reach",
      status: "Adaptive Core",
      icon: Smartphone,
      visual: (
        <div className="w-full h-36 bg-brand-navy text-white rounded-lg p-3 relative overflow-hidden font-mono text-[9px] border border-white/10 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
            <span className="text-[8px] text-white/60">VIEWPORT SPECIFICATION</span>
            <span className="text-[8px] text-brand-copper font-bold">320PX → 2560PX</span>
          </div>

          {/* Mobile ergonomics visual */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-white/5 border border-white/10 rounded p-1.5 space-y-1">
              <span className="text-emerald-400 font-bold block text-[8px]">THUMB ZONE</span>
              <span className="text-white/60 text-[7px] block">Primary actions placed in bottom 40% reach radius.</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded p-1.5 space-y-1">
              <span className="text-brand-sky font-bold block text-[8px]">STICKY DIALER</span>
              <span className="text-white/60 text-[7px] block">Fixed floating dial button stays visible on scroll.</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[7px] text-white/40 border-t border-white/10 pt-1">
            <span>TARGET MIN: 48x48PX</span>
            <span className="text-emerald-400 font-bold">TAP FIDELITY: 100%</span>
          </div>
        </div>
      ),
    },
    {
      id: "SPEC-05",
      tag: "JSON-LD Automation",
      title: "Structured Schema Graph",
      desc: "Search engines parse your trade license, services, hours, and geo-data without ambiguities.",
      metric: "Schema.org Standard",
      status: "Valid JSON-LD",
      icon: Code2,
      visual: (
        <div className="w-full h-36 bg-brand-navy text-white rounded-lg p-3 relative overflow-hidden font-mono text-[8px] border border-white/10 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
            <span className="text-[8px] text-white/60">GOOGLE RICH SNIPPET PARSER</span>
            <span className="text-[8px] text-emerald-400 font-bold bg-emerald-500/10 px-1 rounded">VALIDATED</span>
          </div>

          {/* JSON-LD code tree snippet */}
          <div className="bg-black/40 border border-white/10 rounded p-1.5 space-y-0.5 text-[7px] text-white/70 overflow-hidden leading-snug">
            <div><span className="text-brand-copper">&quot;@type&quot;:</span> <span className="text-brand-sky">&quot;Electrician&quot;</span>,</div>
            <div><span className="text-brand-copper">&quot;name&quot;:</span> <span className="text-emerald-400">&quot;Apex Electrical Services&quot;</span>,</div>
            <div><span className="text-brand-copper">&quot;telephone&quot;:</span> <span className="text-amber-400">&quot;+1-303-555-0199&quot;</span>,</div>
            <div><span className="text-brand-copper">&quot;areaServed&quot;:</span> <span className="text-white/90">&quot;Denver Metropolitan Area&quot;</span></div>
          </div>

          <div className="flex justify-between items-center text-[7px] text-white/40 border-t border-white/10 pt-1">
            <span>GOOGLE BOT PARSER: READY</span>
            <span className="text-brand-sky font-bold">RICH CARD COMPLIANT</span>
          </div>
        </div>
      ),
    },
    {
      id: "SPEC-06",
      tag: "Performance Stack",
      title: "Sub-Second Asset Waterfall",
      desc: "Pre-compiled static assets with zero render-blocking bloat ensure near-instant site rendering.",
      metric: "98 Mobile Score",
      status: "Zero Blocking",
      icon: Gauge,
      visual: (
        <div className="w-full h-36 bg-brand-navy text-white rounded-lg p-3 relative overflow-hidden font-mono text-[9px] border border-white/10 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
            <span className="text-[8px] text-white/60">NETWORK WATERFALL TRACE</span>
            <span className="text-[8px] text-emerald-400 font-bold">&lt; 400MS TOTAL</span>
          </div>

          {/* Network waterfall bars */}
          <div className="space-y-1.5 pt-1">
            <div className="space-y-0.5">
              <div className="flex justify-between text-[7px] text-white/60">
                <span>1. HTML Core [Edge CDN]</span>
                <span className="text-emerald-400">42ms</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded overflow-hidden">
                <div className="bg-emerald-500 h-full w-[25%]" />
              </div>
            </div>

            <div className="space-y-0.5">
              <div className="flex justify-between text-[7px] text-white/60">
                <span>2. PowerGrotesk Fonts [Preload]</span>
                <span className="text-emerald-400">28ms</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded overflow-hidden">
                <div className="bg-brand-sky h-full w-[35%] ml-[20%]" />
              </div>
            </div>

            <div className="space-y-0.5">
              <div className="flex justify-between text-[7px] text-white/60">
                <span>3. Critical CSS &amp; UI Hydration</span>
                <span className="text-emerald-400">55ms</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded overflow-hidden">
                <div className="bg-brand-copper h-full w-[45%] ml-[30%]" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[7px] text-white/40 border-t border-white/10 pt-1">
            <span>RENDER BLOCKING: 0MS</span>
            <span className="text-emerald-400 font-bold">SPEED INDEX: 0.8S</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="blueprints"
      className="relative bg-brand-offwhite border-b border-brand-navy/10 scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto border-x border-brand-navy/10 px-4 xs:px-5 sm:px-10 lg:px-16 space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-navy/10 pb-8">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-xs uppercase tracking-widest text-brand-copper font-bold block">
              - ARCHITECTURAL SCHEMATICS
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-brand-navy tracking-tight leading-tight">
              Structural Blueprint Gallery.
            </h2>
            <p className="text-brand-slate text-sm sm:text-base font-medium leading-relaxed">
              Every website is engineered from a modular, high-conversion blueprint. Inspect the CAD schematics and technical nodes powering your trade crew.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 bg-brand-navy/5 border border-brand-navy/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-brand-slate uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-brand-copper animate-pulse" />
            <span>SPECIFICATION REV 4.2 · COLORADO HUB</span>
          </div>
        </div>

        {/* 6-Card Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {blueprints.map((bp, i) => {
            const Icon = bp.icon;
            const isHovered = activeBlueprint === i;

            return (
              <motion.div
                key={bp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                onMouseEnter={() => setActiveBlueprint(i)}
                onMouseLeave={() => setActiveBlueprint(null)}
                className="bg-white rounded-xl border border-brand-navy/10 shadow-sm p-5 sm:p-6 flex flex-col justify-between gap-5 group hover:border-brand-copper/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Blueprint Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-brand-navy/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-brand-copper bg-brand-copper/5 border border-brand-copper/20 px-2 py-0.5 rounded">
                        {bp.id}
                      </span>
                      <span className="text-[10px] text-brand-slate uppercase tracking-wider font-bold">
                        {bp.tag}
                      </span>
                    </div>

                    <span className="flex items-center gap-1 text-[9px] font-bold uppercase text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{bp.status}</span>
                    </span>
                  </div>

                  {/* High-Fidelity Engineering Visual */}
                  <div className="relative shadow-sm rounded-lg overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
                    {bp.visual}
                  </div>

                  {/* Title & Technical Copy */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="text-lg sm:text-xl font-bold uppercase text-brand-navy tracking-tight leading-snug">
                      {bp.title}
                    </h3>
                    <p className="text-brand-slate text-xs leading-relaxed font-medium">
                      {bp.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Technical Metric Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono border-t border-brand-navy/10 pt-3 text-brand-slate">
                  <span className="text-brand-navy font-bold">{bp.metric}</span>
                  <span className="text-brand-copper group-hover:translate-x-0.5 transition-transform">
                    CAD VERIFIED ➔
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
