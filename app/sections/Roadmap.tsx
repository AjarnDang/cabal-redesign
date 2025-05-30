"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import ButtonTheme from "@/components/ButtonTheme";

const Roadmap = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);

  // Parallax effect for character image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const characterY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const characterOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.8, 0.9],
    [0, 1, 1, 0]
  );

  // Background parallax effect
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-16 overflow-hidden"
    >
      {/* Background with parallax effect - using gradient instead of image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Character with parallax effect */}
          <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center">
            <motion.div
              ref={characterRef}
              className="relative w-full h-full"
              style={{
                y: characterY,
                opacity: characterOpacity,
              }}
            >
              <Image
                src="/assets/characters/Gunner_M-effect.png"
                alt="Gunner Character"
                fill
                className="object-contain object-center"
                priority
              />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-xl opacity-50 animate-pulse" />
            </motion.div>
          </div>

          {/* Tournament information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h6 className="font-bold text-white">
                THE INFINITE WAR OF CELESTIALS
              </h6>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                <span className="text-primary">MAXIMIZE BATTLE</span>
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                เข้าร่วมการแข่งขันใน CABAL ผู้ชนะรับรางวัลและสิทธิพิเศษมากมาย! <br />
                เริมต้นการแข่งขันวันที่ 1 มกราคม 2568
              </p>
            </div>

            <ButtonTheme
              type="primary"
              size="large"
            >
              สมัครเข้าร่วมการแข่งขัน
            </ButtonTheme>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
