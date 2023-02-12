import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./input.module.scss";
function Input({ type, name, onChange, options, value, children }) {
  const { register } = useFormContext();
  if (type !== "file")
    return (
      <input
        className={styles["input"]}
        type={type ? type : "text"}
        id={name}
        {...register(name, options)}
      />
    );
  if (type === "file") {
    return (
      <input
        // type="file"
        id={name}
        name="picture"
        type="file"
        {...register(name, { ...options, onChange: onChange })}
        className={styles["input"]}
      />
    );
  }
}

export default Input;
