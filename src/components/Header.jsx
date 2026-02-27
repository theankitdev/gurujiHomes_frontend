import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <img
          src="https://gurujihomes.in/logo-05.png"
          className="w-20 h-20 object-contain"
          alt="logo"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a className="font-semibold hover:text-gray-500" href="/">HOME</a>
          <a className="font-semibold hover:text-gray-500" href="/about">ABOUT</a>
          <a className="font-semibold hover:text-gray-500">PROJECTS</a>
          <a className="font-semibold hover:text-gray-500" href="/contactus">CONTACT</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          {menuOpen ? (
            <X
              size={28}
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              size={28}
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <a onClick={() => setMenuOpen(false)} href="/">HOME</a>
          <a onClick={() => setMenuOpen(false)} href="/about">ABOUT</a>
          <a onClick={() => setMenuOpen(false)}>PROJECTS</a>
          <a onClick={() => setMenuOpen(false)} href="/contactus">CONTACT</a>
        </div>
      </div>

    </header>
  );
};

export default Header;