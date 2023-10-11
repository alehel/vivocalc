import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivo Kalkulator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className}
           bg-white md:bg-gradient-to-b md:from-[#253746] md:to-[#425563] h-full`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
