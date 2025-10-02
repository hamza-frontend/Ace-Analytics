import React from 'react';
import { Users, Target, Award, Lightbulb, Heart, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Consulting",
      description: "Strategic guidance to transform your business"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Amplify your brand across all channels"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Development",
      description: "Custom solutions built for your needs"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer First",
      description: "Your success is our priority"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "We work together to achieve more"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "Quality in everything we deliver"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Team Members" }
  ];

  return (
    <div className="min-h-screen bg-[#0F1426]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              About Our Company
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering businesses with innovative solutions since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-400 mb-4">
              Founded in 2010, we began with a simple mission: to help businesses thrive in the digital age. What started as a small team of passionate professionals has grown into a full-service company serving clients worldwide.
            </p>
            <p className="text-lg text-gray-400">
              Today, we combine cutting-edge technology with creative thinking to deliver solutions that drive real results. Our diverse team brings together expertise across multiple disciplines to tackle your toughest challenges.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-blue-50 text-lg mb-6">
              To empower businesses of all sizes with innovative, scalable solutions that drive growth and create lasting value.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-blue-50 text-lg">
              To be the most trusted partner for businesses seeking digital transformation and sustainable success.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#1A1F35] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive services designed to elevate your business
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1F35] rounded-xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-blue-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#1A1F35] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#0F1426] rounded-xl p-8 border border-gray-800 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="text-blue-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow and succeed
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}