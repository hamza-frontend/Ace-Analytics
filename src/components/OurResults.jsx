import React from "react";

export default function OurResults() {
  const stats = [
    { value: "$2M+", label: "In Managed Ad Spend" },
    { value: "3k+", label: "Custom Ecommerce Designs" },
    { value: "+81%", label: "Avg. Increase in Traffic YoY" },
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
          Our Results
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 max-w-[587px] mx-auto">
          We Built Engitech to Grow with You
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
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
