import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-gray-400 text-white font-josefin-sans">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        <button className="text-3xl font-semibold text-white">
          Layallpur Fashions
        </button>

        <nav className="hidden md:flex space-x-4 text-lg">
          <button className="hover:text-gray-300">Women</button>
          <button className="hover:text-gray-300">Men</button>
          <button className="hover:text-gray-300">Kids</button>
          <button className="hover:text-gray-300">Add Product</button>
        </nav>

        <div className="hidden md:block">
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold text-lg px-6 py-3 rounded-lg">
            Check Out
          </button>
        </div>

        <FiMenu
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {toggle && (
        <div className="md:hidden bg-gray-800 text-white font-josefin-sans p-4">
          <button className="block hover:text-gray-300 py-2">Portfolio</button>
          <button className="block hover:text-gray-300 py-2">Blog</button>
          <button className="block hover:text-gray-300 py-2">
            Client Reviews
          </button>
          <button className="block hover:text-gray-300 py-2">Contact Me</button>
        </div>
      )}
    </div>
  );
};

export default Header;
