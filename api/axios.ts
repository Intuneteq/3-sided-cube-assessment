import axios, { InternalAxiosRequestConfig } from "axios";

const token = "511|jLZ53ObelAjjzGw4gy2xq9DNXUGuBjQ3FOVzDAcle59d0271";

const baseURL = "https://cube-academy-api.cubeapis.com/api";

export const axiosClient = axios.create({
  baseURL,
});

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
