import React from "react";

export default function HeroSection() {
  return (
    <section id="home" className=" bg-[#0F1426] text-white">
      <div className=" custom-container  py-20 md:py-28">
        {/* Text content */}
        <div className="lg:max-w-[548px] md:max-w-[400px] text-center md:text-left">
          <h1 className="text-6xl  leading-tight mb-4">
            <span className="font-bold">ACE&nbsp;</span>Analytics
            <span className="block font-bold text-teal-400">
              Driving Innovation & Insights
            </span>
          </h1>
          <p className="text-lg  text-gray-100 mb-6">
            IT Consultancy, Software Development, R&D, and Electrical &
            Mechanical Services — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/services"
              className="bg-white text-[#1E4A82] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Our Services
            </a>
            <a
              href="/contact-us"
              className="bg-transparent border font-semibold border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1E4A82] transition" 
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right side illustration */}
        <img
          src="/hero.png"
          alt="Hero"
          className="md:block hidden absolute xl:top-20 lg:top-26 top-36 right-0 xl:w-120 lg:w-100 w-80"
        />
      </div>
    </section>
  );
}
