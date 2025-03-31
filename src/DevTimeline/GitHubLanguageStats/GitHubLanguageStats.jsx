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

  if (loading) return <div>Loading GitHub language stats...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="max-w-[450px] mx-auto p-4 bg-transparent rounded-2xl">
      <h2 className="text-[17px] font-bold">I Mostly Code in </h2>
      <div className="language-list">
        {languageStats.slice(0, 5).map((lang) => (
          <div key={lang.name} className="language-item mt-2">
            <div className="language-name">{lang.name}</div>
            <div className="language-count">{lang.count} repos</div>
            <div className="language-bar-container">
              <div
                className="language-bar"
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: "pink",
                }}
              ></div>
            </div>
            <div className="language-percentage">{lang.percentage} %</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubLanguageStats;
