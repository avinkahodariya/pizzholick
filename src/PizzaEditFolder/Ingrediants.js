import React from "react";
import styles from "./pizzaedit.module.css";
import Input from "../global/Input";

const Ingrediants = (props) => {
  let i = [];

  let ingrediants = props.data.ingredients;

  // if (props.ingre !== undefined)
  i = ingrediants.map((e) => {
    return (
      <div className={styles.subingreimage}>
        <label className={styles.border}>
          <img
            src={e[1]}
            name={e[0]}
            onClick={props.handleChange}
            className={styles.pizzaingreimage}
          />
          <Input
            type="checkbox"
            name={e[0]}
            onChange={props.handleChange}
            id="cb1"
          />
        </label>
      </div>
    );
  });

  return <div className={styles.mainingreimagecheckbox}>{i}</div>;
};

export default Ingrediants;
