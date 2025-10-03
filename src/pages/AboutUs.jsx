import React from "react";
import OurAchievements from "@/components/OurAchievements";
import OurValues from "@/components/ourValues";
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
        description=" We are a trusted partner in IT Consultancy, Software Development, R&D,
          and Electrical & Mechanical services. With years of expertise, we
          deliver innovative solutions tailored to your business growth."
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
