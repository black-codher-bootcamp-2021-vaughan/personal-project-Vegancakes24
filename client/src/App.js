import React, { useState, useEffect } from "react";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllUsers } from "./services/profileService";

function App() {
  const [users, setUsers]= useState(null);

  useEffect(() => {
    async function getUsers() {
      if (!users) {
        const response = await getAllUsers();
        setUsers(response);
      }
    }

    getUsers();
  }, [users]);

  const renderUser = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.name} 
          ${user.last_name}`}
        </h3>
        <p>{user.location}</p>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {users && users.length > 0 ? (
          users.map((profile) => renderUser(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
