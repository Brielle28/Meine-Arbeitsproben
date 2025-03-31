import GitHubContributionCalendar from "../GitHubContributionCalendar/GitHubContributionCalendar";
import GitHubLanguageStats from "../GitHubLanguageStats/GitHubLanguageStats";
import RecentGitHubActivity from "../RecentGitHubActivity/RecentGitHubActivity";
import WakaTimeDashboard from "../WakaTimeDashboard/WakaTimeDashboard";

const DevDashboardDrawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-[9999] fixed top-0 left-0 w-screen h-screen overflow-y-scroll">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 dark:bg-[#1C1C1C] dark:text-white text-base-content h-full w-[500px] p-4 overflow-y-scroll">
          <div className="dev-dashboard">
            <div className="dashboard-grid">
              <div className="dashboard-column ">
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
