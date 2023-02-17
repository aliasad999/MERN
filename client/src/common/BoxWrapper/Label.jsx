import React from "react";
import styles from "./label.module.scss";
function Label({ name, label }) {
  return (
    <label className={styles["input-box__label"]} htmlFor={name}>
      {label}
    </label>
  );
}

export default Label;
