"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "../ui/Button";

interface PricingProps {
  onCtaClick: () => void;
}

export default function Pricing({ onCtaClick }: PricingProps) {
  const mainPlans = [
    {
      name: "Website Build",
      price: "$500",
      priceTo: " – $1500",
      period: "ONE-TIME SETUP",
      desc: "A fast, custom website built to show your work, establish instant trust, and get your phone ringing.",
      popular: false,
      groups: [
        {
          title: "What's Included",
          items: [
            "Complete custom design for your trade",
            "Clear service menus & transparent pricing",
            "5-star customer review showcase",
            "100% full ownership of domain & code",
          ],
        },
        {
          title: "Mobile & Leads",
          items: [
            "Fast and easy to use on all smartphones",
            "Simple one-tap call & quote request forms",
          ],
        },
      ],
      buttonText: "Get Started",
      featured: false,
    },
    {
      name: "Local SEO & Google",
      price: "$300",
      priceTo: " – $600",
      period: "PER MONTH",
      desc: "We manage your Google Business Profile and local directory listings so you rank #1 on Google Maps in your area.",
      popular: false,
      groups: [
        {
          title: "Google Maps Growth",
          items: [
            "Google Business Profile setup and audit",
            "Rank higher on local Google Maps",
            "Weekly updates for local trade searches",
            "Listed in 45+ trusted local directories",
          ],
        },
        {
          title: "Reports & Monitoring",
          items: [
            "Monthly search ranking reports",
            "Review alerts & response tracking",
          ],
        },
      ],
      buttonText: "Dominate Local Search",
      featured: false,
    },
    {
      name: "Builder Bundle",
      price: "$800",
      priceTo: " + $400/mo",
      period: "BUILD + MONTHLY GROWTH",
      desc: "Our most popular package. Combines your custom site build with continuous Google Maps growth.",
      popular: true,
      groups: [
        {
          title: "Everything Included",
          items: [
            "Everything in the Website Build",
            "Everything in Local SEO & Google",
            "Hosting and maintenance included",
            "Weekly Google updates & photo uploads",
          ],
        },
        {
          title: "Direct Support",
          items: [
            "Direct phone & text support line",
            "Instant notification for every new lead",
          ],
        },
      ],
      buttonText: "Get The Bundle Plan",
      featured: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative bg-brand-offwhite border-b border-brand-navy/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto border-x border-brand-navy/10 px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="text-xs uppercase tracking-widest text-brand-copper font-bold block">
            - CLEAR PRICING
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-brand-navy tracking-tight leading-[1]">
            Simple pricing. <br className="hidden sm:block" />
            No hidden contracts.
          </h2>
          <p className="text-brand-slate text-sm sm:text-base font-medium max-w-xl">
            Clear, upfront rates with zero setup surprise fees. We build your site and optimize your search presence to convert local homeowners into paying customers.
          </p>
        </div>

        {/* 3-Column Dark Grid with Motion Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {mainPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.25 } }}
              className={`p-6 sm:p-8 rounded-xl flex flex-col justify-between gap-8 relative overflow-hidden transition-all duration-300 bg-brand-navy text-white shadow-xl ${
                plan.featured
                  ? "border border-brand-copper/60 ring-1 ring-brand-copper/40 sm:col-span-2 lg:col-span-1 shadow-brand-copper/10"
                  : "border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-brand-copper text-white text-[9px] uppercase tracking-widest px-3 py-1 font-bold rounded-md shadow-sm">
                  Most Popular
                </div>
              )}

              {/* Top Details */}
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl uppercase font-black tracking-wider text-white pr-20">
                    {plan.name}
                  </h3>
                  <p className="text-brand-slate text-xs mt-2 leading-relaxed font-medium">
                    {plan.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-white/10 space-y-1">
                  <div className="flex items-baseline flex-wrap gap-x-1">
                    <span className="text-4xl sm:text-5xl font-black text-white leading-none">
                      {plan.price}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-brand-slate">
                      {plan.priceTo}
                    </span>
                  </div>
                  <div className="text-[9px] text-brand-copper font-bold tracking-widest">
                    {plan.period}
                  </div>
                </div>

                {/* Grouped Features */}
                <div className="space-y-5 sm:space-y-6">
                  {plan.groups.map((group, gidx) => (
                    <div key={gidx} className="space-y-2.5">
                      <h4 className="text-[9px] uppercase tracking-widest text-brand-slate font-bold">
                        {group.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {group.items.map((item, iidx) => (
                          <li
                            key={iidx}
                            className="flex items-start gap-2.5 text-xs text-white/90 font-medium"
                          >
                            <div className="w-4 h-4 bg-brand-copper/10 border border-brand-copper/25 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-copper">
                              <Check className="w-2.5 h-2.5" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button Action */}
              <div>
                <button
                  onClick={onCtaClick}
                  className={`w-full py-3.5 px-6 rounded-lg text-[11px] uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer text-center ${
                    plan.featured
                      ? "bg-brand-copper text-white hover:bg-brand-copper-hover shadow-md shadow-brand-copper/20"
                      : "bg-white text-brand-navy hover:bg-brand-offwhite"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Standalone Hosting Callout */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white border border-brand-navy/10 p-5 sm:p-8 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6 group hover:border-brand-copper/40 transition-all duration-300"
        >
          <div className="space-y-2 text-left">
            <span className="text-[9px] text-brand-copper uppercase tracking-widest font-bold block">
              - HOSTING &amp; PEACE OF MIND
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-brand-navy">
              Hosting &amp; Maintenance — $50 to $100 / month
            </h3>
            <p className="text-brand-slate text-xs font-medium leading-relaxed">
              Includes fast cloud hosting, daily automated backups, security setups, and content updates whenever you need them. (Already included in the Builder Bundle).
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto py-3 px-6 rounded-lg border border-brand-navy bg-transparent text-brand-navy hover:bg-brand-navy hover:text-white text-[10px] uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer"
            >
              Secure Hosting Only
            </button>
          </div>
        </motion.div>

        {/* Bottom Notice */}
        <p className="text-center text-[10px] text-brand-slate uppercase tracking-widest font-bold pt-2">
          All plans are billed month-to-month. Cancel anytime with zero buyout fees.
        </p>
      </div>
    </section>
  );
}
