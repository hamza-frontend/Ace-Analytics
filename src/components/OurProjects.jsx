import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "IT Consultancy",
    category: "IT",
    image:
      "https://egh.net.au/wp-content/uploads/2023/10/generator-maintenance-1.jpg",
  },
  {
    id: 2,
    title: "Generators",
    category: "Electrical & Mechanical",
    image:
      "https://egh.net.au/wp-content/uploads/2023/10/generator-maintenance-1.jpg",
  },
  {
    id: 3,
    title: "Signal",
    category: "Electrical & Mechanical",
    image:
      "https://egh.net.au/wp-content/uploads/2023/10/generator-maintenance-1.jpg",
  },
  {
    id: 4,
    title: "PCB’s",
    category: "Electrical & Mechanical",
    image:
      "https://egh.net.au/wp-content/uploads/2023/10/generator-maintenance-1.jpg",
  },
  {
    id: 5,
    title: "Software Development",
    category: "Software",
    image:
      "https://egh.net.au/wp-content/uploads/2023/10/generator-maintenance-1.jpg",
  },
  {
    id: 6,
    title: "R&D & Consulting",
    category: "R&D & Consulting",
    image:
      "https://egh.net.au/wp-content/uploads/2023/10/generator-maintenance-1.jpg",
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
              className={`px-5 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
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
            <div
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
                <span className="inline-block text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-md">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
