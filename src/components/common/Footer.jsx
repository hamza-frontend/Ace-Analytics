import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Heart,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
    // Add your subscription logic here
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { to: "/", id: "home", label: "Home" },
    {
      to: "/services",
      label: "Services",
      id: "our-services",
      dropdown: [
        { to: "/services/it-consultancy", label: "IT Consultancy" },

        { to: "/services/software-development", label: "Software Development" },
        {
          to: "/services/electrical-mechanical",
          label: "Electrical & Mechanical",
          dropdown: [
            {
              to: "/services/electrical-mechanical/generators",
              label: "Generators",
            },
            { to: "/services/electrical-mechanical/signals", label: "Signals" },
            { to: "/services/electrical-mechanical/pcb's", label: "PCB’s" },
          ],
        },
        { to: "/services/r&d-consulting", label: "R&D & Consulting" },
      ],
    },
    { to: "/about-us", id: "about-us", label: "About Us" },
    { to: "/projects", id: "projects", label: "Projects" },
    { to: "/contact-us", id: "contact-us", label: "Contact Us" },
  ];

  return (
    <footer className="relative bg-[#0F1426] text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10   custom-container  py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="xl:col-span-2">
            <div className="mb-6">
              <img
                src="/logo-ace.png"
                alt="Logo"
                className="h-10 w-[220px] md:mx-0 mx-auto"
              />
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-2 rounded-full md:mx-0 mx-auto"></div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed md:text-left text-center">
              IT Consultancy, Software Development, R&D, and Electrical &
              Mechanical Services all under one roof.
            </p>

            {/* Social Links */}
            <div className="flex md:justify-start justify-center space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group relative text-white p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  {Icon && (
                    <Icon className="h-5 w-5 group-hover:text-white transition-colors duration-300" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-lg font-semibold mb-6 text-white md:text-left text-center">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks
                .filter((item) => item.id !== "our-services") // exclude services
                .map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.to}
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex md:justify-start justify-center items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-teal-400 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Services */}
          <div className="whitespace-nowrap">
            <h3 className="md:text-left text-center text-lg font-semibold mb-6 text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {navLinks
                .find((item) => item.id === "our-services") // find services
                ?.dropdown.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.to}
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex md:justify-start justify-center items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-teal-400 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                      {service.label}
                    </a>

                    {/* Nested dropdown for Electrical & Mechanical */}
                    {service.dropdown && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {service.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.to}
                              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex md:justify-start justify-center items-center group"
                            >
                              <span className="w-0 group-hover:w-2 h-px bg-teal-400 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="xl:col-span-2">
            <h3 className="md:text-left text-center text-lg font-semibold mb-6 text-white">
              Stay Connected
            </h3>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <div className="relative md:mx-0 mx-auto  w-[346px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSubscribe(e);
                    }
                  }}
                />
                <button
                  onClick={handleSubscribe}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-1.5 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {[
                {
                  icon: Mail,
                  text: "hello@yourbrand.com",
                  href: "mailto:hello@yourbrand.com",
                },
                {
                  icon: Phone,
                  text: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                },
                { icon: MapPin, text: "New York, NY 10001", href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex md:justify-start justify-center items-center text-gray-400 hover:text-teal-400 transition-colors duration-300 group"
                >
                  {Icon && (
                    <Icon className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  )}
                  <span className="text-sm">{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>© 2024 ACE Analytics</span>
              <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" />
              <span>All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="cursor-pointer z-10 absolute md:right-8 right-2 top-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
      </button>
    </footer>
  );
}
