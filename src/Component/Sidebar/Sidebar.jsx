// import { FaBarsStaggered } from "react-icons/fa6";
// import ThemeController from "../ThemeController";
// import SidebarMenu from "../Sidebar/SidebarMenu";
// import Drawer from "../../DevTimeline/DevDashboardDrawer/DevDashboardDrawer";

// const Sidebar = ({ setActiveTab, activeTab }) => {
//   return (
//     <>
//       <div className="flex md:ml-5 md:mt-13 lg:mt-0 lg:ml-10 md:flex-col items-center justify-center bg-transparent w-full md:w-[60px] z-[9999]">
//         <label
//           htmlFor="my-drawer"
//           className="hidden md:block bg-white dark:bg-[#131313] dark:text-white hover:text-pink-500 p-3 shadow-2xl rounded-full text-black drawer-button"
//         >
//           <FaBarsStaggered className="text-[25px]" />
//         </label>

//         <button className="hidden md:block bg-white dark:bg-[#131313] dark:text-white hover:text-pink-500 p-4 shadow-2xl rounded-full text-black my-5">
//           <ThemeController />
//         </button>

//         {/* Sidebar Menu */}
//         <SidebarMenu setActiveTab={setActiveTab} activeTab={activeTab} />
//       </div>

//       {/* Separate Drawer Component */}
//       <Drawer />
//     </>
//   );
// };

// export default Sidebar;

import { FaBarsStaggered } from "react-icons/fa6";
import ThemeController from "../ThemeController";
import SidebarMenu from "../Sidebar/SidebarMenu";
import Drawer from "../../DevTimeline/DevDashboardDrawer/DevDashboardDrawer";

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