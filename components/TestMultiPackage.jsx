import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import React, { useRef , useState } from 'react'
import PackageCard from './PackageCard';
function TestMultiPackage() {
    const rowRef = useRef(null)
  const [isMoved, setIsMoved] = useState(false)
  const handleClick = (direction) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth  } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
      if(direction == "right"){

          rowRef.current.style.paddingLeft = 0
      }
      if(direction == "left"){
        rowRef.current.style.paddingLeft = `${25}px`

      }
    }
  }

    return (
        <div className='h-full space-y-0.5 md:space-y-2  '>
            <div className='group  relative md:ml-2 '>
             <BsFillArrowLeftCircleFill className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 
                 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && " hidden"}`}
                 onClick={() => handleClick('left')}
                 />
                 <div ref={rowRef} className='flex  items-center gap-5 overflow-x-hidden scrollbar-hide sspace-x-2.5 pl-6'>
                    <PackageCard/>
                 </div>
                <BsFillArrowRightCircleFill className=' absolute top-0 bottom-0   right-2 z-40 m-auto h-9 w-9
                  cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100' 
                  onClick={() => handleClick('right')}
                  />
            </div>
    
        </div>
  )
}

 export default TestMultiPackage