import React from "react";
import styles from "./pizza.module.css";

const navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navdiv}>
        <span>About</span>
        <span>Contact</span>
        <span>Menu</span>
        <span>Home</span>
      </div>
    </div>
  );
};

export default navbar;
