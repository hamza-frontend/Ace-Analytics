import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroSection = ({ title, description, banner }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className={`relative bg-[#0F1426] overflow-hidden ${banner} `}>
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" }, // keep it transparent
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
        <div className="flex flex-col justify-center xl:min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-69px)] md:min-h-[calc(100vh-65px)] min-h-[calc(100vh-61px)] py-10 ">
          <div className="lg:max-w-[548px] md:max-w-[450px] text-center lg:text-left text-white lg:mx-0 mx-auto ">
            <h1 className="xl:text-6xl md:text-5xl text-4xl leading-tight mb-4">
              {title}
            </h1>

            <p className="lg:text-lg text-gray-400 mb-6">{description}</p>

            <div className="mx-auto lg:mx-0">
              <a
                href="/contact-us"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
