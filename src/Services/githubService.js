import axios from 'axios';

const GITHUB_API = 'https://api.github.com';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

// GitHub API client
const githubClient = axios.create({
  baseURL: GITHUB_API,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

// Get contribution data for the contribution calendar
// Added year parameter to filter by year
export const getContributionData = async (year = null) => {
  try {
    // Determine date range for the query
    let fromDate, toDate;
    
    if (year) {
      // If year is specified, get data for that calendar year
      fromDate = `${year}-01-01`;
      toDate = `${year}-12-31`;
    } else {
      // Default to last 12 months
      const today = new Date();
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(today.getFullYear() - 1);
      
      fromDate = oneYearAgo.toISOString().split('T')[0];
      toDate = today.toISOString().split('T')[0];
    }
    
    // GitHub GraphQL query with date range filter
    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          contributionsCollection(from: "${fromDate}T00:00:00Z", to: "${toDate}T23:59:59Z") {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    `;

    const response = await githubClient.post('https://api.github.com/graphql', { query });
    return response.data.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error('Error fetching GitHub contribution data:', error);
    throw error;
  }
};

// Get repositories data
export const getRepositoriesData = async () => {
  try {
    const response = await githubClient.get(`/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
};

// Get recent activity
export const getRecentActivity = async () => {
  try {
    const response = await githubClient.get(`/users/${GITHUB_USERNAME}/events?per_page=100`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub activity:', error);
    throw error;
  }
};

// Get language statistics
export const getLanguageStats = async () => {
  try {
    const repos = await getRepositoriesData();
    const languageCounts = {};
    
    // Count repos by language
    repos.forEach(repo => {
      const language = repo.language;
      if (language) {
        languageCounts[language] = (languageCounts[language] || 0) + 1;
      }
    });
    
    // Convert to array for easier display
    const languageStats = Object.entries(languageCounts).map(([name, count]) => ({
      name,
      count,
      percentage: (count / repos.length * 100).toFixed(2)
    }));
    
    return languageStats.sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error('Error calculating language stats:', error);
    throw error;
  }
};
