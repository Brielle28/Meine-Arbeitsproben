import { FaBarsStaggered } from "react-icons/fa6";
import ThemeController from "./ThemeController";
import { IoPerson } from "react-icons/io5";
import { CgLoadbarDoc } from "react-icons/cg";
import { FaToolbox } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-transparent text-white p-6">
      <button className="bg-white p-3 shadow-2xl rounded-full text-black hover:text-pink-600 ">
        {" "}
        <FaBarsStaggered className="text-[25px]" />{" "}
      </button>
      <button className="bg-white p-4 shadow-2xl rounded-full text-black my-5">
        {" "}
        <ThemeController />
      </button>
      <ul className="bg-white text-black space-y-3 py-10 rounded-4xl px-2 shadow-2xl">
        <li>
          <div
            className="tooltip tooltip-right tooltip-secondary"
            data-tip="ABOUT"
          >
            <button
              onClick={() => setActiveTab("about")}
              className="w-full text-left hover:text-pink-600 p-3 bg-[#FAFAFA] rounded-full"
            >
              <IoPerson className="text-[25px]"/>
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
              className="w-full text-left hover:text-pink-600 p-3 bg-[#FAFAFA] rounded-full"
            >
              <CgLoadbarDoc className="text-[25px]"/>
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
              className="w-full text-left hover:text-pink-600 p-3 bg-[#FAFAFA] rounded-full"

            >
              <FaToolbox  className="text-[25px]"/>
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
              className="w-full text-left hover:text-pink-600 p-3 bg-[#FAFAFA] rounded-full"

            >
              <FaPaperPlane  className="text-[25px]"/>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
