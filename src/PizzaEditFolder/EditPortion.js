import React from "react";
import * as All from "../assets/images.js";
import styles from "./pizzaedit.module.css";
import EditPizzaInfo from "./EditPizzaInfo";

const Pizza_Edit_Portion = (props) => {
  var i = [];

  i = props.reciepe.map((e) => {
    return (
      <div className={styles.absolute}>
        <img
          src={e[1][0][1]}
          name={props.data.name}
          className={styles.imagespan}
        />
      </div>
    );
  });

  return (
    <>
      <div className={styles.PizzaImageMaking}>
        <img src={All.pizzaedit} className={styles.PizzaMainImage} />

        {i}
      </div>
    </>
  );
};

export default Pizza_Edit_Portion;
