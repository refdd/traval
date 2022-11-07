import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HeaderParts from "../../components/headers/HeaderParts";
import NavBar from "../../components/NavBar";
import { ToursOfTyps } from "../../data/dammyData";
import Select from 'react-select';
import {BsFillGrid3X3GapFill , BsList}from "react-icons/bs"
import CardTorList from "../../components/cards/CardTorList";
import Explore from "../../components/Explore"
import Footer from "../../components/Footer"
const options1 = [
    { value: 'price', label: 'price' },
    { value: 'days ', label: 'days' },
    { value: 'typs ', label: 'typs' },
   
  ]
function PackageList() {
  const [tourList, setTourList] = useState(null);
  const [typeList, setTypeList] = useState(null);
  const router = useRouter();
  const {types} = router.query;

  useEffect(() => {
    let alltour = ToursOfTyps.find((tour) => tour.type === types);
    const { listTours ,type } = alltour;
    setTourList(listTours);
    setTypeList(type)
    
  }, [types]);
  
  if (!types) return null

  return (
    <div className="">
      <NavBar />
      <HeaderParts typeList={typeList}/>
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-3  ">
       <div className="flex flex-col gap-3 col-start-1 col-end-6   w-full md:col-span-3">
       {/* left side */}
       <div className="flex flex-col md:flex-row gap-3  justify-center items-center md:justify-between ">
        <p className=" text-center md:text-left md:pl-2  text-xl text-[#777] font-serif capitalize">showing 1-5 of 80 results</p>
        <div className="flex gap-3 w-[60%] md:w-auto justify-center items-center">
        <span><BsList size={30} color="#777" /> </span>
        <span><BsFillGrid3X3GapFill size={30} color="#777" /> </span>
        <div className="w-[250px]">
        <Select
        placeholder={<div> Sort...</div>}
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options1[0].value}
        name="color"
        options={options1}
      />

        </div>
        </div>
       </div>
{/* tour list */}
    <CardTorList packages={tourList}/>
        
       </div>
       <div className=" w-full col-start-1 col-end-6  md:col-start-4 md:col-end-6  ">
        form 
       </div>
      </div>
      <Explore/>
      <Footer/>
    </div>
  );
}

export default PackageList;
