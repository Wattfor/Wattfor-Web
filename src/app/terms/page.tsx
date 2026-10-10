import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, CheckCircle2, FileText, Check } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | Wattfor Trade Websites & Local SEO",
  description: "Terms and Conditions for Wattfor. Transparent month-to-month terms, 100% client digital ownership, and zero exit buyout fees.",
};

export default function TermsAndConditionsPage() {
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
                - CLEAR CLIENT AGREEMENT
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-brand-navy leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-brand-slate text-sm sm:text-base font-medium leading-relaxed">
              Last Updated: October 10, 2026 · Plain-English Agreement for Trade Contractors
            </p>
          </div>

          {/* 100% Client Ownership Guarantee Callout Card */}
          <div className="bg-brand-navy text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10 space-y-4 relative overflow-hidden">
            <div className="flex items-center gap-2.5 text-brand-copper font-bold text-xs uppercase tracking-widest">
              <Lock className="w-5 h-5 text-emerald-400" />
              <span>Section 9 · The Wattfor Ownership Guarantee</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              No Hostage Contracts · You Own Everything 100%
            </h3>
            <p className="text-white/80 text-sm leading-relaxed font-normal">
              Many digital agencies lease websites to trade contractors and refuse to release the domain or codebase if you ever choose to leave. Under Wattfor terms, your domain name, Google Business Profile, and website source files belong exclusively to your business legally from day one. If you cancel, you take everything with zero buyout fees.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-white/90">
              <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Domain in Your Name</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Primary GBP Owner</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Exit Penalties</span>
              </div>
            </div>
          </div>

          {/* Document Sections */}
          <div className="space-y-10 text-brand-slate text-sm sm:text-base leading-relaxed font-normal">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By commissioning a website build, signing an estimate, or subscribing to our monthly maintenance and SEO services with Wattfor (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;Trade Business Owner&rdquo;) agree to be legally bound by these Terms and Conditions.
              </p>
              <p>
                These terms are written in straightforward language to ensure transparency and trust for busy trade contractors.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                2. Scope of Services
              </h2>
              <p>
                Wattfor provides specialized digital engineering services for home service and commercial trade contractors. Our services include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-brand-slate">
                <li>
                  <strong className="text-brand-navy">Website Build:</strong> Custom-coded website design, mobile performance tuning, Schema markup implementation, instant lead forms, review integrations, and SSL configuration.
                </li>
                <li>
                  <strong className="text-brand-navy">Local SEO &amp; Google Business Profile:</strong> Setup, audit, geographic citation synchronization (45+ directories), local 3-pack search optimization, and monthly ranking analytics.
                </li>
                <li>
                  <strong className="text-brand-navy">Hosting &amp; Maintenance:</strong> High-speed Cloudflare/Vercel edge hosting, nightly automated encrypted backups, 24/7 uptime monitoring, security patching, and ongoing text/photo updates.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                3. Flat-Rate Pricing &amp; Billing
              </h2>
              <p>
                We believe in simple, honest pricing with zero surprise charges:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-brand-slate">
                <li>
                  <strong className="text-brand-navy">One-Time Setup Builds:</strong> Billed as a flat fee as specified on your invoice. 50% deposit upon kickoff, and the remaining 50% upon final website review and live deployment.
                </li>
                <li>
                  <strong className="text-brand-navy">Monthly Plans:</strong> Billed automatically every 30 days via Stripe. There are zero minimum commitments or annual lock-in contracts.
                </li>
                <li>
                  <strong className="text-brand-navy">No Hidden Retainers:</strong> We do not charge surprise setup fees, configuration penalties, or bandwidth surcharges.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                4. Client Responsibilities
              </h2>
              <p>
                To launch your website quickly (typically within 5 to 7 business days), the Client agrees to provide:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-brand-slate">
                <li>Accurate business licensing, insurance, and contact details.</li>
                <li>Company logo and preferred job site photography (we provide professional trade stock photography if needed).</li>
                <li>Prompt feedback on design drafts and staging links.</li>
                <li>Accurate representation of services and legal trade credentials.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                5. Intellectual Property &amp; Legal Ownership
              </h2>
              <p>
                <strong className="text-brand-navy">You own your business identity:</strong> The Client retains full ownership of all provided trademarks, logos, custom copy, trade licenses, and job images.
              </p>
              <p>
                <strong className="text-brand-navy">Complete Asset Portability:</strong> Upon final invoice settlement or upon cancellation of a monthly hosting plan, all custom code, graphics, domain records, and Google listings remain your exclusive property. We will provide a clean ZIP archive export of your website files and transfer registrar controls with zero buyout fees.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                6. Cancellation &amp; Exit Policy
              </h2>
              <p>
                You may cancel your monthly maintenance or SEO retainer at any time with a simple written notice (email or SMS) 30 days prior to your next billing cycle.
              </p>
              <p>
                There are zero cancellation penalties. We will ensure a smooth, professional handoff of your domain and hosting controls to your new team or provider.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                7. Service Levels &amp; Warranties
              </h2>
              <p>
                <strong className="text-brand-navy">99.9% Uptime Commitment:</strong> We utilize modern edge cloud infrastructure designed to maintain continuous uptime. Automated nightly snapshots ensure immediate 1-click disaster recovery.
              </p>
              <p>
                <strong className="text-brand-navy">Search Engine Performance:</strong> While we implement proven trade SEO architecture, Google Maps 3-pack schema, and fast-loading code that consistently ranks clients in top local slots, search algorithms and third-party review platforms are operated by Google and subject to their independent guidelines.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                8. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of the State of Colorado, without regard to conflict of law principles. Any legal proceeding arising from these Terms will be conducted in Denver County, Colorado.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                9. Questions &amp; Support
              </h2>
              <p>
                For questions about your agreement, invoicing, or asset transfer, contact our direct support line:
              </p>
              <div className="bg-white border border-brand-navy/10 p-4 sm:p-5 rounded-xl text-xs sm:text-sm font-medium space-y-1.5 text-brand-navy">
                <p><strong>Wattfor Web Architecture</strong></p>
                <p>Email: <a href="mailto:support@wattfor.com" className="text-brand-copper font-bold hover:underline">support@wattfor.com</a> / <a href="mailto:hello@wattfor.com" className="text-brand-copper font-bold hover:underline">hello@wattfor.com</a></p>
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
            <Link href="/terms" className="text-brand-navy font-bold hover:text-brand-copper transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-brand-copper transition-colors">
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

