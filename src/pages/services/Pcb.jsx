// pages/PCBs.jsx
import HeroSection from "@/components/common/HeroSection";
import RevenueSection from "@/components/Revenue";
import React from "react";

export default function Pcb() {
  return (
    <div className="bg-[#0F1426] text-white">
      {/* Hero Section */}
      <HeroSection
        title={"High-Quality PCB Design & Manufacturing"}
        description={
          "From prototyping to mass production, we provide end-to-end PCB design, fabrication, and assembly services that power modern electronic devices."
        }
        banner="bg-[url('/services-page-banner.png')] bg-cover bg-center bg-no-repeat"
      />

      {/* About PCBs */}
      <section className="py-16 custom-container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            About Our PCB Expertise
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Our team specializes in designing and manufacturing Printed Circuit
            Boards (PCBs) for a wide range of applications — from consumer
            electronics to industrial systems. With precision engineering and
            advanced fabrication techniques, we ensure durability, reliability,
            and performance.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Whether it’s a simple single-layer board or a complex multi-layer
            design, we provide solutions tailored to your technical and business
            requirements.
          </p>
        </div>
        <img src="/about-us.jpg" alt="About PCBs" className="rounded-lg lg:max-w-[400px] ml-auto" />
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="custom-container text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Why Choose Our PCB Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Precision & Quality",
                desc: "We use advanced fabrication methods to ensure your PCBs meet the highest industry standards.",
              },
              {
                title: "Custom Designs",
                desc: "Our engineers design boards that perfectly match your product’s requirements and applications.",
              },
              {
                title: "End-to-End Service",
                desc: "From design to assembly, we provide a complete PCB lifecycle solution under one roof.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border border-gray-700 rounded-xl hover:border-teal-400 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 custom-container">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our PCB Development Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Requirement Gathering",
            "PCB Design & Simulation",
            "Fabrication & Assembly",
            "Testing & Quality Assurance",
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-lg border border-gray-700 hover:border-teal-400 transition"
            >
              <div className="w-12 h-12 bg-gradient-to-tr from-cyan-400 to-blue-600 mx-auto rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue / CTA */}
      <RevenueSection />
    </div>
  );
}
