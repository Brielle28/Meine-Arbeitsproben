import { CgLoadbarDoc } from "react-icons/cg";
import { FaDownload } from "react-icons/fa";
import EmploymentHistory from "./EmploymentHistory";
import CredentialsDisplay from "./CredentialsDisplay";
import TechStackCard from "./TechStackCard";
import ToolStackCard from "./ToolStackCard.jsx";
import SoftSkillsDisplay from "./SoftSkillsDisplay.jsx";
const Resume = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex items-center justify-between ">
          <button className="flex items-center justify-center gap-1 border-[1px] border-gray-300  rounded-[30px] text-gray-500 bg-transparent px-3 py-2">
            {" "}
            <CgLoadbarDoc className="text-black  text-[20px] dark:text-white" />{" "}
            RESUME{" "}
          </button>
          <button className="flex items-center justify-center gap-1 border-[1px] border-gray-300  rounded-[30px] text-gray-500 bg-transparent px-3 py-2">
            {" "}
            <FaDownload className="text-black  text-[15px] dark:text-white" />{" "}
            DOWNLOAD CV{" "}
          </button>
        </div>
        <EmploymentHistory/>
        <CredentialsDisplay/>
        <TechStackCard/>
        <ToolStackCard/>
        <SoftSkillsDisplay/>
      </div>
    </>
  );
};

export default Resume;
