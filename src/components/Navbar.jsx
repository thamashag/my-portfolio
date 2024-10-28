import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png"; // Original logo
import logoHover from "../assets/logo-hover.png"; // Alternate logo (different color)

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      {/* Logo with hover effect and redirect to home */}
      <a href="#home" onClick={() => setNavOpen(false)}>
        <img
          src={isHovered ? logoHover : logo} // Change image based on hover state
          alt="Logo"
          className="h-12 z-20"
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        />
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex text-lg uppercase">
        <li className="p-4">
          <a
            href="#home"
            className="hover:underline hover:underline-offset-4 transition duration-300"
            onClick={handleNavToggle}
          >
            Home
          </a>
        </li>
        <li className="p-4">
          <a
            href="#about"
            className="hover:underline hover:underline-offset-4 transition duration-300"
            onClick={handleNavToggle}
          >
            About
          </a>
        </li>
        <li className="p-4">
          <a
            href="#work"
            className="hover:underline hover:underline-offset-4 transition duration-300"
            onClick={handleNavToggle}
          >
            Work
          </a>
        </li>
        <li className="p-4">
          <a
            href="#contact"
            className="hover:underline hover:underline-offset-4 transition duration-300"
            onClick={handleNavToggle}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Menu Icon */}
      <div onClick={handleNavToggle} className="block md:hidden z-50">
        {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed top-0 left-0 bottom-0 w-full h-full bg-[#37AFE1] flex flex-col justify-center items-center transition-transform duration-500 ease-in-out z-40`}
      >
        <ul className="text-center text-2xl space-y-6">
          <li className="p-4">
            <a
              href="#home"
              className="hover:underline hover:underline-offset-4 transition duration-300"
              onClick={handleNavToggle}
            >
              Home
            </a>
          </li>
          <li className="p-4">
            <a
              href="#about"
              className="hover:underline hover:underline-offset-4 transition duration-300"
              onClick={handleNavToggle}
            >
              About
            </a>
          </li>
          <li className="p-4">
            <a
              href="#work"
              className="hover:underline hover:underline-offset-4 transition duration-300"
              onClick={handleNavToggle}
            >
              Work
            </a>
          </li>
          <li className="p-4">
            <a
              href="#contact"
              className="hover:underline hover:underline-offset-4 transition duration-300"
              onClick={handleNavToggle}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
