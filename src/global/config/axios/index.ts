import axios from 'axios';

export const API_BASE_URL = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
});
