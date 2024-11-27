'use client'
import Image from "next/image";
import React from "react";
import image3 from "@/assets/image3.png";
import { FiDownload } from "react-icons/fi";
import { Parallax } from "react-scroll-parallax";
import { FaArrowRight, FaCheckDouble } from "react-icons/fa";
import { features } from "@/app/constants";


const OurServices = () => {
  return (
    <section className="h-auto">
      <div id="services" className=" m-[2vw] py-[5rem] flex flex-col xl:flex-row gap-3 items-center justify-center">
        <div className="flex flex-col text-center items-center justify-center">

          <p data-aos-delay="300" data-aos="fade-up" className="text-[4rem] text-black font-normal text-center">
            Our {""}
            <span className=" font-bold bg-gradient-to-r from-[#0753E5] to-[#2EC0E4] bg-clip-text text-transparent">
              Services
            </span>
          </p>

          <div className="flex-grow flex flex-col space-x-2 relative items-center gap-2">
            <div data-aos="fade-up" className="pr-10 w-[90%] xl:w-[80%] py-8 px-4 bg-gray-100 rounded-3xl flex-grow h-full mb-2 xl:mb-0">
              <p className="text-gray-400 text-left">
                {" "}
                Conexus offers innovative solutions to bridge communication and mobility gaps, empowering individuals with disabilities to live more independently. Here’s how we make a difference:
              </p>

              <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-4 mt-3">
                {
                  [...features].map((_, idx) => (
                    <span key={idx} className="flex items-center gap-2 mt-1">
                      <FaCheckDouble color="#2563EB" />
                      <span>
                        {
                          _.title
                        }
                      </span>
                    </span>
                  ))
                }
              </div>
            </div>
            {/* <button
              className="h-full rounded-full flex items-center justify-center flex-col bg-gradient-to-r from-[#2563EB] to-[#FA8626]"
              // href={""}
            >
              <p className="transform xl:rotate-90 text-2xl"> Learn more</p>
              <div className="p-2 bg-white  rounded-full w-10 h-10 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-black fa-lg -rotate-45" />
              </div>
            </button> */}

            <button data-aos="fade-up" className="bg-gradient-to-r from-[#2563EB] to-[#FA8626] rounded-full m-0 p-2 text-2xl px-4 flex justify-center gap-8 items-center text-white w-[70%]">
              Learn more
              <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <FaArrowRight className="-rotate-45" />
              </div>
            </button>
          </div>
        </div>
        <div className="w-full">
          <Image
            data-aos="fade-up"
            className="hidden xl:block w-full object-fit"
            src={"/person.svg"}
            alt={""}
            height={200}
            width={500}
          />
        </div>
      </div>

      <Parallax>
        <div id="features" className="bg-slate-50 py-[5rem] text-black m-[2vw] rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-[3vw]">
            {/* Title */}
            <div className="flex flex-col justify-between">
              {" "}
              <h2 data-aos-delay="100" data-aos="fade-up" className="text-4xl font-bold mb-4 leading-normal">
                Finally, an <span data-aos-delay="400" data-aos="zoom-in" className="text-blue-500">Affordable <br /></span> way
                to <span data-aos-delay="500" data-aos="zoom-out" className="text-blue-500">Connect</span> and  <span data-aos-delay="500" data-aos="zoom-out" className="text-blue-500">Navigate</span>
              </h2>
              <p data-aos="fade-up" className="text-gray-600 mb-8">
                Millions of people with disabilities face daily challenges in
                communication, mobility, and social inclusion.
              </p>
              <div data-aos="fade-up" className="mt-10">
                <button className="bg-primary text-white flex gap-2 px-10 py-3 rounded-3xl items-center w-fit ">
                  <p>Get The App</p>
                  <FiDownload />
                </button>
              </div>
            </div>
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((_, index) => (
                <div data-aos-delay="100" data-aos="fade-up" key={index} className="bg-slate-100 px-2 py-3 rounded-md">
                  <h4 className="text-lg font-semibold text-purple-500 mb-2">
                    {_.title}
                  </h4>
                  <p className="text-gray-600">
                    {_.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Call-to-action */}
          </div>
        </div>
      </Parallax>

      <div className="flex m-[2vw] gap-4">
        <Image
          data-aos="fade-up"
          src={image3}
          width={1000}
          height={1000}
          alt="Image1"
          className="w-1/3 md:block hidden"
        />
        <div data-aos-delay="200" data-aos="fade-up" className="rounded-2xl flex flex-col  gap-5 flex-grow w-2/3 bg-gradient-to-r from-primary to-secondary text-white p-10  text-center items-center">
          <p data-aos="fade-up" className="text-4xl">
            An Affordable Way to Connect and Navigate
          </p>
          <p data-aos="fade-up" className="text-lg w-[80%]">
            Experience seamless communication and effortless navigation with our platform, designed to empower individuals with disabilities. Join us and enjoy greater independence, accessibility, and social inclusion at an affordable price.
          </p>
          <button data-aos="fade-up" className="bg-white text-primary flex gap-2 px-10 py-3 rounded-3xl items-center w-fit ">
            <p>Get The App</p>
            <FiDownload />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
