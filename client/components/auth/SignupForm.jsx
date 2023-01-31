import Link from "next/link";
import React from "react";
import styles from "./auth-form.module.scss";
import Hero from "./Hero";
function SignupForm() {
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
        <h2>Sign up</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="" id="password" />
        </div>
        <div className={styles["button-box"]}>
          <button className="button btn-credentials">Sign up</button>
          <button onClick={handleClick} className="button btn-google">
            Continue with Google
          </button>
        </div>
        <p>
          already have an account? <Link href="/auth/signin">Sign in</Link>
        </p>
      </form>
    </main>
  );
}

export default SignupForm;
