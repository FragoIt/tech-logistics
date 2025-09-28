import axios from 'axios';

// Create axios instance with base URL from environment variable
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds timeout for cold starts
});

// Request interceptor to add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const token = JSON.parse(userInfo).token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Handle timeout errors (backend cold start)
    if (error.code === 'ECONNABORTED' && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log('Backend is starting up, retrying...');
      
      // Wait 3 seconds and retry
      await new Promise(resolve => setTimeout(resolve, 3000));
      return axiosInstance(originalRequest);
    }
    
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('userInfo');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;