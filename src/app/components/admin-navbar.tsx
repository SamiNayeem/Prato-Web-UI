import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      <div className="text-lg font-bold text-gray-800">Dashboard</div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 pr-4 border rounded-lg focus:outline-none"
          />
        </div>
        <FiBell className="text-xl text-gray-600 cursor-pointer hover:text-orange-600" />
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
