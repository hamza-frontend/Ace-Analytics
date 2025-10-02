import React from "react";
import { Headphones, Users, Wrench } from "lucide-react"; // icons

const reputationData = [
  {
    icon: <Headphones className="w-10 h-10 text-orange-500 mb-4" />,
    title: "Best Services",
    description: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-orange-500 mb-4" />, // can be changed
    title: "Best Teams",
    description: "Cursus semper tellus volutpat aliquet lacus.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-orange-500 mb-4" />,
    title: "Best Designs",
    description: "Ultricies at ipsum nunc, tristique nam lectus.",
  },
];

export default function ReputationSection() {
  return (
    <section className="custom-container py-12 ">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Our Reputation
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reputationData.map((item, index) => (
          <div
            key={index}
            className="border  [border-image:linear-gradient(to_right,#3b82f6,#a855f7,#ec4899)_1] rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
          >
            {item.icon}
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
