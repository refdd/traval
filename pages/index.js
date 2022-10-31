import Head from "next/head";
import Image from "next/image";
import BookingSearch from "../components/BookingSearch";
import Header from "../components/Header";
import HeaderSection from "../components/helper/HeaderSection";
import MultiPackage from "../components/MultiPackage";
import NavBar from "../components/NavBar";
import PerfectTour from "../components/PerfectTour";
import SelectPackagess from "../components/SelectPackagess";
import Testimonails from "../components/Testimonails";
import TestMultiPackage from "../components/TestMultiPackage";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <BookingSearch />
      <section className=" md:pt-16  bg-[#e6eef5]  ">
      <SelectPackagess />
        <MultiPackage package={true}/>
      </section>
      <PerfectTour/>
      <section className="  pt-11  md:pt-16  bg-[#e6eef5]  ">

      <MultiPackage offerSection={true} />
      </section>
      <Testimonails />
      <section className="  pt-11  md:pt-16  bg-[#e6eef5]  ">
        <HeaderSection
        titel={"Our Blogs Offers"}
        partOne={"Recent"}
        partTwo={"Articles & Posts"}
        decs={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
        />
         <MultiPackage Blogs={true}/>
      </section>

     
    </div>
  );
}
