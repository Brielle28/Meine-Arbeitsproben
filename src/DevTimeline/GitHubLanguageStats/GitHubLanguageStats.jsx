import { useState, useEffect } from "react";
import { getLanguageStats } from "../../Services/githubService";

const GitHubLanguageStats = () => {
  const [languageStats, setLanguageStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stats = await getLanguageStats();
        setLanguageStats(stats);
        setLoading(false);
      } catch (err) {
        setError("Failed to load GitHub language data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="text-gray-600 dark:text-gray-300">
        Loading GitHub language stats...
      </div>
    );
  if (error)
    return (
      <div className="text-red-500 bg-red-100 dark:bg-red-900 p-4 rounded-lg">
        {error}
      </div>
    );

  return (
    <div className="max-w-[300px] md:max-w-[450px] mx-auto p-4 bg-white dark:bg-black rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="md:text-xl text-sm font-semibold text-gray-900 dark:text-gray-100">
        I Mostly Code in
      </h2>
      <div className="space-y-2 md:space-y-4 mt-4">
        {languageStats.slice(0, 5).map((lang) => (
          <div key={lang.name} className="flex items-center justify-between ">
            <div className="text-pink-700 dark:text-gray-200 font-medium">
              {lang.name}
            </div>
            <div className="flex items-center justify-center md:gap-5 gap-2">
              <div className="text-gray-600 dark:text-gray-400 text-[12px] md:text-sm">
                {lang.count} repos
              </div>
              <div className="w-15 md:w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-pink-500"
                  style={{ width: `${lang.percentage}%` }}
                ></div>
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-[12px] md:text-sm">
                {lang.percentage} %
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubLanguageStats;
