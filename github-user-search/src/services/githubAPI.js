// src/services/githubAPI.js
import axios from "axios";

// Base URL and API key from .env file
const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;
const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const searchGitHubUsers = async (query) => {
  const config = {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  };

  try {
    const response = await axios.get(`${GITHUB_API_URL}/search/users`, {
      params: { q: query },
      ...config,
    });
    return response.data.items; // Return the list of users
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
