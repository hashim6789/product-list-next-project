import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ClientTestimonialSection = () => {
  const clients = [
    { name: "3M", logo: "3M" },
    { name: "Amentum", logo: "amentum" },
    { name: "Daikin", logo: "DAIKIN" },
    { name: "GE", logo: "GE" },
    { name: "Airwheel", logo: "Airwheel" },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Trusted by leading Clients
        </h2>

        {/* Client Logos Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button className="absolute left-0 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronLeft size={24} />
          </button>

          {/* Logo Container */}
          <div className="flex items-center justify-center space-x-8 overflow-hidden">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-8 min-w-[180px] h-24 flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow"
              >
                <span className="text-gray-600 font-medium text-lg">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonialSection;
