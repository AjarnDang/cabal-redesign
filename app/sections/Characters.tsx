import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Characters() {
  return (
    <section className="relative h-[1013px] py-16 flex items-center bg-[0_center] z-[6]">
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
  );
}

export default Characters;
