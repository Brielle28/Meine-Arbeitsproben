import { TbBrandCSharp } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs,  } from "react-icons/fa";

import { SiTailwindcss, SiTypescript, SiRedux, SiJavascript, SiAxios } from "react-icons/si";
import { CgGym } from "react-icons/cg";
const TechStackCard = () => {
 const techStacks = [
    {
      id: 10,
      name: "C++",
      icon: <TbBrandCSharp className="text-pink-500 size-full" />,
      proficiency: 85,
    },
    { id: 4, name: "JavaScript", icon: <SiJavascript className="text-yellow-500 size-full" />, proficiency: 85 },
    { id: 5, name: "TypeScript", icon: <SiTypescript className="text-blue-600 size-full" />, proficiency: 80 },
    { id: 6, name: "React", icon: <FaReact className="text-blue-400 size-full" />, proficiency: 90 },
    { id: 7, name: "Vue", icon: <FaVuejs className="text-green-500 size-full" />, proficiency: 75 },
    { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 size-full" />, proficiency: 90 },
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500 size-full" />, proficiency: 95 },
    { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500 size-full" />, proficiency: 90 },
    { id: 8, name: "Redux Toolkit", icon: <SiRedux className="text-purple-500 size-full" />, proficiency: 80 },
    { id: 9, name: "Axios & Fetch API", icon: <SiAxios className="text-blue-500 size-full" />, proficiency: 85 },
  ];

  return (
    <div className="w-full mx-auto p-4 mt-7">
      <button className="flex items-center gap-2 mb-4 border-[1px] border-gray-300 rounded-[20px]">
        <span className="flex items-center gap-1 justify-center text-gray-500 dark:text-white px-3 py-1 rounded-full text-sm font-thin">
          <CgGym className="text-black text-[30px] dark:text-white" />
          HARD SKILLS
        </span>
      </button>

      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Technology Stack
      </h1>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {techStacks.map((tech) => (
          <div
            key={tech.id}
            className=" bg-gradient-to-r from-white to-gray-100 dark:bg-gradient-to-r dark:from-[#1F1F1F] dark:to-black rounded-lg p-4 shadow-sm relative border-[1px] border-gray-300 dark:border-gray-600"
          >
            <div className="flex items-center mb-1">
              <div className="flex items-center justify-center gap-7 mt-5">
                <div className="size-12 flex items-center justify-center rounded-md text-xl">
                  {tech.icon}
                </div>
                <span className="font-semibold text-gray-500 dark:text-white text-[20px]">{tech.name}</span>
              </div>
              <span className="absolute right-4 top-4 border-[1px] border-gray-300 dark:border-gray-600 dark:text-white px-2 py-1 rounded-full text-xs text-gray-600">
                {tech.proficiency}%
              </span>
            </div>

            {/* Progress bar outside and below the main content */}
            <div className="absolute flex items-center justify-start bottom-0 w-[80%] bg-gray-300 dark:bg-gray-700 rounded-full h-[3px] mt-2">
              <div
                className="h-[3px] rounded-full bg-black dark:bg-white"
                style={{ width: `${tech.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
