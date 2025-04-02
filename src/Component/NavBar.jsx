import ThemeController from "./ThemeController";
import TypeWriting from "./TypeWriting/TypeWriting";
import { FaBarsStaggered } from "react-icons/fa6";

const NavBar = () => {
  return (
    <>
      <nav className="w-full md:hidden lg:hidden flex items-center justify-between dark:bg-black bg-white p-3">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-[15px] text-black dark:text-white font-semibold">
            {" "}
            Chukwuemerie Clara
          </h1>
          <TypeWriting />
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="flex dark:text-white hover:text-pink-500 shadow-2xl rounded-full text-black">
            {" "}
            <ThemeController />
          </button>
          
          <label
            htmlFor="my-drawer"
            className="block bg-white dark:bg-[#131313] dark:text-white hover:text-pink-500 p-3 shadow-2xl rounded-full text-black drawer-button"
          >
            <FaBarsStaggered className="text-[25px]" />
          </label>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
