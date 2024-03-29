import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" bg-[#fcfcfc] border-t-2 dark:border-0 dark:bg-[#171717] dark:text-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-gray-500 lg:hover:text-gray-900"
            >
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-gray-500 lg:hover:text-gray-900"
            >
              Courses
            </a>
          </div>{" "}
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-gray-500 lg:hover:text-gray-900"
            >
              Dev Talks
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-gray-500 lg:hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </nav>
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <Link href="/feedback">
          <p className="mt-8 text-base leading-6 text-center text-gray-400 cursor-pointer">
            Share feedback
          </p>
        </Link>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2022 Lovely Guruji . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
