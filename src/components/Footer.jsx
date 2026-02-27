import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-4">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 lg:px-0">

        {/* Logo & Description */}
        <div>
          <img
            src="https://gurujihomes.in/logo-05.png" 
            alt="Guruji Homes"
            className="h-26 mb-4"
          />

          <p className="text-gray-600 leading-7">
            Your trusted partner in creating beautiful and
            functional spaces.
          </p>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Information
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Enquiry</li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Projects
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-black cursor-pointer">
              Residential
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Contact
          </h3>

          <p className="text-gray-600 leading-7 mb-3">
            Avenue 64, BPTP Park -81, Sector-81, Greater Faridabad
          </p>

          <p className="text-gray-600">
            Phone: +91 9540274407
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-8 pb-6 pt-4 text-center lg:text-right text-gray-600 text-sm mx-auto max-w-7xl">
        Copyright © 2026 GuruJi Homes. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;