import React, { memo } from "react";
import style from "../pizza.module.css";

const Footer = memo(() => {
  return (
    <div className={style.Footer}>
      <div>
        <p>ADDRESS </p>
        <p>570 8th Ave, New York, NY 10018 United States</p>
      </div>
      <div>
        <p>BOOK A TABLE</p>{" "}
        <p>
          Contact here to book table <p>(850) 435-4155</p>
        </p>
      </div>
      <div>
        <p> OPENING HOURS</p>
        <p>
          <p>Monday – Friday: 8am – 4pm</p>
          <p>Saturday: 9am – 5pm</p>
        </p>
      </div>
    </div>
  );
});

export default Footer;
