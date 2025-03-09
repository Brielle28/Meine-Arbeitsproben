import { FaBarsStaggered } from "react-icons/fa6";
import ThemeController from "./ThemeController";
import { IoPerson } from "react-icons/io5";
import { CgLoadbarDoc } from "react-icons/cg";
import { FaToolbox } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-transparent">
      <button className="bg-white dark:bg-[#131313] dark:text-white hover:text-pink-500 p-3 shadow-2xl rounded-full text-black ">
        {" "}
        <FaBarsStaggered className="text-[25px]" />{" "}
      </button>
      <button className="bg-white dark:bg-[#131313] dark:text-white hover:text-pink-500 p-4 shadow-2xl rounded-full text-black my-5">
        {" "}
        <ThemeController />
      </button>
      <ul className="bg-white text-black dark:bg-[#131313] dark:text-white space-y-3 py-10 rounded-4xl px-2 shadow-2xl">
        <li>
          <div
            className="tooltip tooltip-right tooltip-secondary"
            data-tip="ABOUT"
          >
            <button
              onClick={() => setActiveTab("about")}
              className="w-full text-left hover:text-pink-600 p-3  dark:text-white bg-[#FAFAFA] dark:bg-[#1C1C1C] rounded-full"
            >
              <IoPerson className="text-[25px]" />
            </button>
          </div>
        </li>
        <li>
          <div
            className="tooltip tooltip-right tooltip-secondary"
            data-tip="RESUME"
          >
            <button
              onClick={() => setActiveTab("resume")}
              className="w-full text-left hover:text-pink-600 p-3  dark:text-white bg-[#FAFAFA] dark:bg-[#1C1C1C] rounded-full"
            >
              <CgLoadbarDoc className="text-[25px]" />
            </button>
          </div>
        </li>
        <li>
          <div
            className="tooltip tooltip-right tooltip-secondary"
            data-tip="PROJECT"
          >
            <button
              onClick={() => setActiveTab("projects")}
              className="w-full text-left hover:text-pink-600 p-3  dark:text-white bg-[#FAFAFA] dark:bg-[#1C1C1C] rounded-full"
            >
              <FaToolbox className="text-[25px]" />
            </button>
          </div>
        </li>
        <li>
          <div
            className="tooltip tooltip-right tooltip-secondary"
            data-tip="CONTACT ME"
          >
            <button
              onClick={() => setActiveTab("contact")}
              className="w-full text-left hover:text-pink-600 p-3  dark:text-white bg-[#FAFAFA] dark:bg-[#1C1C1C] rounded-full"
            >
              <FaPaperPlane className="text-[25px]" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
