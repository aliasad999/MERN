import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./input.module.scss";
function Upload({ name, options, onChange }) {
  const { register } = useFormContext();
  return (
    <input
      id={name}
      name="picture"
      type="file"
      {...register(name, { ...options, onChange: onChange })}
      className={styles["input"]}
    />
  );
}

export default Upload;
