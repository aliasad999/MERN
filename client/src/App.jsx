import React from "react";
import Home from "../src/pages/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/About";
import Signin from "./pages/signin";
import { AuthProvider } from "./context/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth/signin" element={<Signin />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
