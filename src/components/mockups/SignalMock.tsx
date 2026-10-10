"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Check, Clock } from "lucide-react";

const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });

export default function SignalMock() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
    <div className="relative w-full rounded-2xl overflow-hidden p-4 sm:p-7 flex items-center justify-center select-none bg-brand-navy shadow-2xl">
      {/* Silk animated WebGL background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {mounted && (
          <Silk
            speed={4}
            scale={1.2}
            color="#0e3151"
            noiseIntensity={1.5}
            rotation={0}
          />
        )}
      </div>

      {/* Atmospheric gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/50 via-transparent to-brand-navy/30 pointer-events-none z-[1]" />

      {/* Highly Glassmorphic & Skeuomorphic Floating Card - No White Border */}
      <div className="relative z-10 w-full max-w-md bg-gradient-to-b from-white/[0.18] via-white/[0.08] to-black/[0.25] backdrop-blur-3xl rounded-2xl p-5 sm:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(0,0,0,0.5),0_25px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* Skeuomorphic Glass Specular Reflection Highlight */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.15] via-transparent to-transparent pointer-events-none rounded-t-2xl" />

        {/* Debossed / Recessed Skeuomorphic Illustration Well */}
        <div className="w-full bg-black/35 backdrop-blur-md rounded-xl p-3 sm:p-4 mb-4 flex items-center justify-center shadow-[inset_0_2px_5px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.1)] relative z-10">
          <img
            src="/undraw_share-results_lfh5.svg"
            alt="Share Results"
            className="h-28 sm:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-md"
          />
        </div>

        {/* Feature Status Rows with Skeuomorphic Engraved Grooves */}
        <div className="space-y-3 relative z-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between gap-3 ${
                idx > 0
                  ? "pt-3 border-t border-black/40 shadow-[0_1px_0_rgba(255,255,255,0.08)]"
                  : ""
              }`}
            >
              <div>
                <h4 className="text-white font-extrabold text-xs sm:text-sm leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  {item.title}
                </h4>
                <p className="text-white/75 text-[11px] sm:text-xs mt-0.5 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  {item.subtitle}
                </p>
              </div>

              <div className="shrink-0">
                {item.status === "success" ? (
                  <span className="bg-gradient-to-b from-emerald-500/35 to-emerald-600/50 text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_1px_rgba(0,0,0,0.4),0_2px_5px_rgba(0,0,0,0.4)] px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold inline-flex items-center gap-1.5 backdrop-blur-md">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                    <span>{item.badge}</span>
                  </span>
                ) : (
                  <span className="bg-gradient-to-b from-amber-500/35 to-amber-600/50 text-amber-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_1px_rgba(0,0,0,0.4),0_2px_5px_rgba(0,0,0,0.4)] px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold inline-flex items-center gap-1.5 backdrop-blur-md">
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
