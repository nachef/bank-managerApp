import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-deploy-vtht.onrender.com/",
  timeout: 15000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
