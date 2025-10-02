import HeroSection from "@/components/common/HeroSection";
import OurServices from "@/components/ourServices";
import React from "react";

const Services = () => {
  return (
    <>
      <HeroSection
        title={"Our Services"}
        description={
          " We are a trusted partner in IT Consultancy, Software Development, R&D, and Electrical & Mechanical services. With years of expertise, we deliver innovative solutions tailored to your business growth."
        }
      />
      <OurServices />
    </>
  );
};

export default Services;
