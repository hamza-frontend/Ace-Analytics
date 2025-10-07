import React from "react";
import { Link } from "react-router-dom";

export default function RevenueSection() {
  return (
    <section className="bg-[#0F1426]  py-20">
      <div className="custom-container flex justify-center items-center">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-600 text-center rounded-lg md:px-20 px-4 md:py-12 py-4 max-w-3xl shadow-lg">
          <p className="uppercase text-xs font-medium text-white/80 tracking-widest mb-4">
            Works Together
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:leading-snug">
            We've Help Businesses <br /> Increase Revenue
          </h2>

          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto mb-8">
            But in certain circumstances and owing to the claims of duty or the
            obligations of business it will frequently
          </p>

          <Link
            to="/contact-us"
            className="cursor-pointer bg-white text-[#1E4A82] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Let’s Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}
