import React from "react";
import Layout from "../components/Layout";

function Videos() {
  const Videos = [
    {
      url: "https://www.youtube.com/embed/6aP9nyTcd44",
    },
    {
      url: "https://www.youtube.com/embed/MJWOw8K_KyI",
    },
    {
      url: "https://www.youtube.com/embed/L-ykUrJrKUA",
    },
    // {
    //   url: "https://www.youtube.com/embed/nMSX-Cv9T8o",
    // },
  ];
  return (
    <Layout>
      <section className="text-gray-600 dark:text-gray-200 body-font max-w-7xl mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col space-y-3 w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl  font-medium title-font mb-2 dark:text-gray-100 text-gray-900">
                Checkout our video lectures
              </h1>
              <div className="h-1 w-20 dark:bg-orange-600 bg-orange-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              A video lecture can help you understand things even better than a
              text lecture. We have a wide range of video lectures for you to
              choose from.
            </p>
          </div>
          <div className="flex lg:flex-row md:flex-col justify-evenly lg:space-y-0 space-y-2 flex-col">
            {Videos.map((video) => (
              // eslint-disable-next-line react/jsx-key
              <iframe
                src={video.url}
                width="560"
                height="315"
                title="YouTube video player"
                className="mx-2 max-w-xs h-40 lg:hover:scale-105 transform transition duration-500 ease-in-out rounded-xl md:hover:shadow-xl"
              ></iframe>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Videos;
