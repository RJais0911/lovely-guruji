import Link from "next/link";
import Layout from "./Layout";

const data = [
  {
    title: "Web development Roadmap",
    href: "/blogs/web-dev-roadmap",
    author: "Jabed Zaman",
    date: "2022-09-01",
    description: "A guide to become a successful full stack web developer",
  },
  {
    title: "Web development Roadmap",
    href: "/blogs/web-dev-roadmap",
    author: "Jabed Zaman",
    date: "2022-09-01",
    description: "A guide to become a successful full stack web developer",
  },
  {
    title: "Web development Roadmap",
    href: "/blogs/web-dev-roadmap",
    author: "Jabed Zaman",
    date: "2022-09-01",
    description: "A guide to become a successful full stack web developer",
  },
];

export default function Blogs() {
  return (
    <Layout>
      <section className="text-gray-600 dark:text-gray-200 body-font max-w-7xl mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col space-y-3 w-full mb-2">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl  font-medium title-font mb-2 dark:text-gray-100 text-gray-900">
                Dev Talks
              </h1>
              <div className="h-1 w-20 dark:bg-orange-600 bg-orange-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Vast your knowledge with our blogs
            </p>
          </div>
          <div>
            {data.map((item) => (
              <div key={item.title} className="flex flex-colspace-y-3">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="mt-1 text-gray-500 text-sm">
                      {item.date}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      {item.author}
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium dark:text-white  text-gray-900 title-font mb-2">
                      {item.title}
                    </h2>
                    <p className="leading-relaxed">{item.description}</p>
                    <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
                      Read More
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
            ))} 
          </div>
        </div>
      </section>
    </Layout>
  );
}
