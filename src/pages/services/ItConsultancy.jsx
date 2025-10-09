// pages/ITConsultancy.jsx
import HeroSection from "@/components/common/HeroSection";
import RevenueSection from "@/components/Revenue";
import React from "react";

export default function ITConsultancy() {
  return (
    <div className="bg-[#0F1426]  text-white">
      {/* Hero Section */}
      <HeroSection
        title={" IT Consultancy for Modern Businesses"}
        description={
          "Empowering organizations with strategic IT guidance, cutting-edge solutions, and expert insights to help you achieve your business goals with confidence."
        }
        banner="bg-[url('/services-page-banner-compressed.png')] bg-cover bg-center bg-no-repeat"
      />

      {/* About IT Consultancy */}
      <section className="py-16 custom-container grid md:grid-cols-2  gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Our Expertise</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Our IT consultancy team brings years of experience in solving
            real-world business challenges with innovative technology solutions.
            From digital transformation to cloud adoption, we help you navigate
            complex decisions with clarity and efficiency.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We work closely with your team to evaluate your current IT
            infrastructure, identify gaps, and design future-ready strategies
            that align with your objectives.
          </p>
        </div>
        <img
          src="/about-us.jpg"
          alt="About IT Consultancy"
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
                title: "Proven Expertise",
                desc: "Our consultants have worked across industries and bring proven methodologies to every project.",
              },
              {
                title: "Tailored Strategies",
                desc: "We don’t believe in one-size-fits-all, every plan is customized for your unique business goals.",
              },
              {
                title: "Future-Ready Solutions",
                desc: "We ensure your IT infrastructure scales with your growth and keeps you ahead of the competition.",
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
          Our Consultancy Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Assessment & Discovery",
            "Strategy & Roadmap",
            "Implementation Support",
            "Continuous Improvement",
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
      <RevenueSection />
    </div>
  );
}
