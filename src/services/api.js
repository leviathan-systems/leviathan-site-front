import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5030",
});

export default api;