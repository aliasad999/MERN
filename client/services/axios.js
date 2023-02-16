import axios from "axios";
import { getCookie } from "cookies-next";

let refresh = false;
export const BASE_URL = (axios.defaults.baseURL = "http://localhost:3001");
export const interceptor = axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    console.log(error);
    if (error.response.status === 401 && !refresh) {
      console.log("im in");
      refresh = true;
      const response = await axios.post("/api/token", {
        refreshToken: getCookie("refresh"),
        email: getCookie("email"),
      });
      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        return axios(error.config);
      }
    }
    if (error.response.status === 403 && !refresh) {
      refresh = true;
      const response = await axios.post("/api/token", {
        refreshToken: getCookie("refresh"),
        email: getCookie("email"),
      });
      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  }
);
