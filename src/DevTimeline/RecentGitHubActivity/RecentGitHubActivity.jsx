import { useState, useEffect } from 'react';
import { getRecentActivity } from '../../Services/githubService';
import { format } from 'date-fns';
import './RecentGitHubActivity.css';

const RecentGitHubActivity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecentActivity();
        setActivities(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load GitHub activity data');
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) return <div className="text-gray-600 dark:text-gray-300">Loading recent activity...</div>;
  if (error) return <div className="text-red-500 bg-red-100 dark:bg-red-900 p-4 rounded-lg">{error}</div>;
  
  const formatActivityType = (type) => {
    switch (type) {
      case 'PushEvent':
        return 'Pushed to';
      case 'CreateEvent':
        return 'Created';
      case 'IssuesEvent':
        return 'Updated issue in';
      case 'PullRequestEvent':
        return 'Pull request in';
      case 'ForkEvent':
        return 'Forked';
      case 'WatchEvent':
        return 'Starred';
      case 'CommitCommentEvent':
        return 'Commented on commit in';
      default:
        return 'Activity in';
    }
  };
  
  const groupActivitiesByMonth = () => {
    const grouped = {};
    activities.slice(0, 30).forEach(activity => {
      const date = new Date(activity.created_at);
      const monthYear = format(date, 'MMMM yyyy');
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(activity);
    });
    return grouped;
  };
  
  const groupedActivities = groupActivitiesByMonth();
  
  return (
    <div className="max-w-md mx-auto px-6 py-4 bg-transparent dark:bg-transparent rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-y-auto h-80 mt-10">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Recent GitHub Activity</h2>
      {Object.entries(groupedActivities).map(([monthYear, monthActivities]) => (
        <div key={monthYear} className="mb-6">
          <h3 className="border-b border-gray-300 dark:border-gray-600 pb-2 text-gray-800 dark:text-gray-200">{monthYear}</h3>
          <div className="ml-2">
            {monthActivities.map((activity, index) => (
              <div key={`${activity.id}-${index}`} className="flex mb-3">
                <div className="w-20 text-gray-600 dark:text-gray-400 text-sm">{format(new Date(activity.created_at), 'MMM d')}</div>
                <div className="flex-grow text-gray-800 dark:text-gray-300">
                  {formatActivityType(activity.type)}{' '}
                  <a 
                    href={`https://github.com/${activity.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:underline font-medium"
                  >
                    {activity.repo.name.split('/')[1]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentGitHubActivity;
