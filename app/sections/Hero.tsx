import React from "react";
import { ChevronDown } from "lucide-react";
function Hero() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/assets/video/Mock_Teaser.mp4"
        ></video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-screen pb-8">
        <div className="text-center text-white mb-12">
          <div className="mb-6">
            <h3 className="text-xl md:text-3xl leading-16 font-semibold">
              สงความแห่งความเท่าเทียม
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              สู้กันด้วยศักดิ์ศรีชิงความเป็นหนึ่ง
            </h1>
          </div>
          <button className="bg-white text-black font-semibold px-12 py-4">เล่นตอนนี้</button>
        </div>
        <div className="text-center text-white">
          <p className="font-semibold mb-1">เลื่อนลงเพื่อดูเนื้อหา</p>
          <ChevronDown size={16} className="text-white text-center block mx-auto animate-bounce" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
