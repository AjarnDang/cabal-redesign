"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Play,
  PlayCircle,
} from "lucide-react";
import ButtonGlobal from "@/components/ButtonGlobal";

// Character data
const characters = [
  {
    id: 1,
    name: "Warrior",
    description:
      "นักรบผู้แข็งแกร่งที่เชี่ยวชาญการต่อสู้ด้วยดาบและอาวุธหนัก สามารถทนทานต่อความเสียหายได้สูงและมีพลังโจมตีที่ทรงพลัง เหมาะสำหรับผู้เล่นที่ชอบการปะทะโดยตรง",
    class: "Warrior",
    difficulty: "ปานกลาง",
    imgSrc: "/assets/characters/character_main_01.webp",
    symbolSrc: "/assets/characterSymbols/bt_character_mobile_01.webp",
    activeSymbolSrc:
      "/assets/characterSymbols/bt_character_mobile_active_01.webp",
    bgSrc: "/assets/images/roadmap-bg-4.png",
  },
  {
    id: 2,
    name: "Blader",
    description:
      "นักดาบผู้คล่องแคล่วที่ใช้ดาบสองมือในการโจมตี มีความเร็วและความแม่นยำสูง สามารถหลบหลีกการโจมตีและสร้างคอมโบได้อย่างต่อเนื่อง",
    class: "Blader",
    difficulty: "สูง",
    imgSrc: "/assets/characters/character_main_02.webp",
    symbolSrc: "/assets/characterSymbols/bt_character_mobile_02.webp",
    activeSymbolSrc:
      "/assets/characterSymbols/bt_character_mobile_active_02.webp",
    bgSrc: "/assets/images/roadmap-bg-4.png",
  },
  {
    id: 3,
    name: "Wizard",
    description:
      "จอมเวทย์ผู้เชี่ยวชาญการใช้เวทมนตร์ทำลายล้าง สามารถโจมตีศัตรูได้อย่างรุนแรงจากระยะไกล และควบคุมสนามรบด้วยเวทมนตร์หลากหลายธาตุ",
    class: "Wizard",
    difficulty: "สูง",
    imgSrc: "/assets/characters/character_main_03.webp",
    symbolSrc: "/assets/characterSymbols/bt_character_mobile_03.webp",
    activeSymbolSrc:
      "/assets/characterSymbols/bt_character_mobile_active_03.webp",
    bgSrc: "/assets/images/roadmap-bg-4.png",
  },
  {
    id: 4,
    name: "Force Archer",
    description:
      "นักธนูพลังที่เชี่ยวชาญการโจมตีระยะไกล มีความแม่นยำสูงและสามารถสร้างความเสียหายต่อเนื่องได้มากกว่าคลาสอื่น เหมาะกับการโจมตีเป้าหมายเดี่ยว",
    class: "Archer",
    difficulty: "ปานกลาง",
    imgSrc: "/assets/characters/character_main_04.webp",
    symbolSrc: "/assets/characterSymbols/bt_character_mobile_04.webp",
    activeSymbolSrc:
      "/assets/characterSymbols/bt_character_mobile_active_04.webp",
    bgSrc: "/assets/images/roadmap-bg-4.png",
  },
  {
    id: 5,
    name: "Force Shielder",
    description:
      "นักป้องกันที่มีความแข็งแกร่งสูงสุด สามารถป้องกันตนเองและเพื่อนร่วมทีมด้วยโล่พลังงาน เหมาะกับการเป็นแนวหน้าของทีมและดูดซับความเสียหาย",
    class: "Shielder",
    difficulty: "ปานกลาง",
    imgSrc: "/assets/characters/character_main_05.webp",
    symbolSrc: "/assets/characterSymbols/bt_character_mobile_05.webp",
    activeSymbolSrc:
      "/assets/characterSymbols/bt_character_mobile_active_05.webp",
    bgSrc: "/assets/images/roadmap-bg-4.png",
  },
  {
    id: 6,
    name: "Force Blader",
    description:
      "นักดาบที่ผสมผสานระหว่างพลังเวทและความว่องไวในการต่อสู้ สามารถสลับระหว่างการโจมตีระยะใกล้และระยะไกลได้อย่างคล่องแคล่ว ยากต่อการคาดเดา",
    class: "Force Blader",
    difficulty: "สูง",
    imgSrc: "/assets/characters/character_main_06.webp",
    symbolSrc: "/assets/characterSymbols/bt_character_mobile_06.webp",
    activeSymbolSrc:
      "/assets/characterSymbols/bt_character_mobile_active_06.webp",
    bgSrc: "/assets/images/roadmap-bg-4.png",
  },
  {
    id: 7,
    name: "Gladiator",
    description:
      "นักสู้ในสังเวียนที่เชี่ยวชาญการใช้อาวุธหนัก โจมตีด้วยพลังทำลายล้างสูง และมีความทนทานมากกว่านักรบทั่วไป เหมาะกับการบุกและกระจายความเสียหาย",
    class: "Gladiator",
    difficulty: "ต่ำ",
    imgSrc: "/assets/characters/character_main_07.webp",
    symbolSrc: "/assets/characterSymbols/bt_character_mobile_07.webp",
    activeSymbolSrc:
      "/assets/characterSymbols/bt_character_mobile_active_07.webp",
    bgSrc: "/assets/images/roadmap-bg-4.png",
  },
  {
    id: 8,
    name: "Force Gunner",
    description:
      "นักยิงปืนผู้เชี่ยวชาญอาวุธกลไกล้ำสมัย สามารถโจมตีได้อย่างรวดเร็วและต่อเนื่อง มีระยะการโจมตีที่ไกลและความแม่นยำสูง เหมาะกับการควบคุมจังหวะการต่อสู้",
    class: "Gunner",
    difficulty: "ปานกลาง",
    imgSrc: "/assets/characters/character_main_08.webp",
    symbolSrc: "/assets/characterSymbols/bt_character_mobile_08.webp",
    activeSymbolSrc:
      "/assets/characterSymbols/bt_character_mobile_active_08.webp",
    bgSrc: "/assets/images/roadmap-bg-4.png",
  },
  {
    id: 9,
    name: "Dark Mage",
    description:
      "จอมเวทย์แห่งความมืดผู้ควบคุมพลังอสูร สามารถสร้างคำสาปและเวทมนตร์มืดที่ทรงพลัง สามารถทำลายล้างศัตรูและสนับสนุนเพื่อนร่วมทีมด้วยพลังเวทมนตร์ที่น่ากลัว",
    class: "Dark Mage",
    difficulty: "สูง",
    imgSrc: "/assets/characters/character_main_09.webp",
    symbolSrc: "/assets/characterSymbols/bt_character_mobile_09.webp",
    activeSymbolSrc:
      "/assets/characterSymbols/bt_character_mobile_active_09.webp",
    bgSrc: "/assets/images/roadmap-bg-4.png",
  },
];

function Characters() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isAnimating) {
      if (touchStartX - touchEndX > 100) {
        // Swiped left
        handleNext();
      } else if (touchEndX - touchStartX > 100) {
        // Swiped right
        handlePrev();
      }
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % characters.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + characters.length) % characters.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleDotClick = (index: number) => {
    if (!isAnimating && index !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAnimating]);

  const activeCharacter = characters[activeIndex];

  // Calculate visible dots centered around the active dot
  const getVisibleDots = () => {
    const totalVisible = 3; // Changed from 5 to 3
    const middleIndex = Math.floor(totalVisible / 2); // 1 for 3 items

    // If we don't have enough characters to show on one side
    if (activeIndex < middleIndex) {
      // Active index is near the start
      return characters.slice(0, totalVisible);
    } else if (activeIndex >= characters.length - middleIndex) {
      // Active index is near the end
      return characters.slice(characters.length - totalVisible);
    } else {
      // Active index can be in the middle
      return characters.slice(
        activeIndex - middleIndex,
        activeIndex + middleIndex + 1
      );
    }
  };

  const visibleDots = getVisibleDots();

  return (
    <div className="relative w-full z-10">
      {/* Fancy Divider Top */}
      <div
        className="w-full h-[20px] bg-no-repeat bg-center z-10 relative"
        style={{
          backgroundImage: "url('/assets/images/stone-divider-top-max.jpeg')",
          filter: "drop-shadow(0px 15px 42px #000000)",
        }}
      />

      <section
        className="relative min-h-[calc(100vh-20px)] w-full py-16"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Stone Background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/assets/images/stone-bg-1000.avif')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          {/* Add an overlay for better readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Background Image - Animated */}
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="h-full w-full relative overflow-hidden">
              <img
                src={activeCharacter.symbolSrc}
                alt="Symbol Background"
                className="absolute lg:w-[20rem] md:w-[15rem] w-[12rem] h-full opacity-5 left-1/2 lg:top-1/2 md:top-[18rem] top-[15rem] -translate-x-1/2 -translate-y-1/2 scale-[2.5] object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="container relative z-10 mx-auto h-full flex flex-col">
          
          {/* Main Content */}
          <div className="flex-grow grid grid-cols-1 lg:flex lg:flex-row items-center">

            {/* Character Info - Left on desktop, under image on mobile */}
            <div className="character-info text-white order-2 lg:order-1 lg:w-1/4 mt-4 lg:mt-0 lg:pr-6 lg:px-0 md:px-4 px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h6 className="text-white/90 text-lg mb-3 leading-relaxed text-center lg:text-left">
                    เลือกตัวละครของคุณ
                  </h6>
                  <h1
                    className="text-5xl md:text-7xl font-bold mb-4 text-center lg:text-left font-['Bellefair'] uppercase"
                    style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
                  >
                    {activeCharacter.name}
                  </h1>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed text-center lg:text-left">
                    {activeCharacter.description}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <ButtonGlobal className="py-4 px-8">
                      ดูรายละเอียด
                    </ButtonGlobal>
                    <div className="flex items-center justify-center bg-card/90 rounded-full p-2 cursor-pointer shadow-lg shadow-primary/10 border border-border/40">
                      <Play
                        size={20}
                        className="text-[#A50905] hover:text-[#DD0707] transition-all duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Main Character Image - Center with flex-1 */}
            <div className="flex items-center justify-center relative px-4 lg:px-0 order-1 lg:order-2 lg:flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Character Image */}
                  <div className="character-image relative flex items-center justify-center h-[500px] md:h-[600px] lg:h-[800px] w-full overflow-visible">
                    <img
                      src={activeCharacter.imgSrc}
                      alt={activeCharacter.name}
                      style={{
                        maxHeight: "100%",
                        width: "auto",
                        objectFit: "contain",
                        filter: "drop-shadow(0 0 20px rgba(255,215,0,0.1))",
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Character dots navigation - Right on desktop, bottom on mobile */}
            <div className="order-3 lg:w-1/6">
              {/* Desktop vertical navigation */}
              <div className="hidden lg:flex flex-col items-end justify-center px-4">
                <div className="py-6 px-3 flex flex-col items-center gap-4 relative">
                  {/* Up arrow */}
                  <button
                    onClick={handlePrev}
                    className="absolute top-[-4] left-1/2 -translate-x-1/2 p-1 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white/70 hover:text-white"
                    aria-label="Previous character"
                  >
                    <ChevronUp size={20} />
                  </button>

                  {visibleDots.map((character, index) => {
                    const realIndex = characters.findIndex(
                      (c) => c.id === character.id
                    );
                    return (
                      <button
                        key={character.id}
                        onClick={() => handleDotClick(realIndex)}
                        className={`character-dot relative transition-all duration-300 ${
                          realIndex === activeIndex
                            ? "scale-125 z-10"
                            : "opacity-60 hover:opacity-80 hover:scale-110"
                        }`}
                        aria-label={`Select ${character.name}`}
                      >
                        <img
                          src={
                            realIndex === activeIndex
                              ? character.activeSymbolSrc
                              : character.symbolSrc
                          }
                          alt={character.name}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </button>
                    );
                  })}

                  {/* Down arrow */}
                  <button
                    onClick={handleNext}
                    className="absolute bottom-[-4] left-1/2 -translate-x-1/2 p-1 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white/70 hover:text-white"
                    aria-label="Next character"
                  >
                    <ChevronDown size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Character dots navigation for mobile - Horizontal at bottom */}
          <div className="character-navigation pt-8 relative z-20 lg:hidden">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 max-w-fit mx-auto">
              {/* Previous button for mobile */}
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white/70 hover:text-white cursor-pointer"
                aria-label="Previous character"
              >
                <ChevronLeft size={20} />
              </button>

              {visibleDots.map((character, index) => {
                const realIndex = characters.findIndex(
                  (c) => c.id === character.id
                );
                return (
                  <button
                    key={character.id}
                    onClick={() => handleDotClick(realIndex)}
                    className={`character-dot relative transition-all duration-300 ${
                      realIndex === activeIndex
                        ? "scale-125 z-10"
                        : "opacity-60 hover:opacity-80 hover:scale-110"
                    }`}
                    aria-label={`Select ${character.name}`}
                  >
                    <img
                      src={
                        realIndex === activeIndex
                          ? character.activeSymbolSrc
                          : character.symbolSrc
                      }
                      alt={character.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </button>
                );
              })}

              {/* Next button for mobile */}
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white/70 hover:text-white cursor-pointer"
                aria-label="Next character"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Fancy Divider Bottom */}
      <div
        className="w-full h-[20px] bg-no-repeat bg-center z-10 relative"
        style={{
          backgroundImage: "url('/assets/images/stone-divider-btm-max.jpeg')",
          filter: "drop-shadow(0px 15px 42px #000000)",
        }}
      />
    </div>
  );
}

export default Characters;
