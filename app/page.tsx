import Hero from "@/app/sections/Hero";
import LatestNews from "@/app/sections/LatestNews";
import Roadmap from "@/app/sections/Roadmap";
import StoryTelling from "@/app/sections/StoryTelling";
import Characters from "@/app/sections/Characters";
import Community from "@/app/sections/Community";

function page() {
  return (
    <>
      <Hero />
      <LatestNews />
      <Roadmap />
      <StoryTelling />
      <Characters />
      <Community />
    </>
  );
}

export default page;
