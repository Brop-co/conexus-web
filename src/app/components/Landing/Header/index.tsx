import { headerListItems } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = object;

function Header({}: Props) {
  return (
    <section className="min-w-full flex p-1 pl-3 pr-3 items-center justify-between">
      <div className="w-auto flex gap-2">
        {headerListItems.map((item, index) => (
          <Link
            className={`p-2 backdrop:blur-lg rounded-full pl-4 pr-4  ${
              index == 0
                ? "bg-orange-blue-gradient text-white"
                : "bg-black bg-opacity-[.03] hover:bg-opacity-10"
            }`}
            href={item.link}
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div>
        <Image src={`/logo.svg`} width={100} height={100} alt="Conexus Logo" />
      </div>
      <div className="px-px p-[0.65rem] rounded-full bg-orange-blue-gradient">
        <Link
          className={`  rounded-full p-3  bg-faded-orange-blue-gradient bg-white`}
          href=""
        >
          Join Waiting List
        </Link>
      </div>
    </section>
  );
}

export default Header;
