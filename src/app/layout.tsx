import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Wattfor — Premium Websites & Local SEO for Trade Contractors",
  description: "Wattfor builds professional, high-converting websites and manages local search presence for electricians, plumbers, HVAC pros, and roofers. Flat rates and zero setup fees.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased scroll-smooth", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Big+Shoulders+Display:wght@100..900&family=Epilogue:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col text-brand-navy bg-brand-offwhite font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
