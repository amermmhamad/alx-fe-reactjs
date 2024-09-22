// src/services/githubService.js
import axios from "axios";

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // Construct the query based on the input parameters
    let query = `q=${username ? username : ""}`;
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    // Call the GitHub Search API
    const response = await axios.get(
      `https://api.github.com/search/users?${query}`
    );
    return response.data.items[0]; // Return the first matched user for simplicity
  } catch (error) {
    throw new Error("Error fetching data from GitHub API");
  }
};
