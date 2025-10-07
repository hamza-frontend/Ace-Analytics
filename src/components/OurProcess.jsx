import React from "react";

const features = [
  {
    title: "Get a Number or Bring Your Own",
    description:
      "Call and message anyone, anywhere in the world. Make cross-border communication easier.",
  },
  {
    title: "Start Using Ease",
    description:
      "Call and message anyone, anywhere in the world. Make cross-border communication easier.",
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
            Growing Your <br />
            Business
          </h2>
          <p className="text-gray-400 mb-10">
            Break down departmental data silos to empower solutions across your
            entire enterprise. Discover the value of data unity.
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
