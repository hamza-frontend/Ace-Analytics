import React from "react";

export default function TrustedBy() {
  const logos = [
    { src: "/client-1.png", alt: "Nust Logo" },
    { src: "/client-2.png", alt: "Pakistan Software Export Board Logo" },
    { src: "/client-1.png", alt: "Nust Logo" },
    { src: "/client-2.png", alt: "Pakistan Software Export Board Logo" },
    { src: "/client-1.png", alt: "Nust Logo" },
  ];

  // duplicate once for seamless loop
  const duplicated = logos.concat(logos);

  return (
    <section className="bg-[#0F1426] py-12 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {duplicated.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-10 mx-12 opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
}
