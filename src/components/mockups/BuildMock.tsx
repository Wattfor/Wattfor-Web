"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

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
    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-7 flex items-center justify-center shadow-xl border border-brand-navy/10 select-none">
      {/* Animated photo in the background */}
      <motion.img
        src="/images/service-bg-1.jpg"
        alt="Animated Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none scale-105"
        animate={{
          scale: [1.02, 1.1, 1.02],
          x: [0, 10, -8, 0],
          y: [0, -8, 8, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Atmospheric gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/20 via-transparent to-white/10 pointer-events-none" />

      {/* Foreground Floating Card inspired by user reference */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/80">
        {/* Undraw Website Visitors SVG Illustration */}
        <div className="w-full bg-brand-offwhite/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 flex items-center justify-center border border-brand-navy/5 shadow-inner">
          <img
            src="/undraw_website-visitors_qy9c.svg"
            alt="Website Visitors"
            className="h-28 sm:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Feature Status Rows */}
        <div className="space-y-3 divide-y divide-gray-100">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between gap-3 ${idx > 0 ? "pt-3" : ""}`}
            >
              <div>
                <h4 className="text-brand-navy font-bold text-xs sm:text-sm leading-tight">
                  {item.title}
                </h4>
                <p className="text-brand-slate text-[11px] sm:text-xs mt-0.5 font-medium">
                  {item.subtitle}
                </p>
              </div>

              <div className="shrink-0">
                {item.status === "success" ? (
                  <span className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold inline-flex items-center gap-1.5 shadow-xs">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                    <span>{item.badge}</span>
                  </span>
                ) : (
                  <span className="bg-amber-500/10 text-amber-600 border border-amber-500/30 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold inline-flex items-center gap-1.5 shadow-xs">
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

