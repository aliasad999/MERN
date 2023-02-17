import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "@/context/AuthProvider";
function Navbar() {
  const { logout, user } = useAuthContext();
  const session = user;
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        LOGO
      </Link>
      <nav className={styles.nav}>
        <ul className={styles["nav-list"]}>
          {!session && (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}
          {session && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            <Link to="/about">About</Link>
          </li>
          {session ? (
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/auth/signin">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
