import { IoPerson } from "react-icons/io5";
import { CgLoadbarDoc } from "react-icons/cg";
import { FaToolbox, FaPaperPlane } from "react-icons/fa";

const SidebarMenu = ({ setActiveTab, activeTab }) => {
  const menuItems = [
    { id: "about", icon: <IoPerson className="text-[25px]" />, tooltip: "ABOUT" },
    { id: "resume", icon: <CgLoadbarDoc className="text-[25px]" />, tooltip: "RESUME" },
    { id: "projects", icon: <FaToolbox className="text-[25px]" />, tooltip: "PROJECT" },
    { id: "contact", icon: <FaPaperPlane className="text-[25px]" />, tooltip: "CONTACT ME" },
  ];

  return (
    <ul className="flex flex-row md:flex-col items-center justify-center w-full md:w-auto bg-white text-black dark:bg-[#131313] dark:text-white space-x-5 md:space-x-0 md:space-y-3 py-3 md:py-10 md:rounded-4xl md:px-2 shadow-2xl">
      {menuItems.map(({ id, icon, tooltip }) => (
        <li key={id}>
          <div className="tooltip md:tooltip-right tooltip-secondary tooltip-bottom" data-tip={tooltip}>
            <button
              onClick={() => setActiveTab(id)}
              className={`w-full text-left p-3 dark:text-white bg-gray-200 dark:bg-[#1C1C1C] rounded-full ${
                activeTab === id ? "text-pink-500" : "hover:text-pink-600"
              }`}
            >
              {icon}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SidebarMenu;
