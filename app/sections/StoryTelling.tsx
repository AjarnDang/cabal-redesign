"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const StoryTelling = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax effect for elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Content parallax effects
  const titleY = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const descY = useTransform(scrollYProgress, [0.2, 0.8], [70, -70]);

  return (
    <div className="sticky_wrap">
      <section
        ref={sectionRef}
        className="relative h-[1013px] py-16 flex items-center bg-[0_center] z-[4]"
      >
        <div className="absolute inset-0 left-0 top-[-98px] w-full">
          <Image
            src="/assets/images/changing1.png"
            alt="Roadmap Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative z-30 mx-auto px-4 md:px-6">
          <div className="flex w-full justify-center items-start">
            {/* Content with parallax effect */}
            <motion.div className="subject_info space-y-4 text-center relative z-20">
              <motion.div className="space-y-4" style={{ y: titleY }}>
                <h6 className="subject_title text-2xl font-bold text-white">
                  ยินดีต้อนรับสู่ดินแดนแห่ง
                </h6>
                <h1 className="text-4xl md:text-7xl font-['Bellefair'] font-extrabold text-white">
                  CABAL
                </h1>
              </motion.div>

              <motion.div style={{ y: descY }}>
                <p className="subject_desc text-lg text-white/80 max-w-2xl">
                  "ก้าวเข้าสู่โลกแห่งเวทมนตร์ อาชีพ ความกล้าหาญ
                  และการต่อสู้ไม่รู้จบ" <br />
                  ที่นี่... ตำนานของคุณกำลังจะเริ่มต้น
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative h-[1013px] py-16 flex items-center bg-[0_center] z-[5]">
        <div className="absolute inset-0 left-0 top-[-98px] w-full">
          <Image
            src="/assets/images/roadmap-bg-4.png"
            alt="Roadmap Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default StoryTelling;
