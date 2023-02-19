import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";
function signInButton({ children, href, type, onClick }) {
  if (!type) {
    return (
      <Link className={styles["btn-signin"]} to={href}>
        {children}
      </Link>
    );
  }
  if (type === "submit") {
    return (
      <button
        type="submit"
        onClick={onClick || null}
        className={styles["btn-signin"]}
      >
        {children}
      </button>
    );
  }
}

export default signInButton;
