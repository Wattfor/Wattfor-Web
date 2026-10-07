"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { TextReveal, FadeInUp } from "../ui/AnimatedText";

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
      desc: "Fast, custom landing or multi-page build to establish immediate trust and launch your crew online.",
      popular: false,
      groups: [
        {
          title: "Deliverables",
          items: [
            "Complete hand-coded layout",
            "Trade-specific service menus",
            "Customer reviews integration",
            "100% domain & code transfer",
          ],
        },
        {
          title: "Technical",
          items: ["Mobile responsive schema", "Lead contact booking forms"],
        },
      ],
      buttonText: "Get Started",
      featured: false,
    },
    {
      name: "Local SEO & GBP",
      price: "$300",
      priceTo: " – $600",
      period: "PER MONTH RECURRING",
      desc: "Active Google Business Profile management and citation mapping to rank your trade crew #1 on local packs.",
      popular: false,
      groups: [
        {
          title: "Search Strategy",
          items: [
            "GBP profile creation & audit",
            "Local search maps ranking",
            "Weekly keyword content syncs",
            "Local citation directories",
          ],
        },
        {
          title: "Diagnostics",
          items: ["Weekly ranking grid logs", "Review response monitoring"],
        },
      ],
      buttonText: "Dominate Local Search",
      featured: false,
    },
    {
      name: "The Builder Bundle",
      price: "$800",
      priceTo: " + $400/mo",
      period: "HYBRID SETUP & RETAINER",
      desc: "The ultimate growth engine. Combines your custom site build with ongoing local pack search dominance.",
      popular: true,
      groups: [
        {
          title: "Retainer Specs",
          items: [
            "Everything in Website Build",
            "Everything in Local SEO & GBP",
            "Hosting and maintenance included",
            "Weekly GBP updates & posts",
          ],
        },
        {
          title: "Priority Scale",
          items: ["12-hour priority support line", "Active lead capture dashboard"],
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
      <div className="max-w-7xl mx-auto border-x border-brand-navy/10 px-4 xs:px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 space-y-12 sm:space-y-16">
        {/* Section Header with Text Animation */}
        <div className="max-w-3xl text-left space-y-4">
          <FadeInUp delay={0.05}>
            <span className="text-xs uppercase tracking-widest text-brand-copper font-bold block">
              - COMPACT FEES
            </span>
          </FadeInUp>
          <TextReveal
            text="Transparent pricing. No hidden retainers."
            as="h2"
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-brand-navy tracking-tight leading-none"
          />
          <FadeInUp delay={0.15}>
            <p className="text-brand-slate text-sm font-medium max-w-xl">
              Flat rates with zero setup fees. We map out your local keyword signals and design
              layouts to convert local search clicks into real business phone calls.
            </p>
          </FadeInUp>
        </div>

        {/* 3-Column Dark Grid — stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {mainPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`p-5 xs:p-6 sm:p-8 rounded-xl flex flex-col justify-between gap-8 relative overflow-hidden transition-all duration-300 hover:scale-[1.01] bg-brand-navy text-white shadow-xl ${
                plan.featured
                  ? "border border-brand-copper/50 ring-1 ring-brand-copper/30 sm:col-span-2 lg:col-span-1"
                  : "border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-brand-copper text-white text-[9px] uppercase tracking-widest px-3 py-1 font-bold rounded-md shadow-sm">
                  Popular
                </div>
              )}

              {/* Top Details */}
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl uppercase font-black tracking-wider text-white pr-16 sm:pr-20">
                    {plan.name}
                  </h3>
                  <p className="text-brand-slate text-xs mt-2 leading-relaxed font-medium">
                    {plan.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-white/10 space-y-1">
                  <div className="flex items-baseline flex-wrap gap-x-1">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none">
                      {plan.price}
                    </span>
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-brand-slate">
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
                      ? "bg-brand-copper text-white hover:bg-brand-copper-hover shadow-md"
                      : "bg-white text-brand-navy hover:bg-brand-offwhite shadow-sm"
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-brand-navy/10 p-5 sm:p-8 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6 group hover:border-brand-copper/30 transition-all duration-300"
        >
          <div className="space-y-2 text-left">
            <span className="text-[9px] text-brand-copper uppercase tracking-widest font-bold block">
              - STANDALONE UPKEEP SUPPORT
            </span>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wider text-brand-navy">
              Hosting &amp; Maintenance — $50 to $100 / month
            </h3>
            <p className="text-brand-slate text-xs font-medium leading-relaxed max-w-2xl">
              Includes secure cloud hosting, daily automated database backups, custom domain linking,
              SSL setups, and text changes. Already included in the hybrid Builder Bundle.
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
          All contracts are flat-rate and billed month-to-month. Cancel anytime without buyout fees.
        </p>
      </div>
    </section>
  );
}
