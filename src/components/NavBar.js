import React, { useState } from "react";
import "./NavBar.mobile.css";

const NavBar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle menu visibility
  const pages = ["ABOUT", "CODE", "PHOTO", "FILM"];

  const toggleMenu = () => {
    console.log('toggling menu')
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-lg">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <button onClick={() => {
          setCurrentPage("");
          setIsMenuOpen(false);
        }} className="text-xl font-bold" style={{width: "auto"}}>
          JL DOT COM
        </button>

        {/* Hamburger Menu Button */}
        <button
          className="flex flex-col justify-between h-6 w-8 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="block w-full h-1 bg-black"></span>
          <span className="block w-full h-1 bg-black"></span>
          <span className="block w-full h-1 bg-black"></span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full md:relative md:top-auto md:left-auto md:w-auto md:flex md:items-center`}
        >
          {pages.map((page) => (
            <li key={page} className="border-b md:border-0">
              <button
                className={`block text-left py-4 px-4 ${
                  currentPage === page ? "" : ""
                }`}
                onClick={() => {
                  setCurrentPage(page);
                  setIsMenuOpen(false); // Close menu after clicking
                }}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
