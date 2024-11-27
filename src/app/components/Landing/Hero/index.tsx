import React from "react";
import { StarIcon } from "../../core/icons";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" text-white">
      <div className="m-[2vw] mb-[6vh]  rounded-3xl bg-orange-blue-gradient">
        <div className="marquee bg-white bg-opacity-10 rounded-t-3xl p-4">
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
          <div className="absolute bottom-0 left-[40%] flex items-center flex-col">
            <Image src={`/phone.svg`} alt={"Phone"} width={360} height={360} />
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
      <div className=" m-[2vw] rounded-3xl flex justify-between flex-col xl:flex-row">
        <Image
          className="hidden xl:block"
          src={"/images/image3.png"}
          alt={""}
          height={200}
          width={500}
        />
        <div className="w-[100%] xl:w-[30%] relative flex flex-col justify-between mb-4 xl:mb-0">
          <div className="px-4 py-12 bg-gray-100 rounded-3xl">
            <p className="text-bold text-2xl text-black mb-3">Our Passion</p>
            <p className="text-gray-400  pr-10">
              {" "}
              Euismod volutpat molestie neque pulvinar amet erat amet. Eleifend
              mauris ut duis eu urna ullamcorper hendrerit. Euismod volutpat
              molestie neque pulvi.
            </p>
          </div>
          <Image
            className=" hidden xl:block"
            src={"/images/image2.png"}
            alt={""}
            height={200}
            width={600}
          />
        </div>
        <div className="w-[100%] xl:w-[40%] flex flex-col">
          <p className="text-[4rem] text-black font-normal text-right">
            About{" "}
            <span className=" font-bold bg-gradient-to-r from-[#0753E5] to-[#2EC0E4] bg-clip-text text-transparent">
              Conexus
            </span>
          </p>

          <div className="flex-grow flex flex-col  xl:flex-row items-end xl:items-center space-x-2">
            <div className="pr-10 w-full xl:w-[80%] py-8 bg-gray-100 rounded-3xl flex-grow h-full mb-2 xl:mb-0">
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
            <Link
              className=" rounded-full flex flex-row xl:flex-col items-center p-2 xl:p-0 space-x-4 xl:space-x-0 xl:space-y-12 justify-center xl:justify-end xl:pb-8 h-full w-[20rem] xl:w-fit bg-gradient-to-r from-[#2563EB] to-[#FA8626]"
              href={""}
            >
              <p className="transform xl:rotate-90"> Learn more</p>
              <div className="p-2 bg-white  rounded-full w-10 h-10 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-black fa-lg -rotate-45" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
