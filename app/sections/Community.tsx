"use client";

import ButtonTheme from "@/components/ButtonTheme";
import React from "react";
import Image from "next/image";

function Community() {
  return (
    <>
      {/* Texture Background Section */}
      <section
        className="texture-background relative bg-no-repeat bg-center bg-cover"
        style={{
          background: `url("/assets/images/background-YKbNkRZLb8iBbNZ1.avif")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Desktop Background Overlay */}
        <div 
          className="absolute inset-0 hidden lg:block bg-no-repeat bg-center bg-cover"
        />

        {/* Social Section */}
        <div
          id="social"
          className="relative h-[700px] flex items-end justify-center pb-16 bg-no-repeat bg-center z-10"
        >
          {/* Community Content */}
          <div className="community-content relative z-10 flex flex-col items-center justify-center">
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
          </div>
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
