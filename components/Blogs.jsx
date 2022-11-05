import Link from "next/link";
import Layout from "./Layout";
export default function Blogs() {
  return (
    <Layout>
      <section className="relative p-5 py-16 bg-white dark:bg-transparent max-w-7xl mx-auto animation-fade animation-delay">
        <div className="container  mx-auto ">
          <h3 className="mt-1 font-ubuntu text-center text-lg md:text-xl font-bold md:text-left text-black dark:text-white  sm:text-3xl  lg:text-3xl sm:text-center sm:mx-0">
            Dev Talks
          </h3>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font dark:text-gray-300 text-gray-700">
                      by Jabed Zaman
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      5 Nov 2022
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium dark:text-gray-100 text-gray-900 title-font mb-2">
                      Full stack web developer roadmap
                    </h2>
                    <p className="leading-relaxed dark:text-gray-400">
                      An ultimate guide to how to become a full stack web
                      developer in 2022 at the most efficient way. Get to know
                      about the latest tech stack and become a sucessful web
                      developer.
                    </p>
                    <a className="text-indigo-500 inline-flex items-center mt-4">
                      <Link href="/blogs/web-dev-roadmap">
                      Learn More
                      </Link>
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
