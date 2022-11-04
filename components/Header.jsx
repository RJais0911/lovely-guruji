import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";;
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  if (theme == null) return null;
  return (
    <header className="font-extrabold">
     

      <div className=" dark:bg-black bg-white shadow-lg mb-10 dark:shadow-xl dark:shadow-gray-900  border-b dark:border-black">
        <div className="p-5 font-poppins  mx-auto flex max-w-7xl text-lg items-center justify-between text-black dark:text-white">
          <div className="flex space-x-6">
            <div className="hidden md:flex space-x-8">
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://ik.imagekit.io/jabedzaman/lovely-guruji/logo_DExChackXZ?ik-sdk-version=javascript-1.4.3&updatedAt=1667510424119" width={200} alt="" />
            </div>
          </div>
          <div
            className="flex space-x-10 items-center "
            
          >
            <div
              className="bg-white text-black cursor-pointer border-black dark:border-white dark:bg-black dark:text-white p-1 border rounded-full"
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
