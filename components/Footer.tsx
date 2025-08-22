import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 w-32 h-32">
          <div className="w-full h-full border-l-2 border-t-2 border-blue-400"></div>
        </div>
        <div className="absolute right-0 bottom-0 w-32 h-32">
          <div className="w-full h-full border-r-2 border-b-2 border-blue-400"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Get to Know Us
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-orange-400 mr-2">▶</span>About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-orange-400 mr-2">▶</span>Contact Us
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-orange-400 mr-2">▶</span>Process
                </a>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-6 mt-8 text-white">
              Useful links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-orange-400 mr-2">▶</span>FAQ
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-orange-400 mr-2">▶</span>Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-orange-400 mr-2">▶</span>Help Center
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-orange-400 mr-2">▶</span>Terms &
                  Conditions
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-orange-400 mr-2">▶</span>News & Blogs
                </a>
              </div>
            </div>
          </div>

          {/* Center Logo and Description */}
          <div className="text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-wider">iPROCURE</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              An innovative tech platform by Big Trader Technology
              <br />
              Simplifying B2B procurement in Qatar.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="text-white text-sm">in</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="text-white text-sm">f</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="text-white text-sm">t</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="text-white text-sm">ig</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="text-white text-sm">yt</span>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Contact Informations
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">
                    Get In Touch With Us
                  </p>
                  <p className="text-gray-300 text-sm">Dohaland, Doha, Qatar</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email Address</p>
                  <p className="text-gray-300 text-sm">info@iprocure.ai</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Phone Number</p>
                  <p className="text-gray-300 text-sm">+974 7799 9600</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2025{" "}
            <span className="text-orange-400">iProcure.ai</span> All Rights
            Reserved
          </p>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors cursor-pointer">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">1</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
