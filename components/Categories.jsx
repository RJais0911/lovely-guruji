import React from "react";
import Layout from "./Layout";

function Categories() {
  return (
    <Layout>
      <div className=" hidden lg:inline">
        <div className="bg-gray-100 dark:bg-gray-900">
          <div className="p-10 max-w-7xl mx-auto">
            <h1 className="my-10 text-3xl font-bold text-black dark:text-gray-100">Categories Available</h1>
            <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-2">
              <div>
                <h1 className="font-ubuntu font-semibold dark:text-white text-black text-2xl">
                  Programming
                </h1>
              </div>
              <div>
                <h2 className="text-orange-500 dark:text-orange-600 text-xl hover:underline underline-offset-4">
                  Javascript
                </h2>
                <p className="text-gray-800 dark:text-gray-300">learn javascript</p>
              </div>
              <div>
                <h2 className="text-orange-500 dark:text-orange-600 text-xl hover:underline underline-offset-4">
                  Python
                </h2>
                <p className="text-gray-800 dark:text-gray-300">learn python</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div>
                <h1 className="font-ubuntu font-semibold dark:text-white text-black text-2xl">
                  Snippets
                </h1>
              </div>
              <div>
                <h2 className="text-orange-500 dark:text-orange-600 text-xl hover:underline underline-offset-4">
                  Javascript
                </h2>
                <p className="text-gray-800 dark:text-gray-300">get javascript snippets</p>
              </div>
              <div>
                <h2 className="text-orange-500 dark:text-orange-600 text-xl hover:underline underline-offset-4">
                  Python
                </h2>
                <p className="text-gray-800 dark:text-gray-300">get python snippets</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div>
                <h1 className="font-ubuntu font-semibold dark:text-white text-black text-2xl">
                  Resources
                </h1>
              </div>
              <div> 
                <p className="text-gray-800 dark:text-gray-300">learn javascript</p>
              </div>
              <div> 
                <p className="text-gray-800 dark:text-gray-300">learn python</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Categories;
