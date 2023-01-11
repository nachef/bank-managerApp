import axios from "axios";

const api = axios.create({
  baseURL: process.env.API,
  timeout: 15000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
