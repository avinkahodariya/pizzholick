import React from "react";
import Ingrediants from "./Ingrediants";
import styles from "./pizzaedit.module.css";
import Cart from "./Cart";
import { useHistory } from "react-router-dom";
const Nav = (props) => {
  let history = useHistory();

  const redirectToCart = () => {
    history.push({ pathname: "/cart" });
  };
  return (
    <div>
      <Ingrediants
        ingre={props.ingre}
        data={props.data}
        reciepe={props.checkedItems}
        reciepe={props.checkedItems}
        handleChange={props.handleChange}
      />
      {/* <button className={styles} onClick={redirectToCart}>
        Buy It...
      </button>
      <button className={styles} onClick={props.AddToCart}>
        add to cart
      </button> */}
    </div>
  );
};

export default Nav;
