import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaClock, FaUser, FaCheckCircle, FaLightbulb, FaCog } from "react-icons/fa";

export default function ProjectDetail({ project, goBack }) {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-transaperent dark:bg-[#131313]">
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
        {/* Header with Back Button */}
        <div className="flex items-center mb-8">
          <button 
            onClick={goBack}
            className="flex items-center px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 bg-gradient-to-r from-pink-500 to-pink-900 text-white shadow-lg hover:shadow-xl"
          >
            <FaArrowLeft className="mr-2" /> Back to Projects
          </button>
        </div>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-[33px] font-bold text-gray-900 mb-4 bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-[13px] md:text-xl text-gray-600 dark:text-gray-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center mb-6">
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
              project.status === 'Completed' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
            }`}>
              <FaCheckCircle className="mr-2" />
              {project.status}
            </span>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 md:mt-2 mb-8 justify-center">
          {project.live && project.live !== "" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <FaGithub className="mr-2" />
              View Code
            </a>
          )}
        </div>

        {/* Project Info Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          <div className="bg-white dark:bg-[#161616] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-900">
            <div className="flex items-center mb-3">
              <FaUser className="text-pink-500 mr-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Creator</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{project.createdBy}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-3">
              <FaCalendarAlt className="text-blue-500 mr-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Date</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{project.date}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-3">
              <FaClock className="text-purple-500 mr-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Duration</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{project.duration}</p>
          </div>

        </div> */}

        {/* Main Content Grid */}
        <div className="flex flex-col items-center justify-center gap-8 mb-8">
          {/* Description */}
          <div className="bg-transparent p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <FaLightbulb className="text-yellow-500 mr-3" />
              Project Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="bg-transparent p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-900 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Category */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Category</h3>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-semibold rounded-lg">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-transparent p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 dark:bg-[#161616] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-[13px] md:text-[16px]">
            Project ID: {project.id} | Built with passion by {project.createdBy}
          </p>
        </div>
      </div>
    </div>
  );
}