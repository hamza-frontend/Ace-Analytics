import HeroSection from "@/components/common/HeroSection";
import OurProjects from "@/components/OurProjects";
import React from "react";

export default function Projects() {
  return (
    <>
      <HeroSection
        title={"Our Projects"}
        description={
          "A selection of our latest projects across different categories. Explore our creative and technical expertise."
        }
        banner="bg-[url('/projects-banner.png')] bg-cover bg-center bg-no-repeat"
      />
      <OurProjects />
    </>
  );
}
