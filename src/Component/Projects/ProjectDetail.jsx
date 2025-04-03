
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectDetail({ project, goBack }) {
  return (
    <div className="p-4 md:p-6">
      {/* Back Button */}
      <button className="flex items-center mb-4 text-gray-600" onClick={goBack}>
        <FaArrowLeft className="mr-2" /> Back
      </button>

      {/* Project Details */}
      <div className="flex flex-col items-start justify-center text-black dark:text-white">
        <h1 className="text-xl md:text-2xl font-semibold text-center md:text-start w-full">{project.title}</h1>

        {/* Project Info */}
        <div className="flex flex-col justify-center items-center md:items-start text-gray-600 w-full space-y-4 md:space-y-3 md:space-x-6 my-6">
          {/* Created By & Date */}
          <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
            <div className="flex items-center justify-between w-full sm:w-[50%]">
              <button className="px-2 font-medium bg-pink-500 text-white dark:text-gray-900">
                Created By:
              </button>
              <h1 className="dark:text-white text-sm md:text-base">{project.createdBy}</h1>
            </div>
            <div className="flex items-center justify-between w-full sm:w-[50%]">
              <button className="px-2 font-medium bg-pink-500 text-white dark:text-gray-900">
                Date:
              </button>
              <h1 className="dark:text-white text-sm md:text-base">{project.date}</h1>
            </div>
          </div>

          {/* Code Source & Category */}
          <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
            <div className="flex items-center justify-between w-full sm:w-[50%]">
              <button className="px-2 font-medium bg-pink-500 text-white dark:text-gray-900">
                Code Source:
              </button>
              <a
                href={project.code}
                className="dark:text-white text-sm md:text-base underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center justify-between w-full sm:w-[50%]">
              <button className="px-2 font-medium bg-pink-500 text-white dark:text-gray-900">
                Categories:
              </button>
              <h1 className="dark:text-white text-sm md:text-base">{project.category}</h1>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[220px] md:h-[270px] rounded-lg shadow-lg object-cover"
        />

        {/* Project Description */}
        <div className="mt-4 px-2 text-center md:text-left">
          <p className="text-gray-500 dark:text-white text-sm md:text-base">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
