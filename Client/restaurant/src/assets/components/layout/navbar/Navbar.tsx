import React from "react";
import { ToggleButton, SearchBar, ThemeToggle, UserProfile } from ".";
const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full bg-[rgba(217,217,217,1)] z-[19]">
      <nav className="relative lg:mx-9 mx-2 mt-4 bg-white rounded-t-lg shadow-md p-7 lg:rounded-t-[3.5rem]">
        {/* Main Navbar Content */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex">
            <button className="bg-black text-white font-semibold px-6 py-2 rounded-full">
              LOGO
            </button>
          </a>

          {/* Center Toggle BOH/FOH */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md flex">
            <button className="bg-black text-white py-1 px-4 rounded-full">
              BOH
            </button>
            <button className="text-black py-1 px-4">FOH</button>
          </div>

          {/* Mobile Menu Button */}
          <ToggleButton />
        </div>

        {/* Navbar Items */}
        <div className="relative container mx-auto flex items-center justify-between lg:flex-row">
          {/* Search Bar */}
          <SearchBar />

          {/* Theme Toggle & User Profile */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <UserProfile />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
