import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { axiosInstance } from "@/api/axios";

const AuthContext = createContext({});
const getAuthTokens = () => {
  const tokens = localStorage.getItem("authTokens");
  if (tokens) {
    return JSON.parse(tokens);
  } else {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authTokens, setAuthTokens] = useState(() => getAuthTokens());
  const [user, setUser] = useState(() =>
    getAuthTokens() ? jwt_decode(getAuthTokens().accessToken) : null
  );
  const [loading, setLoading] = useState(true);
  const loginUser = async (payload) => {
    const response = await axiosInstance.post("/api/login", payload);
    if (response.status === 200) {
      setAuthTokens(response.data);
      setUser(jwt_decode(response.data.accessToken));
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      localStorage.setItem("email", JSON.stringify(payload.email));
      navigate("/dashboard");
    } else {
      alert("something went wrong");
    }
  };
  const logout = async () => {
    const response = await axiosInstance.post("/api/logout", {
      email: JSON.parse(localStorage.getItem("email")),
    });
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("email");
  };
  const refreshAccessToken = async () => {
    const response = await axiosInstance.post("/api/token", {
      refreshToken: authTokens?.refreshToken,
      email: JSON.parse(localStorage.getItem("email")),
    });
    if (response.status === 200) {
      localStorage.setItem(
        "authTokens",
        JSON.stringify({
          ...authTokens,
          accessToken: response.data.accessToken,
        })
      );
      setAuthTokens((prev) => {
        return { ...prev, accessToken: response.data.accessToken };
      });
      setUser(() => {
        return jwt_decode(response.data.accessToken);
      });
      setLoading(false);
      return response.data.accessToken;
    } else {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem("authTokens");
      localStorage.removeItem("email");
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    if (!authTokens || loading) {
      refreshAccessToken();
      return;
    }
  }, []);

  const contextValues = {
    authTokens,
    user,
    loginUser,
    refreshAccessToken,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
