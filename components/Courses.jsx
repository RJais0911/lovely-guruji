import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Link from "next/link";

function Courses() {
  return (
    <section className="mb-10 Courses max-w-3xl p-5 mx-auto bg-white dark:bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl text-center font-ubuntu font-semibold tracking-tight">
          Courses
        </h2>
        <p className="mt-2 text-lg font-ubuntu text-gray-600 dark:text-gray-200">
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-8 sm:px-8 xl:px-0">
              {/* eslint-disable-next-line @next/next/link-passhref */}
              <Link href="/courses/javascript">
                <div
                  className="relative cursor-pointer hover:scale-105 transition p-3 flex flex-col justify-between col-span-4 space-y-3 overflow-hidden"
                >
                  <LazyLoadImage
                    effect="blur"
                    className="m-0"
                    src="https://ik.imagekit.io/jabedzaman/lovely-guruji/icons8-javascript_3I0NAxGON.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667514653845"
                  /> 
                </div>
              </Link>  
              {/* eslint-disable-next-line @next/next/link-passhref */}
              <Link href="/courses/python">
                <div
                  className="relative cursor-pointer hover:scale-105 transition p-3 flex flex-col justify-between col-span-4 space-y-3 overflow-hidden"
                >
                  <LazyLoadImage
                    effect="blur"
                    className="m-0"
                    src="https://ik.imagekit.io/jabedzaman/lovely-guruji/icons8-python-480_wp5b0sN4A.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667514725511"
                  /> 
                </div>
              </Link>  
        </div>
      </div>
    </section>
  );
}

export default Courses;
