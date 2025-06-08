import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = BASE_URL.startsWith('http') ? BASE_URL : `https://${BASE_URL}/api`;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  // Ensure cookies are sent and received
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});
