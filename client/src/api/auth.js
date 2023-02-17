import { axiosInstance } from "@/api/axios";
export async function registerUser(req) {
  const response = await axiosInstance.post("/api/register", req);
  return response.data;
}
export async function checkAuth() {
  const response = await axiosInstance.post("/");
  return response.data;
}
