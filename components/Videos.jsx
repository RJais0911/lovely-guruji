import React from "react";

function Videos() {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div>
        <h1 className="lg:text-4xl text-lg mt-20 font-bold lg:text-left text-center">
          Videos
        </h1>
        <p className="lg:text-lg text-sm mt-4 mb-20 font-semibold lg:text-left text-center  dark:text-gray-600 text-gray-400">
          check out video lectues
        </p>
        <div className="flex lg:flex-row flex-col space-y-3 lg:space-y-0 mx-2 justify-evenly">
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/6aP9nyTcd44"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/MJWOw8K_KyI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/nMSX-Cv9T8o"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/L-ykUrJrKUA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Videos;
