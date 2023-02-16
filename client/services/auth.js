import axios from "axios";
import { getCookie } from "cookies-next";
export async function registerUser(req) {
  const response = await axios.post("/api/register", req);
  return response.data;
}
export async function loginUser(req) {
  const response = await axios.post("/api/login", req);
  console.log(response.data);
  return response.data;
}
export async function checkAuth() {
  const response = await axios.post("/");
  return response.data;
}
