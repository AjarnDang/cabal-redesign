import type { Metadata } from "next";
import { Noto_Sans_Thai, Bellefair } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-thai",
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

export const metadata: Metadata = {
  title: "CABAL Infinite Combo",
  description: "เกมออนไลน์ที่จะพาคุณเข้าสู่โลกแห่งการผจญภัย",
  keywords: ["CABAL", "game", "MMORPG", "online game", "เกมออนไลน์"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="dark">
      <body
        className={cn(
          notoSansThai.variable,
          bellefair.variable,
          "antialiased bg-background text-foreground font-sans"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
