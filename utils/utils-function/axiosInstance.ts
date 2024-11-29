import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:7000", // Adjust based on your API URL
  timeout: 5000, // Optional: Set a timeout
});

export default axiosInstance;
