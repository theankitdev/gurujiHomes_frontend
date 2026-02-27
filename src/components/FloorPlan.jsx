import React from "react";

const FloorPlan = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* Heading */}
        <h2 className="text-4xl mb-3">
          Floor Plan
        </h2>
        <p className="text-gray-600 mb-14">
          Whispering heights in Sector 88, Faridabad
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* First Plan */}
          <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">

            <img
              src="	https://node.gurujihomes.in/uploads/projects/1747982481992-41bhk.jpg"
              alt="floor plan"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center p-6">

              <div className="text-white translate-y-6 group-hover:translate-y-0 transition duration-500">
                <p className="text-lg leading-7 text-left font-semibold">
                 4+1 BHK - “Spacious 4+1 BHK for grand Comfort” Spacious 4 BHK layouts crafted for elegance and functionality. Designed with expansive rooms and thoughtful details, these homes offer the pinnacle of luxury living Area – 2468 Sq. Ft.
                </p>
              </div>

            </div>

          </div>

          {/* Second Plan */}
          <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">

            <img
              src="	https://node.gurujihomes.in/uploads/projects/1747982482002-three-one-1.png"
              alt="floor plan"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center p-6">

              <div className="text-white text-center translate-y-6 group-hover:translate-y-0 transition duration-500">
                <p className="text-lg leading-7 text-left font-semibold">
                  3+1 BHK - “Elegant 3+1 BHK for modern Comfort” Our 3 BHK apartments balance style and comfort, offering modern layouts that maximize space. Enjoy a sophisticated design that complements your refined lifestyle Area – 1980 Sq. Ft.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FloorPlan;