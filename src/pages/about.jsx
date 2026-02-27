import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Building2, MapPin, Home } from "lucide-react";
import { useProperty } from "../context/PropertyContext";
import Amenities from "../components/Amenities";
import FloorPlan from "../components/FloorPlan";
import Enquiry from "../components/AboutEnquiry";

const About = () => {
  const { id } = useParams();
  const { fetchPropertyById } = useProperty();

  const [property, setProperty] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const loadProperty = async () => {
      const data = await fetchPropertyById(id);
      setProperty(data);
    };

    loadProperty();

    setTimeout(() => {
      setShow(true);
    }, 200);
  }, [id]);

  if (!property) {
    return (
      <div className="py-20 text-center text-lg font-semibold">
        Loading property...
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full lg:h-[600px] h-[60vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${property.image})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div
          className={`absolute left-30 bottom-12 bg-gray-900/50 backdrop-blur-[5px] text-white p-6 rounded-xl transition-all duration-700 ease-out ${show ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"}`}
        >
          <h1 className="text-2xl font-semibold">
            {property.title}
          </h1>
          <p className={`mt-3 text-gray-200 text-lg transition-all duration-700 delay-200 ${show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            {property.location}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-8">
            <h2 className="text-4xl font-semibold">About</h2>
            <div className="w-44 h-1 bg-black mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            <div>
              <img
                src={property.image}
                alt={property.title}
                className="shadow-lg w-full h-[450px] object-cover"
              />
            </div>

            <div className="text-gray-900 leading-8">

              <p className="text-lg">
                {property.description}
              </p>

              <div className="mt-8 space-y-2 text-lg">
                <p><strong>Status:</strong> {property.status}</p>
                <p><strong>Size:</strong> {property.size}</p>
                <p><strong>Booking Amount:</strong> {property.bookingAmount}</p>
              </div>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">
                  <Building2 className="text-blue-500" size={22} />
                  <span>Project: {property.title}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-red-500" size={22} />
                  <span>Location: {property.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Home className="text-green-500" size={22} />
                  <span>Size: {property.size}</span>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <Amenities />

      {/* Floor Plan */}
      <FloorPlan />

      {/* Gallery */}
      {property.gallery?.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-8 text-center">

            <h2 className="text-4xl mb-3">Gallery</h2>

            <p className="text-gray-600 mb-14">
              {property.title} in {property.location}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {property.gallery.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md group cursor-pointer"
                >
                  <img
                    src={img}
                    alt="gallery"
                    className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Enquiry */}
      <Enquiry property={property.image}/>
    </div>
  );
};

export default About;