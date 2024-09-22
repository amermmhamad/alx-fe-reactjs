// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState(""); // To capture input value
  const [userData, setUserData] = useState(null); // For storing user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error before making a new request

    try {
      const data = await fetchUserData(username); // Call the API
      setUserData(data);
    } catch (error) {
      setError("Looks like we can’t find the user");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update input value
          placeholder="Search GitHub Users"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering based on state */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h3>{userData.name || userData.login}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
