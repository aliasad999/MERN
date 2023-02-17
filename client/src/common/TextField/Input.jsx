import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./input.module.scss";
function Input({ type, name, onChange, options, value, children }) {
  const { register } = useFormContext();
  return (
    <input
      className={styles["input"]}
      type={type ? type : "text"}
      id={name}
      {...register(name, options)}
    />
  );
}

export default Input;
