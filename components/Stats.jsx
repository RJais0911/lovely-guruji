import Layout from "./Layout";

/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { name: "Total Subscribers", stat: "71,897" },
  { name: "Avg. Open Rate", stat: "58.16%" },
  { name: "Avg. Click Rate", stat: "24.57%" },
];

export default function Example() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-8">
        <h3 className="lg:text-4xl text-lg font-semibold text-center leading-6 font-ubuntu  dark:text-gray-100 text-gray-900">
          Happy Learners
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="px-4 py-5 bg-white dark:bg-black dark:shadow-gray-700 shadow rounded-lg overflow-hidden sm:p-6"
            >
              <dt className="text-sm font-medium text-gray-500 truncate">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold dark:text-gray-100 text-gray-900">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Layout>
  );
}
