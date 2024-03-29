import React from "react";
import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
