"use client"

import Header from "@/components/Header";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baumco web community | Home",
  description:
    "Elevate your tech prowess with BAUMco. Immerse in programming insights, latest trends, and tutorials. Empower your journey in the world of tech and programming excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
