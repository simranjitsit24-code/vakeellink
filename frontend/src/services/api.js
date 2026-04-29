import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const legalSearch = async (query, options = {}) => {
  try {
    const response = await api.post('/api/v1/query', {
      query,
      top_k: options.topK || 5,
      include_chunks: true,
      ...options
    });
    return response.data;
  } catch (error) {
    console.error('Legal search error:', error);
    throw error;
  }
};

export default api;
