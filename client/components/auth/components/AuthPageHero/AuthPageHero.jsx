import React from "react";
import styles from "./auth-page-hero.module.scss";
function FormHero() {
  return (
    <div className={styles.hero}>
      <div className={styles["hero__text-box"]}>
        <h3>Welcome to eggAcademy</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          minima nisi perferendis quam aperiam aspernatur atque eius
          exercitationem. Quibusdam voluptas consequatur modi hic iste deleniti
          quas sapiente magni iure neque.
        </p>
      </div>
    </div>
  );
}

export default FormHero;
