import axios from "axios";

const unifiedAxiosInstance = axios.create({
  baseURL: "https://www.sourabratabose.dev/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  maxRedirects: 0
});


export default unifiedAxiosInstance;
