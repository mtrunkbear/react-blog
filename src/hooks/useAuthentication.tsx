import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
const API_URL = import.meta.env.VITE_API_URL;
const APP_URL = import.meta.env.VITE_APP_URL;

export const useAuthentication = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate()

  const handleLogin = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = APP_URL;
  };

  const handleToken = () => {
    const token = new URLSearchParams(window.location.search).get('token');
    if (token != null) {
      setToken(token);
      localStorage.setItem('token', token);
      navigate("/");
     
    }
  };

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage != null && tokenFromStorage !== 'null') {
      setToken(tokenFromStorage);
      
    } else {
      handleToken();
      
    }
  }, [token]);

  return { isLoggedIn: !!token, handleLogin, handleLogout };
};
