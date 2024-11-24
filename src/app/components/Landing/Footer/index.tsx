import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white m-[2vw] py-10 rounded-2xl">
      <div className="container mx-auto px-4">
        {/* Top Section */}

        <div className="flex flex-wrap justify-between items-center mb-8">
          {/* Logo and QR Code */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">Conexus</div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        <div className="flex flex-wrap justify-between items-center mb-8">
          {/* Logo and QR Code */}
          <div className="w-2/5 flex items-center space-x-4 border-r border-gray-700 px-5">
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
          <div className="w-3/5 flex flex-col space-y-3  px-5">
            <p className="text-white text-center md:text-left text-xl">Subscribe</p>
            <p className="text-gray-400 text-center md:text-left">
              Get Product updates and our changelog. No spam ever.
            </p>
            <div className="flex gap-2">
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
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between text-sm text-gray-400">
          {/* Company Links */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h5 className="font-bold text-white mb-2">Company</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Investment Links */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h5 className="font-bold text-white mb-2">Invest</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Standard
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Silver
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gold
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Platinum
                </a>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h5 className="font-bold text-white mb-2">Community</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Join The Talent Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Invite your friends
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h5 className="font-bold text-white mb-2">Social</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-8 text-xs">
          Copyright © 2025{" "}
          <a href="mailto:team@conexus.rw" className="hover:underline">
            team@conexus.rw
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
