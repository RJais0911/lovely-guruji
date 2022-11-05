import { HandIcon, PlayIcon, StarIcon } from "@heroicons/react/solid";
import React from "react";
import Layout from "./Layout";

function box() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Layout>
        <div className="max-w-7xl mx-auto p-10 flex flex-row justify-between">
          <div className="flex flex-row space-x-3 items-center max-w-sm">
            <PlayIcon className="w-10 h-10 text-gray-900 dark:text-gray-100 rounded-full p-2 dark:bg-gray-800 bg-gray-200" />
            <p className="font-ubuntu dark:text-gray-200 text-gray-800 lg:text-sm text-xs ">
              <span className="hidden lg:inline-block">
                Best of the tutorials available
              </span>
              <span className="lg:hidden inline-block">Best tutorials</span>
            </p>
          </div>
          <div className="flex flex-row space-x-3 items-center max-w-sm">
            <StarIcon className="w-10 h-10 text-gray-900 dark:text-gray-100 rounded-full p-2 dark:bg-gray-800 bg-gray-200" />
            <p className="font-ubuntu dark:text-gray-200 text-gray-800 lg:text-sm text-xs ">
              <span className="hidden lg:inline-block">
                Best of the content available
              </span>
              <span className="lg:hidden inline-block">Best Content</span>
            </p>
          </div>
          <div className="flex flex-row space-x-3 items-center max-w-sm">
            <HandIcon className="w-10 h-10 text-gray-900 dark:text-gray-100 rounded-full p-2 dark:bg-gray-800 bg-gray-200" />
            <p className="font-ubuntu dark:text-gray-200 text-gray-800 lg:text-sm text-xs ">
              <span className="hidden lg:inline-block">
                Active contact support to solve doubts
              </span>
              <span className="lg:hidden inline-block">Active Support</span>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default box;
