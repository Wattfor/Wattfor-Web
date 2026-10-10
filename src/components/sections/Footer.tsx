"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });

interface FooterProps {
  onCtaClick: () => void;
}

export default function Footer({ onCtaClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Specs", href: "#specs" },
    { name: "Pricing", href: "#pricing" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const connectLinks = [
    { name: "hello@wattfor.com", href: "mailto:hello@wattfor.com", type: "email" },
    { name: "(555) 901-2099", href: "tel:+15559012099", type: "tel" },
    { name: "LinkedIn", href: "#" },
    { name: "X (Twitter)", href: "#" },
  ];

  return (
    <footer className="bg-brand-navy text-white relative z-10 overflow-hidden border-t border-white/10">
      {/* Silk animated WebGL background matching Hero section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Silk
          speed={5}
          scale={1}
          color="#0e3151"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Atmospheric overlays so content is crisp and legible */}
      <div className="absolute inset-0 bg-radial from-transparent via-brand-navy/30 to-brand-navy/85 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-transparent to-brand-navy/90 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-[1] opacity-50" />

      {/* 1. Top CTA Band */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto border-x border-white/10 px-5 sm:px-10 lg:px-16 py-10 sm:py-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white max-w-xl text-left leading-tight">
            Supercharge your trade crew.
          </h2>
          <Button
            onClick={onCtaClick}
            variant="secondary"
            className="bg-white text-brand-navy hover:bg-brand-sky hover:text-brand-navy px-7 py-3 sm:py-3.5 rounded-lg font-bold shadow-md transition-colors text-sm flex items-center justify-center gap-2 w-full sm:w-auto shrink-0 cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* 2. Directory Grid & Giant Background Wordmark */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto border-x border-white/10 px-5 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-16 sm:pb-20 relative overflow-hidden">

          {/* Giant Background Wordmark: WATTFOR in big letters */}
          <div className="absolute right-0 -bottom-4 sm:-bottom-8 pointer-events-none select-none opacity-[0.12] overflow-hidden z-[2]">
            <span className="text-[7rem] sm:text-[11rem] md:text-[15rem] lg:text-[18rem] font-black text-white tracking-tighter leading-none whitespace-nowrap block">
              Wattfor
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 sm:gap-12 relative z-10">

            {/* Logo / Brand Info */}
            <div className="sm:col-span-2 md:col-span-4 space-y-4 text-left">
              <a
                href="#"
                className="flex items-center space-x-3.5 group hover:opacity-90 transition-opacity"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-md border border-white/20 flex items-center justify-center p-1.5 transition-all duration-300 group-hover:scale-105 flex-shrink-0">
                  <img
                    src="/wattfor.svg"
                    alt="Wattfor Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-3xl lowercase tracking-wider font-extrabold text-white">
                  wattfor
                </span>
              </a>
              <p className="text-white/70 text-sm max-w-xs font-medium leading-relaxed">
                We build professional websites and manage local search visibility for trade
                contractors. Power your search. Power your bookings.
              </p>
            </div>

            {/* Directory Columns */}
            <div className="sm:col-span-2 md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">

              {/* Product Column */}
              <div className="space-y-3 sm:space-y-4 text-left">
                <h4 className="text-[10px] uppercase tracking-widest text-brand-sky font-bold">
                  Product
                </h4>
                <ul className="space-y-2 text-sm text-white/70 font-medium">
                  {productLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div className="space-y-3 sm:space-y-4 text-left">
                <h4 className="text-[10px] uppercase tracking-widest text-brand-sky font-bold">
                  Company
                </h4>
                <ul className="space-y-2 text-sm text-white/70 font-medium">
                  {companyLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect Column */}
              <div className="space-y-3 sm:space-y-4 text-left col-span-2 sm:col-span-1">
                <h4 className="text-[10px] uppercase tracking-widest text-brand-sky font-bold">
                  Connect
                </h4>
                <ul className="space-y-2 text-sm text-white/70 font-medium">
                  {connectLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className={`hover:text-white transition-colors break-all ${
                          link.type === "email" ? "lowercase" : ""
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 3. Copyright Bar */}
      <div className="max-w-7xl mx-auto border-x border-white/10 px-5 sm:px-10 lg:px-16 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/50 gap-3 sm:gap-4 relative z-10">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-white/80">Wattfor</span>
          <span>© Copyright {currentYear}</span>
        </div>
        <div>
          <span className="text-white/30 select-none">Crafted By Wattfor</span>
        </div>
      </div>

    </footer>
  );
}
