'use client'

import React, { useState, useEffect } from "react";
import { StarIcon } from "../../core/icons";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import { FaArrowRight, FaCheckDouble } from "react-icons/fa";
import { features } from "@/app/constants";

const stats = [
  { total: 15000, name: "Empowered users" },
  { total: 21000, name: "Solutions delivered" },
  { total: 1500, name: "lives improved" }
]

const AutoCountingComponent = () => {
  return (
    <div data-aos="zoom-in" className="grid grid-cols-6 gap-4">
      {stats.map((_, idx) => (
        <AnimatedCounter  {..._} key={idx} endValue={_.total} />
      ))}
    </div>
  );
};

const AnimatedCounter = ({ endValue, name }: { endValue: number, name?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const increment = endValue / (duration / intervalTime);

    const counter = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + increment >= endValue) {
          clearInterval(counter);
          return endValue;
        }
        return prevCount + increment;
      });
    }, intervalTime);

    return () => clearInterval(counter);
  }, [endValue]);

  return (
    <div className="col-span-2 bg-white bg-opacity-15 px-2 pt-2 rounded-2xl flex flex-col justify-center items-start">
      <h3 className="text-2xl font-bold mb-2">{formatNumber(count)}+</h3>
      <p className="text-sm mb-4">{name}</p>
    </div>
  );
};

const formatNumber = (num: number) => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M'; // Format with 'M' for millions
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K'; // Format with 'K' for thousands
  }
  return num.toLocaleString(); // Return the number as it is if it's less than 1K
};

const Hero = () => {
  return (
    <section className=" text-white">
      <div id="home" className="m-[2vw] mb-[6vh] rounded-3xl bg-orange-blue-gradient">
        <div className="marquee bg-white bg-opacity-10 rounded-t-3xl p-4 overflow-hidden">
          <div className="marquee-inner flex gap-5 w-auto overflow-hidden">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="flex gap-5 items-center text-white" key={index}>
                <StarIcon className="w-8 h-8" />
                <p className="text-6xl font-extralight">Conexus</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between py-10 px-[4vw] relative">
          <div className="w-fit">
            <div className="flex  gap-4">
              <AutoCountingComponent />
            </div>
            <div className="mt-10 flex flex-col gap-3">
              <h1 className="font-bold text-3xl">Empowering Accessibility for All</h1>
              <p data-aos="zoom-in" className="text-m">
                An integrated platform that bridges <br /> communication and mobility  gaps for deaf and visually impaired individuals.
              </p>
            </div>
            <div className="flex space-x-2 mt-10">
              {/* Social Icons */}
              {["instagram", "linkedin", "youtube"].map((icon, index) => (
                <button
                  data-aos="zoom-in"
                  key={index}
                  className="bg-white/20  rounded-full hover:bg-white/40 h-12 w-12 border flex items-center justify-center"
                >
                  <span className="sr-only">{icon}</span>
                  <i className={`fab fa-${icon} fa-lg`} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="md:flex hidden space-x-4">
              {["apple", "android"].map((icon, index) => (
                <button
                  data-aos="zoom-in"
                  key={index}
                  className="bg-white/20  rounded-full hover:bg-white/40 h-12 w-12 border flex items-center justify-center"
                >
                  <span className="sr-only">{icon}</span>
                  <i className={`fab fa-${icon} fa-lg`} />
                </button>
              ))}
            </div>
            <p data-aos="zoom-in" className="text-m mt-10 md:block hidden text-xl">
              Where all Abilities meet Possibilities
            </p>

            <div className="mt-3 hidden md:block">
              {
                [...features, { title: "Affordable and accessible" }].map((_, idx) => (
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
          <div className="absolute bottom-0 left-[40%] xl:flex hidden items-center flex-col">
            <Parallax>
              <Image data-aos="zoom-in" src={`/phone.svg`} alt={"Phone"} width={360} height={360} />
            </Parallax>
            <div className=" absolute bottom-[-30px] px-px py-[.05rem] rounded-full bg-orange-blue-gradient">
              <Link href="">
                <p className="text-[24px] rounded-full bg-faded-orange-blue-gradient bg-white text-gray-600 px-8 py-2">
                  Coming Soon
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div id="about" className=" m-[2vw] py-[5rem] flex justify-between flex-col xl:flex-row gap-3">
        <Image
          data-aos="fade-up"
          className="hidden xl:block"
          src={"/images/image3.png"}
          alt={""}
          height={200}
          width={500}
        />
        <div className="w-[100%] xl:w-[30%] relative flex flex-col justify-evenly mb-4 xl:mb-0">
          <p className="text-[4rem] text-black font-normal xl:hidden block">
            About{" "}
            <span className=" font-bold bg-gradient-to-r from-[#0753E5] to-[#2EC0E4] bg-clip-text text-transparent">
              Conexus
            </span>
          </p>
          <div data-aos-delay="100" data-aos="fade-up" className="px-4 py-12 bg-gray-100 rounded-3xl">
            <p className="text-bold text-2xl text-black mb-3">Problem</p>
            <p className="text-gray-400  pr-10">
              {" "}
              Millions with disabilities face daily challenges in communication, mobility, and inclusion. Deaf individuals struggle in non-signing environments, while the visually impaired face unsafe navigation. Limited inclusive tech hinders social and economic opportunities.
            </p>
          </div>
          {/* <Image
            data-aos="fade-up"
            className=" hidden xl:block"
            src={"/images/image2.png"}
            alt={""}
            height={200}
            width={600}
          /> */}
        </div>
        <div className="w-[100%] xl:w-[40%] flex flex-col">
          <p data-aos-delay="300" data-aos="fade-up" className="text-[4rem] text-black font-normal xl:block hidden">
            About{" "}
            <span className=" font-bold bg-gradient-to-r from-[#0753E5] to-[#2EC0E4] bg-clip-text text-transparent">
              Conexus
            </span>
          </p>

          <div data-aos="fade-up" className="flex-grow flex flex-col space-x-2 relative items-center gap-2">
            <div className="pr-10 w-[90%] xl:w-[80%] py-8 px-4 bg-gray-100 rounded-3xl flex-grow h-full mb-2 xl:mb-0">
              <p className="text-bold text-2xl text-black mb-3">
                Our solution
              </p>
              <p className="text-gray-400 text-left">
                {" "}
                Conexus is an innovative platform that bridges communication and accessibility gaps, using technologies like sign language recognition, speech-to-sign conversion, and AR navigation to empower users with independence and seamless connectivity.
              </p>
              {/* 
              <div className=" justify-self-end text-black flex items-center gap-3 mt-2">
                {["instagram", "linkedin", "youtube"].map((icon, index) => (
                  <button
                    key={index}
                    className="rounded-full h-12 w-12 border border-[#0C1F46] flex items-center justify-center text-[#0C1F46] bg-[#0C1F4638]"
                  >
                    <span className="sr-only">{icon}</span>
                    <i className={`fab fa-${icon} fa-lg`} />
                  </button>
                ))}
              </div> */}
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
      </div>
    </section>
  );
};

export default Hero;
