import React from "react";
import {useStateContext} from "../contexts/ContextProvider"
function Header() {
  const {initialState} = useStateContext();
  return (
    <div className="relative overflow-hidden ">
      <div className=" relative w-full h-auto ">
        <div>
          {/* video and lay out  */}
          <div>
            <div className="w-full h-full ">
             <video className=" w-full h-full object-cover" src={require("../public/assets/tour.mp4")} autoPlay loop muted/>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[##0000005e]  " > </div>
          </div>

          {/* content  */}
          <div className="absolute top-0 flex flex-col  justify-center items-center w-full h-full text-slate-100 "> 
           <h2 className="text-xl text-white text-center font-serif  ">Travelen </h2>
           <p className="text-white text-center text-3xl w-[285px] md:text-6xl md:w-[700px] md:font-bold font-serif  ">Create Yout Jouruey Joufull Through Us </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
