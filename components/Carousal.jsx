import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Layout from "./Layout";

function Carousal() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <Carousel
          autoPlay
          infiniteLoop
          interval={1500}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          <div>
            <img src="https://ik.imagekit.io/jabedzaman/lovely-guruji/with_name_rRwLRIWPi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667418556099" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src=" https://ik.imagekit.io/jabedzaman/lovely-guruji/Grow_Your_HtMCDGhro.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669387204476" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
        </Carousel>
      </div>
    </Layout>
  );
}

export default Carousal;
