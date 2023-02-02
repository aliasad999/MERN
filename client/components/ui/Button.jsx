import React from "react";
import Link from "next/link";
import styles from "./button.module.scss";
function signInButton({ children, href }) {
  return (
    <Link className={styles["btn-signin"]} href={href}>
      {children}
    </Link>
  );
}

export default signInButton;
