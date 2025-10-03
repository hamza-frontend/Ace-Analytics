import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

const HeroSection = ({ title, description, banner }) => {
  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);

  return (
    <section
      className={`relative bg-[#0F1426] py-40 overflow-hidden ${banner}`}
    >
      {/* Background Particles */}
      {/* <Particles
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
      /> */}

      {/* Content */}
      <div className="relative z-10 custom-container text-center lg:text-left text-white">
        <div className="max-w-[580px]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
            {description}
          </p>

          <div className="mt-8">
            <a
              href="/contact-us"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
