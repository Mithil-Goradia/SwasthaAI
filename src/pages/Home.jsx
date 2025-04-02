import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="w-screen h-[100vh] relative">
      {/* Navbar should be outside the relative div */}
      <Navbar />

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/SWASTHA.mp4" type="video/mp4" />
      </video>

      {/* Hero Section Content */}
      <div className="absolute bottom-20 right-10 flex gap-7">
        <button className="bg-green-900 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105">
          Get Started
        </button>
        <button className="text-green-900 py-3 px-6 rounded-xl font-bold border-2 border-green-900 transition-all duration-300 ease-in-out hover:bg-green-900 hover:text-white hover:scale-105">
          Sign Up
        </button>
      </div>

      {/* Content after scrolling */}
      <div className="bg-gray-100 py-20 mt-[90vh]">
        {/* Why Ayurveda Section */}
        <section className="text-center px-6 md:px-20 lg:px-40">
          <h2 className="text-5xl font-bold text-green-900">Why Ayurveda?</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Ayurveda is a 5000-year-old holistic healing system that balances the body, mind, and spirit. 
            Unlock the power of nature with personalized wellness solutions.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[{
              title: "Natural Healing", desc: "Herbs & lifestyle changes for long-term health.", icon: "🌱"
            }, {
              title: "Mind-Body Balance", desc: "Yoga, meditation & diet for harmony.", icon: "🧘"
            }, {
              title: "Backed by Science", desc: "Modern research supports Ayurvedic healing.", icon: "🔬"
            }].map((feature, index) => (
              <div key={index} className="p-5 bg-white shadow-lg rounded-lg hover:scale-105 transition-all">
                <h3 className="text-xl font-semibold flex items-center gap-2">{feature.icon} {feature.title}</h3>
                <p className="text-sm mt-2 text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-20 text-center px-6 md:px-20 lg:px-40">
          <h2 className="text-5xl font-bold text-green-900">What We Offer</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Discover personalized Ayurvedic solutions, expert consultations, and natural remedies tailored to your needs.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[{
              title: "Know Your Dosha", desc: "Find your Ayurvedic body type & get personalized tips.", icon: "🩺"
            }, {
              title: "AyurCare Hub", desc: "Consult Ayurvedic doctors & health workers online.", icon: "💬"
            }, {
              title: "Herbal Store", desc: "Explore premium Ayurvedic herbs & wellness kits.", icon: "🛍️"
            }, {
              title: "NatureScan (Coming Soon)", desc: "AI scans herbs & gives instant benefits.", icon: "📸"
            }].map((feature, index) => (
              <div key={index} className="p-5 bg-white shadow-lg rounded-lg hover:scale-105 transition-all">
                <h3 className="text-xl font-semibold flex items-center gap-2">{feature.icon} {feature.title}</h3>
                <p className="text-sm mt-2 text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
