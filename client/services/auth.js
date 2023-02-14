import axios from "axios";

export async function registerUser(req) {
  const response = await axios.post("http://localhost:3001/api/register", req);
  return response.data;
}
export async function loginUser(req) {
  const response = await axios.post("http://localhost:3001/api/login", req);
  console.log(response.data);
  return response.data;
}
