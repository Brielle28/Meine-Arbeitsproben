import { IoMdClose } from "react-icons/io"; // Import close icon
import GitHubContributionCalendar from "../GitHubContributionCalendar/GitHubContributionCalendar";
import GitHubLanguageStats from "../GitHubLanguageStats/GitHubLanguageStats";
import RecentGitHubActivity from "../RecentGitHubActivity/RecentGitHubActivity";
// import WakaTimeDashboard from "../WakaTimeDashboard/WakaTimeDashboard";

const DevDashboardDrawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-[9999] fixed top-0 left-0 w-screen h-screen overflow-y-auto">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu flex flex-col bg-white dark:bg-[#1C1C1C] dark:text-white text-base-content h-full w-full md:max-w-[500px] md:p-4 overflow-y-auto transition-all duration-300 translate-x-0">
          <div className="dev-dashboard">
            <div className="dashboard-grid">
              <div className="md:hidden flex items-center justify-center mb-4">
                <label
                  htmlFor="my-drawer"
                  className="border-0 bg-transparent text-pink-600 hover:bg-pink-100 hover:text-pink-500"
                >
                  <IoMdClose className="size-10" />
                </label>
              </div>
              <div className="dashboard-column">
                {/* <WakaTimeDashboard /> */}
                <GitHubLanguageStats />
              </div>

              <div className="dashboard-column">
                <GitHubContributionCalendar />
                <RecentGitHubActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevDashboardDrawer;
