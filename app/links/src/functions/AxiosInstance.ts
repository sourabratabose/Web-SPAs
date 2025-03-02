import axios from "axios";

const unifiedAxiosInstance = axios.create({
  baseURL: "https://www.sourabratabose.dev/public/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  },
})

export default unifiedAxiosInstance;