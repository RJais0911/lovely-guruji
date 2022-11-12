import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

function Header() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  if (theme == null) return null;
  return (
    <header className="font-extrabold sticky top-0 z-20 opacity-80">
      <div className=" dark:bg-[#171717] bg-[#f3f3f3] shadow-lg mb-0 dark:shadow-xl  border-b dark:border-black">
        <div className="p-5 font-poppins  mx-auto flex max-w-7xl text-lg items-center justify-between text-black dark:text-white">
          <div className="flex space-x-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ik.imagekit.io/jabedzaman/lovely-guruji/logo_DExChackXZ?ik-sdk-version=javascript-1.4.3&updatedAt=1667510424119"
              width={60}
              alt=""
            />
          </div>
          <div className="flex space-x-10 items-center ">
            <div className="dark:text-gray-100 font-ubuntu text-sm lg:text-lg text-gray-900 lg:hover:bg-gray-200/90 dark:lg:hover:bg-[#202020] duration-300 transform lg:hover:text-black dark:lg:hover:text-white px-2 py-1 rounded-lg  lg:inline hidden">
              <Link href="/">Home</Link>
            </div>
            <div className="dark:text-gray-100 font-ubuntu text-sm lg:text-lg text-gray-900 lg:hover:bg-gray-200/90 dark:lg:hover:bg-[#202020] duration-300 transform lg:hover:text-black dark:lg:hover:text-white px-2 py-1 rounded-lg ">
              <Link href="/#Courses">Courses</Link>
            </div>
            <div className="dark:text-gray-100 font-ubuntu text-sm lg:text-lg text-gray-900 lg:hover:bg-gray-200/90 dark:lg:hover:bg-[#202020] duration-300 transform lg:hover:text-black dark:lg:hover:text-white px-2 py-1 rounded-lg  lg:inline hidden">
              <Link href="/#Blogs">Dev Talks</Link>
            </div>
            <div className="dark:text-gray-100 font-ubuntu text-sm lg:text-lg text-gray-900 lg:hover:bg-gray-200/90 dark:lg:hover:bg-[#202020] duration-300 transform lg:hover:text-black dark:lg:hover:text-white px-2 py-1 rounded-lg  lg:inline hidden">
              <Link href="/#Contact">Solve Doubts</Link>
            </div>
            <div
              className="bg-[#f8f8f8] text-black cursor-pointer border-black lg:hover:text-gray-500 dark:lg:hover:text-gray-500 dark:border-white dark:bg-[#171717] dark:text-white p-1  rounded-full"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FaSun /> : <BsFillMoonStarsFill />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
