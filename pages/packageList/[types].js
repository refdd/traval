import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import { ToursOfTyps } from "../../data/dammyData";
function PackageList() {
  const [tourList, setTourList] = useState(null);

  const router = useRouter();
  const TypeTour = router.query.types;
  useEffect(() => {
    let alltour = ToursOfTyps.filter((tour) => tour.type === TypeTour);
    const { listTours } = alltour;
    setTourList(listTours);
  }, [TypeTour]);
  console.log(tourList);
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default PackageList;
