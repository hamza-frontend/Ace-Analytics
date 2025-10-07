import { useState } from "react";

const features = [
  {
    title: "IT Consultancy",
    description:
      "We provide expert IT consultancy to help businesses modernize their infrastructure and optimize digital performance. From system audits to tailored tech solutions, we ensure your technology aligns perfectly with your goals.",
    icon: "☁️",
    category: "IT",
  },
  {
    title: "Generators",
    description:
      "We supply, install, and maintain high performance generators designed to deliver uninterrupted power for industrial and commercial needs. Reliability and energy efficiency are at the core of our solutions.",
    icon: "☁️",
    category: "Electrical & Mechanical",
  },
  {
    title: "Signal",
    description:
      "Our signal systems are engineered for accuracy and durability, covering traffic, communication, and industrial signaling setups to enhance safety and control across applications.",
    icon: "🏢",
    category: "Electrical & Mechanical",
  },
  {
    title: "PCB’s",
    description:
      "We design and develop high quality Printed Circuit Boards (PCBs) that power a wide range of electronic systems, ensuring performance, precision, and long lasting reliability.",
    icon: "⚡",
    category: "Electrical & Mechanical",
  },
  {
    title: "Software Development",
    description:
      "We build custom software solutions tailored to your business needs web, mobile, or enterprise. Our team focuses on scalability, performance, and seamless user experience across every platform.",
    icon: "⚡",
    category: "Software",
  },
  {
    title: "R&D & Consulting",
    description:
      "Our R&D and Consulting services help organizations innovate and grow through research backed strategies. From concept validation to full scale development, we turn ideas into practical, high impact solutions.",
    icon: "⚡",
    category: "R&D & Consulting",
  },
];

const categories = [
  "All",
  "IT",
  "Electrical & Mechanical",
  "Software",
  "R&D & Consulting",
];

export default function OurServices() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFeatures =
    activeCategory === "All"
      ? features
      : features.filter((feature) => feature.category === activeCategory);

  return (
    <section className="bg-[#0F1426] py-16">
      <div className="custom-container">
        {/* Title */}
        <h2 className="text-white font-semibold text-center xl:text-5xl text-[42px] mb-12">
          Select a Service
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg  transition-all duration-300 cursor-pointer font-semibold ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-white">
          {filteredFeatures.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 transition-all duration-300 border border-gray-800 hover:border-teal-400 bg-transparent"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full mb-4 text-xl">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {feature.description}
              </p>
              <a
                href="/services"
                className="text-sm text-white hover:text-teal-400 font-medium inline-flex items-center group"
              >
                Learn More
                <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
