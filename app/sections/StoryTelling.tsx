"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import ButtonTheme from "@/components/ButtonTheme";
import Link from "next/link";

const StoryTelling = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax effect for elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Character parallax effects
  const characterY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const characterOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.8, 0.9],
    [0, 1, 1, 0]
  );

  // Background parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const landY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const skyY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  // Content parallax effects
  const titleY = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const descY = useTransform(scrollYProgress, [0.2, 0.8], [70, -70]);

  return (
    <div className="sticky_wrap">
      <section
        ref={sectionRef}
        className="relative h-[1013px] py-16 flex items-center bg-[0_center] pt pt5"
        style={{ paddingTop: '82px', zIndex: 4 }}
      >
        {/* Background image styled like pt5-bg */}
        <div className="pt5-bg absolute left-0 top-[-98px] w-full">
          <Image
            src="/assets/images/roadmap-bg-4.png"
            alt="Roadmap Background"
            width={1920}
            height={1080}
            className="w-full object-cover"
            priority
          />
        </div>

        <div className="container relative z-30 mx-auto px-4 md:px-6">
          <div className="section_inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Character ในตำแหน่งปกติ (ไม่ใช่ absolute) */}
              <div className="relative">
                <motion.div
                  className="w-full h-[450px] md:h-[550px] lg:h-[850px] z-10"
                  style={{ y: characterY }}
                >
                  <Image
                    src="/assets/characters/Duo_2.png"
                    alt="Duo Characters"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </motion.div>
              </div>

              {/* Content with parallax effect */}
              <motion.div className="subject_info space-y-8 lg:text-left text-center relative z-20">
                <motion.div className="space-y-4" style={{ y: titleY }}>
                  <h6 className="subject_title font-bold text-white">
                    THE INFINITE WAR OF CELESTIALS
                  </h6>
                  <h1 className="text-4xl md:text-6xl font-bold text-white">
                    <span className="text-primary">MAXIMIZE BATTLE</span>
                  </h1>
                </motion.div>

                <motion.div style={{ y: descY }}>
                  <p className="subject_desc text-lg text-white/80 max-w-2xl">
                    เข้าร่วมการแข่งขันใน CABAL
                    ผู้ชนะรับรางวัลและสิทธิพิเศษมากมาย! <br />
                    เริมต้นการแข่งขันวันที่ 1 มกราคม 2568
                  </p>
                </motion.div>

                <div className="lg:flex lg:space-y-0 space-y-3 items-center md:block block gap-3">
                  <ButtonTheme type="primary" size="large">
                    เข้าร่วม
                  </ButtonTheme>
                  <div>
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

          {/* สามารถเพิ่ม section_inner legacy ตามตัวอย่างได้ในอนาคต */}
        </div>
      </section>
    </div>
  );
};

export default StoryTelling;
