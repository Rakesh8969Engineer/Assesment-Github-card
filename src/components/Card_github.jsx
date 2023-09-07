import React, { useState, useEffect } from 'react';
import "../Card_github.css"

const GitHubInfoCard = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
  
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Card">
      <img src={userData.avatar_url} alt="User Avatar" />
      <h2>{userData.login}</h2>
      <p>Name: {userData.name}</p>
      <p>Public Repos: {userData.public_repos}</p>
      <p>Public Gists: {userData.public_gists}</p>
      <p>Profile Created At: {new Date(userData.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default GitHubInfoCard;
