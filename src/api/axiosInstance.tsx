import axios from "axios";
import { useAuthStore } from "@/stores/auth/useAuth";
export const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 30000,
});

axiosInstance.interceptors.request.use((config) => {
  try {
    const token = useAuthStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    Promise.reject(error);
  }
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  },
);
