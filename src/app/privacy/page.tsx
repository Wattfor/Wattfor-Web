import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Wattfor Trade Websites & Local SEO",
  description: "Privacy Policy for Wattfor. Learn how we protect trade contractor business data and ensure 100% client digital ownership.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-navy flex flex-col justify-between selection:bg-brand-copper selection:text-white">
      {/* Top Header Navigation */}
      <header className="border-b border-brand-navy/10 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="w-9 h-9 rounded-lg bg-white shadow-sm border border-brand-navy/15 flex items-center justify-center p-1.5 flex-shrink-0">
              <img src="/wattfor.svg" alt="Wattfor Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl lowercase tracking-wider font-extrabold text-brand-navy">
              wattfor
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-slate hover:text-brand-copper transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-12">
          {/* Header Title Block */}
          <div className="space-y-4 border-b border-brand-navy/10 pb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-brand-copper font-bold block">
                - LEGAL &amp; DATA COMPLIANCE
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-brand-navy leading-tight">
              Privacy Policy
            </h1>
            <p className="text-brand-slate text-sm sm:text-base font-medium leading-relaxed">
              Last Updated: October 10, 2026 · Effective Immediately for All Trade Clients
            </p>
          </div>

          {/* 100% Client Ownership Guarantee Callout Card */}
          <div className="bg-brand-navy text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10 space-y-4 relative overflow-hidden">
            <div className="flex items-center gap-2.5 text-brand-copper font-bold text-xs uppercase tracking-widest">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Core Principle · Zero Data Reselling</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              Your Leads &amp; Business Data Belong Exclusively to You
            </h3>
            <p className="text-white/80 text-sm leading-relaxed font-normal">
              Unlike third-party lead generation aggregators (such as Angi, HomeAdvisor, or Thumbtack), Wattfor does not capture, resell, auction, or share your inbound customer leads with competing contractors. Every call, text, and quote request generated through your website routes directly to your phone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-white/90">
              <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Shared Leads</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Private Routing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Encrypted Backups</span>
              </div>
            </div>
          </div>

          {/* Document Sections */}
          <div className="space-y-10 text-brand-slate text-sm sm:text-base leading-relaxed font-normal">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                1. Overview &amp; Scope
              </h2>
              <p>
                Wattfor (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides high-performance website design, custom software development, local search engine optimization (SEO), and cloud hosting infrastructure tailored for trade business owners, including electricians, plumbers, HVAC technicians, roofers, and general contractors.
              </p>
              <p>
                This Privacy Policy outlines how we collect, use, protect, and handle your business information when you use our website (<span className="text-brand-navy font-semibold">wattfor.com</span>), hire our development services, or utilize our hosted trade platforms.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                2. Information We Collect
              </h2>
              <p>
                We only collect information necessary to build, optimize, and maintain your business website and generate local phone leads:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-brand-slate">
                <li>
                  <strong className="text-brand-navy">Client Business Details:</strong> Company legal name, owner name, business physical address, service radius, email address, direct phone number, trade license numbers, and insurance verification documents.
                </li>
                <li>
                  <strong className="text-brand-navy">Creative &amp; Technical Assets:</strong> Logos, project photography, customer review testimonials, domain registrar credentials, and Google Business Profile management access.
                </li>
                <li>
                  <strong className="text-brand-navy">Payment &amp; Billing Data:</strong> Payment card details and billing addresses processed securely via Stripe. We do not store raw credit card numbers on our local servers.
                </li>
                <li>
                  <strong className="text-brand-navy">End-Customer Telemetry &amp; Inbound Leads:</strong> Form submissions (customer name, phone, job description) and click-to-call events submitted by homeowners on your live website.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                3. How We Use Your Information
              </h2>
              <p>
                The information collected is used strictly for operational and marketing service delivery:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-brand-slate">
                <li>To design, code, and deploy your custom responsive trade website.</li>
                <li>To configure verified Google Business Profile signals, local citation directories, and Schema markup.</li>
                <li>To route incoming quote requests and emergency service calls in real-time to your phone or dispatch crew via SMS.</li>
                <li>To perform nightly encrypted cloud backups, software updates, and uptime diagnostics.</li>
                <li>To provide transparent monthly ranking performance reports.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                4. Infrastructure &amp; Third-Party Services
              </h2>
              <p>
                We partner only with industry-leading, secure infrastructure providers to run your platform:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-white border border-brand-navy/10 p-4 rounded-xl space-y-1">
                  <span className="text-xs uppercase font-bold text-brand-copper tracking-wider block">Edge Hosting &amp; CDN</span>
                  <span className="text-sm font-bold text-brand-navy block">Cloudflare &amp; Vercel</span>
                  <p className="text-xs text-brand-slate">Provides sub-second global edge delivery, DDoS defense, and automated SSL encryption certificates.</p>
                </div>
                <div className="bg-white border border-brand-navy/10 p-4 rounded-xl space-y-1">
                  <span className="text-xs uppercase font-bold text-brand-copper tracking-wider block">Payment Processing</span>
                  <span className="text-sm font-bold text-brand-navy block">Stripe (PCI-DSS Level 1)</span>
                  <p className="text-xs text-brand-slate">Handles all subscription payments, recurring hosting, and build fee invoices with bank-grade encryption.</p>
                </div>
                <div className="bg-white border border-brand-navy/10 p-4 rounded-xl space-y-1">
                  <span className="text-xs uppercase font-bold text-brand-copper tracking-wider block">SMS Lead Dispatch</span>
                  <span className="text-sm font-bold text-brand-navy block">Twilio Telephony Network</span>
                  <p className="text-xs text-brand-slate">Delivers real-time customer form notifications directly to the contractor&apos;s mobile phone in &lt; 3 seconds.</p>
                </div>
                <div className="bg-white border border-brand-navy/10 p-4 rounded-xl space-y-1">
                  <span className="text-xs uppercase font-bold text-brand-copper tracking-wider block">Search Verification</span>
                  <span className="text-sm font-bold text-brand-navy block">Google Search Console &amp; GBP</span>
                  <p className="text-xs text-brand-slate">Used to monitor keyword positions, local map pack rankings, and schema indexation status.</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                5. Data Security &amp; Retention
              </h2>
              <p>
                We implement comprehensive administrative, physical, and technical safeguards to protect your confidential trade information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-brand-slate">
                <li>All website traffic is encrypted using modern 256-bit TLS/SSL certificates with forced HTTPS.</li>
                <li>Daily encrypted snapshots of your website content and databases are maintained offsite.</li>
                <li>Client database credentials and API tokens are never exposed in client-side code bundles.</li>
                <li>You may request complete export or deletion of your stored records at any time.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                6. Your Rights &amp; Asset Portability
              </h2>
              <p>
                Under our contract terms, you maintain 100% legal ownership of your business domain, website content, and Google listings. If you ever cancel your monthly plan, we will assist you in transferring all files and accounts with zero exit penalties or buyout fees.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                7. Contact Us
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request data deletion, contact our operations team directly:
              </p>
              <div className="bg-white border border-brand-navy/10 p-4 sm:p-5 rounded-xl text-xs sm:text-sm font-medium space-y-1.5 text-brand-navy">
                <p><strong>Wattfor Web Architecture</strong></p>
                <p>Email: <a href="mailto:privacy@wattfor.com" className="text-brand-copper font-bold hover:underline">privacy@wattfor.com</a> / <a href="mailto:hello@wattfor.com" className="text-brand-copper font-bold hover:underline">hello@wattfor.com</a></p>
                <p>Phone: <a href="tel:+15559012099" className="text-brand-copper font-bold hover:underline">(555) 901-2099</a></p>
                <p>Denver Metro, Colorado, United States</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-navy/10 bg-white py-6">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-slate font-medium">
          <p>© {new Date().getFullYear()} Wattfor. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-brand-copper transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="text-brand-navy font-bold hover:text-brand-copper transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-brand-copper transition-colors">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

