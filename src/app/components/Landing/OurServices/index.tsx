import React from "react";

const OurServices = () => {
  return (
    <section className=" text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold">
          Our <span className="text-gradient">Services</span>
        </h2>
      </div>

      {/* Top Section */}
      <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap gap-8 items-center">
        {/* Left Section */}
        <div className="bg-gray-800 rounded-xl p-6 flex-1">
          <h3 className="text-xl font-semibold mb-4">Our Experience</h3>
          <p className="text-gray-400 mb-4">
            Euismod volutpat molestie neque pulvinar amet erat amet. Eleifend
            mauris ut duis eu urna ullamcorper hendrerit. Euismod volutpat
            molestie neque pulv.
          </p>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-gray-600 p-2 rounded-full hover:bg-gray-500 transition">
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="bg-gray-600 p-2 rounded-full hover:bg-gray-500 transition">
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5L15.75 12l-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section - Video */}
        <div className="relative flex-1">
          <img
            src="https://via.placeholder.com/600x300"
            alt="App demonstration"
            className="rounded-xl"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-16 h-16 text-blue-500"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white text-black py-10 m-[2vw] rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-[3vw]">
          {/* Title */}
          <div className="flex flex-col justify-between">
            {" "}
            <h2 className="text-3xl font-bold mb-4">
              Finally, an <span className="text-blue-500">Affordable</span> way
              to <span className="text-blue-500">Ride</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Euismod volutpat molestie neque pulvinar amet erat amet. Eleifend
              mauris ut duis eu urna ullamcorper hendrerit. Euismod volutpat
              molestie neque pulv.
            </p>
            <div className="mt-10">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
                Get The App
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5H4.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className=" ">
                <h4 className="text-lg font-semibold text-purple-500 mb-2">
                  Lorem Ipsum
                </h4>
                <p className="text-gray-600">
                  Euismod volutpat molestie neque pulvinar amet erat amet.
                  Eleifend mauris ut duis eu urna ullamcorper hendrerit.
                </p>
              </div>
            ))}
          </div>

          {/* Call-to-action */}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
