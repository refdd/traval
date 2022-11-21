import React from "react";
import logoFooter from "../public/assets/images/logo-white.png";
import bg from "../public/assets/images/background_pattern.png";
import Image from "next/image";
import Link from "next/link";

function ContectFooter() {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className=" container mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-2 w-full pt-12 bg-no-repeat  "
    >
      <div className=" flex flex-col justify-center items-start pl-4 gap-4  col-auto	lg:col-span-4 ">
        {/* image */}
        <div className=" flex items-start justify-start h-auto">
          <Image
            src={logoFooter}
            width={300}
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
          {/* line */}
        <div className="flex gap-2 text-xl text-white font-mono items-center">
          <span className="font-bold font-serif ">
            {" "}
            PO Box:
          </span>{" "}
          <p className="text-sm">
          +47-252-254-2542
          </p></div>
          {/* line */}
        <div className="flex gap-2 text-xl text-white font-mono items-center">
          <span className="font-bold font-serif ">
            {" "}
            Location:
          </span>{" "}
          <p className="text-sm">
          Collins Street, sydney, Australia
          </p></div>
          {/* line */}
        <div className="flex gap-2 text-xl text-white font-mono items-center">
          <span className="font-bold font-serif ">
            {" "}
            Website:
          </span>{" "}
          <p className="text-sm">
          www.refat.com
          </p></div>
        <h6 className="text-xl text-white font-serif  ">
          {" "}
          <span className="font-bold font-serif "> Email:</span>{" "}
          mohamed@refat.com
        </h6>
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
            <Link href={"/AboutUs"}>About Us</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/CountactUs"}>Contact Us</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>Terms & Conditions</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/"}>Payment Policy</Link>
          </li>
          <li className="text-xl text-white font-serif transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/Detinations"}>Detinations</Link>
          </li>
        </ul>
      </div>

      <div className=" flex flex-col items-start pl-4 gap-4 md:gap-8 col-auto	  lg:col-start-9 lg:col-end-13 ">
        <div>
          <h1 className="relative font-serif capitalize text-2xl text-white font-bold ">
            Newsletter
            <span className=" absolute bottom-[-5px] left-0 h-1 w-[80%] bg-white"></span>
          </h1>
        </div>
        <p className="text-lg font-serif text-white ">
          Jin our community of over 20,000 global readers who receives emails
          filled with news, promotions, and other good stuff
        </p>
        <div className="flex w-full flex-col md:flex-row gap-1">
          <input
            className=" w-full h-12 py-3 px-4 mb-1 text-[#777]  rounded-2xl"
            placeholder="email Address"
            type="text"
            name="email"
          />
          <div className="  group flex justify-center items-center  md:justify-start ">
            <button
              style={{ background: "#029e9d" }}
              className=" wrapper w-full ring-2 shadow-md ring-[#ffffff1a] ring-inset group-hover:text-white  px-5 py-3 rounded-2xl z-10 text-white overflow-hidden  "
            >
              <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
              subscrbe
            </button>
          </div>
        </div>
      </div>
      {/* <div className=" w-full  bg-white  col-start-9 col-end-13  ">fsdfjdkjflksjfldjslkfjsdlk</div> */}
    </div>
  );
}

export default ContectFooter;
