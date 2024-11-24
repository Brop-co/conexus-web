import React from "react";
import { StarIcon } from "../../core/icons";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" text-white">
      <div className="m-[2vw] rounded-3xl bg-orange-blue-gradient ">
        <div className="bg-white bg-opacity-10 flex gap-5 flex-shrink-0 overflow-hidden w-full rounded-t-3xl p-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="flex gap-5 items-center text-white" key={index}>
              <StarIcon className="w-8 h-8" />
              <p className="text-6xl font-extralight">Conexus</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between py-10 px-[4vw] relative">
          <div className="w-fit">
            <div className="flex  gap-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`col-span-2 bg-white bg-opacity-15  px-2 pt-2 rounded-2xl flex flex-col justify-center items-start`}
                >
                  <h3 className="text-2xl font-bold mb-2">20K+</h3>
                  <p className="text-sm mb-4">Lorem Ipsum</p>
                </div>
              ))}
            </div>
            <p className="text-m mt-10">
              Commute in <br /> LuxuryCommute in Luxury <br /> Commute in Luxury
            </p>
            <div className="flex space-x-2 mt-10">
              {/* Social Icons */}
              {["instagram", "linkedin", "youtube"].map((icon, index) => (
                <button
                  key={index}
                  className="bg-white/20  rounded-full hover:bg-white/40 h-12 w-12 border flex items-center justify-center"
                >
                  <span className="sr-only">{icon}</span>
                  <i className={`fab fa-${icon} fa-lg`} />
                </button>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-[40%]">
            <Image src={`/phone.svg`} alt={"Phone"} width={360} height={360} />
          </div>
          <div>
            <div className="flex space-x-4">
              {/* Social Icons */}
              {["apple", "android"].map((icon, index) => (
                <button
                  key={index}
                  className="bg-white/20  rounded-full hover:bg-white/40 h-12 w-12 border flex items-center justify-center"
                >
                  <span className="sr-only">{icon}</span>
                  <i className={`fab fa-${icon} fa-lg`} />
                </button>
              ))}
            </div>
            <p className="text-m mt-10">
              Commute in <br /> LuxuryCommute in Luxury <br /> Commute in Luxury
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center md:text-left">
          {["purple", "orange"].map((color, idx) => (
            <div
              key={idx}
              className={`col-span-2 bg-gradient-to-br from-${color}-600 to-${color}-400 p-6 rounded-lg flex flex-col justify-center items-center`}
            >
              <h3 className="text-2xl font-bold mb-2">20K+</h3>
              <p className="text-sm mb-4">Lorem Ipsum</p>
            </div>
          ))}

          <div className="relative flex items-center justify-center">
            <div className="bg-gray-700 rounded-lg p-4">
              <img
                src="https://via.placeholder.com/200x400"
                alt="Mobile App Preview"
                className="rounded-lg"
              />
            </div>
            <div className="absolute bottom-[-20px] bg-gray-900 text-white px-4 py-2 rounded-full shadow-md">
              Coming Soon
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Section */}
      <div className="bg-black py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold">
                About <span className="text-gradient">Bounce</span>
              </h2>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold">Our Passion</h3>
                  <p className="text-gray-400 text-sm">
                    Euismod volutpat molestie neque pulvinar amet erat amet.
                    Eleifend mauris ut duis eu urna ullamcorper hendrerit.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold">Our Experience</h3>
                  <p className="text-gray-400 text-sm">
                    Euismod volutpat molestie neque pulvinar amet erat amet.
                    Eleifend mauris ut duis eu urna ullamcorper hendrerit.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <img
                  src="https://via.placeholder.com/200x150"
                  alt="Preview"
                  className="rounded-lg"
                />
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <img
                  src="https://via.placeholder.com/200x150"
                  alt="Preview"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
