import axios from "axios";

// Function to fetch users based on search criteria
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // Build the query string for advanced search
    let query = username ? `${username}` : "";

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    // GitHub API endpoint for searching users
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    // Return the list of users from the response
    return response.data.items; // .items contains the list of users
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
