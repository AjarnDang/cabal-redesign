"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ButtonTheme from "@/components/ButtonTheme";

// Fade-up animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Welcome section component
const WelcomeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const dungeonRef = useRef<HTMLDivElement>(null);

  // Parallax effect for elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Check if in view
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isDungeonInView = useInView(dungeonRef, { once: true, amount: 0.3 });

  // Content parallax effects
  const titleY = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const descY = useTransform(scrollYProgress, [0.2, 0.8], [70, -70]);

  // Background scale effect
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.4]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[1080px] py-16 flex items-start z-[4]"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url('/assets/images/wallpapersden.com-gaming_1920x1080.png')",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundBlendMode: "color, normal, normal, normal, normal",
          scale: bgScale,
        }}
      >
        <div className="absolute inset-0"></div>
      </motion.div>

      <div className="welcome-to-cabal container relative z-30 mx-auto px-4 md:px-6 pt-16">
        <div className="flex w-full justify-center items-start">
          <motion.div
            ref={titleRef}
            animate={isTitleInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="subject_info space-y-4 text-center relative z-20"
          >
            <motion.div className="space-y-4" style={{ y: titleY }}>
              <h6
                className="subject_title text-2xl font-bold text-white"
                style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
              >
                ยินดีต้อนรับสู่ดินแดนแห่ง
              </h6>
              <h1
                className="text-4xl md:text-7xl font-['Bellefair'] font-extrabold text-white"
                style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
              >
                CABAL
              </h1>
            </motion.div>

            <motion.div style={{ y: descY }}>
              <p
                className="subject_desc text-lg text-white/80 max-w-2xl"
                style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
              >
                "ก้าวเข้าสู่โลกแห่งเวทมนตร์ อาชีพ ความกล้าหาญ
                และการต่อสู้ไม่รู้จบ" <br />
                ที่นี่... ตำนานของคุณกำลังจะเริ่มต้น
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        ref={dungeonRef}
        className="dungeon-and-rune absolute bottom-[-10rem] left-0 w-full z-30"
        initial="hidden"
        animate={isDungeonInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
      >
        <div className="container mx-auto">
          <motion.div
            style={{ y: titleY }}
            className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8 p-8 rounded-lg"
          >
            <div className="flex justify-center">
              <div className="lg:text-left text-center">
                <h3 className="text-4xl font-bold mb-4">
                  จุดเริ่มต้นของการฝึกฝน
                </h3>
                <p className="text-white/80">
                  ฝ่าดันเจี้ยนลึกลับ ปลดล็อกรูนโบราณเพื่อเสริมพลัง <br />
                  ทุกก้าวที่คุณเดินคือเส้นทางสู่การเป็นผู้แข็งแกร่งที่สุด
                </p>
              </div>
            </div>
            <div className="relative lg:h-[24rem] h-[20rem] overflow-hidden shadow-xl shadow-amber-950">
              <Image
                src="/assets/images/nightmare-dungeons-4.avif"
                alt="Dungeons"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Crafting section component
const CraftingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const craftItemRef = useRef<HTMLDivElement>(null);
  const costumeRef = useRef<HTMLDivElement>(null);

  // Parallax effect for elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Check if in view
  const isCraftItemInView = useInView(craftItemRef, {
    once: true,
    amount: 0.3,
  });
  const isCostumeInView = useInView(costumeRef, { once: true, amount: 0.3 });

  // Background scale effect
  const bgScale2 = useTransform(scrollYProgress, [0, 1], [1.3, 1.0]);

  // Fireball parallax effect
  const fireballX = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const fireballY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const fireballRotate = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <>
      <section
        ref={sectionRef}
        className="h-[1080px] relative py-16 flex items-center justify-center bg-[0_center] z-[5] mt-8"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url('/assets/images/dungeons.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              scale: bgScale2,
              transformOrigin: "center",
            }}
          >
            <div className="absolute inset-0"></div>
          </motion.div>

          {/* Fireball Effect */}
          <motion.div
            className="absolute top-0 right-[10%] w-[200px] h-[200px] z-40"
            style={{
              x: fireballX,
              y: fireballY,
              rotate: fireballRotate,
              filter: "drop-shadow(0 0 20px rgba(255, 100, 0, 0.5))",
            }}
          >
            <Image
              src="/assets/images/fireball.png"
              alt="Fireball"
              width={200}
              height={200}
              className="object-contain"
            />
          </motion.div>
        </div>

        <motion.div
          ref={craftItemRef}
          className="craft-item container relative z-40 mx-auto px-4 md:px-6 py-16"
          initial="hidden"
          animate={isCraftItemInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8 p-8 rounded-lg">
            <div className="relative overflow-hidden"></div>

            <div className="flex justify-center">
              <div className="lg:text-left text-center">
                <h3
                  className="text-4xl font-bold mb-4"
                  style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                >
                  สร้างอุปกรณ์สุดแกร่ง
                </h3>
                <p
                  className="text-white/80"
                  style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                >
                  ไม่ใช่แค่ต่อสู้เก่ง... แต่ต้องรู้จักสร้างสิ่งล้ำค่า <br />
                  สะสมวัตถุดิบ คราฟต์ไอเทมระดับตำนาน ด้วยฝีมือของคุณ
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Separate costume-and-pets outside the section with overflow-hidden */}
      <motion.div
        ref={costumeRef}
        className="costume-and-pets relative w-full z-50 mt-[-10rem]"
        initial="hidden"
        animate={isCostumeInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
      >
        <div className="container mx-auto">
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0.2, 0.8], [50, -50]) }}
            className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8 p-8 rounded-lg"
          >
            <div className="relative lg:h-[24rem] h-[20rem] overflow-hidden shadow-xl shadow-amber-950">
              <Image
                src="/assets/images/Z9NG56GJKUOS1721430736478.jpg"
                alt="Dungeons"
                fill
                className="object-cover shadow-lg"
              />

              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="flex justify-center">
              <div className="lg:text-left text-center">
                <h3 className="text-4xl font-bold mb-4">
                  เปล่งประกายความเป็นตัวคุณ
                </h3>
                <p className="text-white/80">
                  เลือกคอสตูม สร้างสไตล์สุดสายมากมาย พร้อมออกเดินทาง <br />
                  ไปกับสัตว์เลี้ยงคู่ใจ ที่อยู่เคียงข้างคุณเสมอ
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

// War section component
const WarSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const dungeonRef = useRef<HTMLDivElement>(null);

  // Parallax effect for elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Check if in view
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isDungeonInView = useInView(dungeonRef, { once: true, amount: 0.3 });

  // Content parallax effects
  const titleY = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const descY = useTransform(scrollYProgress, [0.2, 0.8], [70, -70]);

  // Background scale effect
  const bgScale2 = useTransform(scrollYProgress, [0, 1], [1.2, 1.0]);

  // Foreground parallax effects
  const foregroundX = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const foregroundScale = useTransform(scrollYProgress, [0, 1], [1.0, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="h-[1080px] mt-[-20rem] relative py-16 flex items-center justify-center bg-[0_center] z-[5] overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full block md:block lg:hidden">
          <Image
            src="/assets/images/levelguided.png"
            alt="Level Guide Mobile"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop Background Layer (hidden on sm screen) */}
        <motion.div
          className="absolute inset-0 w-full h-full hidden md:hidden lg:block"
          style={{
            backgroundImage: "url('/assets/images/levelguide-back.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            scale: bgScale2,
            transformOrigin: "center",
          }}
        ></motion.div>

        {/* Desktop Foreground Layer (hidden on sm screen) */}
        <motion.div
          className="absolute inset-0 w-full h-full items-end justify-center hidden md:hidden lg:flex pointer-events-none"
          style={{
            x: foregroundX,
          }}
        >
          <motion.div
            style={{
              scale: foregroundScale,
              transformOrigin: "bottom",
              width: "100%",
              height: "100%",
              position: "relative",
              marginBottom: "-10rem",
            }}
          >
            <Image
              src="/assets/images/levelguide-front-2.png"
              alt="Level Guide Foreground"
              fill
              className="object-contain pointer-events-none"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        ref={dungeonRef}
        className="dungeon-and-rune w-full z-30 absolute bottom-5 sm:bottom-5 md:bottom-[8%] left-0 right-0"
        initial="hidden"
        animate={isDungeonInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
      >
        <div className="mission-war container relative z-30 mx-auto px-4 md:px-6">
          <div className="flex w-full justify-center items-center">
            <motion.div
              ref={titleRef}
              animate={isTitleInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              className="subject_info space-y-4 text-center relative z-20 max-w-2xl mx-auto"
            >
              <motion.div style={{ y: titleY }}>
                <h1
                  className="text-3xl sm:text-4xl md:text-6xl font-bold text-white"
                  style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                >
                  เข้าสู่สงครามแห่งศักดิ์ศรี
                </h1>
              </motion.div>

              <motion.div style={{ y: descY }}>
                <p className="subject_desc text-base sm:text-lg text-white/90 max-w-2xl">
                  ศัตรูอยู่ทุกทิศ แต่พันธมิตรอยู่เคียงข้าง <br />
                  เข้าร่วม Mission War เพื่อพิสูจน์ความแกร่งของคุณในสนามรบจริง
                </p>
              </motion.div>

              <ButtonTheme>สำรวจข้อมูลเกม</ButtonTheme>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Main component
const StoryTelling = () => {
  return (
    <div className="sticky_wrap overflow-x-hidden">
      <WelcomeSection />
      <CraftingSection />
      <WarSection />
    </div>
  );
};

export default StoryTelling;
