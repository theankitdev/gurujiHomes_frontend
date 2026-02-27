import React, { useState } from "react";
import api from "../utils/axios";

const Enquiry = ({ property }) => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
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

      alert("Enquiry submitted successfully");

      setFormData({
        name: "",
        phone: "",
        email: "",
        property: "",
        message: "",
      });

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="pb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Form Card */}
        <div className="bg-gray-100 rounded-lg shadow-lg py-8 px-6">

          <h2 className="text-2xl font-semibold mb-8">
            Enquiry
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
              required
            />

            <select
              name="property"
              value={formData.property}
              onChange={handleChange}
              className="w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
              required
            >
              <option value="">Select Property</option>
              <option>Whispering Heights</option>
              <option>Adore Fantasy Street</option>
              <option>Adore The Legend-III</option>
            </select>

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-2 bg-black text-white font-semibold hover:bg-gray-800 transition"
            >
              Submit
            </button>

          </form>
        </div>

        {/* Right Image */}
        <div className="overflow-hidden shadow-lg">
          <img
            src={property}
            alt="property"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Enquiry;