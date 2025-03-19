import { BiLogoFigma } from "react-icons/bi";
import {
  SiGithub,
  SiNpm,
  SiWebpack,
  SiFirebase,
  SiCypress,
  SiGooglechrome,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
const ToolStackCard = () => {
  const toolStacks = [
    { id: 1, name: "VS Code", icon: <DiVisualstudio />, proficiency: 95 },
    { id: 2, name: "GitHub", icon: <SiGithub />, proficiency: 95 },
    { id: 3, name: "NPM", icon: <SiNpm />, proficiency: 80 },
    { id: 4, name: "Webpack", icon: <SiWebpack />, proficiency: 75 },
    { id: 5, name: "Firebase", icon: <SiFirebase />, proficiency: 50 },
    { id: 6, name: "Cypress", icon: <SiCypress />, proficiency: 40 },
    {
      id: 7,
      name: "Chrome DevTools",
      icon: <SiGooglechrome />,
      proficiency: 85,
    },
    { id: 9, name: "Visual studio", icon: <DiVisualstudio />, proficiency: 55 },
    { id: 8, name: "Figma", icon: <BiLogoFigma />, proficiency: 95 },
  ];

  return (
    <div className=" mx-auto mt-10 p-2">
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-2 border-[1px] border-gray-200 text-gray-700 dark:text-white px-3 py-2 rounded-full text-sm font-thin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
          </svg>
          TOOL SKILLS
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
        Tool Stack
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {toolStacks.map((tool) => (
          <div
            key={tool.id}
            className="bg-[#FAFAFA] dark:bg-[#1E1E1E] border-[1px] border-gray-300 dark:border-gray-600 rounded-lg p-3 flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* SVG with improved circular progress */}
              <svg width="100" height="100" viewBox="0 0 100 100">
                {/* Background circle - light gray */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="6"
                  className="stroke-gray-300 dark:stroke-[#3E4148]"
                />

                {/* Foreground circle - pink */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                  stroke="#FF4D8D"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 45 * (1 - tool.proficiency / 100)
                  }`}
                  transform="rotate(-90 50 50)"
                />

                {/* Icon in center */}
                <foreignObject x="25" y="25" width="50" height="50">
                  <div className="h-full flex flex-col gap-2 items-center justify-center text-pink-500 text-2xl">
                    {tool.icon}
                    {/* Percentage in middle */}
                    <text
                      x="50"
                      y="75"
                      textAnchor="middle"
                      className="text-xs font-medium dark:text-white"
                      fill="#666666"
                    >
                      {tool.proficiency}%
                    </text>
                  </div>
                </foreignObject>
              </svg>
            </div>

            <div className="mt-2 text-gray-600 dark:text-white text-center">
              {tool.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolStackCard;
