// src/components/AdminPanel.js
import React, { useState } from 'react';

function AdminPanel({ users, onAddUser }) {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleAddUser = () => {
    const newUser = { username: newUsername, password: newPassword, email: newEmail, role: 'user' };
    onAddUser(newUser);
    setNewUsername('');
    setNewPassword('');
    setNewEmail('');
  };

  return (
    <div className="admin-panel">
      <h2>User Management</h2>
      <div className="add-user-form">
        <input
          type="text"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;