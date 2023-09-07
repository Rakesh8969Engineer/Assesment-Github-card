import React, { useState } from 'react';
import './App.css';
import Card_github from './components/Card_github';

function App() {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="App">
    <h1>Github User Info</h1>
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={handleInputChange}
      />
      <button>Submit</button>
    </div>
    {username && <Card_github username={username} />}
  </div>
  );
}

export default App;
