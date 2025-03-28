import axios from 'axios';

const API = axios.create({
  baseURL: 'https://monkeytype-9mp4.onrender.com/api',
});

// You can add interceptors to attach tokens automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
