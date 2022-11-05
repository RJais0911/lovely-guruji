import React from "react";
import Blogs from "../components/Blogs";
import Stats from "../components/Stats";
import Courses from "../components/Courses";
import Videos from "../components/Videos";
import Contact from "../components/Contact";
import Carousal from "../components/Carousal";

function index() {
  return (
    <div>
      <Carousal />
      <div id="Courses">
        <Courses />
      </div>
      <Videos />
      <Stats />
      <div id="Blogs">
        <Blogs />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default index;
