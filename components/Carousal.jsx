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
            <img src="1.png" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src=" 1.png" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src="1.png" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>
    </Layout>
  );
}

export default Carousal;
