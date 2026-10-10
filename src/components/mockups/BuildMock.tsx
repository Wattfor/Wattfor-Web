"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Check, Clock } from "lucide-react";

const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });

export default function BuildMock() {
  const items = [
    {
      title: "High-Speed Mobile Core",
      subtitle: "Google PageSpeed 99+ score",
      badge: "Learned",
      status: "success",
    },
    {
      title: "Trade Booking System",
      subtitle: "Instant lead & SMS dispatch",
      badge: "Learned",
      status: "success",
    },
    {
      title: "Google Review Feed",
      subtitle: "Live verified rating sync",
      badge: "Learned",
      status: "success",
    },
    {
      title: "Custom Domain & SSL",
      subtitle: "DNS propagation active",
      badge: "Syncing...",
      status: "pending",
    },
  ];

  return (
    <div className="relative w-full rounded-xl overflow-hidden p-3 xs:p-4 sm:p-7 flex items-center justify-center shadow-md border border-brand-navy/10 select-none bg-brand-navy">
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
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/60 via-brand-navy/20 to-brand-navy/40 pointer-events-none z-[1]" />

      {/* Foreground Floating Card with reduced border radius */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl border border-brand-navy/10">
        {/* Undraw Website Visitors SVG Illustration */}
        <div className="w-full bg-brand-offwhite/50 rounded-lg p-3 sm:p-4 mb-4 flex items-center justify-center border border-brand-navy/10 shadow-inner">
          <img
            src="/undraw_website-visitors_qy9c.svg"
            alt="Website Visitors"
            loading="lazy"
            decoding="async"
            className="h-24 xs:h-28 sm:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Feature Status Rows with clean divider lines */}
        <div className="space-y-3 divide-y divide-brand-navy/10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between gap-2 xs:gap-3 ${idx > 0 ? "pt-3" : ""}`}
            >
              <div className="min-w-0 pr-1">
                <h4 className="text-brand-navy font-bold text-xs sm:text-sm leading-tight truncate xs:whitespace-normal">
                  {item.title}
                </h4>
                <p className="text-brand-slate text-[10px] sm:text-xs mt-0.5 font-medium truncate xs:whitespace-normal">
                  {item.subtitle}
                </p>
              </div>

              <div className="shrink-0">
                {item.status === "success" ? (
                  <span className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md text-[10px] sm:text-xs font-bold inline-flex items-center gap-1 shadow-xs">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                    <span>{item.badge}</span>
                  </span>
                ) : (
                  <span className="bg-amber-500/10 text-amber-600 border border-amber-500/30 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md text-[10px] sm:text-xs font-bold inline-flex items-center gap-1 shadow-xs">
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
