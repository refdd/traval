import React , {useState} from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { CATEGORY} from "../data/dammyData"
import MultiPackage from './MultiPackage';


function SelectPackagess() {
  const { setDisplayType } = useStateContext() 
    const [activeId, setActiveId] = useState(null);
    const handleClick = (id , type)=> ()=> {
        const activeElement = CATEGORY.find((item)=> item.id === id )
    
        activeElement && setActiveId(id)
        activeElement && setDisplayType(type)
       
      }
     
  return (
    <div className=' w-full bg-[#e6eef5] '>
        {/* header seaction */}
        <div className='flex flex-col gap-3 justify-center items-center'>
            <h4 className='text-xl font-medium font-serif capitalize text-[#fdc703]'> Bucket List   </h4>
            <h2 className='text-3xl font-bold font-serif capitalize text-center'>Egypt River <span className='text-[#029e9d]'> Nile Cruises</span> </h2>
            <p className='text-center text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ratione earum corrupti quasi vitae accusamus.</p>
        </div>
        {/* tags Section */}
        <div className=' w-full h-[auto] '>
            <ul className='flex flex-wrap gap-2 justify-center items-center my-6 '>
            {CATEGORY && CATEGORY.map(({type,id} ) => (
              <li 
              className={ id === activeId  ?  "p-3 border rounded-xl flex justify-center flex-1 bg-[#029e9d]" :" p-3 border rounded-xl flex justify-center flex-1" } 
              key={id}
              onClick={handleClick(id , type)}
              >
                <button className={id === activeId  ? "text-[#fff]" : ""} > {type}</button>
              </li>
          ))}
            </ul>
         
        </div>
        
         

    </div>
  )
}

export default SelectPackagess