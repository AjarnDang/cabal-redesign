"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
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
  const descY = useTransform(scrollYProgress, [0.2, 0.8], [70, -70]);

  return (
    <div className="sticky_wrap">
      <section
        ref={sectionRef}
        className="relative h-[1013px] py-16 flex items-center bg-[0_center]"
        style={{ paddingTop: "82px", zIndex: 4 }}
      >
        <div className="absolute inset-0 w-full left-0 top-[-52px]">
          <Image
            src="/assets/images/615291.png"
            alt="Roadmap Background"
            fill
            className="object-cover"
            priority
          />
          {/* เพิ่ม overlay เพื่อให้ข้อความอ่านง่ายขึ้น */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="lg:container md:flex flex justify-center relative w-full z-10">
          <div className="lg:grid md:flex flex grid-cols-1 justify-center items-center w-full">
            {/* Content ที่จัดวางในตำแหน่งเดิม */}

            <motion.div className="subject_info space-y-8 lg:text-left text-center relative z-20 lg:max-w-md lg:ml-auto lg:px-0 md:px-4 px-4">
              <motion.div className="space-y-4" style={{ y: titleY }}>
                <h6 className="subject_title font-['Bellefair'] text-white">
                  THE INFINITE WAR OF CELESTIALS
                </h6>
                <h1 className="text-4xl md:text-7xl font-bold text-white">
                  <span className="text-primary font-['Bellefair'] font-extrabold">
                    MAXIMIZE BATTLE
                  </span>
                </h1>
              </motion.div>

              <motion.div style={{ y: descY }}>
                <p className="subject_desc text-lg text-white/80 max-w-2xl">
                  เข้าร่วมการแข่งขันใน CABAL ผู้ชนะรับรางวัลและสิทธิพิเศษมากมาย!
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
      </section>
    </div>
  );
};

export default Roadmap;
