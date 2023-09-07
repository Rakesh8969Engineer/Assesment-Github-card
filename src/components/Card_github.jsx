import React, { useState, useEffect } from 'react';
import '../Card_github.css'

const Card_github = ({ username }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
      .catch((error) => console.error(error));
  }, [username]);

  if (!userInfo) {
    return <div>Gettind Data...</div>;
  }
  return (
    <div className="Card">
      <img src={userInfo.avatar_url} alt="User Avatar" />
      <h2>{userInfo.login}</h2>
      <p>Name: {userInfo.name}</p>
      <p>Public Repos: {userInfo.public_repos}</p>
      <p>Public Gists: {userInfo.public_gists}</p>
      <p>Profile Created At: {new Date(userInfo.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default Card_github;
