"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ButtonTheme from "@/components/ButtonTheme";
import Link from "next/link";

const Roadmap = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax effect for elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Content parallax effects
  const titleY = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);

  return (
    <div className="relative w-full z-10">
      {/* Fancy Divider Top */}
      <div
        className="w-full h-[50px] bg-no-repeat bg-center z-10 relative"
        style={{
          backgroundImage: "url('/assets/images/fancy-divider.jpeg')",
          filter: "drop-shadow(0px 15px 42px #000000)",
        }}
      />

      {/* Main Section */}
      <section
        ref={sectionRef}
        className="relative flex flex-col items-center py-16 z-[5] w-full max-w-[var(--view-max)] mx-auto"
        style={{
          padding: "var(--section-padding, 2rem)",
          zIndex: "var(--measure-z-index-above, 1)",
        }}
      >
        {/* Stone Relief Background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "url('/assets/images/Stone-Relief-BG_Mobile_1000.avif')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundBlendMode: "color, normal, normal, normal, normal",
          }}
        >
          {/* Add an overlay for better readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column - Tournament Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-80 lg:h-[calc(80vh*0.8)]">
                <Image
                  src="/assets/images/title-tournament-max2.png"
                  alt="Tournament Title"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <motion.div className="subject_info space-y-6 lg:text-left text-center relative z-20">
              <motion.div className="space-y-1" style={{ y: titleY }}>
                <h6 className="subject_title font-['Bellefair'] text-white">
                  THE INFINITE WAR OF CELESTIALS
                </h6>
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  <span className="text-primary font-['Bellefair'] font-extrabold">
                    MAXIMIZE BATTLE
                  </span>
                </h1>
                <p className="subject_desc text-white/80">
                  เข้าร่วมการแข่งขันใน CABAL ผู้ชนะรับรางวัลและสิทธิพิเศษมากมาย!{" "}
                  <br />
                  เริมต้นการแข่งขันวันที่ 1 มกราคม 2568
                </p>
              </motion.div>

              <div className="lg:flex items-center md:block block gap-3">
                <ButtonTheme type="primary" size="large">
                  เข้าร่วม
                </ButtonTheme>
                <div className="details-btn">
                  <Link
                    href="#"
                    className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-300"
                  >
                    อ่านรายละเอียด
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fancy Divider Bottom */}
      <div
        className="w-full h-[50px] bg-no-repeat bg-center z-10 relative"
        style={{
          backgroundImage: "url('/assets/images/fancy-divider.jpeg')",
          filter: "drop-shadow(0px 15px 42px #000000)",
          transform: "rotate(180deg)",
        }}
      />
    </div>
  );
};

export default Roadmap;
