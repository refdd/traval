import React , {useState} from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { CATEGORY} from "../data/dammyData"
import HeaderSection from './helper/HeaderSection';
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
        <HeaderSection
        titel="Bucket List   "
        partOne="Egypt River"
        partTwo=" Nile Cruises"
        decs="The best Nile Cruise trip with the best prices. Choose your cruise route from Luxor to Aswan or Cruise Lake Nasser. "
        />
       
        {/* tags Section */}
        <div className=' w-full h-[auto] '>
            <ul className='flex flex-wrap gap-2 justify-center  items-center my-6 '>
            {CATEGORY && CATEGORY.map(({type,id} ) => (
              <li 
              className={ id === activeId  ?  "p-3 border rounded-xl flex justify-center w-[50%]  md:flex-1 bg-[#029e9d]" :" p-3 border rounded-xl flex justify-center w-[50%] md:flex-1" } 
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