import React from "react";
import bgFooter from "../public/assets/images/background_pattern.png";
import logoFooter from "../public/assets/images/logo-new.svg";
import Image from "next/image";
import Link from "next/link";

function ContectFooter() {
  return (
    <div className=" container mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-2 w-full pt-12 ">
      <div className=" flex flex-col justify-center items-start pl-4 gap-4  col-auto	lg:col-span-4 ">
        {/* image */}
        <div className=" flex items-start justify-start h-auto">
          <Image
            src={logoFooter}
            width={200}
            height={100}
            alt="Logo"
            layout="intrinsic"
            loading="lazy"
          />
        </div>
        <p className="text-sm text-white capitalize font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
          suspendisse leo neque iaculis molestie sagittis maecenas aenean eget
          molestie sagittis.
        </p>
        <h2 className="text-xl text-white font-mono  ">
          {" "}
          <span className="font-bold font-serif "> PO Box:</span>{" "}
          +47-252-254-2542{" "}
        </h2>
        <h2 className="text-xl text-white font-serif  ">
          {" "}
          <span className="font-bold font-serif "> Location:</span> Collins
          Street, sydney, Australia
        </h2>
        <h2 className="text-xl text-white font-serif  ">
          {" "}
          <span className="font-bold font-serif "> Email:</span>{" "}
          info@Travelin.com
        </h2>
        <h2 className="text-xl text-white font-serif  ">
          {" "}
          <span className="font-bold font-serif ">Website:</span>{" "}
          www.Travelin.com{" "}
        </h2>
      </div>
      <div className="  flex flex-col  items-start pl-4 gap-4 col-auto lg:col-start-5 lg:col-end-7">
        <ul className="flex flex-col gap-4">
          <li>
            <h1 className="relative font-serif capitalize text-2xl text-white font-bold ">
              Quick Link
              <span className=" absolute bottom-[-5px] left-0 h-1 w-[80%] bg-white"></span>
            </h1>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>About Us</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>Delivery Information</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>Terms & Conditions</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>Customer Service</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>Return Policy</Link>
          </li>
        </ul>
      </div>
      <div className="  flex flex-col items-start pl-4 gap-4 col-auto lg:col-start-7 lg:col-end-9">
        <ul className="flex flex-col gap-4">
          <li>
            <h1 className="relative font-serif capitalize text-2xl text-white font-bold ">
            Categories
              <span className=" absolute bottom-[-5px] left-0 h-1 w-[80%] bg-white"></span>
            </h1>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>Travel</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>Technology</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>Lifestyle</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>Destinations</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>Entertainment</Link>
          </li>
        </ul>
      </div>
      <div className=" flex flex-col items-start pl-4 gap-4 col-auto	  lg:col-start-9 lg:col-end-13 ">
      <div>
            <h1 className="relative font-serif capitalize text-2xl text-white font-bold ">
            Newsletter
              <span className=" absolute bottom-[-5px] left-0 h-1 w-[80%] bg-white"></span>
            </h1>
          </div>
      </div>
    </div>
  );
}

export default ContectFooter;
