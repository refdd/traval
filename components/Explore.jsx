import React from "react";
import bg from "../public/assets/images/bg4.jpg";
import { AiFillPlayCircle, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import Partners from "./Partners";
function Explore() {
  const [showvideo, setShowvideo] = useState(false);
  return (
  <>
    <div className=" relative container mx-auto px-4  py-14  ">
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="h-screen w-full bg-cover	 bg-no-repeat bg-right rounded-2xl  overflow-hidden	  "
      >
        <div className=" flex flex-col justify-between items-center h-full md:flex-row ">
          {/* content  */}
          <div className="flex flex-col gap-4  p-7 bg-[#029e9d] mt-0 h-3/5 md:h-full md:w-2/4 md:py-20  md:gap-6  ">
            <h2 className="text-xl text-[#fff] text-center font-bold  capitalize font-serif md:text-2xl md:text-left ">
              Love Where Your're Goingyou&apos;re free
            </h2>
            <h1
              className="text-2xl font-serif font-bold capitalize
             text-[#fdc703] text-center md:text-5xl md:leading-[3.5rem] md:font-extrabold  md:text-left "
            >
              <span className="text-[#fff]">Explore Your Life,</span> Travel
              Where You Want!
            </h1>

            <p className=" text-[#fff] leading-6 text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className=" text-[#fff] leading-6 text-center md:text-left">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <div className="  group flex justify-center items-center  md:justify-start ">
              <button
                style={{ background: "#17233e" }}
                className=" wrapper  group-hover:text-white  px-5 py-3 rounded-2xl z-10 text-white overflow-hidden  "
              >
                <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                read more
              </button>
            </div>
          </div>

          {/*vido popup   */}

          {showvideo ? (
            <div className="  fixed top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]  h-full bg-[#0000007a] p-4 w-full z-[1000000] ">
              <span className="cursor-pointer  absolute top-[30%] right-5 rounded-full p-3 md:right-[84px] md:top-[29%]">
                <AiFillCloseCircle
                  size={30}
                  color="#fff"
                  onClick={() => setShowvideo(false)}
                />
              </span>
              <div className=" absolute top-[35%] right-5 p-3 w-full   ">
                <iframe
                  class=" w-full h-[299px]   ml-5 md:h-[350px]  md:m-auto md:w-[89%] "
                  src=""
                ></iframe>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* buttom puse  */}

          <div className="  flex flex-col items-center justify-center h-2/5 md:w-2/4">
            <div className="ripple">
              {" "}
              <AiFillPlayCircle
                size={60}
                color="#029e9d"
                onClick={() => setShowvideo(true)}
              />{" "}
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <Partners/>
    </>
  );
}

export default Explore;
