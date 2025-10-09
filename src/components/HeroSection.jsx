import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    // load tsparticles package
    await loadFull(engine);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-[#0F1426]  overflow-hidden   bg-[url('/home-hero-section-compressed.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" }, // keep transparent!
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.5,
            },
            move: { enable: true, speed: 2 },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Content */}
      <div className="relative z-10 custom-container">
        <div className="flex flex-col justify-center xl:min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-69px)] md:min-h-[calc(100vh-65px)] min-h-[calc(100vh-61px)]   py-10 ">
          <div className="lg:max-w-[548px] md:max-w-[450px] text-center lg:text-left text-white lg:mx-0 mx-auto  ">
            <h1 className="xl:text-6xl md:text-5xl text-4xl leading-tight mb-4">
              <span className="font-bold">ACE&nbsp;</span>Analytics
              <span className="block font-bold text-teal-400">
                Driving Innovation & Insights
              </span>
            </h1>
            <p className="lg:text-lg text-gray-400 mb-6">
              IT Consultancy, Software Development, R&D, and Electrical &
              Mechanical Services all under one roof.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="/services"
                className="bg-white text-[#1E4A82] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
              >
                Our Services
              </a>
              <a
                href="/contact-us"
                className="bg-transparent border font-semibold border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1E4A82] transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
