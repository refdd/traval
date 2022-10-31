import React from 'react'
import Background from "../public/assets/images/shape4.png"
import {BiDirections ,BiLocationPlus } from 'react-icons/bi'
import {AiOutlineCompass , AiTwotoneFlag  } from 'react-icons/ai'
function PerfectTour() { 
  return (
    <div style={{backgroundImage: `url(/_next/static/media/shape4.ef03d001.png)`}}
     className="bg-no-repeat bg-cover bg-center  flex flex-col bg-[#e6eef5]   w-full  md:pt-20  pt-10 ">
          {/* header seaction */}
        <div className='flex flex-col gap-3 justify-center items-center'>
            <h4 className='text-xl font-medium font-serif capitalize text-[#fdc703]'>3 step Of The Perfect Tour </h4>
            <h2 className='text-3xl font-bold font-serif capitalize text-center'>find <span className='text-[#029e9d]'>Travel Perfection</span> </h2>
            <p className='text-center text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ratione earum corrupti quasi vitae accusamus.</p>
        </div>
          {/* card  */}
        <div className='flex flex-col md:flex-row justify-center mt-7 items-center px-6   gap-6 '>
        
           <div className=' group  wrapper text-white flex flex-col w-[90%] md:w-1/4 gap-5 hover:text-white  justify-center items-center p-7 overflow-hidden rounded-xl border '>
           <div className='z-10'>
           <AiTwotoneFlag className='  duration-1000 group-hover:text-white text-[#029e9d]' size={70} />
           </div>
           <h2 className='text-2xl text-[#17233e] font-serif font-bold z-10 duration-1000 group-hover:text-white  '>Share Your Travel Preference</h2> 
           <p className='text-center text-[#777] z-10 duration-1000 group-hover:text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
           <div className='w-full PrefectCard bg-[#029e9d]  absolute bottom-0 left-0  ' ></div>
           </div>
           {/*  */}
           <div className=' group  wrapper text-white flex flex-col w-[90%] md:w-1/4 gap-5 hover:text-white  justify-center items-center p-7 overflow-hidden rounded-xl border '>
           <div className='z-10'>
           <AiTwotoneFlag className='  duration-1000 group-hover:text-white text-[#029e9d]' size={70} />
           </div>
           <h2 className='text-2xl text-[#17233e] font-serif font-bold z-10 duration-1000 group-hover:text-white  '>Share Your Travel Preference</h2> 
           <p className='text-center text-[#777] z-10 duration-1000 group-hover:text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
           <div className='w-full PrefectCard bg-[#029e9d]  absolute bottom-0 left-0  ' ></div>
           </div>
           {/*  */}
           <div className=' group  wrapper text-white flex flex-col w-[90%] md:w-1/4 gap-5 hover:text-white  justify-center items-center p-7 overflow-hidden rounded-xl border '>
           <div className='z-10'>
           <AiTwotoneFlag className='  duration-1000 group-hover:text-white text-[#029e9d]' size={70} />
           </div>
           <h2 className='text-2xl text-[#17233e] font-serif font-bold z-10 duration-1000 group-hover:text-white  '>Share Your Travel Preference</h2> 
           <p className='text-center text-[#777] z-10 duration-1000 group-hover:text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
           <div className='w-full PrefectCard bg-[#029e9d]  absolute bottom-0 left-0  ' ></div>
           </div>
           {/*  */}
           <div className=' group  wrapper text-white flex flex-col w-[90%] md:w-1/4 gap-5 hover:text-white  justify-center items-center p-7 overflow-hidden rounded-xl border '>
           <div className='z-10'>
           <AiTwotoneFlag className='  duration-1000 group-hover:text-white text-[#029e9d]' size={70} />
           </div>
           <h2 className='text-2xl text-[#17233e] font-serif font-bold z-10 duration-1000 group-hover:text-white  '>Share Your Travel Preference</h2> 
           <p className='text-center text-[#777] z-10 duration-1000 group-hover:text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
           <div className='w-full PrefectCard bg-[#029e9d]  absolute bottom-0 left-0  ' ></div>
           </div>
    
        </div>
        
  </div>
  )
}

export default PerfectTour