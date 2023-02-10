import Image from "next/image";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./input-box.module.scss";

function InputBox({ name, options, label, type }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const style = {
    opacity: 0.7,
    fontSize: "1.5rem",
  };
  return (
    <div className={styles["input-box"]}>
      <label htmlFor={name}>{label}</label>
      <input type="radio" {...register(name, options)} name={name} id={name} />
      {errors[name]?.message && <p style={style}>{errors[name]?.message}</p>}
    </div>
  );
}

export default InputBox;
