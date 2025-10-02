import { Heart, Lightbulb, Target } from "lucide-react";
import React from "react";

const OurValues = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer First",
      description: "Your success is our priority",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Collaboration",
      description: "We work together to achieve more",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "Quality in everything we deliver",
    },
  ];
  return (
    <div className=" py-24">
      <div className="custom-container">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#0F1426] rounded-xl p-8 border border-gray-800 hover:border-teal-400 transition-colors duration-300"
            >
              <div className="text-teal-400 mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
