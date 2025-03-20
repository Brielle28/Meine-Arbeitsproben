import { CgLoadbarDoc } from "react-icons/cg";
import EmploymentHistory from "./EmploymentHistory";
import CredentialsDisplay from "./CredentialsDisplay";
import TechStackCard from "./TechStackCard";
import ToolStackCard from "./ToolStackCard.jsx";
import SoftSkillsDisplay from "./SoftSkillsDisplay.jsx";
import DownloadResumeButton from "./DownloadResumeButton.jsx";
const Resume = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center md:mt-4">
        <div className="w-full flex items-center justify-between ">
          <button className="flex items-center justify-center gap-1 border-[1px] border-gray-300  rounded-[30px] text-gray-500 bg-transparent px-3 py-2">
            {" "}
            <CgLoadbarDoc className="text-black  text-[20px] dark:text-white" />{" "}
            RESUME{" "}
          </button>
          <DownloadResumeButton/>
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
