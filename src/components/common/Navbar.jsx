import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", id: "home", label: "Home" },
  {
    to: "/services",
    label: "Services",
    id: "our-services",
    dropdown: [
      { to: "/services/it-consultancy", label: "IT Consultancy" },
      {
        to: "/services/electrical-mechanical/generators",
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
      { to: "/services/software-development", label: "Software Development" },
      { to: "/services/r&d-consulting", label: "R&D & Consulting" },
    ],
  },
  { to: "/about-us", id: "about-us", label: "About Us" },
  { to: "/projects", id: "projects", label: "Projects" },
  { to: "/contact-us", id: "contact-us", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({});

  const toggleMobileDropdown = (label) => {
    setMobileDropdown((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header className="bg-[#181B2A] shadow-sm sticky top-0 z-50">
      <div className="custom-container flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/">
          <img src="/logo-ace.png" alt="Logo" className="w-[285px] h-[45px]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.to} className="relative group">
                <Link
                  to={link.to}
                  className="text-white hover:text-teal-400 font-semibold"
                >
                  {link.label}
                </Link>
                {/* Level 1 Dropdown */}
                <div className="absolute left-0 mt-3 w-56 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-xl shadow-lg border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  {link.dropdown.map((item) =>
                    item.dropdown ? (
                      <div key={item.to} className="relative group/sub">
                        <Link
                          to={item.to}
                          className="flex justify-between items-center px-5 py-3 text-sm text-gray-200 hover:bg-[#00FAD6]/10 hover:text-teal-400 transition rounded-md"
                        >
                          {item.label}
                          <span className="ml-2">▶</span>
                        </Link>
                        {/* Submenu (flyout) */}
                        <div className="absolute right-full top-0 ml-2 w-56 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-xl shadow-lg border border-gray-700 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              className="block px-5 py-3 text-sm text-gray-200 hover:bg-[#00FAD6]/10 hover:text-teal-400 transition rounded-md"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-5 py-3 text-sm text-gray-200 hover:bg-[#00FAD6]/10 hover:text-teal-400 transition rounded-md"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <>
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white hover:text-teal-400 font-semibold cursor-pointer"
                  // onClick={() =>
                  //   document.getElementById(link.id).scrollIntoView({
                  //     behavior: "smooth",
                  //   })
                  // }
                >
                  {link.label}
                </Link>
              </>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-sm">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.to}>
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="w-full text-left text-black font-semibold hover:text-primary"
                  >
                    {link.label}
                  </button>
                  {mobileDropdown[link.label] && (
                    <div className="pl-4 mt-2 space-y-1">
                      {link.dropdown.map((item) =>
                        item.dropdown ? (
                          <div key={item.to}>
                            <button
                              onClick={() => toggleMobileDropdown(item.label)}
                              className="w-full text-left text-gray-700 hover:text-primary"
                            >
                              {item.label}
                            </button>
                            {mobileDropdown[item.label] && (
                              <div className="pl-4 mt-2 space-y-1">
                                {item.dropdown.map((sub) => (
                                  <Link
                                    key={sub.to}
                                    to={sub.to}
                                    className="block text-gray-600 hover:text-primary"
                                    onClick={() => setOpen(false)}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block text-gray-700 hover:text-primary"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-black font-semibold hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
