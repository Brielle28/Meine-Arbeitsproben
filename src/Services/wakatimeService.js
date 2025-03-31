// src/services/wakatimeService.js
import axios from 'axios';

const WAKATIME_API_KEY = import.meta.env.VITE_WAKATIME_API_KEY;

// WakaTime API client
// Note: WakaTime API requires Basic Auth with API key as the username and blank password
const wakatimeClient = axios.create({
  baseURL: 'https://wakatime.com/api/v1',
  headers: {
    Authorization: `Basic ${btoa(`${WAKATIME_API_KEY}:`)}`,
    'Content-Type': 'application/json',
  },
});

// Get programming language stats
export const getLanguageStats = async () => {
  try {
    const response = await wakatimeClient.get('/users/current/stats/last_7_days');
    return response.data.data.languages;
  } catch (error) {
    console.error('Error fetching WakaTime language stats:', error);
    throw error;
  }
};

// Get editor stats
export const getEditorStats = async () => {
  try {
    const response = await wakatimeClient.get('/users/current/stats/last_7_days');
    return response.data.data.editors;
  } catch (error) {
    console.error('Error fetching WakaTime editor stats:', error);
    throw error;
  }
};

// Get project stats
export const getProjectStats = async () => {
  try {
    const response = await wakatimeClient.get('/users/current/stats/last_7_days');
    return response.data.data.projects;
  } catch (error) {
    console.error('Error fetching WakaTime project stats:', error);
    throw error;
  }
};

// Get operating system stats
export const getOSStats = async () => {
  try {
    const response = await wakatimeClient.get('/users/current/stats/last_7_days');
    return response.data.data.operating_systems;
  } catch (error) {
    console.error('Error fetching WakaTime OS stats:', error);
    throw error;
  }
};

// Get all WakaTime stats in one call
export const getAllStats = async () => {
  try {
    const response = await wakatimeClient.get('/users/current/stats/last_7_days');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching WakaTime stats:', error);
    throw error;
  }
};