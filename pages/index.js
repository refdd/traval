import Image from "next/image";
import BookingSearch from "../components/BookingSearch";
import Explore from "../components/Explore";
import FandQ from "../components/FandQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderSection from "../components/helper/HeaderSection";
import MultiPackage from "../components/MultiPackage";
import NavBar from "../components/NavBar";
import PerfectTour from "../components/PerfectTour";
import SelectPackagess from "../components/SelectPackagess";
import Testimonails from "../components/Testimonails";
import bg from "../public/assets/images/bg4.jpg";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <BookingSearch />
      <section className=" md:pt-16  bg-[#e6eef5]  ">
        <SelectPackagess />
        <MultiPackage package={true} />
      </section>
      <section className="  pt-11  md:pt-16  bg-[#e6eef5]  ">
        <MultiPackage offerSection={true} />
      </section>
      <PerfectTour />

      <Testimonails />
      <section className="  pt-11  md:pt-16  bg-[#e6eef5]  ">
        <HeaderSection
          titel={"Our Blogs Offers"}
          partOne={"Recent"}
          partTwo={"Articles & Posts"}
          decs={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          }
        />
        <MultiPackage Blogs={true} />
      </section>

      <Explore />
      <FandQ />
      
      <Footer/>         
    </div>
  );
}
