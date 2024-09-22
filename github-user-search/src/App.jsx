// src/App.jsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import { searchGitHubUsers } from "./services/githubAPI";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    const result = await searchGitHubUsers(query);
    setUsers(result);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserList users={users} />
    </div>
  );
};

export default App;
