import axios from "axios";

const api = axios.create({
  baseURL: "http://144.126.150.110:6589",
  timeout: 15000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
