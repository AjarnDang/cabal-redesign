import React from "react";
import Hero from "@/app/sections/Hero";
import LatestNews from "@/app/sections/LatestNews";
import Roadmap from "@/app/sections/Roadmap";
import StoryTelling from "@/app/sections/StoryTelling";

function page() {
  return (
    <>
      <Hero />
      <LatestNews />
      <Roadmap />
      <StoryTelling />
    </>
  );
}

export default page;
