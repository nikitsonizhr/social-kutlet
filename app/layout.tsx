import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Social &utlet — 360° Solutions for Brands",
  description:
    "Social &utlet is a full-service creative agency offering 360° brand solutions — from organic marketing and demand generation to creative strategy.",
  keywords: [
    "creative agency",
    "digital marketing",
    "SEO",
    "social media marketing",
    "performance marketing",
    "brand strategy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
