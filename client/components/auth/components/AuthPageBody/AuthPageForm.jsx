import React from "react";
import styles from "./auth-page-form.module.scss";
import ButtonBox from "./ButtonBox";
import InputBox from "@/components/common/InputBox";

function InputFields({ isSignin, setIsSignin, onSubmit }) {
  const options = {
    required: "This field is required",
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2>{isSignin ? "Sign in" : "Sign up"}</h2>
      {!isSignin && <InputBox name="name" label="Name" options={options} />}
      <InputBox type="email" name="email" label="Email" options={options} />
      <InputBox
        type="password"
        name="password"
        label="Password"
        options={options}
      />
      <ButtonBox isSignin={isSignin} />
      <p>
        Don't have an account?{" "}
        <span
          onClick={() => setIsSignin((prev) => !prev)}
          className={styles.link}
        >
          {isSignin ? "Sign up" : "Sign in"}
        </span>
      </p>
    </form>
  );
}

export default InputFields;
