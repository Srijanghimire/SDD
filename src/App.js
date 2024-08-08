// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import MainApp from './components/MainApp';
import AdminPanel from './components/AdminPanel';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import { getUsers, addUser, updateUser } from './api';
import './styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUsers();
    }
  }, [isLoggedIn]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleAddUser = async (newUser) => {
    try {
      await addUser(newUser);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProfile = async (updatedUser) => {
    try {
      await updateUser(updatedUser);
      setCurrentUser(updatedUser);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn && <Navbar userRole={currentUser.role} />}
        <Routes>
          <Route path="/" element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
          } />
          <Route path="/dashboard" element={
            isLoggedIn ? (
              <MainApp
                onLogout={handleLogout}
                currentUser={currentUser}
              />
            ) : (
              <Navigate to="/" />
            )
          } />
          <Route path="/admin" element={
            isLoggedIn && currentUser.role === 'admin' ? (
              <AdminPanel users={users} onAddUser={handleAddUser} />
            ) : (
              <Navigate to="/dashboard" />
            )
          } />
          <Route path="/profile" element={
            isLoggedIn ? (
              <UserProfile user={currentUser} onUpdateProfile={handleUpdateProfile} />
            ) : (
              <Navigate to="/" />
            )
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;