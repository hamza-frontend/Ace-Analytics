// components/FeatureCards.jsx
const features = [
  {
    title: "Open-Source Platform",
    description:
      "We are completely free and open-source, with 3M+ on-prem installs, 8k+ community members, and 300+ amazing contributors.",
    icon: "💠", // Placeholder for icon
    highlighted: true,
  },
  {
    title: "On-Demand Cloud",
    description:
      "With over 8 thousand users, our self-service Cloud platform provides a dashboard for quickly spinning up fully-managed projects.",
    icon: "☁️",
    highlighted: false,
  },
  {
    title: "Enterprise Cloud",
    description:
      "Take your business serverless with a modern API pipeline and code-free data exploration app, all powered by our tailored, enterprise-scale platform.",
    icon: "🏢",
    highlighted: false,
  },
  {
    title: "Open-Source Platform",
    description:
      "We are completely free and open-source, with 3M+ on-prem installs, 8k+ community members, and 300+ amazing contributors.",
    icon: "💠", // Placeholder for icon
    highlighted: true,
  },
  {
    title: "Open-Source Platform",
    description:
      "We are completely free and open-source, with 3M+ on-prem installs, 8k+ community members, and 300+ amazing contributors.",
    icon: "💠", // Placeholder for icon
    highlighted: true,
  },
  {
    title: "Open-Source Platform",
    description:
      "We are completely free and open-source, with 3M+ on-prem installs, 8k+ community members, and 300+ amazing contributors.",
    icon: "💠", // Placeholder for icon
    highlighted: true,
  },
  {
    title: "Open-Source Platform",
    description:
      "We are completely free and open-source, with 3M+ on-prem installs, 8k+ community members, and 300+ amazing contributors.",
    icon: "💠", // Placeholder for icon
    highlighted: true,
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#0F1426] py-16  ">
      <div className="custom-container ">
        <h2 className="text-white font-semibold text-center text-5xl mb-26">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-white">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 transition-all duration-300 border border-gray-800 hover:border-teal-400 bg-transparent 
              "
            >
              {/* Icon placeholder */}
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full mb-4 text-xl">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {feature.description}
              </p>
              <a
                href="#"
                className="text-sm text-white hover:text-teal-400 font-medium inline-flex items-center group "
              >
                Learn More
                <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
