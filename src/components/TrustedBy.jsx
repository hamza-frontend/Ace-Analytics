import React from "react";

export default function TrustedBy() {
  const logos = [
    { src: "/bindo-pos.svg", alt: "Bindo POS" },
    { src: "/module-builder.svg", alt: "Module Builder" },
    { src: "/bindo-discovery.svg", alt: "Bindo Discovery" },
    { src: "/bindo-pos.svg", alt: "Bindo POS" },
    { src: "/module-builder.svg", alt: "Module Builder" },
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
