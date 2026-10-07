"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

export default function UpkeepMock() {
  const items = [
    {
      title: "Automated Cloud Backups",
      subtitle: "Daily snapshots & encrypted vault",
      badge: "Learned",
      status: "success",
    },
    {
      title: "24/7 Uptime Monitoring",
      subtitle: "99.98% SLA server response",
      badge: "Learned",
      status: "success",
    },
    {
      title: "Core Security Defense",
      subtitle: "Active firewall & patch protection",
      badge: "Learned",
      status: "success",
    },
    {
      title: "Crew Content & Updates",
      subtitle: "Menu, staff & project photo sync",
      badge: "Syncing...",
      status: "pending",
    },
  ];

  return (
    <div className="relative w-full rounded-xl overflow-hidden p-3 xs:p-4 sm:p-7 flex items-center justify-center shadow-md border border-brand-navy/10 select-none">
      {/* Animated photo in the background */}
      <motion.img
        src="/images/service-bg-3.jpg"
        alt="Animated Background"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none scale-105"
        animate={{
          scale: [1.02, 1.1, 1.02],
          x: [0, 8, -10, 0],
          y: [0, -6, 6, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Atmospheric gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/20 via-transparent to-white/10 pointer-events-none" />

      {/* Foreground Floating Card with reduced border radius */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl border border-brand-navy/10">
        {/* Undraw Maintenance SVG Illustration */}
        <div className="w-full bg-brand-offwhite/50 rounded-lg p-3 sm:p-4 mb-4 flex items-center justify-center border border-brand-navy/10 shadow-inner">
          <img
            src="/undraw_maintenance_re_bsp1.svg"
            alt="Maintenance Upkeep"
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
