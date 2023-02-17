import React from "react";
import styles from "./menu.module.scss";
function Menu({ pageState }) {
  const { isUserInfo, setIsUserInfo } = pageState;
  function handleClick() {
    setIsUserInfo((prev) => !prev);
  }
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li
          onClick={handleClick}
          className={isUserInfo ? styles["active"] : ""}
        >
          Info
        </li>
        <li
          onClick={handleClick}
          className={!isUserInfo ? styles["active"] : ""}
        >
          Universities
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
