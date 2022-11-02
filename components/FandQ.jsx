import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import HeaderSection from './helper/HeaderSection';

function FandQ() {
    const [active, setActive] = useState(false);

  const contentRef = useRef(null);

//   useEffect(() => {
//     contentRef.current.style.maxHeight = active
//       ? `${contentRef.current.scrollHeight}px`
//       : "0px";
//   }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <>
      <div className=" pt-11  md:pt-16  bg-[#e6eef5]">
        <HeaderSection titel="FaQ"partOne="Frapuent Asked "
         partTwo="Questions" 
         decs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
         <div className='flex flex-col container m-auto flex-wrap md:flex-row '>
           <div className='w-2/4 '></div>
           <div className='w-2/4 '>Quistion 1</div>
           <div className='w-2/4 '>Quistion 1</div>
           <div className='w-2/4 '>Quistion 1</div>
           <div className='w-2/4 '>Quistion 1</div>
           <div className='w-2/4 '>Quistion 1</div>
           <div className='w-2/4 '>Quistion 1</div>
         </div>
        {/* <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                  Why do you like web developemnt
                </h4>
                <AiFillPlusCircle
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>Because I love coding</p>
              </div>
            </div>
          </button>
        </div> */}
      </div>
    </>
  );
}

export default FandQ