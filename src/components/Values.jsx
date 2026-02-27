import React from 'react'

const values = [
  {
    id: 1,
    title: "QUALITY",
    image: "https://images.unsplash.com/photo-1678770419103-015a54d1e2ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "THRIVING COMMUNITIES",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 3,
    title: "THOUGHTFUL DESIGN",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 4,
    title: "SUSTAINABILITY",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
];

const Values = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-semibold mb-6">
          VALUES WE PRESERVE
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-xl">
          We create spaces that enable Everyday Joys; one community, one family, 
          and one home at a time.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {values.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[360px] w-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

              {/* Bottom Text */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <h3 className="text-white text-lg font-semibold tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="mt-16">
          <button className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition">
            EXPLORE IT
          </button>
        </div>

      </div>
    </section>
  );
}

export default Values;