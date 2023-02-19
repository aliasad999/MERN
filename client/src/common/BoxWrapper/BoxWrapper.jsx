import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./box-wrapper.module.scss";
import { AnimatePresence, motion } from "framer-motion";
function BoxWrapper({ name, children }) {
  const variants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: { default: { ease: "linear" } },
      },
    },
    exit: { opacity: 0, y: 10 },
  };
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles["box-wrapper"]}>
      {children}
      <AnimatePresence>
        {errors[name]?.message && (
          <motion.p
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.error}
          >
            {errors[name]?.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BoxWrapper;
