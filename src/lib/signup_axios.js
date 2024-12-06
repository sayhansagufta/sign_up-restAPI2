import axios from "axios";

export const axiosInstance2 = axios.create({
  baseURL: import.meta.env.VITE_API_URL2,
});
