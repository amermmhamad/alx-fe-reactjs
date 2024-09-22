// src/services/githubService.js
import axios from "axios";

// Function to fetch user data from the GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data; // Return user data from the API
  } catch (error) {
    throw new Error("User not found");
  }
};
