import React from "react";
import {
  FaSwimmingPool,
  FaTableTennis,
  FaChild,
  FaDumbbell,
  FaHome,
  FaBolt,
  FaFire,
  FaVideo
} from "react-icons/fa";

import {
  GiShuttlecock,
  GiMeditation,
  GiElevator
} from "react-icons/gi";

import {
  MdLocalParking,
  MdSecurity
} from "react-icons/md";

const amenities = [
  { title: "Swimming Pool", icon: <FaSwimmingPool /> },
  { title: "Badminton Court", icon: <GiShuttlecock /> },
  { title: "Play Area", icon: <FaChild /> },
  { title: "Yoga Deck", icon: <GiMeditation /> },
  { title: "Gymnasium", icon: <FaDumbbell /> },
  { title: "Club House", icon: <FaHome /> },
  { title: "Lift", icon: <GiElevator /> },
  { title: "Parking", icon: <MdLocalParking /> },
  { title: "Security", icon: <MdSecurity /> },
  { title: "Power Backup", icon: <FaBolt /> },
  { title: "Fire Sprinklers", icon: <FaFire /> },
  { title: "24x7 Security", icon: <FaVideo /> },
];

const Amenities = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8 text-center">

        <h2 className="text-4xl mb-3">
          Amenities
        </h2>

        <p className="text-gray-600 mb-14">
          Discover the features that make Whispering Heights exceptional
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-12 flex items-center justify-center gap-4 transition hover:shadow-lg hover:-translate-y-2"
            >
              <div className="text-green-500 text-4xl">
                {item.icon}
              </div>

              <span className="text-gray-800  text-center">
                {item.title}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Amenities;