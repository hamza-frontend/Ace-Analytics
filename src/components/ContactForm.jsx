import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Map from "./Map";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // You can integrate email service or API here
  };

  return (
    <section id="contact-us" className="bg-[#0F1426] text-white py-20">
      <div className="custom-container grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Form */}
        <div>
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-center md:text-left">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-10 text-center md:text-left max-w-lg">
            Have a project in mind or need expert consultation? Fill out the
            form below, we’d love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={
                    field === "name"
                      ? "Your Name"
                      : field === "email"
                      ? "Your Email"
                      : "Subject"
                  }
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            ))}

            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 resize-none"
                required
              />
            </div>

            <div className="text-center md:text-left">
              <button
                type="submit"
                className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right: Map + Contact Info in One Card */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
          {/* Contact Info */}
          <div className="p-6 border-b border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact Us Manually
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <Mail className="text-teal-400" size={20} />
                <Link
                  to={"mailto:info@theaceanalytics.com"}
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  info@theaceanalytics.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal-400" size={20} />
                <Link
                  to={"tel:051-8893266-67"}
                  className="hover:text-teal-400 transition-colors duration-300 "
                >
                  051-8893266-67
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-teal-400" size={20} />
                <Link
                  to="https://maps.app.goo.gl/gWT2CcTopKCKBG839"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors duration-300 "
                >
                  <strong>Head Office</strong>
                  <br />
                  Main Naveed Shaheed Rd, Near MP Checkpost, Sonikote, Gilgit,
                  Gilgit Baltistan, Pakistan
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-teal-400" size={20} />
                <Link
                  to="https://maps.app.goo.gl/AdtNsPkk6qhCn4Pi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors duration-300 "
                >
                  <strong>Branch Office</strong>
                  <br />
                  Flat#04, 2nd Floor, Block C, Mid City Apartments, Near Fazaia
                  Colony, Rawalpindi, Expressway Islamabad
                </Link>
              </li>
            </ul>
          </div>
          {/* Map */}
          <div className=" w-full">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
