import React from "react";
import Twit from "./Twit";
import style from "../pizza.module.css";
import Pizzabox from "./Pizzabox";
import * as Al from "../assets/images";
import PizzaArray from "../global/PizzaArray";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import SearchBar from "material-ui-search-bar";
import axios from "axios";
import Index from "../reciepe/index";

const Midle = () => {
  const history = useHistory();
  const location = useLocation();

  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
    params: { ingr: "sandwitch" },
    headers: {
      "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
      "x-rapidapi-key": "18cf260672msh506f5be8367fc22p16f83bjsn5c14ca9e685d",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const pizza = PizzaArray;
  const redirectFunction = (id) => {
    // history.push(`${location.pathname}/pizzaedit/${id}`);
    console.log(location);
    return history.push(`/pizzaedit/${id}`);
  };

  return (
    <div className={style.black + style.height}>
      {/* <SearchBar
        style={{ width: "20%", margin: " 0 auto " }}
        placeholder="Search Reciepe"
      /> */}
      <Index />
      <div className={style.midleflex}>
        {/* <SearchBar
      // value={this.state.value}
      // onChange={(newValue) => this.setState({ value: newValue })}
      // onRequestSearch={() => doSomethingWith(this.state.value)}
      /> */}
        <div className={style.Midle}>
          {PizzaArray.map((e) => {
            return <Pizzabox redirectFunction={redirectFunction} e={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Midle;
