import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { cn } from "@/lib/utils";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  title: "CABAL - Game Landing Page",
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
          "antialiased bg-background text-foreground font-sans"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
