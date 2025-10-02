import AboutSection from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import OurProcess from "@/components/OurProcess";
import OurResults from "@/components/OurResults";
import OurServices from "@/components/ourServices";
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
      <OurResults />
      <OurProcess />
      <RevenueSection />
      <TestimonialCarousel/>
      <ContactUs />
    </>
  );
}
