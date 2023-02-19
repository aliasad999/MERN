import axios from "axios";

const BASE_URL = "http://localhost:3001";
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});
