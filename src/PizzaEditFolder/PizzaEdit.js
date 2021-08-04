import React, { useState, useEffect } from "react";
import NavForIngrediants from "./NavForIngrediants";
import { connect } from "react-redux";
import EditPortion from "./EditPortion";
import styles from "./pizzaedit.module.css";
import Pizzabox from "../compo/Pizzabox";
import { useHistory } from "react-router-dom";
import * as All from "../assets/images";
import Footer from "../global/Footer";
import Button from "../global/Button";

import { useParams } from "react-router-dom";

const PizzaEdit = (props) => {
  const [checkedItems, setCheckedItems] = useState([]);
  var { id } = useParams();
  let history = useHistory();
  var pizzaid = [];

  let pizaadata = JSON.parse(localStorage.getItem("pizzastore"))[0];
  console.log(JSON.parse(localStorage.getItem("pizzastore")));
  pizzaid = pizaadata.filter((e) => {
    if (e.id == id) {
      return e;
    }
    console.log(pizzaid);
  });
  console.log(pizzaid);

  console.log(pizzaid);

  const data = {
    ingredients: pizzaid[0].ingredients,
    price: pizzaid[0].price,
    name: pizzaid[0].name,
    id: pizzaid[0].id,
    image: pizzaid[0].image,
    reciepe: checkedItems,
    username: props.username,
  };

  var ingredients = pizzaid[0].ingredients;
  var price = pizzaid[0].price;
  var name = pizzaid[0].name;
  var id = pizzaid[0].id;
  var image = pizzaid[0].image;
  var reciepe = checkedItems;
  var username = props.username;

  const handleChange = (event) => {
    console.log(checkedItems, event);

    if (event.target.checked) {
      console.log(checkedItems);

      console.log(...checkedItems);

      setCheckedItems([
        ...checkedItems,
        [
          event.target.name,
          ingredients.filter((e) => {
            if (event.target.name == e[0]) {
              return e[1];
            }
          }),
        ],
      ]);
    } else {
      let name = event.target.getAttribute("name");

      setCheckedItems(checkedItems.filter((item) => item[0] !== name));
    }
  };

  const addToCart = (data) => {
    let item = JSON.parse(localStorage.getItem("item"));
    if (item == null) {
      item = [];
      item.push(data);
      console.log(item);
      localStorage.setItem("item", JSON.stringify(item));
    } else {
      item.push(data);
      localStorage.setItem("item", JSON.stringify(item));
    }

    props.addcart(data);
  };
  const gotocart = () => {
    console.log("asdfg");
    history.push(`/cart`);
  };
  return (
    <>
      <div className={styles.flex}>
        <p className={styles.pizzatitle}>
          Let`s Crete Your Own Pizza
          <img
            src={All.icon}
            style={{
              width: "50px",
              height: "100%",
              float: "right",
              marginRight: "5px",
              backdropFilter: "bllur(10px)",
              backgroundColor: "#313131",
            }}
            onClick={gotocart}
          />
        </p>
        <div className={styles.pizzarelative}>
          {" "}
          <EditPortion
            reciepe={checkedItems}
            name={name}
            price={price}
            ingreinfo={ingredients}
          />
        </div>

        <NavForIngrediants
          ingre={ingredients}
          price={price}
          name={name}
          id={id}
          image={image}
          handleChange={handleChange}
        />

        <Button
          name={"Buy Now..."}
          className={styles.center}
          Handleclick={props.buynow}
        />
        <Button
          name={"Add To Cart.."}
          className={styles.center}
          Handleclick={() => addToCart(data)}
        />

        <Footer />
      </div>
    </>
  );
};

const mapstateToprops = (state) => {
  return {
    username: state.login.username,
    item: state.addcart.item,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    addcart: (payload) => {
      dispatch({
        type: "addcart",
        payload,
      });
    },
  };
};

export default connect(mapstateToprops, mapDispatchToprops)(PizzaEdit);
