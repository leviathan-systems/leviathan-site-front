import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:28698",
});

export default api;