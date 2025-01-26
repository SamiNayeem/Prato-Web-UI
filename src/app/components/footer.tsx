"use client";

import Image from "next/image";
import Link from "next/link";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#FFF4D9] to-[#FF914D] px-8 py-6 text-black">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Brand Info */}
        <div className="w-full md:w-auto text-center md:text-left">
          <Link href="https://www.material-tailwind.com" target="_blank">
            <Image
              src="/prato-logo.png"
              alt="logo"
              width={120}
              height={50}
              className="mx-auto md:mx-0"
            />
          </Link>
          <p className="mt-2 text-sm text-[#5E3A87]">
            Improve your lifestyle with PRATO AI.
          </p>
        </div>

        {/* Links Section */}
        <ul className="mt-4 flex w-full flex-wrap justify-center gap-4 md:mt-0 md:w-auto">
          {LINKS.map((link) => (
            <li key={link}>
              <Link
                href="#"
                className="text-sm font-medium hover:text-orange-400"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* App Download Section */}
        <div className="mt-4 w-full md:mt-0 md:w-auto text-center">
          <h6 className="text-sm font-semibold mb-2 text-black">
            Get the app
          </h6>
          <div className="flex justify-center gap-4 items-center">
            <Link href="#">
              <Image
                src="/apple-store.png"
                alt="App Store"
                width={120}
                height={40}
                className="hover:scale-105 transition-transform"
              />
            </Link>
            <Link href="#">
              <Image
                src="/play-store.png"
                alt="Google Play"
                width={120}
                height={40}
                className="hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 flex flex-wrap justify-between items-center border-t border-gray-700 pt-4">
        {/* Copyright */}
        <p className="text-sm text-center w-full md:w-auto opacity-75">
          &copy; {CURRENT_YEAR} PRATO AI.{" "}
          <Link
            href="https://www.material-tailwind.com"
            target="_blank"
            className="hover:text-orange-400"
          >
            All Rights Reserved.
          </Link>
        </p>

        {/* Social Links */}
        <div className="mt-2 flex gap-3 justify-center md:mt-0">
          <Link href="#" className="text-lg hover:text-orange-400">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link href="#" className="text-lg hover:text-orange-400">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link href="#" className="text-lg hover:text-orange-400">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link href="#" className="text-lg hover:text-orange-400">
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link href="#" className="text-lg hover:text-orange-400">
            <i className="fa-brands fa-dribbble"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
