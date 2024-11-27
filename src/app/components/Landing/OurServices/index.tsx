'use client'
import Image from "next/image";
import React from "react";
import image3 from "@/assets/image3.png";
import { FiDownload } from "react-icons/fi";
import { Parallax } from "react-scroll-parallax";

const OurServices = () => {
  return (
    <section className="h-auto">
      <div  className=" m-[2vw] flex flex-col xl:flex-row gap-3 items-center justify-center">
        <div className="flex flex-col text-center items-center justify-center">
          <p data-aos="fade-up" className="text-[4rem] text-black font-normal text-center">
            Our {""}
            <span className=" font-bold bg-gradient-to-r from-[#0753E5] to-[#2EC0E4] bg-clip-text text-transparent">
              Services
            </span>
          </p>

          <div className="flex-grow flex flex-col space-x-2 relative items-center gap-2">
            <div data-aos="fade-up" className="pr-10 w-[90%] xl:w-[80%] py-8 bg-gray-100 rounded-3xl flex-grow h-full mb-2 xl:mb-0">
              <p className="text-bold text-2xl text-black mb-3 text-right">
                Our Experience
              </p>
              <p className="text-gray-400 text-right">
                {" "}
                Euismod volutpat molestie neque pulvinar amet erat amet.
                Eleifend mauris ut duis eu urna ullamcorper hendrerit. Euismod
                volutpat molestie neque pulvi.
              </p>
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

            <button data-aos="fade-up" className="bg-gradient-to-r from-[#2563EB] to-[#FA8626] rounded-full m-0 p-2 text-2xl w-[80%] flex justify-center gap-4 items-center text-white">
              Learn more
              <div className="p-2 bg-white  rounded-full w-10 h-10 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-neutral-700 fa-lg -rotate-45" />
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
        <div className="bg-slate-50 text-black py-10 m-[2vw] rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-[3vw]">
            {/* Title */}
            <div className="flex flex-col justify-between">
              {" "}
              <h2 data-aos="fade-up" className="text-5xl font-bold mb-4 leading-normal">
                Finally, an <span className="text-blue-500">Affordable <br /></span> way
                to <span className="text-blue-500">Ride</span>
              </h2>
              <p data-aos="fade-up" className="text-gray-600 mb-8">
                Euismod volutpat molestie neque pulvinar amet erat amet. Eleifend
                mauris ut duis eu urna ullamcorper hendrerit. Euismod volutpat
                molestie neque pulv.
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
              {Array.from({ length: 4 }).map((_, index) => (
                <div data-aos="fade-up" key={index} className=" ">
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
        <div data-aos="fade-up" className="rounded-2xl flex flex-col  gap-5 flex-grow w-2/3 bg-gradient-to-r from-primary to-secondary text-white p-10  text-center items-center">
          <p data-aos="fade-up" className="text-4xl">
            An Affordable way to <br /> Ride
          </p>
          <p data-aos="fade-up" className="text-lg w-[80%]">
            Euismod volutpat molestie neque pulvinar amet erat amet. Eleifend
            mauris ut duis eu urna ullamcorper hendrerit. Euismod volutpat
            molestie neque pulvi.
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
