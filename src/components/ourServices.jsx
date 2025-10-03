import { useState } from "react";

const features = [
  {
    title: "IT Consultancy",
    description:
      "We are completely free and open-source, with 3M+ on-prem installs, 8k+ community members, and 300+ amazing contributors.",
    icon: "☁️",
    category: "IT",
  },
  {
    title: "Generators",
    description:
      "With over 8 thousand users, our self-service Cloud platform provides a dashboard for quickly spinning up fully-managed projects.",
    icon: "☁️",
    category: "Electrical & Mechanical",
  },
  {
    title: "Signal",
    description:
      "Take your business serverless with a modern API pipeline and code-free data exploration app, all powered by our tailored, enterprise-scale platform.",
    icon: "🏢",
    category: "Electrical & Mechanical",
  },
  {
    title: "PCB’s",
    description:
      "Providing expert electrical & mechanical services with modern tools and certified engineers.",
    icon: "⚡",
    category: "Electrical & Mechanical",
  },
  {
    title: "Software Development",
    description:
      "Providing expert electrical & mechanical services with modern tools and certified engineers.",
    icon: "⚡",
    category: "Software",
  },
  {
    title: "R&D & Consulting",
    description:
      "Providing expert electrical & mechanical services with modern tools and certified engineers.",
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
        <h2 className="text-white font-semibold text-center text-5xl mb-12">
          Select a Service
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
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
                href="#"
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
