import React from "react";
import styles from "./button-box.module.scss";
function ButtonBox({ isSignin }) {
  return (
    <div className={styles["button-box"]}>
      <button className={styles.button}>
        {isSignin ? "Sign in" : "Sign up"}
      </button>
      {/* <button
        type="button"
        onClick={() =>  }
        className={styles.button}
      >
        Continue with Google
      </button> */}
    </div>
  );
}

export default ButtonBox;
