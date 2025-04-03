import { FaToolbox } from "react-icons/fa";
import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "./projects";
import ProjectDetail from "./ProjectDetail";
import { IoMdArrowUp } from "react-icons/io";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modal, setModal] = useState(null);

  if (modal) {
    return (
      <div
        className="fixed inset-0 bg-transparent w-[100%] bg-opacity-75 flex items-center justify-center p-4 z-9999"
        onClick={() => setModal(null)}
      >
        <div className="bg-pink-200 p-4 rounded-lg shadow-lg w-[80%] md:w-[55%] flex items-center justify-center">
          <video
            src={modal.video}
            controls
            autoPlay
            className="w-full items-center justify-center flex rounded-lg"
          />
        </div>
      </div>
    );
  }

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        goBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div className="flex flex-col items-start justify-center p-6 text-black dark:text-white">
      <button className="px-3 py-1 rounded-[20px] border-[1px] border-gray-300 flex items-center justify-center  gap-2">
        <FaToolbox />
        <h1 className="font-thin text-gray-400"> Projects </h1>
      </button>
      <h2 className="text-3xl font-bold mt-3 md:my-4">
        Explore Portfolio By Technology
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4 ">
        {projects.map((p) => (
          <div
            key={p.id}
            className="relative p-3  bg-transparent border-[1px] border-gray-300 shadow-lg rounded-[20px]"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-32 rounded-[20px] object-cover rounded-t-lg cursor-pointer"
              onClick={() => setModal(p)}
            />
            <div className="p-4">
              <h3
                className="text-lg font-semibold cursor-pointer hover:underline"
                onClick={() => setSelectedProject(p)}
              >
                {p.title}
              </h3>
              <p
                className="text-gray-500 text-sm cursor-pointer"
                onClick={() => setSelectedProject(p)}
              >
                {p.category}
              </p>
              <button className="absolute bottom-7 right-5 bg-black text-white rounded-[20px] p-1">
                <IoMdArrowUp
                  className="  bg-transparent rotate-z-50 text-[25px] cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
