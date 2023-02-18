import axios from "axios";

const api = axios.create({
  baseURL: "http://181.215.135.72:81",
});

export default api;