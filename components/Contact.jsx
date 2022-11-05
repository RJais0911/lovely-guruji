import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Layout from "./Layout";
import Link from "next/link";

export default function Example() {
  return (
    <Layout>
      <div className="relative dark:bg-black bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2  " />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="  py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight dark:text-gray-100 text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Feel free to drop a message and we would get back to you ASAP
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>Phagwara, Punjab</p>
                    <p>India</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+91 99999 99999</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">support@lovelyguruji.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white dark:bg-black py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                action={process.env.NEXT_FORM_URL}
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    required
                    type="text"
                    name="full-name"
                    minLength={3}
                    id="full-name"
                    autoComplete="name"
                    className="block w-full dark:bg-black dark:border-gray-600 shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full dark:bg-black dark:border-gray-600 shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    required
                    inputMode=""
                    maxLength={10}
                    minLength={10}
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full dark:bg-black dark:border-gray-600 shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full dark:bg-black dark:border-gray-600 shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={""}
                    minLength={20}
                    maxLength={500}
                  />
                </div>
                <div className="flex flex-row items-center">
                  <input
                    required
                    type="checkbox"
                    className="mr-3 outline-none dark:bg-black"
                    id="checkbox"
                    name="checkbox"
                  />
                  <label htmlFor="checkbox" className="text-base text-gray-500">
                    Agree to {""}
                    <span className="font-ubuntu selection:text-gray-700 underline">
                      <Link href="/termsandcondition">
                        Terms and Condtitions
                      </Link>
                    </span>
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-ubuntu rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
