// import { FaBarsStaggered } from "react-icons/fa6";
// import ThemeController from "./ThemeController";
// import { IoPerson } from "react-icons/io5";
// import { CgLoadbarDoc } from "react-icons/cg";
// import { FaToolbox } from "react-icons/fa";
// import { FaPaperPlane } from "react-icons/fa";
// import Drawer from "../Component/Drawer";

// const Sidebar = ({ setActiveTab, activeTab }) => {
//   return (
//     <div className="drawer">
//       <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//       {/* Main content */}
//       <div className="drawer-content">
//         {/* Desktop sidebar with drawer toggle */}
//         <div className="flex md:ml-5 md:mt-13 lg:mt-0 lg:ml-10 md:flex-col items-center justify-center bg-transparent w-full md:w-[60px] z-[9999]">
//           <label
//             htmlFor="my-drawer"
//             className="hidden md:block bg-white dark:bg-[#131313] dark:text-white hover:text-pink-500 p-3 shadow-2xl rounded-full text-black drawer-button"
//           >
//             <FaBarsStaggered className="text-[25px]" />
//           </label>

//           <button className="hidden md:block bg-white dark:bg-[#131313] dark:text-white hover:text-pink-500 p-4 shadow-2xl rounded-full text-black my-5">
//             <ThemeController />
//           </button>

//           <ul className="flex flex-row md:flex-col items-center justify-center w-full md:w-auto bg-white text-black dark:bg-[#131313] dark:text-white space-x-5 md:space-x-0 md:space-y-3 py-3 md:py-10 md:rounded-4xl md:px-2 shadow-2xl">
//             <li>
//               <div
//                 className="tooltip md:tooltip-right tooltip-secondary tooltip-bottom"
//                 data-tip="ABOUT"
//               >
//                 <button
//                   onClick={() => setActiveTab("about")}
//                   className={`w-full text-left p-3 dark:text-white bg-gray-200 dark:bg-[#1C1C1C] rounded-full ${
//                     activeTab === "about"
//                       ? "text-pink-500"
//                       : "hover:text-pink-600"
//                   }`}
//                 >
//                   <IoPerson className="text-[25px]" />
//                 </button>
//               </div>
//             </li>
//             <li>
//               <div
//                 className="tooltip tooltip-secondary md:tooltip-right tooltip-bottom"
//                 data-tip="RESUME"
//               >
//                 <button
//                   onClick={() => setActiveTab("resume")}
//                   className={`w-full text-left p-3 dark:text-white bg-gray-200 dark:bg-[#1C1C1C] rounded-full ${
//                     activeTab === "resume"
//                       ? "text-pink-500"
//                       : "hover:text-pink-600"
//                   }`}
//                 >
//                   <CgLoadbarDoc className="text-[25px]" />
//                 </button>
//               </div>
//             </li>
//             <li>
//               <div
//                 className="tooltip tooltip-secondary md:tooltip-right tooltip-bottom"
//                 data-tip="PROJECT"
//               >
//                 <button
//                   onClick={() => setActiveTab("projects")}
//                   className={`w-full text-left p-3 dark:text-white bg-gray-200 dark:bg-[#1C1C1C] rounded-full ${
//                     activeTab === "projects"
//                       ? "text-pink-500"
//                       : "hover:text-pink-600"
//                   }`}
//                 >
//                   <FaToolbox className="text-[25px]" />
//                 </button>
//               </div>
//             </li>
//             <li>
//               <div
//                 className="tooltip tooltip-secondary md:tooltip-right tooltip-bottom"
//                 data-tip="CONTACT ME"
//               >
//                 <button
//                   onClick={() => setActiveTab("contact")}
//                   className={`w-full text-left p-3 dark:text-white bg-gray-200 dark:bg-[#1C1C1C] rounded-full ${
//                     activeTab === "contact"
//                       ? "text-pink-500"
//                       : "hover:text-pink-600"
//                   }`}
//                 >
//                   <FaPaperPlane className="text-[25px]" />
//                 </button>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Drawer side content */}
//       <div className="drawer-side z-[9999] fixed top-0 left-0 w-screen h-screen">
//         <label
//           htmlFor="my-drawer"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <div className="menu bg-base-200 dark:bg-[#1C1C1C] dark:text-white text-base-content h-full w-[450px] p-4">
//           <h1>coming soon </h1>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Sidebar;

import { FaBarsStaggered } from "react-icons/fa6";
import ThemeController from "./ThemeController";
import SidebarMenu from "./SidebarMenu";
import Drawer from "../DevTimeline/DevDashboardDrawer/DevDashboardDrawer";

const Sidebar = ({ setActiveTab, activeTab }) => {
  return (
    <>
      <div className="flex md:ml-5 md:mt-13 lg:mt-0 lg:ml-10 md:flex-col items-center justify-center bg-transparent w-full md:w-[60px] z-[9999]">
        <label
          htmlFor="my-drawer"
          className="hidden md:block bg-white dark:bg-[#131313] dark:text-white hover:text-pink-500 p-3 shadow-2xl rounded-full text-black drawer-button"
        >
          <FaBarsStaggered className="text-[25px]" />
        </label>

        <button className="hidden md:block bg-white dark:bg-[#131313] dark:text-white hover:text-pink-500 p-4 shadow-2xl rounded-full text-black my-5">
          <ThemeController />
        </button>

        {/* Sidebar Menu */}
        <SidebarMenu setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>

      {/* Separate Drawer Component */}
      <Drawer />
    </>
  );
};

export default Sidebar;
