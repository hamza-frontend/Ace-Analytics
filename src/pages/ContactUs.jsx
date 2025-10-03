import HeroSection from "@/components/common/HeroSection";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <HeroSection
        title="Contact Us"
        description="We are here to assist you. Reach out to us for any inquiries, support, or collaboration opportunities. Your success is our priority."
        banner="bg-[url('/about-us-hero.png')] bg-cover bg-center bg-no-repeat"
      />
      <ContactForm />
      <Map />
    </>
  );
};

export default ContactUs;
