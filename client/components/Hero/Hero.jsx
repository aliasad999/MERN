import React from "react";
import styles from "./hero.module.scss";
import HeroTextBox from "./components/HeroTextBox";
import KnowledgeSvg from "../svg/KnowledgeSvg";
function Hero() {
  return (
    <section className={styles.hero}>
      <HeroTextBox />
      <div className={styles["hero-imgbox"]}>
        <KnowledgeSvg />
      </div>
    </section>
  );
}

export default Hero;
