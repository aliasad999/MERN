import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./box-wrapper.module.scss";
function BoxWrapper({ name, children }) {
  const style = {
    opacity: 0.7,
    fontSize: "1.5rem",
  };
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles["box-wrapper"]}>
      {children}
      {errors[name]?.message && <p style={style}>{errors[name]?.message}</p>}
    </div>
  );
}

export default BoxWrapper;
