// pages/RnDConsulting.jsx
import HeroSection from "@/components/common/HeroSection";
import RevenueSection from "@/components/Revenue";
import React from "react";

export default function RDConsulting() {
  return (
    <div className="bg-[#0F1426] text-white">
      {/* Hero Section */}
      <HeroSection
        title={"R&D and Consulting for Innovation-Driven Growth"}
        description={
          "We empower organizations with research-driven strategies, cutting-edge consulting, and forward-looking solutions that fuel innovation and long-term success."
        }
        banner="bg-[url('/services-page-banner-compressed.png')] bg-cover bg-center bg-no-repeat"
      />

      {/* About R&D & Consulting */}
      <section className="py-16 custom-container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            About Our R&D Expertise
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Our R&D and consulting services bridge the gap between business
            challenges and technology-driven solutions. By combining in-depth
            research with expert consulting, we help businesses stay ahead of
            the curve.
          </p>
          <p className="text-gray-400 leading-relaxed">
            From emerging technologies to process optimization, our team guides
            you through ideation, experimentation, and implementation ensuring
            every initiative creates measurable impact.
          </p>
        </div>
        <img
          src="/about-us.jpg"
          alt="About R&D and Consulting"
          className="rounded-lg lg:max-w-[400px] ml-auto"
        />
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="custom-container text-center">
          <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Innovation-First Approach",
                desc: "We help you identify new opportunities and design creative solutions backed by research.",
              },
              {
                title: "Strategic Insights",
                desc: "Our consultants provide actionable insights tailored to your industry and business goals.",
              },
              {
                title: "End-to-End Support",
                desc: "From concept to execution, we guide you every step of the way with measurable results.",
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

      {/* Our R&D Process */}
      <section className="py-16 custom-container">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our R&D & Consulting Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Research & Analysis",
            "Strategy Development",
            "Prototyping & Experimentation",
            "Implementation & Review",
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

      {/* Revenue Section */}
      <RevenueSection />
    </div>
  );
}
