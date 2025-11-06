import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'; // Ensure assets.about points to the clean banner image

const About = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-red-50 to-orange-50 min-h-screen">

      {/* Hero Banner */}
      <div className="relative h-[400px] bg-cover bg-center overflow-hidden">
        <img
          src={assets.about}
          alt="About FreshMart"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: "🥗",
              title: "Delicious Variety",
              desc: "Explore a wide range of cuisines — from healthy bowls to indulgent snacks.",
            },
            {
              icon: "⏱️",
              title: "Fast Delivery",
              desc: "Hot & fresh meals delivered in just 20–25 minutes, guaranteed.",
            },
            {
              icon: "📞",
              title: "24/7 Support",
              desc: "We’re here for you anytime — because hunger doesn’t wait.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-orange-300 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-red-700 mb-3">
                {feature.icon} {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* Testimonials Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "The veg salad was so fresh and crunchy, just perfect!",
                name: "PATEL GAURAV",
              },
              {
                quote: "Butter paneer combo reminded me of home. Loved it!",
                name: "ASHISH SINGH",
              },
              {
                quote: "Incredible flavors & lightning-fast delivery. 5 stars!",
                name: "PARTHAVI MEHTA",
              },
              {
                quote: "My kids love the cheesy pasta bowls. Ordering again!",
                name: "PRATIK SHARMA",
              },
              {
                quote: "Never thought online food could taste this good. Bravo!",
                name: "DWAREKESH MEHTA",
              },
              {
                quote: "Affordable, hygienic, and absolutely delicious.",
                name: "YASH KATODIYA",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-200"
              >
                <p className="text-gray-700 italic">"{review.quote}"</p>
                <p className="mt-4 font-semibold text-red-600">— {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Creator Info */}
        <section className="text-center">
          <p className="text-lg text-gray-600"> Made by</p>
          <h3 className="text-2xl font-bold text-red-700 mt-2">Harsh Sharma</h3>
          <p className="text-sm text-gray-500 mt-1">Founder & Food Enthusiast</p>
        </section>

        {/* Call To Action */}
        <div className="text-center">
          <Link to="/menu">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Explore the Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
