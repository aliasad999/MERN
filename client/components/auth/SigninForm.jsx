import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Layout from "../Layout/Layout";
import styles from "./auth-form.module.scss";
import Hero from "./Hero";
function AuthForm() {
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
        <h2>Sign in</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="" id="password" />
        </div>
        <div className={styles["button-box"]}>
          <button className="button btn-credentials">Sign in</button>
          <button onClick={handleClick} className="button btn-google">
            Continue with Google
          </button>
        </div>
        <p>
          Don't have an account? <Link href="/auth/signup">Sign up</Link>
        </p>
      </form>
    </main>
  );
}

export default AuthForm;
