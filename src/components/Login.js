// src/components/Login.js
import React, { useState } from 'react';
import './login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      onLogin();
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="login-container">
      <h1><i className="fas fa-capsules"></i> MediTrack</h1>
      <h2>Login to Your Account</h2>
      <div className="input-group">
        <i className="fas fa-user"></i>
        <input 
          type="text" 
          className="login-input" 
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <i className="fas fa-lock"></i>
        <input 
          type="password" 
          className="login-input" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  );
}

export default Login;