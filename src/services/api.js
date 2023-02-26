import axios from "axios";

const api = axios.create({
  baseURL: "https://api.leviathan.dev.br/",
});

export default api;