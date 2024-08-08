// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Adjust this if your backend runs on a different port or IP
});

// Users
export const getUsers = () => api.get('/users');
export const addUser = (user) => api.post('/users', user);
export const updateUser = (user) => api.put(`/users/${user.id}`, user);