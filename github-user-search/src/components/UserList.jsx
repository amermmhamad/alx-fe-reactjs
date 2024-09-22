// src/components/UserList.jsx
import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
