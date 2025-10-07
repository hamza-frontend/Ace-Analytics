import React from "react";

const features = [
  {
    title: "Project Consultation and Analysis",
    description:
      "We begin by understanding your business goals and technical challenges to design efficient and practical strategies.",
  },
  {
    title: "Design and Development",
    description:
      "Our team engineers reliable electrical and mechanical systems, develops scalable software, and provides R&D consulting tailored to your needs.",
  },
  {
    title: "Implementation and Optimization",
    description:
      "We integrate and refine every solution to ensure seamless performance, long-term stability, and measurable results.",
  },
];
export default function OurProcess() {
  return (
    <section className="bg-[#0F1426] text-white py-12 ">
      <div className="custom-container flex md:flex-row flex-col justify-between lg:space-x-0 md:space-x-8 md:space-y-0 space-y-16 items-center">
        <div className="lg:max-w-[440px] md:max-w-[350px] ">
          <p className="text-sm uppercase text-gray-400 mb-2">Our Process</p>
          <h2 className="xl:text-5xl  lg:text-[42px] text-4xl  font-semibold leading-tight mb-4">
            Proven Process for <br />
            Delivering Smart Solutions
          </h2>
          <p className="text-gray-400 mb-10">
            We combine engineering expertise, technology innovation, and R&D
            consulting to build solutions that drive business growth and
            operational excellence. Experience the power of connected systems.
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src="/check-circle.svg"
                  alt="Check Circle"
                  className="w-6 h-6  mt-1"
                />
                <div>
                  <h3 className="font-medium text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/our-process.png"
          alt="Our Process"
          className="lg:max-w-max md:max-w-[330px]"
        />
      </div>
    </section>
  );
}
