import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { getCookie, deleteCookie } from "cookies-next";
import axios from "axios";
import { checkAuth } from "@/services/auth";
function Navbar() {
  const [session, setSession] = useState(false);
  useEffect(() => {
    checkAuth().then((res) => (res ? setSession(true) : setSession(false)));
  }, []);
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        LOGO
      </Link>
      <nav className={styles.nav}>
        <ul className={styles["nav-list"]}>
          {!session && (
            <li>
              <Link href="/">Home</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            <Link href="/about">About</Link>
          </li>
          {session ? (
            <li>
              <Link
                href="/"
                onClick={() => {
                  axios
                    .post("http://localhost:3001/api/logout", {
                      refreshToken: getCookie("refresh"),
                      email: getCookie("email"),
                    })
                    .then((res) => {
                      deleteCookie("refresh");
                      deleteCookie("email");
                      console.log(res);
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/api/auth/signin">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
