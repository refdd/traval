import React from 'react'
import BookSearch from './helper/BookSearch';
import {BsBriefcase , BsFolderCheck } from "react-icons/bs"
import {CiLocationOn } from "react-icons/ci"

function BookingSearch() {
  return (
    <div className='w-full  bg-[#e6eef5]'>
      <div className='flex flex-col  w-full md:flex-row md:justify-between  '>
           {/* from booking  */}
           <div className='w-[90%] mx-auto  h-max py-10 px-5   drop-shadow-xl md:filter-none" bg-[#fff] rounded-lg md:w-[30%] md:p-0  md:m-0 md:ml-16 md:translate-y-[-86px]'> 
           <div className='w-ful h-full flex flex-col gap-3 rounded-lg overflow-hidden '>
            <div className='w-full bg-[#029e9d] ' >
                <p className='text-center text-white p-4 text-2xl font-serif '>Find A Place</p>
            </div>
            <div className='w-full h-full p-3 '>
                <BookSearch/>
            </div>
        
           </div>
            </div>
           {/* right side constent search  */}
           <div className='w-[90%] mx-auto  h-max py-10 px-5  bg-[#e6eef5] rounded-lg md:w-[60%] md:p-0  md:m-0  '> 
           <div className='w-full h-full md:h-[300px] '>
            <div className='flex flex-col gap-4 h-full w-full justify-center items-center p-4 border-b md:items-start  '>
              <h4 className='text-xl font-bold text-[#029e9d] font-serif '>Get To Know Us </h4>
              <h2 className=' text-2xl text-center font-serif font-bold capitalize text-[#17233e] md:text-4xl md:text-left md:leading-[3.5rem] '>Explre All Tour Of The World With Us .</h2>
              <p className='text-center leading-6 font-serif text-[#777] md:text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iusto corrupti, harum ipsum accusamus iste
                 omnis molestiae neque mollitia ut ad perspiciatis maiores
                  laborum ducimus ex non! Animi quam molestiae dolores?
                  </p>
            </div>

            <div className='w-full h-full '>
              <ul className='flex flex-wrap gap-2 justify-center items-center mt-5'> 
                <li className='flex gap-1 items-center text-[#777]'> 
                  <CiLocationOn color='#029e9d'/>
                  Tour Guide 
                </li>
                <li className='flex gap-1 items-center text-[#777] '>
                 <BsBriefcase color='#029e9d' />
                  Friendly price 
                </li>
                <li className='flex gap-1 items-center  text-[#777] '>
                  <BsFolderCheck color='#029e9d'/>
                  Reliable Tour Package
                </li>
              </ul>
            </div>
           </div>
           </div>
      </div>
    </div>
  )
}

export default BookingSearch