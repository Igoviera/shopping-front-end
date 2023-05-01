import axios from "axios";

const API_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 segundos
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "pt-BR",
  },
});

export default api;