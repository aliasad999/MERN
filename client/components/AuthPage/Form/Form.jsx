import React from "react";
import styles from "./form.module.scss";
import ButtonBox from "./ButtonBox";
import TextField from "@/common/TextField/TextField";

function Form({ isSignin, setIsSignin, onSubmit }) {
  const options = {
    required: "This field is required",
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2>{isSignin ? "Sign in" : "Sign up"}</h2>
      {!isSignin && (
        <>
          <TextField name="firstName" label="Fist Name: " options={options} />
          <TextField name="lastName" label="Last Name: " options={options} />
        </>
      )}
      <TextField type="email" name="email" label="Email: " options={options} />
      <TextField
        type="password"
        name="password"
        label="Password: "
        options={{
          ...options,
          ...(!isSignin && { minLength: { value: 10, message: "Too short" } }),
        }}
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

export default Form;
