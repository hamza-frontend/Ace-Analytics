import React from "react";

const Map = () => {
  return (
    <section className="py-20 bg-[#0F1426]">
      <div className="custom-container rounded-lg">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509366!2d144.9537363153187!3d-37.81627974202153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0a4c9%3A0x5045675218ce7e0!2sVictoria%2C%20Australia!5e0!3m2!1sen!2s!4v1614652361055!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "400px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
