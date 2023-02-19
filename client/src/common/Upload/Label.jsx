import React from "react";
import styles from "./label.module.scss";
function Label({ src, label, name }) {
  return (
    <label className={styles["label"]} htmlFor={name}>
      {label}
      <img
        className={styles[`${src.default ? "camera" : "preview"}`]}
        src={src.src}
        width={100}
        height={100}
        alt="image preview"
      />
    </label>
  );
}

export default Label;
