import React from "react";
import s from "../pizza.module.css";
import axios from "axios";

const HotelBox = (props) => {
  const options = {
    method: "POST",
    url: "https://zestful.p.rapidapi.com/parseIngredients",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "zestful.p.rapidapi.com",
      "x-rapidapi-key": "18cf260672msh506f5be8367fc22p16f83bjsn5c14ca9e685d",
    },
    data: {
      ingredients: [
        "2 1/2 tablespoons finely chopped parsley",
        "3 tablespoons extra-virgin olive oil, or more to taste",
        "1 1/2 tbsp cinnamon",
      ],
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

  return (
    <div className={s.hotelbox}>
      {console.log(props)}
      <p>{props.data.name}</p>
      <p>{props.data.adress}</p>
    </div>
  );
};

export default HotelBox;
