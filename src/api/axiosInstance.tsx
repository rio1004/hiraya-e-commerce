import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 30000,
});

axiosInstance.interceptors.request.use((config: any) => {
  try {
    return config;
  } catch (error) {
    Promise.reject(error);
  }
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
