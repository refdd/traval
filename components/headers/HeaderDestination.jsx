import React from 'react'
import { BsStarFill  } from 'react-icons/bs'
import { BiLocationPlus } from 'react-icons/bi'
function HeaderDestination() {
  return (
    <div className='pt-14 '>
        <div className='flex container gap-1 mx-auto flex-col justify-center items-center md:justify-start md:items-start md:gap-3 '>
           <h1  className='text-3xl capitalize font-bold font-serif text-[#17233e] text-center md:text-6xl md:text-left'>Egpyt tours</h1>
           <div className='flex  flex-col justify-center items-center md:flex-row md:w-full gap-2 md:justify-start '>
            <p className='text-[#777] text-lg font-serif capitalize flex justify-center items-center gap-1  '> <span><BiLocationPlus/></span> Greater London, United Kingdom </p>
          
               <div className='flex justify-center items-start '>
               <BsStarFill color="#ffc107" />
              <BsStarFill color="#ffc107" />
              <BsStarFill color="#ffc107" />
              <BsStarFill color="#ffc107" />
               </div>
               <p className='text-[#777] text-lg font- capitalize text-center  '>(1,186 Reviews)</p>
        
            </div>        
        </div>
    </div>
  )
}

export default HeaderDestination