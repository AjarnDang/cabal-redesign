"use client";

import ButtonTheme from "@/components/ButtonTheme";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Fade-up animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Community() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Parallax effect for background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Background parallax effects
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Check if content is in view for fade animation
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Texture Background Section */}
      <section 
        ref={sectionRef}
        className="texture-background relative bg-no-repeat bg-center bg-cover overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `url("/assets/images/background-YKbNkRZLb8iBbNZ1.avif")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            scale: bgScale,
            y: bgY,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Desktop Background Overlay */}
        <div className="absolute inset-0 hidden lg:block bg-no-repeat bg-center bg-cover" />

        <div className="relative h-[700px] flex items-end justify-center pb-16 bg-no-repeat bg-center z-10">
          {/* Community Content */}
          <motion.div 
            ref={contentRef}
            className="community-content relative z-10 flex flex-col items-center justify-center"
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
          >
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
                style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
              >
                เข้าร่วม{" "}
                <span className="font-['Bellefair'] uppercase">COMMUNITY</span>
              </h1>
              <p className="leading-relaxed text-white/90 mb-6">
                ร่วมสร้างโลกของ CABAL ไปด้วยกัน ไม่ว่าจะเป็นผู้เล่นหน้าใหม่, สาย
                PvP ตัวจริง, หรือแฟนตัวยง ที่นี่คือบ้านของเหล่านักรบ
                <br />
                <span className="text-primary">
                  — Community ที่เติบโตจากความผูกพัน ความมันส์
                  และมิตรภาพที่แท้จริง
                </span>
              </p>
              <ButtonTheme size="large">เยี่ยมชม</ButtonTheme>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stone Divider Bottom */}
      <div className="stone-divider-bottom w-full h-[20px] bg-no-repeat bg-center relative">
        <Image
          src="/assets/images/stone-divider-btm-max.jpeg"
          alt="Stone Divider"
          fill
          className="object-cover"
          style={{ filter: "drop-shadow(0px 15px 42px #000000)" }}
        />
      </div>
    </>
  );
}

export default Community;
