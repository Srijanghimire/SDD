// src/components/UserProfile.js
import React, { useState } from 'react';

function UserProfile({ user, onUpdateProfile }) {
  const [email, setEmail] = useState(user.email);

  const handleUpdateProfile = () => {
    onUpdateProfile({ ...user, email });
  };

  return (
    <div className="user-profile">
      <h2>My Profile</h2>
      <div className="profile-info">
        <p>Username: {user.username}</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button onClick={handleUpdateProfile}>Update Profile</button>
      </div>
    </div>
  );
}

export default UserProfile;