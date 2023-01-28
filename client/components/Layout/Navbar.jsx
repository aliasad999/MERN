import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { getSession } from "next-auth/react";
function Navbar() {
  const [session, setSession] = useState(false);
  useEffect(() => {
    getSession().then((res) => {
      if (res) {
        setSession(true);
      } else setSession(false);
    });
  });
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
              <Link href="/api/auth/signout">Logout</Link>
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
