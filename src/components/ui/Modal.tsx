"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Zap,
  Droplets,
  Flame,
  Home,
  Hammer,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Loader2,
} from "lucide-react";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    tradeType: "",
    ownerName: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleTradeSelect = (trade: string) => {
    setErrorMsg("");
    setFormData((prev) => ({ ...prev, tradeType: trade }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setErrorMsg("");
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    const trimmedBusiness = formData.businessName.trim();
    if (!trimmedBusiness) {
      setErrorMsg("Please enter your company or trade name.");
      return;
    }
    if (!formData.tradeType) {
      setErrorMsg("Please select your trade specialty.");
      return;
    }
    setErrorMsg("");
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setErrorMsg("");
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formData.ownerName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      setErrorMsg("Please fill in all contact fields.");
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (trimmedPhone.length < 7) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }

    setErrorMsg("");
    setLoading(true);

    // Simulate submission api call
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      businessName: "",
      tradeType: "",
      ownerName: "",
      email: "",
      phone: "",
    });
    setErrorMsg("");
    setStep(1);
    onClose();
  };

  const trades = [
    { name: "Electrician", icon: Zap, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { name: "Plumber", icon: Droplets, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { name: "HVAC Pro", icon: Flame, color: "text-red-500 bg-red-500/10 border-red-500/20" },
    { name: "Roofer", icon: Home, color: "text-green-500 bg-green-500/10 border-green-500/20" },
    { name: "General / Other", icon: Hammer, color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            data-lenis-prevent
            className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-brand-offwhite border border-brand-navy/10 shadow-2xl z-10 rounded-xl"
          >
            {/* Top Close Bar */}
            <div className="flex justify-end p-4 xs:p-6 sticky top-0 bg-brand-offwhite/90 backdrop-blur-sm z-10">
              <button
                onClick={resetForm}
                aria-label="Close modal"
                className="p-2 rounded-md hover:bg-brand-navy/5 text-brand-slate hover:text-brand-navy transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 xs:px-8 sm:px-10 pb-8 sm:pb-12">
              {/* Step indicator */}
              {step < 3 && (
                <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-brand-navy/5 pb-4">
                  <div>
                    <span className="text-xs text-brand-copper uppercase tracking-widest font-bold">
                      Step {step} of 2
                    </span>
                    <h3 className="text-2xl xs:text-3xl sm:text-4xl uppercase tracking-wider font-bold text-brand-navy mt-1">
                      {step === 1 ? "Let's connect" : "How can we reach you?"}
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <span
                      className={`w-8 h-1 rounded-sm transition-all duration-300 ${
                        step >= 1 ? "bg-brand-copper" : "bg-brand-navy/10"
                      }`}
                    />
                    <span
                      className={`w-8 h-1 rounded-sm transition-all duration-300 ${
                        step >= 2 ? "bg-brand-copper" : "bg-brand-navy/10"
                      }`}
                    />
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {errorMsg && (
                <div className="mb-5 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {/* Step 1: Business Details */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider text-brand-slate font-bold">
                      - Company Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      maxLength={80}
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Electrical Services"
                      className="w-full bg-white border border-brand-navy/10 py-3.5 px-4 xs:px-5 rounded-lg text-brand-navy focus:outline-none focus:border-brand-copper transition-colors text-sm shadow-sm"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[10px] uppercase tracking-wider text-brand-slate font-bold">
                      - Your Trade Specialty
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 xs:gap-3">
                      {trades.map((trade) => {
                        const Icon = trade.icon;
                        const isSelected = formData.tradeType === trade.name;
                        return (
                          <button
                            key={trade.name}
                            type="button"
                            onClick={() => handleTradeSelect(trade.name)}
                            className={`flex items-center space-x-3 p-3.5 xs:p-4 border text-left cursor-pointer transition-all duration-150 rounded-lg ${
                              isSelected
                                ? "bg-white border-brand-copper ring-2 ring-brand-copper/25 font-bold text-brand-navy"
                                : "bg-white/50 border-brand-navy/10 text-brand-slate hover:bg-white hover:border-brand-navy/30"
                            }`}
                          >
                            <div className={`p-2 rounded-md ${trade.color}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold">{trade.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-brand-navy/5">
                    <Button
                      onClick={nextStep}
                      className="flex items-center space-x-2 w-full sm:w-auto justify-center"
                      variant="primary"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <form onSubmit={handleSubmit}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5 sm:space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-brand-slate font-bold">
                          - Owner / Contact Name
                        </label>
                        <input
                          type="text"
                          name="ownerName"
                          maxLength={60}
                          value={formData.ownerName}
                          onChange={handleInputChange}
                          placeholder="e.g. John Doe"
                          className="w-full bg-white border border-brand-navy/10 py-3.5 px-4 xs:px-5 rounded-lg text-brand-navy focus:outline-none focus:border-brand-copper transition-colors text-sm shadow-sm"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-brand-slate font-bold">
                          - Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          maxLength={25}
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. (555) 123-4567"
                          className="w-full bg-white border border-brand-navy/10 py-3.5 px-4 xs:px-5 rounded-lg text-brand-navy focus:outline-none focus:border-brand-copper transition-colors text-sm shadow-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] uppercase tracking-wider text-brand-slate font-bold">
                        - Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        maxLength={80}
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@apexelectrical.com"
                        className="w-full bg-white border border-brand-navy/10 py-3.5 px-4 xs:px-5 rounded-lg text-brand-navy focus:outline-none focus:border-brand-copper transition-colors text-sm shadow-sm"
                        required
                      />
                    </div>

                    <div className="bg-brand-navy/5 p-4 sm:p-5 border-l-2 border-brand-copper text-brand-slate text-xs space-y-1.5 rounded-r-md">
                      <p className="font-bold text-brand-navy uppercase tracking-wider">What happens next?</p>
                      <p className="leading-relaxed">
                        We will review your trade profile and contact you within 24 hours to schedule a 10-minute discovery call to scope your site build and search dashboard.
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-brand-navy/5 gap-3">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center space-x-1 text-xs uppercase tracking-wider text-brand-slate hover:text-brand-navy cursor-pointer py-2 px-1"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <Button
                        type="submit"
                        className="flex items-center space-x-2"
                        variant="primary"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Building Circuit...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Request</span>
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                </form>
              )}

              {/* Step 3: Success State */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 sm:py-8 space-y-5 sm:space-y-6"
                >
                  <div className="inline-flex justify-center items-center w-14 h-14 rounded-lg bg-brand-copper/10 border border-brand-copper/25 text-brand-copper">
                    <CheckCircle className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs text-brand-copper uppercase tracking-widest block font-bold">
                      Connection Established
                    </span>
                    <h3 className="text-3xl xs:text-4xl sm:text-5xl uppercase tracking-wider font-bold text-brand-navy">
                      Request Received.
                    </h3>
                    <p className="text-brand-slate text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="text-brand-navy font-bold">{formData.ownerName}</span>. We've routed your request to <span className="text-brand-navy font-bold">{formData.businessName}</span>'s trade coordinator.
                    </p>
                  </div>

                  {/* Faux technical read-out */}
                  <div className="bg-brand-navy text-brand-offwhite text-left text-xs p-4 sm:p-5 rounded-lg space-y-1 max-w-md mx-auto border border-white/5 opacity-90 select-none shadow-md">
                    <p className="text-brand-copper font-bold">⚡ TERMINAL STATUS: OK</p>
                    <p className="text-white/40">- DISPATCH INITIATED FOR: {formData.tradeType}</p>
                    <p className="text-emerald-400">&gt; routing pipeline... complete</p>
                    <p className="text-emerald-400">&gt; establishing search nodes... sync</p>
                    <p className="text-emerald-400">&gt; allocating coordinator... locked</p>
                    <p className="text-white/40">- EXPECT PHONE SCHEDULER CALLBACK IN 24 HOURS</p>
                  </div>

                  <div className="pt-4">
                    <Button onClick={resetForm} variant="dark">
                      Close Window
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
