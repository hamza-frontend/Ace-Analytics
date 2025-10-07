import React from "react";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about-us" className="bg-[#0F1426] text-white py-16">
      <div className="custom-container">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center lg:space-x-0 md:space-x-8  md:space-y-0 space-y-16">
          {/* Left Column */}
          <img
            src="/about-us-2.jpg"
            alt="About Us"
            className="xl:max-w-[513px] xl:max-h-[446px] lg:max-w-[450px] lg:max-h-[400px] md:max-w-[380px] "
          />
          {/* Right Column */}
          <div>
            <div className="mb-4 lg:max-w-[440px] md:max-w-[350px] ">
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-2 md:text-left text-center">
                About Us
              </p>
              <h2 className="xl:text-5xl  lg:text-[42px] text-4xl font-bold mb-4 leading-tight md:text-left text-center">
                Manage Pure SQL <br className="hidden md:block" />
                Database Content
              </h2>
              <p className="text-gray-400 mb-6 md:text-left text-center">
                Unify your customer’s touch points across all platforms and
                channels.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-teal-400 font-medium hover:underline md:justify-start justify-center w-full"
              >
                Explore Segment for Engineering
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className=" lg:max-w-[440px] md:max-w-[300px]">
              <p className="lg:text-2xl text-xl font-medium mb-2 md:text-left text-center">
                These cases are perfectly simple and easy to distinguish.
              </p>
              <p className="text-gray-400 mb-8 md:text-left text-center">
                Segment collects user events from your web & mobile apps and
                provides a complete data toolkit to every team in your company.
              </p>
              <div className="flex md:justify-start justify-center space-x-10">
                <div>
                  <p className="text-teal-400 text-3xl font-bold">12</p>
                  <p className="text-gray-400 text-sm">Years of Experience</p>
                </div>
                <div>
                  <p className="text-teal-400 text-3xl font-bold">215+</p>
                  <p className="text-gray-400 text-sm">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
