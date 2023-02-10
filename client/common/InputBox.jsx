import Image from "next/image";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./input-box.module.scss";

function InputBox({ name, options, label, type }) {
  const [imgSrc, setImgSrc] = useState("/svg/camera-icon.svg");
  function handleChange(e) {
    console.log("handling");
    getImgData(e.target.files[0]);
  }
  function getImgData(files) {
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        setImgSrc(this.result);
      });
    }
  }
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
            alt="camera icon"
            src={imgSrc}
            height="100"
            width="100"
            priority
            className={
              imgSrc === "/svg/camera-icon.svg" ? styles.camera : styles.preview
            }
          />
        )}
      </label>
      <input
        id={name}
        type={type ? type : "text"}
        className={styles["input-box__input"]}
        {...register(name, options)}
        {...(type === "file" && { onChange: handleChange })}
      />
      {errors[name]?.message && <p style={style}>{errors[name]?.message}</p>}
    </div>
  );
}

export default InputBox;
