import React from "react";
import OurAchievements from "@/components/OurAchievements";
import OurValues from "@/components/OurValues";
import RevenueSection from "@/components/Revenue";
import OurStory from "@/components/OurStory";
import OurProcess from "@/components/OurProcess";
import TestimonialCarousel from "@/components/Testimonials";
import HeroSection from "@/components/common/HeroSection";

export default function AboutUs() {
  return (
    <div className=" bg-[#0F1426]">
      {/* Hero Section */}
      <HeroSection
        title="About us"
        description="We are a trusted technology and engineering partner specializing in IT Consultancy, Software Development, R&D, and Electrical & Mechanical services. At Ace Analytics, we create innovative solutions that drive growth and lasting impact."
        banner="bg-[url('/about-us-hero.png')] bg-cover bg-center bg-no-repeat"
      />
      <OurStory />
      <OurProcess />
      <OurValues />
      <OurAchievements />
      <TestimonialCarousel />
      <RevenueSection />
    </div>
  );
}
