import React, { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "IT Consultancy",
    category: "IT",
    image: "/service-1.jpeg",
    description:
      "We deliver expert IT consultancy to help businesses optimize their digital infrastructure and performance. Our goal is to align technology with your strategic objectives for maximum efficiency.",
  },
  {
    id: 2,
    title: "Generators",
    category: "Electrical & Mechanical",
    image:
      "https://egh.net.au/wp-content/uploads/2023/10/generator-maintenance-1.jpg",
    description:
      "We provide installation, maintenance, and support for high-performance generators, ensuring consistent power supply and energy reliability for industrial and commercial operations.",
  },
  {
    id: 3,
    title: "Signal",
    category: "Electrical & Mechanical",
    image: "/service-2.jpeg",
    description:
      "Our signal systems are designed for precision and durability, covering traffic, industrial, and communication applications to enhance operational safety and control.",
  },
  {
    id: 4,
    title: "PCB’s",
    category: "Electrical & Mechanical",
    image: "/service-5.jpeg",
    description:
      "We design and develop high-quality printed circuit boards tailored for performance and durability, powering a wide range of electronic and industrial systems.",
  },
  {
    id: 5,
    title: "Software Development",
    category: "Software",
    image: "/service-6.jpeg",
    description:
      "We create scalable, high-performance software solutions tailored to your business needs. From web to mobile, our focus is on seamless functionality and exceptional user experience.",
  },
  {
    id: 6,
    title: "R&D & Consulting",
    category: "R&D & Consulting",
    image: "/service-8.jpeg",
    description:
      "Our R&D and consulting services help businesses innovate through research-driven strategies. We transform ideas into impactful, market-ready solutions with measurable results.",
  },
];

const categories = [
  "All",
  "IT",
  "Electrical & Mechanical",
  "Software",
  "R&D & Consulting",
];

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
  return (
    <section className="bg-[#0F1426] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of our latest projects across different categories.
            Explore our creative and technical expertise.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-lg transition-all duration-300 cursor-pointer  font-semibold ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              to={"https://www.google.com"}
              key={project.id}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>
                <span className="inline-block text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-md">
                  {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
