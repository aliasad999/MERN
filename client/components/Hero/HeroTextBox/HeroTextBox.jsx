import React from "react";
import { motion } from "framer-motion";
import Button from "../../../common/Button";
import styles from "./hero-text-box.module.scss";
const boxVariants = {
  initial: { x: "-100", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { staggerChildren: 0.5, ease: "easeInOut", duration: 1 },
  },
};
function HeroTextBox() {
  return (
    <motion.div
      className={styles["hero__text-box"]}
      variants={boxVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1 variants={boxVariants}>Welcome to EggAcademy,</motion.h1>
      <motion.p variants={boxVariants}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        impedit nemo, ut et quasi harum fugiat beatae tenetur qui optio tempore
        earum quod. Recusandae nostrum sed adipisci sapiente, fuga totam.
      </motion.p>
      <Button href="/api/auth/signin">Sign in now</Button>
    </motion.div>
  );
}

export default HeroTextBox;
