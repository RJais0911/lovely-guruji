import Layout from "./Layout";
import CountTo from "react-count-to";

/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { name: "Avg. Engagement", stat: "60.21" },
  { name: "Avg. Open Rate", stat: "88.16" },
  { name: "Avg. Click Rate", stat: "64.57" },
];

export default function Example() {
  const fn = (value) => <span>{value}%</span>;
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-8">
        <h3 className="lg:text-4xl text-lg font-semibold text-center leading-6 font-ubuntu  dark:text-gray-100 text-gray-900">
          Lovely Learners
        </h3>
        <dl className="mt-5 grid grid-cols-1 px-10 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="px-4 py-5 lg:text-left text-center  bg-[#fcfcfc] dark:bg-[#171717] hover:scale-105 duration-150 transform dark:shadow-gray-700 shadow rounded-lg overflow-hidden sm:p-6"
            >
              <dt className="text-sm font-medium text-gray-500 truncate">
                {item.name}
              </dt>
              <dd className="mt-1 lg:text-left text-center text-3xl font-semibold dark:text-gray-100 text-gray-900">
                <CountTo from={0} digits={2} to={item.stat} speed={2000}>
                  {fn}
                </CountTo>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Layout>
  );
}
