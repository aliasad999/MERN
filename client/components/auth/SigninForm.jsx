import { signIn } from "next-auth/react";
import React, { useState } from "react";
import styles from "./auth-form.module.scss";
import Hero from "./FormHero";
function AuthForm() {
  const [isSignin, setIsSignin] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleClick() {
    signIn("google");
  }
  return (
    <main className={styles.main}>
      <Hero />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>{isSignin ? "Sign in" : "Sign up"}</h2>
        {!isSignin && (
          <div>
            <label htmlFor="name">Name</label>
            <input required type="text" name="" id="name" />
          </div>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input required type="email" name="" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input required type="password" name="" id="password" />
        </div>
        <div className={styles["button-box"]}>
          <button className="button btn-credentials">
            {isSignin ? "Sign in" : "Sign up"}
          </button>
          <button
            type="button"
            onClick={handleClick}
            className="button btn-google"
          >
            Continue with Google
          </button>
        </div>
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
    </main>
  );
}

export default AuthForm;
