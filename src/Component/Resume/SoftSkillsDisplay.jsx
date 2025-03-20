// import { FaCheck } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
const SoftSkillsDisplay = () => {
  const languages = [
    { name: "English", proficiency: 90, flag: "/uk.png" },
    { name: "German", proficiency: 20, flag: "/Germany.png" },
    { name: "Igbo", proficiency: 99, flag: "/Nigeria.png" },
  ];

  const softSkills = [
    "Creativity and passion for web development",
    "Communication and Collaboration",
    "Attention to Detail and Eye for Design",
    "Adaptability & Continuous Learning",
    "Problem-Solving",
    "Critical Thinking",
  ];

  const renderProficiencyDots = (proficiency) => {
    const dots = [];
    const totalDots = 10;
    const filledDots = Math.round((proficiency / 100) * totalDots);

    for (let i = 0; i < totalDots; i++) {
      dots.push(
        <div
          key={i}
          className={`h-[14px] w-[14px] rounded-full ${
            i < filledDots ? "bg-pink-500" : "bg-gray-200 dark:bg-[#3E4148]"
          } mx-[1px]`}
        />
      );
    }

    return (
      <div className="flex flex-row items-center justify-center">
        {dots}
        <span className="ml-3 text-gray-500 font-semibold dark:text-white">
          {proficiency}%
        </span>
      </div>
    );
  };

  return (
    <div className="bg-transparent text-black dark:text-white  p-4 md:p-3 mx-auto mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Languages Section */}
        <div className="space-y-4">
          <button className="px-4 py-1 rounded-[20px] flex items-center border-[1px] border-gray-400 space-x-2 mb-4">
            <FaLanguage />
            <h2 className="uppercase font-thin text-gray-500 dark:text-white">
              Languages
            </h2>
          </button>

          <div className="space-y-3">
            {languages.map((language, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-start"
              >
                <div className="flex items-center justify-center p-2 rounded-[5px] bg-gray-200 border-[1px] border-gray-300 dark:bg-[#1E1E1E] dark:border-[#2D2D2D]">
                  <div
                    className="w-6 h-6 bg-cover bg-center rounded-[5px]"
                    style={{
                      backgroundImage: `url(${language.flag})`,
                    }}
                  ></div>
                </div>
                <div className="ml-4 flex flex-col gap-1 items-start justify-center">
                  <span className="font-medium text-gray-400 dark:text-white text-[17px]">
                    {language.name}
                  </span>
                  <h6 className="flex items-center justify-center">
                    {renderProficiencyDots(language.proficiency)}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="space-y-4 ml-3">
          <button className="flex items-center justify-start px-4 py-1 rounded-[20px] space-x-2 mb-4 border-[1px] border-gray-600">
            <span className="flex items-center justify-center">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
            <h2 className="uppercase font-thin">Soft Skills</h2>
          </button>

          <div className="space-y-1">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex items-start space-x-1">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-transparent rounded-full flex items-center justify-center">
                    <TiTick className="text-[20px] text-pink-500" />
                  </div>
                </div>
                <span className="text-[15px]">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkillsDisplay;
