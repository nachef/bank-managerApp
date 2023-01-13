import axios from "axios";

const api = axios.create({
  baseURL: "https://api-teste.dustshop.net",
  timeout: 15000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
