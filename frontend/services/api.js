import axios from "axios";

const API = axios.create({
  baseURL: "https://thryvindia.onrender.com/api/waitlist",
});

export default API;
