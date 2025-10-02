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
            Founded in 2010, we began with a simple mission: to help businesses
            thrive in the digital age. What started as a small team of
            passionate professionals has grown into a full-service company
            serving clients worldwide.
          </p>
          <p className="text-lg text-gray-400">
            Today, we combine cutting-edge technology with creative thinking to
            deliver solutions that drive real results. Our diverse team brings
            together expertise across multiple disciplines to tackle your
            toughest challenges.
          </p>
          <h2 className="text-3xl  font-semibold text-white ">Our Mission</h2>
          <p className="text-lg text-gray-400">
            To empower businesses of all sizes with innovative, scalable
            solutions that drive growth and create lasting value.
          </p>
          <h2 className="text-3xl  font-semibold text-white ">Our Vision</h2>
          <p className="text-lg text-gray-400">
            To be the most trusted partner for businesses seeking digital
            transformation and sustainable success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
