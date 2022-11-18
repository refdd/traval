import React, { useRef, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import PackageCard from "./PackageCard";
import HeaderSection from "./helper/HeaderSection";
import OfferPackageCard from "./OfferPackageCard";
import  BlogCard from "../components/BlogCard"
import Link from "next/link";
function MultiPackage({ offerSection , Blogs }) {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);
  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      if (direction == "right") {
        rowRef.current.style.paddingLeft = 0;
      }
      if (direction == "left") {
        rowRef.current.style.paddingLeft = `${25}px`;
      }
    }
  };

  return (
    <div className="h-full space-y-0.5 md:space-y-2 bg-[#e6eef5]  ">
      {offerSection ? <HeaderSection 
      titel={"Top Offers"}
        partOne={" Egypt Special"}
         partTwo={" Offers & Discount Packages"}
          decs={""} 
          /> : ""}
      <div className="group  relative md:ml-2 ">
        <BsFillArrowLeftCircleFill
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 
           cursor-pointer  transition hover:scale-125  ${
             !isMoved && " hidden"
           }`}
          onClick={() => handleClick("left")}
        />
        <div
          ref={rowRef}
          className="flex  items-center gap-5 overflow-x-hidden scrollbar-hide sspace-x-2.5 pl-4"
        >
        { !offerSection ? <BlogCard/>: <OfferPackageCard/>}      
        </div>
        <BsFillArrowRightCircleFill
          className=" absolute top-0 bottom-0   right-2 z-40 m-auto h-9 w-9
            cursor-pointer  transition hover:scale-125 "
          onClick={() => handleClick("right")}
        />
      </div>
      <div className="  group w-full pt-10  md:pt-16 flex justify-center items-center  ">
        {!offerSection ? 
      <Link href={`/BlogList`}>
      <button className=" wrapper w-full md:w-auto group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
               <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                read more
                </button>
      </Link>
      :
      <Link href={`/BlogList`}>
        <button className=" wrapper w-[50%] mx-auto md:w-auto group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
                 <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                  read more
                  </button>
        </Link>  
      }
              
            </div>
    </div>
  );
}

export default MultiPackage;
