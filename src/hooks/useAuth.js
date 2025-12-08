import api from '../api/authApi';
import { useState } from 'react';
const useAuth = () => {
  const [loading, setloading] = useState(false);
  const sendOtp = async (email) => {
    setloading(true);
    try {
      const response = await api.post('/send-otp', { email });
      setloading(false);
      return { success: true, message: 'OTP sent successfully' };
    } catch (error) {
        setloading(false);
        return { success: false, message: error?.response?.data?.message || 'Failed to send OTP' };
    }
  };
  const verifyOtp = async (data) => {
    setloading(true);
    try {
        const response = await api.post('/register', data);
        setloading(false);
        return { success: true, data: response.data };
    } catch (error) {
        setloading(false);
        return { success: false, message: error?.response?.data?.message || 'OTP verification failed' };
    }
};

const login = async ({emailOrUsername , password}) => {
    setloading(true);
    try {
        const response = await api.post('/login', { emailOrUsername, password });
        setloading(false);
        return { success: true, data: response.data };
    } catch (error) {
        setloading(false);
        return { success: false, message: error?.response?.data?.message || 'Login failed' };
    }

};

  return {
    loading,
    sendOtp,
    verifyOtp,
    login
  };
};

export default useAuth;
