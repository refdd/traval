import React from "react";
import bg from "../public/assets/images/shape8.png";

import Test from "./test/Test";
import ContectFooter from "./ContectFooter";
function Footer() {
  return (
    // <footer>
    //   <div className=" relative pt-20   bg-[#17233e] bg-cover  w-full ">
    //     <div style={{ backgroundImage: `url(${bg.src})` }}
    //      className="absolute top-0 left-0 w-full h-24 bg-contain bg-repeat-x z-10">
    //      </div>
    //     {/* <Test /> */}

    //     {/* <ContectFooter/> */}
    //   </div>
    // </footer>
    <footer>
      <div className=" relative flex flex-col gap-7 bg-[#17233e] ">
        <div></div>
             <div style={{ backgroundImage: `url(${bg.src})` }}
                    className="  w-full h-24 bg-contain bg-top  mt-[-28px] bg-repeat-x z-10">
          </div>
         <Test />
         <div className="pt-3">

        <ContectFooter/>
         </div>
          
      </div>
    </footer>
  );
}

export default Footer;
