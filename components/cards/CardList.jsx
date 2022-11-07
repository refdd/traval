import Image from "next/image";
import defaultImage from "../../public/assets/images/trending3.jpg"
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
function CardList({packages}) {
  console.log(packages)
  return (
    <>
    {
      packages && packages.map((item) =>(
        <div key={item.id} className="flex flex-col md:flex-row gap-2 justify-center items-center w-[70%] mx-auto md:w-[90%] md:mx-4 bg-slate-100 p-5 rounded-xl mt-5 ">
    {/* image */}
    <div className="relative rounded-xl overflow-hidden md:w-[30%] md:h-48  ">
      <Image
       src={item.imageUrl}
       alt="Picture of the author"
       width={500}
       height={500}
       layout={"intrinsic"}
       loading="lazy"
       objectFit="fill"
       className=" transition duration-200 ease-out  md:hover:scale-105  "
      />
      {/* layout */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000057]"></div>
    </div>
    {/* content */}
    <div className="flex flex-col md:flex-row gap-2 justify-center items-center ">
      {/* right side */}
     <div className="flex flex-col gap-2 justify-center items-center md:justify-start md:items-start ">
     <p className="text-sm text-center md:text-left text-[#777] font-serif "> 6+ hours | Full Days tours</p>
      <h2 className="text-center md:text-left text-2xl capitalize font-serif "> {item.title}</h2>
        <p className="flex text-center md:text-left text-lg capitalize font-serif text-[#029e9d]"> <CiLocationOn size={24} color="#029e9d"/> {item.cpuntry}</p>
        <h4 className="text-xl text-[#777] font-serif capitalize text-center md:text-left">{item.type}</h4>
        <p className="text-[#029e9d] text-center md:text-left text-lg font-serif ">free cancellation</p>
     </div>
     {/* left side */}
    <div className="flex flex-col gap-2 justify-center items-center  md:justify-end md:items-end">
    <div className="flex gap-2 w-full justify-center items-center md:justify-end ">
        <AiFillStar size={24} color="#ffc107"/>
        <AiFillStar size={24} color="#ffc107"/>
        <AiFillStar size={24} color="#ffc107"/>
        <AiFillStar size={24} color="#ffc107"/>
        <AiFillStar size={24} color="#ffc107"/>
        </div>
        <p className="text-right text-lg text-[#777] font-serif " >200 reviews</p>
        <span className="text-[#777] font-serif text-lg md:text-right "> From </span>
        <h4 className="text-right font-mono font-bold text-xl"> ${item.price}</h4>
        <p className="text-right text-sm font-serif capitalize text-[#777]">per Aduit</p>
        <Link href={`/`}>
        <button className=" wrapper w-full md:w-auto group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
                 <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                  see more
                  </button>
        </Link>
    </div>
    </div>
   </div>
      ))
    }
   
    </>
  );
}

export default CardList;