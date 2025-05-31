import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function World() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const descY = useTransform(scrollYProgress, [0.2, 0.8], [70, -70]);

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.4]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

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
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundBlendMode: "color, normal, normal, normal, normal",
          scale: bgScale,
        }}
      >
        {/* Add an overlay for better readability */}
        <div className="absolute inset-0"></div>
      </motion.div>

      <div className="welcome-to-cabal container relative z-30 mx-auto px-4 md:px-6 pt-16">
        <div className="flex w-full justify-center items-start">
          {/* Content with parallax effect */}
          <motion.div
            ref={titleRef}
            animate={isTitleInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="subject_info space-y-4 text-center relative z-20"
          >
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
            <div className="relative lg:h-[24rem] h-[20rem] overflow-hidden">
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
}
