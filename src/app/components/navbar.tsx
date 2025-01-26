// components/Navbar.jsx
'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-lg px-40 relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-400">
          <Link href="/">
          <Image
            src="/prato-logo.png"
            width={100}
            height={30}
            alt="Logo"
            />
            {/* PRATO <span className="text-gray-800">AI</span> */}
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-gray-800 hover:text-orange-500">
            Features
          </Link>
          <Link href="#about" className="text-gray-800 hover:text-orange-500">
            About
          </Link>
          <Link href="#pricing" className="text-gray-800 hover:text-orange-500">
            Pricing
          </Link>
          <Link href="#business" className="text-gray-800 hover:text-orange-500">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link
            href="#features"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#about"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#pricing"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#business"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Business
          </Link>
        </div>
      )}
    </nav>
  );
}
