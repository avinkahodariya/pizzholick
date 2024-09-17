import React, { useState } from "react";
import styles from "./pizzaedit.module.css";

const Pizzanav = (props) => {
  return (
    <div>
      <div className={styles.navtitle}>
        <div>{props.name}</div>
      </div>
      <div className={styles.navimage}>
        <img src={props.image} />
      </div>
      <div className={styles.navcheck}>
        <div className={styles.navingre}>
          {props.ingredients.map((ingre) => {
            return (
              <div className={styles.ingre}>
                {ingre}
                <input
                  type="checkbox"
                  name={ingre}
                  value={ingre}
                  onChange={props.handleChange}
                />
              </div>
            );
          })}
          <button> SUBMIT </button>
        </div>
      </div>
    </div>
  );
};

export default Pizzanav;
