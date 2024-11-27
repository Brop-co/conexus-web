import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white m-[2vw] p-[3.5vw] rounded-2xl">
      <div className="container mx-auto px-4">
        {/* Top Section */}

        <div className="flex flex-wrap justify-between items-center mb-8">
          {/* Logo and QR Code */}
          <div className="flex items-center space-x-3">
            <Image
              src={`/logo.svg`}
              width={100}
              height={100}
              alt="Conexus Logo"
            />
            <div className="text-2xl font-bold">Conexus</div>
          </div>
          <div className="hidden md:flex border border-white rounded-full px-4 py-3 gap-2  ">
            <IoGlobeOutline />
            <select
              name=""
              id=""
              className="outline-none bg-transparent font-semibold"
            >
              <option value="english" className="bg-black px-5">
                English
              </option>
              <option value="kiny" className="bg-black">
                Kinyarwanda
              </option>
            </select>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-20 lg:gap-5">
          {/* Logo and QR Code */}
          <div className="lg:w-2/5 flex items-center space-x-4 lg:border-r border-gray-700 px-5">
            <div className="flex items-center">
              <div className="bg-gray-800 rounded-lg p-4">
                {/* Placeholder for QR Code */}
                <div className="bg-white h-16 w-16 flex items-center justify-center rounded-md">
                  <span className="text-black font-bold text-xl">B</span>
                </div>
              </div>
              <p className="text-gray-400 ml-4">
                Scan to download our App on the <br /> Play Store and App Store
              </p>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="lg:w-3/5 flex flex-col space-y-3  px-5">
            <p className="text-white text-center md:text-left text-xl font-bold">
              Subscribe
            </p>
            <p className="text-gray-400 text-center md:text-left">
              Get Product updates and our changelog. No spam ever.
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-4 px-10 flex-grow rounded-full bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full text-white font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between text-sm text-gray-400">
          {/* Company Links */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h5 className="font-bold text-white mb-2 text-2xl ">Company</h5>
            <ul>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Investment Links */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h5 className="font-bold text-white mb-2 text-2xl ">Invest</h5>
            <ul>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  Standard
                </Link>
              </li>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  Silver
                </Link>
              </li>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  Gold
                </Link>
              </li>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  Platinum
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h5 className="font-bold text-white mb-2 text-2xl ">Community</h5>
            <ul>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  Join The Talent Team
                </Link>
              </li>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  Invite your friends
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h5 className="font-bold text-white mb-2 text-2xl ">Social</h5>
            <ul>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="" className="text-white opacity-55 text-lg">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-8 text-xs">
          Copyright © 2025{" "}
          <a
            href="mailto:team@conexus.rw"
            className="hover:underline font-bold text-white"
          >
            team@brop.rw
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
