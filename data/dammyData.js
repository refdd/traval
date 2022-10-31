import defaultImage from "../public/assets/images/trending3.jpg";
import Package from "../models/package";
import imageAfater from "../public/assets/images/img1.jpg";
import BlogsImage from "../public/assets/images/trending12.jpg";
import slagImage from "../public/assets/images/1.jpg";
import Blogs from "../models/blogs";
import Category from "../models/category-pac";
export const CATEGORY = [
  new Category(1, "Cycling"),
  new Category(2, "Family"),
  new Category(3, "Sailing"),
  new Category(4, "Hiking"),
  new Category(5, "Wildlife"),
];

export const blogsData = [
  new Blogs(
    "b1",
    BlogsImage,
    "Inspire Runner With Autism Graces Of Women's Running",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "David Scott",
    slagImage
  ),
  new Blogs(
    "b2",
    BlogsImage,
    "Services To Grow Your Business Sell Affiliate Products",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "John Bolden",
    slagImage
  ),
  new Blogs(
    "b3",
    BlogsImage,
    "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "Sollmond Nell",
    slagImage
  ),
  new Blogs(
   " b4",
    BlogsImage,
    "Inspire Runner With Autism Graces Of Women's Running",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "David Scott",
    slagImage
  ),
  new Blogs(
   " b5",
    BlogsImage,
    "Services To Grow Your Business Sell Affiliate Products",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "John Bolden",
    slagImage
  ),
  new Blogs(
    "b6",
    BlogsImage,
    "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "Sollmond Nell",
    slagImage
  ),
];

export const testimonialsData = [
  {
    image: imageAfater,
    review:
      "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
    name: "MATHEW HENDRICKSON",
    status: "ENTREPRENEUR",
  },
  {
    image: imageAfater,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ",
    name: "JOHN KEVIN",
    status: "COACH",
  },
  {
    image: imageAfater,
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem",
    name: "devalpers ",
    status: "CUSTOMER",
  },
  {
    image: imageAfater,
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem",
    name: "FRANKLIN",
    status: "CUSTOMER",
  },
];

export const PackageS = [
  new Package(
    "p1",
    "Cycling",
    defaultImage,
    "5 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0.2
  ),
  new Package(
    "p1",
    "Cycling",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p1",
    "Cycling",
    defaultImage,
    "7 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p1",
    "Cycling",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p1",
    "Cycling",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p1",
    "Cycling",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0
  ),

  new Package(
    "p1",
    "Family",
    defaultImage,
    "5 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p1",
    "Family",
    defaultImage,
    "5 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0.3
  ),
  new Package(
    "p1",
    "Family",
    defaultImage,
    "7 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p1",
    "Family",
    defaultImage,
    "7 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0.2
  ),
  new Package(
    "p1",
    "Family",
    defaultImage,
    "5 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p1",
    "Family",
    defaultImage,
    "7 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0
  ),

  new Package(
    "p1",
    "Sailing",
    defaultImage,
    "5 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p1",
    "Sailing",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p1",
    "Sailing",
    defaultImage,
    "7 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p1",
    "Sailing",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p1",
    "Sailing",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p1",
    "Sailing",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0
  ),

  new Package(
    "p1",
    "Hiking",
    defaultImage,
    "5 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p1",
    "Hiking",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p1",
    "Hiking",
    defaultImage,
    "7 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p1",
    "Hiking",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p1",
    "Hiking",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p1",
    "Hiking",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.6
  ),

  new Package(
    "p1",
    "Wildlife",
    defaultImage,
    "5 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p1",
    "Wildlife",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p1",
    "Wildlife",
    defaultImage,
    "7 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p1",
    "Wildlife",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p1",
    "Wildlife",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0.4
  ),
  new Package(
    "p1",
    "Wildlife",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
];
