import React from "react";

const OurStory = () => {
  return (
    <div className="custom-container py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="about-us.jpg"
          alt="About Us"
          className="rounded-2xl w-[500px]"
        />
        <div className="space-y-2">
          <h2 className="text-3xl  font-semibold text-white ">Our Story</h2>
          <p className="text-lg text-gray-400">
            Founded in 2010, Ace Analytics began with a clear vision to redefine
            how businesses integrate technology and engineering for growth.
            <br /> What started as a small team of skilled engineers has grown
            into a multidisciplinary company delivering IT consultancy, software
            solutions, electrical and mechanical systems, and R&D services to
            clients across industries.
          </p>
          <p className="text-lg text-gray-400">
            Over the years, we have built our reputation on precision,
            innovation, and reliability, helping organizations streamline
            operations, enhance performance, and achieve measurable results.
          </p>
          <h2 className="text-3xl  font-semibold text-white ">Our Mission</h2>
          <p className="text-lg text-gray-400">
            To empower industries with integrated engineering and technology
            solutions that drive innovation, improve efficiency, and enable
            sustainable business growth.
          </p>
          <h2 className="text-3xl  font-semibold text-white ">Our Vision</h2>
          <p className="text-lg text-gray-400">
            To be a global leader in intelligent engineering and technology
            solutions, transforming ideas into impactful results through
            innovation, research, and collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
