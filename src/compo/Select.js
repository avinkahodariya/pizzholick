import { Style } from "@material-ui/icons";
import React from "react";
import s from "../pizza.module.css";
import hotel from "./hotelArray.js";
import HotelBox from "./HotelBox";

const Select = (props) => {
  return (
    <div className={s.mainreservation}>
      <p> Hotel Table Reservation</p>
      <div className={s.mainhotelbox}>
        {" "}
        {hotel.map((val) => {
          return <HotelBox data={val} />;
        })}
      </div>
    </div>
  );
};

export default Select;
