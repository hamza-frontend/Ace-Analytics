import React from "react";

const HeroSection = ({ title, description }) => {
  return (
    <section className="bg-[#0F1426]  py-40  ">
      <div className="custom-container text-center lg:text-left text-white ">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>

        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
          {description}
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
