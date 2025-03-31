// src/components/WakaTimeDashboard.js
import { useState, useEffect } from 'react';
import { getAllStats } from '../../Services/wakatimeService';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './WakaTimeDashboard.css';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WakaTimeDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllStats();
        setStats(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load WakaTime data');
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) return <div>Loading WakaTime stats...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!stats) return null;
  
  // Function to format time in hours and minutes
  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hrs ${minutes} mins`;
  };
  
  // Prepare data for charts
  const languageData = {
    labels: stats.languages.slice(0, 5).map(lang => lang.name),
    datasets: [{
      label: 'Time Spent (hours)',
      data: stats.languages.slice(0, 5).map(lang => (lang.total_seconds / 3600).toFixed(2)),
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
      ]
    }]
  };
  
  return (
    <div className="wakatime-dashboard">
      <h2>This Week I Spent My Time On</h2>
      <div className="time-zone">Time Zone: {stats.timezone}</div>
      
      <div className="stat-section">
        <h3>Programming Languages:</h3>
        <div className="languages-list">
          {stats.languages.slice(0, 5).map(lang => (
            <div key={lang.name} className="language-item">
              <div className="language-name">{lang.name}</div>
              <div className="language-time">{formatTime(lang.total_seconds)}</div>
              <div className="language-bar-container">
                <div 
                  className="language-bar" 
                  style={{ width: `${lang.percent}%`, backgroundColor: '#4682B4' }}
                ></div>
              </div>
              <div className="language-percent">{lang.percent.toFixed(2)} %</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="stat-section">
        <h3>Editors:</h3>
        <div className="editors-list">
          {stats.editors.map(editor => (
            <div key={editor.name} className="editor-item">
              <div className="editor-name">{editor.name}</div>
              <div className="editor-time">{formatTime(editor.total_seconds)}</div>
              <div className="editor-bar-container">
                <div 
                  className="editor-bar" 
                  style={{ width: `${editor.percent}%`, backgroundColor: '#FF6347' }}
                ></div>
              </div>
              <div className="editor-percent">{editor.percent.toFixed(2)} %</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="stat-section">
        <h3>Projects:</h3>
        <div className="projects-list">
          {stats.projects.slice(0, 5).map(project => (
            <div key={project.name} className="project-item">
              <div className="project-name">{project.name}</div>
              <div className="project-time">{formatTime(project.total_seconds)}</div>
              <div className="project-bar-container">
                <div 
                  className="project-bar" 
                  style={{ width: `${project.percent}%`, backgroundColor: '#32CD32' }}
                ></div>
              </div>
              <div className="project-percent">{project.percent.toFixed(2)} %</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="stat-section">
        <h3>Operating System:</h3>
        <div className="os-list">
          {stats.operating_systems.map(os => (
            <div key={os.name} className="os-item">
              <div className="os-name">{os.name}</div>
              <div className="os-time">{formatTime(os.total_seconds)}</div>
              <div className="os-bar-container">
                <div 
                  className="os-bar" 
                  style={{ width: `${os.percent}%`, backgroundColor: '#9370DB' }}
                ></div>
              </div>
              <div className="os-percent">{os.percent.toFixed(2)} %</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="chart-section">
        <h3>Language Breakdown</h3>
        <Bar 
          data={languageData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Programming Language Usage'
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default WakaTimeDashboard;