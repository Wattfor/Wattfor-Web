"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Check, Clock } from "lucide-react";

const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });

export default function SignalMock() {
  const items = [
    {
      title: "Google Maps 3-Pack",
      subtitle: "Primary trade service area",
      badge: "Learned",
      status: "success",
    },
    {
      title: "Trade Citations & NAP",
      subtitle: "45+ Verified directory listings",
      badge: "Learned",
      status: "success",
    },
    {
      title: "High-Intent Search Terms",
      subtitle: "Local electrician & plumber terms",
      badge: "Learned",
      status: "success",
    },
    {
      title: "Weekly GEO Pack Scan",
      subtitle: "15-Mile radius grid coordinate check",
      badge: "Syncing...",
      status: "pending",
    },
  ];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden p-4 sm:p-7 flex items-center justify-center shadow-2xl border border-white/20 select-none bg-brand-navy">
      {/* Silk animated WebGL background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Silk
          speed={4}
          scale={1.2}
          color="#0e3151"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Atmospheric gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/50 via-transparent to-brand-navy/30 pointer-events-none z-[1]" />

      {/* Foreground Floating Glassmorphic Card */}
      <div className="relative z-10 w-full max-w-md bg-white/60 sm:bg-white/70 backdrop-blur-2xl rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/80 ring-1 ring-white/50">
        {/* Inner Glassmorphic Illustration Box */}
        <div className="w-full bg-white/40 backdrop-blur-md rounded-xl p-3 sm:p-4 mb-4 flex items-center justify-center border border-white/60 shadow-inner">
          <img
            src="/undraw_share-results_lfh5.svg"
            alt="Share Results"
            className="h-28 sm:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Feature Status Rows with clean divider lines */}
        <div className="space-y-3 divide-y divide-brand-navy/10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between gap-3 ${idx > 0 ? "pt-3" : ""}`}
            >
              <div>
                <h4 className="text-brand-navy font-extrabold text-xs sm:text-sm leading-tight">
                  {item.title}
                </h4>
                <p className="text-brand-slate text-[11px] sm:text-xs mt-0.5 font-semibold">
                  {item.subtitle}
                </p>
              </div>

              <div className="shrink-0">
                {item.status === "success" ? (
                  <span className="bg-emerald-500/20 text-emerald-800 border border-emerald-500/40 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md text-[11px] sm:text-xs font-bold inline-flex items-center gap-1.5 shadow-xs backdrop-blur-md">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                    <span>{item.badge}</span>
                  </span>
                ) : (
                  <span className="bg-amber-500/20 text-amber-800 border border-amber-500/40 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md text-[11px] sm:text-xs font-bold inline-flex items-center gap-1.5 shadow-xs backdrop-blur-md">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5] animate-spin" />
                    <span>{item.badge}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
