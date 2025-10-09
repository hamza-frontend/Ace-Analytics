// pages/Signals.jsx
import HeroSection from "@/components/common/HeroSection";
import RevenueSection from "@/components/Revenue";
import React from "react";

export default function Signals() {
  return (
    <div className="bg-[#0F1426] text-white">
      {/* Hero Section */}
      <HeroSection
        title={"Advanced Signals & Communication Systems"}
        description={
          "Delivering robust and reliable signal solutions for communication, safety, and monitoring  designed for industries, businesses, and infrastructure projects."
        }
        banner="bg-[url('/services-page-banner-compressed.png')] bg-cover bg-center bg-no-repeat"
      />

      {/* About Signals */}
      <section className="py-16 custom-container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            About Our Signal Solutions
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Our expertise in signal systems covers everything from communication
            networks to industrial safety signals. We ensure seamless
            connectivity, monitoring, and control across different environments
            and industries.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Whether it’s railway signaling, traffic management, or custom
            industrial communication systems, our solutions are tailored to
            provide efficiency, security, and long-term reliability.
          </p>
        </div>
        <img
          src="/about-us.jpg"
          alt="About Signals"
          className="rounded-lg lg:max-w-[400px] ml-auto"
        />
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="custom-container text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Why Choose Our Signals Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Reliable Communication",
                desc: "We design systems that ensure uninterrupted communication for critical operations.",
              },
              {
                title: "Safety First",
                desc: "Our signal solutions are engineered to maximize safety and compliance with industry standards.",
              },
              {
                title: "Custom-Built Systems",
                desc: "Every project is unique, we provide tailored signal infrastructure that meets your exact requirements.",
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
          Our Signals Project Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Requirement Analysis",
            "Design & Engineering",
            "Installation & Integration",
            "Testing & Maintenance",
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
