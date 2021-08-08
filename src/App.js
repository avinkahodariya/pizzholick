import React from "react";
import Header from "./compo/Header";
import Midle from "./compo/Midle";
import Footer from "./global/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import PizzaArray from "./global/PizzaArray";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("componnat mounted");

    let pizzastore = JSON.parse(localStorage.getItem("pizzastore"));
    if (pizzastore == null || pizzastore == undefined) {
      let pizzastore = [];
      pizzastore.push(PizzaArray);
      localStorage.setItem("pizzastore", JSON.stringify(pizzastore));
    }
  }, []);

  return (
    <>
      <Header />
      <Midle />
      <Footer />
    </>
  );
};

export default App;
