// pages/SoftwareDevelopment.jsx
import HeroSection from "@/components/common/HeroSection";
import RevenueSection from "@/components/Revenue";
import React from "react";

export default function SoftwareDevelopment() {
  return (
    <div className="bg-[#0F1426] text-white">
      {/* Hero Section */}
      <HeroSection
        title={"Custom Software Development for Growing Businesses"}
        description={
          "We design and build scalable, secure, and future-ready software solutions that empower your business to innovate, streamline operations, and deliver value faster."
        }
        banner="bg-[url('/projects-banner.png')] bg-cover bg-center bg-no-repeat"
      />

      {/* About Software Development */}
      <section className="py-16 custom-container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            About Our Software Solutions
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Our software development team specializes in creating tailor-made
            solutions that solve real business problems. From web and mobile
            apps to enterprise-grade platforms, we ensure your technology grows
            with your ambitions.
          </p>
          <p className="text-gray-400 leading-relaxed">
            With an agile-driven approach, we collaborate closely with your team
            to deliver reliable, user-friendly, and high-performance products
            that give you a competitive edge.
          </p>
        </div>
        <img
          src="/about-it-consultancy.jpg"
          alt="About Software Development"
          className="rounded-lg"
        />
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="custom-container text-center">
          <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Custom-Built Solutions",
                desc: "Every product we deliver is uniquely designed to fit your goals, workflows, and market needs.",
              },
              {
                title: "Agile & Transparent",
                desc: "We follow agile methodologies, keeping you in the loop with every iteration and milestone.",
              },
              {
                title: "Cutting-Edge Technology",
                desc: "We leverage the latest frameworks, cloud, and DevOps practices to future-proof your software.",
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

      {/* Our Development Process */}
      <section className="py-16 custom-container">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Development Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Requirement Analysis",
            "UI/UX Design",
            "Development & Testing",
            "Deployment & Support",
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
