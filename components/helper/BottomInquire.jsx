import Link from 'next/link'
import React from 'react'

function BottomInquire() {
  return (
    <div className='md:hidden fixed bottom-0 container mx-auto z-50  '>
      <Link href={"#InquireFrom"}>
      <div className='twark flex justify-center items-center py-2 bg-[#029e9d] rounded-lg  '>
            <button className='text-2xl text-white font-serif '>
                inquire now
            </button>
        </div>
      </Link>
        
    </div>
  )
}

export default BottomInquire