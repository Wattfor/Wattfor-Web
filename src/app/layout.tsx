import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const powerGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/PowerGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PowerGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PowerGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PowerGrotesk-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-power-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wattfor — Premium Websites & Local SEO for Trade Contractors",
  description: "Wattfor builds professional, high-converting websites and manages local search presence for electricians, plumbers, HVAC pros, and roofers. Flat rates and zero setup fees.",
  icons: {
    icon: [
      { url: "/wattfor.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon.ico?v=2" },
    ],
    shortcut: "/wattfor.svg?v=2",
    apple: "/wattfor.svg?v=2",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("h-full antialiased scroll-smooth", powerGrotesk.variable)}>
      <body className={cn("min-h-full flex flex-col text-brand-navy bg-brand-offwhite antialiased", powerGrotesk.className)}>
        {children}
      </body>
    </html>
  );
}
