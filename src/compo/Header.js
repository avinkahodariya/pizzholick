import React from "react";
import style from "../pizza.module.css";
const Header = () => {
  return (
    <>
      <div className={style.holic}>Welcome To Pizzaholic</div>
      <div className={style.Header}></div>
      <div className={style.menu}>Menu</div>
    </>
  );
};

export default Header;
