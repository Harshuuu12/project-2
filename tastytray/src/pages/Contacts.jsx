import React from 'react';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">Contact Us</h2>
          <p className="text-gray-600 mt-4">
            Got a question, feedback, or just want to say hi? We’d love to hear from you!
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="space-y-6 text-gray-700 text-lg">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📧</span>
              <p><strong>Email:</strong> support@tastytray.com</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📞</span>
              <p><strong>Phone:</strong> +91 98793 08454</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📍</span>
              <p><strong>Address:</strong> TastyTray HQ, Ring Road, Surat, Gujarat, India</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⏰</span>
              <p><strong>Working Hours:</strong> 9:00 AM – 11:00 PM (Mon–Sun)</p>
            </div>
          </div>

          {/* Optional Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-300"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-300"
            />
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition duration-200">
              Send Message
            </button>
          </div>
        </div>

        {/* Google Map Embed (Surat Location) */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="TastyTray Surat Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.816385764988!2d72.8310600749577!3d21.203109180487795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e539a89912f%3A0xc7e2c535802e0c1!2sRing%20Road%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1721829622635!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contacts;
