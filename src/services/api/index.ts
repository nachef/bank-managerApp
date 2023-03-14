import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 15000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
