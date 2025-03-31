// src/components/GitHubContributionCalendar.js
import { useState, useEffect } from 'react';
import { getContributionData } from '../../Services/githubService';
import { format } from 'date-fns';
import './GitHubContributionCalendar.css';

const GitHubContributionCalendar = () => {
  const [contributionData, setContributionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContributionData();
        setContributionData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load GitHub contribution data');
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) return <div>Loading contribution calendar...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!contributionData) return null;
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Organize days by week
  const renderCalendar = () => {
    return (
      <div className="contribution-calendar">
        <div className="calendar-header">
          <span className="total-contributions">
            {contributionData.totalContributions} contributions in the last year
          </span>
        </div>
        
        <div className="calendar-months">
          {months.map(month => (
            <div key={month} className="calendar-month">{month}</div>
          ))}
        </div>
        
        <div className="calendar-body">
          <div className="calendar-days">
            {days.map((day, index) => (
              index % 2 === 0 && <div key={day} className="calendar-day-name">{day}</div>
            ))}
          </div>
          
          <div className="calendar-grid">
            {contributionData.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="calendar-week">
                {week.contributionDays.map(day => (
                  <div 
                    key={day.date} 
                    className="calendar-day" 
                    style={{ backgroundColor: day.color }}
                    title={`${format(new Date(day.date), 'MMM d, yyyy')}: ${day.contributionCount} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="calendar-footer">
          <div className="contribution-scale">
            <span>Less</span>
            <div className="scale-square" style={{ backgroundColor: '#ebedf0' }}></div>
            <div className="scale-square" style={{ backgroundColor: '#9be9a8' }}></div>
            <div className="scale-square" style={{ backgroundColor: '#40c463' }}></div>
            <div className="scale-square" style={{ backgroundColor: '#30a14e' }}></div>
            <div className="scale-square" style={{ backgroundColor: '#216e39' }}></div>
            <span>More</span>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="github-contribution-section">
      <h2>GitHub Contributions</h2>
      {renderCalendar()}
    </div>
  );
};

export default GitHubContributionCalendar;

