import React from "react";
import Hero from "@/app/sections/Hero";
import LatestNews from "@/app/sections/LatestNews";
import Roadmap from "@/app/sections/Roadmap";

function page() {
  return (
    <>
      <Hero />
      <LatestNews />
      <Roadmap />
    </>
  );
}

export default page;
