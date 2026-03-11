import axios from "axios";

const API = axios.create({
  baseURL: "https://thryvindia-nz34.vercel.app//api/waitlist",
});

export default API;
