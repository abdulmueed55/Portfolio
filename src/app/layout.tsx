import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Abdul Mueed | Interactive Portfolio",
  description:
    "Interactive portfolio of Abdul Mueed — WordPress, Shopify, React, SEO, design, and automation work.",
  openGraph: {
    title: "Abdul Mueed | Interactive Portfolio",
    description:
      "Enter Mueed City, a premium interactive portfolio for WordPress, Shopify, React, SEO, design, and automation work.",
    type: "website",
    locale: "en_US",
    siteName: "Mueed City",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
