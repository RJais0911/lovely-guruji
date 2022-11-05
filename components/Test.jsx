/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block">Take a test quiz!!!</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="ml-3 inline-flex">
            <Link href="/quiz">
              <p className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md dark:text-orange-100 dark:hover:bg-orange-400 text-orange-500 dark:bg-orange-500 bg-orange-100 hover:bg-orange-200">
                Take Quiz
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
