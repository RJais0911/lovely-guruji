/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Courses() {
  return (
    <Layout>
      <section className="text-gray-600 dark:text-gray-200 body-font max-w-7xl mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col space-y-3 w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl  font-medium title-font mb-2 dark:text-gray-100 text-gray-900">
                A broad selection of courses
              </h1>
              <div
              className="h-1 w-20 dark:bg-orange-600 bg-orange-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Choose from online video courses with new additions published
              every month
            </p>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            <Link href="/courses/javascript">
              <div className="xl:w-1/4 md:w-1/2 cursor-pointer p-4 hover:scale-105 duration-150 transform">
                <div className="bg-[#f8f8f8] dark:bg-[#242424] p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://ik.imagekit.io/jabedzaman/lovely-guruji/icons8-javascript_3I0NAxGON.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667514653845"
                    alt="content"
                  />
                  <h2 className="text-lg text-gray-900  dark:text-gray-100 font-medium title-font mb-4">
                    JavaScript
                  </h2>
                  <p className="leading-relaxed text-base">
                    JavaScript, often abbreviated as JS, is a programming
                    language that is one of the core technologies of the World
                    Wide Web, alongside HTML and CSS.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/courses/python">
              <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer hover:scale-105 duration-150 transform">
                <div className="bg-[#f8f8f8] dark:bg-[#242424] p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://ik.imagekit.io/jabedzaman/lovely-guruji/icons8-python-480_wp5b0sN4A.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667514725511"
                    alt="content"
                  />
                  <h2 className="text-lg text-gray-900 dark:text-gray-100 font-medium title-font mb-4">
                    Python
                  </h2>
                  <p className="leading-relaxed text-base">
                    A high-level, general-purpose programming language. Its
                    design philosophy emphasizes code readability with the use
                    of significant indentation.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Courses;
