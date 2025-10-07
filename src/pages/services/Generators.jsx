// pages/Generators.jsx
import HeroSection from "@/components/common/HeroSection";
import RevenueSection from "@/components/Revenue";
import React from "react";

export default function Generators() {
  return (
    <div className="bg-[#0F1426] text-white">
      {/* Hero Section */}
      <HeroSection
        title={"Reliable Generators & Power Solutions"}
        description={
          "Providing cutting-edge generator solutions that ensure uninterrupted power for industries, businesses, and residential needs — backed by expert consulting and support."
        }
        banner="bg-[url('/services-page-banner.png')] bg-cover bg-center bg-no-repeat"
      />

      {/* About Generators */}
      <section className="py-16 custom-container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Our Solutions</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Our generator services cover the full spectrum of power solutions —
            from supply and installation to maintenance and consulting. Whether
            for large-scale industries, businesses, or emergency backup systems,
            we deliver reliable and efficient power infrastructure.
          </p>
          <p className="text-gray-400 leading-relaxed">
            With a focus on performance, sustainability, and innovation, we
            ensure that your power systems are not only dependable but also
            optimized for long-term efficiency.
          </p>
        </div>
        <img
          src="/about-generators.jpg"
          alt="About Generators"
          className="rounded-lg"
        />
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="custom-container text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Why Choose Our Generators
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Reliable Power",
                desc: "We provide top-quality generators that deliver consistent performance under any conditions.",
              },
              {
                title: "Expert Installation",
                desc: "Our specialists handle everything from setup to testing, ensuring a smooth and reliable operation.",
              },
              {
                title: "Ongoing Maintenance",
                desc: "We offer continuous support and maintenance services to keep your systems running without interruption.",
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
          Our Generator Supply & Service Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Needs Assessment",
            "Supply & Installation",
            "Testing & Optimization",
            "Maintenance & Support",
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

      {/* Revenue / Call to Action */}
      <RevenueSection />
    </div>
  );
}
