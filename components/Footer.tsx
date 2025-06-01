import React from "react";
import { Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-4">

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mb-4">
          <a
            href="#"
            className="rounded-full flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <Image
              src="/assets/svg/facebook.svg"
              alt="Facebook"
              width={40}
              height={40}
              className="object-contain"
            />
          </a>
          <a
            href="#"
            className="rounded-full flex items-center justify-center transition-colors"
            aria-label="Discord"
          >
            <Image
              src="/assets/svg/discord.svg"
              alt="Discord"
              width={40}
              height={40}
              className="object-contain"
            />
          </a>
          <a
            href="#"
            className="rounded-full flex items-center justify-center transition-colors"
            aria-label="LINE"
          >
            <Image
              src="/assets/svg/line.svg"
              alt="LINE"
              width={40}
              height={40}
              className="object-contain fill-white"
            />
          </a>
        </div>

        {/* Company Icon */}
        <div className="flex justify-center items-center gap-6 mb-4">
          <Image
            src="/assets/images/est-games.png"
            alt="Company Logo"
            width={100}
            height={100}
            className="object-contain"
          />

          <Image
            src="/assets/images/combo-interactive.webp"
            alt="Company Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Copyright Text */}
        <div className="text-center mb-8">
          <p className="text-white/70 text-sm">
            © ESTgames Corp. All Rights Reserved. Published by Combo
            InterActive.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm">
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            นโยบายความเป็นส่วนตัว
          </a>
          <span className="text-white/30 hidden md:inline">|</span>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            เงื่อนไขการใช้งาน
          </a>
          <span className="text-white/30 hidden md:inline">|</span>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            เพิ่มเพื่อนรับรางวัล
          </a>
          <span className="text-white/30 hidden md:inline">|</span>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            ช่วยเหลือ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
