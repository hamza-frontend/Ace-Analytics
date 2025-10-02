import React from "react";

export default function OurAchievements() {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Team Members" },
  ];

  return (
    <section className="bg-[#0F1426] text-white py-20 relative">
      {/* Background line pattern */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 C200 100, 600 300, 800 200"
            stroke="white"
            strokeWidth="1"
            fill="transparent"
          />
        </svg>
      </div>

      <div className="relative z-10 custom-container text-center">
        <p className="uppercase text-sm tracking-wide text-gray-400">
          Key Achievements
        </p>
        <h2 className="text-3xl md:text-3xl font-bold mt-2 max-w-[587px] mx-auto">
          Consistently exceeding expectations across industries and regions.
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-teal-400">
                {stat.value}
              </span>
              <span className="mt-2 text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
