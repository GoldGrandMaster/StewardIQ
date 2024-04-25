// apiService.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Assuming your backend runs on localhost:8000
});

export const fetchMessage = async () => {
  try {
    const response = await apiClient.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching message:', error);
    throw error;
  }
};