"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Radio,
  PhoneCall,
  Smartphone,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Check,
  Clock,
  ArrowRight,
  MousePointerClick,
  Sparkles,
} from "lucide-react";

export default function BlueprintGallery() {
  const [activeBlueprint, setActiveBlueprint] = useState<number | null>(null);

  const blueprints = [
    {
      id: "01",
      tag: "Easy Phone Calls",
      title: "One-Tap Call Buttons",
      desc: "When an emergency strikes, homeowners want help right now. We put big, clear call buttons right where their thumb touches so they call you in one tap.",
      metric: "Taps directly into phone dialer",
      status: "1-Tap Dialing",
      icon: PhoneCall,
      visual: (
        <div className="w-full h-40 bg-brand-navy text-white rounded-lg p-3.5 relative overflow-hidden font-mono text-[9px] border border-white/10 flex flex-col justify-between select-none">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[8px] text-white/50 font-sans font-medium">YourTradeSite.com</span>
            <span className="text-[8px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
              READY TO CALL
            </span>
          </div>

          {/* Animated Call Banner with Pulsing Button & Click Indicator */}
          <div className="space-y-2 relative">
            <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-md p-2">
              <div className="space-y-0.5">
                <span className="text-white/80 block font-sans font-bold text-[10px]">
                  Emergency Repair Service
                </span>
                <span className="text-white/40 block text-[8px] font-sans">
                  Available 24/7 · Fast Local Response
                </span>
              </div>

              {/* Animated Glowing Call Button */}
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-emerald-500 hover:bg-emerald-400 text-white font-sans font-extrabold text-[10px] px-3 py-1.5 rounded-md flex items-center gap-1 shadow-md shadow-emerald-500/30"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Call (303) 555-0199</span>

                {/* Animated Ripple Wave */}
                <motion.span
                  animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="absolute inset-0 rounded-md border-2 border-emerald-400 pointer-events-none"
                />
              </motion.div>
            </div>

            {/* Sub-banner */}
            <div className="bg-white/[0.03] border border-white/10 rounded p-1.5 flex items-center justify-between text-[8px] font-sans text-white/60">
              <span>Homeowners connect with your crew in seconds</span>
              <span className="text-brand-copper font-bold">100% Direct Call</span>
            </div>
          </div>

          {/* Bottom Spec */}
          <div className="flex justify-between items-center text-[8px] text-white/50 border-t border-white/10 pt-1.5 font-sans">
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <CheckCircle2 className="w-3 h-3" /> No confusing menus
            </span>
            <span>Immediate connection</span>
          </div>
        </div>
      ),
    },
    {
      id: "02",
      tag: "Local Google Maps",
      title: "Show Up in Your Service Towns",
      desc: "We configure your website so Google shows your business first when local homeowners search for repairs in your exact cities, suburbs, and neighborhoods.",
      metric: "Targeted to your local cities",
      status: "Local Area Pass",
      icon: Radio,
      visual: (
        <div className="w-full h-40 bg-brand-navy text-white rounded-lg p-3.5 relative overflow-hidden font-mono text-[9px] border border-white/10 flex flex-col justify-between select-none">
          {/* Animated Radar Pulse Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <motion.div
              animate={{ scale: [1, 2.4], opacity: [0.8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              className="w-16 h-16 rounded-full border border-emerald-400"
            />
            <motion.div
              animate={{ scale: [1, 2.4], opacity: [0.8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
              className="w-16 h-16 rounded-full border border-brand-sky"
            />
            <div className="absolute w-24 h-24 rounded-full border border-dashed border-white/20" />
            <div className="absolute w-full h-[1px] bg-white/10" />
            <div className="absolute h-full w-[1px] bg-white/10" />
          </div>

          <div className="flex justify-between items-center relative z-10 border-b border-white/10 pb-2">
            <span className="text-[8px] text-brand-sky font-sans font-bold">GOOGLE MAPS 3-PACK SETUP</span>
            <span className="text-[8px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded font-sans">
              RANKING ACTIVE
            </span>
          </div>

          {/* Local Service Towns Pins */}
          <div className="relative z-10 grid grid-cols-2 gap-2 text-[8px] font-sans">
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-md p-1.5 space-y-0.5">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Denver Metro
              </span>
              <span className="text-white/60 text-[7px] block">#1 Spot on Google Search</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-md p-1.5 space-y-0.5">
              <span className="text-brand-copper font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-copper" />
                Surrounding Suburbs
              </span>
              <span className="text-white/60 text-[7px] block">15-Mile Customer Radius</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] text-white/50 border-t border-white/10 pt-1.5 relative z-10 font-sans">
            <span>Name &amp; Phone Synced</span>
            <span className="text-emerald-400 font-bold">100% Match on Google</span>
          </div>
        </div>
      ),
    },
    {
      id: "03",
      tag: "Instant Alerts",
      title: "Text Alerts the Second a Lead Arrives",
      desc: "The first contractor to reply wins the job. When a customer sends a quote request, an instant text alert goes directly to your cell phone in under 3 seconds.",
      metric: "Alerts in < 3 seconds",
      status: "Instant SMS",
      icon: PhoneCall,
      visual: (
        <div className="w-full h-40 bg-brand-navy text-white rounded-lg p-3.5 relative overflow-hidden font-mono text-[9px] border border-white/10 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <span className="text-[8px] text-white/60 font-sans">INSTANT LEAD ROUTING</span>
            <span className="text-[8px] text-emerald-400 font-bold font-sans">&lt; 3 SECONDS</span>
          </div>

          {/* Animated 3-Step Lead Sequence */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[8px] font-sans">
              <span className="bg-white/10 border border-white/15 px-2 py-0.5 rounded text-white font-semibold">
                1. Customer Fills Form
              </span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-brand-copper font-bold"
              >
                ➔
              </motion.span>
              <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-2 py-0.5 rounded font-bold">
                2. Your Phone Rings
              </span>
            </div>

            {/* Glowing Text Message Notification Mock */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-emerald-950/60 border border-emerald-500/40 rounded-md p-2 flex items-center justify-between text-[8px] font-sans shadow-inner"
            >
              <div className="space-y-0.5">
                <span className="text-emerald-400 font-bold block flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  NEW JOB LEAD RECEIVED:
                </span>
                <span className="text-white/80 text-[7.5px] truncate block">
                  &ldquo;Need main panel replacement · John D. · (303) 555-8901&rdquo;
                </span>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-between items-center text-[8px] text-white/50 border-t border-white/10 pt-1.5 font-sans">
            <span>Direct to your pocket</span>
            <span className="text-emerald-400 font-bold">Never miss a job</span>
          </div>
        </div>
      ),
    },
    {
      id: "04",
      tag: "Mobile First",
      title: "Effortless to Use with One Thumb",
      desc: "Over 80% of trade customers search from a phone. We make text easy to read and buttons large enough to tap easily with one thumb while standing on a job site.",
      metric: "One-thumb friendly",
      status: "100% Mobile Ready",
      icon: Smartphone,
      visual: (
        <div className="w-full h-40 bg-brand-navy text-white rounded-lg p-3.5 relative overflow-hidden font-mono text-[9px] border border-white/10 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <span className="text-[8px] text-white/60 font-sans">MOBILE ERGONOMICS</span>
            <span className="text-[8px] text-brand-copper font-bold font-sans">PERFECT ON ALL PHONES</span>
          </div>

          {/* Visual Thumb Zone Layout */}
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-md p-2 space-y-1 font-sans">
              <span className="text-emerald-400 font-bold block text-[8px] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> EASY THUMB ZONE
              </span>
              <span className="text-white/70 text-[7.5px] block leading-tight">
                All main call buttons sit in the natural thumb reach area.
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-md p-2 space-y-1 font-sans">
              <span className="text-brand-sky font-bold block text-[8px] flex items-center gap-1">
                <Zap className="w-3 h-3" /> STICKY DIAL BAR
              </span>
              <span className="text-white/70 text-[7.5px] block leading-tight">
                Call button floats at bottom so customers can dial anytime.
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] text-white/50 border-t border-white/10 pt-1.5 font-sans">
            <span>Extra large tap targets</span>
            <span className="text-emerald-400 font-bold">100% Easy to Tap</span>
          </div>
        </div>
      ),
    },
    {
      id: "05",
      tag: "Proof & Trust",
      title: "Show Licenses, Reviews & Hours",
      desc: "Homeowners want to know you are licensed and dependable. We clearly showcase your trade license, insurance, 5-star Google reviews, and emergency hours.",
      metric: "Builds instant trust",
      status: "Verified Pro",
      icon: ShieldCheck,
      visual: (
        <div className="w-full h-40 bg-brand-navy text-white rounded-lg p-3.5 relative overflow-hidden font-mono text-[9px] border border-white/10 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[8px] text-white/60 font-sans">CONTRACTOR TRUST PROOF</span>
            <span className="text-[8px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded font-sans">
              VERIFIED CREDENTIALS
            </span>
          </div>

          {/* Animated Trust Checklist Items */}
          <div className="space-y-1 font-sans">
            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded px-2 py-1">
              <span className="text-white/80 text-[8px] flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" /> State Master Trade License #39281
              </span>
              <span className="text-emerald-400 font-bold text-[7px]">VERIFIED</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded px-2 py-1">
              <span className="text-white/80 text-[8px] flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" /> Fully Insured &amp; Bonded ($2M Policy)
              </span>
              <span className="text-emerald-400 font-bold text-[7px]">ACTIVE</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded px-2 py-1">
              <span className="text-white/80 text-[8px] flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" /> 4.9★ Google Reviews (128+ Local Reviews)
              </span>
              <span className="text-amber-400 font-bold text-[7px]">LIVE FEED</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] text-white/50 border-t border-white/10 pt-1.5 font-sans">
            <span>Builds customer confidence</span>
            <span className="text-emerald-400 font-bold">Closes more estimates</span>
          </div>
        </div>
      ),
    },
    {
      id: "06",
      tag: "Fast Speed",
      title: "Zero Waiting, Zero Blank Screens",
      desc: "Slow websites lose half their visitors. Our clean code opens right away, even on weak cell connections out in the driveway or on the road.",
      metric: "Opens in 0.8 seconds",
      status: "Instant Open",
      icon: Zap,
      visual: (
        <div className="w-full h-40 bg-brand-navy text-white rounded-lg p-3.5 relative overflow-hidden font-mono text-[9px] border border-white/10 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[8px] text-white/60 font-sans">LIVE LOADING SPEED</span>
            <span className="text-[8px] text-emerald-400 font-bold font-sans">SUB-1 SECOND</span>
          </div>

          {/* Animated Speed Progress Bar */}
          <div className="space-y-2 py-1">
            <div className="space-y-1">
              <div className="flex justify-between text-[8px] font-sans text-white/80">
                <span className="font-semibold">Page Loading Speed</span>
                <span className="text-emerald-400 font-bold">0.8 Seconds</span>
              </div>
              <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden p-0.5">
                <motion.div
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="bg-emerald-500 h-full rounded-full shadow-sm shadow-emerald-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[7.5px] font-sans">
              <div className="bg-white/5 rounded p-1.5 border border-white/10">
                <span className="text-white/50 block">Your Wattfor Site</span>
                <span className="text-emerald-400 font-bold">0.8s (Instant)</span>
              </div>
              <div className="bg-white/5 rounded p-1.5 border border-white/10">
                <span className="text-white/50 block">Average Competitor</span>
                <span className="text-red-400 font-bold">4.2s (Slow)</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] text-white/50 border-t border-white/10 pt-1.5 font-sans">
            <span>No annoying waiting</span>
            <span className="text-emerald-400 font-bold">Customers stay &amp; call</span>
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
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-navy/10 pb-8">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-xs uppercase tracking-widest text-brand-copper font-bold block">
              - HOW YOUR SITE WORKS
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-extrabold uppercase text-brand-navy tracking-tight leading-tight">
              Built to turn visitors into phone calls.
            </h2>
            <p className="text-brand-slate text-sm sm:text-base font-medium leading-relaxed">
              Every detail is designed with one purpose: making it fast and easy for local homeowners to call your crew and hire you for jobs.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 bg-brand-navy/5 border border-brand-navy/10 px-3 py-1.5 rounded-lg text-[10px] font-sans text-brand-slate uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tested on real trade businesses</span>
          </div>
        </div>

        {/* 6-Card Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {blueprints.map((bp, i) => {
            const Icon = bp.icon;

            return (
              <motion.div
                key={bp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.25 } }}
                onMouseEnter={() => setActiveBlueprint(i)}
                onMouseLeave={() => setActiveBlueprint(null)}
                className="bg-white rounded-xl border border-brand-navy/10 shadow-sm p-5 sm:p-6 flex flex-col justify-between gap-5 group hover:border-brand-copper/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-default"
              >
                {/* Top Blueprint Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-brand-navy/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-brand-copper bg-brand-copper/5 border border-brand-copper/20 px-2 py-0.5 rounded font-mono">
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

                  {/* High-Fidelity Visual with Live Motion */}
                  <div className="relative shadow-sm rounded-lg overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
                    {bp.visual}
                  </div>

                  {/* Title & Simple English Copy */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="text-lg sm:text-xl font-bold uppercase text-brand-navy tracking-tight leading-snug">
                      {bp.title}
                    </h3>
                    <p className="text-brand-slate text-xs leading-relaxed font-medium">
                      {bp.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Simple Metric Bar */}
                <div className="flex items-center justify-between text-[10px] border-t border-brand-navy/10 pt-3 text-brand-slate">
                  <span className="text-brand-navy font-bold">{bp.metric}</span>
                  <span className="text-brand-copper font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    See Details ➔
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
