import axios from "axios";

const api = axios.create({
  baseURL: "https://gurujihomes-backend.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;