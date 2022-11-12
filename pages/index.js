import React from "react";
import Blogs from "../components/Blogs";
import Stats from "../components/Stats";
import Courses from "../components/Courses";
import Box from "../components/Box";
import Contact from "../components/Contact";
import Carousal from "../components/Carousal";
import Categories from "../components/Categories";
import Videos from "../components/Videos";
import Test from "../components/Test";
import Lottie from "../components/Lottie";

function index() {
  return (
    <div className=" bg-[#fcfcfc] dark:bg-[#171717]">
      <Carousal />
      <Stats />
      <div id="Courses">
        <Courses />
      </div>
      <Lottie/>
      <Box />
      <Videos />
      <Test />
      <div id="Blogs">
        <Blogs />
      </div>
      <Categories />
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default index;
