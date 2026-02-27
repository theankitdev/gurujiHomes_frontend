import React, { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import api from "../utils/axios";

const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "General Enquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/enquiries", formData);

      alert("Message submitted successfully");

      setFormData({
        name: "",
        phone: "",
        email: "",
        property: "General Enquiry",
        message: "",
      });

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      {/* Top Cards */}
      <section className="pt-20 py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-[#4a4a4a] text-white rounded-xl p-8 flex items-start gap-4 hover:scale-105 transition">
            <MapPin size={32} className="text-blue-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-200 leading-7">
                Avenue 64, BPTP Park -81, <br />
                Sector-81, Greater Faridabad
              </p>
            </div>
          </div>

          <div className="bg-[#4a4a4a] text-white rounded-xl p-8 flex items-start gap-4 hover:scale-105 transition">
            <Phone size={32} className="text-green-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-200 leading-7">
                +91 9540274407 <br />
                info.gurujihomes@gmail.com
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="pb-12">
        <div className="bg-gray-100 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">

          {/* Left Side - Contact Form */}
          <div className="px-6 py-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Contact Us
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
                required
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
                required
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-4 py-2 font-semibold hover:bg-gray-800 transition"
              >
                Submit
              </button>

            </form>
          </div>

          {/* Right Side - Google Map */}
          <div className="w-full h-full">
            <iframe
              title="location"
              src="https://www.google.com/maps?q=Sector%2081%20Greater%20Faridabad&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactSection;