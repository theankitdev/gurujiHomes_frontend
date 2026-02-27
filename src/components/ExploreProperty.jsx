import React from "react";
import { Link } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";

const ExploreProperty = () => {
  const { properties, loading, error } = useProperty();

  if (loading) {
    return (
      <div className="py-20 text-center text-lg font-semibold">
        Loading properties...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <section className="py-14">
      <div className="px-12">

        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Explore Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {properties.map((property) => (
            <Link
              key={property._id}
              to={`/property/${property._id}`}
              className="bg-white rounded-lg hover:shadow-md hover:-translate-y-2 overflow-hidden transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-60 w-full object-cover transition duration-500 hover:scale-110"
                />

                
              </div>

              <div className="p-6">
                <p className="text-gray-600 font-semibold text-sm mb-2">
                  {property.location}
                </p>

                <h3 className="text-xl font-bold mb-3">
                  {property.title}
                </h3>

                <span className="inline-block px-3 py-1 text-xs font-medium border border-yellow-400 text-yellow-600 rounded-md mb-4">
                  {property.status}
                </span>

                <p className="text-gray-700 font-medium">
                  {property.size}
                </p>
              </div>
            </Link>
          ))}

        </div>

        <div className="flex justify-center items-center mt-10">
          <button className="px-6 py-3 font-medium text-white bg-black border-2 border-black hover:bg-white hover:text-black transition duration-300">
            View More
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExploreProperty;