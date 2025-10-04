import AboutSection from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import OurProcess from "@/components/OurProcess";
import OurAchievements from "@/components/OurAchievements";
import OurServices from "../components/OurServices";
import RevenueSection from "@/components/Revenue";
import TestimonialCarousel from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <AboutSection />
      <OurServices />
      <OurAchievements />
      <OurProcess />
      <RevenueSection />
      <TestimonialCarousel />
      <ContactForm />
    </>
  );
}
