import Image from "next/image";
import React from "react";
import styles from "./label.module.scss";
function Label({ name, label, type, src }) {
  return (
    <label
      className={
        type === "file"
          ? styles["input-box__label--file"]
          : styles["input-box__label"]
      }
      htmlFor={name}
    >
      {label}
      {type === "file" && (
        <Image
          className={styles[`${src.default ? "camera" : "preview"}`]}
          src={src.src}
          width={100}
          height={100}
          alt="image preview"
        />
      )}
    </label>
  );
}

export default Label;
